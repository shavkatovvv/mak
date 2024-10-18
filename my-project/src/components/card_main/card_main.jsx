import React from "react";
import { MainCard } from "./card_main_data";

export const CardMain = () => {
    return (
        <div className="main_block">
            <div className="container">
                <h2 className="text-[42px] font-bold text-[#151875] mb-[100px] text-center">
                    Leatest Products
                </h2>

                <ul className="flex items-center gap-[37px] flex-wrap justify-center">
                    {MainCard.map((item) => {
                        return (
                            <li key={item.id} className="w-[360px]">
                                <div className="bg-[#f7f7f7] py-[33px] px-[64px]">
                                    <img src={item.img} alt="item" />
                                </div>

                                <div className="flex items-center justify-between">
                                    <h3 className="font-normal text-[16px] text-[#151875] mt-[15px]">
                                        {item.title}
                                    </h3>

                                    <div className="flex items-center gap-[9px] mt-[15px]">
                                        <p className="text-[14px] font-normal text-[#151875]">
                                            {item.main_price}
                                        </p>
                                        <p className="text-[12px] font-normal line-through text-[#fb2448]">
                                            {item.price}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
