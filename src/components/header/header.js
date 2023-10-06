import "./header.css";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";

function Header() {
  return (
    <header className='header'>
      <Link to={AppRoute.Root}>
        <h1 className='title-header'>Todo</h1>
      </Link>
    </header>
  );
}

export default Header;
