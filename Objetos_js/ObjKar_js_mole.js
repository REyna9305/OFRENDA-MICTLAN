import * as THREE from "../js/three.module.js";

export default function Mole1({x,y,z}){    
    //plato
    var geometry02 = new THREE.CylinderGeometry (13, 6, 4.2, 50, 8, false, 6.28);
    var material02 = new THREE.MeshLambertMaterial({color:0xCF9400 , side: THREE.DoubleSide  });
    var mesh02 = new THREE.Mesh(geometry02,material02);
    //scene.add(mesh02);
    mesh02.position.set(0,15,0);
    mesh02.castShadow = true;
    mesh02.receiveShadow = true;

    var geometry03 = new THREE.CylinderGeometry (13, 13, 1, 50, 8, 6.28);
    var material03 = new THREE.MeshLambertMaterial({color:0xCF9400 , side: THREE.DoubleSide  });
    var mesh03 = new THREE.Mesh(geometry03,material03);
    //scene.add(mesh03);
    mesh03.position.set(0,17,0);
    mesh03.castShadow = true;
    mesh03.receiveShadow = true;

    //pollo
    var geometry04 = new THREE.SphereGeometry (4,32,32,0,6.30);
    var material04 = new THREE.MeshLambertMaterial({color:0xFAD678 , side: THREE.DoubleSide  });
    var mesh04 = new THREE.Mesh(geometry04,material04);
    //scene.add(mesh04);
    mesh04.position.set(0,18,5);
    mesh04.castShadow = true;
    mesh04.receiveShadow = true;

    var geometry05 = new THREE.CylinderGeometry (1, 1, 10, 50, 8, false, 6.28);
    var material05 = new THREE.MeshLambertMaterial({color:0xFAD678 , side: THREE.DoubleSide  });
    var mesh05 = new THREE.Mesh(geometry05,material05);
    //scene.add(mesh05);
    mesh05.position.set(0,18,2);
    mesh05.rotation.set(1.57,0,0);
    mesh05.castShadow = true;
    mesh05.receiveShadow = true;

    var geometry06 = new THREE.SphereGeometry (1,32,32,0,6.30);
    var material06 = new THREE.MeshLambertMaterial({color:0xFAD678 , side: THREE.DoubleSide  });
    var mesh06 = new THREE.Mesh(geometry06,material06);
    //scene.add(mesh06);
    mesh06.position.set(1,18,-3);
    mesh06.castShadow = true;
    mesh06.receiveShadow = true;

    var geometry07 = new THREE.SphereGeometry (1,32,32,0,6.30);
    var material07 = new THREE.MeshLambertMaterial({color:0xFAD678 , side: THREE.DoubleSide  });
    var mesh07 = new THREE.Mesh(geometry07,material07);
    //scene.add(mesh07);
    mesh07.position.set(-1,18,-3);
    mesh07.castShadow = true;
    mesh07.receiveShadow = true;

    //mole
    var geometry08 = new THREE.CylinderGeometry (12.5, 12.5, 0.5, 50, 8, false,6.28);
    var material08 = new THREE.MeshLambertMaterial({color:0x7A4004 , side: THREE.DoubleSide  });
    var mesh08 = new THREE.Mesh(geometry08,material08);
    //scene.add(mesh08);
    mesh08.position.set(0,17,0);
    mesh08.castShadow = true;
    mesh08.receiveShadow = true;

    //arroz
    var geometry09 = new THREE.CylinderGeometry (2, 4, 3, 50, 8, false,6.28);
    var material09 = new THREE.MeshLambertMaterial({color:0xFFFBEB , side: THREE.DoubleSide  });
    var mesh09 = new THREE.Mesh(geometry09,material09);
    //scene.add(mesh09);
    mesh09.position.set(-6,18,-4);
    mesh09.castShadow = true;
    mesh09.receiveShadow = true;

    //ajonjoli 
    var geometry10 = new THREE.CylinderGeometry (0.3, 0.3, 2, 50, 8, false,6.28);
    var material10 = new THREE.MeshLambertMaterial({color:0xFFF699 , side: THREE.DoubleSide  });
    var mesh10 = new THREE.Mesh(geometry10,material10);
    //scene.add(mesh10);
    mesh10.position.set(-6,17.5,4);
    mesh10.rotation.set(1.57,0,1.57);
    mesh10.castShadow = true;
    mesh10.receiveShadow = true;

    var geometry10 = new THREE.CylinderGeometry (0.3, 0.3, 2, 50, 8, false,6.28);
    var material10 = new THREE.MeshLambertMaterial({color:0xFFF699 , side: THREE.DoubleSide  });
    var mesh10_2 = new THREE.Mesh(geometry10,material10);
    //scene.add(mesh10_2);
    mesh10_2.position.set(6,17.5,8);
    mesh10_2.rotation.set(1.57,0,0);
    mesh10_2.castShadow = true;
    mesh10_2.receiveShadow = true;

    var geometry11 = new THREE.CylinderGeometry (0.3, 0.3, 2, 50, 8, false,6.28);
    var material11 = new THREE.MeshLambertMaterial({color:0xFFF699 , side: THREE.DoubleSide  });
    var mesh11 = new THREE.Mesh(geometry11,material11);
    //scene.add(mesh11);
    mesh11.position.set(6,17.5,4);
    mesh11.rotation.set(1.57,0,1.5);
    mesh11.castShadow = true;
    mesh11.receiveShadow = true;

    var geometry12 = new THREE.CylinderGeometry (0.3, 0.3, 2, 50, 8, false,6.28);
    var material12 = new THREE.MeshLambertMaterial({color:0xFFF699 , side: THREE.DoubleSide  });
    var mesh12 = new THREE.Mesh(geometry12,material12);
    //scene.add(mesh12);
    mesh12.position.set(7,17.5,-3);
    mesh12.rotation.set(1.57,0,0);
    mesh12.castShadow = true;
    mesh12.receiveShadow = true;

    var geometry13 = new THREE.CylinderGeometry (0.3, 0.3, 2, 50, 8, false,6.28);
    var material13 = new THREE.MeshLambertMaterial({color:0xFFF699 , side: THREE.DoubleSide  });
    var mesh13 = new THREE.Mesh(geometry13,material13);
    //scene.add(mesh13);
    mesh13.position.set(10,17.5,4);
    mesh13.rotation.set(1.57,0,0);
    mesh13.castShadow = true;
    mesh13.receiveShadow = true;

    var geometry14 = new THREE.CylinderGeometry (0.3, 0.3, 2, 50, 8, false,6.28);
    var material14 = new THREE.MeshLambertMaterial({color:0xFFF699 , side: THREE.DoubleSide  });
    var mesh14 = new THREE.Mesh(geometry14,material14);
    //scene.add(mesh14);
    mesh14.position.set(10,17.5,-4);
    mesh14.rotation.set(1.57,0,1.2);
    mesh14.castShadow = true;
    mesh14.receiveShadow = true;

    var geometry15 = new THREE.CylinderGeometry (0.3, 0.3, 2, 50, 8, false,6.28);
    var material15 = new THREE.MeshLambertMaterial({color:0xFFF699 , side: THREE.DoubleSide  });
    var mesh15 = new THREE.Mesh(geometry15,material15);
    //scene.add(mesh15);
    mesh15.position.set(0,17.5,-7);
    mesh15.rotation.set(1.57,0,0);
    mesh15.castShadow = true;
    mesh15.receiveShadow = true;

    var geometry16 = new THREE.CylinderGeometry (0.3, 0.3, 2, 50, 8, false,6.28);
    var material16 = new THREE.MeshLambertMaterial({color:0xFFF699 , side: THREE.DoubleSide  });
    var mesh16 = new THREE.Mesh(geometry16,material16);
    //scene.add(mesh16);
    mesh16.position.set(4,18,-7);
    mesh16.rotation.set(1.57,0,1.2);
    mesh16.castShadow = true;
    mesh16.receiveShadow = true;

    //gruptodo
    var MoleGrup = new THREE.Group();
    MoleGrup.add(mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh10_2,mesh11,mesh12,mesh13,mesh14,mesh15,mesh16);
    
    MoleGrup.position.set(x,y,z);
         return MoleGrup;

    }
