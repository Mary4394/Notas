function media (){
//
let campo_x = document.getElementById('x');
let campo_y = document.getElementById('y');
let campo_z = document.getElementById('z');
let campo_e1 = document.getElementById('e1');
let campo_t1 = document.getElementById('t1');

//

let x=parseInt(campo_x.value);
let y=parseInt(campo_y.value);
let z=parseInt(campo_z.value);
let e1=parseInt(campo_e1.value);
let t1=parseInt(campo_t1.value);

let promedio= (x+y+z)/3;
let final= 0.55*(promedio) + 0.30*e1+0.15*t1;
console.log(final);
return final;
}

