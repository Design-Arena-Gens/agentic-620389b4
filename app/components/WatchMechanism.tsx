'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import BalanceWheel from './parts/BalanceWheel'
import EscapementWheel from './parts/EscapementWheel'
import GearTrain from './parts/GearTrain'
import MainspringBarrel from './parts/MainspringBarrel'
import Plate from './parts/Plate'

interface WatchMechanismProps {
  speed: number
  isPaused: boolean
  showEscapement: boolean
  showGears: boolean
  showBarrel: boolean
  showBalance: boolean
  explodeView: number
  highlightPart: string | null
}

export default function WatchMechanism({
  speed,
  isPaused,
  showEscapement,
  showGears,
  showBarrel,
  showBalance,
  explodeView,
  highlightPart,
}: WatchMechanismProps) {
  const groupRef = useRef<THREE.Group>(null)
  const timeRef = useRef(0)

  useFrame((state, delta) => {
    if (!isPaused) {
      timeRef.current += delta * speed
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Plate explodeView={explodeView} />

      {showBarrel && (
        <MainspringBarrel
          time={timeRef.current}
          explodeView={explodeView}
          isHighlighted={highlightPart === 'barrel'}
        />
      )}

      {showGears && (
        <GearTrain
          time={timeRef.current}
          explodeView={explodeView}
          isHighlighted={highlightPart === 'gears'}
        />
      )}

      {showEscapement && (
        <EscapementWheel
          time={timeRef.current}
          explodeView={explodeView}
          isHighlighted={highlightPart === 'escapement'}
        />
      )}

      {showBalance && (
        <BalanceWheel
          time={timeRef.current}
          explodeView={explodeView}
          isHighlighted={highlightPart === 'balance'}
        />
      )}
    </group>
  )
}
