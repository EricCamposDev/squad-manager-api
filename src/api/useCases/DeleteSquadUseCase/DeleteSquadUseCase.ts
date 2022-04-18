import { ISquadsRepository } from "../../repositories/ISquadsRepository";


export class DeleteSquadUseCase {

    constructor(
        private squadsRepository: ISquadsRepository
    ){}

    async execute(_id: string){
        await this.squadsRepository.remove(_id);
    }

}