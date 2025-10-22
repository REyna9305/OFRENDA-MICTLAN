import * as THREE from "../js/three.module.js";

export default function PapelPicado2({x,y,z}){

 //Papelpicado1 
 
var geo1 = new THREE.PlaneGeometry(10,6,15,10); 
var txtimg = new THREE.MeshLambertMaterial({
    color: 0x4EB03A , side:THREE.DoubleSide

})
var mesh01 = new THREE.Mesh (geo1,txtimg); 
//scene.add(mesh01); 
mesh01.position.set(5,5,0);
mesh01.castShadow = true;
mesh01.receiveShadow = true; 

//Volanes
var fig02 = new THREE.RingGeometry(6,8,10,10,10,3.14159); 
var mesh02 = new THREE.Mesh(fig02,txtimg)
//scene.add(mesh02);  
mesh02.position.set(.8,2,0);
mesh02.rotation.set(0,0,-.58); 
mesh02.scale.set(.1,.1,.1); 
mesh02.castShadow = true;
mesh02.receiveShadow = true; 

var mesh03 = new THREE.Mesh(fig02,txtimg)
//scene.add(mesh03);  
mesh03.position.set(2.2,2,0);
mesh03.rotation.set(0,0,-.58); 
mesh03.scale.set(.1,.1,.1); 
mesh03.castShadow = true;
mesh03.receiveShadow = true;

var mesh04 = new THREE.Mesh(fig02,txtimg)
//scene.add(mesh04);  
mesh04.position.set(3.6,2,0);
mesh04.rotation.set(0,0,-.58); 
mesh04.scale.set(.1,.1,.1); 
mesh04.castShadow = true;
mesh04.receiveShadow = true;

var mesh05 = new THREE.Mesh(fig02,txtimg)
//scene.add(mesh05);  
mesh05.position.set(5,2,0);
mesh05.rotation.set(0,0,-.58); 
mesh05.scale.set(.1,.1,.1); 
mesh05.castShadow = true;
mesh05.receiveShadow = true;

var mesh06 = new THREE.Mesh(fig02,txtimg)
//scene.add(mesh06);  
mesh06.position.set(6.4,2,0);
mesh06.rotation.set(0,0,-.58); 
mesh06.scale.set(.1,.1,.1); 
mesh06.castShadow = true;
mesh06.receiveShadow = true;

var mesh07 = new THREE.Mesh(fig02,txtimg)
//scene.add(mesh07);  
mesh07.position.set(7.8,2,0);
mesh07.rotation.set(0,0,-.58); 
mesh07.scale.set(.1,.1,.1); 
mesh07.castShadow = true;
mesh07.receiveShadow = true;


var mesh08 = new THREE.Mesh(fig02,txtimg)
//scene.add(mesh08);  
mesh08.position.set(9.2,2,0);
mesh08.rotation.set(0,0,-.58); 
mesh08.scale.set(.1,.1,.1); 
mesh08.castShadow = true;
mesh08.receiveShadow = true;

var Volane =new  THREE.Group();
Volane.add(mesh02,mesh03,mesh04,mesh05,); 
//scene.add(Volane); 

var VOlane02 = Volane.clone(); 
VOlane02.position.set(-2,7.8,0);
VOlane02.rotation.set(0,0,-1.5708);
//scene.add(VOlane02); 

var VOlane03 = Volane.clone(); 
VOlane03.position.set(12,2,0);
VOlane03.rotation.set(0,0,1.5708);
//scene.add(VOlane03); 

var fig03 =new THREE.CircleGeometry (2.5,2.5,1,1,1); 
var mat02 = new THREE.MeshLambertMaterial({
    color:0x615250, side: THREE.DoubleSide
}); 
var mesh09 = new THREE.Mesh(fig03,mat02); 
//scene.add(mesh09); 
mesh09.scale.set(0.25,.25,.1)
mesh09.position.set(1,7,0.01);
mesh09.rotation.set(0,0,-.58);
mesh09.castShadow = true;
mesh09.receiveShadow = true;

var mesh10 = new THREE.Mesh(fig03,mat02); 
//scene.add(mesh10); 
mesh10.scale.set(0.25,.25,.1)
mesh10.position.set(9,7,0.01);
mesh10.rotation.set(0,0,-.58);
mesh10.castShadow = true;
mesh10.receiveShadow = true;

var mesh11 = new THREE.Mesh(fig03,mat02); 
//scene.add(mesh11); 
mesh11.scale.set(0.25,.25,.1)
mesh11.position.set(9,3,0.01);
mesh11.rotation.set(0,0,-.58);
mesh11.castShadow = true;
mesh11.receiveShadow = true;

var mesh12 = new THREE.Mesh(fig03,mat02); 
//scene.add(mesh12); 
mesh12.scale.set(0.25,.25,.1)
mesh12.position.set(1,3,0.01);
mesh12.rotation.set(0,0,-.58);
mesh12.castShadow = true;
mesh12.receiveShadow = true;

//Calabera
var fig04 =new THREE.SphereGeometry (10,10,10,10);
var mesh13 = new THREE.Mesh(fig04, txtimg);
//scene.add (mesh13);
mesh13.scale.set(0.03,.03,.01);
mesh13.position.set(4.3,6,0);
mesh13.castShadow = true;
mesh13.receiveShadow = true;

var mesh14 = new THREE.Mesh(fig04, txtimg);
//scene.add(mesh14);
mesh14.scale.set(0.05,.025,.01);
mesh14.position.set(5.5,6,0);
mesh14.rotation.set(0,0,.65);
mesh14.castShadow = true;
mesh14.receiveShadow = true;


var mesh15 = new THREE.Mesh(fig04, txtimg);
mesh15.scale.set(0.05,.025,.01);
mesh15.position.set(5.5,6,0);
mesh15.rotation.set(0,0,-.65);
//scene.add (mesh15);
mesh15.castShadow = true;
mesh15.receiveShadow = true;

//cabeza
var mesh16 = new THREE.Mesh(fig04, mat02);
//scene.add (mesh16);
mesh16.scale.set(0.175,.175,.005);
mesh16.position.set(5,5.5,0);
mesh16.castShadow = true;
mesh16.receiveShadow = true;

//boca
var mesh17 = new THREE.Mesh(geo1,mat02); 
//scene.add(mesh17); 
mesh17.scale.set(0.2,0.2,2);
mesh17.position.set(5,3.8,0.05);
mesh17.castShadow = true;
mesh17.receiveShadow = true;

//dientes
var mesh18 = new THREE.Mesh(fig02,txtimg)
//scene.add(mesh18);  
mesh18.position.set(4.3,4,0.1);
mesh18.rotation.set(0,0,-.58); 
mesh18.scale.set(.05,.05,.05); 
mesh18.castShadow = true;
mesh18.receiveShadow = true;

var mesh19 = new THREE.Mesh(fig02,txtimg)
//scene.add(mesh19);  
mesh19.position.set(5,4,0.1);
mesh19.rotation.set(0,0,-.58); 
mesh19.scale.set(.05,.05,.05); 
mesh19.castShadow = true;
mesh19.receiveShadow = true;

var mesh20 = new THREE.Mesh(fig02,txtimg)
//scene.add(mesh20);  
mesh20.position.set(5.7,4,0.1);
mesh20.rotation.set(0,0,-.58); 
mesh20.scale.set(.05,.05,.05);
mesh20.castShadow = true;
mesh20.receiveShadow = true;

var mesh21 = new THREE.Mesh(fig04, txtimg);
mesh21.scale.set(0.05,.025,.01);
mesh21.position.set(5,5,0);
mesh21.rotation.set(0,0,-1.5);
//scene.add (mesh21);
mesh21.castShadow = true;
mesh21.receiveShadow = true;

//PPGrup
    var PPGrup2 = new THREE.Group();
    PPGrup2.add(mesh01,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh17,mesh18,mesh19,mesh20,mesh21,Volane,VOlane02,VOlane03);

    PPGrup2.position.set(x,y,z);
         return PPGrup2;
    }
