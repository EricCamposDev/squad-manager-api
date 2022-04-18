import { INewMemberSquadRequestDTO } from "../NewMemberSquadUseCase/INewMemberSquadRequestDTO";

export interface ICreateSquadRequestDTO {
    name: string;
    members?: INewMemberSquadRequestDTO[];
}