import * as THREE from "../js/three.module.js";

export default function Calavera1({x,y,z}){

    //calaverita 
    var geometry02 = new THREE.SphereGeometry (20,32,32,0,6.30,0,2.2);
    var material02 = new THREE.MeshLambertMaterial({color:0xEBE188 , side: THREE.DoubleSide });
    var mesh02 = new THREE.Mesh(geometry02,material02);
        //scene.add(mesh02);
    mesh02.position.set(13,30,0);
    mesh02.castShadow = true;
    mesh02.receiveShadow = true;   

    var geometry03 = new THREE.CylinderGeometry (12,15, 7, 50, 8, false, 6.28);
    var material03 = new THREE.MeshLambertMaterial({color:0xEBE188, side: THREE.DoubleSide });
    var mesh03 = new THREE.Mesh(geometry03,material03);
        //scene.add(mesh03);
    mesh03.position.set(13,18,6);
    mesh03.castShadow = true;
    mesh03.receiveShadow = true; 

    //ojos 
    var geometry03 = new THREE.SphereGeometry (5,32,32);
    var material03 = new THREE.MeshLambertMaterial({color:0x72FF21, side: THREE.DoubleSide });
    var mesh04 = new THREE.Mesh(geometry03,material03);
        //scene.add(mesh04);
    mesh04.position.set(6,35,15);
    mesh04.castShadow = true;
    mesh04.receiveShadow = true;

    var geometry04 = new THREE.SphereGeometry (5,32,32);
    var material04 = new THREE.MeshLambertMaterial({color:0x72FF21, side: THREE.DoubleSide });
    var mesh05 = new THREE.Mesh(geometry04,material04);
        //scene.add(mesh05);
    mesh05.position.set(20,35,15);
    mesh05.castShadow = true;
    mesh05.receiveShadow = true;


    //boca
    var geometry08 = new THREE.CylinderGeometry (0.5,0.5,5, 50, 8, false, 6.28);
    var material08 = new THREE.MeshLambertMaterial({color:0x262622 , side: THREE.DoubleSide });
    var mesh09 = new THREE.Mesh(geometry08,material08);
        //scene.add(mesh09);
    mesh09.position.set(13,18,20);
    mesh09.rotation.set(-0.5,0,0);
    mesh09.castShadow = true;
    mesh09.receiveShadow = true;

    var geometry09 = new THREE.CylinderGeometry (0.5,0.5,6, 50, 8, false, 6.28);
    var material09 = new THREE.MeshLambertMaterial({color:0x262622 , side: THREE.DoubleSide });
    var mesh010 = new THREE.Mesh(geometry09,material09);
        //scene.add(mesh010);
    mesh010.position.set(5,18,17);
    mesh010.rotation.set(-0.5,0,0);
    mesh010.castShadow = true;
    mesh010.receiveShadow = true;

    var geometry010 = new THREE.CylinderGeometry (0.5,0.5,6, 50, 8, false, 6.28);
    var material010 = new THREE.MeshLambertMaterial({color:0x262622 , side: THREE.DoubleSide });
    var mesh011 = new THREE.Mesh(geometry010,material010);
        //scene.add(mesh011);
    mesh011.position.set(21,18,17);
    mesh011.rotation.set(-0.5,0,0);
    mesh011.castShadow = true;
    mesh011.receiveShadow = true;

    //nariz
    var geometry011 = new THREE.CapsuleGeometry( 1,1.5, 10, 32 ); 
    var material011 = new THREE.MeshLambertMaterial( {color:0x262622 , side: THREE.DoubleSide} ); 
    var capsule = new THREE.Mesh( geometry011, material011 ); 
        //scene.add( capsule );
    capsule.position.set(13.5,28,20);
    capsule.rotation.set(0,0,0.7);
    capsule.castShadow = true;
    capsule.receiveShadow = true;

    var geometry012 = new THREE.CapsuleGeometry( 1,1.5, 10, 32 ); 
    var material012 = new THREE.MeshLambertMaterial( {color:0x262622, side: THREE.DoubleSide} ); 
    var capsule1 = new THREE.Mesh( geometry012, material012 ); 
        //scene.add( capsule1 );
    capsule1.position.set(12,28,20);
    capsule1.rotation.set(0,0,-0.7);
    capsule1.castShadow = true;
    capsule1.receiveShadow = true;

    var CalaveraGrup = new THREE.Group();
    CalaveraGrup.add(mesh02,mesh03,mesh04,mesh05,mesh09,mesh010,mesh011,capsule,capsule1);
    
    CalaveraGrup.position.set(x,y,z);
         return CalaveraGrup;
    }
