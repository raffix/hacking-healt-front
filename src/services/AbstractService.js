export class AbstractService {
    headers = {
        'Content-Type': 'application/json',
        'x-access-token':  window.localStorage.getItem('token')
    }
} 