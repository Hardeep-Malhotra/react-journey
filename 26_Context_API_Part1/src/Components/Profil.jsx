import React, { useContext } from "react";
import "./ProfileCard.css";
import UserContext from "../Context/UserContext";

function ProfileCard() {
  const { user } = useContext(UserContext);
  return (
    <div className="card-wrapper">
      <div className="profile-card">
        <div className="card-header"></div>
        <div className="avatar">
          {/* Grabbing the first letter of the username for a dynamic profile pic */}
          {user.username ? user.username.charAt(0).toUpperCase() : "U"}
        </div>
        <div className="card-content">
          <h2 className="user-name">{user.username || "Your Name"}</h2>
          <p className="user-email">{user.email || "email@example.com"}</p>

          <button className="profile-btn">View Full Profile</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
