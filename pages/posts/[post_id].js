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
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      )}
      <div className="items">
        {comments.map((comment) => {
          return (
            <div className="item" key={comment.id}>
              <h2>{comment.name}</h2>
              <p>{comment.body}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PostPage