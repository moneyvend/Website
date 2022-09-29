import { Route } from 'react-router-dom';
import Banner from '../components/banner/banner';
import Body from '../components/body/body';
import NavBar from '../components/navigation/navBar';
import ComingSoon from '../components/shared/coming-soon/comingSoon';
import NotFound from '../components/shared/not-found/notFound';
import Settings from '../components/settings/settings';

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
          <Route path="products" element={<ComingSoon />} key="products" />,
          <Route path="merchants" element={<ComingSoon />} key="merchants" />,
          <Route path="about" element={<ComingSoon />} key="about" />,
          <Route path="support" element={<ComingSoon />} key="support" />,
          <Route path="*" element={<NotFound />} key="Notfound" />,
          <Route path="settings" element={<Settings />} key="setting" />,
        ]
}
export default MainRoutes;
