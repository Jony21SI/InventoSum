import Logo from "./Logo";

interface HeaderProps {
  showNavigation?: boolean;
  showSearch?: boolean;
  showNotifications?: boolean;
  showProfile?: boolean;
  currentPage?: string;
}

export default function Header({
  showNavigation = true,
  showSearch = false,
  showNotifications = false,
  showProfile = true,
  currentPage,
}: HeaderProps) {
  const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/inventory", label: "Inventory" },
    { href: "/sales", label: "Sales" },
    { href: "/customers", label: "Customers" },
    { href: "/notifications", label: "Notifications" },
    { href: "/reports", label: "Reports" },
  ];

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#223649] px-10 py-3">
      <div className="flex items-center gap-4 text-white">
        <Logo />
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          InventoSum
        </h2>
      </div>

      <div className="flex flex-1 justify-end gap-8">
        {showSearch && (
          <label className="flex flex-col min-w-40 !h-10 max-w-64">
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
                placeholder="Search"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223649] focus:border-none h-full placeholder:text-[#90adcb] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              />
            </div>
          </label>
        )}

        {showNavigation && (
          <div className="flex items-center gap-9">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-white text-sm font-medium leading-normal ${
                  currentPage === item.href ? "text-[#0c7ff2]" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

        {showNotifications && (
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#223649] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <div className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
              </svg>
            </div>
          </button>
        )}

        {showProfile && (
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCO6TZXmnXjZZ7g3rElCj9ppppqHxdBENXI4_1eoqMmNzh1KxWlKoxpm21KE1WalTJJPcaTp_fhK4B--NyNg3jUm4RNeikmDA1O7MJWyXtFW-z3QDi6erosHo1-WswlCLUo_FiUoW2AurtYiDND6NoD2G7vPqi5rVfzXod11ANk32vYDw3kxW9t1qKoOTlT7ntprlGbpSVYt4ZQkHmv6fmstLC2f9lUgu9h0CobWqCIQD5VLwoOSS7xyNVD4uaXlcH6lKdr3MowzQn1")',
            }}
          />
        )}
      </div>
    </header>
  );
}
