import React, { forwardRef, useState, useMemo } from 'react';

import { BoxStyles, ErrorContainer, ErrorText } from '../styles.ts';
import { BaseFormProps } from '../types.ts';

import {
    PasswordBoxContainer,
    PasswordBoxInputContainer,
    PasswordBoxIconTouchableOpacity,
    PasswordBoxInputLabelText,
    PasswordBoxInputText,
} from './styles.ts';
import { Text } from 'react-native'

export interface PasswordBoxInputProps extends BaseFormProps {
    name: string;
    placeholder: string;
    placeholderTextColor?: string;
    value: string;
    errorWithoutText?: boolean;
    onChangeText: (text: string) => void;
}

const defaultPasswordProps = {
    placeholderTextColor: '#8F959A',
};

const PasswordBoxComponent = (props: PasswordBoxInputProps, ref: any) => {
    props = { ...defaultPasswordProps, ...props };
    const { value, label, labelColor, state, displayError, error } = props;
    const [isFocused, setIsFocused] = useState(false);
    const boxStyle = useMemo(() => {
        if (isFocused) {
            return BoxStyles.FOCUSED;
        }
        return BoxStyles[state ?? 'NORMAL'];
    }, [state, isFocused]);
    const [showPassword, setShowPassword] = useState(false);
    const showLabel = useMemo(() => {
        return isFocused || value;
    }, [isFocused, value]);

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    return (
        <PasswordBoxContainer>
            <PasswordBoxInputContainer
                $state={boxStyle}
                $fullWidth={props.fullWidth}>
                {!!label && showLabel && (
                    <PasswordBoxInputLabelText
                        {...(labelColor && {
                            style: { color: labelColor },
                        })}>
                        {label}
                    </PasswordBoxInputLabelText>
                )}
                <PasswordBoxIconTouchableOpacity
                    onPress={handlePasswordToggle}>
                    {showPassword ? (
                        <Text>Hide</Text>
                    ) : (
                        <Text>Show</Text>
                    )}
                </PasswordBoxIconTouchableOpacity>
                <PasswordBoxInputText
                    ref={ref}
                    value={value}
                    onChangeText={props.onChangeText}
                    secureTextEntry={!showPassword}
                    placeholder={props.placeholder}
                    placeholderTextColor={props.placeholderTextColor}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {
                        setIsFocused(false);
                    }}
                />
            </PasswordBoxInputContainer>
            {!!error && displayError && (
                <ErrorContainer>
                    <ErrorText>
                        {JSON.stringify(error)}
                    </ErrorText>
                </ErrorContainer>
            )}
        </PasswordBoxContainer>
    );
};

export const PasswordBoxInput = forwardRef(PasswordBoxComponent);
