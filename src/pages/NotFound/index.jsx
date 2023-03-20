import { Header } from '../../components';
import { Link } from 'react-router-dom';
import './NotFound.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  return (
    <div className='notFoundPageContainer'>
      <Header />
      <div className='notFoundPageMessage'>
        <h1>404</h1>
        <FontAwesomeIcon icon={faSadCry} />
        <h2>Page Not Found</h2>
        <Link to='/'>Check out new Events here</Link>
      </div>
    </div>
  );
};

export default NotFound;
