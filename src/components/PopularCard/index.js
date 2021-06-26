import './index.css'

const PopularCard = props => {
  const {popularMovieList} = props
  const {id, posterPath} = popularMovieList

  return (
    <div className="product-item-cont">
      <img src={posterPath} alt="product" className="popular-img" />
    </div>
  )
}
export default PopularCard
