import {useState} from 'react'
import Logo from "../assets/img/logo.png"
import Explorer from "../assets/img/explorer.png"
import Security from "../assets/img/security.png"
import Sound from "../assets/img/sound.png"
import Clock from 'react-live-clock';
import Startmenu from './Startmenu'



function Footer() {
    const [openModal, setOpenModal] = useState(false)

    
    
  return (
    <div className='windowsxp__footer'>
      <div className='windowsxp__start'>
          <div className='windowsxp__s'>
             <div className='windos' onClick={() => {setOpenModal(true);}}>
               <img src={Logo} alt=""/>
               <p> start </p>
               {openModal &&  <Startmenu setOpenModal={setOpenModal} />}

              </div>
             <div className='windowsxp__explorer'>
                <a href="https://www.google.com/">
                  <img src={Explorer} alt=''/>
                </a>
             </div>
          </div>
      </div>
      <div className='windowsxp__end'>
           <div className='windowsxpend__img'>
             <img src={Security} alt='' className='security'/>
             <img src={Sound} alt='' className='sound'/>
           </div>
           <div className='windowsxp__clock'>
            <p> <Clock format={'HH:mm:ss'} ticking={true} timezone={'TR/Turkey'} /></p>
            </div>
      </div>
    </div>
  )
}

export default Footer