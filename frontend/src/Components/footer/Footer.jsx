
import { Link } from 'react-router-dom'
import "./footer.css"

function Footer() {
  return (
      <div className='footer'>
        <div className='footer-link'>
          <Link className='links' to="/">Home</Link>
          <hr />
          <Link className='links' to="/contact">Contact</Link>
        </div>
       
        
      </div>
  )
}

export default Footer