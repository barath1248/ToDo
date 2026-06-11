import "../styles/Dashboard.css";

export function Userdashboard() {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>TaskFlow</h2>

        <ul>
          <li className="active">Dashboard</li>
          <li>Tasks</li>
          <li>Projects</li>
          <li>Calendar</li>
          <li>Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">

        {/* Header */}
        <div className="header">
          <h1>Dashboard</h1>

          <div className="profile">
            Welcome, Barath
          </div>
        </div>

        {/* Stats */}
        <div className="stats">

          <div className="card">
            <h3>Total Tasks</h3>
            <h2>48</h2>
          </div>

          <div className="card">
            <h3>Completed</h3>
            <h2>32</h2>
          </div>

          <div className="card">
            <h3>Pending</h3>
            <h2>16</h2>
          </div>

          <div className="card">
            <h3>Productivity</h3>
            <h2>84%</h2>
          </div>

        </div>

        {/* Content Grid */}
        <div className="content-grid">

          {/* Tasks */}
          <div className="tasks-section">
            <h2>Today's Tasks</h2>

            <div className="task-item">
              <span>Design Login Page</span>
              <span className="high">High</span>
            </div>

            <div className="task-item">
              <span>Connect API</span>
              <span className="medium">Medium</span>
            </div>

            <div className="task-item">
              <span>Fix Bugs</span>
              <span className="low">Low</span>
            </div>

            <div className="task-item">
              <span>Deploy Project</span>
              <span className="high">High</span>
            </div>
          </div>

          {/* Activity */}
          <div className="activity-section">
            <h2>Recent Activity</h2>

            <p>✔ Completed Register Module</p>
            <p>✔ Added Login Page</p>
            <p>🕒 Dashboard UI In Progress</p>
            <p>📅 Meeting Scheduled</p>
          </div>

        </div>

      </main>
    </div>
  );
}