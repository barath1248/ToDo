import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

export function Userdashboard() {
  const [cookies, , removeCookie] = useCookies(["userId"]);
  const navigate = useNavigate();

  function handleSignout() {
    removeCookie("userId");
    navigate("/");
  }

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">TaskFlow</h2>

        <h3 className="username">{cookies["userId"]}</h3>

        <button className="signout-btn" onClick={handleSignout}>
          Sign Out
        </button>

        <div className="menu">
          <h3>Appointments</h3>
          <h3>Calendar</h3>
        </div>
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="topbar">
          <div>
            <input
              type="text"
              placeholder="Search Appointments"
              className="search-box"
            />
          </div>

          <div>
            <button className="add-btn">
              Add Appointment
            </button>
          </div>
        </div>

        {/* Appointment Table */}
        <div className="table-container">
          <table>
            <caption>Appointment Details</caption>

            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Doctor Visit</td>
                <td>General Checkup</td>
                <td>11-Jun-2026</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>

              <tr>
                <td>Meeting</td>
                <td>Project Discussion</td>
                <td>15-Jun-2026</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}