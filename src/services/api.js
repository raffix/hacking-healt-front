import axios from "axios";
import {ApiSettings} from '../app.settings';

const api = axios.create({
  baseURL: ApiSettings.BASE_URL
});

export default api;
