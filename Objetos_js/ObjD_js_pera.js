import * as THREE from "../js/three.module.js";

export default function Pera1({x,y,z}){

    //  Material de la pera
    var matPera = new THREE.MeshLambertMaterial({ color: 0x9ACD32 });

    //  Geometrías de pera
    var geoInf = new THREE.SphereGeometry(6, 32, 32);
    var geoSup = new THREE.SphereGeometry(4, 32, 32);

    //  Mallas de la pera
    var peraInf = new THREE.Mesh(geoInf, matPera);
    peraInf.position.y = 6;

    var peraSup = new THREE.Mesh(geoSup, matPera);
    peraSup.position.y = 11;

    //  Agrupar las partes en una sola pera
    var pera = new THREE.Group();
    pera.add(peraInf,peraSup);
    pera.castShadow = true;
    pera.receiveShadow = true;

    //  Añadir al escenario
      //scene.add(pera);
      

    //  Clonar la pera
    var peraClon = pera.clone();
    peraClon.position.set(15, 8, 2); // moverla un poco al lado
    peraClon.rotation.set(1.57,0.5,1);
      //scene.add(peraClon);

    //  Agrupar las partes en una sola peraCompleta
    var PeraGrup = new THREE.Group();
    PeraGrup.add(pera,peraClon);

    PeraGrup.position.set(x,y,z);
         return PeraGrup;

    }

