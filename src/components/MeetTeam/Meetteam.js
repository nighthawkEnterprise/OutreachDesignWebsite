import React from "react";
import "./meetteam.css";

function Meetteam() {
  return (
    <>
      <div className="grid_contain">
        <div className="team">
          <p> Meet the Team</p>
          <div className="team_contain">
            <div className="team_1"></div>
            <div className="team_2"></div>
            <div className="team_3"></div>
            <div className="team_4"></div>
          </div>
          <div className="team_contain">
            <div className="team_1_profile">
              <p>Bio:</p>
              <p>Nithin</p>
            </div>
            <div className="team_2_profile">
              <p>Bio:</p>
              <p>Riyadh</p>
            </div>
            <div className="team_3_profile">
              <p>Bio:</p>
              <p>Simret</p>
            </div>
            <div className="team_4_profile">
              <p>Bio:</p>
              <p>Emmanuel</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Meetteam;
