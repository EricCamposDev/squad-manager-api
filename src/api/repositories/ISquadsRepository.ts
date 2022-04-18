import { Squad } from "../entities/Squad";
import FindSquadDTO from "../dtos/FindSquadDTO";

export interface ISquadsRepository {

    find(filter: FindSquadDTO): Promise<Squad | null>

    save(squad: Squad): Promise<void>

    list(): Promise<Squad[] | any>

    remove(_id: string): Promise<void>

    edit(id: string, squad: Squad): Promise<Squad | null>

}