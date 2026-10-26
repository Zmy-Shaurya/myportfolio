const GITHUB = 'https://github.com/zmy-shaurya'

const links = [
  ['Email', 'mailto:shauryapratapsingh.work@gmail.com'],
  ['GitHub', GITHUB],
  ['LinkedIn', 'https://www.linkedin.com/in/zmy-shaurya'],
  ['Resume (PDF)', '/resume.pdf'],
]

// TODO: add PreFlag and SignSpeak AI; optional `href` shows a link under the entry
const projects = [
  {
    name: 'LandChain',
    stack: 'Solidity, Hardhat, Next.js, Node/Express, IPFS',
    text: 'Land registry on the blockchain. Smart contracts handle property registration, authority verification and ownership transfers. Documents are run through OCR and stored on IPFS.',
  },
  {
    name: 'Crime Cast',
    stack: 'Python, spaCy, Pandas, Supabase, Folium',
    text: 'Takes FIR datasets and live news, pulls out crime types and locations with NLP, geocodes them and maps hotspots.',
  },
  {
    name: 'Technoxian AgriBot Rover',
    stack: 'Python, Raspberry Pi, IoT',
    text: 'Software for an agricultural rover and its robotic arm, built for Technoxian Robotics World Cup 9.0.',
  },
]

const skills = [
  ['Languages', 'C, Python, Java, JavaScript, SQL'],
  ['Web', 'React, Next.js, Node/Express, Flask, Django'],
  ['Data / ML', 'Pandas, NumPy, spaCy'],
  ['Tools', 'Git, Docker, Vercel, Render'],
]

const achievements = [
  '1st place, CodePunk 2.0 (24-hour inter-college hackathon)',
  'Top 10 teams, Hack & Wiz 2.0',
  'Technoxian Robotics World Cup 9.0, software team',
]

const certs = [
  'Microsoft AZ-900 Azure Fundamentals',
  'Microsoft AI-900 AI Fundamentals',
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
      {projects.map((p) => (
        <div className="item" key={p.name}>
          <h3>{p.name}</h3>
          <p className="tag">{p.stack}</p>
          <p>{p.text}</p>
          {p.href && <p><a href={p.href}>Code</a></p>}
        </div>
      ))}
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
