    import * as THREE from "../js/three.module.js";

    export default function Techo1({x,y,z}){
    //-----------------------------------------------------------------------------------------------------TechoBase1
    var geometryBaseT = new THREE.CylinderGeometry(60,70,10,4);
    var materialBaseT = new THREE.MeshLambertMaterial({ color: 0x5C4827 });
    var meshBaseTecho1 = new THREE.Mesh(geometryBaseT, materialBaseT);
    meshBaseTecho1.position.set(0,50,0);
    meshBaseTecho1.rotation.set(0,2.35,0);
    meshBaseTecho1.castShadow = true;
    meshBaseTecho1.receiveShadow = true;
    //scene.add(meshBaseTecho1);
    //-----------------------------------------------------------------------------------------------------TechoBase1

    //-----------------------------------------------------------------------------------------------------TechoBase2
    var geometryBaseT2 = new THREE.CylinderGeometry(35,50,20,4);
    var materialBaseT2 = new THREE.MeshLambertMaterial({ color: 0x5C4827 });
    var meshBaseTecho2 = new THREE.Mesh(geometryBaseT2, materialBaseT2);
    meshBaseTecho2.position.set(0,55,0);
    meshBaseTecho2.rotation.set(0,2.35,0);
    meshBaseTecho2.castShadow = true;
    meshBaseTecho2.receiveShadow = true;
    //scene.add(meshBaseTecho2);
    //-----------------------------------------------------------------------------------------------------TechoBase2

    //GrupPilar
    var TechoGrup = new THREE.Group();
    TechoGrup.add(meshBaseTecho1,meshBaseTecho2);
 
    TechoGrup.position.set(x,y,z);
    return TechoGrup;
    }
