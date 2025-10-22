    import * as THREE from "../js/three.module.js";

    export default function Dulces1({x,y,z}){

//  DULCES 

//  ALEGRÍA DE AMARANTO
var alegriaGeo = new THREE.CylinderGeometry(1.5, 1.5, 0.5, 32);
var alegriaMat = new THREE.MeshLambertMaterial({ color: 0xE1B16A });
var alegria = new THREE.Mesh(alegriaGeo, alegriaMat);
alegria.position.set(-6, 1, -3);
    //scene.add(alegria);
    alegria.castShadow = true;
    alegria.receiveShadow = true;

// Centro de miel
var centroGeo = new THREE.CylinderGeometry(0.6, 0.6, 0.55, 32);
var centroMat = new THREE.MeshLambertMaterial({ color: 0xD9923B });
var centro = new THREE.Mesh(centroGeo, centroMat);
centro.position.set(-6, 1.02, -3);
    //scene.add(centro);
    centro.castShadow = true;
    centro.receiveShadow = true;


//  GLOBO DE TAMARINDO
var tamarindoGeo = new THREE.SphereGeometry(1.2, 20, 20);
var tamarindoMat = new THREE.MeshLambertMaterial({ color: 0x7B2D0F });
var tamarindo = new THREE.Mesh(tamarindoGeo, tamarindoMat);
tamarindo.position.set(-2, 1.3, -2);
    //scene.add(tamarindo);
    tamarindo.castShadow = true;
    tamarindo.receiveShadow = true;


//  MAZAPÁN
var mazapanGeo = new THREE.CylinderGeometry(1.8, 1.8, 0.4, 32);
var mazapanMat = new THREE.MeshLambertMaterial({ color: 0xEECDA3 });
var mazapan = new THREE.Mesh(mazapanGeo, mazapanMat);
mazapan.position.set(2, 1, -3);
    //scene.add(mazapan);
    mazapan.castShadow = true;
    mazapan.receiveShadow = true;


// PALETA PAYASO
var paletaGeo = new THREE.SphereGeometry(1, 32, 32);
var paletaMat = new THREE.MeshLambertMaterial({ color: 0x0000FF });
var paleta = new THREE.Mesh(paletaGeo, paletaMat);
paleta.position.set(-2, 1.5, 4);
    //scene.add(paleta);
    paleta.castShadow = true;
    paleta.receiveShadow = true;

// Cara simple
var ojoGeo = new THREE.SphereGeometry(0.1, 16, 16);
var ojoMat = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
var ojo1 = new THREE.Mesh(ojoGeo, ojoMat);
var ojo2 = ojo1.clone();
ojo1.position.set(-2.2, 1.8, 3.1);
ojo2.position.set(-1.8, 1.8, 3.1);
    //scene.add(ojo1);
    //scene.add(ojo2);
    ojo1.castShadow = true;
    ojo1.receiveShadow = true;
    ojo2.castShadow = true;
    ojo2.receiveShadow = true;

var narizGeo = new THREE.SphereGeometry(0.15, 16, 16);
var narizMat = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
var nariz = new THREE.Mesh(narizGeo, narizMat);
nariz.position.set(-2, 1.5, 3.1);
    //scene.add(nariz);
    nariz.castShadow = true;
    nariz.receiveShadow = true;

// Palito
var paloGeo = new THREE.CylinderGeometry(0.1, 0.1, 2, 16);
var paloMat = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
var palo = new THREE.Mesh(paloGeo, paloMat);
palo.position.set(-2, 0, 4);
    //scene.add(palo);
    palo.castShadow = true;
    palo.receiveShadow = true;


// CAJETA EN ROLLO
var cajetaGeo = new THREE.TorusGeometry(1.5, 0.4, 16, 100);
var cajetaMat = new THREE.MeshLambertMaterial({ color: 0xA0522D });
var cajeta = new THREE.Mesh(cajetaGeo, cajetaMat);
cajeta.rotation.x = Math.PI / 2;
cajeta.position.set(6, 1, 2);
    //scene.add(cajeta);
    cajeta.castShadow = true;
    cajeta.receiveShadow = true;

// Centro claro
var centroCajetaGeo = new THREE.TorusGeometry(0.9, 0.2, 16, 100);
var centroCajetaMat = new THREE.MeshLambertMaterial({ color: 0xD2B48C });
var centroCajeta = new THREE.Mesh(centroCajetaGeo, centroCajetaMat);
centroCajeta.rotation.x = Math.PI / 2;
centroCajeta.position.set(6, 1.02, 2);
    //scene.add(centroCajeta);
    centroCajeta.castShadow = true;
    centroCajeta.receiveShadow = true;


// CLONES para variedad
var cloneAlegria = alegria.clone();
cloneAlegria.position.set(-8, 1, 2);
    //scene.add(cloneAlegria);

var cloneTamarindo = tamarindo.clone();
cloneTamarindo.position.set(4, 1.3, 3);
    //scene.add(cloneTamarindo);

var DulcesGrup = new THREE.Group();
     DulcesGrup.add(alegria,centro,tamarindo,mazapan,paleta,ojo1,ojo2,nariz,palo,cajeta,centroCajeta,cloneAlegria,cloneTamarindo);
 
     DulcesGrup.position.set(x,y,z);
     return DulcesGrup;
 
}