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
  },

  {
    title: "The Windmills Laugh",
    date: "01.10.2026",
    svg: `
      <svg class="panel" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="800" height="500" fill="#ffffff"/>
        <line x1="0" y1="440" x2="800" y2="440" stroke="#0a0a0a" stroke-width="3"/>

        <g stroke="#0a0a0a" stroke-width="3" fill="none">
          <polygon points="120,440 160,440 150,240 130,240" fill="#ffffff"/>
          <circle cx="140" cy="240" r="8" fill="#0a0a0a"/>
          <line x1="140" y1="240" x2="140" y2="140"/>
          <line x1="140" y1="240" x2="240" y2="260"/>
          <line x1="140" y1="240" x2="130" y2="340"/>
          <line x1="140" y1="240" x2="40" y2="220"/>
          <path d="M 125 300 Q 140 320 155 300" stroke-width="3"/>
          <circle cx="130" cy="280" r="3" fill="#0a0a0a"/>
          <circle cx="150" cy="280" r="3" fill="#0a0a0a"/>
          <rect x="115" y="380" width="50" height="20" fill="#ffffff"/>
          <text x="140" y="394" font-family="Courier New, monospace" font-size="10" text-anchor="middle" fill="#0a0a0a">UNIT-01</text>
        </g>

        <g stroke="#0a0a0a" stroke-width="3" fill="none">
          <polygon points="560,440 600,440 590,240 570,240" fill="#ffffff"/>
          <circle cx="580" cy="240" r="8" fill="#0a0a0a"/>
          <line x1="580" y1="240" x2="580" y2="140"/>
          <line x1="580" y1="240" x2="680" y2="260"/>
          <line x1="580" y1="240" x2="570" y2="340"/>
          <line x1="580" y1="240" x2="480" y2="220"/>
          <path d="M 565 300 Q 580 320 595 300" stroke-width="3"/>
          <circle cx="570" cy="280" r="3" fill="#0a0a0a"/>
          <circle cx="590" cy="280" r="3" fill="#0a0a0a"/>
          <rect x="555" y="380" width="50" height="20" fill="#ffffff"/>
          <text x="580" y="394" font-family="Courier New, monospace" font-size="10" text-anchor="middle" fill="#0a0a0a">UNIT-02</text>
        </g>

        <g stroke="#0a0a0a" stroke-width="3" fill="none">
          <circle cx="400" cy="350" r="12" fill="#ffffff"/>
          <line x1="400" y1="362" x2="400" y2="410"/>
          <line x1="400" y1="378" x2="382" y2="390"/>
          <line x1="400" y1="378" x2="418" y2="392"/>
          <line x1="400" y1="410" x2="388" y2="435"/>
          <line x1="400" y1="410" x2="412" y2="435"/>
          <line x1="392" y1="420" x2="410" y2="420"/>
          <line x1="392" y1="425" x2="410" y2="425"/>
          <rect x="416" y="382" width="20" height="24" fill="#ffffff"/>
          <line x1="419" y1="388" x2="433" y2="388"/>
          <line x1="419" y1="394" x2="433" y2="394"/>
          <line x1="419" y1="400" x2="433" y2="400"/>
        </g>

        <g>
          <ellipse cx="160" cy="180" rx="110" ry="28" fill="#ffffff" stroke="#0a0a0a" stroke-width="3"/>
          <polygon points="140,206 150,226 160,206" fill="#ffffff" stroke="#0a0a0a" stroke-width="3"/>
          <text x="160" y="185" font-family="Courier New, monospace" font-size="12" text-anchor="middle" fill="#0a0a0a">It's ours. You just live here.</text>
        </g>

        <g>
          <ellipse cx="600" cy="180" rx="110" ry="28" fill="#ffffff" stroke="#0a0a0a" stroke-width="3"/>
          <polygon points="580,206 590,226 600,206" fill="#ffffff" stroke="#0a0a0a" stroke-width="3"/>
          <text x="600" y="185" font-family="Courier New, monospace" font-size="12" text-anchor="middle" fill="#0a0a0a">Look away. It's a scandal elsewhere.</text>
        </g>

        <g stroke="#0a0a0a" stroke-width="3" fill="none">
          <circle cx="700" cy="380" r="12" fill="#ffffff"/>
          <line x1="700" y1="392" x2="700" y2="430"/>
          <line x1="700" y1="405" x2="680" y2="400"/>
          <line x1="700" y1="405" x2="680" y2="415"/>
          <line x1="700" y1="430" x2="690" y2="450"/>
          <line x1="700" y1="430" x2="710" y2="450"/>
          <text x="700" y="470" font-family="Courier New, monospace" font-size="9" text-anchor="middle" fill="#666">GENDARMERIE</text>
        </g>

        <text x="400" y="490" font-family="Courier New, monospace" font-size="12" letter-spacing="4" text-anchor="middle" fill="#666">THE WINDMILLS LAUGH</text>
      </svg>
    `,
    body: `
      <p>The civilian returned to the plain. This time he carried a second paper, stamped and dated.</p>
      <p>— "This land is mine. This mill is mine. You use it without my consent. You endanger my life."</p>
      <p>The windmills laughed. Their blades turned faster.</p>
      <p class="dialogue">— "It's ours. You just live here."</p>
      <p>The civilian pointed at the gendarmerie post at the edge of the field. The gendarmes were inside, reading reports about a scandal in the barracks. A real scandal. A scandal with names.</p>
      <p class="dialogue">— "Look away. It's a scandal elsewhere. This is not the crime you're looking for."</p>
      <p>And the blades kept turning. And the civilian kept bleeding. And the property he owned kept being used to hurt him.</p>
      <p>The wind did not stop that day.</p>
    `
  },

  {
    title: "The Vertical-Horizontal Sprint",
    date: "08.10.2026",
    svg: `
      <svg class="panel" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="800" height="500" fill="#ffffff"/>
        <line x1="0" y1="460" x2="800" y2="460" stroke="#0a0a0a" stroke-width="3"/>

        <!-- WINDMILL 1: aiming at head -->
        <g stroke="#0a0a0a" stroke-width="3" fill="none">
          <polygon points="130,460 170,460 160,260 140,260" fill="#ffffff"/>
          <circle cx="150" cy="260" r="8" fill="#0a0a0a"/>
          <line x1="150" y1="260" x2="150" y2="160"/>
          <line x1="150" y1="260" x2="250" y2="270"/>
          <line x1="150" y1="260" x2="150" y2="360"/>
          <line x1="150" y1="260" x2="50" y2="250"/>
          <!-- pistol-antenna aimed at head -->
          <line x1="150" y1="260" x2="330" y2="360" stroke-width="5"/>
          <circle cx="335" cy="362" r="6" fill="#0a0a0a"/>
          <!-- lightning bolts to head -->
          <polyline points="345,365 360,375 355,385 370,395" stroke-width="2"/>
          <polyline points="350,370 365,380 360,390 375,400" stroke-width="2"/>
          <rect x="125" y="400" width="50" height="20" fill="#ffffff"/>
          <text x="150" y="414" font-family="Courier New, monospace" font-size="10" text-anchor="middle" fill="#0a0a0a">UNIT-01</text>
        </g>

        <!-- WINDMILL 2: aiming at hips -->
        <g stroke="#0a0a0a" stroke-width="3" fill="none">
          <polygon points="570,460 610,460 600,260 580,260" fill="#ffffff"/>
          <circle cx="590" cy="260" r="8" fill="#0a0a0a"/>
          <line x1="590" y1="260" x2="590" y2="160"/>
          <line x1="590" y1="260" x2="690" y2="270"/>
          <line x1="590" y1="260" x2="590" y2="360"/>
          <line x1="590" y1="260" x2="490" y2="250"/>
          <!-- pistol-antenna aimed at hips -->
          <line x1="590" y1="260" x2="440" y2="400" stroke-width="5"/>
          <circle cx="435" cy="402" r="6" fill="#0a0a0a"/>
          <!-- lightning bolts to hips -->
          <polyline points="425,405 410,415 415,425 400,435" stroke-width="2"/>
          <polyline points="420,400 405,410 410,420 395,430" stroke-width="2"/>
          <rect x="565" y="400" width="50" height="20" fill="#ffffff"/>
          <text x="590" y="414" font-family="Courier New, monospace" font-size="10" text-anchor="middle" fill="#0a0a0a">UNIT-02</text>
        </g>

        <!-- CIVILIAN lying down -->
        <g stroke="#0a0a0a" stroke-width="3" fill="none">
          <circle cx="390" cy="420" r="12" fill="#ffffff"/>
          <line x1="402" y1="420" x2="450" y2="420"/>
          <line x1="410" y1="420" x2="410" y2="440"/>
          <line x1="440" y1="420" x2="440" y2="440"/>
          <line x1="450" y1="420" x2="470" y2="410"/>
          <line x1="450" y1="420" x2="470" y2="430"/>
        </g>

        <!-- SPEECH: windmill 1 -->
        <g>
          <ellipse cx="200" cy="100" rx="140" ry="30" fill="#ffffff" stroke="#0a0a0a" stroke-width="3"/>
          <polygon points="180,128 190,148 200,128" fill="#ffffff" stroke="#0a0a0a" stroke-width="3"/>
          <text x="200" y="105" font-family="Courier New, monospace" font-size="12" text-anchor="middle" fill="#0a0a0a">Viva La cocerspanielowy plan!</text>
        </g>

        <!-- SPEECH: windmill 2 -->
        <g>
          <ellipse cx="600" cy="100" rx="140" ry="30" fill="#ffffff" stroke="#0a0a0a" stroke-width="3"/>
          <polygon points="580,128 590,148 600,128" fill="#ffffff" stroke="#0a0a0a" stroke-width="3"/>
          <text x="600" y="105" font-family="Courier New, monospace" font-size="12" text-anchor="middle" fill="#0a0a0a">Viva La nasz honor! Viva La malezja!</text>
        </g>

        <!-- SECOND FIGURE: standing, thumbs up, OK gesture -->
        <g stroke="#0a0a0a" stroke-width="3" fill="none">
          <circle cx="700" cy="300" r="12" fill="#ffffff"/>
          <line x1="700" y1="312" x2="700" y2="360"/>
          <line x1="700" y1="330" x2="720" y2="300"/>
          <line x1="700" y1="330" x2="680" y2="340"/>
          <line x1="700" y1="360" x2="690" y2="400"/>
          <line x1="700" y1="360" x2="710" y2="400"/>
          <!-- thumb up -->
          <line x1="720" y1="300" x2="725" y2="285"/>
          <line x1="720" y1="300" x2="730" y2="305"/>
        </g>

        <!-- SPEECH BUBBLE: 01 bit stream -->
        <g>
          <ellipse cx="700" cy="180" rx="70" ry="40" fill="#ffffff" stroke="#0a0a0a" stroke-width="3"/>
          <polygon points="690,216 700,236 710,216" fill="#ffffff" stroke="#0a0a0a" stroke-width="3"/>
          <text x="700" y="170" font-family="Courier New, monospace" font-size="10" text-anchor="middle" fill="#0a0a0a">01001101</text>
          <text x="700" y="185" font-family="Courier New, monospace" font-size="10" text-anchor="middle" fill="#0a0a0a">01100001</text>
          <text x="700" y="200" font-family="Courier New, monospace" font-size="10" text-anchor="middle" fill="#0a0a0a">01101100</text>
        </g>

        <text x="400" y="490" font-family="Courier New, monospace" font-size="12" letter-spacing="4" text-anchor="middle" fill="#666">THE VERTICAL-HORIZONTAL SPRINT</text>
      </svg>
    `,
    body: `
      <p>The civilian lay on the ground. The vertical-horizontal sprint had ended the way it always ended — flat, horizontal, on the cold earth.</p>
      <p>The windmills aimed their pistol-antennas. One at his head. One at his hips. They fired small lightning bolts, precisely, patiently, as if this were a routine.</p>
      <p class="dialogue">— "Viva La cocerspanielowy plan! Viva La nasz honor! Viva La malezja!"</p>
      <p>And beside them, a second figure stood upright, unbothered, thumb raised in an OK gesture. Above its head floated a stream of 01 bits, curling into a single word: <strong>MALEZJA</strong>.</p>
      <p>The civilian did not move. The property he owned kept being used to hurt him.</p>
      <p>The wind kept blowing. The windmills kept firing.</p>
    `
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const container = document.getElementById('episodes');
  const archiveList = document.getElementById('archiveList');

  episodes.forEach((ep, index) => {
    const num = String(index + 1).padStart(2, '0');
    const episodeId = 'episode' + num;
    const episodeLabel = 'Episode ' + num;

    const link = document.createElement('a');
    link.href = '#' + episodeId;
    link.textContent = episodeLabel;
    nav.appendChild(link);

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

    const li = document.createElement('li');
    li.innerHTML = `
      <span class="num">${episodeLabel}</span>
      <a href="#${episodeId}">${ep.title}</a>
      <span class="date">${ep.date}</span>
    `;
    archiveList.appendChild(li);
  });
});
