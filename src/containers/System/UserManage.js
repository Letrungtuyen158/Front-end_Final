import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUsers } from "../../services/userService";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: []
    };
  }

  async componentDidMount() {
    let res = await getAllUsers("ALL");
    if (res && res.errcode === 0) {
      this.setState({
        arrUsers: res.users
      });
      console.log(this.state.arrUsers,'sss')
    }
    console.log(res)
  }


  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <div className="user-container">
        <div className="title text-center">Manage Users</div>
        <div className="users-table mt-3 mx-1">
          <table id="customers">
            <tr>
              <th>emial</th>
              <th>fistname</th>
              <th>lastname</th>
              <th>address</th>
              <th>actions</th>
            </tr>
           
            
              {arrUsers &&
                arrUsers.map((items, index) => {
                    console.log(items)
                  return (
                    <tr key={index}>
                      <td>{items.email}</td>
                      <td>{items.firstName}</td>
                      <td>{items.lastName}</td>
                      <td>{items.address}</td>
                      <td>
                        <button className='btn-edit'><i className='fas fa-pencil-alt'></i></button>
                        <button className='btn-delete'><i className='fas fa-trash'></i></button>
                      </td>
                    </tr>
                  );
                })}
           
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
