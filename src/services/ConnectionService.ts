import { getCustomRepository, Repository } from "typeorm";
import { Connections } from "../entities/Connection";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";

interface IConnectionCreate {
  admin_id?: string;
  user_id: string;
  socket_id: string;
  id?: string;
}

class ConnectionService {
  private connectionsRepository: Repository<Connections>;

  constructor(){
    this.connectionsRepository = getCustomRepository(ConnectionsRepository)
  }

  async create({admin_id, user_id, socket_id, id} :IConnectionCreate){
    const connection = this.connectionsRepository.create({
      admin_id,
      user_id,
      socket_id,
      id
    })

    await this.connectionsRepository.save(connection);

    return connection;
  }

  async findByUserId(user_id: string){
    const connection = await this.connectionsRepository.findOne({user_id});
    return connection;
  }
}

export { ConnectionService };