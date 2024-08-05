import styled from 'styled-components';

const ContentWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-direction: column;
`
const NotFoundDescription = styled.p``

const NotFoundTitle = styled.p`
    color: #888;
`

const NotFound: React.FC = () => {
    return (
        <ContentWrapper>
            <h1>Oops!</h1>
            <NotFoundDescription>Sorry, an error has occurred, Requested page not found!</NotFoundDescription>
            <NotFoundTitle>Not Found</NotFoundTitle>
        </ContentWrapper>
    );
}

export default NotFound;