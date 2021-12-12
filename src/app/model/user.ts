import {Role} from './role';

export interface User {
  id?: number;
  email?: string;
  userName?: string;
  password?: string;
  provider?: string;
  fullName?: string;
  phone?: string;
  avt?: string;
  checked?: boolean;
  status?: boolean;
  roles?: [Role];
}
