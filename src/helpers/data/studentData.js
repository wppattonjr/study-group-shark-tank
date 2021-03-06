import axios from 'axios';

const baseUrl = 'https://shark-tank-21a7b.firebaseio.com';

const livingStudents = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/students.json?orderBy="isDead"&equalTo=false`)
    .then((response) => {
      resolve(Object.values(response.data));
    }).catch((error) => reject(error));
});

const dearlyBeloved = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/students.json?orderBy="isDead"&equalTo=true`)
    .then((response) => {
      resolve(Object.values(response.data));
    }).catch((error) => reject(error));
});

const followTheLight = (studentObj) => new Promise((resolve, reject) => {
  axios.patch(`${baseUrl}/students/${studentObj.id}.json`, { isDead: true })
    .then((response) => {
      resolve(response.data);
    }).catch((error) => reject(error));
});

export default { livingStudents, dearlyBeloved, followTheLight };
