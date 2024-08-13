import styled from 'styled-components'
import { QButton } from '../../components'
import { FaStar } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom'

type LoaderData = {
  contact: ContactItem;
}

const ContactsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: max-content;
`

const Avatar = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 1rem;
`

const ContactsInfo = styled.div``

const OpsGroup = styled.div`
  dipslay: flex;
  gap: .5rem;
`
const ContactNameWrapper = styled.div`
  display: flex;
  gap: .5rem;
  align-items: center;
`
const Handle = styled.p`
  color: #00a8ff;
`

const Contact = () => {
  const { contact } = useLoaderData() as LoaderData;
  return (
    <ContactsWrapper>
      <Avatar src='/avatar.jpg' />
      <ContactsInfo>
        <ContactNameWrapper>
          <h1>{contact.name}</h1>
          <FaStar style={{ color: '#fbc531' }} />
        </ContactNameWrapper>
        <Handle>your_handle</Handle>
        <p>Some notes</p>
        <OpsGroup>
          <QButton>Follow</QButton>
          <QButton>Message</QButton>
        </OpsGroup>
      </ContactsInfo>
    </ContactsWrapper>
  );
}

export default Contact;