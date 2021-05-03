import { useState, useEffect, useRef, Fragment } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';
import { MdAdd, MdNavigateBefore, MdNavigateNext, MdSearch, } from 'react-icons/md'
import ReactLoading from 'react-loading';

import { NavBar } from '../../components';
import api from '../../services/api';


import {
  Container,
  Slide,
  Prev,
  Next,
  Images,
  Image,
  NotImages,
  Message,
  PosterInfo,
  Title,
  Poster,
  Search,
  SearchButton,
  Input,
  Results,
  Result,
  Close,
  Img,
  ImagesSetting,
  Name,
  NameInput,
  Label,
  Size,
  SizeSelect,
  Option,
  Download,
  Loading
} from './styles';

function Gallery() {

  const history = useHistory();
  const { media_type, id } = useParams();

  const sliderRef = useRef(null);
  const searchRef = useRef(null);

  const [data, setData] = useState({});
  const [nameImage, setNameImage] = useState('');
  const [sizeImage, setSizeImage] = useState('w300');
  const [imageIndex, setImageIndex] = useState(0);
  const [resultOpen, setResultsOpen] = useState(false)

  const [query, setQuery] = useState();
  const [searchResult, setSearchResult] = useState([]);

  const [loading, setLoading] = useState(false)



  useEffect(() => {

    async function fetchImages() {
      try {
        const { data: images } = await api.get(`/${media_type}/${id}/images`)
        const { data: info } = await api.get(`/${media_type}/${id}`);
        const name = info.title ? info.title : info.name
        setData({ item: info, images: images.backdrops })
        setNameImage(name)
        setLoading(true)
      } catch (err) {
        history.replace('/')
      }

    }

    fetchImages()

  }, [history, id, media_type])



  useEffect(() => {

    if (!query) return
    async function fetchData() {
      const { data: movie } = await api.get(`/search/movie?query=${query}`)
      const { data: tv } = await api.get(`/search/tv?query=${query}`)
      const data = [...movie.results, ...tv.results];
      setSearchResult(data)
    }

    fetchData()
  }, [query])


  const handlePrev = () => {
    const height = sliderRef.current.clientHeight
    sliderRef.current.scrollTop -= height

    if (imageIndex === 0) return
    setImageIndex(imageIndex - 1)
  }

  const handleNext = () => {
    const height = sliderRef.current.clientHeight
    sliderRef.current.scrollTop += height
    if (imageIndex === data.images.length - 1) return
    setImageIndex(imageIndex + 1)
  }

  const handleScroll = () => {
    const height = sliderRef.current.clientHeight
    const scrollTop = sliderRef.current.scrollTop
    const index = parseInt(scrollTop / height)
    setImageIndex(index)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(searchRef.current.value);
    setResultsOpen(true)
  }

  const handleCloseResults = () => setResultsOpen(false)

  const handleSelect = (event) => setSizeImage(event.target.value)


  async function handleDownload(event) {
    event.preventDefault();


    if (!data.images.length > 0) return alert('Not images to download')

    try {
      const response = await fetch(event.target.href);
      const buffer = await response.arrayBuffer();
      const url = window.URL.createObjectURL(new Blob([buffer]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `${nameImage}.jpg`);
      link.click()
    } catch (err) {

      alert('Erro em fazer download')
    }

  }



  if (!loading) {

    return (
      <Loading>
        <ReactLoading type="bubbles" color="#fff" height={250} width={200} />
      </Loading>
    )
  }



  return (
    <Container>
      <Slide>
        <NavBar />
        {data.images && data.images.length > 0 ?
          <>
            <Prev onClick={handlePrev}>
              <MdNavigateBefore size={30} color="white" />
            </Prev>
            <Next onClick={handleNext}>
              <MdNavigateNext size={30} color="white" />
            </Next>
            <Images ref={sliderRef} onScroll={handleScroll}>
              {data.images.map(item => (
                <Image key={item.file_path}>
                  <img src={`https://image.tmdb.org/t/p/w1280${item.file_path}`} alt="background" />
                </Image>
              ))}
            </Images>
          </>
          : <NotImages>
            <Message>Not Images</Message>
          </NotImages>
        }
      </Slide>
      {data.item &&
        <PosterInfo>
          <Title>
            {data.item.title ? data.item.title : data.item.name}
          </Title>
          <Poster image={`https://image.tmdb.org/t/p/w300${data.item.poster_path}`} />

          <Search onSubmit={handleSubmit} >
            <Input
              ref={searchRef}
              type="text"
              placeholder="Search..."
            />
            <SearchButton type="submit">
              <MdSearch size={19} color="white" />
            </SearchButton>

            {resultOpen &&
              <Results>
                <Close onClick={handleCloseResults}>
                  <MdAdd size={25} color="white" />
                </Close>
                {searchResult.map(item => (
                  <Fragment key={item.id}>
                    {item.poster_path &&
                      <Result key={item.id} onClick={handleCloseResults}>
                        <Link
                          to={`/gallery/${item.title ? 'movie' : 'tv'}/${item.id}`}
                        >
                          <Img
                            src={`https://image.tmdb.org/t/p/w154${item.poster_path}`}
                          />
                        </Link>
                      </Result>
                    }
                  </Fragment>
                ))}
              </Results>
            }
          </Search>

          <ImagesSetting>
            <Title>Image</Title>
            <Name>
              <Label>Name Image</Label>
              <NameInput
                type="text"
                onChange={(event) => setNameImage(event.target.value)}
                value={nameImage}
                placeholder="Name"
              />
            </Name>
            <Size>
              <Label>Size Image</Label>
              <SizeSelect onChange={handleSelect} value={sizeImage}>
                <Option value="w300">Small(300x169)</Option>
                <Option value="w780">Medium(780x439)</Option>
                <Option value="w1280">Large(1280x720)</Option>
                <Option value="original">Original</Option>
              </SizeSelect>
            </Size>


            <Download
              href={data.images && data.images.length > 0
                ? `https://image.tmdb.org/t/p/${sizeImage}${data.images[imageIndex].file_path}`
                : '#'
              }
              onClick={handleDownload}
            >
              Download
            </Download>


          </ImagesSetting>

        </PosterInfo>
      }
    </Container>
  );



}




export default Gallery