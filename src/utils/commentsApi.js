import tokenService from "./tokenService";
 
const BASE_URL = '/api';    // /api/comments
 

// sending data over as a post request from the client to express, you change the body into json,
//and set the headers on the http request to inform the server the data in the body is json
// export function create(workoutId, comment){
//     return fetch(`${BASE_URL}/workouts/${workoutId}`, {
//         method: 'POST',
//         headers: {
//          'Authorization': 'Bearer ' + tokenService.getToken(),
//          'Content-Type': 'application/json'
//        },
 
//         //not passing in the comment?
//         //where to put this
//         body: JSON.stringify(comment) //for text ; sending over JSON
//     }).then(res => {
//         if (res.ok) return res.json()
//         throw new Error('check express terminal, commentsApi in utils');
//     });
// };

export function create(comment){
    return fetch(BASE_URL , {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: new Headers({
            "content-Type": "application/json",
            'Authorization': 'Bearer ' + tokenService.getToken(),
        }),
    }).then(res => {
        if(res.ok)return res.json()
        throw new Error('Not Logged In! Check express terminal')
    }); 
}

export function getWorkoutById(workoutId) {
    return fetch(`${BASE_URL}/${workoutId}`, {
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
})
.then(res => {
    if(res.ok) return res.json();
    throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
})
}



export function getAll(){
    return fetch(BASE_URL, {
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
          }
        })
        .then(res => {
          if(res.ok) return res.json();
          throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
    })
};

