import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../../utils";
import * as actions from "../../../store/actions";
import "./UserRedux.scss";
class ProductManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewImage: "",
      genderArr: [],
      positionArr: [],
      roleArr: [],

      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      gender: "",
      position: "",
      role: "",
      avatar: "",
    };
  }

  async componentDidMount() {
    this.props.getGenderStart();
    this.props.getPositionStart();
    this.props.getRoleStart();
  }
  componentDidUpdate(prevProps, prevState, snapsbot) {
    if (prevProps.genderRedux !== this.props.genderRedux) {
      let arrGenders = this.props.genderRedux;
      this.setState({
        genderArr: arrGenders,
        gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : "",
      });
    }
    if (prevProps.roleRedux !== this.props.roleRedux) {
      let arrRoles = this.props.roleRedux;
      this.setState({
        roleArr: arrRoles,
        role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : "",
      });
    }
    if (prevProps.positionRedux !== this.props.positionRedux) {
      let arrPositions = this.props.positionRedux;
      this.setState({
        positionArr: this.props.positionRedux,
        positions:
          arrPositions && arrPositions.length > 0 ? arrPositions[0].key : "",
      });
    }
  }
  handleOnChangeImage = (event) => {
    let data = event.target.files[0];
    if (data) {
      let objectURL = URL.createObjectURL(data);
      this.setState({
        previewImage: objectURL,
        avatar: data,
      });
    }
  };
  handleSaveUser = () => {
    console.log(this.state, "check state");
    let isValid = this.checkValidateInput();
    if (isValid === false) return;
    //fire redux action
    this.props.createNewUser({
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      phonenumber: this.state.phoneNumber,
      gender: this.state.gender,
      roleId: this.state.role,
      positionId: this.state.position,
    });
  };
  checkValidateInput = () => {
    let isValid = true;
    let arrCheck = [
      "email",
      "password",
      "firstName",
      "lastName",
      "phoneNumber",
      "address",
    ];
    for (let i = 0; i < arrCheck.length; i++) {
      if (!this.state[arrCheck[i]]) {
        isValid = false;
        alert("miss input ," + arrCheck[i]);
        break;
      }
    }
    return isValid;
  };
  onChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };
  render() {
    let genders = this.state.genderArr;
    let positions = this.state.positionArr;
    let roles = this.state.roleArr;
    let language = this.props.language;
    let isLoadingGender = this.props.isLoadingGender;
    console.log(roles);
    let {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      address,
      gender,
      position,
      role,
      avatar,
    } = this.state;

    console.log(this.state, "ss");
    return (
      <div className="container">
        <div className="title"> Manage info User Redux</div>;
        <div className="user-redux-body">
          <div className="container">
            <div className="row">
              <div className="col-12 my-3">
                <FormattedMessage id="manege-user.add" />
              </div>
              <div className="col-12 ">
                {isLoadingGender === true ? "...loading" : ""}
              </div>
              <div className="col-3 ">
                <label>
                  <FormattedMessage id="manege-user.email" />
                </label>
                <input
                  className="form-control"
                  type="emmail"
                  value={email}
                  onChange={(event) => {
                    this.onChangeInput(event, "email");
                  }}
                />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manege-user.password" />
                </label>
                <input
                  className="form-control"
                  type="password"
                  value={password}
                  onChange={(event) => {
                    this.onChangeInput(event, "password");
                  }}
                />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manege-user.first-name" />
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={firstName}
                  onChange={(event) => {
                    this.onChangeInput(event, "firstName");
                  }}
                />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manege-user.last-name" />
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={lastName}
                  onChange={(event) => {
                    this.onChangeInput(event, "lastName");
                  }}
                />
              </div>
              <div className="col-3 mt-5">
                <label>
                  <FormattedMessage id="manege-user.phone-number" />
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={phoneNumber}
                  onChange={(event) => {
                    this.onChangeInput(event, "phoneNumber");
                  }}
                />
              </div>
              <div className="col-9 mt-5">
                <label>
                  <FormattedMessage id="manege-user.address" />
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={address}
                  onChange={(event) => {
                    this.onChangeInput(event, "address");
                  }}
                />
              </div>
              <div className="col-3 mt-5">
                <label>
                  <FormattedMessage id="manege-user.gender" />
                </label>
                <select
                  class="form-control"
                  onChange={(event) => {
                    this.onChangeInput(event, "gender");
                  }}
                >
                  {genders &&
                    genders.length > 0 &&
                    genders.map((items, index) => {
                      return (
                        <option key={index} value={items.key}>
                          {language === LANGUAGES.VI
                            ? items.valueVi
                            : items.valueEn}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="col-3 mt-5 ">
                <label>
                  <FormattedMessage id="manege-user.position" />
                </label>
                <select
                  class="form-control"
                  onChange={(event) => {
                    this.onChangeInput(event, "position");
                  }}
                >
                  {positions &&
                    positions.length > 0 &&
                    positions.map((items, index) => {
                      return (
                        <option key={index} value={items.key}>
                          {language === LANGUAGES.VI
                            ? items.valueVi
                            : items.valueEn}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="col-3 mt-5">
                <label>
                  <FormattedMessage id="manege-user.role" />
                </label>
                <select
                  class="form-control"
                  onChange={(event) => {
                    this.onChangeInput(event, "role");
                  }}
                >
                  {roles &&
                    roles.length > 0 &&
                    roles.map((items, index) => {
                      return (
                        <option key={index} value={items.key}>
                          {language === LANGUAGES.VI
                            ? items.valueVi
                            : items.valueEn}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="col-3 mt-5">
                <label>
                  <FormattedMessage id="manege-user.image" />
                </label>
                <div className="preview-img-container">
                  <input
                    id="previewImg"
                    type="file"
                    hidden
                    onChange={(event) => this.handleOnChangeImage(event)}
                  />
                  <label className="lable-update" htmlFor="previewImg">
                    Tải ảnh<i className="fas fa-upload"></i>
                  </label>
                  <div
                    className="preview-image"
                    style={{
                      backgroundImage: `url(${this.state.previewImage})`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-12  ">
                <button
                  className="btn btn-primary"
                  onClick={() => this.handleSaveUser()}
                >
                  <FormattedMessage id="manege-user.save" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderRedux: state.admin.genders,
    isLoadingGender: state.admin.isLoadingGender,
    positionRedux: state.admin.position,
    roleRedux: state.admin.roles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    getPositionStart: () => dispatch(actions.fetchPositionStart()),
    getRoleStart: () => dispatch(actions.fetchRoleStart()),
    createNewUser: (data) => dispatch(actions.createNewUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
