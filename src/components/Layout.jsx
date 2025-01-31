export const Layout = ({ children }) => {
    return (
        <div>
            <nav className="flex justify-between items-center bg-red-950 text-white py-4 px-6 h-20">
                <img className="w-24 h-24" src="cafe.png" alt="logo de mi empresa de cafe" />
                <ul className="flex gap-4">
                    <li><a href="/" className="hover:text-red-900">Inicio</a></li>
                    <li><a href="/about" className="hover:text-red-900">Nosotros</a></li>
                    <li><a href="/contact" className="hover:text-red-900">Contactanos</a></li>
                </ul>
            </nav>

            <div className="flex flex-1">
                <main className="flex-1 bg-slate-50 p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}