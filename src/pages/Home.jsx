import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div className="home">
            <Navbar />
            <h1 className = 'well'>Connect with like minds here!</h1>
        
        <Link to='/people' className=" button">Click Here!</Link>
        </div>
     );
}
 
export default Home;