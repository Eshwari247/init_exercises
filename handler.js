'use strict';
module.exports.hello = async (event) => {
    if (event.httpMethod === "GET") {
        const response = {
            statusCode: 200,
            body: JSON.stringify({ result: 0 }),
        };
        return response;
    } 
    else if (event.httpMethod === "POST") {
            const requestBody = JSON.parse(event.body);
            if (requestBody.a && requestBody.b) {
                const result = requestBody.a * requestBody.b;
                const response = {
                    statusCode: 200,
                    body: JSON.stringify({ result }),
                };
                return response;
            } 
            else {
                response.statusCode = 400;
                const response = {
                    statusCode: 400,
                    body: JSON.stringify({ error: "Request body must contain 'a' and 'b' properties." }),
                    
                };
                return response;
            }
    } 
    else {
        const response = {
            statusCode: 405,
            body: JSON.stringify({ error: "Method not allowed" }),
        };
        return response;
    }
};