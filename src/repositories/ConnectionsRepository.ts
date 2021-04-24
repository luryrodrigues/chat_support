import { EntityRepository, Repository } from "typeorm";
import { Connections } from "../entities/Connection";


@EntityRepository(Connections)
class ConnectionsRepository extends Repository<Connections> {}

export { ConnectionsRepository };