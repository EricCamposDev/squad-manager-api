import { ISquadsRepository } from "../../repositories/ISquadsRepository";


export class FindSquadByIdUseCase {

    constructor(
        private squadsRepository: ISquadsRepository
    ){}

    async execute(id: string){
        return await this.squadsRepository.find({_id: id});
    }

}