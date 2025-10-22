    import * as THREE from "../js/three.module.js";

    export default function BaseRectangular({x,y,z}){

    
    // Base grande 
    var base = new THREE.Mesh(
      new THREE.BoxGeometry(10, 1, 4),
      new THREE.MeshLambertMaterial({ color: 0x8B4513 }) // café oscuro
    );
    base.position.y = 0.5; 
    base.castShadow = true;
    base.receiveShadow = true;
    //scene.add(base);

    //  Segundo nivel 
    var nivel2 = new THREE.Mesh(
      new THREE.BoxGeometry(8, 1, 3),
      new THREE.MeshLambertMaterial({ color: 0xA0522D }) // café intermedio
    );
    nivel2.position.set(0, 1.5, -0.5);
    nivel2.castShadow = true;
    nivel2.receiveShadow = true;
    //scene.add(nivel2);

    //  Tercer nivel 
    var nivel3 = new THREE.Mesh(
      new THREE.BoxGeometry(6, 1, 2),
      new THREE.MeshLambertMaterial({ color: 0xCD853F }) // café claro
    );
    nivel3.position.set(0, 2.5, -1);
    nivel3.castShadow = true;
    nivel3.receiveShadow = true;
    //scene.add(nivel3);

    //  Altar superior
    var altar = new THREE.Mesh(
      new THREE.BoxGeometry(4, 0.3, 1.5),
      new THREE.MeshLambertMaterial({ color: 0xD2B48C }) // tono arena claro
    );
    altar.position.set(0, 3.15, -1.25);
    altar.castShadow = true;
    altar.receiveShadow = true;
    //scene.add(altar);

    var AltarGrup = new THREE.Group();
    AltarGrup.add(base,nivel2,nivel3,altar);

    AltarGrup.position.set(x,y,z);
    return AltarGrup;

    }
