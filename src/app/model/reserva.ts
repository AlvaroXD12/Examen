import { Cliente } from "./cliente";
import { Hotel } from "./hotel";
import { Sucursal } from "./sucursal";
import { Vuelo } from "./vuelo";

export class Reserva {
    id?: number;
    clase?: string;
    cliente?: Cliente;
    hotel?: Hotel;
    sucursal?: Sucursal;
    vuelo?: Vuelo;
}