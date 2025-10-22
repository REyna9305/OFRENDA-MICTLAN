import * as THREE from "../js/three.module.js";

export default function Plato({x,y,z}){

//  PLATO SIMPLE 
const plato = new THREE.Mesh(
  new THREE.CylinderGeometry(5, 5, 0.2, 32), // radio superior, radio inferior, altura, segmentos
  new THREE.MeshLambertMaterial({ color: 0xaaaaaa }) // gris claro
);
plato.position.y = 0.1; 
//scene.add(plato);
plato.castShadow = true;
plato.receiveShadow = true;

//PlatoGrup
    var PlatoGrup = new THREE.Group();
    PlatoGrup.add(plato);

    PlatoGrup.position.set(x,y,z);
    return PlatoGrup;
}