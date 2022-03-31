import React, { Component } from "react";
import { connect } from "react-redux";
import "./TableManageUser.scss";
import * as actions from "../../../store/actions";
class TableManageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersRedux: [],
    };
  }

  async componentDidMount() {
    this.props.fetchUserRedux();
  }

  componentDidUpdate(prevProps, preState, snapshot) {
    if (prevProps.listUsers !== this.props.listUsers) {
      this.setState({
        usersRedux: this.props.listUsers,
      });
    }
  }
  handleDeleteUser = (user) => {
    this.props.deleteNewUserRedux(user.id);
  };
  handleEditUser = (user) => {
    this.props.handleEditUserFromParentKey(user);
  };

  render() {
    let arrUsers = this.state.usersRedux;
    return (
      <table id="TableManageUser">
        <tbody>
          <tr>
            <th>Emial</th>
            <th>Fistname</th>
            <th>Lastname</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
          {arrUsers &&
            arrUsers.length > 0 &&
            arrUsers.map((items, index) => {
              return (
                <tr key={index}>
                  <td>{items.email}</td>
                  <td>{items.firstName}</td>
                  <td>{items.lastName}</td>
                  <td>{items.address}</td>
                  <td>
                    <button
                      onClick={() => this.handleEditUser(items)}
                      className="btn-edit"
                    >
                      <i className="fas fa-pencil-alt"></i>
                    </button>
                    <button
                      onClick={() => this.handleDeleteUser(items)}
                      className="btn-delete"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listUsers: state.admin.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserRedux: () => dispatch(actions.fetchAllUserStart()),
    deleteNewUserRedux: (id) => dispatch(actions.deleteNewUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
