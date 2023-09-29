import React from "react";
import styles from "./Navbar.module.css";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  const user = {
    is_authenticated: false,
    is_staff: false,
    customer: false,
    seller: false,
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navMenuAndLogo}>
        <button className={styles.navMenu}>
          <MenuIcon />
        </button>
        <a href="/" className={styles.logo}>
          Online Store
        </a>
      </div>

      <ul className={styles.navLinks}>
        <li>
          <a href="/">
            <HomeIcon />
          </a>
        </li>
        <li>
          <a href="/category">Products</a>
        </li>
        {user.is_authenticated ? (
          <>
            {user.is_staff && (
              <li>
                <a href="/admin/index">Admin</a>
              </li>
            )}
            {user.customer && (
              <>
                <li>
                  <a href="/cart">Cart</a>
                </li>
                <li>
                  <a href="/order_history">Order History</a>
                </li>
              </>
            )}
            {user.seller && (
              <>
                <li>
                  <a href="/create_product">Create Product</a>
                </li>
                <li>
                  <a href="/manage_orders">Manage Orders</a>
                </li>
              </>
            )}
            <li>
              <a href="/create_and_list_reports">Reports</a>
            </li>
            <li>
              <a href="/logout">
                {/* Logout */}
                <LogoutIcon />
              </a>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="/login">
                <LoginIcon />
              </a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
