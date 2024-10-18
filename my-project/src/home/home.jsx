import React from "react";
import { Mainlayout } from "../layout/main-layout";
import { Hero } from "../components/hero/hero";
import { CardFirst } from "../components/card_first/card_first";
import { CardMain } from "../components/card_main/card_main";

export const Home = () => {
    return (
        <div>
            <Mainlayout />
            <Hero />
            <CardFirst />
            <CardMain />
        </div>
    );
};
