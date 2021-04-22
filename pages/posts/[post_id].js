import {useRouter} from "next/router"
import {useState, useEffect} from "react"

const PostPage = () => {
  const router = useRouter()
  const {post_id} = router.query
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  useEffect(() => {
    if (!post_id) {
      return
    }
    fetch(`http://localhost:3001/posts/${post_id}`)
    .then((res) => res.json())
    .then((data) => {
      setPost(data.item)
    })
    fetch(`http://localhost:3001/comments?postId=${post_id}`)
    .then((res) => res.json())
    .then((data) => {
      setComments(data.items)
    })
  }, [post_id])
  return (
    <div className="container">
      {!!post && (
      <div className="row">
        <div className="col-md-3 mb-3">
          <div className="item">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        </div>
      </div>
      )}
      <div className="row">
        {comments.map((comment) => {
          return (
            <div className="col-md-3 mb-3" key={comment.id}>
              <div className="item">
                <h2>{comment.name}</h2>
                <p>{comment.body}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PostPage