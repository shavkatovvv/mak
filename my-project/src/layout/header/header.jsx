import React from "react";
import email from "../../assets/email.svg";
import tel from "../../assets/tel.svg";
import login from "../../assets/login.svg";
import like from "../../assets/like.svg";
import bag from "../../assets/bag.svg";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";

export const Header = () => {
    return (
        <header>
            <div className="top bg-[#7e33e0] py-[14px]">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <div className="link_block flex items-center gap-[48px]">
                            <div className="email_block flex items-center gap-[10px]">
                                <img src={email} alt="logo" />
                                <a
                                    className="font-semibold text-[16px] text-[#f1f1f1]"
                                    href="mailto:mhhasanul@gmail.com"
                                >
                                    mhhasanul@gmail.com
                                </a>
                            </div>

                            <div className="tel_block flex items-center gap-[10px]">
                                <img src={tel} alt="logo" />
                                <a
                                    className="font-semibold text-[16px] text-[#f1f1f1]"
                                    href="tel:(12345)67890"
                                >
                                    (12345)67890
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-[17px]">
                            <select className="border border-none bg-transparent text-[#f1f1f1] font-semibold text-[16px]">
                                <option value="English">English</option>
                            </select>

                            <select className="border border-none bg-transparent text-[#f1f1f1] font-semibold text-[16px]">
                                <option value="USD">USD</option>
                            </select>

                            <div className="flex items-center">
                                <a
                                    className=" text-[#f1f1f1] font-semibold text-[16px]"
                                    href="#"
                                >
                                    Login
                                </a>
                                <img src={login} alt="login" />
                            </div>

                            <div className="flex items-center gap-[3px]">
                                <a
                                    className=" text-[#f1f1f1] font-semibold text-[16px]"
                                    href="#"
                                >
                                    Wishlist
                                </a>
                                <img src={like} alt="login" />
                            </div>

                            <a href="#">
                                <img src={bag} alt="bag" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header_2 py-[22px]">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="main_block flex items-center gap-[88px]">
                            <div className="logo_block">
                                <a href="#">
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>

                            <div className="links_block">
                                <ul className="flex items-center gap-[35px]">
                                    <li>
                                        <select className="font-normal text-[16px] leading-[125%] text-[#fb2e86]">
                                            <option value="Home">Home</option>
                                        </select>
                                    </li>

                                    <li>
                                        <a
                                            className="font-normal text-[16px] leading-[125%] text-[#0d0e43]"
                                            href="#"
                                        >
                                            Pages
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="font-normal text-[16px] leading-[125%] text-[#0d0e43]"
                                            href="#"
                                        >
                                            Products
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="font-normal text-[16px] leading-[125%] text-[#0d0e43]"
                                            href="#"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="font-normal text-[16px] leading-[125%] text-[#0d0e43]"
                                            href="#"
                                        >
                                            Shop
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="font-normal text-[16px] leading-[125%] text-[#0d0e43]"
                                            href="#"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="form_block">
                            <form className="flex items-center " method="post">
                                <input
                                    className="w-[317px] p-[10px] border border-[#e7e6ef]"
                                    type="search"
                                    name="inp"
                                    id="user"
                                />
                                <button className="bg-[#FB2E86] py-[11px] px-[13px]">
                                    <img src={search} alt="search" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
