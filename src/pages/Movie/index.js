import { useState, useEffect, useCallback, } from 'react';
import { Link, useHistory, useParams} from 'react-router-dom';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import {  MdKeyboardArrowUp, MdArrowForward} from 'react-icons/md';

import { NavBar, ProgressBar, Slider, Trailer, Poster} from '../../components';

import api from '../../services/api';

import {ListAnimation, ArrowUpAnimation} from '../../animate';
import {
    Container,
    MovieContainer,
    MovieInfo,
    Genres,
    Genre,
    Details,
    Title,
    Overview,
    MovieRanting,
    MovieTrailer,
    GoGallery,
    GalleryWrapper,
    Text,
    MovieSocial,
    SocialIcon,
    Anchor,
    MovieList,
    ListIcon

} from './styles';




function Movie() {

    const history = useHistory()
    const { id } = useParams();

    const [movieInfo, setMovieInfo] = useState();
    const [movieTrailer, setMovieTrailer] = useState();
    const [movieSocial, setMovieSocial] = useState();

    const [movieList, setMovieList] = useState([]);
    const [listOpen, setListOpen] = useState(false);



    useEffect(() => {

        async function fetch() {
            
            try {
                const { data: info } = await api.get(`/movie/${id}`);
                const { data: trailer } = await api.get(`/movie/${id}/videos`);
                const { data: social } = await api.get(`/movie/${id}/external_ids`);
                setMovieInfo(info);
                setMovieTrailer(trailer);
                setMovieSocial(social);

            } catch (err) {

                history.replace('/')
            }
        }

        fetch();

    }, [history, id])


    useEffect(() => {
  
        async function fetch() {
            const { data } = await api.get(`/trending/movie/week`);
            setMovieList(data.results);
        }

        fetch();

    }, [history, id])


    const handleClick = useCallback(() => {
        setListOpen(!listOpen); 
    }, [listOpen])




    return (
        <Container>
            <NavBar />
            {movieInfo && movieSocial && 
                <MovieContainer background={movieInfo.backdrop_path}>

                    <MovieInfo>
                        <Genres>
                            {movieInfo.genres.map( ({id, name}) => 
                                <Genre key={id}>
                                    {name}
                                </Genre>
                            )}
                        </Genres>
                        <Title>
                            {movieInfo.title}
                        </Title>
                        <Details>
                            {movieInfo.release_date.split('-')[0]} -
                             {movieInfo.runtime}Min
                        </Details>
                        <Overview>
                            {movieInfo.overview}
                        </Overview>
                    </MovieInfo>

                    <MovieRanting>
                        <ProgressBar 
                            size={193}
                            progress={movieInfo.vote_average}
                            strokeWidth={7}
                        />
                    </MovieRanting>
                    
                    <MovieTrailer>
                        {movieTrailer &&
                            <Slider>
                                {movieTrailer.results.map(({id, key}) => 
                                    <Trailer 
                                        key={id}
                                        hash={key}
                                    />
                                )}
                            </Slider>
                        }
                    </MovieTrailer>
                    <GoGallery>
                        <Link to={`/gallery/movie/${id}`}>
                            <GalleryWrapper>
                                <Text>
                                    Gallery
                                </Text>
                                    <MdArrowForward size={23} color="white"/>
                            </GalleryWrapper>
                        </Link>
                    </GoGallery>
                    <MovieSocial>
                        <SocialIcon>
                            <Anchor
                                href={movieSocial.twitter_id
                                   ?  `https://www.twitter.com/${movieSocial.twitter_id}`
                                   :  `https://twitter.com/explore`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                <FaTwitter size={22} color="white" />
                            </Anchor>

                        </SocialIcon>
                        <SocialIcon>
                            <Anchor
                                href={movieSocial.instagram_id
                                    ?`https://www.instagram.com/${movieSocial.instagram_id}`
                                    : `https://www.instagram.com`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                <FaInstagram size={22} color="white" />
                            </Anchor>
                        </SocialIcon>
                        <SocialIcon>
                            <Anchor
                                href={movieSocial.facebook_id
                                    ? `https://www.facebook.com/${movieSocial.facebook_id}`
                                    : `https://www.facebook.com`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebookF size={22} color="white" />
                            </Anchor>
                        </SocialIcon>
                    </MovieSocial>
                </MovieContainer>
            }
             <MovieList
                variants={ListAnimation}
                animate={listOpen ? 'open' : 'close'}
             >
                 <ListIcon 
                    onClick={handleClick}
                    variants={ArrowUpAnimation}
                    animate={listOpen ? 'open' : 'close'}
                 >
                     <MdKeyboardArrowUp size={30} color="white"/>
                 </ListIcon>
                 <Slider>
                    {movieList.map((item) => 
                        <Poster
                            key={item.id} 
                            item={item}
                            link={`/movie/${item.id}`}
                            PosterStyles={{  
                                clipPath: 'polygon(20% 0,100% 0,80% 100%,0% 100%)',
                                // transform: 'scaleX(1.259)',
                            }}
                            ImgStyles={{
                                display: 'block',
                                height: 180,
                                width: 160,
                                transition: '400ms ease'
                            }}
                            
                            />
                    )}
                </Slider>
             </MovieList>
        </Container>
    );
}

export default Movie


