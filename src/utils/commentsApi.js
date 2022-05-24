import tokenService from "./tokenService";
 
const BASE_URL = '/api';
 
export function create(workoutId){
    return fetch(`${BASE_URL}/workouts/${workoutId}/comments`, {
        method: 'POST',
        headers: {
         'Authorization': 'Bearer ' + tokenService.getToken()
       },
        // headers: new Headers({'Content-Type': 'application/json'}),
 
        //comment or workoutId
        body: JSON.stringify(comment) //for text ; sending over JSON
    })
};
