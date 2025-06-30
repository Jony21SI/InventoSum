"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import SaleModal from "@/components/SaleModal";

export default function SalesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const transactions = [
    {
      date: "2024-03-15",
      customer: "Emily Carter",
      items: 3,
      amount: "$75.00",
    },
    { date: "2024-03-14", customer: "David Lee", items: 2, amount: "$45.00" },
    {
      date: "2024-03-13",
      customer: "Sophia Clark",
      items: 4,
      amount: "$120.00",
    },
    { date: "2024-03-12", customer: "Ethan Brown", items: 1, amount: "$25.00" },
    {
      date: "2024-03-11",
      customer: "Olivia Green",
      items: 5,
      amount: "$150.00",
    },
  ];

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.date.includes(searchTerm)
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#101a23] dark group/design-root ">
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <Sidebar currentPage="/sales" />
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
                Sales Transactions
              </p>
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#223649] text-white text-sm font-medium leading-normal hover:bg-[#182634] transition-colors"
                onClick={handleOpenModal}
              >
                <span className="truncate">New Sale</span>
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
                    placeholder="Search transactions"
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
                        Date
                      </th>
                      <th className="table-column-240 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Customer
                      </th>
                      <th className="table-column-360 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Items Sold
                      </th>
                      <th className="table-column-480 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Total Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTransactions.map((transaction, index) => (
                      <tr key={index} className="border-t border-t-[#314d68]">
                        <td className="table-column-120 h-[72px] px-4 py-2 w-[400px] text-[#90adcb] text-sm font-normal leading-normal">
                          {transaction.date}
                        </td>
                        <td className="table-column-240 h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">
                          {transaction.customer}
                        </td>
                        <td className="table-column-360 h-[72px] px-4 py-2 w-[400px] text-[#90adcb] text-sm font-normal leading-normal">
                          {transaction.items}
                        </td>
                        <td className="table-column-480 h-[72px] px-4 py-2 w-[400px] text-[#90adcb] text-sm font-normal leading-normal">
                          {transaction.amount}
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

      <SaleModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
