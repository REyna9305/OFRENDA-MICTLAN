import * as THREE from "../js/three.module.js";

export default function Pan1({x,y,z}){

// Espacio para colocar los objetos

// === BASE DEL PAN ===
var geometryPan = new THREE.SphereGeometry(1.5, 32, 32);
var materialPan = new THREE.MeshLambertMaterial({ color: 0xD2A679 });
var meshPan = new THREE.Mesh(geometryPan, materialPan);
meshPan.scale.set(1, 0.6, 1);
meshPan.position.set(0, 1, 0);
    //scene.add(meshPan);
    meshPan.castShadow = true;
    meshPan.receiveShadow = true;

// === BOLITA SUPERIOR ===
var geometryBolita = new THREE.SphereGeometry(0.3, 16, 16);
var materialBolita = new THREE.MeshLambertMaterial({ color: 0xC68E4E });
var meshBolita = new THREE.Mesh(geometryBolita, materialBolita);
meshBolita.position.set(0, 2, 0);
    //scene.add(meshBolita);
    meshBolita.castShadow = true;
    meshBolita.receiveShadow = true;

// === HUESITO 1 ===
var geometryHuesito1 = new THREE.SphereGeometry(0.2, 16, 16);
var materialHuesito1 = new THREE.MeshLambertMaterial({ color: 0xC68E4E });
var meshHuesito1 = new THREE.Mesh(geometryHuesito1, materialHuesito1);
meshHuesito1.scale.set(1.5, 0.6, 0.6);
meshHuesito1.position.set(0.8, 1.8, 0);
meshHuesito1.rotation.set(0,0,-0.3);
    //scene.add(meshHuesito1);
    meshHuesito1.castShadow = true;
    meshHuesito1.receiveShadow = true;

// === HUESITO 2 ===
var geometryHuesito2 = new THREE.SphereGeometry(0.2, 16, 16);
var materialHuesito2 = new THREE.MeshLambertMaterial({ color: 0xC68E4E });
var meshHuesito2 = new THREE.Mesh(geometryHuesito2, materialHuesito2);
meshHuesito2.scale.set(1.5, 0.6, 0.6);
meshHuesito2.position.set(-0.8, 1.8, 0);
meshHuesito2.rotation.set(0,0,0.3);
    //scene.add(meshHuesito2);
    meshHuesito2.castShadow = true;
    meshHuesito2.receiveShadow = true;

// === HUESITO 3 ===
var geometryHuesito3 = new THREE.SphereGeometry(0.2, 16, 16);
var materialHuesito3 = new THREE.MeshLambertMaterial({ color: 0xC68E4E });
var meshHuesito3 = new THREE.Mesh(geometryHuesito3, materialHuesito3);
meshHuesito3.scale.set(1.5, 0.6, 0.6);
meshHuesito3.position.set(0, 1.8, 0.8);
meshHuesito3.rotation.set(0.3,1.5,0);
    //scene.add(meshHuesito3);
    meshHuesito3.castShadow = true;
    meshHuesito3.receiveShadow = true;

// === HUESITO 4 ===
var geometryHuesito4 = new THREE.SphereGeometry(0.2, 16, 16);
var materialHuesito4 = new THREE.MeshLambertMaterial({ color: 0xC68E4E });
var meshHuesito4 = new THREE.Mesh(geometryHuesito4, materialHuesito4);
meshHuesito4.scale.set(1.5, 0.6, 0.6);
meshHuesito4.position.set(0, 1.8, -0.8);
meshHuesito4.rotation.set(-0.3,1.5,0);
    //scene.add(meshHuesito4);
    meshHuesito4.castShadow = true;
    meshHuesito4.receiveShadow = true;

// === Agregar el grupo del pan a la escena ===
var PanGrup = new THREE.Group();
    PanGrup.add(meshPan,meshBolita,meshHuesito1,meshHuesito2,meshHuesito3,meshHuesito4);
    //scene.add(PanGrup);

// === CLONAR EL GRUPO ===
var PanClon = PanGrup.clone();
    PanClon.position.set(0, 0.9, -1.3); // mover clon a la derecha
    PanClon.rotation.set(0,-1.57,1);
    //scene.add(PanClon);

// === Agregar el grupo del pan a la escena ===
var PanGrup2 = new THREE.Group();
    PanGrup2.add(PanGrup,PanClon);

    PanGrup2.position.set(x,y,z);
         return PanGrup2;
    }
