
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  const [role, setRole] = useState('patient')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(event) {
    event.preventDefault()

    if (!email || !password) {
      alert('Please enter your email and password.')
      return
    }

    alert(`${role} login form submitted! Backend authentication will be connected next.`)
  }

  return (
    <div className="auth-page">
      <div className="auth-left">
        <Link to="/" className="auth-logo">
          <span>✚</span> HealTech <strong>AI</strong>
        </Link>

        <div className="auth-message">
          <span className="auth-tag">CARE BEYOND TECHNOLOGY</span>
          <h1>Every moment deserves thoughtful care.</h1>
          <p>
            A supportive digital experience designed to bring
            patients and caregivers closer together.
          </p>
          <div className="auth-highlight">
            <span>♡</span>
            <div>
              <strong>Technology with empathy</strong>
              <small>Making everyday care more meaningful.</small>
            </div>
          </div>
        </div>

        <small className="auth-copyright">© 2026 HealTech AI</small>
      </div>

      <div className="auth-right">
        <div className="login-card">
          <div className="mobile-logo">
            ✚ HealTech <strong>AI</strong>
          </div>

          <span className="form-label">WELCOME BACK</span>
          <h2>Sign in to your account</h2>
          <p className="form-description">
            Enter your details to continue.
          </p>

          <div className="role-selector">
            <button
              type="button"
              className={role === 'patient' ? 'role-option active' : 'role-option'}
              onClick={() => setRole('patient')}
            >
              ♡ Patient
            </button>

            <button
              type="button"
              className={role === 'caregiver' ? 'role-option active' : 'role-option'}
              onClick={() => setRole('caregiver')}
            >
              ♧ Caregiver
            </button>
          </div>

          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />

            <button type="submit" className="login-button">
              Sign In →
            </button>
          </form>

          <p className="register-text">
            Don't have an account? <Link to="/register">Create account</Link>
          </p>

          <Link to="/" className="back-home">
            ← Back to homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
