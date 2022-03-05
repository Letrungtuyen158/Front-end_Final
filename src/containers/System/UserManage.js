import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserManage.scss";
import {
  getAllUsers,
  createNewUserService,
  deleteUserService,
} from "../../services/userService";
import ModalUser from "./ModalUser";
import ModalEditUser from "./ModalEditUser";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalUser: false,
      isOpenModalEditUser: false,
      userEdit: {},
    };
  }

  async componentDidMount() {
    this.getAllUsers();
  }

  handlerAddNewUser = () => {
    this.setState({
      isOpenModalUser: true,
    });
  };
  toggleUserModal = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
    });
  };
  toggleUserEditModal = () => {
    this.setState({
      isOpenModalEditUser: !this.state.isOpenModalEditUser,
    });
  };

  getAllUsers = async () => {
    const res = await getAllUsers("ALL");
    if (res && res.errcode === 0) {
      this.setState({
        arrUsers: res.users,
      });
    }
  };
  createNewUser = async (data) => {
    try {
      let res = await createNewUserService(data);

      if (res && res.errCode !== 0) {
        alert(res.errMessage);
      } else {
        await this.getAllUsers();
        this.setState({
          isOpenModalUser: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  handlerDeleteUser = async (user) => {
    try {
      let res = await deleteUserService(user.id);
      if (res && res.errCode === 0) {
        await this.getAllUsers();
      } else {
        alert(res.errMessage);
      }
    } catch (error) {
      console.log(error);
    }
  };
  handlEditUser = (user) => {
    this.setState({
      isOpenModalEditUser: true,
      userEdit: user,
    });
  };

  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <div className="user-container">
        <ModalUser
          isOpen={this.state.isOpenModalUser}
          toggleUserModal={this.toggleUserModal}
          createNewUser={this.createNewUser}
        />
        <ModalEditUser
          isOpen={this.state.isOpenModalEditUser}
          toggleUserModal={this.toggleUserEditModal}
          EditNewUser={this.state.userEdit}
        />
        <div className="title text-center">Manage Users</div>
        <div className="mx-1">
          <button
            className="btn btn-primary px-3"
            onClick={() => {
              this.handlerAddNewUser();
            }}
          >
            <i className="fas fa-plus "></i>ADD NEW USER
          </button>
        </div>
        <div className="users-table mt-3 mx-1">
          <table id="customers">
            <tbody>
              <tr>
                <th>Emial</th>
                <th>Fistname</th>
                <th>Lastname</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>

              {arrUsers &&
                arrUsers.map((items, index) => {
                  console.log(items);
                  return (
                    <tr key={index}>
                      <td>{items.email}</td>
                      <td>{items.firstName}</td>
                      <td>{items.lastName}</td>
                      <td>{items.address}</td>
                      <td>
                        <button
                          className="btn-edit"
                          onClick={() => this.handlEditUser(items)}
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button
                          className="btn-delete"
                          onClick={() => {
                            this.handlerDeleteUser(items);
                          }}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
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
