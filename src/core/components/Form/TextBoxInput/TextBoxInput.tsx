import React, { forwardRef, useMemo, useState } from 'react';
import { KeyboardTypeOptions } from 'react-native';

import { BoxStyles, ErrorContainer, ErrorText } from '../styles.ts';
import { BaseFormProps } from '../types.ts';

import {
    TextBoxContainer,
    TextBoxInputContainer,
    TextBoxInputLabelText,
    TextBoxInputUnitText,
    TextBoxInputText,
} from './styles.ts';

export interface TextBoxInputProps extends BaseFormProps {
    label: string;
    placeholder: string;
    placeholderOnFocus?: string;
    units?: string;
    editable?: boolean;
    errorWithoutText?: boolean;
    defaultValue?: string;
    assistiveText?: string;
    placeholderTextColor?: string;
    labelColor?: string;
    fullWidth?: boolean;
    keyboardType?: KeyboardTypeOptions;
    contextMenuHidden?: boolean;
    maxLength?: number;
    secureTextEntry?: boolean;
    value: string;
    onChangeText: (text: string) => void;
}

const defaultTextProps = {
};

const TextBoxInputComponent = (props: TextBoxInputProps, ref: any) => {
    props = { ...defaultTextProps, ...props };
    const {
        value,
        state,
        fullWidth,
        label,
        placeholder,
        placeholderTextColor,
        labelColor,
        error,
        displayError,
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const boxStyle = useMemo(() => {
        if (isFocused) {
            return BoxStyles.FOCUSED;
        }
        return BoxStyles[state ?? 'NORMAL'];
    }, [state, isFocused]);
    const showLabel = useMemo(() => {
        return isFocused || value;
    }, [isFocused, value]);

    return (
        <TextBoxContainer>
            <TextBoxInputContainer
                $state={boxStyle}
                $fullWidth={fullWidth}>
                {!!label && showLabel && (
                    <TextBoxInputLabelText
                        {...(labelColor && {
                            style: { color: labelColor },
                        })}>
                        {label}
                    </TextBoxInputLabelText>
                )}
                <TextBoxInputUnitText>
                    {props.units}
                </TextBoxInputUnitText>
                <TextBoxInputText
                    ref={ref}
                    value={value}
                    onChangeText={props.onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    editable={props.editable}
                    keyboardType={props.keyboardType}
                    contextMenuHidden={props.contextMenuHidden}
                    maxLength={props.maxLength}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {
                        setIsFocused(false);
                    }}
                />
            </TextBoxInputContainer>
            {!!error && displayError && (
                <ErrorContainer>
                    <ErrorText>
                        {JSON.stringify(error)}
                    </ErrorText>
                </ErrorContainer>
            )}
        </TextBoxContainer>
    );
};

export const TextBoxInput = forwardRef(TextBoxInputComponent);
