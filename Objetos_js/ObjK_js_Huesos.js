import * as THREE from "../js/three.module.js";
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"

export default function Hueso({x,y,z}){

//huesos largos1
var geometry02 = new RoundedBoxGeometry (1,5,1,2,2);
var material02 = new THREE.MeshLambertMaterial({
    color:0xE5E6C3, side: THREE.DoubleSide
});
var mesh02 = new THREE.Mesh(geometry02,material02);
    //scene.add(mesh02);
mesh02.position.set(0.2,3.5,8);
mesh02.castShadow = true;
mesh02.receiveShadow = true;

//huesos bolita1
var geometry03 = new RoundedBoxGeometry (1,1.1,1,2,2);
var material03 = new THREE.MeshLambertMaterial({
    color:0xE5E6C3, side: THREE.DoubleSide
});
var mesh03 = new THREE.Mesh(geometry03,material03);
    //scene.add(mesh03);
mesh03.position.set(-0.5,5.5,8);
mesh03.castShadow = true;
mesh03.receiveShadow = true;

//huesos bolita2
var mesh04 = new THREE.Mesh(geometry03,material03);
    //scene.add(mesh04);
mesh04.position.set(0.9,5.4,8);
mesh04.rotation.set(0.9,0,0);
mesh04.castShadow = true;
mesh04.receiveShadow = true;

//huesos bolita3
var mesh05 = new THREE.Mesh(geometry03,material03);
    //scene.add(mesh05);
mesh05.position.set(0.9,1.5,8);
mesh05.rotation.set(0.9,0,0);
mesh05.castShadow = true;
mesh05.receiveShadow = true;

//huesos bolita4
var mesh06 = new THREE.Mesh(geometry03,material03);
    //scene.add(mesh06);
mesh06.position.set(-0.5,1.5,8);
mesh06.rotation.set(0.9,0,0);
mesh06.castShadow = true;
mesh06.receiveShadow = true;

//HuesoGrup
    var HuesoGrup = new THREE.Group();
    HuesoGrup.add(mesh02,mesh03,mesh04,mesh05,mesh06);
    
    HuesoGrup.position.set(x,y,z);
         return HuesoGrup;

    }