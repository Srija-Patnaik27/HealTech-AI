
import '../App.css'

function Home() {
  return (
    <div className="app">
      <nav className="navbar">
        <a className="logo" href="#home">
          <span className="logo-icon">✚</span>
          HealTech<span>AI</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About Us</a>
        </div>

        <button className="nav-button">Login ↗</button>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="tag">
              <span>✦</span> AI-powered Alzheimer's care
            </div>

            <h1>
              Care that remembers.
              <span> Support that understands.</span>
            </h1>

            <p>
              Making everyday life easier for people living with
              Alzheimer's through intelligent assistance,
              personalized care and meaningful connections.
            </p>

            <div className="hero-buttons">
              <button className="primary-button">
                Get Started ↗
              </button>
              <a className="secondary-button" href="#about">
                Discover our mission →
              </a>
            </div>

            <div className="trust-note">
              <span>♥</span> Technology with empathy at its heart
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-circle">
              <div className="heart-icon">♡</div>
              <div className="visual-caption">
                <span>CARE BEYOND TECHNOLOGY</span>
                <strong>Every moment matters.</strong>
              </div>
            </div>

            <div className="floating-card reminder">
              <span className="card-icon">◷</span>
              <div>
                <strong>Daily reminders</strong>
                <small>Care, right on time</small>
              </div>
            </div>

            <div className="floating-card companion">
              <span className="card-icon">✧</span>
              <div>
                <strong>AI Companion</strong>
                <small>Always here to help</small>
              </div>
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <div className="section-heading">
            <span>WHAT WE OFFER</span>
            <h2>Thoughtful care, powered by technology.</h2>
            <p>
              Designed to support patients and the people who care for them.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">✧</div>
              <h3>AI Companion</h3>
              <p>
                Conversational assistance and friendly daily interactions.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">◷</div>
              <h3>Medicine Reminders</h3>
              <p>
                Helpful reminders to stay on track with medication schedules.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">♡</div>
              <h3>Face Recognition</h3>
              <p>
                Support in recognizing familiar faces and loved ones.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">⌖</div>
              <h3>Safety Support</h3>
              <p>
                Safety-focused monitoring and alerts for caregivers.
              </p>
            </article>
          </div>
        </section>

        <section className="how-it-works" id="how-it-works">
          <div className="section-heading">
            <span>HOW IT WORKS</span>
            <h2>Simple support. Every single day.</h2>
            <p>
              A connected care experience designed around patients and caregivers.
            </p>
          </div>

          <div className="steps-grid">
            <article className="step-card">
              <span className="step-number">01</span>
              <h3>Create an account</h3>
              <p>Patients and caregivers can set up their profiles securely.</p>
            </article>

            <article className="step-card">
              <span className="step-number">02</span>
              <h3>Personalize care</h3>
              <p>Configure reminders and care preferences for daily routines.</p>
            </article>

            <article className="step-card">
              <span className="step-number">03</span>
              <h3>Stay connected</h3>
              <p>Use supportive tools to help caregivers stay informed.</p>
            </article>
          </div>
        </section>

        <section className="about" id="about">
          <span>OUR PURPOSE</span>
          <h2>Because care should always feel human.</h2>
          <p>
            HealTech AI aims to make Alzheimer's care more accessible,
            supportive and compassionate through technology.
            We believe innovation should help people live with dignity,
            independence and meaningful connections.
          </p>
          <button className="primary-button">Explore HealTech AI ↗</button>
        </section>

        <section className="cta">
          <div>
            <span>CARE STARTS WITH CONNECTION</span>
            <h2>Let's make every moment matter.</h2>
            <p>Discover a more thoughtful approach to everyday care.</p>
          </div>
          <button className="cta-button">Get Started ↗</button>
        </section>
      </main>

      <footer>
        <a className="logo" href="#home">
          <span className="logo-icon">✚</span>
          HealTech<span>AI</span>
        </a>
        <p>Technology with empathy. Care with purpose.</p>
        <small>© 2026 HealTech AI. All rights reserved.</small>
      </footer>
    </div>
  )
}

export default Home 
