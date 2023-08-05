import axios from "axios";
import {BaseURL} from './constants/Constants'

const instance = axios.create({
    baseURL: BaseURL,
  });

export default instance