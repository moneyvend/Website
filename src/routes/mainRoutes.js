/* eslint-disable react/jsx-indent */
import { Route } from 'react-router-dom';
import Banner from '../components/banner/banner';
import Body from '../components/body/body';
import NavBar from '../components/navigation/navBar';
import ComingSoon from '../components/shared/coming-soon/comingSoon';
import NotFound from '../components/shared/not-found/notFound';
import Settings from '../components/settings/settings';
import About from '../components/about-us/about';
import ProductPage from '../components/product-page/product-page';

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
    <Route path="merchants" element={<ComingSoon />} key="merchants" />,
    <Route path="about" element={<About />} key="about" />,
    <Route path="support" element={<ComingSoon />} key="support" />,
    <Route path="*" element={<NotFound />} key="Notfound" />,
    <Route path="settings" element={<Settings />} key="setting" />,
    ]
}
export default MainRoutes;
