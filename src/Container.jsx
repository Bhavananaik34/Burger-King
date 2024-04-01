import React from "react";
import Header from "./Header";
import Card from "./Card";
import data2 from "./data2";
import Footer from "./Footer";
let Container = () =>
{
    return (
        <>
        <Header/>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {data2.map(x => {
            return (
                <Card head={x.head} imagesrc={x.img} button={x.button} para={x.des}
                    price={x.price} />
            )
        })}
            </div>
        <Footer/>
    </>
    )
}
export default Container