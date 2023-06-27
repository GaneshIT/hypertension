import http from "../http-common";

class TutorialDataService {
  getAll(search,status,state) {
    if(search!="" )
    return http.get("/doctors?name="+search+"&status="+status+"&state="+state);
    
    else
    return http.get("/doctors");
  }
}

export default new TutorialDataService()
