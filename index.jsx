import { useState } from "react";

const EVENTS = [
  // --- ACTIONPLANET SPAARNWOUDE ---
  {
    id: 1,
    name: "Motordag ActionPlanet",
    type: "training",
    date: "2026-07-12",
    dateEnd: "2026-07-12",
    location: "Spaarnwoude, Nederland",
    country: "NL",
    description: "Iedere 2e zondag van de maand kun je met je eigen allroad of adventure motor het offroad terrein van ActionPlanet op. Ervaren rijders geven instructie. Parcours met zandpaden, hellingen en technische secties.",
    url: "https://www.actionplanet.nl/activiteit/motordagen/",
    source: "ActionPlanet",
    difficulty: "All levels",
    tags: ["offroad", "training", "maandelijks"],
    price: null,
    recurring: true,
  },
  {
    id: 2,
    name: "Motordag ActionPlanet",
    type: "training",
    date: "2026-08-09",
    dateEnd: "2026-08-09",
    location: "Spaarnwoude, Nederland",
    country: "NL",
    description: "Iedere 2e zondag van de maand kun je met je eigen allroad of adventure motor het offroad terrein van ActionPlanet op. Ervaren rijders geven instructie. Parcours met zandpaden, hellingen en technische secties.",
    url: "https://www.actionplanet.nl/activiteit/motordagen/",
    source: "ActionPlanet",
    difficulty: "All levels",
    tags: ["offroad", "training", "maandelijks"],
    price: null,
    recurring: true,
  },
  {
    id: 3,
    name: "Extra Motordag ActionPlanet",
    type: "training",
    date: "2026-08-16",
    dateEnd: "2026-08-16",
    location: "Spaarnwoude, Nederland",
    country: "NL",
    description: "Extra motordag speciaal voor thuisblijvers in de zomervakantie. Zelfde format als de reguliere maandelijkse motordag op een offroad terrein in het Recreatiegebied Spaarnwoude.",
    url: "https://www.actionplanet.nl/agenda/",
    source: "ActionPlanet",
    difficulty: "All levels",
    tags: ["offroad", "training", "zomer"],
    price: null,
    recurring: false,
  },
  {
    id: 4,
    name: "Motordag ActionPlanet",
    type: "training",
    date: "2026-09-13",
    dateEnd: "2026-09-13",
    location: "Spaarnwoude, Nederland",
    country: "NL",
    description: "Iedere 2e zondag van de maand kun je met je eigen allroad of adventure motor het offroad terrein van ActionPlanet op. Ervaren rijders geven instructie.",
    url: "https://www.actionplanet.nl/activiteit/motordagen/",
    source: "ActionPlanet",
    difficulty: "All levels",
    tags: ["offroad", "training", "maandelijks"],
    price: null,
    recurring: true,
  },
  {
    id: 5,
    name: "Motordag ActionPlanet",
    type: "training",
    date: "2026-10-11",
    dateEnd: "2026-10-11",
    location: "Spaarnwoude, Nederland",
    country: "NL",
    description: "Iedere 2e zondag van de maand kun je met je eigen allroad of adventure motor het offroad terrein van ActionPlanet op. Ervaren rijders geven instructie.",
    url: "https://www.actionplanet.nl/activiteit/motordagen/",
    source: "ActionPlanet",
    difficulty: "All levels",
    tags: ["offroad", "training", "maandelijks"],
    price: null,
    recurring: true,
  },

  // --- ADVENTURE CHALLENGE ---
  {
    id: 6,
    name: "Adventure Challenge 2026",
    type: "challenge",
    date: "2026-04-04",
    dateEnd: "2026-04-05",
    location: "ActionPlanet, Spaarnwoude",
    country: "NL",
    description: "De 4e editie van de Adventure Challenge. Een weekend vol technische offroad-oefeningen voor allroad-motoren. Diverse moeilijkheidsgraden, top 10 wint prijzen. Georganiseerd door Motorcursussen.nl en BackTrail. Kamperen op het terrein mogelijk.",
    url: "https://www.adventure-challenge.nl/",
    source: "Adventure Challenge",
    difficulty: "All levels",
    tags: ["challenge", "offroad", "competitie", "camping"],
    price: "€345",
    recurring: false,
  },

  // --- ALLROAD ACADEMY BELGIË ---
  {
    id: 7,
    name: "Small Group Training Level 1",
    type: "training",
    date: "2026-05-08",
    dateEnd: "2026-05-08",
    location: "Wetteren, België",
    country: "BE",
    description: "Groepstraining in kleine groepen voor beginners. Level 1 op de locatie in Wetteren. Persoonlijke begeleiding op maat. Van 14 tot 74 jaar, voor elke allroad rijder.",
    url: "https://www.allroad-academy.be/",
    source: "Allroad Academy",
    difficulty: "Beginner",
    tags: ["groepstraining", "skills", "beginner"],
    price: "€150",
    recurring: false,
  },
  {
    id: 8,
    name: "Small Group Training Level 2",
    type: "training",
    date: "2026-05-22",
    dateEnd: "2026-05-22",
    location: "Wetteren, België",
    country: "BE",
    description: "Level 2 groepstraining in Wetteren. Verdieping van techniek en vaardigheden op onverharde ondergronden. Kleine groepen voor maximale aandacht per rijder.",
    url: "https://www.allroad-academy.be/",
    source: "Allroad Academy",
    difficulty: "Intermediate",
    tags: ["groepstraining", "skills", "gevorderd"],
    price: "€150",
    recurring: false,
  },
  {
    id: 9,
    name: "Small Group Training Level 3",
    type: "training",
    date: "2026-05-29",
    dateEnd: "2026-05-29",
    location: "Ninove, België",
    country: "BE",
    description: "Level 3 groepstraining op de locatie in Ninove. Voor de meest gevorderde rijders. Focus op obstakels, technische passages en het opbouwen van maximale rijzekerheid.",
    url: "https://www.allroad-academy.be/",
    source: "Allroad Academy",
    difficulty: "Expert",
    tags: ["groepstraining", "skills", "expert"],
    price: "€150",
    recurring: false,
  },
  {
    id: 10,
    name: "Small Group Training Level 1",
    type: "training",
    date: "2026-08-07",
    dateEnd: "2026-08-07",
    location: "Wetteren, België",
    country: "BE",
    description: "Groepstraining Level 1 in de zomerperiode. Ideaal als eerste stap offroad of als opfrisser voor het naseizoen.",
    url: "https://www.allroad-academy.be/",
    source: "Allroad Academy",
    difficulty: "Beginner",
    tags: ["groepstraining", "skills", "beginner"],
    price: "€150",
    recurring: false,
  },
  {
    id: 11,
    name: "Small Group Training Level 2",
    type: "training",
    date: "2026-08-14",
    dateEnd: "2026-08-14",
    location: "Wetteren, België",
    country: "BE",
    description: "Level 2 groepstraining in augustus. Kleine groepen, persoonlijke begeleiding, focus op rijzekerheid en technische vaardigheden.",
    url: "https://www.allroad-academy.be/",
    source: "Allroad Academy",
    difficulty: "Intermediate",
    tags: ["groepstraining", "skills", "gevorderd"],
    price: "€150",
    recurring: false,
  },
  {
    id: 12,
    name: "Small Group Training Level 3",
    type: "training",
    date: "2026-08-16",
    dateEnd: "2026-08-16",
    location: "Ninove, België",
    country: "BE",
    description: "Level 3 groepstraining. Obstakels, technische passages en maximale rijzekerheid op de locatie in Ninove.",
    url: "https://www.allroad-academy.be/",
    source: "Allroad Academy",
    difficulty: "Expert",
    tags: ["groepstraining", "skills", "expert"],
    price: "€150",
    recurring: false,
  },
  {
    id: 13,
    name: "Small Group Training Level 1",
    type: "training",
    date: "2026-11-06",
    dateEnd: "2026-11-06",
    location: "Wetteren, België",
    country: "BE",
    description: "Herfstedite groepstraining Level 1. Het naseizoen is ideaal om nieuwe vaardigheden te leren op modderig en nat terrein.",
    url: "https://www.allroad-academy.be/",
    source: "Allroad Academy",
    difficulty: "Beginner",
    tags: ["groepstraining", "skills", "herfst"],
    price: "€150",
    recurring: false,
  },
  {
    id: 14,
    name: "Small Group Training Level 2",
    type: "training",
    date: "2026-11-07",
    dateEnd: "2026-11-07",
    location: "Wetteren, België",
    country: "BE",
    description: "Herfstedite Level 2. Technische training op uitdagende ondergronden in het late seizoen.",
    url: "https://www.allroad-academy.be/",
    source: "Allroad Academy",
    difficulty: "Intermediate",
    tags: ["groepstraining", "skills", "herfst"],
    price: "€150",
    recurring: false,
  },
  {
    id: 15,
    name: "Small Group Training Level 3",
    type: "training",
    date: "2026-11-08",
    dateEnd: "2026-11-08",
    location: "Ninove, België",
    country: "BE",
    description: "Herfstedite Level 3. Voor de gevorderde rijder die het seizoen afsluit met technische training in Ninove.",
    url: "https://www.allroad-academy.be/",
    source: "Allroad Academy",
    difficulty: "Expert",
    tags: ["groepstraining", "skills", "herfst"],
    price: "€150",
    recurring: false,
  },

  // --- ALEX VAN DEN BROEK EVENTS ---
  {
    id: 16,
    name: "Allroad Weekend Eiland van Maurik",
    type: "training",
    date: "2026-07-18",
    dateEnd: "2026-07-19",
    location: "Eiland van Maurik, Nederland",
    country: "NL",
    description: "Het jaarlijkse trainingsweekend van Alex van den Broek op het Eiland van Maurik. Dakar-trainingslocatie met mul zand, strand, singletracks en technisch werk. Keuze tussen begeleide training of vrij rijden op de uitgezette route. Kamperen direct aan de baan.",
    url: "https://www.alexvandenbroekevents.nl/boek-een-training/allroad-trainingen/allroad-weekend-maurik",
    source: "Alex van den Broek",
    difficulty: "All levels",
    tags: ["weekend", "training", "camping", "zand"],
    price: null,
    recurring: false,
  },

  // --- INTERNATIONALE EVENTS (BESTAAND) ---
  {
    id: 17,
    name: "Carta Rallye",
    type: "rallye-raid",
    date: "2026-04-17",
    dateEnd: "2026-04-24",
    location: "Marokko",
    country: "MA",
    description: "Een toegankelijk rallye-raid format met meerdere categorieën. Ideaal als eerste serieuze navigatie-ervaring buiten Europa. Piste, zand en roadbook navigatie.",
    url: "https://www.owaka.com/rallye-raid/carta-rallye",
    source: "Owaka",
    difficulty: "Beginner",
    tags: ["rally", "desert", "navigation"],
    price: null,
    recurring: false,
  },
  {
    id: 18,
    name: "Touratech Rally",
    type: "festival",
    date: "2026-06-04",
    dateEnd: "2026-06-07",
    location: "Bad Dürrheim, Duitsland",
    country: "DE",
    description: "Begon als klantenwaardering-weekend, uitgegroeid tot de grootste adventure-bikeweek van Europa. Rijden, kamperen en gear testen in de Zwarte Woud.",
    url: "https://www.touratech.de/rally",
    source: "Touratech",
    difficulty: "All levels",
    tags: ["festival", "gear", "community"],
    price: null,
    recurring: false,
  },
  {
    id: 19,
    name: "Stella Alpina",
    type: "gathering",
    date: "2026-07-10",
    dateEnd: "2026-07-12",
    location: "Bardonecchia, Italië",
    country: "IT",
    description: "Duizenden rijders trekken elk jaar op naar de Colle del Sommeiller op 3000m. Geen entry fees, geen commercie. Gravel, dunne lucht en uitzichten die je niet vergeet.",
    url: "https://outduro.com/blog/europes-top-adventure-motorcycle-events-for-2026/",
    source: "OUTDURO",
    difficulty: "Intermediate",
    tags: ["alpine", "gravel", "gathering"],
    price: null,
    recurring: false,
  },
  {
    id: 20,
    name: "Adventure Country Tracks Pyreneeën",
    type: "route",
    date: "2026-07-25",
    dateEnd: "2026-08-01",
    location: "Pyreneeën, FR/ES",
    country: "FR",
    description: "Begeleide routetocht door de ruigste onverharde paden van de Pyreneeën. Kleine groepen, lichte adventure bikes aanbevolen, roadbook navigatie.",
    url: "https://www.adventurecountrytracks.com",
    source: "ADV Pulse",
    difficulty: "Intermediate",
    tags: ["route", "gravel", "navigation"],
    price: null,
    recurring: false,
  },
  {
    id: 21,
    name: "Horizons Unlimited Germany",
    type: "gathering",
    date: "2026-08-14",
    dateEnd: "2026-08-16",
    location: "Thüringen, Duitsland",
    country: "DE",
    description: "Grassroots-treffen voor langeafstandsrijders. Presentaties en praktische kennis van rijders die de Gobi, Patagonie en de Silk Road daadwerkelijk hebben gereden.",
    url: "https://horizonsunlimited.com/hubb/meetings",
    source: "Horizons Unlimited",
    difficulty: "All levels",
    tags: ["overland", "community", "longdistance"],
    price: null,
    recurring: false,
  },
  {
    id: 22,
    name: "OUTDURO Scout Festival",
    type: "festival",
    date: "2026-09-18",
    dateEnd: "2026-09-20",
    location: "Letland, Baltische Staten",
    country: "LV",
    description: "Festivalweekend in de bossen van Letland. Workshops, trailside-repairs, biker cooking en verhalen bij het kampvuur. Gebouwd door rijders, voor rijders.",
    url: "https://outduro.com",
    source: "OUTDURO",
    difficulty: "All levels",
    tags: ["festival", "forest", "skills"],
    price: null,
    recurring: false,
  },
  {
    id: 23,
    name: "Morocco Desert Challenge",
    type: "rallye-raid",
    date: "2026-10-03",
    dateEnd: "2026-10-11",
    location: "Marrakech, Marokko",
    country: "MA",
    description: "Het op een na grootste rallye-raid ter wereld na de Dakar. Een coast-to-coast tocht zonder liaisons dwars door Marokko. Motos, SSV's en autos.",
    url: "https://www.owaka.com/rallye-raid/morocco-desert-challenge",
    source: "Owaka",
    difficulty: "Expert",
    tags: ["rally", "desert", "navigation"],
    price: null,
    recurring: false,
  },
];

const TYPE_CONFIG = {
  training: { label: "Training", color: "#8b7355" },
  challenge: { label: "Challenge", color: "#E86A1A" },
  "rallye-raid": { label: "Rallye-Raid", color: "#c0392b" },
  festival: { label: "Festival", color: "#5b8b7a" },
  gathering: { label: "Gathering", color: "#4A4A4A" },
  route: { label: "Route", color: "#6b8b6b" },
};

const SOURCE_CONFIG = {
  "ActionPlanet": { color: "#E86A1A" },
  "Adventure Challenge": { color: "#E86A1A" },
  "Allroad Academy": { color: "#8b7355" },
  "Alex van den Broek": { color: "#8b7355" },
  "Owaka": { color: "#4A4A4A" },
  "Touratech": { color: "#4A4A4A" },
  "OUTDURO": { color: "#4A4A4A" },
  "ADV Pulse": { color: "#4A4A4A" },
  "Horizons Unlimited": { color: "#4A4A4A" },
};

const DIFFICULTY_COLOR = {
  Beginner: "#6b8b6b",
  Intermediate: "#E86A1A",
  Expert: "#c0392b",
  "All levels": "#555",
};

const COUNTRY_FLAG = { NL: "🇳🇱", BE: "🇧🇪", DE: "🇩🇪", IT: "🇮🇹", FR: "🇫🇷", MA: "🇲🇦", LV: "🇱🇻", ES: "🇪🇸" };

const MONTHS = ["Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Dec"];

const ALL_SOURCES = [...new Set(EVENTS.map(e => e.source))];
const ALL_COUNTRIES = [...new Set(EVENTS.map(e => e.country))];

function formatDateRange(start, end) {
  const s = new Date(start);
  const e = new Date(end);
  if (start === end) return `${s.getDate()} ${MONTHS[s.getMonth()]} ${s.getFullYear()}`;
  if (s.getMonth() === e.getMonth()) return `${s.getDate()} t/m ${e.getDate()} ${MONTHS[s.getMonth()]} ${s.getFullYear()}`;
  return `${s.getDate()} ${MONTHS[s.getMonth()]} t/m ${e.getDate()} ${MONTHS[e.getMonth()]} ${s.getFullYear()}`;
}

function EventCard({ event, onClick }) {
  const type = TYPE_CONFIG[event.type] || { label: event.type, color: "#4A4A4A" };
  const day = new Date(event.date).getDate();
  const month = MONTHS[new Date(event.date).getMonth()];
  const srcColor = (SOURCE_CONFIG[event.source] || {}).color || "#555";

  return (
    <div
      onClick={() => onClick(event)}
      style={{
        background: "#111",
        border: "1px solid #1e1e1e",
        borderLeft: `3px solid ${type.color}`,
        borderRadius: "0 6px 6px 0",
        padding: "16px 18px",
        cursor: "pointer",
        display: "flex",
        gap: 18,
        alignItems: "flex-start",
        transition: "background 0.15s",
      }}
      onMouseEnter={e => e.currentTarget.style.background = "#161616"}
      onMouseLeave={e => e.currentTarget.style.background = "#111"}
    >
      <div style={{ textAlign: "center", minWidth: 44, flexShrink: 0 }}>
        <div style={{ fontSize: 20, fontWeight: 900, color: "#f0ece4", lineHeight: 1, fontFamily: "'Oswald','Arial Narrow',sans-serif" }}>{day}</div>
        <div style={{ fontSize: 9, letterSpacing: "2px", color: "#555", textTransform: "uppercase", marginTop: 2 }}>{month}</div>
      </div>
      <div style={{ width: 1, background: "#1e1e1e", alignSelf: "stretch", flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 5, flexWrap: "wrap" }}>
          <span style={{ fontSize: 9, letterSpacing: "1.5px", textTransform: "uppercase", color: type.color, fontWeight: 700 }}>{type.label}</span>
          <span style={{ fontSize: 9, color: "#333" }}>·</span>
          <span style={{ fontSize: 9, letterSpacing: "1px", textTransform: "uppercase", color: srcColor }}>{event.source}</span>
          {event.price && <span style={{ fontSize: 9, color: "#555", border: "1px solid #2a2a2a", borderRadius: 2, padding: "1px 5px" }}>{event.price}</span>}
          {event.recurring && <span style={{ fontSize: 9, color: "#444", border: "1px solid #1e1e1e", borderRadius: 2, padding: "1px 5px" }}>Maandelijks</span>}
        </div>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#f0ece4", marginBottom: 3, fontFamily: "'Oswald','Arial Narrow',sans-serif", letterSpacing: "0.5px" }}>
          {event.name.toUpperCase()}
        </div>
        <div style={{ fontSize: 11, color: "#555" }}>
          {COUNTRY_FLAG[event.country]} {event.location}
        </div>
      </div>
    </div>
  );
}

function EventModal({ event, onClose }) {
  if (!event) return null;
  const type = TYPE_CONFIG[event.type] || { label: event.type, color: "#4A4A4A" };
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 20 }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ background: "#0f0f0f", border: "1px solid #222", borderTop: `3px solid ${type.color}`, borderRadius: "0 0 8px 8px", padding: "28px", width: "100%", maxWidth: 540, maxHeight: "90vh", overflowY: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
          <div>
            <div style={{ fontSize: 9, letterSpacing: "3px", textTransform: "uppercase", color: type.color, marginBottom: 5 }}>{type.label} / {event.source}</div>
            <div style={{ fontSize: 20, fontWeight: 900, color: "#f0ece4", fontFamily: "'Oswald','Arial Narrow',sans-serif" }}>{event.name.toUpperCase()}</div>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#555", cursor: "pointer", fontSize: 18, padding: 4 }}>✕</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 18 }}>
          {[
            ["Datum", formatDateRange(event.date, event.dateEnd)],
            ["Locatie", `${COUNTRY_FLAG[event.country]} ${event.location}`],
            ["Niveau", event.difficulty],
            ["Prijs", event.price || "Zie website"],
          ].map(([label, val]) => (
            <div key={label} style={{ background: "#161616", borderRadius: 5, padding: "12px 14px" }}>
              <div style={{ fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", color: "#555", marginBottom: 3 }}>{label}</div>
              <div style={{ fontSize: 12, color: label === "Niveau" ? (DIFFICULTY_COLOR[event.difficulty] || "#d4cfc7") : "#d4cfc7", fontWeight: label === "Niveau" ? 700 : 400 }}>{val}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7, marginBottom: 20 }}>{event.description}</p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
          {event.tags.map(t => (
            <span key={t} style={{ fontSize: 9, letterSpacing: "1px", textTransform: "uppercase", color: "#444", border: "1px solid #222", borderRadius: 2, padding: "3px 7px" }}>{t}</span>
          ))}
        </div>
        <a href={event.url} target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-block", background: "#E86A1A", color: "#fff", padding: "11px 22px", borderRadius: 4, textDecoration: "none", fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
          Meer info en inschrijven
        </a>
      </div>
    </div>
  );
}

export default function EventsCalendar() {
  const [filterType, setFilterType] = useState("all");
  const [filterSource, setFilterSource] = useState("all");
  const [filterCountry, setFilterCountry] = useState("all");
  const [filterMonth, setFilterMonth] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const usedMonths = [...new Set(EVENTS.map(e => new Date(e.date).getMonth()))].sort((a,b) => a-b);

  const filtered = EVENTS
    .filter(e => filterType === "all" || e.type === filterType)
    .filter(e => filterSource === "all" || e.source === filterSource)
    .filter(e => filterCountry === "all" || e.country === filterCountry)
    .filter(e => filterMonth === "all" || new Date(e.date).getMonth() === parseInt(filterMonth))
    .sort((a,b) => new Date(a.date) - new Date(b.date));

  const grouped = {};
  filtered.forEach(e => {
    const d = new Date(e.date);
    const key = `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(e);
  });

  const btnStyle = (active, color) => ({
    background: active ? (color || "#f0ece4") : "none",
    color: active ? (color ? "#fff" : "#0a0a0a") : "#555",
    border: `1px solid ${active ? (color || "#f0ece4") : "#222"}`,
    borderRadius: 3, padding: "4px 10px", cursor: "pointer",
    fontSize: 9, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase",
    transition: "all 0.15s", whiteSpace: "nowrap",
  });

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#f0ece4", fontFamily: "'Inter','Helvetica Neue',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Inter:wght@400;700&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #2a2a2a; border-radius: 2px; }
      `}</style>

      {/* Header */}
      <header style={{ borderBottom: "1px solid #1a1a1a", padding: "20px 24px 16px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: 9, letterSpacing: "4px", textTransform: "uppercase", color: "#444", marginBottom: 4 }}>ENDURIOUS</div>
          <h1 style={{ margin: 0, fontSize: 26, fontWeight: 900, fontFamily: "'Oswald','Arial Narrow',sans-serif", textTransform: "uppercase", color: "#f0ece4" }}>
            EVENT KALENDER <span style={{ color: "#E86A1A" }}>2026</span>
          </h1>
          <p style={{ margin: "4px 0 0", fontSize: 12, color: "#444" }}>
            {EVENTS.length} events · NL, BE en Europa · meerdere bronnen
          </p>
        </div>
      </header>

      {/* Filter bar */}
      <div style={{ borderBottom: "1px solid #111", padding: "12px 24px", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 }}>
          {/* Row 1: Type + Month */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", color: "#333", marginRight: 4 }}>Type</span>
            <button style={btnStyle(filterType === "all")} onClick={() => setFilterType("all")}>Alle</button>
            {Object.entries(TYPE_CONFIG).map(([k, v]) => (
              <button key={k} style={btnStyle(filterType === k, v.color)} onClick={() => setFilterType(k)}>{v.label}</button>
            ))}
          </div>
          {/* Row 2: Source + Country */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", color: "#333", marginRight: 4 }}>Bron</span>
            <button style={btnStyle(filterSource === "all")} onClick={() => setFilterSource("all")}>Alle</button>
            {ALL_SOURCES.map(s => (
              <button key={s} style={btnStyle(filterSource === s, (SOURCE_CONFIG[s] || {}).color)} onClick={() => setFilterSource(s)}>{s}</button>
            ))}
            <span style={{ width: 1, height: 14, background: "#222", margin: "0 4px", flexShrink: 0 }} />
            <span style={{ fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", color: "#333", marginRight: 4 }}>Land</span>
            <button style={btnStyle(filterCountry === "all")} onClick={() => setFilterCountry("all")}>Alle</button>
            {ALL_COUNTRIES.map(c => (
              <button key={c} style={btnStyle(filterCountry === c)} onClick={() => setFilterCountry(c)}>{COUNTRY_FLAG[c]} {c}</button>
            ))}
          </div>
          {/* Row 3: Month */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", color: "#333", marginRight: 4 }}>Maand</span>
            <button style={btnStyle(filterMonth === "all")} onClick={() => setFilterMonth("all")}>Alle</button>
            {usedMonths.map(m => (
              <button key={m} style={btnStyle(filterMonth === String(m))} onClick={() => setFilterMonth(String(m))}>{MONTHS[m]}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Events */}
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "24px 24px 60px" }}>
        {/* Source legend */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid #111" }}>
          {ALL_SOURCES.map(s => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: (SOURCE_CONFIG[s] || {}).color || "#555" }} />
              <span style={{ fontSize: 10, color: "#444", letterSpacing: "1px" }}>{s}</span>
            </div>
          ))}
        </div>

        {Object.keys(grouped).length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#444" }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>🏜</div>
            <div style={{ fontSize: 13 }}>Geen events gevonden voor deze filters.</div>
          </div>
        )}

        {Object.entries(grouped).map(([monthLabel, events]) => (
          <div key={monthLabel} style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#E86A1A", fontWeight: 700, whiteSpace: "nowrap" }}>{monthLabel}</div>
              <div style={{ flex: 1, height: 1, background: "#1a1a1a" }} />
              <div style={{ fontSize: 9, color: "#333", letterSpacing: "1px" }}>{events.length} event{events.length !== 1 ? "s" : ""}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {events.map(e => <EventCard key={e.id} event={e} onClick={setSelectedEvent} />)}
            </div>
          </div>
        ))}

        <div style={{ borderTop: "1px solid #111", paddingTop: 20, marginTop: 8 }}>
          <p style={{ fontSize: 10, color: "#333", lineHeight: 1.6 }}>
            Events samengesteld via ActionPlanet, Adventure Challenge, Allroad Academy, Alex van den Broek Events, Owaka, ADV Pulse en OUTDURO. Controleer de officiële pagina voor actuele data en inschrijfinfo.
          </p>
        </div>
      </main>

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}
