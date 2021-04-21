import { EntityRepository, Repository } from "typeorm";
import { Settings } from "../entities/Settings";

// a classe Repository do Typeorm já tem alguns métodos, por isso vamos extender para usá-los na classe SettingsRepository
@EntityRepository(Settings)
class SettingsRepository extends Repository<Settings> {}

export { SettingsRepository };