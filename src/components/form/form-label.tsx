import React from 'react';
import styled from 'styled-components'

type QFormItemLabelProps = Partial<{
    width: string;
    children: React.ReactNode;
}>;


const _QFormItemLabel = styled.label``;

const QFormItemLabelWrapper: React.FC<QFormItemLabelProps> = (props) => {
    const { children, } = props;
    return (
        <_QFormItemLabel>{children}</_QFormItemLabel>
    )
}

export default QFormItemLabelWrapper;