import { Header } from '../../components';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
  return (
    <div className='errorPageContainer'>
      <Header />
      <div className='errorPageMessage'>
        <h1>Oops...</h1>
        <h2>Something went wrong</h2>
        <Link to='/'>Check out new Events here</Link>
      </div>
    </div>
  );
};

export default Error;
