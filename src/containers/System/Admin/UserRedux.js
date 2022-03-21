import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { getAllCodeService } from "../../../services/userService";
import { LANGUAGES } from "../../../utils";
class ProductManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
    };
  }

  async componentDidMount() {
    try {
      let res = await getAllCodeService("gender");
      if (res && res.errCode === 0) {
        this.setState({
          genderArr: res.data,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    let genders = this.state.genderArr;
    let language = this.props.language;
    return (
      <div className="container">
        <div className="title"> Manage info User Redux</div>;
        <div className="user-redux-body">
          <div className="container">
            <div className="row">
              <div className="col-12 my-3">
                <FormattedMessage id="manege-user.add" />
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
              <div className="col-3">
                <label>
                  <FormattedMessage id="manege-user.phone-number" />
                </label>
                <input className="form-control" type="text" />
              </div>
              <div className="col-9">
                <label>
                  <FormattedMessage id="manege-user.address" />
                </label>
                <input className="form-control" type="text" />
              </div>
              <div className="col-3">
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
              <div className="col-3 mt-3">
                <label>
                  <FormattedMessage id="manege-user.position" />
                </label>
                <select class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manege-user.role" />
                </label>
                <select class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manege-user.image" />
                </label>
                <input className="form-control" type="text" />
              </div>
              <div className="col-12">
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
