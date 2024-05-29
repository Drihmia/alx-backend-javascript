import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const ArrayObj = [];
  const ret = Promise.allSettled([signUpUser(firstName, lastName),
    uploadPhoto(fileName)]).then((results) => {
    results.forEach((result) => ArrayObj.push(result));
    return ArrayObj;
  });
  return ret;
}
