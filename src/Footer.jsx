import React from "react";
import "./style.css"
let Footer = () => {
    return (
        <>
            <div className="hd">
                <div className="gf">
                    <div className="mj">
                        <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/da421b826216c29608a2694126a5095f17be8676-630x622.png?w=1125&amp;q=80&amp;fit=max&amp;auto=format" alt="" />
                    </div>
                    <div className="ht">
                        <h1>Save $$$ <br />With offers on demand</h1>
                        <img src="https://i0.wp.com/apps.efendim.biz/wp-content/uploads/2021/03/App-Store.png?w=300&ssl=1" alt="" className="img1"/>
            
            <img src="https://d32m1btok6bzqh.cloudfront.net/wp-content/uploads/2023/01/Playstore-2-400x119.png" alt="" className="img2"/>
                     <h3>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.</h3>
                 </div>
                </div>
                <div className="last">
                    <h5>TM & Copyright 2024 Burger King Company LLC. All Rights Reserved.
                        <u>Do Not Sell Or Share My Personal Information</u>
                    </h5>
                </div>
                </div>
                <div className="njh">
                <div className="kh">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAABcSAAAXEgFnn9JSAAAC4klEQVRoge3ZTYiNURgH8L+PBVkQdm6N+zx3bohJY1JIioWSLJQFja/U1Fj4WJlszAr5SCIljZhiISMNJVFDNpJC8z7Pey0YzUoWU1KMNK7OzbhzZ+bNOe/9eM/Ufeq/u73n+XXOPe/HAepVr3olUnlguhDalfBcCH0hYV8emIapVLoEC5TwSBn5sRFCb5DCfEyFUkazED6OR/wLYVAZa+BzKWOPML5HIoqYX0o45t1SG2jALCFc+y9gIuj+mwbMgw8li9GgjFfOiGI+BWmsThShaWxVxlAZiNFNYFgIh2sOyAMzhNEpjJFyESUgRs8HwtyaIHJZLBTC40oCxmFyuTSaqooICS3CGKgWQouYHyGjrToIRpsSflYboaW7WvfbJsypCGAwhdnKuF5TAJfMTqiE5WUhNI2sMPqTQmhxZr6FhF2xEELYJISviSN4zOwQ2p2XkxC+JN24TsxQ3wbMtIaEjLUeNJ2fLO8ySLlANifdsEYkYGSsIQFjW9INa1RcdjDJYEfiDfPkCRmrXCCtSTesEckR1rlADiTdsEYkIGy0hmgGB5NuWCMihC0ukKNJN6xRIWy3hxA6PIbsdIGcqNhSYIxU8gUsIOy3hgjhZJnNmy8pZ8yeb94mTULCCiWcNe8aNXveEsL5Mgb7HDRiZeRsM5rNb8pYWkdcIJfiLiObfV7SWC+M3zEhHfYQxtWYkB7bMcw3rZhjdFpDlNEVa5AMWh0ge2NCTtlDCN1xBjGP/7ZjmCUYE3LBGiKM27EghBbbMcxvY/1HGFesIUq44zGkyxoijHu+QoRxywXywGPIXWvIZKdNHkEe2kMYT3yFKOOpNcQcXnoMeWENMSex3kIIL60hQrjsK0QIvdaQIINlcT6XVhsihGHzzQ0u9b4Ri4RwSBinTZRx0TxMjsmNwo3zbwr3njSyttfvb8RSYbwuhPDMbDBiDpBGr0e4WRiHcE4Yx4Wx2xwyOSHqVa96YbT+AA6XZlBNoYkXAAAAAElFTkSuQmCC" alt=""/>

                    <img src="https://www.bk.com/static/media/7ba95726ef76f181e658ceb137277d2a9be17db2-26x24.0495a4ebf035594acdf1.png" alt=""/>

                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAwCAYAAABT9ym6AAAACXBIWXMAABp0AAAadAHjmgCnAAADSklEQVRoge1aS2gUQRAdRUFRE3eqNquSZLNdE4NBBD+gghDwh6KZ6hEWBA8KiqIePXjwEBRFUDSCBy8ielEvXvwcJWAO4idBFEUEfygo/sFExcQovdO7O7uZbHSRmd0wDXWY6ereevWqurtm2zA8TVpxYoITTNAtCe9WonDGNujc0FwnDL9mC9Nhgu+S8Hc1CBN8YwJp+DBRNSCkB0wBMyqcwjaqbBFw3AukuyKMonIEbuRDS0BvFTPSGwGRYbNAESMYvucpYgTD9zZFjGD4HqaIESPa2eVYOaIwwRtd8BRNjg8lwRkWeFId6iThUKEOvC1RPH0OGsiQLWCRYRjjmPCjCwwHWcS3qHcFRVuzuViDzoxb11gb863uDMOwLZwfLBABp3NlgMAPmqH96rl9diLFhEekwKOqaHOLN3O1h8k9UuBax4qncyJic109bAsECBOcty2ztaDCFNDn9sUaNieTk5jwhSeMnm9faEzUgF/5G4Ov21N1iXR9/WQW0BMMEAF7OwxjvKTY0nxhhoN60otMcKF4jN0ELZnfcfOl2JAfjmUu0fOcLSMyyg8tFvhTEr5UY9vajAmj6TuNOFNXovd8DNmZ6bNg1z+D+B85osJEjU23xqeW1oXnmSRugWnaAZ4wxV8qFHX/LCY8nGM3aCDKwJJ6hNuUnkOw298Q7GILt3KydnpGT+DGQIFkQ2vVvMSUEmxcU6GXtmbE9d5Rcr50fY2pc+V6cIwQPBklR+4okO5KhDf/jmXY4dqDHQEyAvfz43GgKFwur7HMGgWECa4UjX3sEC5gwlMjJb4kOBAgI3g7vyHCV/1+SBmhlmd3Uxy+SjHhLTcXEnWe3V4Z1MfJRJN2TFeQjOQ+jEkB73VoHMy/iy+zU+ZKJY6A5eqZBT5SejaB7eZCrEES7pMCDslmc452yoqAVy3oUZ7XO/kX7wo1UmOCq9oJ/U4KNqnx3n6ZwvWS8FOgQDSYd1kQOjcGWMBTf/E5ngh4xoSXpMBzTPigHBuiL42y0kRE334xfBYoYgTD9zxFjGD43qaIEQzfwxQxYoyhv6cJOsM3qDxhAcdyQNQ1CHUdogrZ6M8WY95aQVYXGOjPFmjDmmJG3e2o9GtOKpyKmfgD7Y7OUoNDweEAAAAASUVORK5CYII=" alt=""/>

            <img src="https://www.bk.com/static/media/00553ce0b224cdeb1269bc2c756d8775c0b21a9f-24x24.0307ef2649472064402d.png" alt=""/>

                    <img src="https://www.bk.com/static/media/ca61127dd95f2e6473303320dba757fa9c1d45e1-24x24.4371e92a85182b7310f4.png" alt=""/>
                </div>
                <div className="ab">
                    <p id="bs">Home</p>
                    <p id="de">Menu</p>
                    <p id="nh">My Code</p>
                    <p>Offers</p>
                    <p>Rewards</p>
                </div>
                    </div>
        </>
    )
}
export default Footer