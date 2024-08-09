import React from 'react';
import styled from 'styled-components'
import QFormItemContent from './form-content'
import QFormItemLabel from './form-label';

type QFormItemProps = Partial<{
    children: React.ReactNode;
    label: string;
    labelAlign: 'left' | 'right';
    labelCol: { span: number, offset: number };
}>;



const _QFormItem = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    width: max-content;
    width: 100%;
`;

const defaultProps = {
    labelCol: {
        span: 1,
        offset: 0
    }
};


const QFormItemWrapper: React.FC<QFormItemProps> = (props) => {
    const { children, label, labelCol } = { ...defaultProps, ...props };
    return (
        <_QFormItem>
            {label ? <QFormItemLabel>{`${label}:`}</QFormItemLabel> : null}
            <QFormItemContent>{children}</QFormItemContent>
        </_QFormItem>
    )
}

export default QFormItemWrapper;