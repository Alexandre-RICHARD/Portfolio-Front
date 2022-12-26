const API_URL = process.env.API_URL;

export const cookieHandler = {
    setCookie: (name, value, days) => {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    
    getCookie: (name) => {
        const nameEQ = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },

    handleVisitCookie: (days) => {
        let visits = "";
        if (!cookieHandler.getCookie("visits")) {
            visits = 1;
            cookieHandler.setCookie("visits", visits, days);
            fetch(API_URL + "/visit/counter/add");
        } else {
            visits = parseInt(cookieHandler.getCookie("visits")) + 1;
            cookieHandler.setCookie("visits", visits, days);
        }
        console.log("Nombre de visites de l'utilisateur : " + visits);
    },
    
};