import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

const DroneModel = () => {
  const { scene } = useGLTF("/models/drone.glb");
  const droneRef = useRef();

  useFrame(() => {
    if (droneRef.current) {
      // slight idle rotation effect
      droneRef.current.rotation.y += 0.005;
    }
  });

  return (
    <primitive ref={droneRef} object={scene} scale={10} position={[0, 0, 0]} />
  );
};

const MIN_RADIUS = 7.5;
const MAX_RADIUS = 15;
const DEPTH = 2;
const LEFT_COLOR = "22c55e"; // Green color
const RIGHT_COLOR = "00ff88"; // Lime green color
const NUM_POINTS = 2500;

const getGradientStop = (ratio) => {
  ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio;

  const c0 = LEFT_COLOR.match(/.{1,2}/g).map(
    (oct) => parseInt(oct, 16) * (1 - ratio)
  );
  const c1 = RIGHT_COLOR.match(/.{1,2}/g).map(
    (oct) => parseInt(oct, 16) * ratio
  );
  const ci = [0, 1, 2].map((i) => Math.min(Math.round(c0[i] + c1[i]), 255));
  const color = ci
    .reduce((a, v) => (a << 8) + v, 0)
    .toString(16)
    .padStart(6, "0");

  return `#${color}`;
};

const calculateColor = (x) => {
  const maxDiff = MAX_RADIUS * 2;
  const distance = x + MAX_RADIUS;

  const ratio = distance / maxDiff;

  const stop = getGradientStop(ratio);
  return stop;
};

const randomFromInterval = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const pointsInner = Array.from(
  { length: NUM_POINTS },
  (v, k) => k + 1
).map((num) => {
  const randomRadius = randomFromInterval(MIN_RADIUS, MAX_RADIUS);
  const randomAngle = Math.random() * Math.PI * 2;

  const x = Math.cos(randomAngle) * randomRadius;
  const y = Math.sin(randomAngle) * randomRadius;
  const z = randomFromInterval(-DEPTH, DEPTH);

  const color = calculateColor(x);

  return {
    idx: num,
    position: [x, y, z],
    color,
  };
});

export const pointsOuter = Array.from(
  { length: NUM_POINTS / 4 },
  (v, k) => k + 1
).map((num) => {
  const randomRadius = randomFromInterval(MIN_RADIUS / 2, MAX_RADIUS * 2);
  const angle = Math.random() * Math.PI * 2;

  const x = Math.cos(angle) * randomRadius;
  const y = Math.sin(angle) * randomRadius;
  const z = randomFromInterval(-DEPTH * 10, DEPTH * 10);

  const color = calculateColor(x);

  return {
    idx: num,
    position: [x, y, z],
    color,
  };
});

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.05, 8, 8]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.8}
        roughness={0.3}
        color={color}
        transparent
        opacity={0.7}
      />
    </Sphere>
  );
};

const ParticleRings = () => {
  const controlsRef = useRef();

  return (
    <div className="relative w-full h-screen">
      <Canvas
        camera={{
          position: [0, 0, 20],
        }}
        style={{ background: "transparent" }}
        className="absolute inset-0">
        {/* Shared OrbitControls for both particles and drone */}
        <OrbitControls
          ref={controlsRef}
          enableZoom={true}
          enablePan={true}
          rotateSpeed={0.8}
          zoomSpeed={0.6}
          minDistance={8}
          maxDistance={25}
        />

        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#00ff88"
        />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#22c55e" />

        {/* Particle System */}
        <PointCircle />

        {/* Drone Model */}
        <DroneModel />
      </Canvas>
    </div>
  );
};

export default ParticleRings;
