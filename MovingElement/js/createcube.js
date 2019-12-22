// Setting scene for 3D Object
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
    75,// Field of view
    window.innerWidth / window.innerHeight, //// Aspect ratio
    0.1,// Near plane distance
    1000//// Far plane distance
    );
    const loader = new THREE.TextureLoader().load( 'img/Centre-d’Estudis-Politècnics.jpg' );;


    var vector = new THREE.Vector3();
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Creating 3D object
    var geometry = new THREE.BoxGeometry(1, 2, 1);
    //var geometry = new THREE.BoxGeometry(700, 700, 700, 10, 10, 10);

    var material = new THREE.MeshBasicMaterial({
        map: loader,
        //color: "rgb(3, 197, 221)",
        //wireframe: true,
        //wireframeLinewidth: 6

    });

    var cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
     camera.position.z = 5;

    // Optional animation to rotate the element
    var animate = function() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
cube.rotation.y += 0.01;;
    renderer.render(scene, camera);
    };

    animate();


