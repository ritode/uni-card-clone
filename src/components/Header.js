import "./header.css"
export default function Header(){
    return(
        <header className="header">
            <img src="/images/logo.svg" alt="Logo" className="logo"/>
            <button className="btn">Uni Paychek</button>
        </header>
    )
}