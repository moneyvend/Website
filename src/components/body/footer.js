import AppImages from '../../utilities/images/images';
import Styles from './body.modules.css'; // eslint-disable-line no-unused-vars

const Footer = () => (
  <footer>
    <div className="f-2">
      <ul className="p-9">
        <li id="p-8">Resources</li>
        <li>Prices</li>
        <li>Integrations</li>
        <li>Support</li>
        <li>Merchant Service Policies</li>
      </ul>
      <ul className="p-9">
        <li id="p-8">Our Services</li>
        <li>POS Transactions</li>
        <li>Utility Bill Payment</li>
      </ul>
      <ul className="p-9">
        <li id="p-8">Pages</li>
        <li>Merchant Page</li>
        <li>Bill Payment</li>
      </ul>
      <ul className="p-9">
        <li id="p-8">Developers</li>
        <li>API Documentation</li>
      </ul>
      <ul className="p-9">
        <li id="p-8">Contact</li>
        <li>+234 239-334-987</li>
        <li>support@monievend.com</li>
      </ul>
    </div>
    <div className="f-3">
      <p id="p-10">@Monievend</p>
      <div className="di-1">
        <p>Terms of service</p>
        <p>Privacy policy</p>
        <p>Cookie policy</p>
      </div>
      <div className="di-1">
        <img src={AppImages.FACEBOOK} className="im-2" alt="Logo"  />
        <img src={AppImages.LINKEDIN} className="im-2" alt="Logo" />
        <img src={AppImages.TWITTER} className="im-2" alt="Logo" />
      </div>
    </div>

  </footer>
);

export default Footer;
