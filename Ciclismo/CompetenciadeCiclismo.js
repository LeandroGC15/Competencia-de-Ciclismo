class Equipos {
    constructor (equipo){
        this._equipos=equipo;
    }
    presentacion (){
        return `Mi equipo es: ${this._equipo}\n` 
    }
}
class Integrantes extends Equipos {
    constructor (equipo, nombre, apellido, cedula, dia, mes, year, edad){
    super (equipo); 
    this._nombre = nombre;
    this._apellido = apellido;
    this._cedula = cedula;
    this._dia = dia;
    this._mes = mes; 
    this._year = year; 
    this._edad = edad;
    }
    presentacion (){
        return `Participante: ${this._nombre} ${this._apellido}\n Cedula: ${this._cedula}\n Fecha de Nacimiento: ${this._dia}/${this._mes}/${this._year} Edad: ${this._edad} años`
    }
}
// Llenado de clases

const equipo1=new Equipos ("Invictus"), equipo2=new Equipos ("Capas Verdes"), equipo3=new Equipos ("TNT");
const integrante1=new Integrantes ("Invictus", "Mark", "Garcia", 30326053, 29, 04, 2004, 18);
const integrante2=new Integrantes ("Invictus", "Jose", "Galindez", 30000000, 11, 10, 2003, 19);
const integrante3=new Integrantes ("Capas Verde", "Magglearys", "Pereira", 30000000, 17, 12, 2004, 18);
const integrante4=new Integrantes ("Capas Verde", "Leandro", "Garcia", 29000000, 12, 12, 2003, 19);
const integrante5=new Integrantes ("TNT", "Julio", "Charmelo", 30000000, 12, 12, 2004, 18);
const integrante6=new Integrantes ("TNT", "Pablo", "Paez", 30212548, 25, 10, 2004, 18);

// Menu de opciones
var r=0; 
do {
let p=0, Opc;
console.log("Bienvenido al *** Gran Tour San Juan***\n"+
"¿Que desea realizar?\n"+
"[1] Llenar los datos de los equipos participantes\n"+
"[2] Empezar la competicion\n"+
"[3] Salir");
Opc=2;
switch (Opc) {
    case 1:
        console.log("***Integrantes cargados al sistema con existo***");
        p=p+1;
        break;
    case 2:
        if (r==1) {
            /* Esta condicion se abre para poder repetir la accion mas de una vez 
            sin el prompt y se vea todo el sistema chevere este chevere :D*/
            p=p+1
            console.log("***Integrantes cargados al sistema con existo***");
        }
        if (p==0) {
            console.log("Error, no hay equipos ingresados al sistema");
        } else {
            console.log("***Empieza la competicion***");
            console.log("***Llano***");
            Ltp1= Math.ceil(Math.random() * 10);
            Ltp2= Math.ceil(Math.random() * 10);
            Ltp3= Math.ceil(Math.random() * 10);
            console.log("Tiempo de los equipos: "+ "Invictus: "+Ltp1+ " Capas Verdes: "+Ltp2+ " TNT: "+Ltp3); 
            console.log("***Rocoso***");
            Rtp1=Math.ceil(Math.random() * 10);
            Rtp2=Math.ceil(Math.random() * 10);
            Rtp3=Math.ceil(Math.random() * 10);
            console.log("Tiempo de los equipos: "+ "Invictus: "+Rtp1+ " Capas Verdes: "+Rtp2+ " TNT: "+Rtp3); 
            console.log("***Montaña Alta***");
            Mtp1=Math.ceil(Math.random() * 10);
            Mtp2=Math.ceil(Math.random() * 10);
            Mtp3=Math.ceil(Math.random() * 10);
            console.log("Tiempo de los equipos: "+ "Invictus: "+Mtp1+ " Capas Verdes: "+Mtp2+ " TNT: "+Mtp3); 
            console.log("***Competición finalizada***");
            Ttp1=Ltp1+Rtp1+Mtp1;
            Ttp2=Ltp2+Rtp2+Mtp2;
            Ttp3=Ltp3+Rtp3+Mtp3;
            if (Ttp1<Ttp2 && Ttp1<Ttp3) {
                console.log("*** EL GANADOR DE LA COMPETICION ES INVICTUS***\n"+
                "Sus integrantes:\n");
                console.log(integrante1.presentacion());
                console.log(integrante2.presentacion ());
            } else {
                if (Ttp2<Ttp1 && Ttp2<Ttp3) {
                    console.log("*** EL GANADOR DE LA COMPETICION ES CAPAS VERDES***\n"+
                    "Sus integrantes:\n");
                    console.log(integrante3.presentacion());
                    console.log(integrante4.presentacion ());
                } else {
                    console.log("*** EL GANADOR DE LA COMPETICION ES TNT***\n"+
                    "Sus integrantes:\n");
                    console.log(integrante5.presentacion());
                    console.log(integrante6.presentacion ());
                }
            }
        }
        break;
    case 3:
        break;
    default:
        console.log("Errores ingresados fuera de rango");
        break;
}
console.log("¿Desea regresar al menu principal?");
r=r+1;
} while (r==1);
console.log("*** Regrese para el proximo año***");
