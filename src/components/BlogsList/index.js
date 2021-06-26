import {StyleSheet, Text, View, ImageBackground, Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../Blogitem'
import TopRatedBlog from '../TopRatedBlog'
import OriginalsBlog from '../Originals'
import './index.css'
import Header from '../Header'

const imageUrl =
  'https://image.tmdb.org/t/p/w500/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg'
const originalsUrl =
  'https://api.themoviedb.org/3/movie/upcoming?api_key=8a156aa6960f5b664a4cceffee321f77'
const topRatedUrl =
  'https://api.themoviedb.org/3/movie/top_rated?api_key=8a156aa6960f5b664a4cceffee321f77'
const trendingUrl =
  'https://api.themoviedb.org/3/trending/all/day?api_key=8a156aa6960f5b664a4cceffee321f77'
const imgBaseUrl = 'https://image.tmdb.org/t/p/w500'
const MainMovieImage =
  'https://moviegalleri.net/wp-content/gallery/vakeel-saab-hd-images/Pawan-Kalyan-Vakeel-Saab-Movie-HD-Images-Photos-Pics-6c0dff4.jpg'

class BlogsList extends Component {
  state = {trendingData: [], topData: [], movieData: []}

  componentDidMount() {
    this.getBlogsData()
    this.getTopRatedData()
    this.getMovieData()
  }

  getMovieData = async () => {
    const response = await fetch(originalsUrl)
    const data = await response.json()

    const updatedData = data.results.map(eachItem => ({
      id: eachItem.id,
      posterPath: imgBaseUrl + eachItem.poster_path,
    }))
    console.log(updatedData)

    this.setState({movieData: updatedData})
  }

  getBlogsData = async () => {
    const response = await fetch(trendingUrl)
    const data = await response.json()

    const updatedData = data.results.map(eachItem => ({
      id: eachItem.id,
      posterPath: imgBaseUrl + eachItem.poster_path,
    }))
    console.log(updatedData)

    this.setState({trendingData: updatedData})
  }

  getTopRatedData = async () => {
    const response = await fetch(topRatedUrl)
    const data = await response.json()

    const formateData = data.results.map(eachItem => ({
      id: eachItem.id,
      posterPath: imgBaseUrl + eachItem.poster_path,
    }))

    this.setState({topData: formateData})
  }

  render() {
    const {trendingData, topData, isLoading, movieData} = this.state
    const imgUrl =
      'https://moviegalleri.net/wp-content/gallery/vakeel-saab-hd-images/Pawan-Kalyan-Vakeel-Saab-Movie-HD-Images-Photos-Pics-6c0dff4.jpg'
    console.log(isLoading)
    const car =
      'https://moviegalleri.net/wp-content/gallery/vakeel-saab-hd-images/Pawan-Kalyan-Vakeel-Saab-Movie-HD-Images-Photos-Pics-6c0dff4.jpg'
    return (
      <div className="blog-list-container">
        <div>
          <Header />
        </div>

        <div className="main-movie-cont">
          <div
            className="img-movie"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          >
            <div className="content-cont">
              <h1 className="movie-title">The Unholy</h1>
              <p className="movie-para">
                Dominic Toretto and his crew battle the most skilled assassin
                and high-performance driver they've ever encountered: his
                forsaken{' '}
              </p>
              <div className="but-cont">
                <button className="button">Play Now</button>
                <button className="button">Watch Later</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="head">Trending Now</h1>
        </div>
        <div className="img-list-cont">
          {isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          ) : (
            trendingData.map(item => (
              <BlogItem trendingData={item} key={item.id} />
            ))
          )}
        </div>
        <div>
          <h1 className="head">Top Rated</h1>
        </div>
        <div className="img-list-cont">
          {isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          ) : (
            topData.map(item => <TopRatedBlog topData={item} key={item.id} />)
          )}
        </div>
        <div>
          <h1 className="head">Netflix Originals</h1>
        </div>
        <div className="img-list-cont">
          {isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          ) : (
            topData.map(item => <OriginalsBlog topData={item} key={item.id} />)
          )}
        </div>
      </div>
    )
  }
}

export default BlogsList
