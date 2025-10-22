    import * as THREE from "../js/three.module.js";

    export default function Mosaicos({x,y,z}){

    //------------------------------------------------------------------------------------------------------------------------------------Figura2
    //-------------------------------------------------------------------------------------------------------------Bloque_Inferior
    //---------------------------------------------------------------------------Cubo_00
    var geometriaCubo1_2 = new THREE.BoxGeometry(10,10,10);
        var TexturaCubo1_2 = new THREE.TextureLoader().load("./Texturas_img/Monumento.jpg");

        TexturaCubo1_2.repeat.set(0.33,0.33);
        TexturaCubo1_2.offset.x = 0;
        TexturaCubo1_2.offset.y = 0;

        var materialCubo1_2 = new THREE.MeshLambertMaterial({map:TexturaCubo1_2});

        var meshCubo1_2 = new THREE.Mesh(geometriaCubo1_2,materialCubo1_2);
            //scene.add(meshCubo1_2);
        meshCubo1_2.position.set(60,5,0);
        meshCubo1_2.castShadow = true;
        meshCubo1_2.receiveShadow = true;
    //---------------------------------------------------------------------------Cubo_00

    //---------------------------------------------------------------------------Cubo_10
    var geometriaCubo2_2 = new THREE.BoxGeometry(10,10,10);
        var TexturaCubo2_2 = new THREE.TextureLoader().load("./Texturas_img/Monumento.jpg");

        TexturaCubo2_2.repeat.set(0.33,0.33);
        TexturaCubo2_2.offset.x = 0.33;
        TexturaCubo2_2.offset.y = 0;

        var materialCubo2_2 = new THREE.MeshLambertMaterial({map:TexturaCubo2_2});

        var meshCubo2_2 = new THREE.Mesh(geometriaCubo2_2,materialCubo2_2);
            //scene.add(meshCubo2_2);
        meshCubo2_2.position.set(49,5,0);
        meshCubo2_2.castShadow = true;
        meshCubo2_2.receiveShadow = true;
    //---------------------------------------------------------------------------Cubo_10

    //---------------------------------------------------------------------------Cubo_20
    var geometriaCubo3_2 = new THREE.BoxGeometry(10,10,10);
        var TexturaCubo3_2 = new THREE.TextureLoader().load("./Texturas_img/Monumento.jpg");

        TexturaCubo3_2.repeat.set(0.33,0.33);
        TexturaCubo3_2.offset.x = 0.66;
        TexturaCubo3_2.offset.y = 0;

        var materialCubo3_2 = new THREE.MeshLambertMaterial({map:TexturaCubo3_2});

        var meshCubo3_2 = new THREE.Mesh(geometriaCubo3_2,materialCubo3_2);
            //scene.add(meshCubo3_2);
        meshCubo3_2.position.set(38,5,0);
        meshCubo3_2.castShadow = true;
        meshCubo3_2.receiveShadow = true;
    //---------------------------------------------------------------------------Cubo_20
    //-------------------------------------------------------------------------------------------------------------Bloque_Inferior

    //-------------------------------------------------------------------------------------------------------------Bloque_Medio
    //---------------------------------------------------------------------------Cubo_01
    var geometriaCubo4_2 = new THREE.BoxGeometry(10,10,10);
        var TexturaCubo4_2 = new THREE.TextureLoader().load("./Texturas_img/Monumento.jpg");

        TexturaCubo4_2.repeat.set(0.33,0.33);
        TexturaCubo4_2.offset.x = 0;
        TexturaCubo4_2.offset.y = 0.33;

        var materialCubo4_2 = new THREE.MeshLambertMaterial({map:TexturaCubo4_2});

        var meshCubo4_2 = new THREE.Mesh(geometriaCubo4_2,materialCubo4_2);
            //scene.add(meshCubo4_2);
        meshCubo4_2.position.set(60,16,0);
        meshCubo4_2.castShadow = true;
        meshCubo4_2.receiveShadow = true;
    //---------------------------------------------------------------------------Cubo_01

    //---------------------------------------------------------------------------Cubo_11
    var geometriaCubo5_2 = new THREE.BoxGeometry(10,10,10);
        var TexturaCubo5_2 = new THREE.TextureLoader().load("./Texturas_img/Monumento.jpg");

        TexturaCubo5_2.repeat.set(0.33,0.33);
        TexturaCubo5_2.offset.x = 0.33;
        TexturaCubo5_2.offset.y = 0.33;

        var materialCubo5_2 = new THREE.MeshLambertMaterial({map:TexturaCubo5_2});

        var meshCubo5_2 = new THREE.Mesh(geometriaCubo5_2,materialCubo5_2);
            //scene.add(meshCubo5_2);
        meshCubo5_2.position.set(49,16,0);
        meshCubo5_2.castShadow = true;
        meshCubo5_2.receiveShadow = true;
    //---------------------------------------------------------------------------Cubo_11

    //---------------------------------------------------------------------------Cubo_21
    var geometriaCubo6_2 = new THREE.BoxGeometry(10,10,10);
        var TexturaCubo6_2 = new THREE.TextureLoader().load("./Texturas_img/Monumento.jpg");

        TexturaCubo6_2.repeat.set(0.33,0.33);
        TexturaCubo6_2.offset.x = 0.66;
        TexturaCubo6_2.offset.y = 0.33;

        var materialCubo6_2 = new THREE.MeshLambertMaterial({map:TexturaCubo6_2});

        var meshCubo6_2 = new THREE.Mesh(geometriaCubo6_2,materialCubo6_2);
            //scene.add(meshCubo6_2);
        meshCubo6_2.position.set(38,16,0);
        meshCubo6_2.castShadow = true;
        meshCubo6_2.receiveShadow = true;
    //---------------------------------------------------------------------------Cubo_21
    //-------------------------------------------------------------------------------------------------------------Bloque_Medio

    //-------------------------------------------------------------------------------------------------------------Bloque_Superior
    //---------------------------------------------------------------------------Cubo_02
    var geometriaCubo7_2 = new THREE.BoxGeometry(10,10,10);
        var TexturaCubo7_2 = new THREE.TextureLoader().load("./Texturas_img/Monumento.jpg");

        TexturaCubo7_2.repeat.set(0.33,0.33);
        TexturaCubo7_2.offset.x = 0;
        TexturaCubo7_2.offset.y = 0.66;

        var materialCubo7_2 = new THREE.MeshLambertMaterial({map:TexturaCubo7_2});

        var meshCubo7_2 = new THREE.Mesh(geometriaCubo7_2,materialCubo7_2);
            //scene.add(meshCubo7_2);
        meshCubo7_2.position.set(60,27,0);
        meshCubo7_2.castShadow = true;
        meshCubo7_2.receiveShadow = true;
    //---------------------------------------------------------------------------Cubo_02

    //---------------------------------------------------------------------------Cubo_12
    var geometriaCubo8_2 = new THREE.BoxGeometry(10,10,10);
        var TexturaCubo8_2 = new THREE.TextureLoader().load("./Texturas_img/Monumento.jpg");

        TexturaCubo8_2.repeat.set(0.33,0.33);
        TexturaCubo8_2.offset.x = 0.33;
        TexturaCubo8_2.offset.y = 0.66;

        var materialCubo8_2 = new THREE.MeshLambertMaterial({map:TexturaCubo8_2});

        var meshCubo8_2 = new THREE.Mesh(geometriaCubo8_2,materialCubo8_2);
            //scene.add(meshCubo8_2);
        meshCubo8_2.position.set(49,27,0);
        meshCubo8_2.castShadow = true;
        meshCubo8_2.receiveShadow = true;
    //---------------------------------------------------------------------------Cubo_12

    //---------------------------------------------------------------------------Cubo_22
    var geometriaCubo9_2 = new THREE.BoxGeometry(10,10,10);
        var TexturaCubo9_2 = new THREE.TextureLoader().load("./Texturas_img/Monumento.jpg");

        TexturaCubo9_2.repeat.set(0.33,0.33);
        TexturaCubo9_2.offset.x = 0.66;
        TexturaCubo9_2.offset.y = 0.66;

        var materialCubo9_2 = new THREE.MeshLambertMaterial({map:TexturaCubo9_2});

        var meshCubo9_2 = new THREE.Mesh(geometriaCubo9_2,materialCubo9_2);
            //scene.add(meshCubo9_2);
        meshCubo9_2.position.set(38,27,0);
        meshCubo9_2.castShadow = true;
        meshCubo9_2.receiveShadow = true;
    //---------------------------------------------------------------------------Cubo_22
    //-------------------------------------------------------------------------------------------------------------Bloque_Superior
    //------------------------------------------------------------------------------------------------------------------------------------Figura2
    
    //GrupMosaico

    var MosaicoGrup = new THREE.Group();
    MosaicoGrup.add(meshCubo1_2,meshCubo2_2,meshCubo3_2,meshCubo4_2,meshCubo5_2,meshCubo6_2,meshCubo7_2,meshCubo8_2,meshCubo9_2);
    MosaicoGrup.position.set(x,y,z);
    return MosaicoGrup;
    }
