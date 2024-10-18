import React from "react";
import { Card_one } from "./card_first_data";

export const CardFirst = () => {
    return (
        <div className="pr_1 pt-[129px] pb-[100px]">
            <div className="container">
                <h2 className="text-[42px] font-bold text-[#1a0b5b] text-center mb-[48px]">
                    Featured Products
                </h2>

                <ul className="flex items-center justify-center gap-[29px]">
                    {Card_one.map((item) => {
                        return (
                            <li
                                key={item.id}
                                className="w-[270px] text-center shadow-[0_0_25px_0_rgba(0,0,0,0.1)]  pb-[17px]"
                            >
                                <div className="bg-[#f6f7fb] pt-[46px] mb-[15px]">
                                    <img
                                        className="w-[178px] mx-auto"
                                        src={item.img}
                                        alt="img"
                                    />
                                </div>

                                <h3 className="text-[18px] font-bold text-[#fb2e86] mb-[12px]">
                                    {item.title}
                                </h3>
                                <img
                                    className="w-[52px] mx-auto mb-[12px]"
                                    src={item.icon}
                                    alt="icon"
                                />

                                <p className="text-[14px] font-normal text-[#151875] mb-[12px]">
                                    {item.code}
                                </p>

                                <p className="text-[14px] font-normal text-[#151875]">
                                    {item.price}
                                </p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
