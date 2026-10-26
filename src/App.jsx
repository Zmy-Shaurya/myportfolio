const GITHUB = 'https://github.com/zmy-shaurya'

const links = [
  ['Email', 'mailto:shauryapratapsingh.work@gmail.com'],
  ['GitHub', GITHUB],
  ['LinkedIn', 'https://linkedin.com/in/Zmy-Shaurya'],
  ['LeetCode', 'https://leetcode.com/shaurya2508'],
  ['Resume (PDF)', '/resume.pdf'],
]

const gh = (repo) => `${GITHUB}/${repo}`

// links: [label, url]
const projects = [
  {
    name: 'PreFlag',
    text: 'Privacy firewall for browser agents. Redacts PII on-device before a page or screenshot reaches the model (SIH 2026).',
    stack: 'Manifest V3 extension, JavaScript, local NER, VLM loop',
    links: [['Code', gh('Preflag')]],
  },
  {
    name: 'SignSpeak AI',
    text: 'Real-time ASL recognition from a webcam: MediaPipe keypoints fed to an LSTM classifier, running live on a laptop CPU.',
    stack: 'Python, MediaPipe, LSTM',
    links: [['Code', gh('SignSpeak-AI')]],
  },
  {
    name: 'LandChain',
    text: 'Decentralized land registry and ownership transfer, with OCR on documents and IPFS storage.',
    stack: 'Solidity, Hardhat, Next.js, Node/Express, IPFS, MetaMask',
    links: [['Demo', 'https://land-chain-topaz.vercel.app'], ['Code', gh('LandChain')]],
  },
  {
    name: 'Crime Cast',
    text: 'Maps crime hotspots from FIR datasets and live news using NLP entity extraction and geocoding.',
    stack: 'Python, spaCy, NewsAPI, Supabase, Folium',
    links: [['Code', gh('Real-Time-Crime-Hotspot-Mapping')]],
  },
  {
    name: 'Smart IoT Cradle',
    text: 'Automated infant cradle that swings on demand and sends real-time wetness alerts.',
    stack: 'ESP32, C, crank-slider mechanism',
    links: [['Code', gh('IoT-Based-Smart-Cradle-For-Babies')]],
  },
  {
    name: 'ShipWatch',
    text: 'Hackathon demo for proactive delivery exception handling, with a case inbox and AI-drafted customer updates.',
    stack: 'TypeScript, React, Vite',
    links: [['Demo', 'https://shipwatch-rust.vercel.app'], ['Code', gh('Shipwatch')]],
  },
  {
    name: 'Vintage Webcam Photobooth',
    text: 'Web photobooth with retro filters and customizable strip layouts.',
    stack: 'TypeScript, Tailwind, Framer Motion',
    links: [['Code', gh('Vintage-Webcam-Photobooth')]],
  },
  {
    name: 'Technoxian AgriBot Rover',
    text: 'Software for an agricultural rover and robotic arm, built for Technoxian Robotics World Cup 9.0.',
    stack: 'Python, Raspberry Pi, IoT',
    links: [],
  },
]

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

const List = ({ items }) => (
  <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
)

const facts = [
  ['Studying', 'B.Tech CSE (AI & ML), GLA University'],
  ['Year', '2nd year, 2024 - 2028'],
  ['Based in', 'Lucknow, India'],
  ['Looking for', 'Internships'],
]

export default function App() {
  return (
    <>
      <header className="bar">
        <div className="wrap bar-in">
          <strong>Shaurya Pratap Singh</strong>
          <nav>
            {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          </nav>
        </div>
      </header>

      <main className="wrap">
        <section className="hero">
          <div>
            <h1>Hi, I'm Shaurya.</h1>
            <p className="lead">
              I'm a CS student who likes building things end to end: smart contracts, data
              pipelines, robots and machine learning projects. Python is what I reach for first.
            </p>
            <p>
              <a className="btn" href="/resume.pdf">Download resume</a>
              <a className="btn ghost" href={GITHUB}>GitHub</a>
            </p>
          </div>
          <dl className="box facts">
            {facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
        </section>

        <h2>Projects</h2>
        <div className="box flush">
<table>
        <thead>
          <tr><th>Project</th><th>What it does</th><th>Stack</th><th>Links</th></tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.name}>
              <td data-label="Project"><strong>{p.name}</strong></td>
              <td data-label="What it does">{p.text}</td>
              <td data-label="Stack">{p.stack}</td>
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

        <h2>Skills</h2>
        <div className="grid">
          {skills.map(([k, v]) => (
            <div className="box" key={k}><h3>{k}</h3><p>{v}</p></div>
          ))}
        </div>

        <div className="two">
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
    </>
  )
}
