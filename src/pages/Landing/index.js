import { useState, useEffect, } from 'react';
import { Link } from 'react-router-dom';

import { TitleAnimation } from '../../animate';
import Genres from '../../genres.json';

import { NavBar, Slider, Poster } from '../../components';
import api from '../../services/api';
import {
    Container,
    Carousel,
    GradientTop,
    GradientLeft,
    Wrapper,
    Title,
    Dots,
    Dot,
    Release,
    ReleaseItem,
    Img,
    SliderContainer,
    SliderGenres,
    Genre,
} from './styles';



function Landing () {

    const [CarrouselItems, setCarrouselItems] = useState([]);
    const [CarrouselIndex, setCarrouselIndex] = useState(0);

    const [ReleaseItems, setReleaseItems] = useState([]);

    const [SliderItems, setSliderItems] = useState([]);
    const [GenreId, setGenreId] = useState({MovieId: 28, TvId: 10759,});

    useEffect(() => {

        async function fetch() {
            const { data: response } = await api.get('/trending/all/week')
            const carrouselData = response.results.slice(3, 8);
            const releaseData = response.results.slice(0, 3);

            setCarrouselItems(carrouselData);
            setReleaseItems(releaseData);

        }

        fetch();
    }, [])

    useEffect(() => {

        async function fecth() {
            const {data: movies} = await api.get(`/discover/movie?with_genres=${GenreId.MovieId}`);
            const {data: tvShows}  = await api.get(`/discover/tv?with_genres=${GenreId.TvId}`);
            const List = [...movies.results, ...tvShows.results];
            List.sort((a, b) => b.vote_average - a.vote_average);//Order by vote_average
            setSliderItems(List);
        }

        fecth()
    }, [GenreId])


    const handleClick = (index) => setCarrouselIndex(index);


    return (
        <Container>
            <NavBar />
            {CarrouselItems.length > 0 &&
                <Carousel background={CarrouselItems[CarrouselIndex].backdrop_path}>
                    <GradientTop />
                    <GradientLeft />
                    <Wrapper>
                        <Link
                            to={CarrouselItems[CarrouselIndex].media_type === 'tv'
                                ? `tvshow/${CarrouselItems[CarrouselIndex].id}`
                                : `movie/${CarrouselItems[CarrouselIndex].id}`
                            }
                        >
                            <Title
                                key={CarrouselItems[CarrouselIndex].id}
                                variants={TitleAnimation}
                                animate="start"
                            >
                                {CarrouselItems[CarrouselIndex].name
                                    ? CarrouselItems[CarrouselIndex].name
                                    : CarrouselItems[CarrouselIndex].title
                                }
                            </Title>
                        </Link>
                        <Dots nth={CarrouselIndex}>
                            {CarrouselItems.map((items, index) =>
                                <Dot key={items.id} onClick={() => handleClick(index)} />
                            )}
                        </Dots>
                    </Wrapper>
                </Carousel>
            }
            {ReleaseItems.length > 0 &&
                <Release>
                    {ReleaseItems.map((item) => (
                        <ReleaseItem key={item.id}>
                            <Link 
                                to={item.media_type === 'tv' 
                                    ? `/tvshow/${item.id}` 
                                    : `/movie/${item.id}` 
                                }
                            >
                                <Img 
                                    src={`https://image.tmdb.org/t/p/w780${item.backdrop_path}`} 
                                />
                            </Link>
                        </ReleaseItem>
                    ))}
                </Release>
            }
            {SliderItems.length > 0 &&
                <SliderContainer>
                    <SliderGenres>
                        {Genres.map(({name, MovieId, TvId}, i) => 
                            <Genre 
                                key={i}
                                className={MovieId === GenreId.MovieId && 'selected'}
                                onClick={() => setGenreId({MovieId, TvId})}
                            >
                                {name}
                            </Genre>
                        )}
                    </SliderGenres>
                    <Slider>
                         
                        {SliderItems.map((item) => 
                                <Poster 
                                    key={item.id} 
                                    item={item}
                                    link={item.title ? `/movie/${item.id}` : `/tvshow/${item.id}`}
                                    PosterStyles={{  
                                        clipPath: 'polygon(20% 0,100% 0,80% 100%,0% 100%)',
                                        transform: 'scaleX(1.259)',
                                    }}
                                    ImgStyles={{
                                        display: 'block',
                                        height: 240,
                                        width: 180
                                    }}         
                                />
                        )}
                     </Slider>
                </SliderContainer>
            }    
        </Container>

    );
}

export default Landing