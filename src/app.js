import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "./hooks/theme";
import AppRoutes from "./routes";
import "./app.css";

const App = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* Switch Button */}
      <div style={{ display: "flex", justifyContent: "end" }}>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={setTheme}
          id="toggle"
        />
        <label className="switch" htmlFor="toggle"></label>
      </div>

      {/* Navigation Lnks */}
      <div>
        <ul className="navbar">
          <li className="nav-item">
            <NavLink
              to={"/"}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/about"}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/contact"}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <AppRoutes />
    </>
  );
};

export default App;
