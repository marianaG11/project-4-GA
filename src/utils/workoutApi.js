import tokenService from './tokenService';

const BASE_URL = '/api/workouts';

export function create(workout) {
    return fetch(BASE_URL, {
      method: 'POST',
      body: workout,
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    
    }).then(res => {
        if(res.ok) return res.json();
        throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
    })
  };


export function getAll() {
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



export function ShowDetailsPage(workoutId){
    return fetch(BASE_URL + workoutId, {
      headers: {
        Authorization: "Bearer " + tokenService.getToken()
      }
  }).then(res => {
    if(res.ok) return res.json();
    throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
  })
};


