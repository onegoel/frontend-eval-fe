import { Header } from '../../components';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='notFoundPageContainer'>
      <Header />
      <div className='notFoundPageMessage'>
        <h1>404 {':('}</h1>
        <h2>Page Not Found</h2>
        <Link to='/'>Check out new Events here</Link>
      </div>
    </div>
  );
};

export default NotFound;
