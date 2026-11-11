import { useState, useEffect, useMemo } from "react";
import {
  Sparkles, Sun, Moon, Crown, LogOut, Film, Users, Scissors, CalendarCheck, Clock, Play,
  Image as ImageIcon, Trash2, Plus, X, Phone, Mail, User, Eye, Wallet,
  ShieldCheck, Upload, LayoutDashboard, CalendarDays,
  Star, Leaf, Heart, Award, MapPin, ChevronDown, ArrowRight,
} from "lucide-react";

/* Local icons: avoids any dependency on lucide-react's renamed/removed exports. */
const CheckCircle2 = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
const Instagram = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

const LOGO = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZap5l6GM8fSmWaOGxThKWSsZRkbij6YCLfyJ5M2lPGkljBC40scO4pYA&s=10";
const VIDEO = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
.lx-display{font-family:'Fraunces',Georgia,serif}
.lx-body{font-family:'Plus Jakarta Sans',system-ui,sans-serif}
@keyframes lx-float{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(30px,-24px,0) scale(1.12)}}
@keyframes lx-rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
@keyframes lx-pop{from{opacity:0;transform:scale(.94) translateY(10px)}to{opacity:1;transform:none}}
@keyframes lx-shine{to{background-position:200% center}}
.lx-float{animation:lx-float 9s ease-in-out infinite}
.lx-rise{animation:lx-rise .6s cubic-bezier(.2,.8,.2,1) both}
.lx-pop{animation:lx-pop .3s cubic-bezier(.2,.8,.2,1) both}
.lx-shine{background-size:200% auto;animation:lx-shine 6s linear infinite}
@keyframes lx-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
@keyframes lx-grow{from{transform:scaleY(0)}to{transform:scaleY(1)}}
@keyframes lx-growx{from{transform:scaleX(0)}to{transform:scaleX(1)}}
.lx-bob{animation:lx-bob 4s ease-in-out infinite}
.lx-grow{transform-origin:bottom;animation:lx-grow .9s cubic-bezier(.2,.8,.2,1) both}
.lx-grow-x{transform-origin:left;animation:lx-growx .9s cubic-bezier(.2,.8,.2,1) both}
html{scroll-behavior:smooth}
@keyframes lx-marquee{to{transform:translateX(-50%)}}
@keyframes lx-pulse{0%{box-shadow:0 0 0 0 rgba(255,69,0,.5)}100%{box-shadow:0 0 0 14px rgba(255,69,0,0)}}
@keyframes lx-wiggle{0%,100%{transform:rotate(0)}25%{transform:rotate(-8deg)}75%{transform:rotate(8deg)}}
.lx-marquee{animation:lx-marquee 28s linear infinite}
.lx-pulse{animation:lx-pulse 2.4s ease-out infinite}
.lx-wiggle:hover .lx-ico{animation:lx-wiggle .5s ease}
.lx-btn{position:relative;overflow:hidden}
.lx-btn::after{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(255,255,255,.4) 50%,transparent 70%);transform:translateX(-130%);transition:transform .7s}
.lx-btn:hover::after{transform:translateX(130%)}
.lx-stagger>*{animation:lx-rise .6s cubic-bezier(.2,.8,.2,1) both}
${Array.from({ length: 12 }, (_, i) => `.lx-stagger>*:nth-child(${i + 1}){animation-delay:${i * 70}ms}`).join("")}
@media (prefers-reduced-motion:reduce){.lx-float,.lx-rise,.lx-pop,.lx-shine,.lx-marquee,.lx-pulse,.lx-bob,.lx-grow,.lx-grow-x,.lx-stagger>*{animation:none}}
`;

/* ---------- Generated artwork (inline SVG, no external files) ---------- */
const art = (a, b, c) => `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${a}'/><stop offset='1' stop-color='${b}'/></linearGradient></defs><rect width='400' height='500' fill='url(#g)'/>${Array.from({ length: 9 }, (_, i) => `<path d='M${40 + i * 40} -10 C ${120 + i * 20} 140, ${-20 + i * 50} 300, ${60 + i * 38} 520' stroke='${c}' stroke-opacity='.${3 + (i % 4)}' stroke-width='${10 + (i % 3) * 6}' fill='none' stroke-linecap='round'/>`).join("")}<circle cx='320' cy='90' r='46' fill='${c}' fill-opacity='.25'/></svg>`
)}`;

const shaveArt = () => `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'><defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#0b1a3a'/><stop offset='1' stop-color='#000'/></linearGradient><clipPath id='p'><rect x='70' y='90' width='70' height='320' rx='35'/></clipPath></defs><rect width='400' height='500' fill='url(#g)'/><g clip-path='url(#p)'><rect x='60' y='80' width='90' height='340' fill='#fff'/>${Array.from({ length: 7 }, (_, i) => `<path d='M60 ${60 + i * 56} L150 ${110 + i * 56} L150 ${142 + i * 56} L60 ${92 + i * 56} Z' fill='${i % 2 ? "#3b82f6" : "#ff4500"}'/>`).join("")}</g><rect x='62' y='70' width='86' height='28' rx='14' fill='#10b981'/><rect x='62' y='402' width='86' height='28' rx='14' fill='#10b981'/><g transform='rotate(-24 270 260)'><rect x='120' y='245' width='110' height='16' rx='6' fill='#e2e8f0'/><rect x='215' y='236' width='130' height='34' rx='14' fill='#ff4500'/><circle cx='330' cy='253' r='6' fill='#fff'/></g><g fill='#fff'><circle cx='250' cy='370' r='34'/><circle cx='290' cy='350' r='28'/><circle cx='322' cy='378' r='30'/><circle cx='280' cy='396' r='26'/></g><text x='200' y='470' text-anchor='middle' font-family='Georgia,serif' font-size='26' fill='#fff'>Classic hot-towel shave</text></svg>`
)}`;

const seed = {
  services: [
    { id: "1", title: "Signature Silk Press & Steam", price: 35000, duration: "90 mins" },
    { id: "2", title: "Artisan Knotless Goddess Braids", price: 45000, duration: "180 mins" },
    { id: "3", title: "Deep Conditioning Scalp Ritual", price: 25000, duration: "60 mins" },
    { id: "4", title: "Classic Hot-Towel Shave & Beard Sculpt", price: 15000, duration: "45 mins" },
    { id: "5", title: "Precision Fade & Line-Up", price: 12000, duration: "40 mins" },
  ],
  workers: [
    { id: "1", name: "Aline Uwase", role: "Founder & Master Stylist", schedule: "Mon – Sun, 08:00 – 19:00" },
    { id: "2", name: "Diane Keza", role: "Senior Braiding Artisan", schedule: "Mon – Sat, 09:00 – 18:00" },
  ],
  media: [
    { id: "yt1", title: "Shaving vs trimming: which suits you?", type: "short", yt: "4qYgHaC2CTA", date: "Featured", views: "Barber tips" },
    { id: "a4", title: "Classic hot-towel shave", type: "image", url: shaveArt(), date: "Featured", views: "Barbering" },
    { id: "a1", title: "Goddess braids, finished", type: "image", url: art("#0b1a3a", "#ff4500", "#ffffff"), date: "Today", views: "820 views" },
    { id: "a2", title: "Silk press glow", type: "image", url: art("#064e3b", "#10b981", "#ffffff"), date: "Yesterday", views: "640 views" },
    { id: "a3", title: "Scalp ritual care", type: "image", url: art("#1e3a8a", "#0b1a3a", "#ff7a1a"), date: "2 days ago", views: "510 views" },
    { id: "1", title: "Kigali Silk Press Transformation", type: "longvideo", url: VIDEO, date: "2 hours ago", views: "1.4K views" },
    { id: "2", title: "Quick Braid Styling", type: "short", url: VIDEO, date: "1 day ago", views: "5.2K views" },
  ],
  bookings: [],
};

function useStored(key, initial) {
  const [v, setV] = useState(() => {
    try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : initial; } catch { return initial; }
  });
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(v)); } catch { /* ignore */ } }, [key, v]);
  return [v, setV];
}

const idb = () => new Promise((res, rej) => {
  const r = indexedDB.open("leclat_files", 1);
  r.onupgradeneeded = () => r.result.createObjectStore("files");
  r.onsuccess = () => res(r.result);
  r.onerror = () => rej(r.error);
});
const idbRun = async (mode, fn) => {
  const db = await idb();
  return new Promise((res, rej) => {
    const req = fn(db.transaction("files", mode).objectStore("files"));
    req.onsuccess = () => res(req.result);
    req.onerror = () => rej(req.error);
  });
};
const saveFile = (id, blob) => idbRun("readwrite", (st) => st.put(blob, id));
const loadFile = (id) => idbRun("readonly", (st) => st.get(id));
const removeFile = (id) => idbRun("readwrite", (st) => st.delete(id));

const rwf = (n) => `${Number(n).toLocaleString("en-US")} RWF`;
const grad = "bg-gradient-to-br from-[#ff4500] via-[#ff5c1c] to-[#ff7a1a]";
const card = "rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,.06)] dark:border-blue-400/15 dark:bg-[#0b1a3a]/70";
const input = "w-full rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#ff4500] focus:ring-2 focus:ring-[#ff4500]/30 dark:border-blue-400/15 dark:bg-[#0f2347] dark:text-white";
const btnPrimary = `lx-btn inline-flex items-center justify-center gap-2 rounded-full ${grad} px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#ff4500]/30 transition hover:-translate-y-0.5 hover:shadow-[#ff4500]/50 active:translate-y-0`;
const btnGhost = "inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-3.5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-blue-400/15 dark:text-slate-200 dark:hover:bg-blue-400/10";

function Logo({ small }) {
  const [broken, setBroken] = useState(false);
  const size = small ? "h-9 w-9" : "h-11 w-11";
  return (
    <div className="flex items-center gap-3">
      {broken ? (
        <div className={`${size} ${grad} grid place-items-center rounded-xl text-white`}><Sparkles size={20} /></div>
      ) : (
        <img src={LOGO} alt="L'Éclat logo" onError={() => setBroken(true)} className={`${size} rounded-xl object-cover ring-2 ring-[#ff4500]/50 lx-pulse`} />
      )}
      <div className="leading-tight">
        <div className="lx-display text-xl font-bold text-slate-900 dark:text-white">L'Éclat</div>
        <div className="text-[11px] font-medium text-[#e63e00] dark:text-[#ff7a45]">Salon & Spa · Kiyovu</div>
      </div>
    </div>
  );
}

function Modal({ onClose, children, wide }) {
  useEffect(() => {
    const h = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/60 p-4 backdrop-blur-sm" onMouseDown={onClose}>
      <div onMouseDown={(e) => e.stopPropagation()} className={`lx-pop relative max-h-[90vh] w-full overflow-y-auto rounded-3xl border border-slate-200 bg-white p-7 shadow-2xl dark:border-blue-400/15 dark:bg-[#0a1630] ${wide ? "max-w-xl" : "max-w-sm"}`}>
        <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-blue-400/10"><X size={18} /></button>
        {children}
      </div>
    </div>
  );
}

const Field = ({ label, icon: Icon, children }) => (
  <label className="mb-4 block">
    <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300">{Icon && <Icon size={13} />}{label}</span>
    {children}
  </label>
);

function Tabs({ tabs, value, onChange }) {
  return (
    <div className="mb-8 flex flex-wrap gap-2 rounded-3xl border border-slate-200 bg-white p-1.5 dark:border-blue-400/15 dark:bg-[#0b1a3a]/70">
      {tabs.map(({ id, label, icon: Icon }) => (
        <button key={id} onClick={() => onChange(id)}
          className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${value === id ? `${grad} text-white shadow-md` : "text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-blue-400/10"}`}>
          <Icon size={16} />{label}
        </button>
      ))}
    </div>
  );
}

const Empty = ({ icon: Icon, text }) => (
  <div className="col-span-full grid place-items-center rounded-2xl border-2 border-dashed border-slate-200 p-10 text-center text-sm text-slate-500 dark:border-blue-400/15">
    <Icon className="mb-2 text-[#ff4500]" size={28} />{text}
  </div>
);

function MediaCard({ m, onDelete }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [m.url]);
  return (
    <div className={`${card} group overflow-hidden transition hover:-translate-y-1 hover:border-[#ff4500]/60`}>
      <div className={`relative bg-black ${m.type === "short" ? "mx-auto aspect-[9/16] max-h-96" : "aspect-video"}`}>
        {m.yt ? (
          <iframe src={`https://www.youtube-nocookie.com/embed/${m.yt}?rel=0&playsinline=1`} title={m.title} loading="lazy" allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="h-full w-full border-0" />
        ) : !m.url || failed ? (
          <div className="grid h-full w-full place-items-center p-6 text-center text-xs text-slate-300"><span>This file couldn't be loaded.<br />Delete it and upload it again.</span></div>
        ) : m.type === "image" ? (
          <img src={m.url} alt={m.title} onError={() => setFailed(true)} className="h-full w-full object-cover" />
        ) : (
          <video controls playsInline preload="metadata" src={m.url} onError={() => setFailed(true)} className="h-full w-full object-contain" />
        )}
        <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
          {m.type === "image" ? <ImageIcon size={12} /> : <Play size={12} />}{m.type === "short" ? "Short" : m.type === "image" ? "Photo" : "Video"}
        </span>
      </div>
      <div className="flex items-start gap-3 p-4">
        <div className={`${grad} grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-bold text-white`}>É</div>
        <div className="min-w-0 flex-1">
          <h3 className="line-clamp-2 text-sm font-semibold text-slate-900 dark:text-white">{m.title}</h3>
          <p className="mt-0.5 text-xs text-slate-500">{m.views} · {m.date}</p>
        </div>
        {onDelete && <button onClick={() => onDelete(m.id)} aria-label="Delete" className="rounded-lg p-2 text-rose-500 hover:bg-rose-500/10"><Trash2 size={16} /></button>}
      </div>
    </div>
  );
}

function ServiceCard({ s, onBook, onDelete }) {
  return (
    <div className={`${card} lx-wiggle flex flex-col justify-between gap-5 p-5 transition hover:-translate-y-1 hover:border-[#ff4500]/60`}>
      <div>
        <div className={`${grad} mb-4 grid h-11 w-11 place-items-center rounded-xl text-white`}><Scissors className="lx-ico" size={20} /></div>
        <h3 className="lx-display text-lg font-bold text-slate-900 dark:text-white">{s.title}</h3>
        <p className="mt-2 text-lg font-bold text-[#e63e00] dark:text-[#ff7a45]">{rwf(s.price)}</p>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500"><Clock size={13} />{s.duration}</p>
      </div>
      {onBook && <button className={btnPrimary} onClick={() => onBook(s)}><CalendarCheck size={16} />Book appointment</button>}
      {onDelete && <button className={`${btnGhost} text-rose-500`} onClick={() => onDelete(s.id)}><Trash2 size={15} />Delete</button>}
    </div>
  );
}

function WorkerCard({ w, onDelete }) {
  const initials = w.name.split(" ").map((p) => p[0]).slice(0, 2).join("");
  return (
    <div className={`${card} flex items-center gap-4 p-5 transition hover:-translate-y-1 hover:border-[#ff4500]/60`}>
      <div className={`${grad} grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-lg font-bold text-white`}>{initials}</div>
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-semibold text-slate-900 dark:text-white">{w.name}</h3>
        <p className="text-xs font-medium text-[#e63e00] dark:text-[#ff7a45]">{w.role}</p>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500"><Clock size={12} />{w.schedule}</p>
      </div>
      {onDelete && <button onClick={() => onDelete(w.id)} aria-label="Remove" className="rounded-lg p-2 text-rose-500 hover:bg-rose-500/10"><Trash2 size={16} /></button>}
    </div>
  );
}

function useCountUp(target, ms = 900) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf, t0;
    const tick = (t) => {
      if (t0 === undefined) t0 = t;
      const p = Math.min((t - t0) / ms, 1);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);
  return n;
}

function Stat({ icon: Icon, label, value, tint, money }) {
  const n = useCountUp(value);
  return (
    <div className={`${card} flex items-center gap-4 p-5`}>
      <div className={`grid h-12 w-12 place-items-center rounded-xl ${tint}`}><Icon size={22} /></div>
      <div>
        <div className="lx-display text-2xl font-bold text-slate-900 dark:text-white">{money ? rwf(n) : n}</div>
        <div className="text-xs text-slate-500">{label}</div>
      </div>
    </div>
  );
}

export default function LeclatSalon() {
  const [dark, setDark] = useStored("leclat_dark", true);
  const [isAdmin, setIsAdmin] = useStored("leclat_admin", false);
  const [services, setServices] = useStored("leclat_services_v2", seed.services);
  const [workers, setWorkers] = useStored("leclat_workers", seed.workers);
  const [media, setMedia] = useStored("leclat_media_v3", seed.media);
  const [bookings, setBookings] = useStored("leclat_bookings", seed.bookings);

  const [adminTab, setAdminTab] = useState("overview");
  const [loginOpen, setLoginOpen] = useState(false);
  const [booking, setBooking] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => { document.documentElement.classList.toggle("dark", dark); }, [dark]);
  useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(null), 3200); return () => clearTimeout(t); }, [toast]);
  const notify = (title, msg) => setToast({ title, msg });

  const [fileUrls, setFileUrls] = useState({});
  useEffect(() => {
    let alive = true;
    media.filter((m) => m.local && !fileUrls[m.id]).forEach(async (m) => {
      try {
        const blob = await loadFile(m.id);
        if (blob && alive) setFileUrls((u) => ({ ...u, [m.id]: URL.createObjectURL(blob) }));
      } catch { /* ignore */ }
    });
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [media]);
  const shownMedia = media.map((m) => {
    if (m.local) return { ...m, url: fileUrls[m.id] };
    if (m.url?.startsWith("blob:")) return { ...m, url: undefined }; // dead link saved by the old version
    if (m.url?.includes("w3schools")) return { ...m, url: VIDEO };
    return m;
  });

  const revenue = useMemo(() => bookings.reduce((a, b) => a + Number(b.priceValue || 0), 0), [bookings]);

  const login = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const ok = f.get("email").trim() === "admin@leclat.rw" && ["admin123", "123456"].includes(f.get("pass").trim());
    if (ok) { setIsAdmin(true); setLoginOpen(false); notify("Welcome back", "You're in the admin dashboard."); }
    else notify("Access denied", "Check your email and password, then try again.");
  };

  const addMedia = async (e) => {
    e.preventDefault();
    const form = e.target; const f = new FormData(form); const file = f.get("file");
    const link = (f.get("yt") || "").trim();
    if (link) {
      const m = link.match(/(?:shorts\/|v=|youtu\.be\/|embed\/)([\w-]{11})/);
      if (!m) { notify("Link not recognised", "Paste a full YouTube or YouTube Shorts link."); return; }
      setMedia((list) => [{ id: Date.now().toString(), title: f.get("title"), type: f.get("type"), yt: m[1], date: "Just now", views: "YouTube" }, ...list]);
      form.reset(); notify("Published", "Your YouTube video is live on the feed."); return;
    }
    if (!file || !file.size) { notify("Add a file or a link", "Choose a file or paste a YouTube link."); return; }
    const id = Date.now().toString();
    try { await saveFile(id, file); } catch { notify("Upload failed", "Your browser couldn't store this file. Try a smaller one."); return; }
    setFileUrls((u) => ({ ...u, [id]: URL.createObjectURL(file) }));
    setMedia((list) => [{ id, local: true, title: f.get("title"), type: f.get("type"), date: "Just now", views: "0 views" }, ...list]);
    form.reset(); notify("Published", "Your media is live on the public feed.");
  };
  const deleteMedia = (id) => { removeFile(id).catch(() => {}); setMedia(media.filter((m) => m.id !== id)); notify("Removed", "Media deleted."); };
  const addWorker = (e) => {
    e.preventDefault(); const f = new FormData(e.target);
    setWorkers([...workers, { id: Date.now().toString(), name: f.get("name"), role: f.get("role"), schedule: f.get("schedule") }]);
    notify("Stylist added", `${f.get("name")} joined the team.`); e.target.reset();
  };
  const addService = (e) => {
    e.preventDefault(); const f = new FormData(e.target);
    setServices([...services, { id: Date.now().toString(), title: f.get("title"), price: Number(f.get("price")), duration: f.get("duration") }]);
    e.target.reset(); notify("Service saved", "It now appears on the booking menu.");
  };
  const submitBooking = (e) => {
    e.preventDefault(); const f = new FormData(e.target);
    const b = {
      id: Date.now().toString(), service: booking.title, priceValue: booking.price, worker: f.get("worker"),
      date: f.get("date"), time: f.get("time"), name: f.get("name"), phone: f.get("phone"), email: f.get("email"),
    };
    setBookings([b, ...bookings]); setBooking(null);
    notify("Appointment reserved", `${b.name}, you're booked for ${b.service} on ${b.date} at ${b.time}.`);
  };

  const adminTabs = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "media", label: "Media", icon: Upload },
    { id: "workers", label: "Staff", icon: Users },
    { id: "services", label: "Services", icon: Scissors },
    { id: "bookings", label: "Appointments", icon: CalendarDays },
  ];

  const Delete = (setter, list, msg) => (id) => { setter(list.filter((x) => x.id !== id)); notify("Removed", msg); };
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="lx-body relative min-h-screen overflow-x-hidden bg-white text-slate-900 transition-colors dark:bg-black dark:text-slate-100">
      <style>{css}</style>

      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="lx-float absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#ff4500]/20 blur-3xl" />
        <div className="lx-float absolute -right-24 top-40 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" style={{ animationDelay: "-4s" }} />
        <div className="lx-float absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-blue-700/25 blur-3xl" style={{ animationDelay: "-7s" }} />
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-blue-400/15 dark:bg-black/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">
          <Logo />
          {!isAdmin && (
            <nav className="hidden items-center gap-1 lg:flex">
              {[["services", "Services"], ["gallery", "Gallery"], ["team", "Team"], ["reviews", "Reviews"], ["visit", "Visit"]].map(([id, l]) => (
                <button key={id} onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })} className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-[#e63e00] dark:text-slate-300 dark:hover:bg-blue-400/10">{l}</button>
              ))}
            </nav>
          )}
          <div className="flex items-center gap-2">
            <button onClick={() => setDark(!dark)} aria-label="Toggle theme" className={`${btnGhost} !px-3`}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
            {isAdmin ? (
              <button className={`${btnGhost} text-rose-500`} onClick={() => { setIsAdmin(false); notify("Signed out", "Back on the public site."); }}><LogOut size={16} /><span className="hidden sm:inline">Exit dashboard</span></button>
            ) : (
              <button className={btnPrimary} onClick={() => setLoginOpen(true)}><Crown size={16} />Admin</button>
            )}
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-8">
        {!isAdmin ? (
          <Landing media={shownMedia} services={services} workers={workers} bookings={bookings} onBook={setBooking} />
        ) : (
          <>
            <div className="lx-rise mb-6">
              <h1 className="lx-display text-3xl font-bold">Admin dashboard</h1>
              <p className="text-sm text-slate-500">Manage your feed, team, services and appointments.</p>
            </div>
            <Tabs tabs={adminTabs} value={adminTab} onChange={setAdminTab} />

            <div key={adminTab} className="lx-rise">
              {adminTab === "overview" && <Overview bookings={bookings} workers={workers} services={services} media={media} revenue={revenue} goTab={setAdminTab} />}

              {adminTab === "media" && (
                <Split title="Upload media" form={
                  <form onSubmit={addMedia}>
                    <Field label="Title"><input name="title" required className={input} placeholder="Goddess braids reel" /></Field>
                    <Field label="Format">
                      <select name="type" className={input}><option value="longvideo">Long video</option><option value="short">Short (vertical)</option><option value="image">Photo</option></select>
                    </Field>
                    <Field label="File"><input type="file" name="file" accept="video/*,image/*" className={input} /></Field>
                    <Field label="Or paste a YouTube link"><input name="yt" className={input} placeholder="https://youtube.com/shorts/..." /></Field>
                    <button className={`${btnPrimary} w-full`}><Upload size={16} />Publish to feed</button>
                  </form>}>
                  {shownMedia.map((m) => <MediaCard key={m.id} m={m} onDelete={deleteMedia} />)}
                  {!media.length && <Empty icon={Film} text="Upload your first video or photo." />}
                </Split>
              )}

              {adminTab === "workers" && (
                <Split title="Add stylist" form={
                  <form onSubmit={addWorker}>
                    <Field label="Full name" icon={User}><input name="name" required className={input} placeholder="Diane Keza" /></Field>
                    <Field label="Specialty"><input name="role" required className={input} placeholder="Master braider" /></Field>
                    <Field label="Schedule" icon={Clock}><input name="schedule" required className={input} placeholder="Mon – Sat, 09:00 – 18:00" /></Field>
                    <button className={`${btnPrimary} w-full`}><Plus size={16} />Add to team</button>
                  </form>}>
                  {workers.map((w) => <WorkerCard key={w.id} w={w} onDelete={Delete(setWorkers, workers, "Stylist removed.")} />)}
                </Split>
              )}

              {adminTab === "services" && (
                <Split title="Add service" form={
                  <form onSubmit={addService}>
                    <Field label="Service name"><input name="title" required className={input} placeholder="Silk press & steam" /></Field>
                    <Field label="Price (RWF)"><input name="price" type="number" min="0" required className={input} placeholder="35000" /></Field>
                    <Field label="Duration"><input name="duration" required className={input} placeholder="90 mins" /></Field>
                    <button className={`${btnPrimary} w-full`}><Plus size={16} />Save service</button>
                  </form>}>
                  {services.map((s) => <ServiceCard key={s.id} s={s} onDelete={Delete(setServices, services, "Service removed.")} />)}
                </Split>
              )}

              {adminTab === "bookings" && (
                <div className="lx-stagger grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {bookings.map((b) => <BookingCard key={b.id} b={b} />)}
                  {!bookings.length && <Empty icon={CalendarDays} text="No appointments yet." />}
                </div>
              )}
            </div>
          </>
        )}
      </main>

      {loginOpen && (
        <Modal onClose={() => setLoginOpen(false)}>
          <div className="mb-6 text-center">
            <div className={`${grad} mx-auto mb-3 grid h-12 w-12 place-items-center rounded-2xl text-white`}><ShieldCheck size={24} /></div>
            <h3 className="lx-display text-2xl font-bold">Admin sign in</h3>
            <p className="text-xs text-slate-500">For authorised salon staff only.</p>
          </div>
          <form onSubmit={login}>
            <Field label="Email" icon={Mail}><input name="email" type="email" required className={input} placeholder="admin@leclat.rw" /></Field>
            <Field label="Password"><input name="pass" type="password" required className={input} placeholder="••••••••" /></Field>
            <button className={`${btnPrimary} w-full`}>Open dashboard</button>
          </form>
        </Modal>
      )}

      {booking && (
        <Modal wide onClose={() => setBooking(null)}>
          <h3 className="lx-display text-2xl font-bold">Book your session</h3>
          <p className="mb-5 mt-1 text-sm text-slate-500">{booking.title} · {rwf(booking.price)}</p>
          <form onSubmit={submitBooking}>
            <Field label="Stylist">
              <select name="worker" required className={input}>{workers.map((w) => <option key={w.id} value={w.name}>{w.name} – {w.role}</option>)}</select>
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Date" icon={CalendarDays}><input name="date" type="date" min={today} required className={input} /></Field>
              <Field label="Time" icon={Clock}>
                <select name="time" className={input}>{["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"].map((t) => <option key={t}>{t}</option>)}</select>
              </Field>
            </div>
            <Field label="Full name" icon={User}><input name="name" required className={input} placeholder="Marie Uwase" /></Field>
            <Field label="Phone or WhatsApp" icon={Phone}><input name="phone" type="tel" required className={input} placeholder="+250 788 123 456" /></Field>
            <Field label="Email" icon={Mail}><input name="email" type="email" required className={input} placeholder="you@example.com" /></Field>
            <div className="mt-2 flex justify-end gap-3">
              <button type="button" className={btnGhost} onClick={() => setBooking(null)}>Cancel</button>
              <button className={btnPrimary}><CheckCircle2 size={16} />Confirm booking</button>
            </div>
          </form>
        </Modal>
      )}

      {toast && (
        <div role="status" className="lx-pop fixed bottom-6 right-6 z-[60] flex max-w-sm items-start gap-3 rounded-2xl border border-[#ff4500]/30 bg-white p-4 shadow-2xl dark:bg-[#0a1630]">
          <div className={`${grad} grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white`}><CheckCircle2 size={18} /></div>
          <div>
            <p className="text-sm font-semibold">{toast.title}</p>
            <p className="text-xs text-slate-500">{toast.msg}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function Split({ title, form, children }) {
  return (
    <div className="grid items-start gap-6 lg:grid-cols-[320px_1fr]">
      <div className={`${card} p-5 lg:sticky lg:top-24`}>
        <h3 className="lx-display mb-4 text-lg font-bold">{title}</h3>
        {form}
      </div>
      <div className="lx-stagger grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{children}</div>
    </div>
  );
}

function BookingCard({ b }) {
  return (
    <div className={`${card} space-y-2 p-5`}>
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold">{b.service}</h3>
        <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-500">Confirmed</span>
      </div>
      <p className="font-bold text-[#e63e00] dark:text-[#ff7a45]">{rwf(b.priceValue)}</p>
      <p className="flex items-center gap-2 text-xs text-slate-500"><User size={13} />{b.name} · {b.phone}</p>
      <p className="flex items-center gap-2 text-xs text-slate-500"><Scissors size={13} />{b.worker}</p>
      <p className="flex items-center gap-2 text-xs text-slate-500"><CalendarDays size={13} />{b.date} at {b.time}</p>
    </div>
  );
}

const weekCounts = (bookings) => Array.from({ length: 7 }, (_, i) => {
  const d = new Date(); d.setDate(d.getDate() + i);
  const key = d.toISOString().split("T")[0];
  return { label: d.toLocaleDateString("en-US", { weekday: "short" }), n: bookings.filter((b) => b.date === key).length };
});

const tally = (items, pick) => Object.entries(items.reduce((a, x) => ((a[pick(x)] = (a[pick(x)] || 0) + 1), a), {})).sort((a, b) => b[1] - a[1]);

const SectionTitle = ({ title, sub }) => (
  <div className="mx-auto mb-10 max-w-2xl text-center">
    <h2 className="lx-display text-3xl font-bold sm:text-4xl">{title}</h2>
    {sub && <p className="mt-3 text-slate-600 dark:text-slate-400">{sub}</p>}
  </div>
);

function Landing({ media, services, workers, bookings, onBook }) {
  const [filter, setFilter] = useState("all");
  const [faq, setFaq] = useState(0);
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  const hero = media.find((m) => m.type !== "image" && m.url) || media.find((m) => m.url);
  const shown = media.filter((m) => filter === "all" || m.type === filter);
  const nServices = useCountUp(services.length);
  const nWorkers = useCountUp(workers.length);
  const nBookings = useCountUp(bookings.length);
  const nDays = useCountUp(7);
  const stats = [
    [nServices, "Treatments on the menu"],
    [nWorkers, "Friendly stylists"],
    [nBookings, "Appointments booked"],
    [nDays, "Days open each week"],
  ];
  const why = [
    { icon: Leaf, t: "Gentle on your hair", d: "Natural, nourishing products chosen for textured hair." },
    { icon: Heart, t: "Warm, unhurried care", d: "Tea, music and a stylist who actually listens." },
    { icon: ShieldCheck, t: "Spotless tools", d: "Every comb, brush and tool is cleaned between clients." },
    { icon: Award, t: "Skilled hands", d: "Our team trains constantly in the latest braiding and pressing methods." },
  ];
  const steps = [
    { icon: Scissors, t: "Pick a treatment", d: "Browse the menu and choose what suits your hair." },
    { icon: CalendarDays, t: "Choose your time", d: "Select a stylist, a date and a time that fits your day." },
    { icon: Sparkles, t: "Relax and glow", d: "Arrive, sit back, and leave feeling brand new." },
  ];
  // Sample reviews: replace with real client feedback before going live.
  const reviews = [
    { n: "Marie U.", t: "My knotless braids lasted six weeks and my scalp felt great the whole time." },
    { n: "Grace M.", t: "Booking took one minute and the silk press was exactly what I asked for." },
    { n: "Sandrine K.", t: "The most relaxing salon in Kiyovu. I leave every visit feeling lighter." },
  ];
  const faqs = [
    ["How do I book?", "Choose a treatment, pick a stylist, date and time, and confirm. We'll see it instantly in our dashboard."],
    ["Can I change my appointment?", "Yes. Call or WhatsApp us at least a day before and we'll find a new time."],
    ["How long do braids take?", "Knotless braids usually take around three hours. Each treatment on the menu lists its duration."],
    ["Do you offer consultations?", "Absolutely. Tell us about your hair goals when you book and your stylist will plan with you."],
  ];

  return (
    <div className="space-y-28">
      {/* HERO */}
      <section className="grid items-center gap-12 lg:grid-cols-2">
        <div className="lx-rise">
          <h1 className="lx-display text-4xl font-bold leading-[1.1] sm:text-6xl">Hair that looks as good as it feels.</h1>
          <p className="mt-5 max-w-lg text-lg text-slate-600 dark:text-slate-400">A warm, welcoming salon in Kiyovu for silk presses, braids and natural hair care. Watch our work, meet the team and book in a minute.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button className={btnPrimary} onClick={() => go("services")}><CalendarCheck size={16} />Book your visit</button>
            <button className={btnGhost} onClick={() => go("gallery")}><Play size={16} />See our work</button>
          </div>
          <div className="mt-8 overflow-hidden rounded-full border border-emerald-500/20 bg-emerald-500/10 py-2.5 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
            <div className="lx-marquee flex w-max gap-10 whitespace-nowrap text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              {[0, 1].flatMap((k) => ["Silk press", "Knotless braids", "Scalp rituals", "Natural care", "Bridal styling", "Hot-towel shave", "Fades & line-ups"].map((t) => <span key={k + t}>✦ {t}</span>))}
            </div>
          </div>
        </div>
        <div className="relative lx-rise" style={{ animationDelay: "120ms" }}>
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2.5rem] border-4 border-white bg-black shadow-2xl shadow-[#ff4500]/20 dark:border-[#0b1a3a]">
            {hero ? (hero.type === "image" ? <img src={hero.url} alt={hero.title} className="h-full w-full object-cover" /> : <video src={hero.url} autoPlay muted loop playsInline className="h-full w-full object-cover" />) : <div className={`${grad} h-full w-full`} />}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-sm font-semibold text-white">{hero?.title}</div>
          </div>
          <div className="lx-bob absolute -left-2 top-10 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-xl sm:-left-6 dark:bg-[#0a1630] dark:text-white">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />Open today · 08:00 – 19:00
          </div>
          <div className="lx-bob absolute -right-2 bottom-16 flex items-center gap-2 rounded-full bg-[#ff4500] px-4 py-2 text-xs font-semibold text-white shadow-xl sm:-right-6" style={{ animationDelay: "-2s" }}>
            <Sparkles size={14} />Free consultation
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map(([n, l]) => (
          <div key={l} className={`${card} p-6 text-center`}>
            <div className="lx-display text-4xl font-bold text-[#e63e00] dark:text-[#ff7a45]">{n}</div>
            <div className="mt-1 text-sm text-slate-500">{l}</div>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24">
        <SectionTitle title="Our treatments" sub="Pick what you love and book it in a minute." />
        <div className="lx-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => <ServiceCard key={s.id} s={s} onBook={onBook} />)}
          {!services.length && <Empty icon={Scissors} text="Our menu is coming soon." />}
        </div>
      </section>

      {/* WHY US */}
      <section>
        <SectionTitle title="Why clients keep coming back" />
        <div className="lx-stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {why.map(({ icon: I, t, d }) => (
            <div key={t} className={`${card} p-6 transition hover:-translate-y-1`}>
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-500"><I size={22} /></div>
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-1.5 text-sm text-slate-500">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="scroll-mt-24">
        <SectionTitle title="Salon moments" sub="Transformations, reels and photos from our chairs." />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {[["all", "All"], ["longvideo", "Videos"], ["short", "Shorts"], ["image", "Photos"]].map(([k, l]) => (
            <button key={k} onClick={() => setFilter(k)} className={`rounded-full px-5 py-2 text-sm font-semibold transition ${filter === k ? `${grad} text-white shadow-md` : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-[#0b1a3a] dark:text-slate-300"}`}>{l}</button>
          ))}
        </div>
        <div key={filter} className="lx-stagger grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((m) => <MediaCard key={m.id} m={m} />)}
          {!shown.length && <Empty icon={Film} text="Nothing here yet. Check back soon." />}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <SectionTitle title="Booking takes three steps" />
        <div className="lx-stagger grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: I, t, d }, i) => (
            <div key={t} className={`${card} relative p-7 text-center`}>
              <div className={`${grad} mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full text-white shadow-lg shadow-[#ff4500]/30`}><I size={24} /></div>
              <span className="absolute right-5 top-4 text-sm font-bold text-slate-300 dark:text-slate-600">{i + 1}</span>
              <h3 className="lx-display text-xl font-bold">{t}</h3>
              <p className="mt-2 text-sm text-slate-500">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="scroll-mt-24">
        <SectionTitle title="Meet your stylists" sub="Friendly faces with years of practice behind every style." />
        <div className="lx-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workers.map((w) => <WorkerCard key={w.id} w={w} />)}
          {!workers.length && <Empty icon={Users} text="Our team will appear here." />}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="scroll-mt-24">
        <SectionTitle title="Kind words from clients" />
        <div className="lx-stagger grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.n} className={`${card} p-6`}>
              <div className="mb-3 flex gap-0.5 text-amber-400">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
              <blockquote className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">“{r.t}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3 text-sm font-semibold">
                <span className={`${grad} grid h-9 w-9 place-items-center rounded-full text-xs text-white`}>{r.n[0]}</span>{r.n}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-3xl">
        <SectionTitle title="Good to know" />
        <div className="space-y-3">
          {faqs.map(([q, a], i) => (
            <div key={q} className={`${card} overflow-hidden`}>
              <button onClick={() => setFaq(faq === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold">
                {q}<ChevronDown size={18} className={`shrink-0 transition-transform ${faq === i ? "rotate-180 text-[#ff4500]" : ""}`} />
              </button>
              <div className={`grid transition-all duration-300 ${faq === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <p className="overflow-hidden px-5 text-sm text-slate-500"><span className="block pb-5">{a}</span></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="scroll-mt-24 grid gap-6 lg:grid-cols-2">
        <div className={`${card} space-y-5 p-8`}>
          <h2 className="lx-display text-3xl font-bold">Come say hello</h2>
          {[[MapPin, "Kiyovu, Kigali, Rwanda"], [Clock, "Open every day, 08:00 – 19:00"], [Phone, "+250 788 123 456"], [Mail, "hello@leclat.rw"]].map(([I, t]) => (
            <p key={t} className="flex items-center gap-3 text-slate-600 dark:text-slate-300"><span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-500/15 text-emerald-500"><I size={18} /></span>{t}</p>
          ))}
          <button className={btnPrimary} onClick={() => go("services")}><CalendarCheck size={16} />Book an appointment</button>
        </div>
        <div className="relative min-h-72 overflow-hidden rounded-3xl bg-[#0b1a3a]">
          <svg className="absolute inset-0 h-full w-full opacity-40" aria-hidden="true">
            <defs><pattern id="mapgrid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#3b82f6" strokeWidth="1" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#mapgrid)" />
            <path d="M0 220 C 120 150, 220 260, 420 120 S 620 180, 800 90" stroke="#10b981" strokeWidth="6" fill="none" strokeLinecap="round" />
          </svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="lx-pulse mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#ff4500] text-white"><MapPin size={26} /></div>
            <p className="mt-3 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-slate-900">L'Éclat · Kiyovu</p>
          </div>
        </div>
      </section>

      {/* CTA + FOOTER */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0b1a3a] via-[#0a1630] to-black p-10 text-center text-white sm:p-16">
        <div className="lx-float absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#ff4500]/30 blur-3xl" />
        <div className="lx-float absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-emerald-500/25 blur-3xl" style={{ animationDelay: "-5s" }} />
        <h2 className="lx-display relative text-3xl font-bold sm:text-5xl">Ready for your best hair day?</h2>
        <p className="relative mx-auto mt-4 max-w-md text-slate-300">Reserve your spot today and let us take care of the rest.</p>
        <button className={`${btnPrimary} relative mt-8`} onClick={() => go("services")}><ArrowRight size={16} />Book now</button>
      </section>
      <footer className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pb-4 pt-8 text-sm text-slate-500 sm:flex-row dark:border-blue-400/15">
        <Logo small />
        <p>© {new Date().getFullYear()} L'Éclat Salon & Spa, Kigali</p>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="transition hover:text-[#ff4500]"><Instagram size={18} /></a>
      </footer>
    </div>
  );
}

function Overview({ bookings, workers, services, media, revenue, goTab }) {
  const week = weekCounts(bookings);
  const max = Math.max(1, ...week.map((d) => d.n));
  const topServices = tally(bookings, (b) => b.service).slice(0, 4);
  const load = tally(bookings, (b) => b.worker);
  const actions = [[Upload, "Upload media", "media"], [Users, "Add a stylist", "workers"], [Scissors, "Add a service", "services"], [CalendarDays, "View appointments", "bookings"]];
  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b1a3a] to-black p-8 text-white">
        <div className="lx-float absolute -right-8 -top-8 h-48 w-48 rounded-full bg-[#ff4500]/30 blur-3xl" />
        <h2 className="lx-display relative text-2xl font-bold sm:text-3xl">Good day, welcome back 👋</h2>
        <p className="relative mt-1 text-sm text-slate-300">You have {bookings.length} appointment{bookings.length === 1 ? "" : "s"} booked and {week.reduce((a, d) => a + d.n, 0)} in the next 7 days.</p>
        <div className="relative mt-5 flex flex-wrap gap-2">
          {actions.map(([I, l, t]) => <button key={t} onClick={() => goTab(t)} className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur transition hover:bg-white/20"><I size={14} />{l}</button>)}
        </div>
      </div>

      <div className="lx-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat icon={CalendarCheck} label="Appointments" value={bookings.length} tint="bg-[#ff4500]/15 text-[#ff4500]" />
        <Stat icon={Wallet} label="Booked revenue" money value={revenue} tint="bg-emerald-500/15 text-emerald-500" />
        <Stat icon={Users} label="Stylists" value={workers.length} tint="bg-emerald-500/15 text-emerald-500" />
        <Stat icon={Eye} label="Media items" value={media.length} tint="bg-blue-500/20 text-blue-400" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className={`${card} p-6 lg:col-span-2`}>
          <h3 className="lx-display mb-5 text-lg font-bold">Next 7 days</h3>
          <div className="flex h-44 items-end gap-3">
            {week.map((d) => (
              <div key={d.label} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <span className="text-xs font-semibold text-slate-500">{d.n}</span>
                <div className="lx-grow w-full rounded-t-2xl bg-gradient-to-t from-[#ff4500] to-[#ff7a1a]" style={{ height: `${Math.max(6, (d.n / max) * 100)}%`, opacity: d.n ? 1 : 0.25 }} />
                <span className="text-xs text-slate-500">{d.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={`${card} p-6`}>
          <h3 className="lx-display mb-4 text-lg font-bold">Popular treatments</h3>
          <div className="space-y-4">
            {(topServices.length ? topServices : services.slice(0, 3).map((s) => [s.title, 0])).map(([t, n]) => (
              <div key={t}>
                <div className="mb-1 flex justify-between text-xs"><span className="truncate font-medium">{t}</span><span className="text-slate-500">{n}</span></div>
                <div className="h-2 rounded-full bg-slate-100 dark:bg-[#0f2347]"><div className="lx-grow-x h-2 rounded-full bg-emerald-500" style={{ width: `${bookings.length ? (n / bookings.length) * 100 : 0}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className={`${card} p-6`}>
          <h3 className="lx-display mb-4 text-lg font-bold">Stylist workload</h3>
          {load.length ? load.map(([w, n]) => <p key={w} className="flex justify-between border-b border-slate-100 py-2 text-sm last:border-0 dark:border-blue-400/10"><span>{w}</span><span className="font-semibold text-[#e63e00] dark:text-[#ff7a45]">{n}</span></p>) : <p className="text-sm text-slate-500">Bookings will be split by stylist here.</p>}
        </div>
        <div className="lg:col-span-2">
          <h3 className="lx-display mb-3 text-lg font-bold">Latest appointments</h3>
          <div className="lx-stagger grid gap-4 sm:grid-cols-2">
            {bookings.slice(0, 4).map((b) => <BookingCard key={b.id} b={b} />)}
            {!bookings.length && <Empty icon={CalendarCheck} text="No bookings yet. They'll show up here as clients reserve." />}
          </div>
        </div>
      </div>
    </div>
  );
}