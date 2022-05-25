import tokenService from "./tokenService";
 
const BASE_URL = '/api';
 

// sending data over as a post request from the client to express, you change the body into json,
//and set the headers on the http request to inform the server the data in the body is json
export function create(workoutId){
    return fetch(`${BASE_URL}/workouts/${workoutId}/comments`, {
        method: 'POST',
        headers: {
         'Authorization': 'Bearer ' + tokenService.getToken(),
         'Content-Type': 'application/json'
       },
 
        //not passing in the comment?
        //where to put this
        body: JSON.stringify() //for text ; sending over JSON
    }).then(res => {
        if (res.ok) return res.json()
        throw new Error('check express terminal');
    });
};
