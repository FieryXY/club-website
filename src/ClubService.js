const development = true;
const BackEndURL = process.env.REACT_APP_BACKEND_URL;

class ClubService {
    doLogin(userName, password) {
        const Body = {
            "username" : userName, 
            "password" : password
        }; 
        return fetch(BackEndURL + "/api/auth/login", {
            "headers":  {"Content-Type" : "application/json"},
            "method" : "POST",
            "mode" : "cors",  
            "body" : JSON.stringify(Body)
        })
    }
    doClubList = () => {
        return fetch(BackEndURL + "/api/club/list", {
            "headers":  {"Content-Type" : "application/json"},
            "method" : "GET",
            "mode" : "cors",  
        })
    }
    doClubTags = () => {
        return fetch(BackEndURL + "/api/club/tags/list", {
            "headers":  {"Content-Type" : "application/json"},
            "method" : "GET",
            "mode" : "cors",  
        })
    }
    doClubInfo = (clubId) => {
        return fetch(BackEndURL + "/api/club/information/" + clubId, {
            "method" : "GET",
            "mode" : "cors",  
        })
    }

    getFeaturedClubs = () => {
        return fetch(BackEndURL + "/api/club/featured", {
            "method" : "GET",
            "mode" : "cors"
        })
    }

    doClubDescriptionChange = (clubDescription) => {
        const Body = {
            "description" : clubDescription
        }; 
        return fetch(BackEndURL + "/api/club/edit/description/" + sessionStorage.getItem("clubId"), {
            "headers":  {"Content-Type" : "application/json", "Authorization" : sessionStorage.getItem("accessToken")},
            "method" : "POST",
            "mode" : "cors",  
            "body" : JSON.stringify(Body)  
        })
    }
    doRemoveTag = (clubTags) => {
        const Body = {
            "categoryName" : clubTags
        }; 
        return fetch(BackEndURL + "/api/club/edit/tags/remove/" + sessionStorage.getItem("clubId"), {
            "headers":  {"Content-Type" : "application/json", "Authorization" : sessionStorage.getItem("accessToken")},
            "method" : "POST",
            "mode" : "cors",  
            "body" : JSON.stringify(Body)  
        })
    }
    doAddTag = (clubTags) => {
        const Body = {
            "categoryName" : clubTags
        }; 
        return fetch(BackEndURL + "/api/club/edit/tags/add/" + sessionStorage.getItem("clubId"), {
            "headers":  {"Content-Type" : "application/json", "Authorization" : sessionStorage.getItem("accessToken")},
            "method" : "POST",
            "mode" : "cors",  
            "body" : JSON.stringify(Body)  
        })
    }
    doAddSocials = (name, link) => {
        const Body = {
            "socialName" : name,
            "socialLink" : link
        }; 
        return fetch(BackEndURL + "/api/club/edit/socials/add/" + sessionStorage.getItem("clubId"), {
            "headers":  {"Content-Type" : "application/json", "Authorization" : sessionStorage.getItem("accessToken")},
            "method" : "POST",
            "mode" : "cors",  
            "body" : JSON.stringify(Body)  
        })
    }
    doRemoveSocials = (name, link) => {
        const Body = {
            "socialName" : name,
            "socialLink" : link
        }; 
        return fetch(BackEndURL + "/api/club/edit/socials/remove/" + sessionStorage.getItem("clubId"), {
            "headers":  {"Content-Type" : "application/json", "Authorization" : sessionStorage.getItem("accessToken")},
            "method" : "POST",
            "mode" : "cors",  
            "body" : JSON.stringify(Body)  
        })
    }
    doChangeImage = (blob) => {

        let data = new FormData();
        let file = new File([blob], "image.png", {type: "image/png"});
        data.append("pfp", file);

        return fetch(BackEndURL + "/api/file/upload/pfp/" + sessionStorage.getItem("clubId"), {
            "headers":  {"Authorization" : sessionStorage.getItem("accessToken")},
            "method" : "POST",
            "mode" : "cors",
            body: data
        })
    }
    doSendEmail = (email) => {
        const Body = {
            "username" : email,
        };
        return fetch(BackEndURL + "/api/club/password/reset/request/", {
            "headers":  {"Content-Type" : "application/json"},
            "method" : "POST",
            "mode" : "cors",
            "body" : JSON.stringify(Body)
        })
    }

    doGetCode = (code) => {
        const Body = {
            "resetCode" : code,
        };
        return fetch(BackEndURL + "/api/club/password/reset/verify/", {
            "headers":  {"Content-Type" : "application/json"},
            "method" : "GET",
            "mode" : "cors",
            "body" : JSON.stringify(Body)
        })
    }
}



export default new ClubService();

