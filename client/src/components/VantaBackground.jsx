import React, { useEffect, useRef } from 'react'

const VantaBackground = () => {
  const vantaRef = useRef(null)

  useEffect(() => {
    const loadVanta = async () => {
      const THREE = await import('three')
      const VANTA = await import('vanta/dist/vanta.globe.min')

      const vantaEffect = VANTA.default({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xD80074, // Primary color (pink)
        backgroundColor: 0x000000,
      })

      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }

    loadVanta()
  }, [])

  return <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full z-0" />
}

export default VantaBackground