import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

const CartPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("db/product.json");
      const data = await res.json();
      setData(data);
    })();
  });
  return (
    <div className="container">
      <h1 className="py-4 fw-bold">Your Cart Items</h1>
      <div className="">
        <Table bordered>
          <thead>
            <tr className="table-secondary text-center">
              <th>IMAGE</th>
              <th>PRODUCT NAME</th>
              <th>UNTIL PRICE</th>
              <th>QTY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 3).map((item, i) => (
              <tr className="lh text-center" key={i}>
                <th scope="row">
                  <img src={item?.image} height={150} alt="" />
                </th>
                <td>{item?.name}</td>
                <td>${item?.price}</td>
                <td>
                  <span style={{ width: "100px", display: "inline-block" }}>
                    <input
                      className="border rounded"
                      defaultValue={1}
                      type="number"
                    />
                  </span>
                </td>
                <td>
                  <i className="fa-solid fa-trash-can text-danger fs-5"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default CartPage;
