import React, { Component, createContext } from 'react';
import logo from './logo.svg';
import './App.css';

import photo from './images/photo.jpg';
import contact from './images/icn-contact.jpg';
import twitter from './images/icn-twitter.jpg';
import facebook from './images/icn-facebook.jpg';

const content = {
  en: {
    btnUkrLabel: "ukr",
    btnEnLabel: "en",
    name: "Bohdan Shuliaka",
    position: "Trainee",
    city: "Lviv City",
    summary: "PROFESSIONAL SUMMARY",
    summaryText: "Hard-working, multi-tasking applicant offering excellent communication and technical skills. Meets deadlines and works with a high level of multicultural awareness and adaptability. An ambitious problem solver with a passion for web development. A good team player.",
    education: "EDUCATION",
    educationItems: [
      {
      instance: "Ivan Franko National University of Lviv",
      position: "MASTER OF LAW",
      location: "Lviv, Ukraine | 2014"
    },
    {
      instance: "Lviv Polytechnic National University",
      position: "MASTER OF ECONOMICS",
      location: "Lviv, Ukraine | 2016"
    },
    {
      instance: "Epam Systems Lviv",
      position: "Front-End Program student",
      location: "Lviv, Ukraine | 2018"
    }
  ],
    experience: "EXPERIENCE",
    experienceItems: [
      {
      place: "LVIV STATE ADMINISTRATION",
      position: "Specialist of Investment Policy Department | Ukraine, Lviv | 2016 -2018",
      desc: "Vestibulum eu ante massa, sed rhoncus velit."
    },
    {
      place: "EPAM SYSTEMS LVIV",
      position: "Trainee at Front-End Program",
      desc: "Vestibulum eu ante massa, sed rhoncus velit."
    },
  ],
    skills: "SKILLS",
    soft: "Software Knowledge",
    languages: "Languages",
    interests: "INTERESTS",
    sport: "Sports (Crossfit, Bodybuilding)",
    music: "Proficient in Music Production (Advanced skills in mixing and mastering)"
    
  },
  ukr: {
    btnUkrLabel: "укр",
    btnEnLabel: "англ",
    name: "Богдан Шуляка",
    position: "Cтажер",
    city: "Львів",
    summary: "ПРОФЕСІЙНИЙ ПІДСУМОК",
    summaryText: "Старанний, багатозадачний працівник, який володіє відмінним стилем комунікації та технічними навиками. Дотримується умов та дедлайнів і працює з високим рівнем мультикультурного усвідомлення та адаптації. Амбіційний кандидат з пристрастю до веб-розробки. Хороший командний гравець.",
    education: "ОСВІТА",
    educationItems: [
      {
      instance: "Львівський Національний Університет ім. Івана Франка",
      position: "Магістр права",
      location: "Львів, Україна | 2014"
    },
    {
      instance: "Національний Університет Львівська Політехніка",
      position: "Магістр економіки",
      location: "Львів, Україна | 2016"
    },
    {
      instance: "Epam Systems Lviv",
      position: "Fron-End Development Training course",
      location: "Львів, Україна | 2018"
    }
  ],
  experience: "ДОСВІД",
  experienceItems: [
    {
    place: "Львівська Обласна Державна Адміністрація",
    position: "Головний спеціаліст супроводу інвестиційних проектів| Україна, Львів | 2016 -2018",
    desc: "Vestibulum eu ante massa, sed rhoncus velit."
  },
  {
    place: "EPAM SYSTEMS LVIV",
    position: "Стажер",
    desc: "Vestibulum eu ante massa, sed rhoncus velit."
  },
],
  skills: "ВМІННЯ",
  soft: "Знання програмного забезпечення",
  languages: "Мови",
  interests: "ІНТЕРЕСИ",
  sport: "Спорт (Crossfit, Bodybuilding)",
  music: "Музика (Advanced skills in mixing and mastering)"
  }
};

const LanguageContext = createContext();

class Education extends Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {content => {
          const educations = content.educationItems.map((item) => {
            return (
              <div className="content">
              <h3>{item.location}</h3>
              <p>{item.instance}
                <br />
                <em>{item.position}</em>
              </p>
            </div>
            )
           
          })
          return educations;
        }}
      </LanguageContext.Consumer>
    );
  }
}
class Experience extends Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {content => {
          const experiences = content.experienceItems.map((item) => {
            return (
              <div className="content">
              <p>{item.place}
                <br />
                <em>{item.position}</em>
              </p>       
                <p>{item.desc}</p>           
            </div>
            )
           
          })
          return experiences;
        }}
      </LanguageContext.Consumer>
    );
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      language: "en"
    };
  }
  handleClickEn = () => { 
    this.setState({ language: 'en' })
  }
  handleClickUkr = () => { 
    this.setState({ language: 'ukr' })
  }
  render() {
    return (
      <LanguageContext.Provider value={content[this.state.language]}>
      <div className="App">
      <LanguageContext.Consumer>
      {content => {
        return (
      <div id="wrapper">
    <div className="wrapper-top"></div>
    <div className="wrapper-mid">
      <div id="paper">
        <div className="paper-top"></div>
        <div id="paper-mid">
          <div className="entry">
            <img className="portrait" src={photo} alt="Bohdan Shuliaka" />
            <div className="self">
              <h1 className="name">{content.name}
                <br />
                <span>{content.position}</span>
              </h1>
              <ul>
                <li className="ad">{content.city}</li>
                <li className="mail">bohdan.shuliaka@gmail.com</li>
                <li className="tel">093 68 57 285</li>
              </ul>
            </div>
            <div className='buttons'>
            <button className="btn btn1" onClick={this.handleClickEn}>
                {content.btnEnLabel}
            </button>
            <button className="btn btn2" onClick={this.handleClickUkr}>
                {content.btnUkrLabel}
            </button>
            </div>
            <div className="social">
              <ul>
                <li>
                  <a className='north' id="contact" href="contact/index.html" title="Contact Me">
                    <img src={contact} alt="" />
                  </a>
                </li>
                <li>
                  <a className='north' href="#" title="Follow me on Twitter">
                    <img src={twitter} alt="" />
                  </a>
                </li>
                <li>
                  <a className='north' href="#" title="My Facebook Profile">
                    <img src={facebook} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="entry">
            <h2>{content.summary}</h2>
            <p> {content.summaryText}
            </p>
          </div>
          
          <div className="entry">
            <h2>{content.education}</h2>
            <Education />
          </div>
          <div className="entry">
            <h2>{content.experience}</h2>
            <Experience />
          </div>
          <div className="entry">
            <h2>{content.skills}</h2>
            <div className="content">
              <h3>{content.soft}</h3>
              <ul className="skills">
                <li>Photoshop</li>
                <li>CSS3, HTML5, Preprocessors (Less/Sass)</li>
                <li>Javascript </li>
                <li>Version control</li>
                <li>AJAX (HTTP, Fetch, CORS)</li>
                <li>After Effects</li>
                <li>Node.js</li>
                <li>React</li>
              </ul>
            </div>
            <div className="content">
              <h3>{content.languages}</h3>
              <ul className="skills">
                <li>English (upper-intermediate)</li>
                <li>French (elementary)</li>
              </ul>
            </div>
          </div>
          <div className="entry">
            <h2>{content.interests}</h2>
            <ul className="works">
              <li>{content.sport}</li>
              <br/>
              <li>{content.music}</li>
            </ul>
          </div>
        </div>
        <div className="clear"></div>
        <div className="paper-bottom"></div>
      </div>
    </div>
    <div className="wrapper-bottom"></div>
  </div>
    );
  }}
  </LanguageContext.Consumer>
      </div>
      </LanguageContext.Provider>
    );
  }
}

export default App;
