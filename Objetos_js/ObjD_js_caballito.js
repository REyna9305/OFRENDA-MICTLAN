    import * as THREE from "../js/three.module.js";

    export default function Caballito({x,y,z}){

    // Caballito
    var vaso = new THREE.Mesh(
      new THREE.CylinderGeometry(4, 4.5, 12, 32, 1, true),
      new THREE.MeshLambertMaterial({ color: 0xffffff, opacity: 0.6, transparent: true })
    );
    vaso.position.set(0, 6, 0);
        //scene.add(vaso);
        vaso.castShadow = true;
        vaso.receiveShadow = true;

    var tequila = new THREE.Mesh(
      new THREE.CylinderGeometry(3.8, 4.3, 8, 32),
      new THREE.MeshLambertMaterial({ color: 0xF4C542 })
    );
    tequila.position.set(0, 4, 0);
        //scene.add(tequila);
        tequila.castShadow = true;
        tequila.receiveShadow = true;

    var base = new THREE.Mesh(
      new THREE.CylinderGeometry(5, 5, 1, 32),
      new THREE.MeshLambertMaterial({ color: 0x8B4513 })
    );
    base.position.set(0, 0.5, 0);
        //scene.add(base);
        base.castShadow = true;
        base.receiveShadow = true;

    var CaballitoGrup = new THREE.Group();
     CaballitoGrup.add(vaso,tequila,base);
 
     CaballitoGrup.position.set(x,y,z);
     return CaballitoGrup;
 
     }
