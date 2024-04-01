import React from "react";
import "./style.css"
let Header = () =>
{
    return (
        <>
            <div className="container">
                <div className="hn">
                <div className="nh">
                    <div className="x">
                    <img src="https://cdn-icons-png.flaticon.com/128/1828/1828859.png" alt="" />
                    </div>
                    <div className="y">
                    <img src="https://cloud10.todocoleccion.online/coleccionismo-pegatinas/tc/2019/12/16/20/187628545.webp" alt="" />
                    </div>
                    </div>
                    <div className="xy">
                        <button id="bu">Sign Up/Sign In</button>
                        <button id="tt">$0.00</button>
                    </div>
                </div>
                <div className="bh">
              <div className="x">
                  <h1>Start your <br/>BK® order.</h1>
                          <button className="b1">Order Pickup</button>
                          <br/>
                  <button className="b2">Order Delivery</button>      
              </div>
              <div className="m">
                  <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/ebf010cdf5b1d00f1906481669f067a4e83409eb-800x450.gif?w=1350&q=90&fit=max&auto=format" alt=""/>
              </div>
          </div>
    </div>

        </>
  )   
}
export default Header