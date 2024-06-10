import { pokemonAccount } from "./pokemonAccount";

export interface PokemonTrainer {
    name: string | null | undefined;
    cellphone: string | null | undefined;
    accounts: Array<pokemonAccount>;
}
