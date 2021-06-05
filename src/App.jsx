import { RepositoryList } from './components/RepositoryList';
import { Header } from './components/Header';
import { ProfileGit } from './components/ProfileGit';
import GlobalStyle from './styles/global';
import { Container } from './styles/app';

export function App() {

    const usernameGitHub = "filipedeschamps"

    return(
        <>
            <GlobalStyle />
            <Header userName={usernameGitHub}/>
            <Container>
                <ProfileGit userName={usernameGitHub} />
                <RepositoryList userName={usernameGitHub} />
            </Container>
        </>
    )    
}