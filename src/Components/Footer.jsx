import React from 'react'
import { useCharStates  } from "../Components/utils/Context";
const Footer = () => {
  const { state } = useCharStates();
  return (
    <footer className={state.theme}>
      <a href="#top" className='volver'>
        VOLTAR PARA O TOPO
      </a>
      <div className='logos'>
      <img src="/images/DH.png" alt='DH-logo' />
        <div className='redes'>
          <img className="red" src="/images/ico-facebook.svg" alt="facebook" />
          <img className="red" src="/images/ico-instagram.svg" alt="instagram" />
          <img className="red" src="/images/ico-whatsapp.svg" alt="whatsapp" />
          <img className="red" src="/images/ico-tiktok.svg" alt="tiktok" />
        </div>
      </div>
        
    </footer>
  )
}

export default Footer
