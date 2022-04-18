import { NeDBSquadsRepository } from '../../repositories/implementations/NeDBSquadsRepository';
import { CreateSquadUseCase } from './CreateSquadUseCase';
import { CreateSquadController } from './CreateSquadController';
import db from "../../../../loaders/NeDb";


// intancia do repositorio usado / NeDB
const neDBSquadsRepository = new NeDBSquadsRepository(db);

// instancia do caso de uso de criação de time que depende do repositorio
const createSquadUseCase = new CreateSquadUseCase(neDBSquadsRepository);

// instancia do controlador que depende da classe do caso de uso
const createSquadController = new CreateSquadController(createSquadUseCase);

// exportando fluxo criado
export { createSquadUseCase, createSquadController }