// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  const {title, description, publishedDate} = eachItem

  return (
    <div>
      <li className="list-item">
        <div>
          <h1 className="title">{title}</h1>
          <p className="description"> {description} </p>
        </div>
        <p className="date"> {publishedDate} </p>
      </li>

      <hr className="horz-line" />
    </div>
  )
}

export default BlogItem
