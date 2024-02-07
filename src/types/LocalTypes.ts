import { User } from './DBTypes';
type Credentials = Pick<User, 'username' | 'password'>;
export type { Credentials };
