const {VITE_API_URL} = import.meta.env;
const {VITE_ERROR_API_URL} = import.meta.env;

interface RequestTypes {
    "api": string;
    "url": string;
    "method": string;
}

export const requestHandler = {
    "requestTemplate": async (
        requestData: RequestTypes,
        body: {[key: string]: unknown}
    ): Promise<Response | "error"> => {
        let apiUrl = "";
        switch (requestData.api) {
            case "api":
                apiUrl = VITE_API_URL;
                break;
            case "error":
                apiUrl = VITE_ERROR_API_URL;
                break;
            default:
                break;
        }

        try {
            const response = await fetch(apiUrl + requestData.url, {
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                "method": requestData.method,
                "body": JSON.stringify(body),
            });
            return response;
        } catch (error) {
            if (requestData.api !== "error") {
                const errorF = error as Error;
                requestHandler.errorSaver(
                    "global-request-handle-error",
                    JSON.stringify(errorF.stack)
                );
            }
            return "error";
        }
    },

    "errorSaver": async (context: string, errorMessage: string) => {
        return await requestHandler.requestTemplate(
            {
                "api": "error",
                "url": "/error",
                "method": "POST",
            },
            {
                "projectName": import.meta.env.VITE_PROJECT_NAME,
                "context": context,
                "errorMessage": errorMessage,
            }
        );
    },
    "sendMail": async (ContactValue: {[key: string]: string}) => {
        return await requestHandler.requestTemplate(
            {
                "api": "api",
                "url": "/contact",
                "method": "POST",
            },
            {...ContactValue}
        );
    },
    "visitCounter": async () => {
        return await requestHandler.requestTemplate(
            {
                "api": "api",
                "url": "/visit/counter/add",
                "method": "POST",
            },
            {"target": "portfolio"}
        );
    },
};
