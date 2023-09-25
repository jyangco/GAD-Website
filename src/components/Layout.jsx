import Header from "./Header"
import SubHeader from "./SubHeader"

const Layout = ({children}) => {
    return(
        <>
            <Header/>
            {/* <SubHeader/> */}
            <div className="container mx-auto py-5">
                {children}
            </div>
        </>
    )
}

export default Layout