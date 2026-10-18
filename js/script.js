/* ===== EDIT YOUR CONTENT HERE ===== */
/* Projects: set preview:"assets/projects/name.png" to replace a mockup with a real screenshot. Photos: set src to replace the placeholder art. */
const CONFIG = {
    name: "[Your name — TBD]",
    assets: { 
        portrait: "assets/photos/logo.png",
        about: "assets/photos/photo_about.png",
        aboutDetail: "assets/photos/foto1.JPG"
    },
    cv: { path: "" /* e.g. "assets/cv.pdf" */ },
    contact: { email: "" /* you@example.com */, github: "" /* https://github.com/username */, linkedin: "" /* https://linkedin.com/in/username */ },
    about: ["Informatics student at Universitas Muhammadiyah Malang, Indonesia, working across software development and photography.", "[Placeholder] Replace this paragraph with a short personal story: what drew you to code, what drew you to the camera."],
    facts: [["Studying", "Informatics, Universitas Muhammadiyah Malang"], ["Based in", "[TBD]"], ["Focus", "Software development, photography"], ["Currently", "[TBD]"]],
    stack: ["Java", "Python", "HTML", "CSS", "JavaScript", "React", "Git", "GitHub"],
    projects: [
        {
            title: "Potensi Desa Balesari",
            year: "2026",
            desc: "Proyek digitalisasi informasi potensi Desa Balesari. Menjadi collaborator dalam pengembangan bersama satu tim kelompok KKN.",
            tags: ["TypeScript"],
            link: "https://potensidesabalesari.vercel.app/",
            color: "#82917B",
            mock: "net",
            preview: "assets/photos/web_desa.png"
        },
        {
            title: "UMM Canteen Connect",
            year: "2026",
            desc: "Proyek aplikasi yang berkaitan dengan konektivitas layanan kantin UMM. Terintegritas dengan database.",
            tags: ["TypeScript"],
            link: "https://umm-canteen-connect.vercel.app/",
            color: "#304B3D",
            mock: "mobile",
            preview: "assets/photos/web_canteen.png"
        },
        {
            title: "Mood Food",
            year: "2026",
            desc: "Proyek aplikasi bertema makanan. Tambahkan tujuan, fitur utama, dan teknologi berdasarkan implementasi aslimu.",
            tags: ["Technology TBD"],
            link: "",
            color: "#D9825B",
            mock: "mobile",
            preview: ""
        },
        {
            title: "DB Perpus",
            year: "2024",
            desc: "Proyek basis data perpustakaan. Tambahkan informasi DBMS, struktur tabel, dan fitur sesuai implementasi aslimu.",
            tags: ["Database", "SQL"],
            link: "https://github.com/USERNAME/db_perpus",
            color: "#82917B",
            mock: "dash",
            preview: ""
        },
        {
            title: "Website Sekolah",
            year: "2024",
            desc: "Website landing page sekolah SMPN 11 Arsel yang dikembangkan menggunakan HTML, CSS, dan JavaScript.",
            tags: ["HTML", "CSS", "JavaScript"],
            link: "https://web-sekolah-beryl.vercel.app/",
            color: "#304B3D",
            mock: "dash",
            preview: "assets/photos/web_smpn.png"
        },
        {
            title: "Fio-Cakes",
            year: "2023",
            desc: "Website toko Fio Cakes yang menampilkan produk kue dengan tampilan elegan dan membuat konsumen tertarik.",
            tags: ["HTML", "CSS", "JavaScript"],
            link: "https://fio-cakes-m9ob.vercel.app/",
            color: "#D9825B",
            mock: "dash",
            preview: "assets/photos/fio_cakes.png"
        }

    ],

    photos: [
        { src: "", title: "Frame 01", desc: "Placeholder for your first photograph.", category: "[Category]", location: "", date: "", alt: "Placeholder for photograph 1", ar: "4/5", c: "#304B3D", scene: "ridge" },
        { src: "", title: "Frame 02", desc: "Placeholder for a wide landscape frame.", category: "[Category]", location: "", date: "", alt: "Placeholder for photograph 2", ar: "3/2", c: "#82917B", scene: "sea" },
        { src: "", title: "Frame 03", desc: "Placeholder for a portrait frame.", category: "[Category]", location: "", date: "", alt: "Placeholder for photograph 3", ar: "2/3", c: "#D9825B", scene: "arch" },
        { src: "", title: "Frame 04", desc: "Placeholder for a square frame.", category: "[Category]", location: "", date: "", alt: "Placeholder for photograph 4", ar: "1/1", c: "#5d6b57", scene: "still" },
        { src: "", title: "Frame 05", desc: "Placeholder for a panoramic frame.", category: "[Category]", location: "", date: "", alt: "Placeholder for photograph 5", ar: "16/9", c: "#20231F", scene: "woods" },
        { src: "", title: "Frame 06", desc: "Placeholder for a portrait frame.", category: "[Category]", location: "", date: "", alt: "Placeholder for photograph 6", ar: "4/5", c: "#A9552F", scene: "portrait" }
    ],
    timeline: [
        { when: "[Dates TBD]", t: "Informatics", p: "Universitas Muhammadiyah Malang. Add your semester, focus, or notable coursework.", k: "Education" },
        { when: "[Dates TBD]", t: "[Experience or organization — TBD]", p: "Add a role, internship, or activity once confirmed. Nothing is invented here.", k: "Experience" }
    ]
};
/* ===== RENDER ===== */
const $ = s => document.querySelector(s), esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const fine = matchMedia("(hover:hover) and (pointer:fine)").matches, calm = matchMedia("(prefers-reduced-motion:reduce)").matches;
$("#yr").textContent = new Date().getFullYear();
$("#fname").textContent = CONFIG.name;
function art(k, c, i) {
    const id = "a" + i, sk = { ridge: ["#f4e6d2", "#e8b08a"], sea: ["#1d2622", "#d9825b"], arch: ["#eadfca", "#d6c9ae"], still: [c, "#e9dfca"], woods: ["#e3e8da", "#9aa893"], portrait: ["#e9dfca", c] }[k] || ["#e9dfca", c];
    const B = {
        ridge: `<circle cx="285" cy="170" r="38" fill="#fff3e0" opacity=".9"/><path d="M0 250L60 205 120 240 190 170 260 232 330 195 400 245V400H0Z" fill="${c}" opacity=".6"/><path d="M0 290C80 245 150 300 230 268S350 250 400 285V400H0Z" fill="#5d6b57"/><rect y="250" width="400" height="50" fill="#fff" opacity=".12"/><path d="M0 340C90 308 160 352 250 330S360 320 400 345V400H0Z" fill="#20231F"/>`,
        sea: `<circle cx="200" cy="215" r="46" fill="#f3b48f"/><rect y="215" width="400" height="185" fill="#16211c"/>${[0, 1, 2, 3, 4, 5].map(j => `<rect x="${190 - j * 12}" y="${222 + j * 18}" width="${20 + j * 24}" height="5" rx="2" fill="#e8a37c" opacity="${.8 - j * .12}"/>`).join("")}`,
        arch: `<path d="M120 400V185a80 80 0 0 1 160 0V400z" fill="#304B3D"/><path d="M130 400V190a70 70 0 0 1 140 0V400z" fill="${c}" opacity=".85"/><rect y="330" width="400" height="70" fill="#cfc2a6"/><path d="M120 400L40 330H360L280 400z" fill="#fff" opacity=".25"/><path d="M280 190L400 330V400H280z" fill="#20231F" opacity=".12"/>`,
        still: `<rect y="255" width="400" height="145" fill="#e9dfca"/><ellipse cx="170" cy="338" rx="120" ry="14" fill="#20231F" opacity=".2"/><rect x="250" y="190" width="70" height="120" rx="8" fill="#304B3D"/><rect x="250" y="190" width="70" height="14" rx="6" fill="#4a6b58"/><circle cx="150" cy="222" r="72" fill="url(#o${id})"/><circle cx="235" cy="298" r="22" fill="#82917B"/>`,
        woods: [[40, 14, .3], [130, 10, .3], [250, 16, .3], [350, 12, .3], [80, 26, .55], [300, 30, .55], [190, 40, 1]].map(t => `<rect x="${t[0]}" width="${t[1]}" height="400" fill="#2a352b" opacity="${t[2]}"/>`).join("") + `<path d="M230 0H290L200 400H120z" fill="#fff" opacity=".14"/>`,
        portrait: `<circle cx="200" cy="170" r="130" fill="#fff" opacity=".18"/><path d="M60 400c0-86 54-126 140-126s140 40 140 126z" fill="#20231F"/><ellipse cx="200" cy="168" rx="52" ry="64" fill="#14201a"/><path d="M148 160c-4-44 26-70 54-70 34 0 54 28 48 72-8-26-22-38-52-40-28 0-40 12-50 38z" fill="#0b130e"/><path d="M100 0h18v400h-18zM140 0h8v400h-8z" fill="#fff" opacity=".08"/>`
    }[k] || "";
    return `<svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><filter id="n${id}"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 .1 0 0 0 0 .1 0 0 0 0 .1 0 0 0 .55 0"/></filter><radialGradient id="v${id}" cx=".5" cy=".5" r=".75"><stop offset=".6" stop-opacity="0"/><stop offset="1" stop-opacity=".38"/></radialGradient><linearGradient id="s${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sk[0]}"/><stop offset="1" stop-color="${sk[1]}"/></linearGradient><radialGradient id="o${id}" cx=".35" cy=".3"><stop offset="0" stop-color="#f0a67f"/><stop offset="1" stop-color="#b9643e"/></radialGradient></defs><rect width="400" height="400" fill="url(#s${id})"/>${B}<rect width="400" height="400" fill="url(#v${id})"/><rect width="400" height="400" filter="url(#n${id})" opacity=".35" style="mix-blend-mode:multiply"/></svg>`;
}
function mock(p) {
    if (p.preview)
        return `<img src="${esc(p.preview)}" alt="${esc(p.title)} screenshot">`;
    const I = "#F5F0E7", d = `<defs><linearGradient id="mv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".18"/><stop offset="1" stop-color="#000" stop-opacity=".3"/></linearGradient><filter id="ds" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="8" stdDeviation="7" flood-color="#000" flood-opacity=".4"/></filter></defs><rect width="280" height="210" fill="${p.color}"/><rect width="280" height="210" fill="url(#mv)"/>`, win = (f) => `<g filter="url(#ds)"><rect x="20" y="22" width="240" height="150" rx="8" fill="${f}"/></g>`, dots = `<circle cx="32" cy="32" r="3" fill="#D9825B"/><circle cx="41" cy="32" r="3" fill="#82917B"/><circle cx="50" cy="32" r="3" fill="${I}" opacity=".6"/>`, B = {
        mobile: `<g filter="url(#ds)"><rect x="98" y="12" width="84" height="186" rx="14" fill="#20231F"/></g><rect x="102" y="16" width="76" height="178" rx="11" fill="${I}"/><rect x="102" y="16" width="76" height="30" rx="11" fill="#304B3D"/><rect x="102" y="32" width="76" height="14" fill="#304B3D"/><rect x="110" y="26" width="40" height="5" rx="2" fill="${I}" opacity=".8"/>${[0, 1, 2].map(j => `<rect x="108" y="${54 + j * 44}" width="64" height="36" rx="5" fill="#ebe3d3"/><rect x="114" y="${60 + j * 44}" width="24" height="24" rx="4" fill="#82917B"/><rect x="144" y="${63 + j * 44}" width="22" height="4" rx="2" fill="#20231F" opacity=".6"/><rect x="144" y="${72 + j * 44}" width="16" height="4" rx="2" fill="#20231F" opacity=".25"/>`).join("")}<g filter="url(#ds)"><rect x="198" y="64" width="62" height="44" rx="6" fill="${I}"/></g><circle cx="213" cy="82" r="6" fill="#D9825B"/><rect x="224" y="78" width="28" height="4" rx="2" fill="#20231F" opacity=".5"/><rect x="224" y="86" width="20" height="4" rx="2" fill="#20231F" opacity=".25"/><rect x="206" y="97" width="46" height="5" rx="2.5" fill="#304B3D"/>`,
        dash: win(I) + `<path d="M20 40H66V172H28a8 8 0 0 1-8-8z" fill="#304B3D"/><path d="M20 30a8 8 0 0 1 8-8H252a8 8 0 0 1 8 8v10H20z" fill="#e6dfcf"/>${dots}${[0, 1, 2, 3].map(j => `<rect x="28" y="${52 + j * 14}" width="30" height="5" rx="2.5" fill="${I}" opacity="${j ? .35 : .9}"/>`).join("")}${[0, 1, 2].map(j => `<rect x="${76 + j * 61}" y="50" width="54" height="32" rx="5" fill="#ebe3d3"/><rect x="${82 + j * 61}" y="57" width="20" height="4" rx="2" fill="#20231F" opacity=".4"/><rect x="${82 + j * 61}" y="67" width="34" height="8" rx="2" fill="${j == 1 ? "#D9825B" : "#304B3D"}"/>`).join("")}${[30, 52, 38, 64, 46, 72, 58].map((h, j) => `<rect x="${78 + j * 25}" y="${164 - h}" width="14" height="${h}" rx="3" fill="${j == 5 ? "#D9825B" : "#82917B"}"/>`).join("")}`,
        net: win("#14201a") + dots + [["#D9825B", 54], ["#82917B", 94], [I, 134]].map((b, j) => `<rect x="34" y="${b[1]}" width="212" height="28" rx="14" fill="${b[0]}" opacity=".16"/><line x1="52" y1="${b[1] + 14}" x2="228" y2="${b[1] + 14}" stroke="${b[0]}" stroke-width="1.5" stroke-dasharray="3 4"/>${[52, 100 + j * 10, 160, 228].map(x => `<circle cx="${x}" cy="${b[1] + 14}" r="${x == 160 ? 6 : 4}" fill="${b[0]}"/>`).join("")}`).join(""),
        board: `<g filter="url(#ds)"><rect x="50" y="50" width="180" height="110" rx="8" fill="#1d3a2c"/></g><rect x="50" y="50" width="180" height="110" rx="8" fill="none" stroke="#82917B" stroke-width="1.5"/>${[...Array(9)].map((_, j) => `<rect x="${62 + j * 18}" y="42" width="6" height="12" rx="1" fill="#d9c58a"/><rect x="${62 + j * 18}" y="156" width="6" height="12" rx="1" fill="#d9c58a"/>`).join("")}<rect x="108" y="84" width="64" height="46" rx="4" fill="#20231F"/><rect x="116" y="92" width="22" height="3" rx="1.5" fill="#82917B"/><rect x="116" y="99" width="34" height="3" rx="1.5" fill="#82917B" opacity=".5"/><circle cx="160" cy="118" r="4" fill="#D9825B"/><rect x="214" y="92" width="22" height="30" rx="3" fill="#cfcab9"/><path d="M62 70h22v10H70v10h14" fill="none" stroke="#D9825B" stroke-width="2"/><path d="M118 28a30 30 0 0 1 44 0M126 35a20 20 0 0 1 28 0" fill="none" stroke="${I}" stroke-width="2.5" stroke-linecap="round" opacity=".8"/>`
    };
    return `<svg viewBox="0 0 280 210" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${esc(p.title)} mockup placeholder">${d}${B[p.mock] || B.dash}<text x="140" y="205" text-anchor="middle" font-size="7" font-family="Space Grotesk,sans-serif" letter-spacing="1.6" fill="${I}" opacity=".75">MOCKUP · PLACEHOLDER</text></svg>`;
}
function renderAboutImage(selector, src, alt, fallback) {
    const el = $(selector);

    if (src) {
        el.innerHTML = `<img src="${esc(src)}" alt="${esc(alt)}">`;
    } else {
        el.innerHTML = fallback;
    }
}

renderAboutImage("#ab1", CONFIG.assets.about, "Portrait for About section", art("portrait", "#304B3D", "A"));
renderAboutImage("#ab2", CONFIG.assets.aboutDetail, "Photography detail", art("still", "#D9825B", "B"));
$("#portrait").innerHTML = CONFIG.assets.portrait ? `<img src="${esc(CONFIG.assets.portrait)}" alt="Portrait of ${esc(CONFIG.name)}">` : `<svg viewBox="0 0 300 380" aria-hidden="true"><defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3f6350"/><stop offset="1" stop-color="#1b3024"/></linearGradient><linearGradient id="g2" x1="0" x2="1"><stop offset="0" stop-color="#2a4437"/><stop offset="1" stop-color="#14241b"/></linearGradient><radialGradient id="g3" cx=".35" cy=".3"><stop offset="0" stop-color="#3d5c4a"/><stop offset="1" stop-color="#16271e"/></radialGradient></defs><ellipse cx="150" cy="377" rx="130" ry="8" fill="#000" opacity=".25"/><path d="M10 380c0-84 52-124 140-124s140 40 140 124z" fill="url(#g1)"/><path d="M112 258L150 318 188 258Q150 276 112 258z" fill="#e9e1ce" opacity=".85"/><path d="M122 236h56v34c-16 14-40 14-56 0z" fill="url(#g2)"/><ellipse cx="150" cy="150" rx="60" ry="74" fill="url(#g3)"/><path d="M92 140c-4-52 30-84 64-84 40 0 64 34 56 88-8-30-26-44-60-46-34 0-50 14-60 42z" fill="#0f1c15"/><path d="M96 268L176 380" stroke="#20231F" stroke-width="9" opacity=".75"/><g transform="translate(138 318)"><rect x="-26" y="-18" width="52" height="38" rx="6" fill="#20231F"/><rect x="-12" y="-24" width="24" height="8" rx="2" fill="#20231F"/><circle cy="2" r="12" fill="#0d110e" stroke="#82917B" stroke-width="2"/><circle cy="2" r="4" fill="#D9825B" opacity=".85"/></g><path d="M205 100c10 24 10 60-6 86" fill="none" stroke="#D9825B" stroke-width="3" opacity=".5" stroke-linecap="round"/></svg>`;
$("#bio").textContent = CONFIG.about[0];
$("#bio2").textContent = CONFIG.about[1];
$("#facts").innerHTML = CONFIG.facts.map(f => `<div><dt>${esc(f[0])}</dt><dd>${esc(f[1])}</dd></div>`).join("");
$("#stack").innerHTML = CONFIG.stack.map(s => `<span>${esc(s)}</span>`).join("");
const pv = $("#pv"), pd = $("#pd");
$("#projects").innerHTML = CONFIG.projects.map((p, i) => `<button data-i="${i}" aria-haspopup="dialog"><span class="n">${String(i + 1).padStart(2, "0")}</span><span class="t">${esc(p.title)}</span><span class="y">${esc(p.year)}</span></button>`).join("");
const prj = i => CONFIG.projects[i];
function openP(i) {
    const p = prj(i);
    $("#pdm").innerHTML = mock(p);
    $("#pdt").textContent = p.title;
    $("#pdy").textContent = p.year;
    $("#pdd").textContent = p.desc;
    $("#pdg").innerHTML = p.tags.map(t => `<span>${esc(t)}</span>`).join("");
    $("#pdl").innerHTML = p.link ? `<a class="btn pri" href="${esc(p.link)}" target="_blank" rel="noopener noreferrer">Open project</a>` : `<span class="note">No link yet. Add one in CONFIG.projects.</span>`;
    pv.classList.remove("show");
    pd.showModal();
}
document.querySelectorAll("#projects button").forEach(b => {
    const i = +b.dataset.i;
    b.onclick = () => openP(i);
    if (fine) {
        b.onmouseenter = () => { pv.innerHTML = mock(prj(i)); pv.classList.add("show"); };
        b.onmouseleave = () => pv.classList.remove("show");
    }
});
let mx = 0, my = 0, px = 0, py = 0;
if (fine && !calm) {
    addEventListener("pointermove", e => { mx = e.clientX; my = e.clientY; });
    (function f() { px += (mx + 24 - px) * .15; py += (my + 24 - py) * .15; if (pv.classList.contains("show"))
        pv.style.transform = `translate(${Math.min(px, innerWidth - 300)}px,${py}px)`; requestAnimationFrame(f); })();
}
else if (fine) {
    addEventListener("pointermove", e => { pv.style.transform = `translate(${Math.min(e.clientX + 24, innerWidth - 300)}px,${e.clientY + 24}px)`; });
}
$("#pdx").onclick = () => pd.close();
[pd, $("#lb")].forEach(d => d.addEventListener("click", e => { if (e.target === d)
    d.close(); }));
/* gallery */
$("#track").innerHTML = CONFIG.photos.map((p, i) => {
    const m = [p.category, p.location, p.date].filter(Boolean).join(" · ");
    const im = p.src ? `<img src="${esc(p.src)}" alt="${esc(p.alt)}" loading="lazy" style="--ar:${p.ar}">` : `<div class="ph pa" role="img" aria-label="${esc(p.alt)}" style="--ar:${p.ar}">${art(p.scene, p.c, i)}<span class="chip">Placeholder ${i + 1}</span></div>`;
    return `<button class="fr" data-i="${i}" aria-label="Enlarge ${esc(p.title)}">${im}<span class="cap"><b>${esc(p.title)}</b>${esc(p.desc)}<br><small>${esc(m)}</small></span></button>`;
}).join("");
const lb = $("#lb");
document.querySelectorAll(".fr").forEach(b => b.onclick = () => {
    const p = CONFIG.photos[+b.dataset.i];
    $("#lbi").innerHTML = p.src ? `<img src="${esc(p.src)}" alt="${esc(p.alt)}">` : `<div class="ph pa" role="img" aria-label="${esc(p.alt)}" style="--ar:${p.ar}">${art(p.scene, p.c, "L")}<span class="chip">Placeholder</span></div>`;
    $("#lbt").textContent = p.title;
    $("#lbd").textContent = p.desc;
    $("#lbm").textContent = [p.category, p.location, p.date].filter(Boolean).join(" · ");
    lb.showModal();
});
$("#lbx").onclick = () => lb.close();
const film = $("#film"), track = $("#track"), bar = $("#bar");
let pinned = false;
function setup() {
    const want = innerWidth > 900 && !calm;
    film.classList.toggle("native", !want);
    pinned = want;
    track.style.transform = "";
    film.style.height = "";
    if (want) {
        film.style.height = (track.scrollWidth - innerWidth + innerHeight) + "px";
        upd();
    }
}
function upd() {
    if (!pinned)
        return;
    const r = film.getBoundingClientRect(), max = film.offsetHeight - innerHeight, pr = Math.max(0, Math.min(1, -r.top / max));
    track.style.transform = `translate3d(${-pr * (track.scrollWidth - innerWidth)}px,0,0)`;
    bar.style.transform = `scaleX(${pr})`;
}
addEventListener("scroll", () => requestAnimationFrame(upd), { passive: true });
addEventListener("resize", setup);
addEventListener("load", setup);
setup();
/* connection / experience / cv / contact */
$("#tl").innerHTML = CONFIG.timeline.map(t => `<article><time>${esc(t.when)}<br>${esc(t.k)}</time><div><h3>${esc(t.t)}</h3><p>${esc(t.p)}</p></div></article>`).join("");
const cv = CONFIG.cv.path;
$("#cvtxt").textContent = cv ? "View the CV online or download a copy." : "The CV file has not been added yet.";
$("#cvbtns").innerHTML = cv ? `<a class="btn pri" href="${esc(cv)}" target="_blank" rel="noopener noreferrer">View CV</a><a class="btn" href="${esc(cv)}" download>Download CV</a>` : `<span class="btn pri" aria-disabled="true" role="link">View CV</span><span class="btn" aria-disabled="true" role="link">Download CV</span>`;
$("#cvnote").textContent = cv ? "" : "Add your PDF to assets/cv.pdf and set CONFIG.cv.path to enable both buttons.";
const c = CONFIG.contact, L = (n, u) => u ? `<a class="lk" href="${esc(u)}" target="_blank" rel="noopener noreferrer">${n}</a>` : `<span class="lk" title="Add in CONFIG.contact">${n}: add link</span>`;
$("#links").innerHTML = L("GitHub", c.github) + L("LinkedIn", c.linkedin);
$("#mail").innerHTML = c.email ? `<a class="btn pri" href="mailto:${esc(c.email)}">Email ${esc(c.email)}</a>` : `<span class="btn pri" aria-disabled="true" role="link">Email: add address</span><p class="note">Set CONFIG.contact.email to activate this button.</p>`;
/* nav, reveal, parallax */
const tog = $("#tog"), nav = $("#nav");
tog.onclick = () => { const o = nav.classList.toggle("open"); tog.setAttribute("aria-expanded", o); };
nav.onclick = e => { if (e.target.tagName === "A") {
    nav.classList.remove("open");
    tog.setAttribute("aria-expanded", false);
} };
const links = [...nav.querySelectorAll("a")];
const so = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting)
    links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => so.observe(s));
const ro = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) {
    e.target.classList.add("in");
    ro.unobserve(e.target);
} }), { threshold: .12 });
document.querySelectorAll(".rv").forEach(e => ro.observe(e));
if (fine && !calm) {
    const st = $("#stage"), ls = [...st.children];
    addEventListener("pointermove", e => { const r = st.getBoundingClientRect(); if (r.bottom < 0)
        return; const x = (e.clientX / innerWidth - .5), y = (e.clientY / innerHeight - .5); ls.forEach(l => { const d = +l.dataset.d || 0; l.style.transform = `translate3d(${-x * d}px,${-y * d}px,0)`; }); }, { passive: true });
    const cu = $("#cube"), ob = cu.parentElement;
    ob.addEventListener("pointermove", e => { const r = ob.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; cu.style.transform = `rotateY(${x * 50}deg) rotateX(${-y * 40}deg)`; });
    ob.addEventListener("pointerleave", () => cu.style.transform = "");
}
else
    $("#cube").style.transform = "rotateY(-24deg) rotateX(10deg)";
