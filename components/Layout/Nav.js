// components/Nav.js
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  //   return (
  const inactiveLink = "flex gap-1 p-1";
  const activeLink = inactiveLink + " bg-white text-blue-900 rounded-l-lg";
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="flex flex-col w-64 bg-white shadow-xl">
        <div className="h-16 flex items-center justify-center border-b">
          <h2 className="text-2xl font-bold text-blue-900">Dashboard</h2>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-1 py-4">
            <li>
              <Link href="/code">
                <a className="px-6 py-2 flex items-center space-x-2 text-gray-500 hover:text-gray-800 transition duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <span>Send</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/receive">
                <a className="px-6 py-2 flex items-center space-x-2 text-gray-500 hover:text-gray-800 transition duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>Receive</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
