import * as THREE from "../js/three.module.js";
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"

export default function Tamal1({x,y,z}){

//Tamal
var geometry02 = new RoundedBoxGeometry (4,2,1,8,2);
var texture1 = new THREE.TextureLoader().load("./Texturas_img/ta1.jpg");
var material02 = new THREE.MeshLambertMaterial({
    map:texture1
});
var mesh02 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(0,2,0);
mesh02.rotation.set(1.57,0,0.8);
mesh02.castShadow = true;
mesh02.receiveShadow = true;

//  Clonar tamal
    var TamalClon = mesh02.clone();
    TamalClon.position.set(-2.2, 2.5, 0); // moverla un poco al lado
    TamalClon.rotation.set(1.57,1.2,1.57);
      //scene.add(TamalClon);

var TamalGrup = new THREE.Group();
    TamalGrup.add(mesh02,TamalClon);

    TamalGrup.position.set(x,y,z);
         return TamalGrup;

    }