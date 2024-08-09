import styled from 'styled-components';
import { Outlet, useLoaderData, Form } from 'react-router-dom';
import { QButton, QLink, QInput } from '../components';
import { isEmptyArray } from '../utils/common'

type ContactItem = {
    id: number;
    name: string;
    path: string;
}

type ContactLoaderData = {
    contacts: ContactItem[];
}

const MainContainer = styled.div`
    display: flex;
`

const Slider = styled.div`
    width: 300px;
    height: 100vh;
    background-color: #eee;
`

const SearchForm = styled(Form)`
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
const ContactWrapper = styled.ul`
    padding: 1.5rem;
    
`
const ContactItem = styled.li`
    list-style: none;
`



export default function Root() {

    const { contacts } = useLoaderData() as ContactLoaderData;

    return (
        <MainContainer>
            <Slider>
                <SearchForm method='post'>
                    {/* <QInput type="text" placeholder="Search..." /> */}
                    <QButton type='submit'>New</QButton>
                </SearchForm>
                <Divider />
                <ContactWrapper>
                    {
                        !isEmptyArray(contacts) ? contacts.map(contact => (
                            <ContactItem key={contact.id}>
                                <QLink to={contact.path}>{contact.name}</QLink>
                            </ContactItem>
                        )) : <p>No Contacts...</p>
                    }
                </ContactWrapper>
            </Slider>
            <Outlet />
        </MainContainer>
    );
}