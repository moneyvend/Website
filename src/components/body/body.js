import { Layout, Image } from 'antd';
import AppImages from '../../utilities/images/images';
import styles from './body.modules.css';

const Body = () => (
  <Layout>
    <section>
      <h2>Why monievend ?</h2>
      <div>
        <div>
          <h3>Easy, Simple, Quick and Safe</h3>
          <p>
            All customer transactions get the special treatment.
            Cutting edge technology for super fast,
            super safe and an easy to use interface for the best possible experience working with us

          </p>
        </div>
        <div>
          <h3>Guaranteed Fluidity</h3>
          <p>
            With cutting edge and industry leading software and API’s integrated into the system,
            you can always expect the best of the best services always

          </p>
        </div>
      </div>
      <h2>Our Services</h2>
      <div>
        <div>
          <Image src={AppImages.IMAGE_TWO} className={styles.image} alt="Logo" preview={false} />
          <h4>Utility Bill Payment</h4>
          <p>Pay for your DSTV, GoTV Startimes and more with our integrated</p>
        </div>
        <div>
          <Image src={AppImages.IMAGE_THREE} className={styles.image} alt="Logo" preview={false} />
          <h4>USSD Enabled Transaction</h4>
          <p>Send and receive payments without the internet</p>
        </div>
        <div>
          <Image src={AppImages.IMAGE_FOUR} className={styles.image} alt="Logo" preview={false} />
          <h4>POS Teminal</h4>
          <p>Send, receive all with easy. With or without the internet. No hassle, no delay</p>
        </div>
      </div>
    </section>
    <section>
      <div>
        <h2>Become a Merchant</h2>
        <p>Getting debited is hard, getting value shouldn&apos;t be.</p>
        <p>
          Our company exists to help merchants sell more.
          We make every decision and measure every
          outcome based on how well it serves our customers.
        </p>
        <button type="button">Become a Merchant</button>
      </div>
    </section>
    <section>
      <div>
        <Image src={AppImages.AEDC} className={styles.image} alt="Logo" preview={false} />
        <Image src={AppImages.EEDC} className={styles.image} alt="Logo" preview={false} />
        <Image src={AppImages.EKEDC} className={styles.image} alt="Logo" preview={false} />
        <Image src={AppImages.IKEJA_LOGO} className={styles.image} alt="Logo" preview={false} />
        <Image src={AppImages.IBEDC} className={styles.image} alt="Logo" preview={false} />
        <Image src={AppImages.JEDC} className={styles.image} alt="Logo" preview={false} />
        <Image src={AppImages.KEDC} className={styles.image} alt="Logo" preview={false} />
        <Image src={AppImages.KEDCO} className={styles.image} alt="Logo" preview={false} />
        <Image src={AppImages.PHEDC} className={styles.image} alt="Logo" preview={false} />
      </div>
    </section>
    <section>
      <h2>Here&apos;s what some users have to say</h2>
      <div>
        <Image src={AppImages.IMAGE_FIVE} className={styles.image} alt="Logo" preview={false} />
        <p>
          &quot;When I started using monievend,
          it has been smooth sailing for all my utility recharges&quot;
        </p>
        <p>Adegbite Saviour</p>
      </div>
      <div>
        <Image src={AppImages.IMAGE_SIX} className={styles.image} alt="Logo" preview={false} />
        <p>
          &quot;It is alway very surprisig when I pay for light and I suddenly get the token.
          Like I usually have to...&quot;
        </p>
        <p>Filomina Ezenwata</p>
      </div>
      <div>
        <Image src={AppImages.IMAGE_SEVEN} className={styles.image} alt="Logo" preview={false} />
        <p>
          &quot;Using this service to get my POS transactions done is really comvenient.
          Almost too convenient&quot;
        </p>
        <p>Austin Babalola</p>
      </div>
      <div>
        <Image src={AppImages.IMAGE_SEVEN} className={styles.image} alt="Logo" preview={false} />
        <p>
          &quot;“This is a good service. There’s really no other way to put it”&quot;
        </p>
        <p>Faridah Salih</p>
      </div>
    </section>
    <footer>
      <h2>Newsletter</h2>
      <p>Sign up for our newsletter to be the first to know about our services</p>
      <form>
        <input type="email" id="email" name="email" />
        <button type="button">Sign-Up</button>
      </form>
      <div>
        <ul>
          <li>Resources</li>
          <li>Prices</li>
          <li>Integrations</li>
          <li>Support</li>
          <li>Merchant Service Policies</li>
        </ul>
        <ul>
          <li>Our Services</li>
          <li>POS Transactions</li>
          <li>Utility Bill Payment</li>
        </ul>
        <ul>
          <li>Pages</li>
          <li>Merchant Page</li>
          <li>Bill Payment</li>
        </ul>
        <ul>
          <li>Developers</li>
          <li>API Documentation</li>
        </ul>
        <ul>
          <li>Contact</li>
          <li>+234 239-334-987</li>
          <li>support@monievend.com</li>
        </ul>
      </div>
      <div>
        <p>@Monievend</p>
        <p>Terms of service</p>
        <p>Privacy policy</p>
        <p>Cookie policy</p>
        <Image src={AppImages.FACEBOOK} className={styles.image} alt="Logo" preview={false} />
        <Image src={AppImages.LINKEDIN} className={styles.image} alt="Logo" preview={false} />
        <Image src={AppImages.TWITTER} className={styles.image} alt="Logo" preview={false} />
      </div>

    </footer>

  </Layout>
);

export default Body;
