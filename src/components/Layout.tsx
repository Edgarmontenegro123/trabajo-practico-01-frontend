import Navbar from './Navbar'
import './Layout.css'

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            {/* Aquí luego agregaremos el Footer */}
        </>
    )
}

export default Layout