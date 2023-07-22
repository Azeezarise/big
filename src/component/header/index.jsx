import { Wrapper, LogoImg, Content, TMDBImg } from "./Header.styles"
import RMDBlogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg';




const Header = () => {
    return (
        <Wrapper>
            <Content>
                <a href="#">
                    <LogoImg src={RMDBlogo} alt="rmdb-logo" />
                </a>

                <TMDBImg src={TMDBLogo} alt="tmdb-logo"></TMDBImg>
            </Content>
        </Wrapper>
    )
}
export default Header