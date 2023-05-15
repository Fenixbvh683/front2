export class Experiencia{
    
    idexp?: number;
    nombreexp: string;
    descripcionexp: string;
    ciudadexp: string;
    imgexp: string;

    constructor(
        nombreexp: string,
        descripcionexp: string,
        ciudadexp: string,
        imgexp: string){

            this.nombreexp = nombreexp;
            this.descripcionexp = descripcionexp;
            this.ciudadexp = ciudadexp;
            this.imgexp = imgexp;
        }
}


