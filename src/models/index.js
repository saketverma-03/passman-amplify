// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Passwords } = initSchema(schema);

export {
  Passwords
};