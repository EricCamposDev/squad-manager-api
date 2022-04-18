import { ISquadsRepository } from "../../repositories/ISquadsRepository";


export class ListSquadsUseCase {

    constructor(
        private squadsRepository: ISquadsRepository
    ){}

    async execute(){
        return await this.squadsRepository.list()
    }

}