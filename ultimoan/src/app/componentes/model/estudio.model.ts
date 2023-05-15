export class Estudio{
    
    idest?: number;
    nombreest: string;
    descripcionest: string;
    ciudadest: string;
    imgest: string;
    
    constructor(nombreest: string,
        descripcionest: string,
        ciudadest: string,
        imgest: string){

            this.nombreest = nombreest;
            this.descripcionest = descripcionest;
            this.ciudadest = ciudadest;
            this.imgest = imgest;

        }
    }