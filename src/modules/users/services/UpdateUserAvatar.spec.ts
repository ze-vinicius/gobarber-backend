import AppError from '@shared/errors/AppError';

import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import UpdateUserAvatarService from './UpdateUserAvatarService';

let fakeUsersRepository: FakeUsersRepository;
let fakeStorageProvider: FakeStorageProvider;
let updateUserAvatar: UpdateUserAvatarService;

describe('UpdateUserAvatar', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeStorageProvider = new FakeStorageProvider();

    updateUserAvatar = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider,
    );
  });

  it('should be able to update a avatar from a user', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'example_avatar.png',
    });

    expect(user.avatar).toBe('example_avatar.png');
  });

  it('should not be able to update a avatar from non existing user', async () => {
    await expect(
      updateUserAvatar.execute({
        user_id: 'non-existing-user',
        avatarFilename: 'example_avatar.png',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should delete old avatar when update a new one', async () => {
    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'old_avatar.png',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'new_avatar.png',
    });

    expect(deleteFile).toBeCalledWith('old_avatar.png');
    expect(user.avatar).toBe('new_avatar.png');
  });
});
