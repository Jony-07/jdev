import React, { useCallback } from 'react'
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import ParticleOptions from '../components/ParticleOptions';
function ParticlesBg() {
    const particlesInit = useCallback((engine)=>{
    loadFull(engine)}, [])

  return (
    <div>
     <Particles 
     init={particlesInit}
     options={ParticleOptions}
     />
    </div>
  )
}

export default ParticlesBg
