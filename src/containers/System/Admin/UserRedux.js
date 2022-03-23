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
    };
  }

  async componentDidMount() {
    this.props.getGenderStart();
    this.props.getPositionStart();
    this.props.getRoleStart();
  }
  componentDidUpdate(prevProps, prevState, snapsbot) {
    if (prevProps.genderRedux !== this.props.genderRedux) {
      this.setState({
        genderArr: this.props.genderRedux,
      });
    }
    if (prevProps.roleRedux !== this.props.roleRedux) {
      this.setState({
        roleArr: this.props.genderRedux,
      });
    }
    if (prevProps.positionRedux !== this.props.positionRedux) {
      this.setState({
        positionArr: this.props.positionRedux,
      });
    }
  }
  handleOnChangeImage = (event) => {
    let data = event.target.files[0];
    if (data) {
      let objectURL = URL.createObjectURL(data);
      this.setState({
        previewImage: objectURL,
      });
    }
  };

  render() {
    let genders = this.state.genderArr;
    let position = this.state.positionArr;
    let roles = this.state.roleArr;
    let language = this.props.language;
    let isLoadingGender = this.props.isLoadingGender;

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
                <input className="form-control" type="emmail" />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manege-user.password" />
                </label>
                <input className="form-control" type="password" />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manege-user.first-name" />
                </label>
                <input className="form-control" type="text" />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manege-user.last-name" />
                </label>
                <input className="form-control" type="text" />
              </div>
              <div className="col-3 mt-5">
                <label>
                  <FormattedMessage id="manege-user.phone-number" />
                </label>
                <input className="form-control" type="text" />
              </div>
              <div className="col-9 mt-5">
                <label>
                  <FormattedMessage id="manege-user.address" />
                </label>
                <input className="form-control" type="text" />
              </div>
              <div className="col-3 mt-5">
                <label>
                  <FormattedMessage id="manege-user.gender" />
                </label>
                <select class="form-control">
                  {genders &&
                    genders.length > 0 &&
                    genders.map((items, index) => {
                      return (
                        <option key={index}>
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
                <select class="form-control">
                  {position &&
                    position.length > 0 &&
                    position.map((items, index) => {
                      return (
                        <option key={index}>
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
                <select class="form-control">
                  {roles &&
                    roles.length > 0 &&
                    roles.map((items, index) => {
                      return (
                        <option key={index}>
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
              <div className="col-12 mt-5">
                <button className="btn btn-primary">
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
