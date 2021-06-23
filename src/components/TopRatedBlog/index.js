import './index.css'

const TopRatedBlog = props => {
  // const apiKey = '8a156aa6960f5b664a4cceffee321f77'
  const {topData} = props

  const {id, posterPath} = topData
  return (
    <div className="item-container">
      <img className="item-image" src={posterPath} alt={`item${id}`} />
    </div>
  )
}
export default TopRatedBlog
