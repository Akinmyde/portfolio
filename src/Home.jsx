import React, { Component } from 'react';
import { Link } from "react-scroll";
import SkillCard from './SkillCard';
import PortFolioCard from './PortFolioCard';
import TimeLineCard from './TimeLineCard';
import Contact from './Contact'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isMobileView: false };
  }

  onMobileNavBarToggle = () => {
    const { isMobileView } = this.state;
    this.setState({ isMobileView: !isMobileView })
  }

  render() { 
    const { isMobileView } = this.state;
    return (
  <div id="page-top">

  <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink" id="mainNav">
    <div className="container">
      <Link
        className="navbar-brand js-scroll-trigger"
        to="page-top"
        duration= {1000}
        offset={-70}
        smooth={true}
        spy={true}
        >Akinmyde
      </Link>
      <button onClick={this.onMobileNavBarToggle} className={`navbar-toggler navbar-toggler-right ${isMobileView ? 'collapsed' : ''}`} type="button" data-toggle="collapse" data-target="navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className={`collapse navbar-collapse ${isMobileView ? 'show' : ''}`} id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <Link
              className="nav-link js-scroll-trigger" 
              to="services"
              duration= {1000}
              offset={-70}
              smooth={true}
              spy={true}
              >My Skills
              </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link js-scroll-trigger"
              to="portfolio"
              duration= {1000}
              offset={-70}
              smooth={true}
              spy={true}
              >Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link js-scroll-trigger" 
              to="about"
              duration= {1000}
              offset={-70}
              smooth={true}
              spy={true}
              >About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link js-scroll-trigger"
              to="contact"
              duration= {1000}
              offset={-70}
              smooth={true}
              spy={true}
              >Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Hi there, Call me Akinmyde</div>
        <div className="intro-heading text-uppercase">Happy To Finally Meet You</div>
        <Link
          className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
          to="services"
          duration= {1000}
          offset={-70}
          smooth={true}
          spy={true}
          >Find out what i do
          </Link>
      </div>
    </div>
  </header>

  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">My Skills</h2>
          <h3 className="section-subheading text-muted">Over the years as a software engineer, i have develop my skills in the following languages, frameworks and libraries.</h3>
        </div>
      </div>
      <div className="row text-center">
        <SkillCard 
          title='NodeJs' 
          description="I have more then 1 year+ experience in NodeJs" 
        />
        <SkillCard 
          title='React' 
          description="I have more then 1 year+ experience in React" 
        />
        <SkillCard 
          title='React Native' 
          description="I have more then 6 year+ experience in React Native" 
        />
        <SkillCard 
          title='Angular' 
          description="I have more then 3 month+ experience in Reacs" 
        />
        <SkillCard 
          title='C#'
          description="I have more then 1 year+ experience in C#"  
        />
        <SkillCard 
          title='Asp.Net' 
          description="I have more then 2 year+ experience in Asp.Net" 
        />
      </div>
    </div>
  </section>

  <section className="bg-light page-section" id="portfolio">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Portfolio</h2>
          <h3 className="section-subheading text-muted">Here are the awesome projects i have worked on.</h3>
        </div>
      </div>
      <div className="row">
        <PortFolioCard
          imageUrl='https://res.cloudinary.com/codeace/image/upload/v1568374570/Questioner.jpg'
          title='Questioner'
          description='Questioner is a react application. It helps the meetup organizer prioritize questions to be answered. Other users can vote on asked questions and they bubble to the top or bottom of the log'
          link="https://questioner-react.netlify.com/"
        />
        <PortFolioCard
          imageUrl='https://res.cloudinary.com/codeace/image/upload/v1568374638/maze.jpg'
          title='Maze Game'
          description='A react application that allows to choose the number of squares and then generate sprite randomly on the board, It then count the number of step it takes for the player to complete the game.'
          link="https://maze-game.netlify.com/"
        />
        <PortFolioCard
          imageUrl='https://res.cloudinary.com/codeace/image/upload/v1568374650/Authors-Haven.jpg'
          title='Authors Haven'
          description='A social platform where people can express themselves in writing, Authors can write articles and reader can read, comment and report any article that are not inline with the policy.'
          link="https://hermes-ah.netlify.com/"
        />
        <PortFolioCard
          imageUrl='https://res.cloudinary.com/codeace/image/upload/v1568375380/baf602de99c042969ca035a731a1eb49_30_1280.jpg'
          title='Gradient Generator'
          description='Mastering color code can suck sometimes, developers find it difficult most times to combine multiple color to form a single perfect color. This app help solve that problem.'
          link="https://akinmyde.github.io/Gradient-Generator/"
        />
        <PortFolioCard
          imageUrl='https://res.cloudinary.com/codeace/image/upload/v1568725248/Dating.jpg'
          title='Dating App'
          description='A C#/Angular application where user can connect with each other you share love and ideas. it is built be user need in mind'
          link="https://github.com/Akinmyde/DatingAPP-ASP"
        />
      </div>
    </div>
  </section>

  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About Me</h2>
          <h3 className="section-subheading text-muted">The journey so far.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <TimeLineCard
              imageUrl="https://res.cloudinary.com/codeace/image/upload/v1568418003/begining.jpg"
              year='2015'
              heading="My Humble Beginnings"
              description="In 2015 i attended NIIT an institution where i learnt how to do basic networking and hardware repairs for a duration of 4 month"
            />
            <TimeLineCard
              imageUrl="https://res.cloudinary.com/codeace/image/upload/c_scale,h_200,w_200/v1568419252/It.jpg"
              year='2016'
              heading="IT support(Intern) @NETCO"
              description='In July 2016 i work with NETCO a subsidiary of NNPC an engineering company as an IT support (Intern) for one year. During this years, i work on configuring servers, laptops and troubleshooting computers. Managing remote desktop software using SysAid'
              className='timeline-inverted'
            />
            <TimeLineCard
              imageUrl="http://res.cloudinary.com/codeace/image/upload/c_scale,h_200,w_200/v1568419090/web_admin.jpg"
              year='2017'
              heading="Web Aministrator @ICA"
              description='In October i joined The Institute of Creadit Administration as a Web Administrator where i was responsible for managing the organization website, designing and sending newsletter using mailchimp, running ads on facebook and managing organization socail page.'
            />
            <TimeLineCard
              imageUrl="http://res.cloudinary.com/codeace/image/upload/c_scale,h_200,w_200/v1568419090/web_admin.jpg"
              year='2018'
              heading="Web Aministrator @QUILA"
              description='In July 2018 i work remotely with Quila.com.ng as Web Administartor. During my time @Quila, i was responsible for managing the companys website.'className='timeline-inverted'
            />
            <TimeLineCard
              imageUrl="https://res.cloudinary.com/codeace/image/upload/v1568418614/web.jpg"
              year='2019'
              heading="Software Engineer @ANDELA"
              description='In March 2019 i Joined ANDELA as a Software engineer, where i have worked on numerous software project'
            />
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Be Part
                  <br />Of My
                  <br />Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Me</h2>
          <h3 className="section-subheading text-muted">I am just an email away from you.</h3>
        </div>
      </div>
      <Contact />
    </div>
  </section>

  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <span className="copyright">Copyright &copy; Akinmyde 2019</span>
        </div>
        <div className="col-md-6">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <Link to="https://twitter.com/akinmyde" >
                <i className="fa fa-twitter"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="https://github.com/Akinmyde">
                <i className="fa fa-github"></i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="https://www.linkedin.com/in/akinremi-olumide-1b3582127/">
                <i className="fa fa-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>
    );
  }
}
 
export default Home;