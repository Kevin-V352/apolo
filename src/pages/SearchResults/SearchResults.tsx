import { useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import Pager from '../../components/Pager/Pager';
import TrackCard from '../../components/TrackCard/TrackCard';
import useResultList from '../../hooks/useResultList';
import AlertPage from '../AlertPage/AlertPage';
import * as S from './SearchResultsElements';

const scroll = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
};

const SearchResults = () => {
  const navigate = useNavigate();
  const { query, page } = useParams();

  const formatedPage = Number(page);

  const { tracks, nextPage, status, error } = useResultList(query!, formatedPage);

  useEffect(() => {
    scroll();
  }, [tracks]);

  if (error) {
    return (
      <AlertPage
        type="error"
        message={error}
      />
    );
  };

  if (status === 'pending' && tracks.length === 0) {
    return <AlertPage type="load" />;
  };

  if (status === 'finalized' && tracks.length === 0) {
    return (
      <AlertPage
        type="not-found"
        message="Hmm, nada por aquí..."
      />
    );
  };

  return (
    <S.Container>
      <S.ResultsContainer>
        {
          tracks.map(({ album, name, artists, id }) => (
            <TrackCard
              imageUrl={album.images[1].url}
              trackTitle={name}
              artistName={artists[0].name}
              id={id}
              key={id}
            />
          ))
        }
      </S.ResultsContainer>
      <Pager
        numberOfResults={tracks.length}
        nextPage={nextPage}
        currentPage={formatedPage}
        onNext={() => navigate(`/search/${query}/${(formatedPage + 1)}`)}
        onPrev={() => navigate(`/search/${query}/${(formatedPage - 1)}`)}
      />
    </S.Container>
  );
};

export default SearchResults;
