    import * as THREE from "../js/three.module.js";

    export default function Manzana({x,y,z}){

    var manzana = new THREE.Mesh(
      new THREE.SphereGeometry(6, 32, 32),
      new THREE.MeshLambertMaterial({ color: 0xE30B17 })
    );
    manzana.position.y = 6;
        //scene.add(manzana);
        manzana.castShadow = true;
        manzana.receiveShadow = true;

    var tallo = new THREE.Mesh(
      new THREE.CylinderGeometry(0.5, 0.5, 3, 12),
      new THREE.MeshLambertMaterial({ color: 0x4B2E05 })
    );
    tallo.position.set(0, 11, 0);
        //scene.add(tallo);
        tallo.castShadow = true;
        tallo.receiveShadow = true;

    var ManzanaGrup = new THREE.Group();
         ManzanaGrup.add(manzana,tallo);
     
         ManzanaGrup.position.set(x,y,z);
         return ManzanaGrup;
    }
