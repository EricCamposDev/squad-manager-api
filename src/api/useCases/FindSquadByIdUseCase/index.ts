import { NeDBSquadsRepository } from '../../repositories/implementations/NeDBSquadsRepository';
import { FindSquadByIdUseCase } from './FindSquadByIdUseCase';
import { FindSquadByIdController } from './FindSquadByIdController';
import db from "../../../../loaders/NeDb";


// intancia do repositorio usado / NeDB
const neDBSquadsRepository = new NeDBSquadsRepository(db);

// instancia do caso de uso de criação de time que depende do repositorio
const findSquadByIdUseCase = new FindSquadByIdUseCase(neDBSquadsRepository);

// instancia do controlador que depende da classe do caso de uso
const findSquadByIdController = new FindSquadByIdController(findSquadByIdUseCase);

// exportando fluxo criado
export { findSquadByIdUseCase, findSquadByIdController }