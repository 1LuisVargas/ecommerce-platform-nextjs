"use client";

import Link from "next/link";
import NavItems from "@/helpers/NavBarItems";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const logoutHandler = () => {
    logout();
    router.push("/login");
  };

  return (
    <nav className="p-4 bg-slate-600">
      <ul className="flex gap-4">
        <li>
          <Link className="font-bold cursor-pointer" href={NavItems.HOME}>
            Home
          </Link>
        </li>
        <li>
          <Link className="font-bold cursor-pointer" href={NavItems.STORE}>
            Store
          </Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link className="font-bold cursor-pointer" href={NavItems.ORDERS}>
                Order History
              </Link>
            </li>
            <li>
              <Link className="font-bold cursor-pointer" href={NavItems.CART}>
                Cart
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className="font-bold cursor-pointer"
                href={NavItems.PROFILE}
              >
                Profile
              </Link>
            </li>
            <li>
              <button
                className="font-bold hover:underline cursor-pointer"
                onClick={logoutHandler}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link className="font-bold hover:underline cursor-pointer" href={NavItems.LOGIN}>Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
