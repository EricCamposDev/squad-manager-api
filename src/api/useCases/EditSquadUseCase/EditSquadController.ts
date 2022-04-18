import { Request, Response} from 'express';
import { Squad } from '../../entities/Squad';
import { EditSquadUseCase } from './EditSquadUseCase';

export class EditSquadController {

    constructor(
        private editSquadUseCase: EditSquadUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params
        const { name, members } = request.body;

        try {

            let squad = new Squad({
                name: name,
                members: members
            })

            try{
                let editSquad = await this.editSquadUseCase.execute(id, squad)

                if( editSquad ){
                    return response.status(200).json({
                        error: false,
                        message: "squad updated!"
                    });
                }else{
                    return response.status(200).json({
                        error: true,
                        message: "edit fail..."
                    })
                }
            }catch(err){
                return response.status(400).json({
                    error: true,
                    message: err
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