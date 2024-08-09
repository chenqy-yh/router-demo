import React from 'react';
import styled from 'styled-components'

type QFormProps = Partial<{
    children: React.ReactNode;
    Item: React.FC<QFormItemProps>;
}>;

type QFormItemProps = Partial<{
    children: React.ReactNode;
    label: string;
    labelAlign: 'left' | 'right';
    labelCol: { span: number, offset: number };
}>;

type QFormItemLabelProps = Partial<{
    width: string;
    children: React.ReactNode;
}>;

type QFormItemContentProps = Partial<{
    children: React.ReactNode;
}>;

type QFormWrapperType = React.FC<QFormProps> & {
    Item: React.FC<QFormItemProps>;
}

const _QForm = styled.form`
    width: 100%;
`;

const _QFormItem = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    width: max-content;
    width: 100%;
`;

const _QFormItemLabel = styled.label``;

const _QFormItemContent = styled.div`
    width: 100%;
`;

const QFormWrapper: QFormWrapperType = (props) => {
    const { children } = props;
    return (
        <_QForm>{children}</_QForm>
    )
}

const QFormItemLabelWrapper: React.FC<QFormItemLabelProps> = (props) => {
    const { children, } = props;
    return (
        <_QFormItemLabel>{children}</_QFormItemLabel>
    )
}


const QFormItemContentWrapper: React.FC<QFormItemContentProps> = (props) => {
    const { children } = props;
    return (
        <_QFormItemContent>{children}</_QFormItemContent>
    )
}

const QFormItemWrapper: React.FC<QFormItemProps> = (props) => {
    const { children, label, labelCol } = props;
    return (
        <_QFormItem>
            {label ? <QFormItemLabelWrapper>{`${label}:`}</QFormItemLabelWrapper> : null}
            <QFormItemContentWrapper>{children}</QFormItemContentWrapper>
        </_QFormItem>
    )
}




QFormWrapper.Item = QFormItemWrapper;

export const QForm = QFormWrapper;