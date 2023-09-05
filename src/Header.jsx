import NavBar from "./NavBar";

export default function Header({title = "Title", children}) {
  return (
    <header className="centerText, Header">
      <h1>{title}</h1>
      {children}
      <NavBar />
    </header>
  );
}
