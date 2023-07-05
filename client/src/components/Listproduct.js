import { useEffect, useState } from "react";

function Listproduct(props) {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    setProduct([...props.contentList]);
  }, [props.contentList]);

  const handleDelete = (id) => {
    props.onDelete(id);
  };

  return (
    <div className="list-product">
      {products !== null &&
        products.map((product, index) => {
          return (
            <div key={index} className="form-product form-group">
              <div id="notes" className="row container-fluid">
                <label>{product.title}</label>
                <label>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => handleDelete(product.id)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </label>
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default Listproduct;
