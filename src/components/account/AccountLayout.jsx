// react
import React from 'react';

// third-party
import classNames from 'classnames';
import {
    Link,
    matchPath,
    Redirect,
    Switch,
    Route,
} from 'react-router-dom';

// application
import PageHeader from '../shared/PageHeader';
import "../../css/style.css"
import "bootstrap/dist/css/bootstrap.min.css";



// pages
import AccountPageAddresses from './AccountPageAddresses';
import AccountPageDashboard from './AccountPageDashboard';
import AccountPageOrders from './AccountPageOrders';
import AccountPagePassword from './AccountPagePassword';
import AccountPageProfile from './AccountPageProfile';
import LoginRegister from "./LoginRegister";
import NewAddress from "./NewAddress";
import EditAddress from "./EditAddress";
import ResetPassword from "./ResetPassword";


export default function AccountLayout(props) {
    const { match, location } = props;

    const breadcrumb = [
        { title: 'Home', url: '' },
        { title: 'My Account', url: '' },
    ];

    const links = [
        { title: 'Dashboard', url: 'dashboard' },
        { title: 'Edit Profile', url: 'profile' },
        { title: 'Order History', url: 'orders' },
        { title: 'Addresses', url: 'addresses' },
        { title: 'Password', url: 'password' },
        { title: 'Logout', url: 'acc' },
        { title: 'ResetPassword', url: 'reset-password' },

    ].map((link) => {
        const url = `${match.url}/${link.url}`;
        const isActive = matchPath(location.pathname, { path: url });
        const classes = classNames('account-nav__item', {
            'account-nav__item--active': isActive,
        });

        return (
            <li key={link.url} className={classes}>
                <Link to={url}>{link.title}</Link>
            </li>
        );
    });

    return (
        <React.Fragment>
            <PageHeader header="My Account" breadcrumb={breadcrumb} />

            <div className="block">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-3 d-flex">
                            <div className="account-nav flex-grow-1">
                                <h4 className="account-nav__title">Navigation</h4>
                                <ul>{links}</ul>
                            </div>
                        </div>

                        <div className="col-12 col-lg-1 d-flex"> </div>

                        <div className="col-12 col-lg-8 mt-4 mt-lg-0">
                            <Switch>
                                <Redirect exact from={match.path} to={`${match.path}/dashboard`} />
                                <Route exact path={`${match.path}/dashboard`} component={AccountPageDashboard} />
                                <Route exact path={`${match.path}/profile`} component={AccountPageProfile} />
                                <Route exact path={`${match.path}/orders`} component={AccountPageOrders} />
                                <Route exact path={`${match.path}/addresses`} component={AccountPageAddresses} />
                                <Route exact path={`${match.path}/password`} component={AccountPagePassword} />
                                <Route exact path={`${match.path}/acc`} component={LoginRegister} />
                                <Route exact path={`${match.path}/new-address`} component={NewAddress} />
                                <Route exact path={`${match.path}/edit-address`} component={EditAddress} />
                                <Route exact path={`${match.path}/reset-password`} component={ResetPassword} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
