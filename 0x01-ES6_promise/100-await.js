import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const object = {};
  const ret = await Promise.all([uploadPhoto(), createUser()]).then((responses) => {
    [object.photo, object.user] = [...responses];
    return object;
  }).catch(() => ({
    photo: null,
    user: null,
  }));
  // [object.photo, object.user] = [...ret];
  return ret;
}
