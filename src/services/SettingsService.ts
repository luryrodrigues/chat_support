import { getCustomRepository, Repository } from "typeorm";
import { Settings } from "../entities/Settings";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  private settingsRepository: Repository<Settings>;

  constructor() {
    this.settingsRepository =getCustomRepository(SettingsRepository);
  }
  
  async create({chat, username} : ISettingsCreate) {

    const usernameAlreadyExists = await this.settingsRepository.findOne({username})  //Select * from settings where username = "username" limit 1;

    if (usernameAlreadyExists) {
      throw new Error("Username already exists");
    }

    const settings = this.settingsRepository.create({
        chat,
        username,
    });  //cria o objeto

    await this.settingsRepository.save(settings);

    return settings;
  }

  async findByUsername(username: string) {
    const settings = await this.settingsRepository.findOne({username})
    return settings;
  }

  async update(username: string, chat: boolean) {
    await this.settingsRepository.createQueryBuilder()
    .update(Settings)
    .set({chat})
    .where("username = :username", {username})  // o : significa que é um parametro
    .execute();
  }

}


export { SettingsService };