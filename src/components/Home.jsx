import {  Outlet } from "react-router-dom";
import "./Home.css";
export  function Home() {
  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">TaskFlow</div>
        <div className="nav-links">
            <a  style={{ textDecoration: 'none',border: '1px solid #1d2496' ,
                 borderRadius: '20px' , backgroundColor: '#1d2496' , color: 'white' , padding: '10px 20px' }} href="/login">Login</a>
            <a style={{ textDecoration: 'none' , border: '1px solid #1d2496' ,
                 borderRadius: '20px' , backgroundColor: '#1d2496' , color: 'white' , padding: '10px 20px' }} href="/register">Register</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-left">
          <h1>
            Master your workflow with disciplined
            focus.
          </h1>

          <p>
            The sophisticated task management engine
            designed for professionals who demand
            clarity, reliability, and peak
            performance every day.
          </p>

          <div className="hero-cards">

            <div className="focus-card">
              <h3>Today's Focus</h3>

              <div className="task active">
                <span>✓ Finalize Q4 strategy deck</span>
                <span className="high">High</span>
              </div>

              <div className="task">
                <span>Weekly team alignment meeting</span>
                <span className="routine">Routine</span>
              </div>

              <div className="task disabled">
                <span>Review candidate portfolios</span>
                <span className="routine">Routine</span>
              </div>
            </div>

            <div className="stats-column">
              <div className="efficiency-card">
                <h2>84%</h2>
                <p>EFFICIENCY</p>

                <div className="progress">
                  <div className="progress-fill"></div>
                </div>
              </div>

              <div className="completed-card">
                ⚡ 12 tasks completed today
              </div>
            </div>

          </div>
        </div>

        {/* Login/Register Area */}
        <div className="hero-right">
          <div className="auth-card">
            <Outlet />
          </div>
        </div>

      </section>

      {/* Features */}
      <section className="features">

        <h2>Engineered for deep work.</h2>

        <p>
          Eliminate friction and mental load with an
          interface that anticipates your next move.
        </p>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>Predictive Scheduling</h3>
            <p>
              AI-driven task prioritization based on
              your historical performance and deadline
              proximity.
            </p>
          </div>

          <div className="feature-card">
            <h3>Ecosystem Sync</h3>
            <p>
              Seamless integration with Slack,
              GitHub, and Jira to centralize your
              workflow.
            </p>
          </div>

          <div className="feature-card">
            <h3>Enterprise Security</h3>
            <p>
              SOC2 compliant with end-to-end
              encryption for all project data.
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="footer">

        <div>
          <h3>TaskFlow</h3>
          <p>
            © 2026 TaskFlow Productivity Inc.
            All rights reserved.
          </p>
        </div>

        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Help Center</span>
          <span>Security</span>
        </div>

      </footer>

    </div>
  );
}