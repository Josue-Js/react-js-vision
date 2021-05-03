import React, { useContext, useState } from 'react';
import { MdPlayArrow, MdAdd } from 'react-icons/md';
import { AnimatePresence } from 'framer-motion';

import SliderContext from '../Slider/context';
import { IFrameAnimation } from '../../animate';

import {
  Container,
  Play,
  Video,
  Close,
  Iframe
} from './styles';


const Trailer = ({ hash }) => {

  const [openTrailer, setOpenTrailer] = useState(false);
  const { mouseMove } = useContext(SliderContext);


  const handleClick = () => setOpenTrailer(true)
  

  return (
    <Container >
      <Play
        hash={hash}
        onClick={handleClick}
        mouseMove={mouseMove}
      >
        <MdPlayArrow size={20} color="white" />
      </Play>

      <AnimatePresence>
        {openTrailer &&
          <Video>
            <Close onClick={() => setOpenTrailer(false)}>
              <MdAdd size={24} color="white" />
            </Close>

            <Iframe
              variants={IFrameAnimation}
              animate="start"
              exit="exit"
              onClick={() => setOpenTrailer(false)}

              src={`https://www.youtube.com/embed/${hash}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Video>
        }
      </AnimatePresence>
    </Container>

  );
};

export default Trailer;



//https://i.ytimg.com/vi_webp/${hash}/mqdefault.webp)