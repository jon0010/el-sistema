import { useEffect, useRef } from 'react'

type DragScrollOptions = {
  centerWhenFits?: boolean
}

export function useDragScroll<T extends HTMLElement>(options: DragScrollOptions = {}) {
  const { centerWhenFits = false } = options
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let isDragging = false
    let startX = 0
    let scrollLeft = 0
    let moved = false

    const freezeScroll = () => {
      const pos = el.scrollLeft
      el.scrollLeft = pos
    }

    const updateCenter = () => {
      if (!centerWhenFits || el.children.length === 0) return

      const gap = parseFloat(getComputedStyle(el).columnGap || getComputedStyle(el).gap || '0') || 0
      let total = 0
      Array.from(el.children).forEach((child, index) => {
        total += (child as HTMLElement).offsetWidth
        if (index < el.children.length - 1) total += gap
      })

      if (total <= el.clientWidth) {
        const pad = (el.clientWidth - total) / 2
        el.style.paddingLeft = `${pad}px`
        el.style.paddingRight = `${pad}px`
        el.style.justifyContent = 'center'
      } else {
        el.style.paddingLeft = '24px'
        el.style.paddingRight = '24px'
        el.style.justifyContent = 'flex-start'
      }
    }

    const startDrag = (clientX: number) => {
      isDragging = true
      moved = false
      startX = clientX
      scrollLeft = el.scrollLeft
      el.classList.add('is-dragging')
    }

    const moveDrag = (clientX: number) => {
      if (!isDragging) return
      const delta = clientX - startX
      if (Math.abs(delta) > 4) moved = true
      el.scrollLeft = scrollLeft - delta
    }

    const endDrag = () => {
      if (!isDragging) return
      isDragging = false
      el.classList.remove('is-dragging')
      freezeScroll()
    }

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return
      startDrag(e.clientX)
      el.setPointerCapture(e.pointerId)
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging || !el.hasPointerCapture(e.pointerId)) return
      e.preventDefault()
      moveDrag(e.clientX)
    }

    const onPointerUp = (e: PointerEvent) => {
      if (!el.hasPointerCapture(e.pointerId)) return
      el.releasePointerCapture(e.pointerId)
      endDrag()
    }

    const onPointerCancel = (e: PointerEvent) => {
      if (el.hasPointerCapture(e.pointerId)) {
        el.releasePointerCapture(e.pointerId)
      }
      endDrag()
    }

    const onClickCapture = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault()
        e.stopPropagation()
        moved = false
      }
    }

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault()
      }
    }

    el.addEventListener('pointerdown', onPointerDown)
    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerup', onPointerUp)
    el.addEventListener('pointercancel', onPointerCancel)
    el.addEventListener('click', onClickCapture, true)
    el.addEventListener('wheel', onWheel, { passive: false })

    updateCenter()
    const ro = new ResizeObserver(updateCenter)
    ro.observe(el)
    Array.from(el.children).forEach((child) => ro.observe(child))
    window.addEventListener('resize', updateCenter)
    el.querySelectorAll('img').forEach((img) => {
      if (!img.complete) img.addEventListener('load', updateCenter, { once: true })
    })

    return () => {
      el.removeEventListener('pointerdown', onPointerDown)
      el.removeEventListener('pointermove', onPointerMove)
      el.removeEventListener('pointerup', onPointerUp)
      el.removeEventListener('pointercancel', onPointerCancel)
      el.removeEventListener('click', onClickCapture, true)
      el.removeEventListener('wheel', onWheel)
      ro.disconnect()
      window.removeEventListener('resize', updateCenter)
    }
  }, [centerWhenFits])

  return ref
}
