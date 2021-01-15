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
              <img src="../img/profile2.jpeg" className="team_photo" />
            </div>
            <div className="team_bio_parent">
              <div className="empty"></div>
              <h2 className="team_name">Emmanuel</h2>
              <div className="team_bio">
                <p>
                  Emmanuel is a Web Developer at Outreach Design, he holds a
                  Bachelors Degree in Finance and Accounting. When he is not
                  coding he enjoys reading and researching.
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
              <h2 className="team_name">Simret</h2>
              <div className="team_bio">
                <p>
                  Simret is a full stack web developer at Outreach Design, she
                  is a code coach at the Coder School and Teaching Assistance at
                  Skillspire coding boot camp. She holds an Associate Degree in
                  Information technology. When she is not coding, she enjoys
                  watching comedy shows and family gatherings.
                </p>
              </div>
              <a href="" className="fa fa-linkedin"></a>
            </div>
          </div>
          <div className="team_contain">
            <div className="team_photo_parent">
              <img src="../img/riyadh.PNG" className="team_photo" />
            </div>
            <div className="team_bio_parent">
              <div className="empty"></div>
              <h2 className="team_name">Riyadh</h2>
              <div className="team_bio">
                <p>
                  Riyadh is a Web Developer at Outreach Design. He holds a
                  Bachelors Degree in Civil Engineer under his belt with many
                  years of experience on the field. When he is not coding or
                  building amazing enginerring project, he spend his time
                  playing Soccer which he is also good at in a proffesional
                  scale.
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
