import { get, post } from 'src/utils/request';

export const _createUser = (user) =>
  post('/users', {user}).then(response => response.data);

// same as:

// export function createUser(user) {
//     return post('/users', {user}).then(response => response.data)
// }

export const _getUser = () =>
  get('/users').then(response => response.data)
// ||------------------------------NOT CONNECTED------------------------------||
([
      {
        id: `${getImg()}`,
        firstName: 'Admin',
        LastName: 'Test',
        mail: 'admin.test@gmail.com',
        avatar: `https://picsum.photos/${res}/${res}?image=${getImg()}`,
        password: 123,
      }, {
        firstName: 'User',
        LastName: 'Test',
        mail: 'user.test@gmail.com',
        avatar: `https://picsum.photos/${res}/${res}?image=${getImg()}`,
        password: 123,
      }
    ])

    const res = '200';
    
    const getImg = () => (
      Math.floor(Math.random() * 100)
    )
    // ||------------------------------NOT CONNECTED------------------------------||
    