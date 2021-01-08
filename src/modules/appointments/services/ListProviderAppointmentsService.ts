import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { injectable, inject } from 'tsyringe';
import Appointment from '../infra/typeorm/entities/Appointment';

import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  provider_id: string;
  day: number;
  month: number;
  year: number;
}

@injectable()
class ListProviderAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    day,
    provider_id,
    year,
    month,
  }: IRequest): Promise<Appointment[]> {
    const appointments = await this.appointmentsRepository.findAllInDayFromProvider(
      {
        day,
        provider_id,
        year,
        month,
      },
    );

    await this.cacheProvider.save('a', 'b');

    return appointments;
  }
}

export default ListProviderAppointmentsService;
