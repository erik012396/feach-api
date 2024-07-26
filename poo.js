/*POO
se refiere a nuestro molde o plantilla para que podamos crear objetos constructor: es una caracteristic especifica de las clases que nos ayuda a contruir al objeto:
objeto es lo que construimos a traves de la clase y el constructor pero con atributos especificos.


abstraccion: se refiere a reducir el objeto lo mas posible 
herencia: cuenta con la palabra reservada extends y con ella podemos  heredar atributos de una clase a otra 
encapsulamiento: consiste en como voy a menejar los datos y asta donde van a tener acceso mis usuarios
polimorfismo: consiste en ver como se comporta un objeto de forma distinta ante un mismo metodo de acuerdo a sus propiedades 

principio Solid
principio de respondabilidad unica (SRP): se refiere a cada que agsinamos una clase, objeto, etc debe ser unica 

principio de abierto/ cerrado ( OCP): se refiere  a que debemos poder extender el codigo ya existente de ser necesrio
principio de sustitucion de liskov (LSP): se  refiere a que podemos tener cualquier tipo de dato  dentro de mi objeto y al pertenecer a la misma clase no debe afectar el comportamiento  de mi objeto 
principios de segregacion de interfaces(ISP): se refiere a que es mejor  tener distintas interfaces especificas  a una sola muy grande
principio de inversion de dependencias (DIP): se refiere a que en lugar  del que codigo dependa de detalles especifico  lo haga atraves de abstracciones
*/

/*class ch43{//toda la cohorte 43
    constructor(nombre,apellido,email, edad){//caracteristicas de la clase coherte 43
        this.name=nombre;
        this.lastname=apellido;
        this.email=email;
        this.age=edad;
        this.info=`Holi soy ${this.name}${this.lastname}, mi correo es ${email}`
    }
    
    infoIntegrantes (){
        console.log(this.info);
    }
} 
class participante extends ch43{

}


const inte1=new ch43("aparicio", "huerta","aparicio@gmail.com",29);

const inte2=new ch43("aparicio", "huerta","aparicio@gmail.com",29);
const inte3=new ch43("aparicio", "huerta","aparicio@gmail.com",29);
const inte4=new ch43("aparicio", "huerta","aparicio@gmail.com",29);
const inte5=new ch43("aparicio", "huerta","aparicio@gmail.com",29);
const inte6=new ch43("aparicio", "huerta","aparicio@gmail.com",29);
const inte7=new ch43("aparicio", "huerta","aparicio@gmail.com",29);

//console.log(inte7,info);
inte5.infoIntegrantes();
*/



class participante extends ch43 {
    constructor(nombre, apellido, email, edad, telefono){
        super (nombre, apellido, email, edad);
        this.number = telefono;
    }

    //Metodos estaticos, no necesita que la clase se defina para poder ser creado 
    static canvas() {
        console.log("Ya estas registrdx");
    }
}

class instruccion extends ch43{
    constructor(nombre, apellido, edad, email, licenciatura){
        super(nombre, apellido, email, edad)
        this.deGree = licenciatura;
    }

    static darSesiones (){
        console.log("Hoy no tienes sesión");
    }

    //Metodos getters y setters 
    //set : podemos modificar un valor 
    //get : obtener un valor o crear

    set setDeGree(newDeGree) {
        this.deGree = newDeGree;
    }

    get getDeGree(){
        return this.deGree;
    }

    
}





const inte1 = new participante("Aparicio", "Huerta", "aparicio@gmail.com", 29, "5574986321");
const inte2 = new ch43("Yareri", "Arcos", "yare@gmail.com", 29);
const inte3 = new instruccion("Daniel", "Maldonado", "dani@gmail.com", 35, "Licenciatura");
const inte4 = new ch43("Tadeo", "Zepeda", "tadeo@gmail.com", 26);
const inte5 = new participante("Adrian", "Becerra", "adrian@gmail.com", 24, "5521457896");
const inte6 = new participante("Alan", "Pacheco", "alan@gmail.com", 29, "5574102030");
const inte7 = new participante("Lizbeth", "Zarazua", "liz@gmail.com", 25, "55214587");

//console.log(inte7.info);

inte5.infoIntegrantes();
inte1.infoIntegrantes();
inte3.infoIntegrantes();


participante.canvas();
instruccion.darSesiones();

inte3.setDeGree = "Maestria";
console.log(inte3.deGree);



