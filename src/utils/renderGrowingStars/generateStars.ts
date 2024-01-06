import { type Application } from 'pixi.js'
import { Star } from './Star'

const minScale = 200
const maxScale = 340

function pickRandomly<T> (...elements: T[]): T {
  return elements[Math.floor(Math.random() * elements.length)] as T
}

function randomRange (min: number, max: number): number {
  return Math.random() * (max - min) + min
}

const generateStars = (app: Application, count: number): void => {
  for (let i = 0; i < count; i++) {
    const color1 = 'black'
    const color2 = 'white'

    const speed = pickRandomly(0.25, -0.25)

    const x = Math.random() * window.innerWidth / 2
    const y = Math.random() * window.innerHeight
    const rotation = Math.random() * 360
    const scale = randomRange(minScale, maxScale)

    const star = new Star(app, color1, color2, speed)
    star.position.set(x, y)
    star.rotation = rotation
    star.scale.set(scale)
  }
}

export default generateStars
