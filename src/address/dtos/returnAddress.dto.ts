import { AddressEntity } from '../entities/adress.entity';

export class ReturnAddressDto {
  constructor(address: AddressEntity) {
    this.complement = address.complement;
    this.cep = address.cep;
    this.numberAddress = address.numberAddress;
  }

  complement: string;
  numberAddress: number;
  cep: string;
}
