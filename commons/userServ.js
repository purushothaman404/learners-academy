
import API from "./api";

export default class UserServ {
  static async getUser(id) {
    const response = await API.get(`url`);
    if (response.status === 200) {
      return response.body;
    }
    return "Unable to get user";
  }

  static addStudent(data) {
   return API.studentpost(`/api/userServices/studentRegister/`, data)
  .then((response) => {
    console.log("In userserv",response);
    return response;
  });
}
  
  static addteacher(data) {
    return API.postmethod(`/api/userServices/teacherRegister/`, data)
   .then((response) => {
    console.log("In userserv",response);
      return response;
    });
   }


   static verifyOTP(data) {
    return API.postmethod(`/api/userServices/verifyOTP/`, data)
     .then((response) => {
      console.log("In userserv",response);
        return response;
      });
     }


}
