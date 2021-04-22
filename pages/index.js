import { useState, useEffect } from "react";
import Link from "next/link"
import MainLayout from "../components/layouts/Main"

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
    <MainLayout>
      <div className="row">
        {users.map((user) => {
          return (
            <div className="col-md-3 mb-3" key={user.id}>
              <div className="user">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <Link href={`/users/${user.id}`}><a>Follow</a></Link>
              </div>
            </div>
          )
        })}
      </div>
    </MainLayout>
  );
};

export default IndexPage;
