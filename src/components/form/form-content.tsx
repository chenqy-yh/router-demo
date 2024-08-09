import React from 'react';
import styled from 'styled-components'

type QFormItemContentProps = Partial<{
    children: React.ReactNode;
}>;

const _QFormItemContent = styled.div`
    width: 100%;
`;


const QFormItemContentWrapper: React.FC<QFormItemContentProps> = (props) => {
    const { children } = props;
    return (
        <_QFormItemContent>{children}</_QFormItemContent>
    )
}


export default QFormItemContentWrapper;