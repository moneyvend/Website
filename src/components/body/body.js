import { Button, Layout } from 'antd';
import AppImages from '../../utilities/images/images';
import Styles from './body.modules.css'; // eslint-disable-line no-unused-vars
import Footer from './footer';

const Body = () => (
  <Layout>
    <section className="s-4">
      <div className="holdWhy">
        <h2 id="h-2">Why Monievend ?</h2>
        <div className="body-text2">
          <div className="body-para">
            <h3>Easy, Simple, Quick and Safe</h3>
            <p className="p-11">
              All customer transactions get the special treatment.
              Cutting edge technology for super fast,
              super safe and an easy to use interface for
              the best possible experience working with us
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
      </div>
      <div className="s-5">
        <h2 id="h-2">Our Services</h2>
        <div className="c-2">
          <div className="cc-2">
            <img src={AppImages.IMAGE_TWO} className="i" alt="Logo" />
            <h4>Utility Bill Payment</h4>
            <p className="p-5Me">Pay for your DSTV, GoTV Startimes and more with our integrated</p>
          </div>
          <div className="cc-2">
            <img src={AppImages.IMAGE_THREE} className="i" alt="Logo" />
            <h4>USSD Enabled Transaction</h4>
            <p className="p-5Me">Send and receive payments without the internet</p>
          </div>
          <div className="cc-2">
            <img src={AppImages.IMAGE_FOUR} className="i" alt="Logo" />
            <h4>POS Teminal</h4>
            <p className="p-5Me">Send, receive all with easy. With or without the internet. No hassle, no delay</p>
          </div>
        </div>
      </div>
    </section>
    <div className="holdMach">
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
            <Button className="b-2 be-2" type="button">
              Become a Merchant
            </Button>
          </div>
        </div>

      </section>
    </div>
    <section>
      <div className="UtilityBillers">
        <h2 id="h-2">Utility Billers</h2>
        <div className="c-4 logoComp">
          <div className="i-2">
            <img src={AppImages.AEDC} className="i-6" alt="Logo" />
            <h4 id="h-5">AEDC</h4>
          </div>
          <div className="i-2">
            <img src={AppImages.EEDC} className="i-6" alt="Logo" />
            <h4 id="h-5">EEDC</h4>
          </div>
          <div className="i-2">
            <img src={AppImages.EKEDC} className="i-6" alt="Logo" />
            <h4 id="h-5">EKEDC</h4>
          </div>
          <div className="i-2">
            <img src={AppImages.IKEJA_LOGO} className="i-6" alt="Logo" />
            <h4 id="h-5">IKEDC</h4>
          </div>
          <div className="i-2">
            <img src={AppImages.IBEDC} className="i-6" alt="Logo" />
            <h4 id="h-5">IBEDC</h4>
          </div>
          <div className="i-2">
            <img src={AppImages.JEDC} className="i-6" alt="Logo" />
            <h4 id="h-5">JEDC</h4>
          </div>
          <div className="i-2">
            <img src={AppImages.KEDC} className="i-6" alt="Logo" />
            <h4 id="h-5">KEDC</h4>
          </div>
          <div className="i-2">
            <img src={AppImages.KEDCO} className="i-6" alt="Logo" />
            <h4 id="h-5">KEDCO</h4>
          </div>
          <div className="i-2">
            <img src={AppImages.PHEDC} className="i-6" alt="Logo" />
            <h4 id="h-5">PHEDC</h4>
          </div>
        </div>
      </div>
    </section>
    <section className="s-4">
      <h2 id="h-2">Here&apos;s what some users have to say</h2>
      <div className="d-4">
        <div className="c-5">
          <img src={AppImages.IMAGE_FIVE} className="u-i" alt="Logo" />
          <p className="p-6">
            &quot;When I started using monievend,
            it has been smooth sailing for all my utility recharges&quot;
          </p>
          <p className="p-5Me">Adegbite Saviour</p>
        </div>
        <div className="c-5">
          <img src={AppImages.IMAGE_SIX} className="u-i" alt="Logo" />
          <p className="p-6">
            &quot;It is alway very surprising when I pay for light and I suddenly get the token.
            Like I usually have to...&quot;
          </p>
          <p className="p-5Me">Filomina Ezenwata</p>
        </div>
        <div className="c-5">
          <img src={AppImages.IMAGE_SEVEN} className="u-i" alt="Logo" />
          <p className="p-6">
            &quot;Using this service to get my POS transactions done is really convenient.
            Almost too convenient&quot;
          </p>
          <p className="p-5Me">Austin Babalola</p>
        </div>
        <div className="c-5">
          <img src={AppImages.IMAGE_SEVEN} className="u-i" alt="Logo" />
          <p className="p-6">
            &quot;This is a good service. There’s really no other way to put it&quot;
          </p>
          <p className="p-5Me">Faridah Salih</p>
        </div>
      </div>
    </section>
    <section className="newsletter">
      <h2 className="letter">Newsletter</h2>
      <p className="p-7 sign">Sign up for our newsletter to be the first to know about our services</p>
      <form className="f-1">
        <input type="email" id="email" name="email" className="in-1" placeholder="Email Address" />
        <button type="button" className="b-4">Sign-Up</button>
      </form>
    </section>
    <Footer />

  </Layout>
);

export default Body;
