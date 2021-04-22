import {useRouter} from "next/router"
import {useState, useEffect} from "react"
import Link from "next/link"

const UserPage = () => {
  const router = useRouter()
  const {user_id} = router.query
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  useEffect(() => {
    if (!user_id) {
      return
    }
    fetch(`http://localhost:3001/users/${user_id}`)
    .then((res) => res.json())
    .then((data) => {
      setUser(data.item)
    })
    fetch(`http://localhost:3001/posts?userId=${user_id}`)
    .then((res) => res.json())
    .then((data) => {
      setPosts(data.items)
    })
  }, [user_id])
  return (
    <div className="container">
      {!!user && (
      <div className="row">
        <div className="col-md-3 mb-3">
          <div className="item">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
      )}
      <div className="row">
        {posts.map((post) => {
          return (
            <div className="col-md-3 mb-3" key={post.id}>
              <div className="item">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <Link href={`/posts/${post.id}`}><a>Follow</a></Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UserPage