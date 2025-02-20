import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateAccountData } from "../../store/account";
import { IoHomeOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { BsCartCheck } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbLogout, TbLogin2 } from "react-icons/tb";
import { VscSignIn } from "react-icons/vsc";
import { FaQuoteRight } from "react-icons/fa6";
import { LuBookMarked } from "react-icons/lu";
import { GiSellCard } from "react-icons/gi";

const Sidebar = ({ disable }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("Home");

  const handleLogout = () => {
    dispatch(
      updateAccountData({
        success: null,
        message: "",
        result: {
          email: "",
          password: "",
          first_name: "",
          last_name: "",
          age: -1,
          gender: "",
          country: "",
          city: "",
          street_address: "",
          postal_code: "",
          phone_number: "",
          birthdate: "",
          profile_picture_address: "",
        },
      })
    );
  };

  return (
    <div
      className={`${
        disable ? "hidden" : "block"
      } flex flex-col w-56 p-3 mb-0 h-[100%] bg-slate-700`}
    >
      <Link to="/" className="flex items-center mb-3 text-white font-medium">
        <img
          src={import.meta.env.VITE_ROOT_PATH + "/devImages/BookLogo.png"}
          alt="Side Bar Image"
          className="w-12"
        />
        <span className="text-3xl p-3">Sidebar</span>
      </Link>
      <hr />
      <ul className="flex flex-col text-xl my-4">
        <li className="">
          <Link
            to="/"
            onClick={() => setActiveTab("Home")}
            className={`flex ${
              activeTab === "Home"
                ? "text-white font-semibold"
                : "text-slate-100"
            }`}
          >
            <span className="mt-1">
              <IoHomeOutline />
            </span>
            &nbsp; Home
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            onClick={() => setActiveTab("cart")}
            className={`flex ${
              activeTab === "cart"
                ? "text-white font-semibold"
                : "text-slate-100"
            }`}
          >
            <span className="mt-1">
              <TiShoppingCart />
            </span>
            &nbsp;Cart
          </Link>
        </li>
        <li>
          <Link
            to="/order"
            onClick={() => setActiveTab("order")}
            className={`flex ${
              activeTab === "order"
                ? "text-white font-semibold"
                : "text-slate-100"
            }`}
          >
            <span className="mt-1">
              <BsCartCheck />
            </span>
            &nbsp;Orders
          </Link>
        </li>
        <li className="">
          <Link
            to="/accountpage"
            onClick={() => setActiveTab("account")}
            className={`flex ${
              activeTab === "account"
                ? "text-white font-semibold"
                : "text-slate-100"
            }`}
          >
            <span className="mt-1">
              <FaRegUser />
            </span>
            &nbsp; Account
          </Link>
        </li>
        <li className="">
          <Link
            to="/sellerpage"
            onClick={() => setActiveTab("sellerPage")}
            className={`flex ${
              activeTab === "sellerPage"
                ? "text-white font-semibold"
                : "text-slate-100"
            }`}
          >
            <span className="mt-1">
              <GiSellCard />
            </span>
            &nbsp; Sell Books
          </Link>
        </li>
        <li>
          <Link
            to="/faqs"
            onClick={() => setActiveTab("faqs")}
            className={`flex ${
              activeTab === "faqs"
                ? "text-white font-semibold"
                : "text-slate-100"
            }`}
          >
            <span className="mt-1">
              <FaQuoteRight />
            </span>
            &nbsp;FAQ's
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={() => setActiveTab("about")}
            className={`flex ${
              activeTab === "about"
                ? "text-white font-semibold"
                : "text-slate-100"
            }`}
          >
            <span className="mt-1">
              <LuBookMarked />
            </span>
            &nbsp;About
          </Link>
        </li>
        <li>
          <Link
            to="/customercare"
            onClick={() => setActiveTab("customercare")}
            className={`flex ${
              activeTab === "customercare"
                ? "text-white font-semibold"
                : "text-slate-100"
            }`}
          >
            <span className="mt-1">
              <RiCustomerService2Line />
            </span>
            &nbsp;Customer Care
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            onClick={() => setActiveTab("login")}
            className={`flex ${
              activeTab === "login"
                ? "text-white font-semibold"
                : "text-slate-100"
            }`}
          >
            <span className="mt-1">
              <TbLogin2 />
            </span>
            &nbsp;Lognin
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            onClick={() => setActiveTab("signup")}
            className={`flex ${
              activeTab === "signup"
                ? "text-white font-semibold"
                : "text-slate-100"
            }`}
          >
            <span className="mt-1">
              <VscSignIn />
            </span>
            &nbsp;Signup
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => {
              setActiveTab("logout");
              handleLogout();
            }}
            className={`flex ${
              activeTab === "logout"
                ? "text-white font-semibold"
                : "text-slate-100"
            }`}
          >
            <span className="mt-1">
              <TbLogout />
            </span>
            &nbsp;Lognout
          </Link>
        </li>
      </ul>
      <hr className="mb-56" />
    </div>
  );
};

export default Sidebar;
