import {Link, Outlet} from "react-router-dom";


const Home = () => {
    return ( 
        <>
        <nav>
        <Outlet />
        <div>
            <Link to="/login">Login</Link>
        </div>
        <div>
            <Link to="/main-page">Home</Link>
        </div>
        </nav>

        </>

     );
}
 
export default Home;