import * as THREE from "../js/three.module.js";

export default function Pilar1({x,y,z}){

// Pilar completo

// Base inferior cuadrada
var geometryBase = new THREE.BoxGeometry(3, 0.5, 3);
var materialBase = new THREE.MeshStandardMaterial({ color: 0x8d6e63 });
var meshBase = new THREE.Mesh(geometryBase, materialBase);
meshBase.position.set(0, 0.25, 0);
meshBase.castShadow = true;
meshBase.receiveShadow = true;
//scene.add(meshBase);

// Cuerpo (cilindro central)
var geometryCuerpo = new THREE.CylinderGeometry(0.8, 0.8, 6, 32);
var materialCuerpo = new THREE.MeshStandardMaterial({ color: 0xbca28b });
var meshCuerpo = new THREE.Mesh(geometryCuerpo, materialCuerpo);
meshCuerpo.position.set(0, 3.5, 0);
meshCuerpo.castShadow = true;
meshCuerpo.receiveShadow = true;
//scene.add(meshCuerpo);

// (cuadro ancho)
var geometryCapitel = new THREE.BoxGeometry(2.5, 0.5, 2.5);
var materialCapitel = new THREE.MeshStandardMaterial({ color: 0x5d4037 });
var meshCapitel = new THREE.Mesh(geometryCapitel, materialCapitel);
meshCapitel.position.set(0, 6.5, 0);
meshCapitel.castShadow = true;
meshCapitel.receiveShadow = true;
//scene.add(meshCapitel);

// clon 
var meshCapitel2 = meshCapitel.clone();
meshCapitel2.position.set(0, 7.2, 0);
meshCapitel2.castShadow = true;
meshCapitel2.receiveShadow = true;
//scene.add(meshCapitel2);

// Cilindros (anillos)
var geometryAnillo = new THREE.CylinderGeometry(1.2, 1.2, 0.4, 32);
var materialAnillo = new THREE.MeshStandardMaterial({ color: 0x9e7b6d });
var meshAnilloSuperior = new THREE.Mesh(geometryAnillo, materialAnillo);
meshAnilloSuperior.position.set(0, 6.2, 0);
meshAnilloSuperior.castShadow = true;
meshAnilloSuperior.receiveShadow = true;
//scene.add(meshAnilloSuperior);

// Clon decorativo inferior
var meshAnilloInferior = meshAnilloSuperior.clone();
meshAnilloInferior.position.set(0, 0.6, 0);
meshAnilloInferior.castShadow = true;
meshAnilloInferior.receiveShadow = true;
//scene.add(meshAnilloInferior);

//GrupPilar
var PilarGrup = new THREE.Group();
    PilarGrup.add(meshBase,meshCuerpo,meshCapitel,meshCapitel2,meshAnilloInferior,meshAnilloSuperior);
    
    PilarGrup.position.set(x,y,z);
    return PilarGrup;

}
