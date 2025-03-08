import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { Mesh } from 'three';

function Jupiter() {
  const meshRef = useRef<Mesh>(null);
  const [error, setError] = useState(false);
  
  const texture = useTexture(
    'https://images.unsplash.com/photo-1630839437035-dac17da580d0?auto=format&fit=crop&w=2000&q=80',
    (texture) => {
      texture.encoding = THREE.sRGBEncoding;
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
    },
    () => setError(true)
  );

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  if (error) {
    return (
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="#d3a97c" roughness={0.7} metalness={0.3} />
      </mesh>
    );
  }

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        roughness={0.7}
        metalness={0.3}
      />
    </mesh>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[2, 16, 16]} />
      <meshStandardMaterial color="#8b6b4d" wireframe />
    </mesh>
  );
}

export default function Jupiter3D() {
  return (
    <div className="w-full h-[400px] md:h-[500px] bg-black/20 rounded-3xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Suspense fallback={<LoadingFallback />}>
          <Jupiter />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI * 3/4}
        />
      </Canvas>
    </div>
  );
}