import { useEffect, useRef } from "react";

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { TransformControls } from "three/addons/controls/TransformControls.js";

import TWEEN from "three/addons/libs/tween.module.js";
import { ColladaLoader } from "three/addons/loaders/ColladaLoader.js";

function Robot() {
  const refContainer = useRef(null);

  useEffect(() => {
    // === THREE.JS CODE START ===
    let camera, scene, renderer;
    let plane;
    let container;
    let isShiftDown = false;
    let isBlockDown = false;
    let isRobotDown = false;
    let isSpaceDown = false;
    let isPlay = false;

    // robot
    let dae;

    let kinematics;
    let kinematicsTween;
    const tweenParameters = {};

    const loader = new ColladaLoader();
    loader.load("abb_irb52_7_120.dae", function (collada) {
      dae = collada.scene;

      dae.traverse(function (child) {
        if (child.isMesh) {
          // model does not have normals
          child.material.flatShading = true;
        }
      });

      dae.scale.x = dae.scale.y = dae.scale.z = 300.0;
      dae.updateMatrix();

      kinematics = collada.kinematics;

      init();
      animate();
    });

    // robot

    const pointer = new THREE.Vector2();
    const onUpPosition = new THREE.Vector2();
    const onDownPosition = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    let rollOverMesh, rollOverMaterial;
    let cubeGeo, cubeMaterial;

    const objects = [];

    let transformControl;

    // init();

    function init() {
      container = document.getElementById('robot')
      camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        1,
        10000
      );
      camera.position.set(500, 800, 1300);
      camera.lookAt(0, 0, 0);

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x111827); //
      scene.add(camera);

      const ambientLight = new THREE.AmbientLight(0x606060, 3);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
      directionalLight.position.set(1, 0.75, 0.5).normalize();
      scene.add(directionalLight);

      const planeGeometry = new THREE.PlaneGeometry(1000, 1000);
      planeGeometry.rotateX(-Math.PI / 2);

      const planeMaterial = new THREE.ShadowMaterial({
        color: 0x000000,
        opacity: 0.2,
      });

      plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.receiveShadow = true;
      scene.add(plane);
      objects.push(plane);

      const gridHelper = new THREE.GridHelper(1000, 20);
      scene.add(gridHelper);

      const rollOverGeo = new THREE.BoxGeometry(50, 50, 50);
      rollOverMaterial = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        opacity: 0.5,
        transparent: true,
      });
      rollOverMesh = new THREE.Mesh(rollOverGeo, rollOverMaterial);

      // cubes
      let map = new THREE.TextureLoader().load(
        "textures/square-outline-textured.png"
      );
      map.colorSpace = THREE.SRGBColorSpace;
      cubeGeo = new THREE.BoxGeometry(50, 50, 50);
      cubeMaterial = new THREE.MeshLambertMaterial({
        color: 0xfeb74c,
        // map: map,
      });

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      console.log(container.clientHeight);
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.shadowMap.enabled = true;
      refContainer.current &&
        refContainer.current.appendChild(renderer.domElement);

      // Controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.damping = 0.2;
      controls.addEventListener("change", render);

      transformControl = new TransformControls(camera, renderer.domElement);
      transformControl.addEventListener("change", render);
      transformControl.addEventListener("dragging-changed", function (event) {
        controls.enabled = !event.value;
      });
      scene.add(transformControl);

      scene.add(dae);
      setupTween();

      document.addEventListener("pointerdown", onPointerDown);
      document.addEventListener("pointerup", onPointerUp);
      document.addEventListener("pointermove", onPointerMove);
      document.addEventListener("keydown", onDocumentKeyDown);
      document.addEventListener("keyup", onDocumentKeyUp);
      document.addEventListener("keydown", onBlockKeyDown);
      document.addEventListener("keyup", onBlockKeyUp);
      document.addEventListener("keydown", onSpaceDown);
      document.addEventListener("keyup", onSpaceUp);
      window.addEventListener("resize", onWindowResize);

      render();
    }

    function onDocumentKeyDown(event) {
      switch (event.keyCode) {
        case 16:
          isShiftDown = true;
          break;
      }
    }

    function onDocumentKeyUp(event) {
      switch (event.keyCode) {
        case 16:
          isShiftDown = false;
          break;
      }
    }

    function onBlockKeyDown(event) {
      switch (event.keyCode) {
        case 66: // "b"
          isBlockDown = true;
          rollOverMesh.name = "rollOverMesh";
          scene.add(rollOverMesh);
          break;
      }
    }

    function onBlockKeyUp(event) {
      switch (event.keyCode) {
        case 66:
          isBlockDown = false;
          const selectedObject = scene.getObjectByName(rollOverMesh.name);
          scene.remove(selectedObject);
          break;
      }
    }

    function onRobotKeyDown(event) {
      switch (event.keyCode) {
        case 82: // "r"
          isRobotDown = true;
          break;
      }
    }

    function onRobotKeyUp(event) {
      switch (event.keyCode) {
        case 82:
          isRobotDown = false;
          break;
      }
    }

    function onSpaceDown(event) {
      switch (event.keyCode) {
        case 32:
          isSpaceDown = true;
          break;
      }
    }

    function onSpaceUp(event) {
      switch (event.keyCode) {
        case 32:
          if (isSpaceDown) {
            isPlay = !isPlay;
            isSpaceDown = false;
          }
          break;
      }
    }

    function onPointerDown(event) {
      onDownPosition.x = event.clientX;
      onDownPosition.y = event.clientY;
      raycaster.setFromCamera(pointer, camera);

      const intersects = raycaster.intersectObjects(objects, false);

      if (intersects.length > 0) {
        const intersect = intersects[0];

        // create cube
        if (isBlockDown && !isShiftDown) {
          const voxel = new THREE.Mesh(cubeGeo, cubeMaterial);
          voxel.position.copy(intersect.point).add(intersect.face.normal);
          voxel.position
            .divideScalar(50)
            .floor()
            .multiplyScalar(50)
            .addScalar(25);
          scene.add(voxel);

          objects.push(voxel);
        }

        // delete cube
        if (isShiftDown) {
          if (intersect.object !== plane) {
            scene.remove(intersect.object);

            objects.splice(objects.indexOf(intersect.object), 1);
          }
        }
        render();
      }
    }

    function onPointerUp(event) {
      onUpPosition.x = event.clientX;
      onUpPosition.y = event.clientY;

      if (onDownPosition.distanceTo(onUpPosition) === 0) {
        transformControl.detach();
        render();
      }
    }

    function onPointerMove(event) {
      let rect = renderer.domElement.getBoundingClientRect();

      pointer.x =
        ((event.clientX - rect.left) / (rect.right - rect.left)) * 2 - 1;
      pointer.y =
        -((event.clientY - rect.top) / (rect.bottom - rect.top)) * 2 + 1;

      if (isBlockDown) {
        raycaster.setFromCamera(pointer, camera);

        const intersects = raycaster.intersectObjects(objects, false);

        if (intersects.length > 0) {
          const intersect = intersects[0];

          rollOverMesh.position
            .copy(intersect.point)
            .add(intersect.face.normal);
          rollOverMesh.position
            .divideScalar(50)
            .floor()
            .multiplyScalar(50)
            .addScalar(25);

          render();
        }
      }
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);

      render();
    }

    function render() {
      renderer.render(scene, camera);
    }

    function setupTween() {
      const duration = THREE.MathUtils.randInt(1000, 5000);

      const target = {};

      for (const prop in kinematics.joints) {
        if (kinematics.joints.hasOwnProperty(prop)) {
          if (!kinematics.joints[prop].static) {
            const joint = kinematics.joints[prop];

            const old = tweenParameters[prop];

            const position = old ? old : joint.zeroPosition;

            tweenParameters[prop] = position;

            target[prop] = THREE.MathUtils.randInt(
              joint.limits.min,
              joint.limits.max
            );
          }
        }
      }

      kinematicsTween = new TWEEN.Tween(tweenParameters)
        .to(target, duration)
        .easing(TWEEN.Easing.Quadratic.Out);

      kinematicsTween.onUpdate(function (object) {
        for (const prop in kinematics.joints) {
          if (kinematics.joints.hasOwnProperty(prop)) {
            if (!kinematics.joints[prop].static) {
              kinematics.setJointValue(prop, object[prop]);
            }
          }
        }
      });

      kinematicsTween.start();

      setTimeout(setupTween, duration);
    }

    function animate() {
      requestAnimationFrame(animate);

      if (isPlay) {
        render();
        TWEEN.update();
      }
    }
  }, []);
  return <div ref={refContainer} className="robot h-full" id="robot"></div>;
}

export default Robot;
