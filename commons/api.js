
import axios from "axios";
import fetch from "node-fetch";

export default class API {
  static studentpost(url, params, header = null) {
    console.log(params);
    return axios({
      method: "post",
      url,
      headers: { "Content-Type": "application/json" },
      data: params,
    })
    .then((response) =>  {
      console.log("In api.js" ,response);
      return response
    })
    .catch((error) => {
      console.log(error);
      return error
    });
  }

  static postmethod(url, params, header = null) {
    console.log(params);
    return axios({
      method: "post",
      url,
      headers: { "content-type": "multipart/form-data" },
      data: params,
    })
      .then((response) =>  {
        console.log(response);
        return response
      })
      .catch((error) => {
        console.log(error);
        return error
      });
  }

}
