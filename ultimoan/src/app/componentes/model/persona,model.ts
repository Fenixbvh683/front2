export class persona{
    
    id?: number;
    nombre: string;
    apellido: string;
    profesion: string;
    ciudad: string;
    pais: string;
    imgfoto: string;
    estuinfo1: string;
    estu1img: string;
    estuinfo2: string;
    estu2img: string;

    constructor(nombre: string,
                apellido: string, 
                profesion: string, 
                ciudad: string, 
                pais: string, 
                imgfoto: string, 
                estuinfo1: string, 
                estu1img: string, 
                estuinfo2: string, 
                estu2img: string) {
                    this.nombre = nombre;
                    this.apellido = apellido; 
                    this.profesion = profesion;
                    this.ciudad = ciudad;
                    this.pais = pais;
                    this.imgfoto = imgfoto; 
                    this.estuinfo1 = estuinfo1; 
                    this.estu1img = estu1img;
                    this.estuinfo2 = estuinfo2;
                    this.estu2img = estu2img;
                }
            }