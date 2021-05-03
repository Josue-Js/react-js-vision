import { useState, useEffect, useCallback } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { MdKeyboardArrowUp, MdArrowForward } from 'react-icons/md';

import { NavBar, ProgressBar, Slider, Trailer, Poster } from '../../components';

import api from '../../services/api';
import { ListAnimation, ArrowUpAnimation } from '../../animate';

import {
    Container,
    TvShowContainer,
    TvShowInfo,
    Genres,
    Genre,
    Details,
    Title,
    Overview,
    TvShowRanting,
    TvShowTrailer,
    CreateBy,
    GoGallery,
    GalleryWrapper,
    Text,
    TvShowSocial,
    SocialIcon,
    Anchor,
    TvShowList,
    ListIcon


} from './styles';



function TvShow() {

    const history = useHistory();
    const { id } = useParams();

    const [tvShowInfo, setTvShowInfo] = useState();
    const [tvShowTrailer, setTvShowTrailer] = useState();
    const [tvShowSocial, setTvShowSocial] = useState();

    const [tvShowList, setTvShowList] = useState([]);
    const [listOpen, setListOpen] = useState(false);


    useEffect(() => {


        async function fetch() {
            try {
                const { data: info } = await api.get(`/tv/${id}`);
                const { data: trailer } = await api.get(`/tv/${id}/videos`);
                const { data: social } = await api.get(`/tv/${id}/external_ids`);
                setTvShowInfo(info);
                setTvShowTrailer(trailer);
                setTvShowSocial(social);
            } catch (err) {
                
                history.replace('/')
            }

        }

        fetch();

    }, [history,id])


    useEffect(() => {

        async function fetch() {
            const { data } = await api.get(`/discover/tv?sort_by=popularity.desc`);
            setTvShowList(data.results);
        }

        fetch();

    }, [history, id])


    const handleClick = useCallback(() => {
        setListOpen(!listOpen);
    }, [listOpen])




    return (
        <Container>
            <NavBar />
            {tvShowInfo && tvShowSocial &&
                <TvShowContainer background={tvShowInfo.backdrop_path}>

                    <TvShowInfo>
                        <Genres>
                            {tvShowInfo.genres.map(({ id, name }) =>
                                <Genre key={id}>
                                    {name}
                                </Genre>
                            )}
                        </Genres>
                        <Title>
                            {tvShowInfo.name}
                        </Title>
                        <Details>
                            {`${tvShowInfo.first_air_date.split('-')[0]}  -  `}
                            {`${tvShowInfo.seasons.length} Seasons`}
                        </Details>
                        <Overview>
                            {tvShowInfo.overview}
                        </Overview>
                    </TvShowInfo>

                    <TvShowRanting>
                        <ProgressBar
                            size={193}
                            progress={tvShowInfo.vote_average}
                            strokeWidth={7}
                        />
                    </TvShowRanting>

                    <TvShowTrailer>
                        {tvShowTrailer &&
                            <Slider>
                                {tvShowTrailer.results.map(({ id, key }, index) =>
                                    <Trailer
                                        key={id}
                                        hash={key}
                                    />
                                )}
                            </Slider>
                        }
                        <CreateBy>
                            {tvShowInfo.created_by.length > 0 &&
                                `create by: ${tvShowInfo.created_by[0].name}`
                            }
                        </CreateBy>
                    </TvShowTrailer>
                    <GoGallery>
                        <Link to={`/gallery/tv/${id}`}>
                            <GalleryWrapper>
                                <Text>
                                    Gallery
                                </Text>
                                <MdArrowForward size={23} color="white" />
                            </GalleryWrapper>
                        </Link>
                    </GoGallery>
                    <TvShowSocial>
                        <SocialIcon>
                            <Anchor
                                href={tvShowSocial.twitter_id
                                    ? `https://www.twitter.com/${tvShowSocial.twitter_id}`
                                    : `https://twitter.com/explore`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                <FaTwitter size={22} color="white" />
                            </Anchor>

                        </SocialIcon>
                        <SocialIcon>
                            <Anchor
                                href={tvShowSocial.instagram_id
                                    ? `https://www.instagram.com/${tvShowSocial.instagram_id}`
                                    : `https://www.instagram.com/explore`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                <FaInstagram size={22} color="white" />
                            </Anchor>
                        </SocialIcon>
                        <SocialIcon>
                            <Anchor
                                href={tvShowSocial.facebook_id
                                    ? `https://www.facebook.com/${tvShowSocial.facebook_id}`
                                    : `https://www.facebook.com`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebookF size={22} color="white" />
                            </Anchor>
                        </SocialIcon>
                    </TvShowSocial>
                </TvShowContainer>
            }
            <TvShowList
                variants={ListAnimation}
                animate={listOpen ? 'open' : 'close'}
            >


                <ListIcon
                    onClick={handleClick}
                    variants={ArrowUpAnimation}
                    animate={listOpen ? 'open' : 'close'}
                >
                    <MdKeyboardArrowUp size={30} color="white" />
                </ListIcon>
                <Slider>
                    {tvShowList.map((item) =>
                        <Poster
                            key={item.id}
                            item={item}
                            link={`/tvshow/${item.id}`}
                            PosterStyles={{
                                clipPath: 'polygon(20% 0,100% 0,80% 100%,0% 100%)',
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
            </TvShowList>

        </Container>
    );
}

export default TvShow