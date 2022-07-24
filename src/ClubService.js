
const development = true;
const BackEndURL = "http://localhost:8080/"; 
class ClubService {
    doLogin = (userName, password) => {
        const Body = {
            "username" : userName, 
            "password" : password
        }; 
        return fetch(BackEndURL + "login", {
            "headers":  {"Content-Type" : "application/json"},
            "method" : "POST",
            "mode" : "cors",  
            "body" : JSON.stringify(Body)  
        })
    }
    doClubList = () => {
        return fetch(BackEndURL + "club/list", {
            "headers":  {"Content-Type" : "application/json"},
            "method" : "GET",
            "mode" : "cors",  
        })
    }
    doClubTags = () => {
        return fetch(BackEndURL + "club/tags/list", {
            "headers":  {"Content-Type" : "application/json"},
            "method" : "GET",
            "mode" : "cors",  
        })
    }
}

export default new ClubService();