import { Application, Assets, extensions } from 'pixi.js'
import { loadGLSL } from './loadGLSL'
import generateStars from './generateStars'

export const renderGrowingStars = async (canvas: HTMLCanvasElement): Promise<void> => {
  extensions.add(loadGLSL)
  const vert = Assets.load('StarPattern.vert')
  const frag = Assets.load('StarPattern.frag')
  await Promise.all([vert, frag])

  const app = new Application({
    view: canvas,
    resolution: 1,
    autoDensity: true,
    backgroundColor: 0xffffff,
    width: window.innerWidth * 0.4,
    height: window.innerHeight
  })

  app.render()
  generateStars(app, 30)
}
