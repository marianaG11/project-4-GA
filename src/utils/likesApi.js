import tokenService from "./tokenService"

//decide what the base url will be 
//check server.js to see where likes router is mounted
const BASE_URL = '/api'

export function create(workoutId){
	return fetch(`${BASE_URL}/workouts/${workoutId}/likes`, {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken() //sending user token
            //allows to use req.user in the routes bc of the config auth middleware
		  }
	}).then(res => {
		if(res.ok) return res.json()
		throw new Error('Not logged In! Check Express terminal')
	})
}

export function removeLike(likeId){
	return fetch(`${BASE_URL}/likes/${likeId}`, {
		method: 'DELETE',
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		  }
	}).then(res => {
		if(res.ok) return res.json()
		throw new Error('Not logged In! Check Express terminal')
	})
}