/* var coche={
    marca:"",
    modelo:"",
    color:"",
    getmarca: function(){
        var marca;
        marca=this.marca;
        return marca;
    },
    getcolor: function(){
        var color;
        color=this.color;
        return color;
    },
    getmodelo: function(){
        var modelo;
        modelo=this.modelo;
        return modelo;
    },
    setmarca: function(marca){
        this.marca=marca;
    },
    setcolor: function(color){
        this.marca=color;
    },
    setmodelo: function(modelo){
        this.marca=modelo;
    },
    constructor: function(modelo,marca,color){
        this.modelo=modelo;
        this.color=color;
        this.marca=marca;
        return this;
    }
};

var coche1= new coche();
var coche2=new coche();
coche1=coche.constructor("Clio","Renault","dorado");
coche2=coche.constructor("Camaro","Chevrolet","amarillo");
function mostrarcoche(coche){
    var marca=coche.marca;
    var modelo=coche.modelo;
    var color=coche.color;
    alert(marca+modelo+color);
}
mostrarcoche(coche1);
var coches=[coche1.getmodelo(),coche2.getmodelo()];
 */
/* var alumnos = ["Paco García", "Laura Ramos", "Carlota Zanahoria", "Andrés Lechuga", "Pablo Berenjena", "José Pepino", "David Melones", "Daniel Manzano", "Jesús Naranja", "Antonio Pera", "Noah Limón"];
var busqueda = alumnos.filter(alumno => alumno.length < 4 );
 */
    let arrayParticipantes=[];
    let winner;

function sorteo(){
    p1=document.getElementById("participante1").value;
    if(p1!=""){
    arrayParticipantes.push(p1);
    }
    p2=document.getElementById("participante2").value;
    if (p2!=""){
        arrayParticipantes.push(p2);
    }    
    p3=document.getElementById("participante3").value;
    if (p3!=""){
        arrayParticipantes.push(p3);
    }
    p4=document.getElementById("participante4").value;
    if (p4!=""){
        arrayParticipantes.push(p4);
    }
    p5=document.getElementById("participante5").value;
    if (p5!=""){
        arrayParticipantes.push(p5);
    }
    p6=document.getElementById("participante6").value;
    if (p6!=""){
        arrayParticipantes.push(p6);
    }
    p7=document.getElementById("participante7").value;
    if (p7!=""){
        arrayParticipantes.push(p7);
    }
    p8=document.getElementById("participante8").value;
    if (p8!=""){
        arrayParticipantes.push(p8);
    }
    p9=document.getElementById("participante9").value;
    if (p9!=""){
        arrayParticipantes.push(p9);
    }
    p10=document.getElementById("participante10").value;
    if (p10!=""){
        arrayParticipantes.push(p10);
    }
    winner=arrayParticipantes[Math.floor(Math.random()*arrayParticipantes.length)];
    document.getElementById("winner").innerHTML=(`El elegido es ${winner}`);

}