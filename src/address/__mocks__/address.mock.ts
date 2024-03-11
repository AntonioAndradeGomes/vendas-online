import { userEntityMock } from '../../user/__mocks__/user.mock';
import { AddressEntity } from '../entities/adress.entity';
import { cityMock } from '../../city/__mocks__/city.mock';

export const addressEntityMock: AddressEntity = {
  createdAt: new Date(),
  id: 121212,
  updatedAt: new Date(),
  userId: userEntityMock.id,
  complement: 'BL 06 AP 304',
  numberAddress: 0,
  cep: '57750000',
  cityId: cityMock.id,
};
