import * as THREE from "../js/three.module.js";

    export default function Botella({x,y,z}){

    //cuerpo de botella
    var geometry02 = new THREE.CylinderGeometry (6, 6, 35, 50, 8, false, 6.28);
    var texture = new THREE.TextureLoader().load("./Texturas_img/vidrio.jpg");
    var material02 = new THREE.MeshLambertMaterial({map: texture });
    var mesh02 = new THREE.Mesh(geometry02,material02);
        //scene.add(mesh02);
    mesh02.position.set(1,32.5,-7);
    mesh02.castShadow = true;
    mesh02.receiveShadow = true;
    texture.wrapS=THREE.RepeatWrapping;
    texture.wrapT=THREE.RepeatWrapping;

    var geometry03 = new THREE.CylinderGeometry (3.5, 6, 5, 50, 8, false, 6.28);
    var material03 = new THREE.MeshLambertMaterial({color:0x224D22 , side: THREE.DoubleSide });
    var mesh03 = new THREE.Mesh(geometry03,material03);
        //scene.add(mesh03);
    mesh03.position.set(1,52.5,-7);
    mesh03.castShadow = true;
    mesh03.receiveShadow = true;

    var geometry04 = new THREE.CylinderGeometry (3,3.5, 20, 50, 8, false, 6.28);
    var material02 = new THREE.MeshLambertMaterial({color:0x224D22 , side: THREE.DoubleSide });
    var mesh04 = new THREE.Mesh(geometry04,material02);
        //scene.add(mesh04);
    mesh04.position.set(1,57.5,-7);
    mesh04.castShadow = true;
    mesh04.receiveShadow = true;
    
    //tapa
    var geometry05 = new THREE.CylinderGeometry (3.5,3.5,5, 50, 8, false, 6.28);
    var material04 = new THREE.MeshLambertMaterial({color:0x637063 , side: THREE.DoubleSide });
    var mesh05 = new THREE.Mesh(geometry05,material04);
        //scene.add(mesh05);
    mesh05.position.set(1,70,-7);
    mesh05.castShadow = true;
    mesh05.receiveShadow = true;
 
    //etiqueta 
    var geometry06 = new THREE.CylinderGeometry (6,6,15, 50, 8, true, 5.3, 2);
    var texture02 = new THREE.TextureLoader().load("./Texturas_img/etiqueta1.png");
    var material05 = new THREE.MeshLambertMaterial({map: texture02 });
    var mesh06 = new THREE.Mesh(geometry06,material05);
        //scene.add(mesh06);
    mesh06.position.set(1,40,-6.9);
    mesh06.castShadow = true;
    mesh06.receiveShadow = true;
    texture.wrapS=THREE.RepeatWrapping;
    texture.wrapT=THREE.RepeatWrapping;

    //BotellaGrup
    var BotellaGrup = new THREE.Group();
    BotellaGrup.add(mesh02,mesh03,mesh04,mesh05,mesh06);

    BotellaGrup.position.set(x,y,z);
    return BotellaGrup;
}