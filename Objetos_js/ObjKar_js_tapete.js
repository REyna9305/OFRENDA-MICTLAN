import * as THREE from "../js/three.module.js";

export default function Tapete1({x,y,z}){    

    var geometry02 = new THREE.CylinderGeometry (50, 50, 2, 50, 8, false, 6.28);
    var texture2 = new THREE. TextureLoader().load("./Texturas_img/tapete3.jpg");
    var material02 = new THREE.MeshLambertMaterial({map: texture2 });
    var mesh02 = new THREE.Mesh(geometry02,material02);
    //scene.add(mesh02);
    mesh02.position.set(0,15,0);
     mesh02.rotation.set(0,1.57,0);
     mesh02.castShadow = true;
     mesh02.receiveShadow = true;

    var geometry03 = new THREE.CylinderGeometry (60, 60, 1, 50, 8, false, 6.28);
    var material03 = new THREE.MeshLambertMaterial({color:0x611006 , side: THREE.DoubleSide });
    var mesh03 = new THREE.Mesh(geometry03,material03);
    //scene.add(mesh03);
    mesh03.position.set(0,15,0); //circulo medio
    mesh03.castShadow = true;
    mesh03.receiveShadow = true;

    var geometry04 = new THREE.CylinderGeometry (70, 70, 1, 50, 8, false, 6.28);
    var texture3 = new THREE. TextureLoader().load("./Texturas_img/aserrin.jpg");
    var material04 = new THREE.MeshLambertMaterial({map: texture3 });
    var mesh04 = new THREE.Mesh(geometry04,material04);
    //scene.add(mesh04);
    mesh04.position.set(0,14.5,0); //aserrin
    mesh04.castShadow = true;
    mesh04.receiveShadow = true;

    var geometry04 = new THREE.CylinderGeometry (80, 80, 1, 50, 8, false, 6.28);
    var material04 = new THREE.MeshLambertMaterial({color:0x611006 , side: THREE.DoubleSide });
    var mesh13 = new THREE.Mesh(geometry04,material04);
    //scene.add(mesh13);
    mesh13.position.set(0,14,0); //circulo
    mesh13.castShadow = true;
    mesh13.receiveShadow = true;
    
    //adornos
    var geometry05 = new THREE.SphereGeometry (3,32,32,0,6.30,0,2.2);
    var material05 = new THREE.MeshLambertMaterial({color:0xFC8617 , side: THREE.DoubleSide });
    var mesh05 = new THREE.Mesh(geometry05,material05);
    //scene.add(mesh05);
    mesh05.position.set(58,17,0); //mandarina
    mesh05.castShadow = true;
    mesh05.receiveShadow = true;

    var geometry05 = new THREE.SphereGeometry (3,32,32,0,6.30,0,2.2);
    var material05 = new THREE.MeshLambertMaterial({color:0xFC8617 , side: THREE.DoubleSide });
    var mesh06 = new THREE.Mesh(geometry05,material05);
    //scene.add(mesh06);
    mesh06.position.set(-58,17,0);
    mesh06.castShadow = true;
    mesh06.receiveShadow = true;

    var geometry05 = new THREE.SphereGeometry (3,32,32,0,6.30,0,2.2);
    var material05 = new THREE.MeshLambertMaterial({color:0xFC8617 , side: THREE.DoubleSide });
    var mesh07 = new THREE.Mesh(geometry05,material05);
    //scene.add(mesh07);
    mesh07.position.set(-42,17,40);
    mesh07.castShadow = true;
    mesh07.receiveShadow = true;

    var geometry05 = new THREE.SphereGeometry (3,32,32,0,6.30,0,2.2);
    var material05 = new THREE.MeshLambertMaterial({color:0xFC8617 , side: THREE.DoubleSide });
    var mesh08 = new THREE.Mesh(geometry05,material05);
    //scene.add(mesh08);
    mesh08.position.set(42,17,40);
    mesh08.castShadow = true;
    mesh08.receiveShadow = true;

    var geometry05 = new THREE.SphereGeometry (3,32,32,0,6.30,0,2.2);
    var material05 = new THREE.MeshLambertMaterial({color:0xFC8617 , side: THREE.DoubleSide });
    var mesh09 = new THREE.Mesh(geometry05,material05);
    //scene.add(mesh09);
    mesh09.position.set(-42,17,-40);
    mesh09.castShadow = true;
    mesh09.receiveShadow = true;
   
    var geometry05 = new THREE.SphereGeometry (3,32,32,0,6.30,0,2.2);
    var material05 = new THREE.MeshLambertMaterial({color:0xFC8617 , side: THREE.DoubleSide });
    var mesh11 = new THREE.Mesh(geometry05,material05);
    //scene.add(mesh11);
    mesh11.position.set(42,17,-40);
    mesh11.castShadow = true;
    mesh11.receiveShadow = true;

    var geometry05 = new THREE.SphereGeometry (3,32,32,0,6.30,0,2.2);
    var material05 = new THREE.MeshLambertMaterial({color:0xFC8617 , side: THREE.DoubleSide });
    var mesh12 = new THREE.Mesh(geometry05,material05);
    //scene.add(mesh12);
    mesh12.position.set(0,17,-58);
    mesh12.castShadow = true;
    mesh12.receiveShadow = true;
   
    //palma
    var geometry06 = new THREE.BoxGeometry (170, 0.5, 170);
    var texture4 = new THREE. TextureLoader().load("./Texturas_img/palma.jpg");
    var material06 = new THREE.MeshLambertMaterial({map: texture4 });
    var mesh14 = new THREE.Mesh(geometry06,material06);
    //scene.add(mesh14);
    mesh14.position.set(0,13.2,0);
    mesh14.castShadow = true;
    mesh14.receiveShadow = true;

    //cañas
    var geometry07 = new THREE.CylinderGeometry (2, 2, 10, 50, 8, false,6.28);
    var material07 = new THREE.MeshLambertMaterial({color:0xB0D633, side: THREE.DoubleSide  });
    var mesh15 = new THREE.Mesh(geometry07,material07);
    //scene.add(mesh15);
    mesh15.position.set(65,17,-15);
    mesh15.rotation.set(1.57,0,1.57);
    mesh15.castShadow = true;
    mesh15.receiveShadow = true;
    
    var geometry07 = new THREE.CylinderGeometry (2, 2, 10, 50, 8, false,6.28);
    var material07 = new THREE.MeshLambertMaterial({color:0xB0D633, side: THREE.DoubleSide  });
    var mesh16 = new THREE.Mesh(geometry07,material07);
    //scene.add(mesh16);
    mesh16.position.set(-65,17,-15);
    mesh16.rotation.set(1.57,0,1.57);
    mesh16.castShadow = true;
    mesh16.receiveShadow = true;

    var geometry07 = new THREE.CylinderGeometry (2, 2, 10, 50, 8, false,6.28);
    var material07 = new THREE.MeshLambertMaterial({color:0xB0D633, side: THREE.DoubleSide  });
    var mesh17 = new THREE.Mesh(geometry07,material07);
    //scene.add(mesh17);
    mesh17.position.set(-60,17,20);
    mesh17.rotation.set(1.57,0,0);
    mesh17.castShadow = true;
    mesh17.receiveShadow = true;
   
    var geometry07 = new THREE.CylinderGeometry (2, 2, 10, 50, 8, false,6.28);
    var material07 = new THREE.MeshLambertMaterial({color:0xB0D633, side: THREE.DoubleSide  });
    var mesh18 = new THREE.Mesh(geometry07,material07);
    //scene.add(mesh18);
    mesh18.position.set(60,17,20);
    mesh18.rotation.set(1.57,0,0);
    mesh18.castShadow = true;
    mesh18.receiveShadow = true;

    var geometry07 = new THREE.CylinderGeometry (2, 2, 10, 50, 8, false,6.28);
    var material07 = new THREE.MeshLambertMaterial({color:0xB0D633, side: THREE.DoubleSide  });
    var mesh19 = new THREE.Mesh(geometry07,material07);
    //scene.add(mesh19);
    mesh19.position.set(-30,17,-55);
    mesh19.rotation.set(1.57,0,1.57);
    mesh19.castShadow = true;
    mesh19.receiveShadow = true;

    var geometry07 = new THREE.CylinderGeometry (2, 2, 10, 50, 8, false,6.28);
    var material07 = new THREE.MeshLambertMaterial({color:0xB0D633, side: THREE.DoubleSide  });
    var mesh20 = new THREE.Mesh(geometry07,material07);
    //scene.add(mesh20);
    mesh20.position.set(30,17,-55);
    mesh20.rotation.set(1.57,0,1.57);
    mesh20.castShadow = true;
    mesh20.receiveShadow = true;

    //gruptodo
    var TapeteGrup = new THREE.Group();
    TapeteGrup.add(mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh17,mesh18,mesh19,mesh20);
    
    TapeteGrup.position.set(x,y,z);
         return TapeteGrup;

    }
