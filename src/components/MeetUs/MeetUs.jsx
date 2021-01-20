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
                  Nithin is a seasoned industry professional, working at various
                  companies such as Expedia, T-Mobile, and Zenoti. He also
                  spends his free time as a coding bootcamp instructor. When he
                  is not working, he loves to exercise and reads dystopian
                  fiction books which he finds oddly calming.
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
              <img src="../img/simretpro1.jpeg" className="team_photo" />
            </div>
            <div className="team_bio_parent">
              <div className="empty"></div>
              <h2 className="team_name">Simret</h2>
              <div className="team_bio">
                <p>
                  Simret is web developer at Outreach Design, she is a Code
                  Coach at the Coder School and Teaching Assistance at
                  Skillspire. She holds an Associate Degree in Information
                  technology. When she is not coding, she enjoys watching comedy
                  shows and spending time with family.
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
                  Bachelors Degree in Civil Engineer with many years of
                  experience. When he is not coding or building amazing
                  enginerring project, he spend his time playing Soccer.
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
