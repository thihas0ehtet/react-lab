import Header from "./Header"
import Sidebar from "./Sidebar"

function Layout({ children, title, noPadding = false }: { children: any, title: string, noPadding?: boolean }) {
    return (
        <div className="d-flex bg-light">
            <Sidebar />

            <div className="w-100">
                <Header title={title} />
                <div className={!noPadding ? "p-4" : ""}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout