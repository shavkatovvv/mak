import React from "react";

export const Hero = () => {
    return (
        <div className="hero bg-[url('./assets/promotional.png')] bg-cover bg-no-repeat pt-[203px] pb-[313px]">
            <div className="container">
                <div className="title_block w-[650px]">
                    <p className="text-[16px] font-bold leading-[175%] text-[#fb2e86] mb-[12px]">
                        Best Furniture For Your Castle....
                    </p>
                    <h1 className="text-[53px] font-bold tracking-[0.01em] text-[#000] w-[644px] mb-[12px]">
                        New Furniture Collection Trends in 2020
                    </h1>

                    <p className="text-[16px] font-bold leading-[175%] text-[#8a8fb9] mb-[27px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Magna in est adipiscing in phasellus non in justo.
                    </p>

                    <a
                        className="text-[17px] font-semibold tracking-[0.02em] text-[#fff] rounded-[2px] py-[16px] px-[40px] bg-[#fb2e86]"
                        href="#"
                    >
                        Shop Now
                    </a>
                </div>
            </div>
        </div>
    );
};
