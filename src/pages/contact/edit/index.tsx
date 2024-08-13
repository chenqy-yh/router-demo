import styled from 'styled-components'
import { Form, Input, Button } from 'antd'
import { useLoaderData } from 'react-router-dom';

const RowWrapper = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

const EditContact: React.FC = () => {
    const { contact } = useLoaderData() as { contact: ContactItem };
    return (
        <Form labelCol={{ span: 8 }} labelAlign='left'>
            <Form.Item label='Name' >
                <RowWrapper>
                    <Input placeholder='First' defaultValue={contact.first || ''} />
                    <Input placeholder='Last' defa/>
                </RowWrapper>
            </Form.Item>
            <Form.Item label='Twitter'>
                <Input placeholder='@jack' />
            </Form.Item>
            <Form.Item label='Avatar URL'>
                <Input placeholder='https://example.com/avatar.jpg' />
            </Form.Item>
            <Form.Item label='Notes'>
                <Input.TextArea />
            </Form.Item>
            <Form.Item label=' ' colon={false}>
                <RowWrapper>
                    <Button type='primary'>Save</Button>
                    <Button type='default'>Cancel</Button>
                </RowWrapper>
            </Form.Item>
        </Form>
    );
}

export default EditContact;