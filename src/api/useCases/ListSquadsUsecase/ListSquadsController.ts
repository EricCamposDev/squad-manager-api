import { json, Request, Response } from 'express';
import { ListSquadsUseCase } from './ListSquadsUseCase';
import { Squad } from '../../entities/Squad';

export class ListSquadsController {

    constructor(
        private listSquadsUseCase: ListSquadsUseCase
    ){}

    async handle(request:Request, response: Response): Promise<Squad[] | any> {

        try {

            const squads = await this.listSquadsUseCase.execute()
            return response.status(200).send(squads)
            
        } catch (error) {
            return response.status(404).send("nenhuma equipe encontrada...");
        }

    }
}