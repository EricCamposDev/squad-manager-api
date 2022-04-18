import { NeDBSquadsRepository } from '../../repositories/implementations/NeDBSquadsRepository';
import { ListSquadsUseCase } from './ListSquadsUseCase';
import { ListSquadsController } from './ListSquadsController';
import db from "../../../../loaders/NeDb";


// intancia do repositorio usado / NeDB
const neDBSquadsRepository = new NeDBSquadsRepository(db);

// instancia do caso de uso de criação de time que depende do repositorio
const listSquadsUseCase = new ListSquadsUseCase(neDBSquadsRepository);

// instancia do controlador que depende da classe do caso de uso
const listSquadsController = new ListSquadsController(listSquadsUseCase);

// exportando fluxo criado
export { listSquadsUseCase, listSquadsController }