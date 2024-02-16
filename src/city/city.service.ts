import { CityEntity } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CacheService } from 'src/cache/cache.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
    private readonly cacheService: CacheService,
  ) {}

  async getAllCitiesByStateId(stateId: number): Promise<CityEntity[]> {
    return await this.cacheService.getCache<CityEntity[]>(
      `state_${stateId}`,
      () =>
        this.cityRepository.find({
          where: {
            stateId,
          },
        }),
    );
  }
}
