import { NeDBSquadsRepository } from '../../repositories/implementations/NeDBSquadsRepository';
import { DeleteSquadUseCase } from './DeleteSquadUseCase';
import { DeleteSquadController } from './DeleteSquadController';
import db from "../../../../loaders/NeDb";


// intancia do repositorio usado / NeDB
const neDBSquadsRepository = new NeDBSquadsRepository(db);

// instancia do caso de uso de criação de time que depende do repositorio
const deleteSquadUseCase = new DeleteSquadUseCase(neDBSquadsRepository);

// instancia do controlador que depende da classe do caso de uso
const deleteSquadController = new DeleteSquadController(deleteSquadUseCase);

// exportando fluxo criado
export { deleteSquadUseCase, deleteSquadController }