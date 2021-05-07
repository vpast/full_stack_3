import { useState, useEffect } from "react";
import MainLayout from "../components/layouts/Main";
import Avatar from "../components/users/Avatar";

const IndexPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.items);
      });
  }, []);
  return (
    <MainLayout>
      <div className="row">
        {users.map((user) => {
          return (
            <div className="col-md-3 mb-3" key={user.id}>
              <Avatar item={user} link={`/users/${user.id}`} />
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
};

export default IndexPage;
