// Dibujos 2D
var geometry01 = new THREE.BoxGeometry (100,0.5,100);
var material01 = new THREE.MeshLambertMaterial({
    color:0xff20, side: THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(geometry01,material01);
scene.add(mesh01);
mesh01.position.set(0,0,0);

 

//huesos largos1
var geometry02 = new RoundedBoxGeometry (1,5,1,2,2);
var material02 = new THREE.MeshLambertMaterial({
    color:0xE5E6C3, side: THREE.DoubleSide
});
var mesh02 = new THREE.Mesh(geometry02,material02);
scene.add(mesh02);
mesh02.position.set(0.2,3.5,8);


var geometry03 = new RoundedBoxGeometry (1,1.1,1,2,2);
var material03 = new THREE.MeshLambertMaterial({
    color:0xE5E6C3, side: THREE.DoubleSide
});
var mesh03 = new THREE.Mesh(geometry03,material03);
scene.add(mesh03);
mesh03.position.set(0.19,5.5,8);


var mesh04 = new THREE.Mesh(geometry03,material03);
scene.add(mesh04);
mesh04.position.set(0.9,5.4,8);
mesh04.rotation.set(0.9,0,0);

var mesh04 = new THREE.Mesh(geometry03,material03);
scene.add(mesh04);
mesh04.position.set(0.9,1.5,8);
mesh04.rotation.set(0.9,0,0);

 