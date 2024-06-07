import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="waveContainer">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
              alt="wave"
              className="waveLogo"
            />
          </div>
          <p className="waveName">Wave</p>
        </div>
        <div className="liSection">
          <Link to="/" className="navLink">
            <li className="button">Home</li>
          </Link>

          <Link to="/about" className="navLink">
            <li className="button">About</li>
          </Link>
          <Link to="/contact" className="navLink">
            <li className="button">Contact</li>
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
