import { Request, Response } from 'express';
import { DeleteSquadUseCase } from './DeleteSquadUseCase';

export class DeleteSquadController {

    constructor(
        private deleteSquadUseCase: DeleteSquadUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {

        try {

            const { id } = request.params;

            await this.deleteSquadUseCase.execute(id)

            return response.status(204).send();

        } catch (error) {

            return response.status(403).send();
        }

    }
}