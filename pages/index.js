import { useState, useEffect } from "react";
import Link from "next/link"

const IndexPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.items)
      });
  }, []);
  return (
    <div className="container users">
      {users.map((user) => {
        return <div className="user" key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <Link href={`/users/${user.id}`}><a>Follow</a></Link>
          </div>;
      })}
    </div>
  );
};

export default IndexPage;
