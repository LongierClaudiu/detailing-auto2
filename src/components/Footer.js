import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          THE ULTIMATE DETAILING EXPERIENCE
        </p>
        <p className='footer-subscription-text'>
         
        </p>
        
        
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Despre Noi</h2>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>
            
              
              </Link>
            <a href="tel:0753568474"><i class="fas fa-phone"></i> <span class="mr-1"></span> 0753568474</a>
              
            <Link to='/'>
            
            </Link>
            <a href="https://www.google.com/maps/place/45%C2%B045'47.1%22N+21%C2%B001'11.2%22E/@45.7630627,21.0192877,19.25z/data=!4m5!3m4!1s0x0:0x0!8m2!3d45.7630779!4d21.0197648?hl=ro"><i class="fas fa-map-marker-alt"></i> <span class="mr-1"></span> Beregsau Mare, 67</a>
            <Link to='/'>
            
            </Link>
            <a href="mailto:roscamitza21@yahoo.com"><i class="fas fa-envelope"></i> <span class="mr-1"></span> EMAIL</a>
            <Link to='/'></Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'></Link>
            <Link to='/'>
            <a href="LINK FACEBOOK"><i class="fab fa-facebook"></i> <span class="mr-1"></span> EUP DETAILING </a>
            </Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
             EUP DETAILING
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>EUP DETAILING</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;


/*<div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
        <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
*/