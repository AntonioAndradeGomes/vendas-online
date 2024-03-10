import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '11100066699',
  createdAt: new Date(),
  email: 'emailmock@email.com',
  id: 121212,
  name: 'Mock Test',
  password: '121321password',
  typeUser: UserType.User,
  updatedAt: new Date(),
  phone: '5582999998888',
};
