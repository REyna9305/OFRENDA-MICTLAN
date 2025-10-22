    import * as THREE from "../js/three.module.js";

    export default function Caña1({x,y,z}){

    //PALITO DE CAÑA
    var caña = new THREE.Mesh(
    new THREE.CylinderGeometry(0.5, 0.5, 5, 15), // radio superior, radio inferior, altura, segmentos
    new THREE.MeshLambertMaterial({ color: 0x8CD166 }) // color café madera
    );
    caña.position.set(0, 3, 0); // 3 = mitad de la altura para que toque el piso
    //scene.add(caña);
    caña.castShadow = true;
    caña.receiveShadow = true;

    //CañaGrup
    var CañaGrup = new THREE.Group();
    CañaGrup.add(caña);

    CañaGrup.position.set(x,y,z);
    return CañaGrup;
    }