import subprocess
import sys
import os
import time

# --- FUNKCJA DO INSTALACJI BIBLIOTEK ---
def install(package):
    print(f"Instaluję: {package}...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

# --- SPRAWDŹ I ZAINSTALUJ BRAKUJĄCE BIBLIOTEKI ---
required = ["vosk", "pyaudio", "pyserial"]
missing = []

for lib in required:
    try:
        __import__(lib)
    except ImportError:
        missing.append(lib)

if missing:
    print(f"Brakuje bibliotek: {missing}")
    for lib in missing:
        install(lib)
    print("\nZainstalowano. Uruchom skrypt ponownie.")
    sys.exit(0)

# --- DOPIERO TERAZ IMPORTUJEMY RESZTĘ ---
import vosk
import pyaudio
import json
import serial
import serial.tools.list_ports

# --- KONFIGURACJA ---
MODEL_NAME = "vosk-model-small-pl-0.22"
BAUDRATE = 115200

# Lista miejsc, gdzie skrypt ma szukać modelu
POSSIBLE_PATHS = [
    MODEL_NAME,                                              # obok skryptu
    os.path.join(os.getcwd(), MODEL_NAME),                   # w katalogu uruchomienia
    os.path.join(os.path.expanduser("~"), "Desktop", MODEL_NAME),  # na pulpicie
    os.path.join(os.path.expanduser("~"), "Pulpit", MODEL_NAME),   # na pulpicie (polska nazwa)
    os.path.join("E:\\", "Download", MODEL_NAME),            # na karcie SD (E:)
    os.path.join("E:\\", "Pobrane", MODEL_NAME),             # na karcie SD (E:)
    os.path.join("F:\\", "Download", MODEL_NAME),            # alternatywna litera
    os.path.join("F:\\", "Pobrane", MODEL_NAME),
]
# --------------------

def find_serial_port():
    """Automatycznie znajduje port COM podłączonego adaptera FT232."""
    ports = list(serial.tools.list_ports.comports())
    if not ports:
        print("Nie znaleziono żadnych portów COM.")
        return None

    print("Dostępne porty COM:")
    for i, port in enumerate(ports):
        print(f"  [{i}] {port.device} - {port.description}")

    for port in ports:
        desc = port.description.lower()
        if "ft232" in desc or "usb serial" in desc or "usb" in desc:
            print(f"Automatycznie wybrano: {port.device}")
            return port.device

    print(f"Wybrano pierwszy dostępny port: {ports[0].device}")
    return ports[0].device

def ensure_model():
    """Szuka modelu w kilku możliwych lokalizacjach. NIE pobiera z internetu."""
    for path in POSSIBLE_PATHS:
        if os.path.isdir(path):
            print(f"Model znaleziony: {path}")
            return path

    print("BŁĄD: Nie znaleziono modelu w żadnej z tych lokalizacji:")
    for path in POSSIBLE_PATHS:
        print(f"  - {path}")
    print("\nUpewnij się, że folder 'vosk-model-small-pl-0.22' jest w jednym z tych miejsc.")
    print("Skrypt NIE będzie pobierał modelu z internetu.")
    sys.exit(1)

def text_to_bits(text):
    """Zamienia tekst na ciąg bitów (8-bitowy ASCII)."""
    return ''.join(format(ord(char), '08b') for char in text)

def main():
    port = find_serial_port()
    if not port:
        print("Nie można kontynuować bez portu COM. Podłącz FT232 i spróbuj ponownie.")
        return

    model_path = ensure_model()
    model = vosk.Model(model_path)
    rec = vosk.KaldiRecognizer(model, 16000)

    p = pyaudio.PyAudio()
    stream = p.open(format=pyaudio.paInt16, channels=1, rate=16000,
                    input=True, frames_per_buffer=4096)

    try:
        ser = serial.Serial(port, BAUDRATE, timeout=2)
        time.sleep(1)
        print(f"Połączono z {port} @ {BAUDRATE} bps")
    except serial.SerialException as e:
        print(f"Błąd portu {port}: {e}")
        print("Sprawdź, czy FT232 jest podłączony i czy port nie jest zajęty.")
        stream.stop_stream()
        stream.close()
        p.terminate()
        return

    print("Mów teraz... (Ctrl+C aby zakończyć)")

    try:
        while True:
            data = stream.read(4096)
            if rec.AcceptWaveform(data):
                result = json.loads(rec.Result())
                tekst = result.get("text", "").strip()
                if tekst:
                    bity = text_to_bits(tekst)
                    print(f"\nRozpoznano: {tekst}")
                    print(f"Bity ({len(bity)}): {bity}")
                    ser.write((bity + '\n').encode())
                    print("Wysłano do generatora.")
    except KeyboardInterrupt:
        print("\nZakończono.")
    finally:
        stream.stop_stream()
        stream.close()
        p.terminate()
        ser.close()

if __name__ == "__main__":
    main()
