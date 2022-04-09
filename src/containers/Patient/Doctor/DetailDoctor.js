import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "../../HomePage/HomeHeader";
import "./DetailDoctor.scss";
import { getDetailInforDoctor } from "../../../services/userService";
import DoctorSchedule from "./DoctorSchedule";
import { convertTypeAcquisitionFromJson } from "typescript";
class DetaiDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailDoctor: {},
      currentDoctorId: -1,
    };
  }

  async componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let id = this.props.match.params.id;
      let res = await getDetailInforDoctor(id);
      if (res && res.errCode === 0) {
        this.setState({
          currentDoctorId: id,
        });
        let res = await getDetailInforDoctor(id);
        if (res && res.errCode === 0) {
          this.setState({
            detailDoctor: res.data,
          });
        }
      }
    }
  }

  componentDidUpdate(prevProps, preState, snapshot) {}
  render() {
    let { detailDoctor } = this.state;

    return (
      <>
        <div>
          <HomeHeader isShowBaner={false} />
        </div>
        <div className="doctor-detail-container">
          <div className="intro-doctor">
            <div
              className="content-left"
              style={{
                backgroundImage: `url(${
                  detailDoctor && detailDoctor.image ? detailDoctor.image : ""
                })`,
              }}
            ></div>
            <div className="content-right">
              <div className="up">
                {detailDoctor?.positionData?.valueVi} : {detailDoctor.lastName}
                {detailDoctor.firstName}
              </div>
              <div className="down">
                {detailDoctor &&
                  detailDoctor.Markdown &&
                  detailDoctor.Markdown.description && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: detailDoctor.Markdown.description,
                      }}
                    ></div>
                  )}
              </div>
            </div>
          </div>
          <div className="schedule-doctor">
            <div className="content-left">
              <DoctorSchedule doctorIdFromParent={this.state.currentDoctorId} />
            </div>
          </div>
          <div className="detail-infor-doctor">
            {detailDoctor &&
              detailDoctor.Markdown &&
              detailDoctor.Markdown.contentHTML && (
                <div>{detailDoctor.Markdown.contentHTML}</div>
              )}
          </div>
          <div className="comment-doctor"></div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetaiDoctor);
