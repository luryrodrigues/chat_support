import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UsersRepository";


class UserService {
  async create(email: string) {
    const userRepository = getCustomRepository(UserRepository);

    const userAlreadyExists = await userRepository.findOne({email})

    if(userAlreadyExists){
      return userAlreadyExists;
    }

    const user = userRepository.create({email}) //cria o user

    await userRepository.save(user); //salva no BD

    return user; //retorna o user criado
  }

}

export { UserService };