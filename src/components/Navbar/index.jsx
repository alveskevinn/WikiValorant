import "./Navbar.css"
const Navbar = () => {
    return(
        <header className="header">
            <div className="logo">
                <img src="../../../public/imgs/-41603132788rzosdsitdt.png" alt="" />
            </div>
            <div>
                <ul className="pages">
                    <li>Home</li>
                    <li>Agents</li>
                    <li>Weapons</li>
                    <li>Maps</li>
                </ul>
            </div>
            <div>
                <button className="button">Download</button>
            </div>
        </header>
    )
}
export default Navbar