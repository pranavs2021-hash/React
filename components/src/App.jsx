
import { useState } from 'react'

const features = [
  {
    number: '01',
    icon: '↗',
    title: 'Track your footprint',
    description:
      'Understand the impact of your everyday choices, from your commute to your electricity usage.',
  },
  {
    number: '02',
    icon: '◉',
    title: 'See the bigger picture',
    description:
      'Turn your activity into simple visual insights that help you understand where emissions come from.',
  },
  {
    number: '03',
    icon: '✳',
    title: 'Make better choices',
    description:
      'Discover practical changes that can help you reduce your estimated carbon footprint.',
  },
]

const activities = [
  { name: 'Transportation', detail: 'Your daily commute', percent: 68 },
  { name: 'Home energy', detail: 'Electricity consumption', percent: 46 },
  { name: 'Lifestyle', detail: 'Everyday activities', percent: 29 },
]

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={closeMenu}>
        <span className="brand-mark">C</span>
        <span>carbon<span className="brand-light">lens</span></span>
      </a>

      <button
        className="menu-toggle"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
        <a href="#features" onClick={closeMenu}>Features</a>
        <a href="#how-it-works" onClick={closeMenu}>How it works</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a className="nav-cta" href="#calculator" onClick={closeMenu}>
          Get started <ArrowIcon />
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="status-dot" />
          A clearer view of your impact
        </div>

        <h1>
          Your footprint.
          <br />
          <span>Your future.</span>
          <br />
          <span className="muted-heading">Your choice.</span>
        </h1>

        <p className="hero-description">
          Understand your carbon footprint, uncover what matters,
          and take small steps towards a lighter tomorrow.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#calculator">
            Calculate my footprint <ArrowIcon />
          </a>
          <a className="text-link" href="#how-it-works">
            Explore how it works <span>↓</span>
          </a>
        </div>

        <div className="hero-proof">
          <div className="proof-symbol">✳</div>
          <p>
            Small changes add up.
            <span> Start by understanding your impact.</span>
          </p>
        </div>
      </div>

      <FootprintCard />
    </section>
  )
}

function FootprintCard() {
  return (
    <div className="visual-wrap" aria-label="Illustrative carbon footprint dashboard preview">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />

      <div className="floating-label label-top">
        <span className="mini-dot" />
        YOUR IMPACT, MADE VISIBLE
      </div>

      <div className="footprint-card">
        <div className="card-topline">
          <div>
            <span className="card-overline">YOUR OVERVIEW</span>
            <h2>A little perspective.</h2>
          </div>
          <span className="live-mark">CL<span>.</span></span>
        </div>

        <div className="emission-total">
          <span className="total-number">2.4</span>
          <div className="total-unit">
            <strong>t CO₂e</strong>
            <span>Illustrative annual estimate</span>
          </div>
        </div>

        <div className="card-divider" />

        <div className="breakdown-title">
          <span>ACTIVITY BREAKDOWN</span>
          <span>EXAMPLE</span>
        </div>

        <div className="activity-list">
          {activities.map((activity) => (
            <div className="activity" key={activity.name}>
              <div className="activity-info">
                <div>
                  <strong>{activity.name}</strong>
                  <span>{activity.detail}</span>
                </div>
                <span className="activity-percent">{activity.percent}%</span>
              </div>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${activity.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="card-bottom">
          <span className="bottom-star">✳</span>
          <span>Your first step is awareness.</span>
          <ArrowIcon />
        </div>
      </div>

      <div className="floating-note">
        <span className="note-icon">↗</span>
        <div>
          <strong>Know your numbers.</strong>
          <span>Then change the story.</span>
        </div>
      </div>
    </div>
  )
}

function Features() {
  return (
    <section className="features-section section-wrap" id="features">
      <div className="section-heading">
        <div>
          <div className="eyebrow">LESS GUESSWORK. MORE CLARITY.</div>
          <h2>
            Awareness is where
            <br />
            <span>change begins.</span>
          </h2>
        </div>
        <p>
          You don't need to change everything overnight.
          You just need a clearer place to start.
        </p>
      </div>

      <div className="feature-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.number}>
            <div className="feature-top">
              <span className="feature-icon">{feature.icon}</span>
              <span className="feature-number">{feature.number}</span>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href="#calculator" className="feature-link" aria-label={`Explore ${feature.title}`}>
              Explore <ArrowIcon />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Tell us about your day',
      description: 'Enter a few details about travel, energy, and everyday activities.',
    },
    {
      number: '02',
      title: 'Understand your impact',
      description: 'Explore an estimate of your footprint and see how activities compare.',
    },
    {
      number: '03',
      title: 'Find your next step',
      description: 'Get practical ideas for making more climate-conscious choices.',
    },
  ]

  return (
    <section className="how-section section-wrap" id="how-it-works">
      <div className="how-intro">
        <div className="eyebrow">SIMPLE BY DESIGN</div>
        <h2>
          Three steps.
          <br />
          <span>A clearer picture.</span>
        </h2>
        <p>No complicated spreadsheets. Just a simple way to start understanding your impact.</p>
        <a className="button button-primary" href="#calculator">
          Let's get started <ArrowIcon />
        </a>
      </div>

      <div className="steps-list">
        {steps.map((step) => (
          <div className="step-row" key={step.number}>
            <span className="step-number">{step.number}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            <span className="step-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function CalculatorTeaser() {
  return (
    <section className="calculator-section section-wrap" id="calculator">
      <div className="calculator-banner">
        <div className="banner-orb" />
        <div className="banner-copy">
          <div className="eyebrow"><span className="status-dot" /> YOUR NEXT STEP STARTS HERE</div>
          <h2>
            Curious about
            <br />
            <span>your footprint?</span>
          </h2>
          <p>
            The calculator is our next milestone. We'll build it to turn your
            everyday activities into a useful emissions estimate.
          </p>
        </div>
        <div className="banner-action">
          <span className="coming-soon">COMING IN OUR NEXT BUILD</span>
          <span className="banner-icon">✳</span>
          <span className="banner-caption">Your impact, made clearer.</span>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer section-wrap" id="about">
      <a className="brand" href="#home">
        <span className="brand-mark">C</span>
        <span>carbon<span className="brand-light">lens</span></span>
      </a>
      <p>More awareness. More thoughtful choices.</p>
      <a className="back-top" href="#home">Back to top ↑</a>
      <div className="footer-bottom">
        <span>CARBONLENS · FRONTEND PREVIEW</span>
        <span>Estimates are illustrative, not verified measurements.</span>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CalculatorTeaser />
      </main>
      <Footer />
    </>
  )
}

export default App
