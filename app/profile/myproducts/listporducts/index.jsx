import { Table, Empty } from "antd";
import Link from 'next/link'
import React from "react";

const ProductTable = async () => {

  const res = await fetch("https://dummyjson.com/products/category/smartphones");
  const data = await res.json();

  const rows = data.products?.map((product) => ({
    key: product.id,
    product: product.title,
    price: `$${product.price}`,
    total: `$${(product.price * product.stock).toFixed(2)}`, 
  }));

  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Total Value in Stock",
      dataIndex: "total",
      key: "total",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <Link
          href="/profile/myproducts/addproduct"
          className="bg-[#46A358] text-white font-bold rounded-[8px] text-[18px] px-[15px] py-[10px]"
        >
          Add new
        </Link>
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
