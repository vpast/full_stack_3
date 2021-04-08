import {useState, useEffect} from "react"

const IndexPage = () => {
  const [users, setUsers] = useState ([])
  useEffect(() => {}, [])
  return (
    <div className="container users">
      {users.map((user) => {
        return <div>{user.name}</div>
      })}
    </div>
  )
}

export default IndexPage