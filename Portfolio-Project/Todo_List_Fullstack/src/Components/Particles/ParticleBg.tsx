// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line
import '../../App.css'
import Particles from 'react-tsparticles';
import {Engine} from  'tsparticles-engine';
import {loadFull} from 'tsparticles';
import Config from './Config';

export const ParticleBg = () => {

    const loadInit = async(engine:Engine)=>{
       await loadFull(engine);
    }

  return (
    <Particles init={loadInit} options={Config} id='particle-bg'/>
  )
}
