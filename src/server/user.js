import { API } from "aws-amplify";

/* List */
export async function getAllPasswords(userId) {
  const listAllPasswordForuser = (userId) => `query MyQuery {
    listPasswords(filter: {userId: {eq: "${userId}"},_deleted: {ne: true}}) {
      items {
        userId
        id
        website
        password
        _version
        username
      }
    }
  }
  `;
  const list = await API.graphql({
    query: listAllPasswordForuser(userId),
  });
  return list;
}

/* Create */
export async function createServiceCredentials(newCredentials) {
  const { product, userId, password, username } = newCredentials;
  const res = await API.graphql({
    query: `mutation MyMutation {
    createPasswords(
      input: {username: "${username}", password: "${password}", userId: "${userId}", website: "${product}"}
    ) {
      id
    }
  }
  `,
  });
  return res;
}

/* Update */
export async function updateCredentials(values) {
  const { id, username, userId, password, _version, website } = values;
  const mutationUpdateCredentials = `mutation MyMutation {
  updatePasswords(
    input: {id: "${id}", password: "${password}", username: "${username}", website: "${website}", _version: ${_version}}
  ) {
    id
  }
}`;
  return await API.graphql({ query: mutationUpdateCredentials });
}

/* Delete */
export async function mutationDeleteCredential(id, _version) {
  const query = `mutation MyMutation {
      deletePasswords(
        input: {id: "${id}", _version: ${_version} }
      ) {
        _deleted
      }
    }`;
  return await API.graphql({ query: query });
}
