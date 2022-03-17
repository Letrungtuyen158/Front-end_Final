import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import Specialty from "./Section/Specialty";
import "./HomePage.scss";
import MedicalFacility from "./Section/MedicalFacility";
import OutstandingDoctor from "./Section/OutstandingDoctor";
import Hanbook from "./Section/hanbook";
import About from "./Section/about";
import HomeFooter from "./HomeFooter";
class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <Specialty />
        <MedicalFacility />
        <OutstandingDoctor />
        <Hanbook />
        <About />
        <HomeFooter />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
