// ============================================================
//  LISTA ODCINKÓW
//  Nie wpisujesz już id ani number — silnik nada je sam.
//  Nowy odcinek = skopiuj blok "SZABLON" i wklej przed "];"
// ============================================================
const episodes = [

  {
    title: "The Civilian and the Windmills",
    date: "24.09.2026",
    svg: `
      <svg class="panel" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="800" height="500" fill="#ffffff"/>
        <line x1="0" y1="420" x2="800" y2="420" stroke="#0a0a0a" stroke-width="3"/>
        <g stroke="#0a0a0a" stroke-width="3" fill="none">
          <polygon points="180,420 220,420 210,220 190,220" fill="#ffffff"/>
          <circle cx="200" cy="220" r="8" fill="#0a0a0a"/>
          <line x1="200" y1="220" x2="200" y2="120"/>
          <line x1="200" y1="220" x2="300" y2="220"/>
          <line x1="200" y1="220" x2="200" y2="320"/>
          <line x1="200" y1="220" x2="100" y2="220"/>
          <rect x="175" y="360" width="50" height="20" fill="#ffffff"/>
          <text x="200" y="374" font-family="Courier New, monospace" font-size="10" text-anchor="middle" fill="#0a0a0a">UNIT-01</text>
        </g>
        <g stroke="#0a0a0a" stroke-width="3" fill="none">
          <polygon points="600,420 640,420 630,220 610,220" fill="#ffffff"/>
          <circle cx="620" cy="220" r="8" fill="#0a0a0a"/>
          <line x1="620" y1="220" x2="620" y2="120"/>
          <line x1="620" y1="220" x2="720" y2="220"/>
          <line x1="620" y1="220" x2="620" y2="320"/>
          <line x1="620" y1="220" x2="520" y2="220"/>
          <rect x="595" y="360" width="50" height="20" fill="#ffffff"/>
          <text x="620" y="374" font-family="Courier New, monospace" font-size="10" text-anchor="middle" fill="#0a0a0a">UNIT-02</text>
        </g>
        <g stroke="#0a0a0a" stroke-width="3" fill="none">
          <circle cx="400" cy="340" r="14" fill="#ffffff"/>
          <line x1="400" y1="354" x2="400" y2="400"/>
          <line x1="400" y1="370" x2="380" y2="385"/>
          <line x1="400" y1="370" x2="420" y2="385"/>
          <line x1="400" y1="400" x2="385" y2="420"/>
          <line x1="400" y1="400" x2="415" y2="420"/>
          <rect x="418" y="375" width="18" height="22" fill="#ffffff"/>
          <line x1="421" y1="381" x2="433" y2="381"/>
          <line x1="421" y1="387" x2="433" y2="387"/>
        </g>
        <g>
          <ellipse cx="400" cy="270" rx="90" ry="30" fill="#ffffff" stroke="#0a0a0a" stroke-width="3"/>
          <polygon points="390,298 400,318 410,298" fill="#ffffff" stroke="#0a0a0a" stroke-width="3"/>
          <text x="400" y="275" font-family="Courier New, monospace" font-size="14" text-anchor="middle" fill="#0a0a0a">I have a complaint.</text>
        </g>
        <text x="400" y="460" font-family="Courier New, monospace" font-size="12" letter-spacing="4" text-anchor="middle" fill="#666">THE CIVILIAN AND THE WINDMILLS</text>
      </svg>
    `,
    body: `
      <p>A civilian walked across a plain where military windmills stood in ranks. Their blades were painted with insignia, their towers stamped with serial numbers. No one was inside. The wind turned them, and they turned, and that was all they did.</p>
      <p>The civilian carried no weapon. He carried a complaint, written on paper, folded twice.</p>
      <p class="dialogue">— "I have a complaint."</p>
      <p>He approached the first windmill and began to read aloud. The blade swung down. He stepped aside. He read again. The blade swung again. He stepped aside.</p>
      <p>A crowd gathered. Some laughed. Some filmed. One soldier in a pressed uniform said: "Sir, these are property. These are assets. These are not your enemy."</p>
      <p>The civilian kept reading.</p>
      <p>The blade swung. He stepped aside. The blade swung. He stepped aside.</p>
      <p>Eventually the wind died. The blades stopped. The civilian folded his paper, put it in his pocket, and walked home.</p>
      <p>The windmills were still there the next morning. They had never moved at all.</p>
    `
  }

  // ============================================================
  //  SZABLON NOWEGO ODCINKA
  //  Wklej poniższy blok PRZED "];" i dopisz przecinek
  //  po poprzednim odcinku. Numer nada się sam.
  // ============================================================
  // ,
  // {
  //   title: "Your Title Here",
  //   date: "01.10.2026",
  //   image: "panel3.jpg",
  //   body: `
  //     <p>Your narration here.</p>
  //     <p class="dialogue">— "Your dialogue here."</p>
  //   `
  // }

];

// ============================================================
//  SILNIK — nie ruszaj poniżej
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const container = document.getElementById('episodes');
  const archiveList = document.getElementById('archiveList');

  episodes.forEach((ep, index) => {
    const num = String(index + 1).padStart(2, '0');
    const episodeId = 'episode' + num;
    const episodeLabel = 'Episode ' + num;

    // link w nawigacji
    const link = document.createElement('a');
    link.href = '#' + episodeId;
    link.textContent = episodeLabel;
    nav.appendChild(link);

    // artykuł
    const art = document.createElement('article');
    art.className = 'comic';
    art.id = episodeId;
    art.setAttribute('data-episode', episodeLabel);

    let media = '';
    if (ep.svg) media = ep.svg;
    else if (ep.image) media = `<img src="${ep.image}" alt="${ep.title}" class="panel">`;

    art.innerHTML = `
      <h2>${ep.title}</h2>
      <p class="meta">Published: ${ep.date}</p>
      ${media}
      ${ep.body}
    `;
    container.appendChild(art);

    // wpis w archiwum
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="num">${episodeLabel}</span>
      <a href="#${episodeId}">${ep.title}</a>
      <span class="date">${ep.date}</span>
    `;
    archiveList.appendChild(li);
  });
});
