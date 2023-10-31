import * as THREE from './three.module.js';

// Declaring the main variables
let scene, camera, renderer;

let lineCount = 500;
let geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(6*lineCount), 3));
geometry.setAttribute("velocity", new THREE.BufferAttribute(new Float32Array(2*lineCount), 1));

let position = geometry.getAttribute("position");
let pa = position.array;
let vel = geometry.getAttribute("velocity");
let va = vel.array;

function initialize()
{
    // We're initializing the scene here.
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 1, 500);
    camera.position.z = 200;

    // And we're initializing the renderer here.
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    for (let lineIndex = 0; lineIndex < lineCount; lineIndex++)
    {
	var x = Math.random() * 400 - 200;
	var y = Math.random() * 200 - 100;
	var z = Math.random() * 500 - 100;

	var xx = x;
	var yy = y;
	var zz = z;

	// The start of "drawing" the lines
	pa[6*lineIndex] = x;
	pa[6*lineIndex+1] = y;
	pa[6*lineIndex+2] = z;

	// The ending of lines
	pa[6*lineIndex+3] = xx;
	pa[6*lineIndex+4] = yy;
	pa[6*lineIndex+5] = zz;

	va[2*lineIndex] = va[2*lineIndex+1] = 0;
    }

    // Debugging:
    let mat = new THREE.LineBasicMaterial({color: 0xffffff});
    let lines = new THREE.LineSegments(geometry, mat);
    scene.add(lines);

    window.addEventListener("resize", onWindowResize, false);
    animate();
}

function onWindowResize()
{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight)
}

function animate()
{
    for (let lineIndex = 0; lineIndex < lineCount; lineIndex++)
    {
	va[2*lineIndex] += 0.001625 ; // Bumps up velocity by the acceleration amount
	va[2*lineIndex+1] += 0.0015625;

	pa[6*lineIndex+2] += va[2*lineIndex];
	pa[6*lineIndex+5] += va[2*lineIndex+1];

	if (pa[6*lineIndex+5] > 200)
	{
	    var z = Math.random() * 200 - 100;
	    pa[6*lineIndex+2] = z;
	    pa[6*lineIndex+5] = z;
	    va[2*lineIndex] = 0;
	    va[2*lineIndex+1] = 0;
	}

    }
    position.needsUpdate = true;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

initialize();
