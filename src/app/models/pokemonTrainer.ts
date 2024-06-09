import { pokemonAccount } from "./pokemonAccount";

export interface pokemonTrainer {
    name: string;
    cellphone: string; 
    accounts: Array<pokemonAccount>;
}