var container;

var scene, camera, renderer, clock;

var canvasDiv, printCanvas, isPrinted;

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


//Checks if canvas div is on page
var check = function() {
	console.log('Checking for canvas div');
	canvasDiv = document.getElementById("canvas");

	if(canvasDiv != null) { // if there is a canvas div

		printCanvas = true; // then print a canvas inside
		console.log('There is a canvas div');

	}else { //otherwise there is no canvas div
		isPrinted = false; //no need to print canvas
		console.log('No canvas div');
	}
}
check();

	function init() {

		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
		container = document.getElementById('canvas');
		clock = new THREE.Clock();

		renderer = new THREE.WebGLRenderer({alpha: true}); // Add {alpha: true} for transparent background
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize(window.innerWidth, window.innerHeight);
		container.appendChild(renderer.domElement);

		camera.position.z = 4000;

		isPrinted = false;
		console.log('ball is not drawn yet');

		controls = new THREE.OrbitControls(camera, renderer.domElement);
		controls.enableZoom = false;
	}

var ball;
var vertices;

var draw = function() {

	ball = new THREE.Mesh( new THREE.SphereGeometry( Size, Definition, Definition ),
	new THREE.MeshLambertMaterial( { color: 0x555555, wireframe: false } ) );
	scene.add( ball );

	isPrinted = true;
	console.log('ball is now drawn');

	vertices = [];
	for ( var i = 0; i < 10000; i ++ ) {
		var x = THREE.MathUtils.randFloatSpread( 15000 );
		var y = THREE.MathUtils.randFloatSpread( 15000 );
		var z = THREE.MathUtils.randFloatSpread( 13000 );
		vertices.push( x, y, z );
	}

	var geometry = new THREE.BufferGeometry();
	geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3.5 ) );

	var ambientLight = new THREE.AmbientLight( 0x404040 );
	var spotLight = new THREE.DirectionalLight( 0x404040, 2 );

	spotLight.position.x = -2000;
	spotLight.position.y =  2000;
	spotLight.position.z =  2000;

	//scene.add( ambientLight );
	scene.add( spotLight );
}


// if you have to print canvas, print it
if(printCanvas) {
	init();
	draw();
}



//Logic
var update = function() {

	ball.rotation.x += 0.01;
	ball.rotation.y += 0.005;

	ball.position.x =  -mouse.x*300;
	ball.position.y =  -mouse.y*200;

}


//Scene
var render = function() {
	var delta = clock.getDelta();

	raycaster.setFromCamera( mouse, camera );

	// check();

	updateVerts();

	renderer.render(scene, camera);
};

//Reload canvas
var reload = function() {
	var output = document.getElementById('app');
	var links = output.getElementsByClassName('routes');

	for(var i = 0;i < links.length-1;i++){
		links[i].addEventListener("click", function() {

			check(); //Checks for canvas div

			var canvas = document.getElementsByTagName('canvas');
			//Check if canvas is printed
			if(canvas.length == 0) { // if there is no canvas printed
				init();
				draw();
				console.log('Reloaded canvas');
				return;
			}else {
				isPrinted = true; // Otherwise it is
				console.log('Canvas is already drawn, not printing a new one');
			}
		});
		break;
	};
}
reload();

//Loop
if(isPrinted) {
	var GameLoop = function() {
		requestAnimationFrame(	GameLoop );
		update();
		render();
	}
	GameLoop();
}

//Functions
function updateVerts() {
	for (var i = 0; i < ball.geometry.vertices.length; i++)
	{
		ball.geometry.vertices[i].z += Math.random()*vertexHeight -(vertexHeight/2);
		ball.geometry.vertices[i].x += Math.random()*vertexHeight -(vertexHeight/2);
		ball.geometry.vertices[i].y += Math.random()*vertexHeight -(vertexHeight/2);
	}
	ball.geometry.verticesNeedUpdate = true;
};

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
