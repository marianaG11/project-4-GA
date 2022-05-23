import tokenService from '../tokenService';

const BASE_URL = '/api/todos';

export function create(todo) {
    return fetch(BASE_URL, {
      method: 'POST',
      body: todo,
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    
    }).then(res => res.json());
  }

