import { ISquadsRepository } from "../ISquadsRepository";
import { Squad } from "../../entities/Squad";
import AsyncNedb from "nedb-async";
import FindSquadDTO from "../../dtos/FindSquadDTO";
import { createNoSubstitutionTemplateLiteral } from "typescript";

export class NeDBSquadsRepository implements ISquadsRepository{

  constructor(private db: AsyncNedb<Squad>){}

  async refreshDatabase(): Promise<void> {
    this.db.loadDatabase((err) => { err == null ? console.log("reload database...") : console.log("failed to reaload database.") });
  }

  async find(filter: FindSquadDTO): Promise<Squad|null> {

    let squad = await this.db.asyncFindOne(filter)

    if( squad ){
      return squad;
    }

    return null;
  }


  async save(squad: Squad): Promise<void> {
    
    try{

      var doc = squad;
      this.db.insert(doc)

      console.log("inseriu o" + squad)

    }catch(error){
      console.log(`Insert fail, details: ${error}`);
    }
    
  }

  async list(): Promise<Squad[] | any> {
    return await this.db.asyncFind({});
  }

  async remove(_id: string): Promise<void> {
    
    this.db.remove({ _id: _id }, {}, function (err, numRemoved) {
      if( numRemoved == 1 ){
        console.log(`Document removed successful! - ID: ${_id}`)
      }
    });

    this.refreshDatabase()
  }

  async edit(id: string, squad: Squad): Promise<Squad | any> {
    
    /*
    try{
      let editedName = await this.db.update({name: squad.name}, {_id: id}, {multi: true})
      if( editedName ){
        return squad;
      }else{
        return 0;
      }
    }catch(err){
      console.log(err)
    }
    */

    try{
      this.db.update({_id: id}, { $set:{ name: squad.name } }, {multi: true}, function (err, numReplaced) {
        // numReplaced = 1
        console.log(numReplaced)
        console.log(err)
      });
    }catch(err){

    }
  }
}