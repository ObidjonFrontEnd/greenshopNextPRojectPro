import { Table, Empty } from "antd";
import React from "react";

const ProductTable = async () => {
  const res = await fetch("https://dummyjson.com/carts/user/1");
  const data = await res.json();

  const rows = data.carts?.flatMap((cart) =>
    cart.products.map((product) => ({
      key: product.id,
      product: product.title,
      price: `$${product.price}`,
      total: `$${product.total}`,
    }))
  );

  const columns = [
    {
      title: "Products",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <button className="bg-[#46A358] text-white font-bold rounded-[8px] text-[18px] px-[15px] py-[10px]">
          Add new
        </button>
      </div>
      <Table
        columns={columns}
        dataSource={rows}
        locale={{
          emptyText: (
            <div className="flex flex-col items-center justify-center py-8">
              <Empty description="No products yet..." />
            </div>
          ),
        }}
        pagination={false}
        bordered
      />
    </div>
  );
};

export default ProductTable;
