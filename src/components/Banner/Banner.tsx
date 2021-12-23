import { Text } from '../../shared/StylizedComponents';
import * as S from './BannerElements';

const Banner = () => (
  <S.Container>
    <S.AppTitle>APOLO</S.AppTitle>
    <Text>Busca los detalles de tus canciones favoritas</Text>
    <S.AuthorContainer>
      <Text>Powered by</Text>
      <S.AuthorName>KEVIN VEGA</S.AuthorName>
    </S.AuthorContainer>
  </S.Container>
);

export default Banner;
