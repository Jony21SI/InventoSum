"use client";

import Sidebar from "@/components/Sidebar";

export default function ReportsPage() {
  const salesData = [
    { month: "Jan", revenue: 8500, orders: 45 },
    { month: "Feb", revenue: 9200, orders: 52 },
    { month: "Mar", revenue: 7800, orders: 38 },
    { month: "Apr", revenue: 10500, orders: 61 },
    { month: "May", revenue: 11200, orders: 67 },
    { month: "Jun", revenue: 9800, orders: 54 },
  ];

  const topProducts = [
    { name: "Notebooks", sales: 150, revenue: "$7,500" },
    { name: "Pens", sales: 120, revenue: "$3,600" },
    { name: "Backpacks", sales: 80, revenue: "$8,000" },
    { name: "Books", sales: 95, revenue: "$4,750" },
    { name: "Accessories", sales: 110, revenue: "$2,200" },
  ];

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#101a23] dark group/design-root ">
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <Sidebar currentPage="/reports" />
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
                Reports & Analytics
              </p>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#223649] text-white text-sm font-medium leading-normal hover:bg-[#182634] transition-colors">
                <span className="truncate">Export Report</span>
              </button>
            </div>

            {/* Summary Cards */}
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#223649]">
                <p className="text-white text-base font-medium leading-normal">
                  Total Revenue
                </p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight">
                  $57,000
                </p>
                <p className="text-[#0bda5b] text-sm font-medium leading-normal">
                  +12% vs last month
                </p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#223649]">
                <p className="text-white text-base font-medium leading-normal">
                  Total Orders
                </p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight">
                  319
                </p>
                <p className="text-[#0bda5b] text-sm font-medium leading-normal">
                  +8% vs last month
                </p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#223649]">
                <p className="text-white text-base font-medium leading-normal">
                  Average Order Value
                </p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight">
                  $178.68
                </p>
                <p className="text-[#0bda5b] text-sm font-medium leading-normal">
                  +4% vs last month
                </p>
              </div>
            </div>

            {/* Sales Trend */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Sales Trend (Last 6 Months)
            </h2>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-lg border border-[#314d68] bg-[#101a23]">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-[#182634]">
                      <th className="table-column-120 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Month
                      </th>
                      <th className="table-column-240 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Revenue
                      </th>
                      <th className="table-column-360 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Orders
                      </th>
                      <th className="table-column-480 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Avg Order Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesData.map((data, index) => (
                      <tr key={index} className="border-t border-t-[#314d68]">
                        <td className="table-column-120 h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">
                          {data.month}
                        </td>
                        <td className="table-column-240 h-[72px] px-4 py-2 w-[400px] text-[#90adcb] text-sm font-normal leading-normal">
                          ${data.revenue.toLocaleString()}
                        </td>
                        <td className="table-column-360 h-[72px] px-4 py-2 w-[400px] text-[#90adcb] text-sm font-normal leading-normal">
                          {data.orders}
                        </td>
                        <td className="table-column-480 h-[72px] px-4 py-2 w-[400px] text-[#90adcb] text-sm font-normal leading-normal">
                          ${(data.revenue / data.orders).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Top Products */}
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
                        Units Sold
                      </th>
                      <th className="table-column-360 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Revenue
                      </th>
                      <th className="table-column-480 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        % of Total
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
                          {product.sales}
                        </td>
                        <td className="table-column-360 h-[72px] px-4 py-2 w-[400px] text-[#90adcb] text-sm font-normal leading-normal">
                          {product.revenue}
                        </td>
                        <td className="table-column-480 h-[72px] px-4 py-2 w-[400px] text-[#90adcb] text-sm font-normal leading-normal">
                          {(
                            (parseInt(product.revenue.replace(/[$,]/g, "")) /
                              26050) *
                            100
                          ).toFixed(1)}
                          %
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
