import { Request, Response} from 'express';
import { Squad } from '../../entities/Squad';
import { CreateSquadUseCase } from './CreateSquadUseCase';

export class CreateSquadController {

    constructor(
        private createSquadUseCase: CreateSquadUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, members } = request.body;

        try {

            let squad = new Squad({name, members});
            let newSquad = await this.createSquadUseCase.execute(squad)

            if( newSquad ){
                return response.status(201).json({
                    error: false,
                    message: "squad saved!"
                });
            }else{
                return response.status(200).json({
                    error: true,
                    message: "squad name was used, try another."
                })
            }

        } catch (error) {
            return response.status(400).json({
                error: true,
                message: error || 'unexpected error...' 
            });
        }

        
    }
}