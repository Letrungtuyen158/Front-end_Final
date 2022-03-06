import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
class HomeHeader extends Component {
  render() {
    return (
      <>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>Chuyên khoa</b>
                </div>
                <div className="sub-title">Tìm bác sĩ theo chuyên khoa</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Cơ sở y tế</b>
                </div>
                <div className="sub-title">Chọn bệnh viện phòng khám</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Bác sĩ</b>
                </div>
                <div className="sub-title">Chọn bác sĩ giỏi</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Gói khám</b>
                </div>
                <div className="sub-title">Khám sức khỏe tổng quát</div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                {" "}
                <i className="fas fa-question-circle">Hỗ trợ</i>
              </div>
              <div className="langguage-vi active">VN</div>
              <div className="langguage-en active">EN</div>
            </div>
          </div>
        </div>
        ;
        <div className="home-header-banner">
          <div className="content-up">
            {" "}
            <div className="title-1">NỀN TẢNG Y TẾ</div>
            <div className="title-2">CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
            <div className="search">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
            </div>
          </div>
          <div className="content-down">
            <div className="options">
              <div className="options-child">
                <div className="icon-child">
                  <i className="fas fa-hospital"></i>
                </div>
                <div className="text-child">Khám chuyên khoa</div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i className="fas fa-hospital"></i>
                </div>
                <div className="text-child">Khám từ xa</div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i className="fas fa-hospital"></i>
                </div>
                <div className="text-child">Khám tổng quát</div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="text-child">Xét nghiệm y học</div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i className="fas fa-procedures"></i>
                </div>
                <div className="text-child">Sức khỏe tinh thần</div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i className="fas fa-flask"></i>
                </div>
                <div className="text-child">Khám nha khoa</div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i className="fas fa-user-md"></i>
                </div>
                <div className="text-child">Gói phẩu thuật</div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i className="fas fa-briefcase-medical"></i>
                </div>
                <div className="text-child">Sản phẩm y tế</div>
              </div>
            </div>
          </div>
        </div>
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
