    import * as THREE from "../js/three.module.js";

    export default function Cana1({x,y,z}){

    //PALITO DE CAÑA
    var cana = new THREE.Mesh(
    new THREE.CylinderGeometry(0.5, 0.5, 5, 15), // radio superior, radio inferior, altura, segmentos
    new THREE.MeshLambertMaterial({ color: 0x8CD166 }) // color café madera
    );
    cana.position.set(0, 3, 0); // 3 = mitad de la altura para que toque el piso
    //scene.add(caña);
    cana.castShadow = true;
    cana.receiveShadow = true;

    //CañaGrup
    var CanaGrup = new THREE.Group();
    CanaGrup.add(cana);

    CanaGrup.position.set(x,y,z);
    return CanaGrup;

    }

