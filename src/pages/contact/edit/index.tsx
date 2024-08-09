import styled, { CSSProperties } from 'styled-components'
import { Form } from 'react-router-dom'

type EditFormItemProps = {
    label: string;
    labelWidth?: string;
    children: React.ReactNode;
}

const EditForm = styled(Form)``;

const EditFormItemLabel = styled.label<{ style: CSSProperties }>`
    display: ${props => props.style.display || 'block'};
    margin-bottom: ${props => props.style.marginBottom || '0.5rem'};
    font-weight: ${props => props.style.fontWeight || '600'};
    font-size: ${props => props.style.fontSize || '1rem'};
    width: ${props => props.style.width || '100%'};
`;



const EditFormItem: React.FC<EditFormItemProps> = (props) => {
    const { label, children, labelWidth } = props;
    return (
        <div>
            <EditFormItemLabel style={{
                width: labelWidth
            }}>{label}</EditFormItemLabel>
            {children}
        </div>
    );
};

const EditContact: React.FC = () => {
    return (
        <EditForm>
            <EditFormItem label='Name' labelWidth='100px'>123
            </EditFormItem>
        </EditForm>
    );
}

export default EditContact;