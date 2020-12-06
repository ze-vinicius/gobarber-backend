import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();

    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123');
  });

  it('should not be able to create two appointments with the same date time', async () => {
    const date = new Date();

    await createAppointment.execute({
      date,
      provider_id: '123',
    });

    await expect(
      createAppointment.execute({
        date,
        provider_id: '123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
