import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
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
          <Link className="nav-link" to="/Popular">
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
        <div className="but-cont">
          <button className="logout-button" onClick={onClickLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
