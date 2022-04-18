import {v4 as uuidv4} from 'uuid';

type membersRequest = {
    name: string;
    email: string;
    phone: string;
};

export class Squad {

    public readonly id?: string;
    public name: string;
    public members?: membersRequest[];

    constructor( props: Omit<Squad, 'id'>, id?: string ){
        
        Object.assign(this, props);

        if( !id ){
            this.id = uuidv4();
        }
    }

}