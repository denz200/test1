import axios from "axios";

const url = "https://my-json-server.typicode.com/denz200/test1/db";

export default {
  fetchInspectiesUitAPI() {
    return axios.get(url);
  },
};
