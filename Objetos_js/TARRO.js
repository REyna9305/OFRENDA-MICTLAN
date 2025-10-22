import * as THREE from "../js/three.module.js";

export default function Tarro({x,y,z}){
// Dibujos 2D
 var geometria03=new THREE.CylinderGeometry(5,2.5,5,30);
    var material03=new THREE.MeshLambertMaterial(
        {
        color:0xD92525,side:THREE.DoubleSide
        }
    );

    var mesh03= new THREE.Mesh (geometria03,material03);
    //scene.add(mesh03);
    mesh03.position.set(0,3,10);
    mesh03.castShadow = true;
    mesh03.receiveShadow = true; 

var geometria03=new THREE.CylinderGeometry(3,5,2,30);
    var material03=new THREE.MeshLambertMaterial(
        {
        color:0xD92525,side:THREE.DoubleSide
        }
    );

    var mesh04= new THREE.Mesh (geometria03,material03);
    //scene.add(mesh04);
    mesh04.position.set(0,6.5,10);
    mesh04.castShadow = true;
    mesh04.receiveShadow = true; 


 //cilindro
   var geometria08 = new THREE.CylinderGeometry(4,3,1,80,80,2,3);
   var material08 = new THREE.MeshLambertMaterial(
    {
        color:0xD92525, side: THREE.DoubleSide
    }
   );

   var mesh08 = new THREE.Mesh(geometria08,material08);
   //scene.add(mesh08);
   mesh08.position.set(0,8,10);
   mesh08.castShadow = true;
   mesh08.receiveShadow = true;

 //TarroGrup
     var TarroGrup = new THREE.Group();
     TarroGrup.add(mesh03,mesh04,mesh08);
 
     TarroGrup.position.set(x,y,z);
     return TarroGrup;
 }