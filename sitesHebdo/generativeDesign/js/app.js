var container;

var scene, camera, renderer, clock;

var mesh;

var sign = 1;
var speed = .5;

var vertexHeight = 10;
var Definition = 30;
var Size = 2000;

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onMouseMove( event ) {

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}
window.addEventListener( 'mousemove', onMouseMove, false );



//init
function init() {

	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
	container = document.getElementById('canvas');
	clock = new THREE.Clock();

	renderer = new THREE.WebGLRenderer(); // Add {alpha: true} for transparent background
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);

	camera.position.z = 4500;

}
init();


//controls = new THREE.OrbitControls(camera, renderer.domElement);
//controls.enableZoom = false;

//Draw
var plane = new THREE.Mesh( new THREE.SphereGeometry( Size, Definition, Definition ),
new THREE.MeshLambertMaterial( { color: 0x555555, wireframe: false } ) );
scene.add( plane );




var ambientLight = new THREE.AmbientLight( 0x404040 );
var spotLight = new THREE.DirectionalLight( 0x404040, 3 );

spotLight.position.x = -2000;
spotLight.position.y =  2000;
spotLight.position.z =  2000;

//scene.add( ambientLight );
scene.add( spotLight );

//Logic
var update = function() {
	plane.rotation.x += 0.01;
	plane.rotation.y += 0.005;

	camera.position.x =  mouse.x*300;
	camera.position.y =  mouse.y*200;

}


 function updateVerts() {
   for (var i = 0; i < plane.geometry.vertices.length; i++)
   {
		 //Slower
     // plane.geometry.vertices[i].z += Math.random()*vertexHeight/2 -(vertexHeight/4);
     // plane.geometry.vertices[i].x += Math.random()*vertexHeight/2 -(vertexHeight/4);
     // plane.geometry.vertices[i].y += Math.random()*vertexHeight/2 -(vertexHeight/4);

     plane.geometry.vertices[i].z += Math.random()*vertexHeight -(vertexHeight/2);
     plane.geometry.vertices[i].x += Math.random()*vertexHeight -(vertexHeight/2);
     plane.geometry.vertices[i].y += Math.random()*vertexHeight -(vertexHeight/2);
   }
   plane.geometry.verticesNeedUpdate = true;
 };

//Scene
var render = function() {
	var delta = clock.getDelta();

	raycaster.setFromCamera( mouse, camera );

	updateVerts();


	renderer.render(scene, camera);
};




//Loop
var GameLoop = function() {
	requestAnimationFrame(	GameLoop );
	update();
	render();
}
GameLoop();


//Functions
//resize screen
window.addEventListener( 'resize', function(){
	    camera.aspect = window.innerWidth / window.innerHeight;
	    camera.updateProjectionMatrix();

	    renderer.setSize( window.innerWidth, window.innerHeight );
});

function onVisibilityChange() {

	if ( document.hidden === true ) {
		clock.stop();
	} else {
		clock.start();
	}

}
