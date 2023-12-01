import { buses } from "./buses";
import { conductores } from "./conductores";
import { rutas } from "./rutas";

export class viajes {
    id?: number;
    numePasajero?: number;
    fechViaje:Date = new Date; 
    valoPasaj?:number; 
    buses?:buses; 
    conductores?:conductores; 
    rutas?:rutas; 
}
