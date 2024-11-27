import { Outlet } from "react-router-dom"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Toaster />
            <Footer />
        </>
    )
}