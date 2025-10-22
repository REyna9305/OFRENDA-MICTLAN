
    import * as THREE from "../js/three.module.js";

    import {TextGeometry} from "../js/TextGeometry.js";
    import {FontLoader} from "../js/FontLoader.js";

    export default function Texto1({x,y,z}){
//---------------------------------------------------------------------Manda a llamar librerias - Scrips

//Luces


//Objetos 3D

    //----------------------------------------------------------------Letra1
    var loader = new FontLoader();
    var font = loader.parse(fontJSON);
    var geometriaT1 = new TextGeometry ('Ofrenda del Mictlan', {

        font: font, 
        size: 5, 
        height: 2,
    });
    geometriaT1.center();
     var materialT1 = new THREE.MeshLambertMaterial({

        color: 0xC7961E, 
        emissive: 0xA37A18, 
        shading:THREE.FlatShading,
     });

    var meshTexto1 = new THREE.Mesh(geometriaT1,materialT1);
    //scene.add(meshTexto1);
    meshTexto1.castShadow = true;
    //----------------------------------------------------------------Letra1

    var TextoGrup = new THREE.Group();
    TextoGrup.add(meshTexto1);

    TextoGrup.position.set(x,y,z);
    return TextoGrup;
   
    }
