import { Typography } from 'antd';
import { Route } from 'react-router-dom';
import Banner from '../components/banner/banner';
import Body from '../components/body/body';
import NavBar from '../components/navigation/navBar';
import ComingSoon from '../components/shared/coming-soon/comingSoon';
import NotFound from '../components/shared/not-found/notFound';

class MainRoutes {
    static routes =
     [   <Route element={
                            <>
                                <NavBar />
                                <Banner />
                                <Body />
                            </>
        } path="/" />,
        <Route path="products" element={<ComingSoon/>} />,
        <Route path="merchants" element={<ComingSoon/>} />,
        <Route path="about" element={<ComingSoon/>} />,
        <Route path="support" element={<ComingSoon/>} />,
        <Route path="*" element={<NotFound/>} />,
    ]
}
export default MainRoutes;
