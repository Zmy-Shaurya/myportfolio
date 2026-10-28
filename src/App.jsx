import { useEffect, useState } from 'react'

const GITHUB = 'https://github.com/zmy-shaurya'
const EMAIL = 'shauryapratapsingh.work@gmail.com'

const sections = [
  ['Projects', '#projects'],
  ['Skills', '#skills'],
]

const socials = [
  ['GitHub', GITHUB],
  ['LinkedIn', 'https://linkedin.com/in/Zmy-Shaurya'],
  ['LeetCode', 'https://leetcode.com/shaurya2508'],
]

const gh = (repo) => `${GITHUB}/${repo}`

// links: [label, url]; cats drive the filter chips
const projects = [
  {
    name: 'PreFlag',
    text: 'Privacy firewall for browser agents. Redacts PII on-device before a page or screenshot reaches the model (SIH 2026).',
    stack: ['Manifest V3', 'JavaScript', 'Local NER', 'VLM loop'],
    cats: ['AI/ML', 'Web'],
    links: [['Code', gh('Preflag')]],
  },
  {
    name: 'SignSpeak AI',
    text: 'Real-time ASL recognition from a webcam: MediaPipe keypoints fed to an LSTM classifier, running live on a laptop CPU.',
    stack: ['Python', 'MediaPipe', 'LSTM'],
    cats: ['AI/ML'],
    links: [['Code', gh('SignSpeak-AI')]],
  },
  {
    name: 'LandChain',
    text: 'Decentralized land registry and ownership transfer, with OCR on documents and IPFS storage.',
    stack: ['Solidity', 'Hardhat', 'Next.js', 'Node/Express', 'IPFS', 'MetaMask'],
    cats: ['Blockchain', 'Web'],
    links: [['Demo', 'https://land-chain-topaz.vercel.app'], ['Code', gh('LandChain')]],
  },
  {
    name: 'Crime Cast',
    text: 'Maps crime hotspots from FIR datasets and live news using NLP entity extraction and geocoding.',
    stack: ['Python', 'spaCy', 'NewsAPI', 'Supabase', 'Folium'],
    cats: ['AI/ML'],
    links: [['Code', gh('Real-Time-Crime-Hotspot-Mapping')]],
  },
  {
    name: 'Smart IoT Cradle',
    text: 'Automated infant cradle that swings on demand and sends real-time wetness alerts.',
    stack: ['ESP32', 'C', 'Crank-slider'],
    cats: ['IoT'],
    links: [['Code', gh('IoT-Based-Smart-Cradle-For-Babies')]],
  },
  {
    name: 'ShipWatch',
    text: 'Hackathon demo for proactive delivery exception handling, with a case inbox and AI-drafted customer updates.',
    stack: ['TypeScript', 'React', 'Vite'],
    cats: ['Web'],
    links: [['Demo', 'https://shipwatch-rust.vercel.app'], ['Code', gh('Shipwatch')]],
  },
  {
    name: 'Vintage Webcam Photobooth',
    text: 'Web photobooth with retro filters and customizable strip layouts.',
    stack: ['TypeScript', 'Tailwind', 'Framer Motion'],
    cats: ['Web'],
    links: [['Demo', 'https://photobooth.shaurya-singh.is-a.dev/'], ['Code', gh('Vintage-Webcam-Photobooth')]],
  },
  {
    name: 'Flip Book Maker',
    text: 'Turns a video into a printable flip book PDF, entirely in the browser; the video is never uploaded.',
    stack: ['JavaScript', 'jsPDF', 'ffmpeg (WASM)'],
    cats: ['Web'],
    links: [['Demo', 'https://flipbook-maker.shaurya-singh.is-a.dev/'], ['Code', gh('flipbook-maker')]],
  },
  {
    name: 'Technoxian AgriBot Rover',
    text: 'Software for an agricultural rover and robotic arm, built for Technoxian Robotics World Cup 9.0.',
    stack: ['Python', 'Raspberry Pi', 'IoT'],
    cats: ['IoT'],
    links: [],
  },
]

const filters = ['All', 'AI/ML', 'Web', 'Blockchain', 'IoT']

const skills = [
  ['Languages', 'C, Python, Java, JavaScript, Lua, SQL'],
  ['Web', 'React, Tailwind, Vite, Next.js, Node/Express'],
  ['Backend & cloud', 'Flask, Django, Firebase, Azure, MySQL, Vercel, Render'],
  ['AI/ML & data', 'PyTorch, Pandas, NumPy, Matplotlib, Power BI'],
  ['IoT', 'Arduino, Raspberry Pi 5, ESP32'],
  ['Tools', 'Git, GitHub, Docker'],
]

const achievements = [
  '1st place, CodePunk 2.0 (24-hour inter-college hackathon)',
  'Top 10 teams, Hack & Wiz 2.0',
  'Technoxian Robotics World Cup 9.0, software team',
]

const certs = [
  'Microsoft AZ-900 Azure Fundamentals',
  'Microsoft AI-900 AI Fundamentals',
  'Accenture Software Engineering and Deloitte Data Analytics job simulations',
]

const facts = [
  ['Studying', 'B.Tech CSE (AI & ML), GLA University'],
  ['Year', '2nd year, 2024 - 2028'],
  ['Based in', 'Lucknow, India'],
]

const List = ({ items }) => (
  <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
)

const store = {
  get: (k) => { try { return localStorage.getItem(k) } catch { return null } },
  set: (k, v) => { try { localStorage.setItem(k, v) } catch { /* private mode */ } },
}

function useTheme() {
  const [theme, setTheme] = useState(
    () => store.get('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  )
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    store.set('theme', theme)
  }, [theme])
  return [theme, () => setTheme(theme === 'dark' ? 'light' : 'dark')]
}

// fade sections in once as they scroll into view
// `dep` re-runs it when sections mount later (the GitHub block loads async)
function useReveal(dep) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)')
    if (!('IntersectionObserver' in window)) return els.forEach((e) => e.classList.add('in'))
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.08 })
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [dep])
}

// reading progress (0-1) and whether we've scrolled past the hero
function useScroll() {
  const [s, setS] = useState({ p: 0, far: false })
  useEffect(() => {
    let raf = 0
    const on = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - innerHeight
        setS({ p: max > 0 ? scrollY / max : 0, far: scrollY > 600 })
      })
    }
    addEventListener('scroll', on, { passive: true })
    on()
    return () => { removeEventListener('scroll', on); cancelAnimationFrame(raf) }
  }, [])
  return s
}

// which section is on screen, for the nav highlight
function useActive(ids) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
    }, { rootMargin: '-40% 0px -55% 0px' })
    ids.forEach((id) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [ids])
  return active
}

// live numbers from GitHub; cached for the tab so reloads don't burn the 60/hr limit
const HIDE_REPOS = ['Zmy-Shaurya', 'asdasdasdasdasd']
function useGitHub() {
  const [gh, setGh] = useState(null)
  useEffect(() => {
    const cached = store.get('gh-cache')
    if (cached) { try { return setGh(JSON.parse(cached)) } catch { /* refetch */ } }
    const user = GITHUB.split('/').pop()
    Promise.all([
      fetch(`https://api.github.com/users/${user}`).then((r) => r.json()),
      fetch(`https://api.github.com/users/${user}/repos?sort=pushed&per_page=30`).then((r) => r.json()),
    ]).then(([u, repos]) => {
      if (!Array.isArray(repos) || u.public_repos == null) return
      const data = {
        repos: u.public_repos,
        followers: u.followers,
        recent: repos
          .filter((r) => !r.fork && !HIDE_REPOS.includes(r.name))
          .slice(0, 4)
          .map((r) => ({ name: r.name, url: r.html_url, lang: r.language, pushed: r.pushed_at, desc: r.description })),
      }
      store.set('gh-cache', JSON.stringify(data))
      setGh(data)
    }).catch(() => {})
  }, [])
  return gh
}

const ago = (iso) => {
  const d = Math.floor((Date.now() - new Date(iso)) / 864e5)
  if (d < 1) return 'today'
  if (d < 30) return `${d}d ago`
  if (d < 365) return `${Math.floor(d / 30)}mo ago`
  return `${Math.floor(d / 365)}y ago`
}

const SECTIONS = ['projects', 'skills', 'github']

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const [filter, setFilter] = useState('All')
  const [copied, setCopied] = useState(false)
  const { p, far } = useScroll()
  const active = useActive(SECTIONS)
  const github = useGitHub()
  useReveal(github)

  const shown = projects.filter((p) => filter === 'All' || p.cats.includes(filter))

  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${p})` }} />
      <header className="bar">
        <div className="wrap bar-in">
          <a className="brand" href="#top">Shaurya Pratap Singh</a>
          <nav>
            {sections.map(([label, href]) => (
              <a key={label} href={href} className={href === `#${active}` ? 'active' : ''}>{label}</a>
            ))}
          </nav>
          <button className="theme" onClick={toggleTheme} aria-label="Toggle dark mode">
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </header>

      <main className="wrap" id="top">
        <section className="hero reveal">
          <div>
            <h1>Hi, I'm Shaurya.</h1>
            <p className="lead">
              I'm a CS student who likes building things end to end: smart contracts, data
              pipelines, robots and machine learning projects. Python is what I reach for first.
            </p>
            <p>
              <a className="btn" href="/resume.pdf">Download resume</a>
              <button className="btn ghost" onClick={copyEmail}>
                {copied ? 'Copied!' : 'Copy email'}
              </button>
            </p>
            <p>
              {socials.map(([label, href]) => (
                <a key={label} className="btn ghost" href={href}>{label}</a>
              ))}
            </p>
          </div>
          <dl className="box facts">
            {facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            <div>
              <dt>Status</dt>
              <dd><span className="dot" />Open to internships</dd>
            </div>
            {github && (
              <div>
                <dt>GitHub</dt>
                <dd>{github.repos} public repos, {github.followers} followers</dd>
              </div>
            )}
          </dl>
        </section>

        <section id="projects" className="reveal">
          <h2>Projects</h2>
          <div className="chips" role="group" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f}
                className={f === filter ? 'chip on' : 'chip'}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="box flush">
            <table>
              <thead>
                <tr><th>Project</th><th>What it does</th><th>Stack</th><th>Links</th></tr>
              </thead>
              <tbody>
                {shown.map((p) => (
                  <tr key={p.name}>
                    <td data-label="Project"><strong>{p.name}</strong></td>
                    <td data-label="What it does">{p.text}</td>
                    <td data-label="Stack">
                      <span className="tags">
                        {p.stack.map((t) => <span className="tag" key={t}>{t}</span>)}
                      </span>
                    </td>
                    <td data-label="Links">
                      {p.links.length
                        ? p.links.map(([l, h]) => <a key={l} href={h}>{l}</a>)
                        : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="more"><a href={GITHUB}>More on GitHub &rarr;</a></p>
        </section>

        <section id="skills" className="reveal">
          <h2>Skills</h2>
          <div className="grid">
            {skills.map(([k, v]) => (
              <div className="box lift" key={k}><h3>{k}</h3><p>{v}</p></div>
            ))}
          </div>
        </section>

        {github?.recent.length > 0 && (
          <section id="github" className="reveal">
            <h2>Recently on GitHub</h2>
            <div className="grid">
              {github.recent.map((r) => (
                <a className="box lift repo" key={r.name} href={r.url}>
                  <strong>{r.name}</strong>
                  {r.desc && <span className="desc">{r.desc}</span>}
                  <span className="meta">{[r.lang, `pushed ${ago(r.pushed)}`].filter(Boolean).join(' · ')}</span>
                </a>
              ))}
            </div>
          </section>
        )}

        <div className="two reveal">
          <div>
            <h2>Achievements</h2>
            <div className="box"><List items={achievements} /></div>
          </div>
          <div>
            <h2>Certifications</h2>
            <div className="box"><List items={certs} /></div>
          </div>
        </div>

        <footer>&copy; 2026 Shaurya Pratap Singh</footer>
      </main>
      <a className={far ? 'top show' : 'top'} href="#top" aria-label="Back to top">&uarr;</a>
    </>
  )
}
