import * as THREE from "../js/three.module.js";
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"

    export default function Arboles1({x,y,z}){

    //Arbol
    var geometry18 = new RoundedBoxGeometry (2,5,2.5,8,2);
    var material18 = new THREE.MeshLambertMaterial({
    color:0x376B29, side: THREE.DoubleSide
    
});
var mesh24 = new THREE.Mesh(geometry18,material18);
//scene.add(mesh24);
mesh24.position.set(0,0,0);
 
var mesh25 = new THREE.Mesh(geometry18,material18);
//scene.add(mesh25);
mesh25.rotation.set(0,0,0.785);
 
var mesh26 = new THREE.Mesh(geometry18,material18);
//scene.add(mesh26);
mesh26.rotation.set(0,0,1.57);
 
var mesh27 = new THREE.Mesh(geometry18,material18);
//scene.add(mesh27);
mesh27.rotation.set(0,0,2.355);
//grupos
var flor1 = new THREE.Group();
flor1.add(mesh24,mesh25,mesh26,mesh27);
//scene.add(flor1);
flor1.position.set(0,6,-5)


var flor2 = flor1.clone();
//scene.add(flor2);
flor2.position.set(-6,6,0);


var flor3 = flor1.clone();
//scene.add(flor3);
flor3.position.set(7,6,0);

    var geometry19 = new RoundedBoxGeometry (2,6,2,8,2);
    var material19 = new THREE.MeshLambertMaterial({
    color:0x6E4F47, side: THREE.DoubleSide
    });
    var meshT1 = new THREE.Mesh(geometry19,material19);
    //scene.add(meshT1);
    meshT1.position.set(-6,3,0);
 
    var meshT2 = new THREE.Mesh(geometry19,material19);
    //scene.add(meshT2);
    meshT2.position.set(7,3,0);
 
    var meshT3 = new THREE.Mesh(geometry19,material19);
    //scene.add(meshT3);
    meshT3.position.set(0,3,-5);

    //GrupoArboles
    var ArbolesGrup = new THREE.Group();
    ArbolesGrup.add(flor1,flor2,flor3,meshT1,meshT2,meshT3);
    
    ArbolesGrup.position.set(x,y,z);
    return ArbolesGrup;
    }
 