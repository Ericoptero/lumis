import Logo from '../../assets/lumis.svg'

export function Header() {
  return (
    <header>
      <img src={Logo} alt="Lumis" />
      <nav>
        <a href="/">Home</a>
        <a href="/contact">Contato</a>
      </nav>
    </header>
  )
}