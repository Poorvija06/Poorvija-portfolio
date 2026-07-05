import { useCallback, useRef, useState } from 'react'

/**
 * Tracks normalized mouse position (-0.5 to 0.5 on each axis) relative
 * to a target element, for use in tilt / parallax interactions.
 */
export function useTilt(strength = 12) {
  const ref = useRef(null)
  const [style, setStyle] = useState({})

  const onMouseMove = useCallback(
    (e) => {
      const node = ref.current
      if (!node) return
      const rect = node.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      setStyle({
        transform: `perspective(1000px) rotateY(${x * strength}deg) rotateX(${
          -y * strength
        }deg) scale3d(1.02, 1.02, 1.02)`,
      })
    },
    [strength]
  )

  const onMouseLeave = useCallback(() => {
    setStyle({
      transform:
        'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)',
    })
  }, [])

  return { ref, style, onMouseMove, onMouseLeave }
}
