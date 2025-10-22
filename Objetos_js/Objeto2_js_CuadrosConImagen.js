    import * as THREE from "../js/three.module.js";

    export default function MarcoFotosVarias({x,y,z}){
    //--------------------------------------------------------------------------------------------------------------------------Figura2_Retrato

    //--------------------------------------------------------------------------------------------Int1
    //---------------------------------------------------------------------------FondoMarcoInt
    var geometriaMInt = new THREE.BoxGeometry(0.5,20,15);

    var texture = new THREE.TextureLoader().load("./Texturas_img/Img_Dani.jpg");
    var materialMInt1 = new THREE.MeshLambertMaterial({map: texture });
    var meshMInt1 = new THREE.Mesh(geometriaMInt,materialMInt1);
    texture.wrapS=THREE.RepeatWrapping;
    texture.wrapT=THREE.RepeatWrapping;

    //scene.add(meshMInt1);

    meshMInt1.position.set(0,15,0);
    meshMInt1.rotation.set(0,1.57,0);
    meshMInt1.castShadow = true;
    meshMInt1.receiveShadow = true;
    //---------------------------------------------------------------------------FondoMarcoInt
    //--------------------------------------------------------------------------------------------Int1

    //--------------------------------------------------------------------------------------------Int2
    //---------------------------------------------------------------------------FondoMarcoInt
    var geometriaMInt = new THREE.BoxGeometry(0.5,20,15);

    var texture = new THREE.TextureLoader().load("./Texturas_img/Img_Karla.jpg");
    var materialMInt2 = new THREE.MeshLambertMaterial({map: texture });
    var meshMInt2 = new THREE.Mesh(geometriaMInt,materialMInt2);
    texture.wrapS=THREE.RepeatWrapping;
    texture.wrapT=THREE.RepeatWrapping;

    //scene.add(meshMInt2);

    meshMInt2.position.set(0,15,0);
    meshMInt2.rotation.set(0,1.57,0);
    meshMInt2.castShadow = true;
    meshMInt2.receiveShadow = true;
    //---------------------------------------------------------------------------FondoMarcoInt
    //--------------------------------------------------------------------------------------------Int2

    //--------------------------------------------------------------------------------------------Int3
    //---------------------------------------------------------------------------FondoMarcoInt
    var geometriaMInt = new THREE.BoxGeometry(0.5,20,15);

    var texture = new THREE.TextureLoader().load("./Texturas_img/Img_Kary.jpg");
    var materialMInt3 = new THREE.MeshLambertMaterial({map: texture });
    var meshMInt3 = new THREE.Mesh(geometriaMInt,materialMInt3);
    texture.wrapS=THREE.RepeatWrapping;
    texture.wrapT=THREE.RepeatWrapping;

    //scene.add(meshMInt3);

    meshMInt3.position.set(0,15,0);
    meshMInt3.rotation.set(0,1.57,0);
    meshMInt3.castShadow = true;
    meshMInt3.receiveShadow = true;
    //---------------------------------------------------------------------------FondoMarcoInt
    //--------------------------------------------------------------------------------------------Int3

    //--------------------------------------------------------------------------------------------Int4
    //---------------------------------------------------------------------------FondoMarcoInt
    var geometriaMInt = new THREE.BoxGeometry(0.5,20,15);

    var texture = new THREE.TextureLoader().load("./Texturas_img/Img_Brenda2.jpg");
    var materialMInt4 = new THREE.MeshLambertMaterial({map: texture });
    var meshMInt4 = new THREE.Mesh(geometriaMInt,materialMInt4);
    texture.wrapS=THREE.RepeatWrapping;
    texture.wrapT=THREE.RepeatWrapping;

    //scene.add(meshMInt4);

    meshMInt4.position.set(0,15,0);
    meshMInt4.rotation.set(0,1.57,0);
    meshMInt4.castShadow = true;
    meshMInt4.receiveShadow = true;
    //---------------------------------------------------------------------------FondoMarcoInt
    //--------------------------------------------------------------------------------------------Int4

    //---------------------------------------------------------------------------FondoMarcoExt
    var geometriaMExt = new THREE.BoxGeometry(1,25,20);
    var materialMExt = new THREE.MeshLambertMaterial(
        {
            color:0x6E5C36, side: THREE.DoubleSide
        }
    );
    var meshMExt = new THREE.Mesh(geometriaMExt,materialMExt);
    //scene.add(meshMExt);
    meshMExt.position.set(0,15,-0.6);
    meshMExt.rotation.set(0,1.57,0);
    meshMExt.castShadow = true;
    meshMExt.receiveShadow = true;
    //---------------------------------------------------------------------------FondoMarcoExt

    //---------------------------------------------------------------------------MarcoPiezaSup
    var geometriaPS = new THREE.BoxGeometry(1,3,20);
    var materialPS = new THREE.MeshLambertMaterial(
        {
            color:0x6E5C36, side: THREE.DoubleSide
        }
    );
    var meshPS = new THREE.Mesh(geometriaPS,materialPS);
    //scene.add(meshPS);
    meshPS.position.set(0,26,0.4);
    meshPS.rotation.set(0,1.57,0);
    meshPS.castShadow = true;
    meshPS.receiveShadow = true;
    //---------------------------------------------------------------------------MarcoPiezaSup

    //---------------------------------------------------------------------------MarcoPiezaInf
    var geometriaPI = new THREE.BoxGeometry(1,3,20);
    var materialPI = new THREE.MeshLambertMaterial(
        {
            color:0x6E5C36, side: THREE.DoubleSide
        }
    );
    var meshPI = new THREE.Mesh(geometriaPI,materialPI);
    //scene.add(meshPI);
    meshPI.position.set(0,4,0.4);
    meshPI.rotation.set(0,1.57,0);
    meshPI.castShadow = true;
    meshPI.receiveShadow = true;
    //---------------------------------------------------------------------------MarcoPiezaInf

    //---------------------------------------------------------------------------MarcoPiezaIzq
    var geometriaPIzq = new THREE.BoxGeometry(1,19,3);
    var materialPIzq = new THREE.MeshLambertMaterial(
        {
            color:0x6E5C36, side: THREE.DoubleSide
        }
    );
    var meshPIzq = new THREE.Mesh(geometriaPIzq,materialPIzq);
    //scene.add(meshPIzq);
    meshPIzq.position.set(-8.5,15,0.4);
    meshPIzq.rotation.set(0,1.57,0);
    meshPIzq.castShadow = true;
    meshPIzq.receiveShadow = true;
    //---------------------------------------------------------------------------MarcoPiezaIzq

    //---------------------------------------------------------------------------MarcoPiezaDer
    var geometriaPDer = new THREE.BoxGeometry(1,19,3);
    var materialPDer = new THREE.MeshLambertMaterial(
        {
            color:0x6E5C36, side: THREE.DoubleSide
        }
    );
    var meshPDer = new THREE.Mesh(geometriaPDer,materialPDer);
    //scene.add(meshPDer);
    meshPDer.position.set(8.5,15,0.4);
    meshPDer.rotation.set(0,1.57,0);
    meshPDer.castShadow = true;
    meshPDer.receiveShadow = true;
    //---------------------------------------------------------------------------MarcoPiezaDer

    //---------------------------------------------------------------------------MarcoPata
    var geometriaPata = new THREE.BoxGeometry(1,17,6);
    var materialPata = new THREE.MeshLambertMaterial(
        {
            color:0x6E5C36, side: THREE.DoubleSide
        }
    );
    var meshPata = new THREE.Mesh(geometriaPata,materialPata);
    //scene.add(meshPata);
    meshPata.rotation.set(0.22,1.57,0);
    meshPata.castShadow = true;
    meshPata.receiveShadow = true;
    //---------------------------------------------------------------------------MarcoPata

    

    //---------------------------------------------------------------------------ClonMarcoPata2
    var meshPata3 = meshPata.clone();
    //scene.add(meshPata3);
    meshPata3.rotation.set(0.22,1.57,0);
    meshPata3.position.set(0,10.5,0.5);
    meshPata3.castShadow = true;
    meshPata3.receiveShadow = true;
    //---------------------------------------------------------------------------ClonMarcoPata2

    //---------------------------------------------------------------------------ClonMarcoPata3
    var meshPata4 = meshPata.clone();
    //scene.add(meshPata4);
    meshPata4.rotation.set(0.22,1.57,0);
    meshPata4.position.set(0,10.5,0.5);
    meshPata4.castShadow = true;
    meshPata4.receiveShadow = true;
    //---------------------------------------------------------------------------ClonMarcoPata3

    //-----------------------------------------------------------------------------------------------------------------Pieza1_Izquierda
    //----------------------------------------------------------------------------------------------Agrupacion1_Marco
    var MarcoGrupPI1 = new THREE.Group();
    MarcoGrupPI1.add(meshMExt,meshPI,meshPS,meshPIzq,meshPDer);
    //scene.add(MarcoGrupPI1);
    MarcoGrupPI1.castShadow = true;
    MarcoGrupPI1.receiveShadow = true;
    //----------------------------------------------------------------------------------------------Agrupacion1_Marco

    //----------------------------------------------------------------------------------------------ClonMarco1
    var MarcoGrupI1 = MarcoGrupPI1.clone();
    //scene.add(MarcoGrupI1);
    MarcoGrupI1.castShadow = true;
    MarcoGrupI1.receiveShadow = true;
    //----------------------------------------------------------------------------------------------ClonMarco1

    //----------------------------------------------------------------------------------------------Agrupacion2_Marco
    var MarcoGrupPI2 = new THREE.Group();
    MarcoGrupPI2.add(MarcoGrupI1,meshMInt1);
    //scene.add(MarcoGrupPI2);
    MarcoGrupPI2.position.set(0,0,0);
    MarcoGrupPI2.rotation.set(-0.2,0,0);
    MarcoGrupPI2.castShadow = true;
    MarcoGrupPI2.receiveShadow = true;
    //----------------------------------------------------------------------------------------------Agrupacion2_Marco

    //----------------------------------------------------------------------------------------------ClonMarcoPata1
    var meshPata1 = meshPata.clone();
    //scene.add(meshPata1);
    meshPata1.rotation.set(0.22,1.57,0);
    meshPata1.position.set(0,10.5,-6.5);
    meshPata1.castShadow = true;
    meshPata1.receiveShadow = true;
    //----------------------------------------------------------------------------------------------ClonMarcoPata1

    //----------------------------------------------------------------------------------------------Agrupacion3_Marco_Completo
    var MarcoGrupPI3 = new THREE.Group();
    MarcoGrupPI3.add(MarcoGrupPI2,meshPata1);
    //scene.add(MarcoGrupPI3);
    MarcoGrupPI3.position.set(-20,0,0);
    MarcoGrupPI3.rotation.set(0,0.5,0);
    MarcoGrupPI3.castShadow = true;
    MarcoGrupPI3.receiveShadow = true;
    //----------------------------------------------------------------------------------------------Agrupacion3_Marco_Completo
    //-----------------------------------------------------------------------------------------------------------------Pieza1_Izquierda

    //-----------------------------------------------------------------------------------------------------------------Pieza2_Derecho
    //----------------------------------------------------------------------------------------------Agrupacion1_Marco
    var MarcoGrupPD1 = new THREE.Group();
    MarcoGrupPD1.add(meshMExt,meshPI,meshPS,meshPIzq,meshPDer);
    //scene.add(MarcoGrupPD1);
    MarcoGrupPD1.castShadow = true;
    MarcoGrupPD1.receiveShadow = true;
    //----------------------------------------------------------------------------------------------Agrupacion1_Marco

    //----------------------------------------------------------------------------------------------ClonMarco1
    var MarcoGrupD1 = MarcoGrupPD1.clone();
    //scene.add(MarcoGrupD1);
    MarcoGrupD1.castShadow = true;
    MarcoGrupD1.receiveShadow = true;
    //----------------------------------------------------------------------------------------------ClonMarco1

    //----------------------------------------------------------------------------------------------Agrupacion2_Marco
    var MarcoGrupPD2 = new THREE.Group();
    MarcoGrupPD2.add(MarcoGrupD1,meshMInt2);
    //scene.add(MarcoGrupPD2);
    MarcoGrupPD2.position.set(0,0,0);
    MarcoGrupPD2.rotation.set(-0.2,0,0);
    MarcoGrupPD2.castShadow = true;
    MarcoGrupPD2.receiveShadow = true;
    //----------------------------------------------------------------------------------------------Agrupacion2_Marco

    //----------------------------------------------------------------------------------------------ClonMarcoPata2
    var meshPata2 = meshPata.clone();
    //scene.add(meshPata2);
    meshPata2.rotation.set(0.22,1.57,0);
    meshPata2.position.set(0,10.5,-6.5);
    meshPata2.castShadow = true;
    meshPata2.receiveShadow = true;
    //----------------------------------------------------------------------------------------------ClonMarcoPata2

    //----------------------------------------------------------------------------------------------Agrupacion3_Marco_Completo
    var MarcoGrupPD3 = new THREE.Group();
    MarcoGrupPD3.add(MarcoGrupPD2,meshPata2);
    //scene.add(MarcoGrupPD3);
    MarcoGrupPD3.position.set(20,0,0);
    MarcoGrupPD3.rotation.set(0,-0.5,0);
    MarcoGrupPD3.castShadow = true;
    MarcoGrupPD3.receiveShadow = true;
    //----------------------------------------------------------------------------------------------Agrupacion3_Marco_Completo
    //-----------------------------------------------------------------------------------------------------------------Pieza2_Derecho

    //-----------------------------------------------------------------------------------------------------------------Pieza3_IzquierdoCentral
    //----------------------------------------------------------------------------------------------Agrupacion1_Marco
    var MarcoGrupPIC1 = new THREE.Group();
    MarcoGrupPIC1.add(meshMExt,meshPI,meshPS,meshPIzq,meshPDer);
    //scene.add(MarcoGrupPIC1);
    MarcoGrupPIC1.castShadow = true;
    MarcoGrupPIC1.receiveShadow = true;
    //----------------------------------------------------------------------------------------------Agrupacion1_Marco

    //----------------------------------------------------------------------------------------------ClonMarco1
    var MarcoGrupIC1 = MarcoGrupPIC1.clone();
    //scene.add(MarcoGrupIC1);
    MarcoGrupIC1.castShadow = true;
    MarcoGrupIC1.receiveShadow = true;
    //----------------------------------------------------------------------------------------------ClonMarco1

    //----------------------------------------------------------------------------------------------Agrupacion2_Marco
    var MarcoGrupPIC2 = new THREE.Group();
    MarcoGrupPIC2.add(MarcoGrupIC1,meshMInt3);
    //scene.add(MarcoGrupPIC2);
    MarcoGrupPIC2.position.set(-15,12,0);
    MarcoGrupPIC2.rotation.set(-0.2,0,-1.57);
    MarcoGrupPIC2.castShadow = true;
    MarcoGrupPIC2.receiveShadow = true;
    //----------------------------------------------------------------------------------------------Agrupacion2_Marco

    //----------------------------------------------------------------------------------------------ClonMarcoPata3
    var meshPata3 = meshPata.clone();
    //scene.add(meshPata3);
    meshPata3.rotation.set(0.22,1.57,0);
    meshPata3.position.set(0,10.5,-4);
    meshPata3.castShadow = true;
    meshPata3.receiveShadow = true;
    //----------------------------------------------------------------------------------------------ClonMarcoPata3

    //----------------------------------------------------------------------------------------------Agrupacion3_Marco_Completo
    var MarcoGrupPIC3 = new THREE.Group();
    MarcoGrupPIC3.add(MarcoGrupPIC2,meshPata3);
    //scene.add(MarcoGrupPIC3);
    MarcoGrupPIC3.position.set(-10,0,2);
    MarcoGrupPIC3.rotation.set(0,0.5,0);
    MarcoGrupPIC3.scale.set(0.65,0.65,0.65);
    MarcoGrupPIC3.castShadow = true;
    MarcoGrupPIC3.receiveShadow = true;
    //----------------------------------------------------------------------------------------------Agrupacion3_Marco_Completo
    //-----------------------------------------------------------------------------------------------------------------Pieza3_IzquierdoCentral

    //-----------------------------------------------------------------------------------------------------------------Pieza4_DerechoCentral
    //----------------------------------------------------------------------------------------------Agrupacion1_Marco
    var MarcoGrupPDC1 = new THREE.Group();
    MarcoGrupPDC1.add(meshMExt,meshPI,meshPS,meshPIzq,meshPDer);
    //scene.add(MarcoGrupPDC1);
    MarcoGrupPDC1.castShadow = true;
    MarcoGrupPDC1.receiveShadow = true;
    //----------------------------------------------------------------------------------------------Agrupacion1_Marco

    //----------------------------------------------------------------------------------------------ClonMarco1
    var MarcoGrupDC1 = MarcoGrupPDC1.clone();
    //scene.add(MarcoGrupDC1);
    MarcoGrupDC1.castShadow = true;
    MarcoGrupDC1.receiveShadow = true;
    //----------------------------------------------------------------------------------------------ClonMarco1

    //----------------------------------------------------------------------------------------------Agrupacion2_Marco
    var MarcoGrupPDC2 = new THREE.Group();
    MarcoGrupPDC2.add(MarcoGrupDC1,meshMInt4);
    //scene.add(MarcoGrupPDC2);
    MarcoGrupPDC2.position.set(-15,12,0);
    MarcoGrupPDC2.rotation.set(-0.2,0,-1.57);
    MarcoGrupPDC2.castShadow = true;
    MarcoGrupPDC2.receiveShadow = true;
    //----------------------------------------------------------------------------------------------Agrupacion2_Marco

    //----------------------------------------------------------------------------------------------ClonMarcoPata3
    var meshPata4 = meshPata.clone();
    //scene.add(meshPata4);
    meshPata4.rotation.set(0.22,1.57,0);
    meshPata4.position.set(0,10.5,-4);
    meshPata4.castShadow = true;
    meshPata4.receiveShadow = true;
    //----------------------------------------------------------------------------------------------ClonMarcoPata3

    //----------------------------------------------------------------------------------------------Agrupacion3_Marco_Completo
    var MarcoGrupPDC3 = new THREE.Group();
    MarcoGrupPDC3.add(MarcoGrupPDC2,meshPata4);
    //scene.add(MarcoGrupPDC3);
    MarcoGrupPDC3.position.set(10,0,2);
    MarcoGrupPDC3.rotation.set(0,-0.5,0);
    MarcoGrupPDC3.scale.set(0.65,0.65,0.65);
    MarcoGrupPDC3.castShadow = true;
    MarcoGrupPDC3.receiveShadow = true;
    //----------------------------------------------------------------------------------------------Agrupacion3_Marco_Completo
    //-----------------------------------------------------------------------------------------------------------------Pieza4_DerechoCentral

    //-----------------------------------------------------------------------------------------------------------------Grupo_4Piezas
    var MarcoGrupMarcos = new THREE.Group();
    MarcoGrupMarcos.add(MarcoGrupPI3,MarcoGrupPD3,MarcoGrupPIC3,MarcoGrupPDC3);

    MarcoGrupMarcos.position.set(x,y,z);
    return MarcoGrupMarcos;
    //-----------------------------------------------------------------------------------------------------------------Grupo_4Piezas

    //--------------------------------------------------------------------------------------------------------------------------Figura2_Retrato
    }