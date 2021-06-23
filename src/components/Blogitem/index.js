import './index.css'

const BlogItem = props => {
  // const apiKey = '8a156aa6960f5b664a4cceffee321f77'
  const {trendingData} = props

  const {id, posterPath} = trendingData

  return (
    <div className="item-container">
      <img className="item-image" src={posterPath} alt={`item${id}`} />
    </div>
  )
}
export default BlogItem
