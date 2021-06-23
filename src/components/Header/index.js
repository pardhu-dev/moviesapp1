import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <img
        src="https://res.cloudinary.com/pardhu/image/upload/v1624033439/Group_7399_qs30bh.png"
        className="img-logo"
        alt="Logo"
      />
      <ul className="nav-menu">
        <Link className="nav-link" to="/">
          <li>Home</li>
        </Link>
        <Link className="nav-link" to="/about">
          <li>Popular</li>
        </Link>
      </ul>
    </div>

    <div className="img-cont">
      <img
        src="https://res.cloudinary.com/pardhu/image/upload/v1624085672/Avatar_dcitrh.png"
        alt="Log"
        className="img-logo2"
      />
    </div>
  </nav>
)

export default Header
