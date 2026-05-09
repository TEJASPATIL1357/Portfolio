import { useRef, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float, Text, Sparkles, MeshDistortMaterial } from '@react-three/drei';

/* ─── Electron dot ─── */
function Electron({ radius, speed, offset, color }: {
  radius: number; speed: number; offset: number; color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime * speed + offset;
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
    }
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.07, 8, 8]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

/* ─── Glowing neon ring ─── */
function GlowRing({ radius, tube, tilt, tiltY = 0, color, speed, bright = false }: {
  radius: number; tube: number; tilt: number; tiltY?: number;
  color: string; speed: number; bright?: boolean;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = clock.elapsedTime * speed;
  });
  return (
    <group ref={ref} rotation={[tilt, tiltY, 0]}>
      <mesh>
        <torusGeometry args={[radius, tube, 12, 140]} />
        <meshStandardMaterial
          color={color} emissive={color}
          emissiveIntensity={bright ? 1.6 : 0.8}
          transparent opacity={bright ? 0.88 : 0.5}
          roughness={0} metalness={0.2} toneMapped={false}
        />
      </mesh>
      {/* halo */}
      <mesh scale={1.01}>
        <torusGeometry args={[radius, tube * 3, 6, 80]} />
        <meshBasicMaterial color={color} transparent opacity={0.05} />
      </mesh>
      <Electron radius={radius} speed={Math.abs(speed) * 2} offset={0}           color={color} />
      <Electron radius={radius} speed={Math.abs(speed) * 2} offset={Math.PI}     color={color} />
      <Electron radius={radius} speed={Math.abs(speed) * 2} offset={Math.PI / 2} color={color} />
    </group>
  );
}

/* ─── DataArc segmented ring ─── */
function DataArc({ radius, tilt, color, segments = 6, gap = 0.3 }: {
  radius: number; tilt: number; color: string; segments?: number; gap?: number;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = -clock.elapsedTime * 0.35;
  });
  const arcAngle = ((Math.PI * 2) / segments) * (1 - gap);
  const segmentAngle = (Math.PI * 2) / segments;
  return (
    <group ref={ref} rotation={[tilt, 0, 0]}>
      {Array.from({ length: segments }).map((_, i) => {
        const start = i * segmentAngle;
        const pts: THREE.Vector3[] = [];
        for (let s = 0; s <= 28; s++) {
          const a = start + (arcAngle * s) / 28;
          pts.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, 0));
        }
        const geo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 28, 0.016, 5, false);
        return (
          <mesh key={i} geometry={geo}>
            <meshBasicMaterial color={color} transparent opacity={0.55} />
          </mesh>
        );
      })}
    </group>
  );
}

/* ─── Core sphere ─── */
function CoreSphere() {
  return (
    <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.45}>
      <mesh>
        <sphereGeometry args={[1.05, 48, 48]} />
        <MeshDistortMaterial
          color="#e50914" emissive="#e50914" emissiveIntensity={0.6}
          distort={0.36} speed={2.2} roughness={0.05} metalness={0.9}
          transparent opacity={0.9} toneMapped={false}
        />
      </mesh>
      <mesh scale={1.2}>
        <sphereGeometry args={[1.05, 16, 16]} />
        <meshBasicMaterial color="#e50914" transparent opacity={0.06} side={THREE.BackSide} />
      </mesh>
    </Float>
  );
}

/* ─── Outer torus-knot cage ─── */
function CageKnot() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.elapsedTime * 0.11;
      ref.current.rotation.y = clock.elapsedTime * 0.18;
    }
  });
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[2.6, 0.032, 160, 7, 2, 3]} />
      <meshStandardMaterial color="#e50914" emissive="#e50914"
        emissiveIntensity={0.45} transparent opacity={0.22} toneMapped={false} />
    </mesh>
  );
}

/* ─── Floating tech text ─── */
const TECH_LABELS = [
  { text: 'REACT',      pos: [-3.4,  1.8,  0.5] as [number,number,number], col: '#61DAFB' },
  { text: 'JAVA',       pos: [ 3.2,  1.6,  0  ] as [number,number,number], col: '#f89820' },
  { text: 'SPRING',     pos: [-3.2, -1.4, -0.5] as [number,number,number], col: '#6DB33F' },
  { text: 'MYSQL',      pos: [ 3.4, -1.8,  0  ] as [number,number,number], col: '#00aaff' },
  { text: 'TAILWIND',   pos: [ 0.3,  3.4,  0  ] as [number,number,number], col: '#38BDF8' },
  { text: 'TYPESCRIPT', pos: [-0.3, -3.5,  0.5] as [number,number,number], col: '#3178c6' },
];

function TechLabel({ text, pos, col }: { text: string; pos: [number,number,number]; col: string }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.position.y = pos[1] + Math.sin(clock.elapsedTime * 0.55 + pos[0]) * 0.16;
  });
  return (
    <group ref={ref} position={pos}>
      <Text fontSize={0.19} color={col} anchorX="center" anchorY="middle"
        font="https://fonts.gstatic.com/s/robotomono/v12/L0tkDFI8S3S8o949-V76_t77.woff">
        {text}
      </Text>
      <mesh position={[0, 0, -0.04]}>
        <planeGeometry args={[text.length * 0.15 + 0.4, 0.34]} />
        <meshBasicMaterial color={col} transparent opacity={0.07} />
      </mesh>
      <mesh position={[0, 0, -0.05]}>
        <planeGeometry args={[text.length * 0.15 + 0.52, 0.46]} />
        <meshBasicMaterial color={col} wireframe transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

/* ─── Scene — desktop vs mobile ─── */
function Scene({ mobile }: { mobile: boolean }) {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[6,  6,  6]} intensity={3.5} color="#e50914" />
      <pointLight position={[-5,-4,  4]} intensity={1.8} color="#0044ff" />
      <pointLight position={[0,  0,  7]} intensity={1.0} color="#ffffff" />

      <CoreSphere />

      {/* 4 glowing rings */}
      <GlowRing radius={1.75} tube={0.022} tilt={0}           color="#e50914" speed={0.55}  bright />
      <GlowRing radius={2.1}  tube={0.016} tilt={Math.PI/3}   color="#00aaff" speed={-0.38} />
      {!mobile && <GlowRing radius={2.45} tube={0.012} tilt={Math.PI/1.6} color="#ccffff" speed={0.22} />}
      {!mobile && <GlowRing radius={2.78} tube={0.010} tilt={Math.PI/2.2} tiltY={0.5} color="#ffc107" speed={-0.15} />}

      {/* DataArc segments */}
      {!mobile && <DataArc radius={3.3}  tilt={0.4}  color="#e50914" segments={7}  gap={0.35} />}
      {!mobile && <DataArc radius={3.65} tilt={-0.6} color="#ffffff" segments={10} gap={0.5}  />}

      {/* Outer knot cage */}
      {!mobile && <CageKnot />}

      {/* Sparkles */}
      <Sparkles count={mobile ? 20 : 45} scale={8} size={1.1} speed={0.22} color="#e50914" />
      {!mobile && <Sparkles count={20} scale={8} size={0.7} speed={0.14} color="#ffffff" />}

      {/* Tech labels — hide on mobile to avoid font loading */}
      {!mobile && TECH_LABELS.map(l => (
        <Float key={l.text} speed={1.3} rotationIntensity={0.1} floatIntensity={0.3}>
          <TechLabel text={l.text} pos={l.pos} col={l.col} />
        </Float>
      ))}
    </>
  );
}

export default function TechOrb3D() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="w-full h-full lg:min-h-[420px]">
      <Canvas
        camera={{ position: [0, 0, mobile ? 12 : 9.5], fov: mobile ? 50 : 46 }}
        gl={{
          alpha: true, antialias: !mobile,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.3,
          powerPreference: 'high-performance',
        }}
        dpr={[1, mobile ? 1 : 1.5]}
        frameloop={mobile ? 'demand' : 'always'}
      >
        <Suspense fallback={null}>
          <Scene mobile={mobile} />
        </Suspense>
      </Canvas>
    </div>
  );
}
