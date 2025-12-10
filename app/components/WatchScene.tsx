'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useState } from 'react'
import WatchMechanism from './WatchMechanism'
import Controls from './Controls'

export default function WatchScene() {
  const [speed, setSpeed] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const [showEscapement, setShowEscapement] = useState(true)
  const [showGears, setShowGears] = useState(true)
  const [showBarrel, setShowBarrel] = useState(true)
  const [showBalance, setShowBalance] = useState(true)
  const [explodeView, setExplodeView] = useState(0)
  const [highlightPart, setHighlightPart] = useState<string | null>(null)

  return (
    <>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[8, 6, 8]} fov={50} />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={20}
          maxPolarAngle={Math.PI / 1.5}
        />

        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        <pointLight position={[0, 5, 0]} intensity={0.5} />

        <WatchMechanism
          speed={speed}
          isPaused={isPaused}
          showEscapement={showEscapement}
          showGears={showGears}
          showBarrel={showBarrel}
          showBalance={showBalance}
          explodeView={explodeView}
          highlightPart={highlightPart}
        />
      </Canvas>

      <Controls
        speed={speed}
        setSpeed={setSpeed}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
        showEscapement={showEscapement}
        setShowEscapement={setShowEscapement}
        showGears={showGears}
        setShowGears={setShowGears}
        showBarrel={showBarrel}
        setShowBarrel={setShowBarrel}
        showBalance={showBalance}
        setShowBalance={setShowBalance}
        explodeView={explodeView}
        setExplodeView={setExplodeView}
        highlightPart={highlightPart}
        setHighlightPart={setHighlightPart}
      />
    </>
  )
}
