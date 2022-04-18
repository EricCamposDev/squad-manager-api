import AsyncNedb from 'nedb-async'
import {Squad} from "../../src/api/entities/Squad";

const db = new AsyncNedb<Squad[]>({ 
    filename: './src/api/database/squads.db', 
    autoload: true 
})

export default db;