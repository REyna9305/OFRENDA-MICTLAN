import * as THREE from "../js/three.module.js";
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"  //--------------------------Anexar a todos los roundedbox

export default function Flores({x,y,z}){

//Dibujos 2D 
var geometry02 = new RoundedBoxGeometry(1.5,10,1.5,8,2);
var material02 = new THREE.MeshLambertMaterial({
    color:0xFF8400, side: THREE.DoubleSide
});
var mesh02 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(0,0,0);
mesh02.castShadow = true;
mesh02.receiveShadow = true;

var mesh03 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh03);
mesh03.rotation.set(0,0,0.785);
mesh03.castShadow = true;
mesh03.receiveShadow = true;
 
var mesh04 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh04);
mesh04.rotation.set(0,0,1.57);
mesh04.castShadow = true;
mesh04.receiveShadow = true;

var mesh05 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh05);
mesh05.rotation.set(0,0,2.355);
mesh05.castShadow = true;
mesh05.receiveShadow = true;
 
//grupos1
var flor1 = new THREE.Group();
flor1.add(mesh02,mesh03,mesh04,mesh05);

flor1.position.set(0,6,0)

var flor2 = flor1.clone();

flor2.rotation.set(0,0,9);
flor2.position.set(0,6.0);

//grupo2
var flor3 = flor1.clone();

flor3.rotation.set(0,11,9);
flor3.position.set(0,6,0);


var flor4 = flor1.clone();

flor4.rotation.set(0,11,3.9);
flor4.position.set(0,6.0);

//grupo3
var flor5 = flor1.clone();

flor5.rotation.set(0,7,9);
flor5.position.set(0,6,0);


var flor6 = flor1.clone();

flor6.rotation.set(0,7,3.9);
flor6.position.set(0,6.0);

//grupo3
var flor7 = flor1.clone();

flor7.rotation.set(0,-7,9);
flor7.position.set(0,6,0);


var flor8 = flor1.clone();

flor8.rotation.set(0,-7,3.9);
flor8.position.set(0,6.0);

//CañaGrup
    var FloresGrup = new THREE.Group();
    FloresGrup.add(flor1,flor2,flor3,flor4,flor5,flor6,flor7,flor8);

    FloresGrup.position.set(x,y,z);
    return FloresGrup;
    }
 
 