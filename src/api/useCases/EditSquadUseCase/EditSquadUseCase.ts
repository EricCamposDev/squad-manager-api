import { Squad } from "../../entities/Squad";
import { ISquadsRepository } from "../../repositories/ISquadsRepository";


export class EditSquadUseCase {

    constructor(
        private squadsRepository: ISquadsRepository
    ){}

    async execute(id: string, data: Squad){

        try{
            let editedSquad = await this.squadsRepository.edit(id, data)
            //console.log(editedSquad)

            if( editedSquad ){
                return true;
            }else{
                return false;
            }
        }catch(err){
            console.log(err)
        }
        
    }

}