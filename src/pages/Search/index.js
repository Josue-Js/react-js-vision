import React, {useState, useEffect, useRef, useCallback} from 'react';

import api from '../../services/api';

import { NavBar, Poster } from '../../components';
import { 
  Container,
  SearchField,
  SearchResults,
  Input,
 } from './styles';


const Search = () => {

  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {

    if(!query) return

    async function fetch() {
      const {data: movie} = await api.get(`/search/movie?query=${query}`);
      const {data: tvshow} = await api.get(`/search/tv?query=${query}`);
      const data = [...movie.results, ...tvshow.results];
      setSearchResults(data);
    }

    fetch()

  }, [query])


  const handleSubmit = useCallback((event) => {
    
    event.preventDefault();
    setQuery(inputRef.current.value)

  }, [])




  return (
    <Container>
      <NavBar />
      <SearchField onSubmit={handleSubmit}>
        <Input 
          ref={inputRef}
          type="text"
          placeholder="Search..."
        />
      </SearchField>
      <SearchResults>
          {searchResults.map((item) => 
            <Poster 
              key={item.id}
              item={item}
              link={item.title ? `/movie/${item.id}` : `/tvshow/${item.id}`}
              PosterStyles={{
                flex: '1 1 120px',
                maxWidth: 150,
                maxHeight: 200,
                margin: '5px',
              }}
              ImgStyles={{
                display: 'block',
                width: '100%',
                height: '100%'
              }}
            
            />
          )}
        </SearchResults>
    </Container>
  );
};

export default Search;
