import styled from 'styled-components';
import React, { ChangeEventHandler } from 'react';
import { useMergedState } from 'rc-util'
import { sc } from '@/utils/css'

type QInputProps = {
    className: string;
    placeholder: string;
    defaultValue: string;
    value: string;
    style: React.CSSProperties;
    type: string;
    onChange: (value: string) => void;
}

type OptionalQInputProps = Partial<QInputProps>;

const cls = sc('input');

const defaultProps = {
    className: cls('entity'),
    placeholder: '',
    style: {},
    type: 'text',
    value: '',
}

const QInputEntity: React.FC<OptionalQInputProps> = (props) => {

    const mergedProps = {
        ...defaultProps,
        ...props
    }

    const [mergedValue, setMergedValue] = useMergedState(defaultProps.value, {
        defaultValue: props.defaultValue,
        value: props.value,
        onChange: props.onChange
    });

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setMergedValue(e.target.value);
    }

    return (
        <input {...mergedProps} value={mergedValue} onChange={handleInputChange} />
    )
}


const QInputWrapper = styled(QInputEntity)`
    height: 2rem;
    padding-inline-start: .5rem;
    border: none;
    border-radius: .25rem;
    outline: 1px solid #ccc;
    color: black;
    width: 100%;
    &::placeholder {
        color:#888;
    }
`

export const QInput = QInputWrapper;