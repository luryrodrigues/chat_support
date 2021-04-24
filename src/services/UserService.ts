import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UsersRepository";


class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }

  async create(email: string) {

    const userAlreadyExists = await this.userRepository.findOne({email})

    if(userAlreadyExists){
      return userAlreadyExists;
    }

    const user = this.userRepository.create({email}) //cria o user

    await this.userRepository.save(user); //salva no BD

    return user; //retorna o user criado
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findOne({email});
    return user;
  }

}

export { UserService };