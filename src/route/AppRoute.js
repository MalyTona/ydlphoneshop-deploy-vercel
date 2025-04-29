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
import ProductCategoryPage from "../pages/ProductCategoryPage";
import ProductSubCategoryPage from "../pages/ProductSubCategoryPage";
class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <HomePage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/login"
            render={(props) => <UserLoginPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/contact"
            render={(props) => <ContactPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/purchase"
            render={(props) => <PurchasePage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/returnpolicy"
            render={(props) => <ReturnPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/aboutus"
            render={(props) => <AboutUsPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/service"
            render={(props) => <ServicePage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/shipping"
            render={(props) => <ShippingInfoPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/privacy"
            render={(props) => <PrivacyPage {...props} key={Date.now()} />}
          />

          <Route
            exact
            path="/productdetails/:code"
            render={(props) => (
              <ProductDetailsPage {...props} key={Date.now()} />
            )}
          />
          <Route
            exact
            path="/notification"
            render={(props) => <NotificationPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/favourite"
            render={(props) => <FavouritePage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/cart"
            render={(props) => <CartPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/productcategory/:category"
            render={(props) => (
              <ProductCategoryPage {...props} key={Date.now()} />
            )}
          />
          <Route
            exact
            path="/productsubcategory/:category/:subcategory"
            render={(props) => (
              <ProductSubCategoryPage {...props} key={Date.now()} />
            )}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default AppRoute;
