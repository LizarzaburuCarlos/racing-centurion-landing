import "../styles/Navbar.styles.css"

export const Navbar = () => {
    return (
        <nav className="navbar w-full h-16 lg:h-20 z-10 flex justify-center items-center">
            <div className="navbar__container 2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between align-center">
                <div className="navbar__logo">
                    <a href="/#home" aria-label="Home" className="navbar__home">
                        <img src="/img/logo_placeholder.png" alt="Logo placeholder" />
                    </a>
                </div>
                <div className="navbar__links flex gap-10 text-white items-center">
                    <a href="/" className="navbar__link">Link 1</a>
                    <a href="/" className="navbar__link">Link 2</a>
                    <a href="/" className="navbar__link">Link 3</a>
                    <a href="/" className="navbar__link">Link 4</a>
                </div>
            </div>
        </nav>
    )
}