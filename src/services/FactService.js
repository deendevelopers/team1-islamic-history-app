import axios from 'axios';

class FactService {
  async getFact() {
    const response = axios.get();
  }
}

export default new FactService();