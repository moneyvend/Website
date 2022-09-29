import { VscBell } from 'react-icons/vsc';
import { BsChevronDown } from 'react-icons/bs';
import './settingsNavbar.modules.css';
import { FiSearch } from 'react-icons/fi';
import profilePicture from '../../../profile-pic.png';

const SettingsNavbar = () => (
  <div className="settings-navbar">
    <div>
      <div className="search-div">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search for anything" />
      </div>
      <VscBell className="bell" />
    </div>
    <img src={profilePicture} alt="profile img" className="img-fi" />
    <BsChevronDown className="arrow-down" />
  </div>
);

export default SettingsNavbar;
