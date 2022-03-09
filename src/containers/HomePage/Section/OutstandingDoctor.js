import React, { Component } from "react";
import { connect } from "react-redux";
import "./OutstandingDoctor.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class OutstandingDoctor extends Component {
  render() {
    let settings = {
      dots: false,
      Infinity: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
    };
    return (
      <div className="section-OutstandingDoctor">
        <div className="OutstandingDoctor-container">
          <div className="OutstandingDoctor-header">
            <span className="title-section">Bác sĩ nổi bật tuần qua</span>
            <span className="btn-section">Tìm kiếm</span>
          </div>
          <div className="OutstandingDoctor-body">
            <Slider {...settings}>
              <div className="OutstandingDoctor-customize">
                <div className="bg-image" />
                <div className="">
                  <h4>Bệnh viện đà nẵng</h4>
                  <p>Cơ xương khớp</p>
                </div>
              </div>
              <div className="OutstandingDoctor-customize">
                <div className="bg-image" />
                <h4>Bệnh viên hữu nghị việt đức</h4>
                <p>Da liễu</p>
              </div>
              <div className="OutstandingDoctor-customize">
                <div className="bg-image" />
                <h4>Bệnh viện FPT</h4>
                <p>Sức khỏe tâm thần</p>
              </div>
              <div className="OutstandingDoctor-customize">
                <div className="bg-image" />
                <h4>Bệnh viện y học dược1</h4>
                <p>Thần kinh</p>
              </div>
              <div className="OutstandingDoctor-customize">
                <div className="bg-image" />
                <h4>Bệnh viện U bướu</h4>
                <p>Khoa sản phụ</p>
              </div>
              <div className="OutstandingDoctor-customize">
                <div className="bg-image" />
                <div></div>
                <h4>Bệnh viện sản nhi</h4>
                <p>Khoa mắt</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
