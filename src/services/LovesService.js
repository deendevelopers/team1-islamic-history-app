import axios from 'axios';
import {API_LOVES_URL} from '../constants/api';

class LovesService {
  async getAll() {
    const response = await axios.get(API_LOVES_URL);
    console.log(response);
    return response.data;
  }

  async getOne(id) {
    const response =  await axios.get(API_LOVES_URL + "/" + id);
    console.log(response);
    return response.data;
  }

  async getLovesByUserId(userId) {
    const response = await axios.get(API_LOVES_URL + "?user_id=" + userId);
    console.log(response);
    return response.data;
  }

  async getLovesByUserIdAndEventId(userId, eventId) {
    const response = await axios.get(API_LOVES_URL + "?user_id=" + userId + "&event_id=" + eventId);
    console.log(response);
    return response.data;
  }

  async getLovesByEventId(eventId) {
    const response = await axios.get(API_LOVES_URL + "?event_id=" + eventId);
    console.log(response);
    return response.data;
  }

  async postLove(eventId, userId) {
    console.log("positng love", userId, eventId);
    const response = await axios.post(API_LOVES_URL, {
      event_id: eventId,
      user_id: userId,
    });
    console.log(response);
    return response.data;
  }

  async deleteLove(id) {
    const response = await axios.delete(API_LOVES_URL + `/${id}`);
    console.log(response);
    return response.data;
  }
}

export default new LovesService();