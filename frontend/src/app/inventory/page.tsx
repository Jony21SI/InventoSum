"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      name: "The Secret Garden",
      category: "Fiction",
      stock: 50,
      price: "$12.99",
    },
    {
      name: "Leather Wallet",
      category: "Accessories",
      stock: 30,
      price: "$25.00",
    },
    {
      name: "The Great Gatsby",
      category: "Fiction",
      stock: 45,
      price: "$10.50",
    },
    {
      name: "Silver Necklace",
      category: "Accessories",
      stock: 20,
      price: "$35.00",
    },
    {
      name: "Pride and Prejudice",
      category: "Fiction",
      stock: 60,
      price: "$9.99",
    },
    {
      name: "Canvas Tote Bag",
      category: "Accessories",
      stock: 40,
      price: "$15.00",
    },
    {
      name: "To Kill a Mockingbird",
      category: "Fiction",
      stock: 55,
      price: "$11.75",
    },
    {
      name: "Beaded Bracelet",
      category: "Accessories",
      stock: 25,
      price: "$18.00",
    },
    { name: "1984", category: "Fiction", stock: 50, price: "$10.25" },
    { name: "Wool Scarf", category: "Accessories", stock: 35, price: "$22.00" },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#101a23] dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <Sidebar currentPage="/inventory" />
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
                Products
              </p>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#223649] text-white text-sm font-medium leading-normal hover:bg-[#182634] transition-colors">
                <span className="truncate">Add Product</span>
              </button>
            </div>

            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div className="text-[#90adcb] flex border-none bg-[#223649] items-center justify-center pl-4 rounded-l-lg border-r-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                    </svg>
                  </div>
                  <input
                    placeholder="Search products"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223649] focus:border-none h-full placeholder:text-[#90adcb] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  />
                </div>
              </label>
            </div>

            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-lg border border-[#314d68] bg-[#101a23]">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-[#182634]">
                      <th className="table-column-120 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Product Name
                      </th>
                      <th className="table-column-240 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Category
                      </th>
                      <th className="table-column-360 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Stock
                      </th>
                      <th className="table-column-480 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Price
                      </th>
                      <th className="table-column-600 px-4 py-3 text-left text-white w-60 text-[#90adcb] text-sm font-medium leading-normal">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((product, index) => (
                      <tr key={index} className="border-t border-t-[#314d68]">
                        <td className="table-column-120 h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">
                          {product.name}
                        </td>
                        <td className="table-column-240 h-[72px] px-4 py-2 w-[400px] text-[#90adcb] text-sm font-normal leading-normal">
                          {product.category}
                        </td>
                        <td className="table-column-360 h-[72px] px-4 py-2 w-[400px] text-[#90adcb] text-sm font-normal leading-normal">
                          {product.stock}
                        </td>
                        <td className="table-column-480 h-[72px] px-4 py-2 w-[400px] text-[#90adcb] text-sm font-normal leading-normal">
                          {product.price}
                        </td>
                        <td className="table-column-600 h-[72px] px-4 py-2 w-60 text-[#90adcb] text-sm font-bold leading-normal tracking-[0.015em] cursor-pointer hover:text-white transition-colors">
                          View
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
