import { Header } from '../../components';
import { Link, useParams } from 'react-router-dom';
import './Error.css';
import { HOME_ROUTE } from '../../constants/routes';

const Error = () => {
  const { statusCode } = useParams();
  return (
    <div className='errorPageContainer'>
      <Header />
      <div className='errorPageMessage'>
        <h1>Oops...</h1>
        <h2>Something went wrong</h2>
        <h3>Status Code: {statusCode}</h3>
        <Link to={HOME_ROUTE}>Check out new Events here</Link>
      </div>
    </div>
  );
};

export default Error;
