import * as S from './PagerElements';

interface PagerProps {
  numberOfResults: number;
  currentPage: number;
  nextPage: boolean;
  onNext: () => void;
  onPrev: () => void;
};

const Pager = ({ numberOfResults, currentPage, nextPage, onPrev, onNext }: PagerProps) => (
  <S.Container enoughContent={numberOfResults < 6}>
    {
      (currentPage > 1) && (
        <S.ArrowLeft onClick={onPrev} />
      )
    }
    <S.PageIndicator>
      {currentPage}
    </S.PageIndicator>
    {
      nextPage && (
        <S.ArrowRight onClick={onNext} />
      )
    }
  </S.Container>
);

export default Pager;
