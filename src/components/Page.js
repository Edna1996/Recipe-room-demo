import React, { Fragment } from "react";

import classes from "./Page.module.css";
import Home from "./Home";
import Footer from "./Footer";


const Page = () => {
    return (
        <Fragment>
            <div className={classes.Home}>
                {/* <Navbar /> */}
                <Home />
            
            </div>
            {}
            <Footer />
        </Fragment>
    );
};

export default Page;
