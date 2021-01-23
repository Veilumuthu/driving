import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import DashboardPage from "../components/DashboardPage";
import AddCustomer from "../components/Customer/AddCustomer";
import EditCustomer from "../components/Customer/EditCustomer";
import CustomerList from "../components/Customer/CustomerList";
import AddDirectory from "../components/Directory/AddDirectory";
import EditDirectory from "../components/Directory/EditDirectory";
import Directorylist from "../components/Directory/DirectoryList";
import Header from "../navbar/Navbar";
import "../style/style.css";

export const history = createHistory();
const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/customer" component={AddCustomer} />
                <Route path="/edit/:id" component={EditCustomer} />
                <Route path="/customerList" component={CustomerList} />
                <Route path="/directory" component={AddDirectory} />
                <Route path="/directoryList" component={Directorylist} />
                <Route path="/editDirect/:id" component={EditDirectory} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;