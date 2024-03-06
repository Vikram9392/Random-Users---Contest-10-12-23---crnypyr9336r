import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "./users";

const App = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(async() => {
        let res = await fetch("https://randomuser.me/api/?results=10");
        let val = await res.json();
        // console.log(val.results);
        let userarr = [];
        val.results.forEach((item,i)=>{
            userarr.push(item.name.first);
        });
        console.log(" userARR ; "+userarr)
        setItems(userarr);
        setLoading(!isLoading);
    }, []);

    return <Users isLoading={isLoading} items={items} />;
};

export default App;
