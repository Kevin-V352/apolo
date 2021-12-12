import { useContext } from 'react';

import { TracksContext } from '../../contexts/tracksContext/TracksContext';
import * as S from './PagerElements';

const Pager = () => {
  const {
    tracks,
    changePage,
    pageData: { previous, current, next }
  } = useContext(TracksContext);

  return (
    <S.Container enoughContent={!!(tracks && tracks.length < 6)}>
      {
        previous && (
          <S.ArrowLeft
            onClick={() => changePage(previous)}
          />
        )
      }
      <S.PageIndicator>
        {current}
      </S.PageIndicator>
      {
        next && (
          <S.ArrowRight
            onClick={() => changePage(next)}
          />
        )
      }
    </S.Container>
  );
};

export default Pager;
