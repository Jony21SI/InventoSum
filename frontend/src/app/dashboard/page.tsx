"use client";

import Sidebar from "@/components/Sidebar";

export default function DashboardPage() {
  const stats = [
    { label: "Total Revenue", value: "$25,000" },
    { label: "Top Selling Product", value: "Notebooks" },
    { label: "Low Stock Alerts", value: "5" },
  ];

  const topProducts = [
    { name: "Notebooks", quantity: 150, revenue: "$7,500" },
    { name: "Pens", quantity: 120, revenue: "$3,600" },
    { name: "Backpacks", quantity: 80, revenue: "$8,000" },
  ];

  const lowStockItems = [
    { name: "Notebooks", stock: 10, reorderLevel: 20 },
    { name: "Pens", stock: 5, reorderLevel: 15 },
    { name: "Backpacks", stock: 2, reorderLevel: 10 },
  ];

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#101a23] dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <Sidebar currentPage="/dashboard" />
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
                Dashboard
              </p>
            </div>

            {/* Stats Cards */}
            <div className="flex flex-wrap gap-4 p-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#223649]"
                >
                  <p className="text-white text-base font-medium leading-normal">
                    {stat.label}
                  </p>
                  <p className="text-white tracking-light text-2xl font-bold leading-tight">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Revenue Trend */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Revenue Trend
            </h2>
            <div className="flex flex-wrap gap-4 px-4 py-6">
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#314d68] p-6">
                <p className="text-white text-base font-medium leading-normal">
                  Revenue
                </p>
                <p className="text-white tracking-light text-[32px] font-bold leading-tight truncate">
                  $25,000
                </p>
                <div className="flex gap-1">
                  <p className="text-[#90adcb] text-base font-normal leading-normal">
                    This Month
                  </p>
                  <p className="text-[#0bda5b] text-base font-medium leading-normal">
                    +10%
                  </p>
                </div>
                <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                  <svg
                    width="100%"
                    height="148"
                    viewBox="-3 0 478 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                      fill="url(#paint0_linear_1131_5935)"
                    />
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                      stroke="#90adcb"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1131_5935"
                        x1="236"
                        y1="1"
                        x2="236"
                        y2="149"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#223649" />
                        <stop offset="1" stopColor="#223649" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex justify-around">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map(
                      (month) => (
                        <p
                          key={month}
                          className="text-[#90adcb] text-[13px] font-bold leading-normal tracking-[0.015em]"
                        >
                          {month}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Top Selling Products */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Top Selling Products
            </h2>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-lg border border-[#314d68] bg-[#101a23]">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-[#182634]">
                      <th className="table-column-120 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Product
                      </th>
                      <th className="table-column-240 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Quantity Sold
                      </th>
                      <th className="table-column-360 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Revenue
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {topProducts.map((product, index) => (
                      <tr key={index} className="border-t border-t-[#314d68]">
                        <td className="table-column-120 h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">
                          {product.name}
                        </td>
                        <td className="table-column-240 h-[72px] px-4 py-2 w-[400px] text-[#90adcb] text-sm font-normal leading-normal">
                          {product.quantity}
                        </td>
                        <td className="table-column-360 h-[72px] px-4 py-2 w-[400px] text-[#90adcb] text-sm font-normal leading-normal">
                          {product.revenue}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Low Stock Alerts */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Low Stock Alerts
            </h2>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-lg border border-[#314d68] bg-[#101a23]">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-[#182634]">
                      <th className="table-column-120 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Product
                      </th>
                      <th className="table-column-240 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Quantity in Stock
                      </th>
                      <th className="table-column-360 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Reorder Level
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {lowStockItems.map((item, index) => (
                      <tr key={index} className="border-t border-t-[#314d68]">
                        <td className="table-column-120 h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">
                          {item.name}
                        </td>
                        <td className="table-column-240 h-[72px] px-4 py-2 w-[400px] text-[#90adcb] text-sm font-normal leading-normal">
                          {item.stock}
                        </td>
                        <td className="table-column-360 h-[72px] px-4 py-2 w-[400px] text-[#90adcb] text-sm font-normal leading-normal">
                          {item.reorderLevel}
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
