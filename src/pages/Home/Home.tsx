// import { useState } from "react";
// import GridView from "../../components/views/GridView/GridView";
import ListView from "../../components/views/ListView/ListView";

// import styles from "./Home.module.css";

export default function Home() {
    // const [isGrid, setIsGrid] = useState(true)

    // function handleOnClick() {
    //     setIsGrid(!isGrid)
    // }

    return (
        <div className="home">
            <ListView />
        </div>
    )
}