import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  let ArrayStr = [];
  const promises = [uploadPhoto(), createUser()];
  await Promise.all(promises).then((values) => {
    // Start of the ForEach loop.
    values.forEach((value) => {
      ArrayStr.push(Object.values(value));
    });
    // ForEach ended

    ArrayStr = ArrayStr.flat();
    ArrayStr.shift();
    console.log(ArrayStr.join(' '));
  }).catch(() => { console.log('Signup system offline'); });
}
