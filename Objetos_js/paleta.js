import * as THREE from "../js/three.module.js";

export default function Paleta({x,y,z}){

// === PIEZA 1: PALITO DE LA PALETA ===
const palito = new THREE.Mesh(
  new THREE.CylinderGeometry(0.1, 0.1, 3, 16), // radio sup, radio inf, altura, segmentos
  new THREE.MeshLambertMaterial({ color: 0xffffff }) // color blanco
);
palito.position.y = 1.5; // mitad de la altura del palito
//scene.add(palito);
palito.castShadow = true;
palito.receiveShadow = true;

// === PIEZA 2: DULCE DE LA PALETA ===
const dulce = new THREE.Mesh(
  new THREE.SphereGeometry(0.7, 32, 32), // radio y segmentos
  new THREE.MeshLambertMaterial({ color: 0xff0000 }) // rojo brillante
);
dulce.position.y = 3; // encima del palito
//scene.add(dulce);
dulce.castShadow = true;
dulce.receiveShadow = true;

//PaletaGrup
    var PaletaGrup = new THREE.Group();
    PaletaGrup.add(palito,dulce);

    PaletaGrup.position.set(x,y,z);
    return PaletaGrup;
    }