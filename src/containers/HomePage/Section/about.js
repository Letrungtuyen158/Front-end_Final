import React, { Component } from "react";
import { connect } from "react-redux";

class About extends Component {
  render() {
    return (
      <div className="section-About">
        <div className="about-left">
          <h1>Truyền thông nói về BookingCare</h1>
          <iframe
            width="570"
            height="321"
            src="https://www.youtube.com/embed/FyDQljKtWnI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="about-right ">
          <div className="about-right_1"></div>
          <div className="about-right_2">
            <p>
              Đây là đồ án năm cuối của tối tại trường đại học greenwich đà nẵng
              tôi làm ứng dụng này với mong muốn mang đến trải nghiêm tốt hơn
              cho người ở việt nam khi muốn đi khám bệnh mà phải xếp hàng hay
              đợi cũng như trong tình hình dịch bệnh phát triển nặng nề làm số
              lượng người dân tới bệnh viện một lúc tăng cao tôi muốn làm ứng
              dụng để hạn chế tối đa việc người dân đến bệnh viện cùng một lúc
            </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
