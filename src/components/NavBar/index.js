import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { BiSearchAlt } from 'react-icons/bi'
import Logo from '../../assests/vision.svg';
import {
    Container,
    NavLogo,
    NavMenu,
    NavItem,
    NavLink,
    NavSearch,
    Icon
} from './styles';
import { useEffect, useState } from 'react';
import api from '../../services/api';


const routes = {
    '': 1,
    'movie': 2,
    'tvshow': 3,
    'gallery': 4
}


const NavBar = () => {
    //Selecionar nth do navMenu li > a
    const location = useLocation();
    const path = location.pathname.split('/')[1]
    const nthChild = routes[path]

    const [links, setLinks] = useState({});



    useEffect(() => {
        
        async function fetch() {
            const { data: movies } = await api.get(`/trending/movie/week`);
            const { data: tvShows } = await api.get(`/trending/tv/week`);
            setLinks({movieId: movies.results[0].id, tvShowsId: tvShows.results[0].id})
        }

        fetch()

    }, [])


    return (
        <Container>
            <Link to='/'>
                <NavLogo
                    src={Logo}
                />
            </Link>


            <NavMenu nth={nthChild}>
                <NavItem>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={`/movie/${links.movieId}`}>
                        Movie
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={`/tvshow/${links.tvShowsId}`}>
                        TvShow
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={`/gallery/tv/${links.tvShowsId}`}>
                        Gallery
                    </NavLink>
                </NavItem>
            </NavMenu>

            <NavSearch>
                <NavLink to={'/search'}>
                    <Icon>
                        <BiSearchAlt size={20} color="white" />
                    </Icon>
                </NavLink>
            </NavSearch>
        </Container>

    );
}



export default NavBar