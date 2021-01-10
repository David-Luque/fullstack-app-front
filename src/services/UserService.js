  
import axios from "axios";


class UserService {

  constructor() {
    let service = axios.create({
      baseURL: "https://dvdlq99-react-project.herokuapp.com",
      withCredentials: true
    });

    this.service = service;
  }

  signup = (username, password) => {
    return this.service.post("/signup", {username, password})
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post("/login", {username, password})
    .then(response => response.data)
  }

  loggedin = () =>{
    return this.service.get("/loggedin")
    .then(response => response.data)
  }

  getUser = (userID) => {
    return this.service.get(`/getUser/${userID}`, {userID})
    .then(response => response.data)
  }

  logout = () =>{
    return this.service.post("/logout", {})
    .then(response => response.data)
  }
}

export default UserService;