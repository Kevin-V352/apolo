import { useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import Pager from '../../components/Pager/Pager';
import TrackCard from '../../components/TrackCard/TrackCard';
import useGhostContent from '../../hooks/useGhostContent';
import useResultList from '../../hooks/useResultList';
import useUpdateDocumentTitle from '../../hooks/useUpdateDocumentTitle';
import { TrackGrid } from '../../shared/StylizedComponents';
import AlertPage from '../AlertPage/AlertPage';
import * as S from './SearchResultsPageElements';

const scroll = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
};

const SearchResultsPage = () => {
  const navigate = useNavigate();
  const { query, page } = useParams();

  const formatedPage = Number(page);

  useUpdateDocumentTitle(`APOLO | ${query!}`, [query!]);

  const { tracks, nextPage, status, error } = useResultList(query!, formatedPage);

  const { ghostElements, emptySpace } = useGhostContent(tracks.length);

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
      <TrackGrid>
        {
          tracks.map(({ album, name, artists, id }) => (
            <TrackCard
              imageUrl={album.images[1]?.url}
              trackTitle={name}
              artistName={artists[0].name}
              id={id}
              key={id}
            />
          ))
        }
        {
          (emptySpace) && ghostElements.map((ghostValue) => <div key={ghostValue} />)
        }
      </TrackGrid>
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

export default SearchResultsPage;
