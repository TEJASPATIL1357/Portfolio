import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Float, Sparkles, PerspectiveCamera, useAnimations } from '@react-three/drei';
import { Suspense, useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useScroll } from 'framer-motion';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';

// ── detect mobile once ──────────────────────────────────────────────────────
const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 768;

// ── lightweight environment ──────────────────────────────────────────────────
function VaultEnvironment() {
  const { scrollYProgress } = useScroll();
  const mouse = useRef(new THREE.Vector2());
  const mobile = isMobile();

  useEffect(() => {
    if (mobile) return;
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [mobile]);

  return (
    <>
      <ambientLight intensity={0.08} />
      {/* Removed castShadow — expensive */}
      <spotLight position={[5, 10, 5]} angle={0.2} penumbra={1} intensity={12} color="#e50914" />
      <pointLight position={[-5, 2, 2]} intensity={15} color="#ffc107" />

      <ScrollScene mouse={mouse} mobile={mobile} />

      {/* Reduced sparkles */}
      <Sparkles count={mobile ? 0 : 8} scale={15} size={2} speed={0.3} color="#e50914" />
    </>
  );
}

function ScrollScene({ mouse, mobile }: { mouse: React.MutableRefObject<THREE.Vector2>; mobile: boolean }) {
  const { scrollYProgress } = useScroll();
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    const p = scrollYProgress.get();
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, -1 + p * 2, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, -Math.PI * 0.1 * p, 0.05);
  });

  return (
    <group ref={groupRef}>
      {/* Backdrop */}
      <mesh position={[0, 0, -12]} scale={20}>
        <planeGeometry args={[2, 1.2]} />
        <meshStandardMaterial color="#000000" emissive="#e50914" emissiveIntensity={0.015} />
      </mesh>

      {/* Character — desktop only */}
      {!mobile && (
        <Suspense fallback={null}>
          <HeistCharacter
            url="https://threejs.org/examples/models/gltf/Soldier.glb"
            position={[0, -2, 0]}
            scale={3.2}
            rotation={[0, Math.PI, 0]}
            mouse={mouse}
          />
        </Suspense>
      )}

      {/* Fewer dossiers & bars on desktop, none on mobile */}
      {!mobile && <FloatingDossiers count={3} />}
      {!mobile && <GoldBars count={4} />}

      {/* Floor — desktop only (heavy) */}
      {!mobile && (
        <mesh rotation-x={-Math.PI / 2} position={[0, -2, 0]}>
          <planeGeometry args={[40, 40]} />
          <meshStandardMaterial color="#000000" roughness={0.15} metalness={0.85} />
        </mesh>
      )}
    </group>
  );
}

function HeistCharacter({ url, mouse, ...props }: any) {
  const group = useRef<THREE.Group>(null!);
  const { scene, animations }: any = useGLTF(url);
  const { actions } = useAnimations(animations, group);
  const headRef = useRef<THREE.Object3D>();

  useEffect(() => {
    if (actions?.['Idle']) actions['Idle'].play();
    else if (actions && Object.keys(actions).length > 0) actions[Object.keys(actions)[0]]?.play();

    scene.traverse((obj: any) => {
      if (obj.isBone && obj.name.toLowerCase().includes('head')) headRef.current = obj;
      if (obj.isMesh) obj.material.envMapIntensity = 0.3;
    });
  }, [scene, actions]);

  useFrame(() => {
    if (headRef.current) {
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, mouse.current.y * 0.4, 0.08);
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, -mouse.current.x * 0.5, 0.08);
    }
  });

  return <group ref={group} {...props}><primitive object={scene} /></group>;
}

function FloatingDossiers({ count = 3 }) {
  const items = useMemo(() => Array.from({ length: count }).map(() => ({
    position: [(Math.random() - 0.5) * 12, Math.random() * 4, (Math.random() - 0.5) * 8 - 4] as [number,number,number],
    rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number,number,number],
  })), [count]);

  return (
    <group>
      {items.map((item, i) => (
        <Float key={i} speed={0.8} rotationIntensity={0.6} floatIntensity={0.6}>
          <mesh position={item.position} rotation={item.rotation}>
            <planeGeometry args={[0.6, 0.8]} />
            <meshStandardMaterial color="#ffffff" transparent opacity={0.4} side={THREE.DoubleSide} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function GoldBars({ count = 4 }) {
  const bars = useMemo(() => Array.from({ length: count }).map(() => ({
    position: [(Math.random() - 0.5) * 18, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10 - 8] as [number,number,number],
    rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number,number,number],
    scale: Math.random() * 0.35 + 0.2,
  })), [count]);

  return (
    <group>
      {bars.map((bar, i) => (
        <Float key={i} speed={1.2} rotationIntensity={0.8} floatIntensity={0.4}>
          <mesh position={bar.position} rotation={bar.rotation} scale={bar.scale}>
            <boxGeometry args={[1, 0.4, 0.4]} />
            <meshStandardMaterial color="#ffc107" metalness={1} roughness={0.25} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function ScrollCamera() {
  const { scrollYProgress } = useScroll();
  const { camera } = useThree();
  useFrame(() => {
    const p = scrollYProgress.get();
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 4 + p * 6, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, p * 1, 0.04);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

const Global3DBackground = () => {
  const mobile = isMobile();

  // Skip 3D background entirely on mobile — massive perf win
  if (mobile) return null;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas shadows={false} dpr={[1, 1]}>
        <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={50} />
        <Suspense fallback={null}>
          <VaultEnvironment />
          <ScrollCamera />
          <EffectComposer multisampling={0} disableNormalPass>
            <Bloom luminanceThreshold={1.6} intensity={0.7} radius={0.2} />
            <Vignette darkness={1.0} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Global3DBackground;
