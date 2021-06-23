import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../Blogitem'
import TopRatedBlog from '../TopRatedBlog'
import OriginalsBlog from '../Originals'

import './index.css'

const originalsUrl =
  'https://api.themoviedb.org/3/movie/upcoming?api_key=8a156aa6960f5b664a4cceffee321f77'
const topRatedUrl =
  'https://api.themoviedb.org/3/movie/top_rated?api_key=8a156aa6960f5b664a4cceffee321f77'
const trendingUrl =
  'https://api.themoviedb.org/3/trending/all/day?api_key=8a156aa6960f5b664a4cceffee321f77'
const imgBaseUrl = 'https://image.tmdb.org/t/p/w500'

class BlogsList extends Component {
  state = {trendingData: [], topData: []}

  componentDidMount() {
    this.getBlogsData()
    this.getTopRatedData()
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
    const {trendingData, topData, isLoading} = this.state
    console.log(isLoading)

    return (
      <div className="blog-list-container">
        <div className="main-movie-cont">
          <h1>Title</h1>
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
