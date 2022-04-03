import React, { Component } from "react";
import { connect } from "react-redux";
import "./OutstandingDoctor.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as actions from "../../../store/actions";
import { LANGUAGES } from "../../../utils";

class OutstandingDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrDoctors: [],
    };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.topDoctorRedux !== this.props.topDoctorRedux) {
      this.setState({
        arrDoctors: this.props.topDoctorRedux,
      });
    }
  }
  componentDidMount() {
    this.props.loadTopDoctors();
  }
  render() {
    let settings = {
      dots: false,
      Infinity: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
    };

    let allDoctor = this.state.arrDoctors;
    let allDoctors = allDoctor.concat(allDoctor);
    let { language } = this.props;

    return (
      <div className="section-OutstandingDoctor">
        <div className="OutstandingDoctor-container">
          <div className="OutstandingDoctor-header">
            <span className="title-section">Bác sĩ nổi bật tuần qua</span>
            <span className="btn-section">Tìm kiếm</span>
          </div>
          <div className="OutstandingDoctor-body">
            <Slider {...settings}>
              {allDoctors &&
                allDoctors.length > 0 &&
                allDoctors.map((item, index) => {
                  let imageBase64 = "";
                  if (item.image) {
                    imageBase64 = new Buffer(item.image, "base64").toString(
                      "binary"
                    );
                  }
                  let nameVi = `${item.positionData.valueVi}: ${item.firstName} ${item.lastName}`;
                  let nameEn = `${item.positionData.valueEn}: ${item.firstName} ${item.lastName}`;

                  return (
                    <div className="OutstandingDoctor-customize" key={index}>
                      <div
                        className="bg-image"
                        style={{
                          backgroundImage: `url(${imageBase64})`,
                        }}
                      />
                      <div className="">
                        <h4>{language === LANGUAGES.VI ? nameVi : nameEn}</h4>
                        <p>Cơ xương khớp</p>
                      </div>
                    </div>
                  );
                })}
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
    topDoctorRedux: state.admin.topDoctors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTopDoctors: () => dispatch(actions.fectchTopDoctor()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
