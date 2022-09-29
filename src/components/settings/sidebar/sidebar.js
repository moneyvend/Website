import { Link } from 'react-router-dom';
import './sidebar.modules.css';
import { BiHomeAlt } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { AiTwotoneSetting, AiOutlineTransaction } from 'react-icons/ai';
import { FiHelpCircle } from 'react-icons/fi';

const Sidebar = () => (
  <div className="sidebar">
    <span className="logo">Logo</span>
    <div className="nav-links-div">
      <Link to="#e">
        <BiHomeAlt />
        <span>Payment services</span>
      </Link>
      <Link to="#e">
        <AiOutlineTransaction />
        <span>Transactions</span>
      </Link>
      <Link to="#e">
        <FaRegUser />
        <span>Beneficiary</span>
      </Link>
      <Link to="#e">
        <AiTwotoneSetting />
        <span>Notification</span>
      </Link>
      <Link to="#e">
        <FiHelpCircle />
        <span>Settings</span>
      </Link>
    </div>
    <div>
      <Link to="#e">
        <FiHelpCircle />
        <span>Help</span>
      </Link>
      <Link to="#e">
        <FiHelpCircle />
        <span>Logout</span>
      </Link>
    </div>
  </div>
);

export default Sidebar;
