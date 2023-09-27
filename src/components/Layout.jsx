import Header from "./Header"
// import SubHeader from "./SubHeader"

const Layout = ({children}) => {
    return(
        <>
            <Header/>
            {/* <SubHeader/> */}
            <div id="content-box" className="w-full">
                {children}
            </div>
        </>
    )
}

export default Layout