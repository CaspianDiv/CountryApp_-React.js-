import { Outlet } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"

function RootLayout() {
  return (
    <>
    <Header />
        <Outlet />
    <Footer />
    </>
  )
}

export default RootLayout
