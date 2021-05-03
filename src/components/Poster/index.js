import { Link } from 'react-router-dom';

import {
    Container,
    Img,
} from './styles';



const Poster = ({ item, link, PosterStyles, ImgStyles}) => {

    
    return (
        <>
            {item.poster_path &&
                <Container PosterStyles={PosterStyles}>
                    <Link to={link} draggable="false" style={{width: '100%', height: '100%'}}>
                        <Img
                            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                            ImgStyles={ImgStyles}
                            draggable="false"
                        />
                    </Link>
                </Container>
            }
        </>

    )
}

export default Poster