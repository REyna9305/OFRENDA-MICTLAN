    import * as THREE from "../js/three.module.js";

    export default function Copalera1({x,y,z}){

    
    //--------------------------------------------------------------------------------------------------------------------------Figura1_Copal
    //---------------------------------------------------------------------------BaseTubo
    var geometriaTubo = new THREE.CylinderGeometry(1,2,5,15);
    var materialTubo = new THREE.MeshLambertMaterial(
        {
            color:0x404040, side: THREE.DoubleSide
        }
    );
    var meshTubo = new THREE.Mesh(geometriaTubo,materialTubo);
    //scene.add(meshTubo);
    meshTubo.position.set(0,5,0);
    meshTubo.castShadow = true;
    meshTubo.receiveShadow = true;
    //---------------------------------------------------------------------------BaseTubo

    //---------------------------------------------------------------------------Copa
    var geometriaCopa = new THREE.SphereGeometry(2.5,15,15,0,3.1);
    var materialCopa = new THREE.MeshLambertMaterial(
        {
            color:0x404040, side: THREE.DoubleSide
        }
    );
    var meshCopa = new THREE.Mesh(geometriaCopa,materialCopa);
    //scene.add(meshCopa);
    meshCopa.position.set(0,9.5,0);
    meshCopa.rotation.set(1.57,0,0);
    meshCopa.castShadow = true;
    meshCopa.receiveShadow = true;
    //---------------------------------------------------------------------------Copa

    //---------------------------------------------------------------------------Copa_PSuperior1
    var geometriaCopaS1 = new THREE.TorusGeometry(5,1,20,50);
    var materialCopaS1 = new THREE.MeshLambertMaterial(
        {
            color:0x404040, side: THREE.DoubleSide
        }
    );
    var meshCopaS1 = new THREE.Mesh(geometriaCopaS1,materialCopaS1);
    //scene.add(meshCopaS1);
    meshCopaS1.position.set(0,9.5,0);
    meshCopaS1.rotation.set(1.57,0,0);
    meshCopaS1.scale.set(0.5,0.5,0.25);
    meshCopaS1.castShadow = true;
    meshCopaS1.receiveShadow = true;
    //---------------------------------------------------------------------------Copa_PSuperior1

    //---------------------------------------------------------------------------Copa_PSuperior2
    var geometriaCopaS2 = new THREE.TorusGeometry(5,1,20,50);
    var materialCopaS2 = new THREE.MeshLambertMaterial(
        {
            color:0x404040, side: THREE.DoubleSide
        }
    );
    var meshCopaS2 = new THREE.Mesh(geometriaCopaS2,materialCopaS2);
    //scene.add(meshCopaS2);
    meshCopaS2.position.set(0,7.3,0);
    meshCopaS2.rotation.set(1.57,0,0);
    meshCopaS2.scale.set(0.25,0.25,0.25);
    meshCopaS2.castShadow = true;
    meshCopaS2.receiveShadow = true;
    //---------------------------------------------------------------------------Copa_PSuperior2

    //---------------------------------------------------------------------------BaseInferior1
    var geometriaBaseIn1 = new THREE.CylinderGeometry(5.5,7,2,20);
    var materialBaseIn1 = new THREE.MeshLambertMaterial(
        {
            color:0x404040, side: THREE.DoubleSide
        }
    );
    var meshBaseIn1 = new THREE.Mesh(geometriaBaseIn1,materialBaseIn1);
    //scene.add(meshBaseIn1);
    meshBaseIn1.position.set(0,2.5,0);
    meshBaseIn1.scale.set(0.4,0.4,0.4);
    meshBaseIn1.castShadow = true;
    meshBaseIn1.receiveShadow = true;
    //---------------------------------------------------------------------------BaseInferior1

    //---------------------------------------------------------------------------BaseInferior1
    var geometriaBaseIn2 = new THREE.CylinderGeometry(6,7,2,20);
    var materialBaseIn2 = new THREE.MeshLambertMaterial(
        {
            color:0x404040, side: THREE.DoubleSide
        }
    );
    var meshBaseIn2 = new THREE.Mesh(geometriaBaseIn2,materialBaseIn2);
    //scene.add(meshBaseIn2);
    meshBaseIn2.position.set(0,1.7,0);
    meshBaseIn2.scale.set(0.5,0.5,0.5);
    meshBaseIn2.castShadow = true;
    meshBaseIn2.receiveShadow = true;
    //---------------------------------------------------------------------------BaseInferior1

    //----------------------------------------------------------------------------------------------Agrupacion1_Copal
    var CopalGrup = new THREE.Group();
    CopalGrup.add(meshBaseIn1,meshBaseIn2,meshCopa,meshCopaS1,meshCopaS2,meshTubo);

    CopalGrup.position.set(x,y,z);
    return CopalGrup;
    //----------------------------------------------------------------------------------------------Agrupacion1_Copal
    //--------------------------------------------------------------------------------------------------------------------------Figura1_Copal
    }