import { ReturnCityDto } from 'src/city/dtos/returnCity.dto';
import { AddressEntity } from '../entities/adress.entity';

export class ReturnAddressDto {
  constructor(address: AddressEntity) {
    this.complement = address.complement;
    this.cep = address.cep;
    this.numberAddress = address.numberAddress;
    this.city = address.city ? new ReturnCityDto(address.city) : undefined;
  }

  complement: string;
  numberAddress: number;
  cep: string;
  city?: ReturnCityDto;
}
