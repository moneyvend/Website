import { Layout } from 'antd';
import AppImages from '../../utilities/images/images';
import styles from './body.modules.css';

const Body = () => (
  <Layout>
    <section className="s-4">
      <h2>Why monievend ?</h2>
      <div className="body-text">
        <div className="body-para">
          <h3>Easy, Simple, Quick and Safe</h3>
          <p className="p-11">
            All customer transactions get the special treatment.
            Cutting edge technology for super fast,
            super safe and an easy to use interface for the best possible experience working with us

          </p>
        </div>
        <div className="body-para">
          <h3>Guaranteed Fluidity</h3>
          <p className="p-11">
            With cutting edge and industry leading software and API’s integrated into the system,
            you can always expect the best of the best services always

          </p>
        </div>
      </div>
      <div className="s-5">
        <h2>Our Services</h2>
        <div className="c-2">
          <div className="cc-2">
            <img src={AppImages.IMAGE_TWO} className="i" alt="Logo" preview={false} />
            <h4>Utility Bill Payment</h4>
            <p className="p-5">Pay for your DSTV, GoTV Startimes and more with our integrated</p>
          </div>
          <div className="cc-2">
            <img src={AppImages.IMAGE_THREE} className="i" alt="Logo" preview={false} />
            <h4>USSD Enabled Transaction</h4>
            <p className="p-5">Send and receive payments without the internet</p>
          </div>
          <div className="cc-2">
            <img src={AppImages.IMAGE_FOUR} className="i" alt="Logo" preview={false} />
            <h4>POS Teminal</h4>
            <p className="p-5">Send, receive all with easy. With or without the internet. No hassle, no delay</p>
          </div>
        </div>
      </div>
    </section>
    <section className="c-3">
      <div>
        <h2 id="h4">Become a Merchant</h2>
        <p id="p-6">Getting debited is hard, getting value shouldn&apos;t be.</p>
        <p id="p-7">
          Our company exists to help merchants sell more.
          We make every decision and measure every
          outcome based on how well it serves our customers.
        </p>
        <div className="b-3">
          <button className="b-2" type="button">Become a Merchant</button>
        </div>
      </div>

    </section>
    <section>
      <div>
        <h2 id="h-2">Utility Billers</h2>
        <div className="c-4">
          <div className="i-2">
            <img src={AppImages.AEDC} className="i-6" alt="Logo" preview={false} />
            <h4 id="h-5">AEDC</h4>
          </div>
          <div className="i-2">
            <img src={AppImages.EEDC} className="i-6" alt="Logo" preview={false} />
            <h4 id="h-5">EEDC</h4>
          </div>
          <div className="i-2">
            <img src={AppImages.EKEDC} className="i-6" alt="Logo" preview={false} />
            <h4 id="h-5">EKEDC</h4>
          </div>
          <div className="i-2">
            <img src={AppImages.IKEJA_LOGO} className="i-6" alt="Logo" preview={false} />
            <h4 id="h-5">IKEDC</h4>
          </div>
          <div className="i-2">
            <img src={AppImages.IBEDC} className="i-6" alt="Logo" preview={false} />
            <h4 id="h-5">IBEDC</h4>
          </div>
          <div className="i-2">
            <img src={AppImages.JEDC} className="i-6" alt="Logo" preview={false} />
            <h4 id="h-5">JEDC</h4>
          </div>
          <div className="i-2">
            <img src={AppImages.KEDC} className="i-6" alt="Logo" preview={false} />
            <h4 id="h-5">KEDC</h4>
          </div>
          <div className="i-2">
            <img src={AppImages.KEDCO} className="i-6" alt="Logo" preview={false} />
            <h4 id="h-5">KEDCO</h4>
          </div>
          <div className="i-2">
            <img src={AppImages.PHEDC} className="i-6" alt="Logo" preview={false} />
            <h4 id="h-5">PHEDC</h4>
          </div>
        </div>
      </div>
    </section>
    <section className="s-4">
      <h2 id="h-4">Here&apos;s what some users have to say</h2>
      <div className="d-4">
        <div className="c-5">
          <img src={AppImages.IMAGE_FIVE} className="u-i" alt="Logo" preview={false} />
          <p className="p-6">
            &quot;When I started using monievend,
            it has been smooth sailing for all my utility recharges&quot;
          </p>
          <p className="p-5">Adegbite Saviour</p>
        </div>
        <div className="c-5">
          <img src={AppImages.IMAGE_SIX} className="u-i" alt="Logo" preview={false} />
          <p className="p-6">
            &quot;It is alway very surprisig when I pay for light and I suddenly get the token.
            Like I usually have to...&quot;
          </p>
          <p className="p-5">Filomina Ezenwata</p>
        </div>
        <div className="c-5">
          <img src={AppImages.IMAGE_SEVEN} className="u-i" alt="Logo" preview={false} />
          <p className="p-6">
            &quot;Using this service to get my POS transactions done is really comvenient.
            Almost too convenient&quot;
          </p>
          <p className="p-5">Austin Babalola</p>
        </div>
        <div className="c-5">
          <img src={AppImages.IMAGE_SEVEN} className="u-i" alt="Logo" preview={false} />
          <p className="p-6">
            &quot;This is a good service. There’s really no other way to put it&quot;
          </p>
          <p className="p-5">Faridah Salih</p>
        </div>
      </div>
    </section>
    <footer>
      <h2>Newsletter</h2>
      <p className="p-7">Sign up for our newsletter to be the first to know about our services</p>
      <form className="f-1">
        <input type="email" id="email" name="email" className="in-1" placeholder="Email Address" />
        <button type="button" className="b-4">Sign-Up</button>
      </form>
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
          <img src={AppImages.FACEBOOK} className="im-2" alt="Logo" preview={false} />
          <img src={AppImages.LINKEDIN} className="im-2" alt="Logo" preview={false} />
          <img src={AppImages.TWITTER} className="im-2" alt="Logo" preview={false} />
        </div>
      </div>

    </footer>

  </Layout>
);

export default Body;
