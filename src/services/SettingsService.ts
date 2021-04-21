import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  async create({chat, username} : ISettingsCreate) {
    const settingsRepository = getCustomRepository(SettingsRepository);

    const usernameAlreadyExists = await settingsRepository.findOne({username})  //Select * from settings where username = "username" limit 1;

    if (usernameAlreadyExists) {
      throw new Error("Username already exists");
    }

    const settings = settingsRepository.create({
        chat,
        username,
    });  //cria o objeto

    await settingsRepository.save(settings);

    return settings;
  }
}


export { SettingsService };