    import * as THREE from "../js/three.module.js";

    export default function Calaverita({x,y,z}){

    //calaverita 
    var geometry02 = new THREE.SphereGeometry (20,32,32,0,6.30,0,2.2);
    var material02 = new THREE.MeshLambertMaterial({color:0xF7F7DF , side: THREE.DoubleSide });
    var mesh02 = new THREE.Mesh(geometry02,material02);
        //scene.add(mesh02);
    mesh02.position.set(13,30,0);
    mesh02.castShadow = true;
    mesh02.receiveShadow = true;

    var geometry03 = new THREE.CylinderGeometry (12,15, 7, 50, 8, false, 6.28);
    var material03 = new THREE.MeshLambertMaterial({color:0xF7F7DF, side: THREE.DoubleSide });
    var mesh03 = new THREE.Mesh(geometry03,material03);
        //scene.add(mesh03);
    mesh03.position.set(13,18,6);
    mesh03.castShadow = true;
    mesh03.receiveShadow = true;

    //ojos 
    var geometry03 = new THREE.SphereGeometry (4,32,32);
    var material03 = new THREE.MeshLambertMaterial({color:0x8654B3, side: THREE.DoubleSide });
    var mesh04 = new THREE.Mesh(geometry03,material03);
        //scene.add(mesh04);
    mesh04.position.set(6,35,15);
    mesh04.castShadow = true;
    mesh04.receiveShadow = true;

    var geometry04 = new THREE.SphereGeometry (4,32,32);
    var material04 = new THREE.MeshLambertMaterial({color:0x8654B3, side: THREE.DoubleSide });
    var mesh05 = new THREE.Mesh(geometry04,material04);
        //scene.add(mesh05);
    mesh05.position.set(20,35,15);
    mesh05.castShadow = true;
    mesh05.receiveShadow = true;

    //decoracion 
    var geometry05 = new THREE.TorusGeometry( 10, 1.3, 16, 100, 3 ); 
    var material05 = new THREE.MeshLambertMaterial({color:0x30DDF2, side: THREE.DoubleSide });
    var mesh06 = new THREE.Mesh(geometry05,material05);
        //scene.add(mesh06);
    mesh06.position.set(13,41,16.5);
    mesh06.rotation.set(-0.7,0,0);
    mesh06.castShadow = true;
    mesh06.receiveShadow = true;

    var geometry06 = new THREE.TorusGeometry( 12, 1.2, 16, 100, 3 ); 
    var material06 = new THREE.MeshLambertMaterial({color:0xFFE430, side: THREE.DoubleSide });
    var mesh07 = new THREE.Mesh(geometry06,material06);
        //scene.add(mesh07);
    mesh07.position.set(13,45,9);
    mesh07.rotation.set(-0.99,0,0);
    mesh07.castShadow = true;
    mesh07.receiveShadow = true;

    var geometry07 = new THREE.TorusGeometry( 10, 1.2, 16, 100, 3 ); 
    var material07 = new THREE.MeshLambertMaterial({color:0xFF1F94, side: THREE.DoubleSide });
    var mesh08 = new THREE.Mesh(geometry07,material07);
        //scene.add(mesh08);
    mesh08.position.set(13,47,1);
    mesh08.rotation.set(-1.3,0,0);
    mesh08.castShadow = true;
    mesh08.receiveShadow = true;

    //boca
    var geometry08 = new THREE.CylinderGeometry (0.5,0.5,5, 50, 8, false, 6.28);
    var material08 = new THREE.MeshLambertMaterial({color:0x8654B3 , side: THREE.DoubleSide });
    var mesh09 = new THREE.Mesh(geometry08,material08);
        //scene.add(mesh09);
    mesh09.position.set(13,18,20);
    mesh09.rotation.set(-0.5,0,0);
    mesh09.castShadow = true;
    mesh09.receiveShadow = true;

    var geometry09 = new THREE.CylinderGeometry (0.5,0.5,6, 50, 8, false, 6.28);
    var material09 = new THREE.MeshLambertMaterial({color:0x8654B3 , side: THREE.DoubleSide });
    var mesh010 = new THREE.Mesh(geometry09,material09);
        //scene.add(mesh010);
    mesh010.position.set(5,18,17);
    mesh010.rotation.set(-0.5,0,0);
    mesh010.castShadow = true;
    mesh010.receiveShadow = true;

    var geometry010_1 = new THREE.CylinderGeometry (0.5,0.5,6, 50, 8, false, 6.28);
    var material010_1 = new THREE.MeshLambertMaterial({color:0x8654B3 , side: THREE.DoubleSide });
    var mesh010_1 = new THREE.Mesh(geometry010_1,material010_1);
        //scene.add(mesh010_1);
    mesh010_1.position.set(21,18,17);
    mesh010_1.rotation.set(-0.5,0,0);
    mesh010_1.castShadow = true;
    mesh010_1.receiveShadow = true;

    //nariz
    var geometry011 = new THREE.CapsuleGeometry( 1,1.5, 10, 32 ); 
    var material011 = new THREE.MeshLambertMaterial( {color:0x8654B3 , side: THREE.DoubleSide} ); 
    var capsule = new THREE.Mesh( geometry011, material011 ); 
        //scene.add( capsule );
    capsule.position.set(13.5,28,20);
    capsule.rotation.set(0,0,0.7);
    capsule.castShadow = true;
    capsule.receiveShadow = true;

    var geometry012 = new THREE.CapsuleGeometry( 1,1.5, 10, 32 ); 
    var material012 = new THREE.MeshLambertMaterial( {color:0x8654B3 , side: THREE.DoubleSide} ); 
    var capsule1 = new THREE.Mesh( geometry012, material012 ); 
        //scene.add( capsule1 );
    capsule1.position.set(12,28,20);
    capsule1.rotation.set(0,0,-0.7);
    capsule1.castShadow = true;
    capsule1.receiveShadow = true;


    //CalaveritaGrup
    var CalaveritaGrup = new THREE.Group();
    CalaveritaGrup.add(mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh010,mesh010_1,capsule,capsule1);
    
    CalaveritaGrup.position.set(x,y,z);
    return CalaveritaGrup;
}
