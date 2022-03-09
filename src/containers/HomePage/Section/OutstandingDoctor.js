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
                <div>Bệnh viện đà nẵng</div>
                <div>Cơ xương khớp</div>
              </div>
              <div className="OutstandingDoctor-customize">
                <div className="bg-image" />
                <div>Bệnh viên hữu nghị việt đức</div>
                <div>Da liễu</div>
              </div>
              <div className="OutstandingDoctor-customize">
                <div className="bg-image" />
                <div>Bệnh viện FPT</div>
                <div>Sức khỏe tâm thần</div>
              </div>
              <div className="OutstandingDoctor-customize">
                <div className="bg-image" />
                <div>Bệnh viện y học dược1</div>
                <div>Thần kinh</div>
              </div>
              <div className="OutstandingDoctor-customize">
                <div className="bg-image" />
                <div>Bệnh viện U bướu</div>
                <div>Khoa sản phụ</div>
              </div>
              <div className="OutstandingDoctor-customize">
                <div className="bg-image" />
                <div></div>
                <h3>Bệnh viện sản nhi</h3>
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
