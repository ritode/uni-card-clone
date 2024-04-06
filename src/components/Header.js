import "./header.css";
export default function Header() {
  return (
    <header className="header-ctn">
      <div className="header">
        <img src="/images/logo.svg" alt="Logo" className="logo" />
        <button className="btn">Uni Paychek</button>
      </div>
    </header>
  );
}
