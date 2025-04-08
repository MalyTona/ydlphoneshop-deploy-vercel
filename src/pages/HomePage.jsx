// import React, { Component, Fragment } from "react";
// import NavMenuDesktop from "../components/common/NavMenuDesktop";
// import NavMenuMobile from "../components/common/NavMenuMobile";
// import Categories from "../components/home/Categories";
// import Collection from "../components/home/Collection";
// import FeaturedProducts from "../components/home/FeaturedProducts";
// import HomeTop from "../components/home/HomeTop";
// import HomeTopMobile from "../components/home/HomeTopMobile";
// import NewArrival from "../components/home/NewArrival";
// import FooterDesktop from "../components/common/FooterDesktop";
// import FooterMobile from "../components/common/FooterMobile";
// export class HomePage extends Component {
//   componentDidMount() {
//     window.scroll(0, 0);
//   }
//   render() {
//     return (
//       <Fragment>
//         <div className="Desktop">
//           <NavMenuDesktop />
//           <HomeTop />
//         </div>

//         <div className="Mobile">
//           <NavMenuMobile />
//           <HomeTopMobile />
//         </div>

//         <FeaturedProducts />
//         <NewArrival />
//         <Categories />
//         <Collection />

//         <div className="Desktop">
//           <FooterDesktop />
//         </div>

//         <div className="Mobile">
//           <FooterMobile />
//         </div>
//       </Fragment>
//     );
//   }
// }

// export default HomePage;

//test with back to-top component
import React, { Component, Fragment } from "react";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import HomeTop from "../components/home/HomeTop";
import HomeTopMobile from "../components/home/HomeTopMobile";
import NewArrival from "../components/home/NewArrival";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showScrollButton: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 300) {
      this.setState({ showScrollButton: true });
    } else {
      this.setState({ showScrollButton: false });
    }
  };

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
          <HomeTop />
        </div>

        <div className="Mobile">
          <NavMenuMobile />
          <HomeTopMobile />
        </div>

        <FeaturedProducts />
        <NewArrival />
        <Categories />
        <Collection />

        <div className="Desktop">
          <FooterDesktop />
        </div>

        <div className="Mobile">
          <FooterMobile />
        </div>

        {/* Back to Top Button */}
        {this.state.showScrollButton && (
          <button className="back-to-top" onClick={this.scrollToTop}>
            <i className="fa fa-angle-double-up"></i>
          </button>
        )}
      </Fragment>
    );
  }
}

export default HomePage;
