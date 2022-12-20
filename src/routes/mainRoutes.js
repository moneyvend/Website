/* eslint-disable react/jsx-indent */
import { Route } from 'react-router-dom';
import Banner from '../components/open-pages/banner/banner';
import Body from '../components/open-pages/body/body';
import NavBar from '../components/open-pages/navigation/navBar';
// import ComingSoon from '../components/shared/coming-soon/comingSoon';
import NotFound from '../components/common/not-found/notFound';
import About from '../components/open-pages/about-us/about';
import ProductPage from '../components/open-pages/product-page/product-page';
import MerchantsPage from '../components/open-pages/merchants-page/merchants-page';
import SupportPage from '../components/open-pages/support-page/support-page';

class MainRoutes {
  static routes =
    [<Route
      element={(
        <>
          <NavBar />
          <Banner />
          <Body />
        </>
      )}
      path="/"
      key="indexpage"
    />,
    <Route path="products" element={<ProductPage />} key="products" />,
    <Route path="merchants" element={<MerchantsPage />} key="merchants" />,
    <Route path="about" element={<About />} key="about" />,
    <Route path="support" element={<SupportPage />} key="support" />,
    <Route path="*" element={<NotFound />} key="Notfound" />,
      // <Route path="settings" element={<Settings />} key="setting" />,
    ]
}
export default MainRoutes;
