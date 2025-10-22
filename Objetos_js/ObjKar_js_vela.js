import * as THREE from "../js/three.module.js";

export default function Vela1({x,y,z}){ 

    //vela
    var geometry02 = new THREE.CylinderGeometry (5, 5, 20, 50, 8, false, 6.28);
    var material02 = new THREE.MeshLambertMaterial({color:0xFFE6A6 , side: THREE.DoubleSide  });
    var mesh02 = new THREE.Mesh(geometry02,material02);
    //scene.add(mesh02);
    mesh02.position.set(0,15,0);
    mesh02.castShadow = true;
    mesh02.receiveShadow = true;

    var geometry03 = new THREE.CylinderGeometry (0.3, 0.3, 5, 50, 8, false, 6.28);
    var material03 = new THREE.MeshLambertMaterial({color:0xFFE6A6 , side: THREE.DoubleSide  });
    var mesh03 = new THREE.Mesh(geometry03,material03);
    //scene.add(mesh03);
    mesh03.position.set(0,25,0);
    mesh03.castShadow = true;
    mesh03.receiveShadow = true;

    //fuego
    var geometry04 = new THREE.SphereGeometry (1,32,32,0,6.30);
    var material04 = new THREE.MeshLambertMaterial({color:0xFF9305 , side: THREE.DoubleSide  });
    var mesh04 = new THREE.Mesh(geometry04,material04);
    //scene.add(mesh04);
    mesh04.position.set(0,28,0);
    mesh04.castShadow = true;
    mesh04.receiveShadow = true;
    
    var geometry05 = new THREE.ConeGeometry (1,3,32);
    var material05 = new THREE.MeshLambertMaterial({color:0xFF9305 , side: THREE.DoubleSide  });
    var mesh05 = new THREE.Mesh(geometry05,material05);
    //scene.add(mesh05);
    mesh05.position.set(0,29.5,0);
    mesh05.castShadow = true;
    mesh05.receiveShadow = true;

    //cera
    var geometry06 = new THREE.CylinderGeometry (0.5, 0.5, 4, 50, 8, false, 6.28);
    var material06 = new THREE.MeshLambertMaterial({color:0xFAD678, side: THREE.DoubleSide  });
    var mesh06 = new THREE.Mesh(geometry06,material06);
    //scene.add(mesh06);
    mesh06.position.set(0,23,5);
    mesh06.castShadow = true;
    mesh06.receiveShadow = true;

    var geometry07 = new THREE.SphereGeometry (0.8,32,32,0,6.30);
    var material07 = new THREE.MeshLambertMaterial({color:0xFAD678 , side: THREE.DoubleSide  });
    var mesh07 = new THREE.Mesh(geometry07,material07);
    //scene.add(mesh07);
    mesh07.position.set(0,21.2,5);
    mesh07.castShadow = true;
    mesh07.receiveShadow = true;

    var geometry08 = new THREE.CylinderGeometry (0.5, 0.5, 4, 50, 8, false, 6.28);
    var material08 = new THREE.MeshLambertMaterial({color:0xFAD678, side: THREE.DoubleSide  });
    var mesh08 = new THREE.Mesh(geometry08,material08);
    //scene.add(mesh08);
    mesh08.position.set(0,23,-5);
    mesh08.castShadow = true;
    mesh08.receiveShadow = true;

    var geometry09 = new THREE.SphereGeometry (0.8,32,32,0,6.30);
    var material09 = new THREE.MeshLambertMaterial({color:0xFAD678 , side: THREE.DoubleSide  });
    var mesh09 = new THREE.Mesh(geometry09,material09);
    //scene.add(mesh09);
    mesh09.position.set(0,21.2,-5);
    mesh09.castShadow = true;
    mesh09.receiveShadow = true;

    var geometry10 = new THREE.CylinderGeometry (0.5, 0.5, 4, 50, 8, false, 6.28);
    var material10 = new THREE.MeshLambertMaterial({color:0xFAD678, side: THREE.DoubleSide  });
    var mesh10 = new THREE.Mesh(geometry10,material10);
    //scene.add(mesh10);
    mesh10.position.set(-4,23,3);
    mesh10.castShadow = true;
    mesh10.receiveShadow = true;

    var geometry11 = new THREE.SphereGeometry (0.8,32,32,0,6.30);
    var material11 = new THREE.MeshLambertMaterial({color:0xFAD678 , side: THREE.DoubleSide  });
    var mesh11 = new THREE.Mesh(geometry11,material11);
    //scene.add(mesh11);
    mesh11.position.set(-4,21.2,3);
    mesh11.castShadow = true;
    mesh11.receiveShadow = true;

    var geometry12 = new THREE.CylinderGeometry (0.5, 0.5, 4, 50, 8, false, 6.28);
    var material12 = new THREE.MeshLambertMaterial({color:0xFAD678, side: THREE.DoubleSide  });
    var mesh12 = new THREE.Mesh(geometry12,material12);
    //scene.add(mesh10);
    mesh12.position.set(-4,23,3);
    mesh12.castShadow = true;
    mesh12.receiveShadow = true;

    var geometry13 = new THREE.SphereGeometry (0.8,32,32,0,6.30);
    var material13 = new THREE.MeshLambertMaterial({color:0xFAD678 , side: THREE.DoubleSide  });
    var mesh13 = new THREE.Mesh(geometry13,material13);
    //scene.add(mesh13);
    mesh13.position.set(-4,21.2,3);
    mesh13.castShadow = true;
    mesh13.receiveShadow = true;

    var geometry14 = new THREE.CylinderGeometry (0.5, 0.5, 4, 50, 8, false, 6.28);
    var material14 = new THREE.MeshLambertMaterial({color:0xFAD678, side: THREE.DoubleSide  });
    var mesh14 = new THREE.Mesh(geometry14,material14);
    //scene.add(mesh14);
    mesh14.position.set(4.5,23,-2);
    mesh14.castShadow = true;
    mesh14.receiveShadow = true;

    var geometry15 = new THREE.SphereGeometry (0.8,32,32,0,6.30);
    var material15 = new THREE.MeshLambertMaterial({color:0xFAD678 , side: THREE.DoubleSide  });
    var mesh15 = new THREE.Mesh(geometry15,material15);
    //scene.add(mesh15);
    mesh15.position.set(4.5,21.2,-2);
    mesh15.castShadow = true;
    mesh15.receiveShadow = true;

    var geometry16 = new THREE.SphereGeometry (0.8,32,32,0,6.30);
    var material16 = new THREE.MeshLambertMaterial({color:0xFAD678 , side: THREE.DoubleSide  });
    var mesh16 = new THREE.Mesh(geometry16,material16);
    //scene.add(mesh16);
    mesh16.position.set(4.5,24.3,2);
    mesh16.castShadow = true;
    mesh16.receiveShadow = true;

    var geometry17 = new THREE.SphereGeometry (0.8,32,32,0,6.30);
    var material17 = new THREE.MeshLambertMaterial({color:0xFAD678 , side: THREE.DoubleSide  });
    var mesh17 = new THREE.Mesh(geometry17,material17);
    //scene.add(mesh17);
    mesh17.position.set(-4.5,24.3,-2);
    mesh17.castShadow = true;
    mesh17.receiveShadow = true;

    var VelaGrup = new THREE.Group();
    VelaGrup.add(mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh17);
    
    VelaGrup.position.set(x,y,z);
         return VelaGrup;
    
    }
