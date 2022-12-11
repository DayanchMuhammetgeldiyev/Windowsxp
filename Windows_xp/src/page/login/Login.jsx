import React from 'react'
import Loginpic from "../../assets/img/windowsxp.png"

function Login() {
  return (
    <section className='windowsxp__login'>
        <div className='windowsxp__up'>
            1
        </div>
        <div className='windowsxp__middle'>
          <div className='windowsxp__lscs'>
              <img src={Loginpic} alt="" />
          </div>
          <div className='windowsxp__form'>
            <form action="/" method="post">
              <input type="text" />
            </form>
          </div>
        </div>
        <div className='windowsxp__last'>
            3
        </div>
    </section>
  )
}

export default Login