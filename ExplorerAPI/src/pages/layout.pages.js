import Header from "../components/header.components";
import Footer from "../components/footer.components";
import {Outlet} from "react-router-dom";
function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout;