import tokenService from './tokenService';

const BASE_URL = '/api/workouts';

export function create(workout) {
    return fetch(BASE_URL, {
      method: 'POST',
      body: workout,
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    
    }).then(res => res.json());
  }

