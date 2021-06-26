import {Link, Redirect, Route, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'
import Header from '../Header'

const NotFound = () => (
  <div className="not-found-container">
    <div className="head-cont">
      <img
        src="https://res.cloudinary.com/pardhu/image/upload/v1624033439/Group_7399_qs30bh.png"
        className="logo-img"
        alt="..."
      />
    </div>
    <div className="content-cont">
      <h1 className="head1">Lost Your Way </h1>
      <p className="para">
        Sorry, we can't find the page.You'll find lots to explore on Home page
      </p>
      <div>
        <button className="but1">Home</button>
      </div>
      <p className="para2">Error Code NSES-404</p>
    </div>
  </div>
)

export default NotFound
