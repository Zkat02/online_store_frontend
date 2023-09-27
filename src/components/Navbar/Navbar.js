import React from "react";
import styles from './Navbar.module.css';
import hamburger from "../../img/hamburger.svg";

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
        <img src={hamburger} alt="menu" />
        </button>
        <a href="/" className={styles.logo}>
          Online Store
        </a>
      </div>
      
      <ul className={styles.navLinks}>
        <li>
          <a href="/">Home</a>
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
              <a href="/logout">Logout</a>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="/login">Login</a>
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
