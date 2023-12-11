import {Link, Outlet} from "react-router-dom";


const Home = () => {
    return ( 
        <>
        <header>
       
        <>
            <Link to="/login">Login</Link>
        </>
        <>
            <Link to="/main-page">Home</Link>
        </>
        <Outlet />
        </header>

        </>

     );
}
 
export default Home;