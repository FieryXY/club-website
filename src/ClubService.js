
const development = true;
const BackEndURL = "http://localhost:8080/"; 

const doLogin = (userName, password) => {
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

const getFeaturedClubs = () => {
    return fetch(BackEndURL + "/api/club/featured", {
        "method" : "GET",
        "mode" : "cors"
    })
}
