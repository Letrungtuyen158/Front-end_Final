import axios from "../axios";

const handleLoginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};
const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};
const createNewUserService = (data) => {
  return axios.post("api/create-new-users", data);
};

const deleteUserService = (userId) => {
  return axios.delete("/api/delete-users", { data: { id: userId } });
};
const editUserService = (imputData) => {
  return axios.put("/api/edit-users", imputData);
};
const getAllCodeService = (inputType) => {
  return axios.get(`/api/allcode?type=${inputType}`);
};

const getTopDoctorHomeService = (limit) => {
  return axios.get(`/api/top-doctor-home?limit=${limit}`);
};

const getAllDoctors = () => {
  return axios.get("/api/get-all-doctors");
};

const saveDetailDoctor = (data) => {
  return axios.post("/api/save-infor-doctors", data);
};

export {
  handleLoginApi,
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
  getAllCodeService,
  getTopDoctorHomeService,
  getAllDoctors,
  saveDetailDoctor,
};
