import styled from 'styled-components';

const Slider = styled.div`
    width: 300px;
    height: 100vh;
    background-color: #eee;
`

const SearchBar = styled.input`
    height: 2rem;
    padding-inline-start: 1rem;
    border: none;
    outline: 1px solid #ccc;
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    &::placeholder {
        color:black;
    }
    color: black;
    `

const SearchButton = styled.button`
    height: 2rem;
    padding-inline: .5rem;
    color: #00a8ff;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;    border-radius: .25rem;
    background-color: #fff;
`

const SearchBarWrapper = styled.div`
    padding-block: 1rem;
    padding-inline: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    `
const Divider = styled.div`
    width: 100%;
    height: 1px;
    border: 1px solid #ccc;
`
const ContactWrapper = styled.div`
    padding: 1.5rem;

`


export default function Root() {
    return (
        <>
            <Slider>
                <SearchBarWrapper>
                    <SearchBar type="text" placeholder="Search..." />
                    <SearchButton>New</SearchButton>
                </SearchBarWrapper>
                <Divider />
                <ContactWrapper>
                    <div>p 1</div>
                    <div>p 2</div>
                </ContactWrapper>
            </Slider>
        </>
    );
}