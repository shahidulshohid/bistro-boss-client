import {
  FaAd,
  FaBook,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from '../hooks/useAdmin'

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: get  isAdmin value from the database
  const isAdmin = useAdmin()
  // const isAdmin = true;
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="menu p-4 w-64 min-h-screen bg-orange-400">
        <ul>
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>
                  Manage Items ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
            </>
          )}
          {/* shared nav link */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch></FaSearch>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        {/* dashboard content */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
