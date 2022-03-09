import React, { Component } from "react";
import { connect } from "react-redux";
import "./MedicalFacility.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MedicalFacility extends Component {
  render() {
    let settings = {
      dots: false,
      Infinity: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
    };
    return (
      <div className="section-MedicalFacility">
        <div className="MedicalFacility-container">
          <div className="MedicalFacility-header">
            <span className="title-section">Cơ sở y tế nổi bật</span>
            <span className="btn-section">Tìm kiếm</span>
          </div>
          <div className="MedicalFacility-body">
            <Slider {...settings}>
              <div className="MedicalFacility-customize">
                <div className="bg-image" />
                <h4>Bệnh viện đà nẵng</h4>
              </div>
              <div className="MedicalFacility-customize">
                <div className="bg-image" />
                <h4>Bệnh viên hữu nghị việt đức</h4>
              </div>
              <div className="MedicalFacility-customize">
                <div className="bg-image" />
                <h4>Bệnh viện FPT</h4>
              </div>
              <div className="MedicalFacility-customize">
                <div className="bg-image" />
                <h4>Bệnh viện y học dược1</h4>
              </div>
              <div className="MedicalFacility-customize">
                <div className="bg-image" />
                <h4>Bệnh viện U bướu</h4>
              </div>
              <div className="MedicalFacility-customize">
                <div className="bg-image" />
                <h4>Bệnh viện sản nhi</h4>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
