import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Login.scss";
class Login extends Component {
  constructor(props) {
    super(props);
      this.state ={
          username : "",
          password : "",
          isShowPassword: false,
      }
  }
  handleOnchangeUserName = (e) =>{
              this.setState({
                  username : e.target.value
              })
              
  }
  handleOnchangePassword = (e) =>{
              this.setState({
                password : e.target.value
              })
              
  }
  handleOnSubmit = ()=>{
      
       console.log(this.state)
  }

  HandlerShowHidepassword = () => {
    this.setState({ isShowPassword: !this.state.isShowPassword });
  };

  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12  text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your usename"
                value ={this.state.username}
                onChange={(event)=>{this.handleOnchangeUserName(event)}}
              />
            </div>
            <div className="col-12 form-group login-input">
              <label>password:</label>

              <div>
                <input
                  
                  className="form-control"
                  placeholder="Enter your password"
                  type={this.state.isShowPassword?"text":"password"}
                  value ={this.state.password}
                  onChange={(event)=>{this.handleOnchangePassword(event)}}
                />
               <span
                  onClick={() => {
                    this.HandlerShowHidepassword();
                  }}
                >
                  <i
                    class={
                      this.state.isShowPassword
                        ? "far fa-eye"
                        : "far fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12" style={{ color: "red" }}>
             
            </div>
            <div className="col-12">
              <button class="btn-login" onClick={()=>{this.handleOnSubmit()}}>
                Login
              </button>
            </div>
            <div className="col-12">
              <span className="forgot-password">Forgot your password?</span>
            </div>
            <div className="col-12 text-center">
              <span className="text-other-login">Or sign in with:</span>
            </div>
            <div className="col-12 social-login">
              <i className="fab fa-google-plus-g google"></i>
              <i className="fab fa-facebook-f facebook"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//ReDux
const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
