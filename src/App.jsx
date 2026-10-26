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

export default function App() {
  return (
    <main>
      <h1>Shaurya Pratap Singh</h1>
      <p className="sub">B.Tech CSE (AI &amp; ML) at GLA University, Mathura. Based in Lucknow.</p>
      <p>
        I'm a second-year student who likes building things end to end: smart contracts, data
        pipelines, robots and machine learning projects. I'm currently looking for internships.
      </p>
      <p className="links">
        {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
      </p>

      <h2>Projects</h2>
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
      <p><a href={GITHUB}>More on GitHub &rarr;</a></p>

      <h2>Skills</h2>
      <dl>
        {skills.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
      </dl>

      <h2>Achievements</h2>
      <List items={achievements} />

      <h2>Certifications</h2>
      <List items={certs} />

      <footer>&copy; 2026 Shaurya Pratap Singh</footer>
    </main>
  )
}
