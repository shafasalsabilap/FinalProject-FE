import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
import { useAppSelector } from "../data/hooks";
import CreatePlaylist from "../pages/CreatePlaylist";
import Home from "../pages/Home";
import MenuNav from "../components/Navbar";
import Logout from "../pages/logout";
import AboutUs from "../pages/aboutus";
import Profile from "../pages/Profile";
const AppRouter = () => {
    const accessToken = useAppSelector((state: any) => state.accessToken.value);
    return (
        < Router >
        <MenuNav />
        <div className="pages">
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/create-playlist">
                    {accessToken !== undefined ? <CreatePlaylist /> : <Redirect to="/" />}
                </Route>
                <Route path="/Profile" component={Profile} />
                <Route path="/AboutUs" component={AboutUs} />
                <Route path="/Logout" component={Logout} />
            </Switch>
        </div>
        </Router >
    )
}

export default AppRouter;