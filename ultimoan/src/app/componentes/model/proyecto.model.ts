export class Proyecto{

    idpro?: number;
    nombrepro: string;
    descripcionpro: string;
    imgpro: string;

    constructor(
        nombrepro: string,
        descripcionpro: string,
        imgpro: string) {

            this.nombrepro = nombrepro;
            this.descripcionpro = descripcionpro;
            this.imgpro = imgpro;
        }
}




