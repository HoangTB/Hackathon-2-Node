import { useEffect, useState } from "react";
function Form(props) {
  const [content, setContent] = useState("");

  const handlChanged = (e) => {
    let valueContent = e.target.value;
    if (valueContent == "") {
      alert("Please select a value");
    } else {
      setContent(valueContent);
    }
  };

  const handelAdded = () => {
    props.onAdd(content);
    setContent("");
  };

  return (
    <div>
      <div className="card-body">
        <div className="form-group p-2">
          <h5 className="card-title">Title</h5>
          <textarea
            className="form-control"
            id="addTxt"
            rows={3}
            placeholder="Take a note..."
            value={content}
            onChange={handlChanged}
          />
        </div>

        <button
          className="btn btn-primary"
          id="addBtn"
          style={{ backgroundColor: "rgba(241,183,16,255)", border: "none" }}
          onClick={handelAdded}
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
}
export default Form;
