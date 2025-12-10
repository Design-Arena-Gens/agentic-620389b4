'use client'

import { CSSProperties } from 'react'

interface ControlsProps {
  speed: number
  setSpeed: (speed: number) => void
  isPaused: boolean
  setIsPaused: (paused: boolean) => void
  showEscapement: boolean
  setShowEscapement: (show: boolean) => void
  showGears: boolean
  setShowGears: (show: boolean) => void
  showBarrel: boolean
  setShowBarrel: (show: boolean) => void
  showBalance: boolean
  setShowBalance: (show: boolean) => void
  explodeView: number
  setExplodeView: (value: number) => void
  highlightPart: string | null
  setHighlightPart: (part: string | null) => void
}

export default function Controls({
  speed,
  setSpeed,
  isPaused,
  setIsPaused,
  showEscapement,
  setShowEscapement,
  showGears,
  setShowGears,
  showBarrel,
  setShowBarrel,
  showBalance,
  setShowBalance,
  explodeView,
  setExplodeView,
  highlightPart,
  setHighlightPart,
}: ControlsProps) {
  const panelStyle: CSSProperties = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    background: 'rgba(0, 0, 0, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    color: 'white',
    minWidth: '250px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
  }

  const sectionStyle: CSSProperties = {
    marginBottom: '20px',
    paddingBottom: '15px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  }

  const titleStyle: CSSProperties = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: '#4fd1c5',
  }

  const labelStyle: CSSProperties = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '13px',
    color: '#a0aec0',
  }

  const buttonStyle: CSSProperties = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    width: '100%',
    marginBottom: '10px',
    transition: 'transform 0.2s',
  }

  const sliderStyle: CSSProperties = {
    width: '100%',
    marginTop: '8px',
  }

  const checkboxContainerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
  }

  const checkboxStyle: CSSProperties = {
    marginRight: '8px',
    cursor: 'pointer',
  }

  const highlightButtonStyle = (part: string): CSSProperties => ({
    ...buttonStyle,
    background: highlightPart === part
      ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
      : 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    padding: '8px 12px',
    fontSize: '12px',
    marginBottom: '6px',
  })

  const infoStyle: CSSProperties = {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    background: 'rgba(0, 0, 0, 0.8)',
    padding: '15px',
    borderRadius: '8px',
    color: 'white',
    fontSize: '12px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    maxWidth: '300px',
  }

  return (
    <>
      <div style={panelStyle}>
        <h2 style={{ ...titleStyle, fontSize: '20px', marginBottom: '20px' }}>
          Watch Controls
        </h2>

        <div style={sectionStyle}>
          <h3 style={titleStyle}>Animation</h3>
          <button
            style={buttonStyle}
            onClick={() => setIsPaused(!isPaused)}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {isPaused ? '▶ Play' : '⏸ Pause'}
          </button>

          <label style={labelStyle}>
            Speed: {speed.toFixed(1)}x
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={speed}
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
              style={sliderStyle}
            />
          </label>
        </div>

        <div style={sectionStyle}>
          <h3 style={titleStyle}>Components</h3>
          <div style={checkboxContainerStyle}>
            <input
              type="checkbox"
              id="balance"
              checked={showBalance}
              onChange={(e) => setShowBalance(e.target.checked)}
              style={checkboxStyle}
            />
            <label htmlFor="balance" style={{ fontSize: '14px', cursor: 'pointer' }}>
              Balance Wheel
            </label>
          </div>
          <div style={checkboxContainerStyle}>
            <input
              type="checkbox"
              id="escapement"
              checked={showEscapement}
              onChange={(e) => setShowEscapement(e.target.checked)}
              style={checkboxStyle}
            />
            <label htmlFor="escapement" style={{ fontSize: '14px', cursor: 'pointer' }}>
              Escapement Wheel
            </label>
          </div>
          <div style={checkboxContainerStyle}>
            <input
              type="checkbox"
              id="gears"
              checked={showGears}
              onChange={(e) => setShowGears(e.target.checked)}
              style={checkboxStyle}
            />
            <label htmlFor="gears" style={{ fontSize: '14px', cursor: 'pointer' }}>
              Gear Train
            </label>
          </div>
          <div style={checkboxContainerStyle}>
            <input
              type="checkbox"
              id="barrel"
              checked={showBarrel}
              onChange={(e) => setShowBarrel(e.target.checked)}
              style={checkboxStyle}
            />
            <label htmlFor="barrel" style={{ fontSize: '14px', cursor: 'pointer' }}>
              Mainspring Barrel
            </label>
          </div>
        </div>

        <div style={sectionStyle}>
          <h3 style={titleStyle}>View</h3>
          <label style={labelStyle}>
            Explode View: {explodeView.toFixed(1)}
            <input
              type="range"
              min="0"
              max="3"
              step="0.1"
              value={explodeView}
              onChange={(e) => setExplodeView(parseFloat(e.target.value))}
              style={sliderStyle}
            />
          </label>
        </div>

        <div style={{ ...sectionStyle, border: 'none' }}>
          <h3 style={titleStyle}>Inspect</h3>
          <button
            style={highlightButtonStyle('balance')}
            onClick={() => setHighlightPart(highlightPart === 'balance' ? null : 'balance')}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Balance Wheel
          </button>
          <button
            style={highlightButtonStyle('escapement')}
            onClick={() => setHighlightPart(highlightPart === 'escapement' ? null : 'escapement')}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Escapement
          </button>
          <button
            style={highlightButtonStyle('gears')}
            onClick={() => setHighlightPart(highlightPart === 'gears' ? null : 'gears')}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Gear Train
          </button>
          <button
            style={highlightButtonStyle('barrel')}
            onClick={() => setHighlightPart(highlightPart === 'barrel' ? null : 'barrel')}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Mainspring
          </button>
        </div>
      </div>

      <div style={infoStyle}>
        <strong style={{ color: '#4fd1c5', display: 'block', marginBottom: '8px' }}>
          Navigation:
        </strong>
        <div>• Left click + drag to rotate</div>
        <div>• Right click + drag to pan</div>
        <div>• Scroll to zoom in/out</div>
      </div>
    </>
  )
}
