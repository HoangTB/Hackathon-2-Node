import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Listproduct from "./components/Listproduct";
import Nav from "./components/Nav";
import axiosClient from "./api/axios";
function App() {
  const [contentList, setContentlist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const onAdd = (content) => {
    if (content == "") {
      alert("Please fill in the information !!!");
    } else {
      axiosClient({
        method: "POST",
        data: { title: content },
        url: "notes",
      }).then(() => {
        setIsLoading(!isLoading);
      });
    }
  };

  useEffect(() => {
    axiosClient({
      method: "GET",
      url: "notes",
    }).then((data) => setContentlist(data.data));
  }, [isLoading]);

  const handleDelete = (id) => {
    axiosClient({
      method: "DELETE",
      url: `notes/${id}`,
    }).then(() => {
      setIsLoading(!isLoading);
    });
  };
  return (
    <div>
      <Nav />
      <div className="container1 my-3">
        <Form onAdd={onAdd} contentList={contentList} />
        <div>
          {" "}
          <Listproduct contentList={contentList} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default App;
