import React from 'react'
import "./Footer.css"
import CallIcon from '@mui/icons-material/Call';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  return (
    <div className='footer_root'>

    <div className='footer_container'>
        <div className="footer_text">
            <h2 className='footer-text-h2'> <span className='span-t'>T</span> Taxslayer Portal</h2>
            <p className='footer-p-one'>Keep Up To Date</p>
            <p className='footer-p-two'>join our newsletter for regular updates. no spam</p>
            <div>
            <p className='email-p'>Enter Your Email</p>
            <input className='footer_email' type="email" placeholder='taxslayerportal@gamil.com' required/>
            <button className='footer_btn'>About Us</button>  
            </div>
      
        </div>
        <div className="footer_text">
            <h2 className='footer-heding-two'>Taxslayer Portal</h2>
            <p className='footer-text-list'>Vission</p>
            <p className='footer-text-list'>Mission</p>
            <p className='footer-text-list'>About Us</p>
            <p className='footer-text-list'>News</p>
            <p className='footer-text-list'>Careers</p>
            <p className='footer-text-list'>Privacy Policy</p>
            <p className='footer-text-list'>Contact Us</p>
            
        </div>
        <div>
            <h2 className='footer-heding-three'>Contact Us</h2>
            <div className="footer_last-item">
              <h3 className='footer-icon'>T</h3>
            <p className='footer-text-list'>Taxslayer Portal</p>
            </div>
            <div className="footer_last-item">
              <CallIcon className='footer-icon'/>
            <p className='footer-text-list'>+5814 816-848940</p>
            </div>
            <div className="footer_last-item">
              <MailOutlinedIcon className='footer-icon'/>
            <p className='footer-text-list'>taxslayerportal@gmail.com</p>
            </div>
        </div>
       
    </div>
    <div className='footer_last'>
  <p className='last-p'>Follow Us</p>
  <FacebookSharpIcon className='footer-icon-last'/>
  <InstagramIcon className='footer-icon-last'/>
  <TwitterIcon className='footer-icon-last'/>
   </div>
   <div className="footer_line"></div>
   <div className='footer-copyright'>
   <div>
    <p className='copyright'>2022 ©Taxslayer Portal</p>
   </div>
   <div className='fooert_news'>
    <p  className='footer_last_text'>About</p>
    <p className='footer_last_text'>News</p>
    <p className='footer_last_text'>Contact</p>
    <p className='footer_last_text'>Privacy Policy</p>
   </div>
   </div>
    </div>
  )
}

export default Footer