import React, { Component } from "react";
import { connect } from "react-redux";
import "./hanbook.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Hanbook extends Component {
  render() {
    let settings = {
      dots: false,
      Infinity: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
    };
    return (
      <div className="section-Hanbook">
        <div className="Hanbook-container">
          <div className="Hanbook-header">
            <span className="title-section">Cẩm nang</span>
            <span className="btn-section">Tìm kiếm</span>
          </div>
          <div className="Hanbook-body">
            <Slider {...settings}>
              <div className="Hanbook-customize">
                <div className="bg-image" />
                <div>Bệnh viện đà nẵng</div>
              </div>
              <div className="Hanbook-customize">
                <div className="bg-image" />
                <div>Bệnh viên hữu nghị việt đức</div>
              </div>
              <div className="Hanbook-customize">
                <div className="bg-image" />
                <div>Bệnh viện FPT</div>
              </div>
              <div className="Hanbook-customize">
                <div className="bg-image" />
                <div>Bệnh viện y học dược1</div>
              </div>
              <div className="Hanbook-customize">
                <div className="bg-image" />
                <div>Bệnh viện U bướu</div>
              </div>
              <div className="Hanbook-customize">
                <div className="bg-image" />
                <div>Bệnh viện sản nhi</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Hanbook);
