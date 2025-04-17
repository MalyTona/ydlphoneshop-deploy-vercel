import React, { Component, Fragment } from "react";
import { Router, Route, Switch } from "react-router";
import HomePage from "../pages/HomePage";
import UserLoginPage from "../pages/UserLoginPage";
import ContactPage from "../pages/ContactPage";
import PurchasePage from "../pages/PurchasePage";
import ReturnPage from "../pages/ReturnPolicyPage";
import AboutUsPage from "../pages/AboutUsPage";
import ServicePage from "../pages/ServicePage";
import ShippingInfoPage from "../pages/ShippingInfoPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import NotificationPage from "../pages/NotificationPage";
import FavouritePage from "../pages/FavouritePage";
import CartPage from "../pages/CartPage";
class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={UserLoginPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/purchase" component={PurchasePage} />
          <Route exact path="/returnpolicy" component={ReturnPage} />
          <Route exact path="/aboutus" component={AboutUsPage} />
          <Route exact path="/service" component={ServicePage} />
          <Route exact path="/shipping" component={ShippingInfoPage} />
          <Route exact path="/privacy" component={PrivacyPage} />
          <Route exact path="/productdetials" component={ProductDetailsPage} />
          <Route exact path="/notification" component={NotificationPage} />
          <Route exact path="/favourite" component={FavouritePage} />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default AppRoute;
