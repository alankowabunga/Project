import { Particles } from 'react-tsparticles';
import particlesConfig from './particlesConfig';
import {  loadFull } from 'tsparticles';
import { useCallback } from 'react';
import { Engine } from 'tsparticles-engine';
import '../App.css';

export const ParticlesBackground = () => {


  const loadInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles init={loadInit} options={particlesConfig} className='particle-bg' />
  )
}
