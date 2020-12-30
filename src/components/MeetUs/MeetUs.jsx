import React from "react";
import "./MeetUs.css";
import Footer from "../Footer/Footer";

function Meetteam() {
  return (
    <div className="grid_contain_parent">
      <div className="grid_contain">
        <div className="titleFrame">
          <p> Meet the Team</p>
        </div>
        <div className="team">
          <div className="team_contain">
            <div className="team_photo_parent">
              <img src="../img/person.PNG" className="team_photo" />
            </div>
            <div className="team_bio_parent">
              <div className="empty"></div>
              <h2 className="team_name">Nithin</h2>
              <div className="team_bio">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
                  exercitationem. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Nam, exercitationem. adipisicing elit. Nam,
                  exercitationem. adipisicing
                </p>
              </div>
              <a href="" className="fa fa-linkedin"></a>
            </div>
          </div>
          <div className="team_contain">
            <div className="team_photo_parent">
              <img src="../img/person.PNG" className="team_photo" />
            </div>
            <div className="team_bio_parent">
              <div className="empty"></div>
              <h2 className="team_name">Emmanueal</h2>
              <div className="team_bio">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
                  exercitationem. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Nam, exercitationem. adipisicing elit. Nam,
                  exercitationem. adipisicing
                </p>
              </div>
              <a href="" className="fa fa-linkedin"></a>
            </div>
          </div>
          <div className="team_contain">
            <div className="team_photo_parent">
              <img src="../img/person.PNG" className="team_photo" />
            </div>
            <div className="team_bio_parent">
              <div className="empty"></div>
              <h2 className="team_name">Simuret</h2>
              <div className="team_bio">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
                  exercitationem. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Nam, exercitationem. adipisicing elit. Nam,
                  exercitationem. adipisicing
                </p>
              </div>
              <a href="" className="fa fa-linkedin"></a>
            </div>
          </div>
          <div className="team_contain">
            <div className="team_photo_parent">
              <img src="../img/person.PNG" className="team_photo" />
            </div>
            <div className="team_bio_parent">
              <div className="empty"></div>
              <h2 className="team_name">Riyadh</h2>
              <div className="team_bio">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
                  exercitationem. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Nam, exercitationem. adipisicing elit. Nam,
                  exercitationem. adipisicing
                </p>
              </div>
              <a href="" className="fa fa-linkedin"></a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Meetteam;
