import { json, Request, Response } from 'express';
import { FindSquadByIdUseCase } from './FindSquadByIdUseCase';
import { Squad } from '../../entities/Squad';

export class FindSquadByIdController {

    constructor(
        private findSquadByIdUseCase: FindSquadByIdUseCase
    ){}

    async handle(request:Request, response: Response): Promise<Squad | any> {

        try {
            const { id } = request.params
            const squad = await this.findSquadByIdUseCase.execute(id)
            return response.status(200).send(squad)
            
        } catch (error) {
            return response.status(404).send("nenhuma equipe encontrada...");
        }

    }
}