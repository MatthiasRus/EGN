import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
            <Link to="/about">About</Link>
            <Link to='/vans'>Vans</Link>
            <Link to="/host">Host</Link>
        </nav>
      </header>
    </div>
  )
}
