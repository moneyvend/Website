import { Typography } from 'antd';
import { Route } from 'react-router-dom';
import Banner from '../components/banner/banner';
import Body from '../components/body/body';
import NavBar from '../components/navigation/navBar';

class MainRoutes {
    static routes =
     [   <Route element={
                            <>
                                <NavBar />
                                <Banner />
                                <Body />
                            </>
        } path="/" />,
        <Route path="products" element={<Typography>Products Page</Typography>} />,
        <Route path="merchants" element={<Typography>Merchants Page</Typography>} />,
        <Route path="about" element={<Typography>About us Page</Typography>} />,
        <Route path="support" element={<Typography>support Page</Typography>} />,
    ]
}
export default MainRoutes;
