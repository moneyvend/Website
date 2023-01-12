import AppImages from '../../../utilities/images/images';
import Styles from './body.modules.css'; // eslint-disable-line no-unused-vars

const Footer = () => (
  <footer className="footer">
    <div className="f-2 footerWith">
      <ul className="p-9">
        <li id="p-8">Resources</li>
        <li id="res">Prices</li>
        <li id="res">Integrations</li>
        <li id="res">Support</li>
        <li id="res">Merchant Service Policies</li>
      </ul>
      <ul className="p-9">
        <li id="p-8">Our Services</li>
        <li id="res">POS Transactions</li>
        <li id="res">Utility Bill Payment</li>
      </ul>
      <ul className="p-9">
        <li id="p-8">Pages</li>
        <li id="res">Merchant Page</li>
        <li id="res">Bill Payment</li>
      </ul>
      <ul className="p-9">
        <li id="p-8">Developers</li>
        <li id="res">API Documentation</li>
      </ul>
      <ul className="p-9">
        <li id="p-8">Contact</li>
        <li id="res">+234 239-334-987</li>
        <li id="res">support@monievend.com</li>
      </ul>
    </div>
    <div className="f-3 footerWith2">
      <p id="p-10">@Monievend</p>
      <div className="di-1">
        <p id="res">Terms of service</p>
        <p id="res">Privacy policy</p>
        <p id="res">Cookie policy</p>
      </div>
      <div className="di-1">
        <a href="https://twitter.com/monievend" target="_blank" rel="noreferrer">
          <img src={AppImages.TWITTER} className="im-2" alt="Logo" />
        </a>
        <a href="https://www.linkedin.com/company/monievend/people/" target="_blank" rel="noreferrer">
          <img src={AppImages.LINKEDIN} className="im-2" alt="Logo" />
        </a>
        <a href="https://www.instagram.com/monievend/" target="_blank" rel="noreferrer">
          <img src={AppImages.FACEBOOK} className="im-2" alt="Logo" />
        </a>
      </div>
    </div>

  </footer>
);

export default Footer;
