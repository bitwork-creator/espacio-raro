import { useEffect, useRef } from 'react'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const posRef = useRef({ x: 0, y: 0, rx: 0, ry: 0 })

  useEffect(() => {
    const pos = posRef.current
    let animId

    const onMove = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x - 4}px, ${pos.y - 4}px)`
      }
    }

    const animate = () => {
      pos.rx += (pos.x - pos.rx) * 0.1
      pos.ry += (pos.y - pos.ry) * 0.1
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${pos.rx - 22}px, ${pos.ry - 22}px)`
      }
      animId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    animId = requestAnimationFrame(animate)

    const onEnter = () => ringRef.current?.classList.add('expanded')
    const onLeave = () => ringRef.current?.classList.remove('expanded')

    document.addEventListener('mouseenter', onEnter, true)
    document.addEventListener('mouseleave', onLeave, true)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
      document.removeEventListener('mouseenter', onEnter, true)
      document.removeEventListener('mouseleave', onLeave, true)
    }
  }, [])

  useEffect(() => {
    const interactables = document.querySelectorAll('a, button')
    const onEnter = () => ringRef.current?.classList.add('expanded')
    const onLeave = () => ringRef.current?.classList.remove('expanded')
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    return () => {
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  })

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
      <Hero />
      <Gallery />
      <Location />
      <Footer />
    </>
  )
}
