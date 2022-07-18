
const development = true;
const BackEndURL = "http://localhost:8080/"; 

const doLogin = (userName, password) => {
    const Body = {
        "email" : userName, 
        "password" : password
    }; 
    return fetch(BackEndURL + "api/auth/login", {
        "headers":  {"Content-Type" : "application/json"},
        "method" : "POST",
        "mode" : "cors",  
        "body" : JSON.stringify(Body)  
    })
}
module.exports = {
    doLogin,
};
