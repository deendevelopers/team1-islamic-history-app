import axios from 'axios';
import {API_HISTORIC_EVENTS_URL} from '../constants/api';

class HistoricEventsService {
  async getAll() {
    const response = await axios.get(API_HISTORIC_EVENTS_URL);
    console.log(response);
    return response.data;
  }

  async getOne(id) {
    const response =  await axios.get(API_HISTORIC_EVENTS_URL + "/" + id);
    console.log(response);
    return response.data;
  }

  async getAllForTimelineId(id) {
    const response = await axios.get(
      API_HISTORIC_EVENTS_URL + '?timeline_id=' + id
    );
    console.log(response);
    var data = response.data;
    data.forEach(item => {
      item.dateObj = new Date(item.date);
    });

    data.sort((a, b) => a.dateObj - b.dateObj);

    return data;
  }
}

export default new HistoricEventsService();