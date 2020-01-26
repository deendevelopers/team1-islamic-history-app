import axios from 'axios';
import {API_USERS_URL} from '../constants/api';

class UserService {
  async getAll() {
    const response = await axios.get(API_USERS_URL);
    console.log(response);
    return response.data;
  }

  async getOne(id) {
    const response =  await axios.get(API_USERS_URL + "/" + id);
    console.log(response);
    return response.data;
  }

  async getUserByName(name) {
    const response = await axios.get(API_USERS_URL + "?name=" + name);
    console.log(response);
    return response.data;
  }

  async postUser(username) {
    const response = await axios.post(API_USERS_URL, {
      name: username,
      likes: []
    });
    console.log(response);
    return response.data;
  }

  async putLoves(user, event_id) {
    const response = await axios.put(API_USERS_URL + `/${user.id}`, {
      likes: [...user.likes, event_id]
    });
    console.log(response);
    return response.data;
  }
}

export default new UserService();