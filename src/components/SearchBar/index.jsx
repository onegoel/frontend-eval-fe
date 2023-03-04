import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className='searchBarAndIconContainer'>
      <input type='text' placeholder='EVENT NAME' className='searchBarInput' />
      <i className='fa-solid fa-magnifying-glass'></i>
    </div>
  );
};

export default SearchBar;
