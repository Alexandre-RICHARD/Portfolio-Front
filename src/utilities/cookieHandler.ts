const {VITE_API_URL} = import.meta.env;

import {errorSaver} from "@/IndexImporter";

export const cookieHandler = {
    "setCookie": (name: string, value: string, days = 365) => {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },

    "getCookie": (name: string) => {
        const nameEQ = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    },

    "handleVisitCookie": (days = 365) => {
        let visits = 0;
        if (!cookieHandler.getCookie("visits")) {
            visits = 1;
            cookieHandler.setCookie("visits", visits.toString(), days);

            try {
                fetch(VITE_API_URL + "/visit/counter/add", {
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                    "method": "POST",
                    "body": JSON.stringify({"target": "portfolio"}),
                });
            } catch (error) {
                const errorF = error as Error;
                errorSaver(
                    "visit-counter-add-fail",
                    JSON.stringify(errorF.stack)
                );
            }
        } else {
            const visitsCookie = cookieHandler.getCookie("visits");
            visits = parseInt(visitsCookie !== null ? visitsCookie : "0") + 1;
            cookieHandler.setCookie("visits", visits.toString(), days);
        }
    },
};
