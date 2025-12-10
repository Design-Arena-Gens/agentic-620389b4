'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const WatchScene = dynamic(() => import('./components/WatchScene'), {
  ssr: false,
})

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Suspense fallback={<div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '24px'
      }}>Loading 3D Watch...</div>}>
        <WatchScene />
      </Suspense>
    </main>
  )
}
