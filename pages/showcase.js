import ShowCase from "../components/ShowSase";
import useSWR from "swr"
import {useState, useEffect} from "react"

const Showcase = () => {
    useEffect(() => {
        console.log("hello broder")
    }, [])
    return (
        <div>
            <ShowCase />
        </div>
    );
};

export default Showcase;