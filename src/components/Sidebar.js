import React from 'react';
import updown from '../assets/updown.svg';
import logo from '../assets/logo.svg';
import dashboard from '../assets/dashboard.svg';
import allactivity from '../assets/allactivity.svg';
import settings from '../assets/settings.svg';
import dailytask from '../assets/dailytask.png';
import meeting from '../assets/meeting.png';
import resources from '../assets/resources.png';
import Availibity from '../assets/Availibity.png';
import ALLprojects from '../assets/ALLprojects.png';
import Archive from '../assets/Archive.png';
import brainstroming from '../assets/brainstroming.png';
import play_arrow from '../assets/play_arrow.svg';
import plus from '../assets/plus.svg';
import '../Styles/css/sidebar.css';
import SidebarCategories from './SidebarCategories';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div id="logo">
        <img id="logoimg" src={logo} alt="" />
        <h5>OWW Studio</h5>
        <img src={updown} alt="" />
      </div>
      <div className="menu">
        <div>
          <img src={dashboard} alt="" />
          <p>Dashboard</p>
        </div>
        <div>
          <img src={settings} alt="" />
          <p>Settings</p>
        </div>
        <div>
          <img src={allactivity} alt="" />
          <p>All Activity</p>
        </div>
      </div>
      <div className="categories">
        <SidebarCategories
          image={play_arrow}
          emoji={dailytask}
          text="Daily Task"
        />
        <SidebarCategories
          image={play_arrow}
          emoji={meeting}
          text="Mettings Summary"
        />
        <SidebarCategories
          image={play_arrow}
          emoji={resources}
          text="Resources"
        />
        <SidebarCategories
          image={play_arrow}
          emoji={Availibity}
          text="Availibity"
        />
        <SidebarCategories
          image={play_arrow}
          emoji={ALLprojects}
          text="All Projects"
        />
        <SidebarCategories image={play_arrow} emoji={Archive} text="Archive" />
        <SidebarCategories
          image={play_arrow}
          emoji={brainstroming}
          text="Brainstroaming"
        />
      </div>
      <div id="newProject">
        <button>
          {' '}
          <img src={plus} alt="" /> <p>New Project</p>{' '}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
