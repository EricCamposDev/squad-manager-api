import { NeDBSquadsRepository } from '../../repositories/implementations/NeDBSquadsRepository';
import { EditSquadUseCase } from './EditSquadUseCase';
import { EditSquadController } from './EditSquadController';
import db from "../../../../loaders/NeDb";


// intancia do repositorio usado / NeDB
const neDBSquadsRepository = new NeDBSquadsRepository(db);

// instancia do caso de uso de criação de time que depende do repositorio
const editSquadUseCase = new EditSquadUseCase(neDBSquadsRepository);

// instancia do controlador que depende da classe do caso de uso
const editSquadController = new EditSquadController(editSquadUseCase);

// exportando fluxo criado
export { editSquadUseCase, editSquadController }