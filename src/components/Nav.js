import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <br></br>
      <nav className="Nav">
        <Link className="Topics" to="/topics">
          topics
        </Link>
        {' | '}
        <Link className="Articles" to="/articles">
          articles
        </Link>
        {' | '}
        <Link className="Users" to="/users">
          users
        </Link>
      </nav>
    </div>
    )
}

export default Nav;