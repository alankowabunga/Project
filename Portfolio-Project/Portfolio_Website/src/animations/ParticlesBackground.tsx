// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { Particles } from 'react-tsparticles'
import particlesConfig from './particles-config/particlesConfig'
import { loadFull } from 'tsparticles'
import { Engine } from 'tsparticles-engine'

export const ParticlesBackground = () => {

  const loadInit = async (main: Engine) => {
    await loadFull(main);
  }
  return (
    <Particles init={loadInit} options={particlesConfig} />
  )
}
