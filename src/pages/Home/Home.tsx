// import styles from "./Home.module.css";
import GridView from "../../components/views/GridView/GridView";
// import ListView from "../../components/views/ListView/ListView";
import Toolbar from "../../components/layout/Toolbar/Toolbar";

export default function Home() {
    return (
        <div className="home">
            <GridView />
            <Toolbar />
        </div>
    )
}