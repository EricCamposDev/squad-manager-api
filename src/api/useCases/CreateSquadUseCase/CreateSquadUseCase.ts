import { Squad } from "../../entities/Squad";
import { ISquadsRepository } from "../../repositories/ISquadsRepository";
import { ICreateSquadRequestDTO } from "./ICreateSquadRequestDTO";


export class CreateSquadUseCase {

    constructor(
        private squadsRepository: ISquadsRepository
    ){}

    async execute(data: Squad){

        let checkExistSquadByName = await this.squadsRepository.find({name:data.name})
        if( checkExistSquadByName == null ){
            const squad = new Squad(data);
            await this.squadsRepository.save(squad);
            return true;
        }else{
            return false;
        }
    }

}