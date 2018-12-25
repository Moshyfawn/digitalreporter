import { get, post } from 'src/utils/request';

export const _createUser = (user) =>
    post('/users', {user}).then(response => response.data)

// same as:

// export function createUser(user) {
//     return post('/users', {user}).then(response => response.data)
// }

export const _getUser = () =>
    get('/users').then(response => response.data)