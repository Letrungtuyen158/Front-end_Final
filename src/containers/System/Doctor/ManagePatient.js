import React, { Component } from "react";
import { connect } from "react-redux";
import "./ManagePatient.scss";
import { FormattedMessage } from "react-intl";
import DatePicker from "../../../components/Input/DatePicker";
import { getAllPatientForDoctor } from "../../../services/userService";
import moment from "moment";

class ManagePatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(new Date()).startOf("day").valueOf(),
      dataPatient: [],
    };
  }
  async componentDidMount() {
    let { user } = this.props;
    console.log(user.id, "user");
    let { currentDate } = this.state;
    let formatedDate = new Date(currentDate).getTime();
    console.log(formatedDate, "date");
    this.getDataPatient(user, formatedDate);
  }

  getDataPatient = async (user, formatedDate) => {
    let res = await getAllPatientForDoctor({
      doctorId: user.id,
    });
    console.log(res, "res");
    if (res && res.errCode === 0) {
      this.setState({
        dataPatient: res.data,
      });
    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
    }
  }

  handleOnchangeDatePicker = (date) => {
    this.setState(
      {
        currentDate: date[0],
      },
      () => {
        let { user } = this.props;
        let { currentDate } = this.state;
        let formatedDate = new Date(currentDate).getTime();
        this.getDataPatient(user, formatedDate);
      }
    );
  };
  handleBtnConfirm = () => {};
  handleBtnRemedy = () => {};

  render() {
    let { dataPatient } = this.state;
    console.log(dataPatient, "dataa");
    return (
      <>
        <div className="manage-patient-container">
          <div className="m-p-title">Quan ly benh nhan kham benh</div>
          <div className="manage-patient-body row">
            <div className="col-4 form-group">
              <label>Chon ngay kham</label>
              <DatePicker
                onChange={this.handleOnchangeDatePicker}
                className="form-control"
                value={this.state.currentDate}
              />
            </div>
            <div className="col-12 table-manage-patient">
              <table style={{ width: "100%" }}>
                <tr>
                  <th>STT</th>
                  <th>Thoi Gian</th>
                  <th>Ho va Ten</th>
                  <th>Dia chi</th>
                  <th>Gioi Tinh</th>
                  <th>Actions</th>
                </tr>
                {dataPatient && dataPatient.length > 0 ? (
                  dataPatient.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.timeTypeDataPatient.valueVi}</td>
                        <td>{item.patientData.firstName}</td>
                        <td>{item.patientData.address}</td>
                        <td>{item.patientData.genderData.valueVi}</td>
                        <td>
                          <button
                            className="mp-btn-confirm"
                            onClick={() => this.handleBtnConfirm()}
                          >
                            Xac nhan
                          </button>
                          <button
                            className="mp-btn-remedy"
                            onClick={() => this.handleBtnRemedy()}
                          >
                            Gui Hoa don
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>No data</tr>
                )}
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    user: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);
