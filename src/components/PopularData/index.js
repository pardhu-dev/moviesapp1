import {Component} from 'react'
import Cookies from 'js-cookie'

import PopularCard from '../PopularCard'
import './index.css'

class PopularData extends Component {
  state = {
    popularMovieList: [],
  }

  componentDidMount() {
    this.getPopularMovies()
  }

  getPopularMovies = async () => {
    const apiUrl =
      'https://api.themoviedb.org/3/movie/popular?api_key=8a156aa6960f5b664a4cceffee321f77'
    const jwtToken = Cookies.get('jwt_token')
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const formateData = data.results.map(eachItem => ({
        id: eachItem.id,
        posterPath: imgBaseUrl + eachItem.poster_path,
      }))
      this.setState({popularMovieList: formateData})
    }
  }

  renderProductsList = () => {
    const {popularMovieList} = this.state
    return (
      <div className="movie-img-bck-cont">
        <div>
          <h1 className="movies-list-heading">Popular Movies</h1>
        </div>
        <div className="movies-list-cont">
          {popularMovieList.map(item => (
            <PopularCard popularMovieList={item} key={item.id} />
          ))}
        </div>
        <div className="footer-cont">
          <div>
            <img
              className="icon-img"
              src="https://res.cloudinary.com/pardhu/image/upload/v1624625631/google_1_h5pwcd.png"
              alt="..."
            />
            <img
              className="icon-img"
              src="https://res.cloudinary.com/pardhu/image/upload/v1624625621/twitter_pqaunr.png"
              alt="..."
            />
            <img
              className="icon-img"
              src="https://res.cloudinary.com/pardhu/image/upload/v1624625611/instagram_ptfrbt.png"
              alt="..."
            />
            <img
              className="icon-img"
              src="https://res.cloudinary.com/pardhu/image/upload/v1624625591/youtube_mxsleg.png"
              alt="..."
            />
          </div>
          <div>
            <p className="head">Contact Us</p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return <>{this.renderProductsList()}</>
  }
}

export default PopularData
