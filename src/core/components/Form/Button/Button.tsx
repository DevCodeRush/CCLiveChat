import React, { forwardRef, useMemo } from 'react'
import { TouchableOpacity, ActivityIndicator } from 'react-native';

import { BaseFormProps } from '../types.ts';
import { ButtonContainer, ButtonText } from './styles.ts';
import {
  getButtonBackgroundColor, getButtonBorderColor,
  getButtonHeight,
  getButtonPadding, getTextColor
} from '@src/core/components/Form/Button/utility.ts'

export interface ButtonProps extends Omit<BaseFormProps, 'value' | 'onChangeText'> {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

const defaultButtonProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
  fullWidth: false,
};

const ButtonComponent = (props: ButtonProps, ref: any) => {
  props = { ...defaultButtonProps, ...props };
  const {
    title,
    onPress,
    variant,
    size,
    disabled,
    loading,
    fullWidth,
  } = props;


  const padding = useMemo(() => {
    return getButtonPadding(size)
  }, [size])

  const height = useMemo(() => {
    return getButtonHeight(size)
  }, [size])

  const width = useMemo(() => {
    return fullWidth ? '100%' : 'auto'
  }, [fullWidth])

  const backgroundColor = useMemo(() => {
    return getButtonBackgroundColor(variant, disabled)
  }, [variant, disabled])

  const borderColor = useMemo(() => {
    return getButtonBorderColor(variant, disabled)
  }, [variant, disabled])

  const textColor = useMemo(() => {
    return getTextColor(variant, disabled)
  }, [variant, disabled])

  return (
    <TouchableOpacity
      ref={ref}
      style={{ width }}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      <ButtonContainer
        $padding={padding}
        $height={height}
        $backgroundColor={backgroundColor}
        $borderColor={borderColor}
        $fullWidth={fullWidth}
      >
        {loading ? (
          <ActivityIndicator
            size="small"
            color={variant === 'outline' ? '#1F78AD' : '#FFFFFF'}
          />
        ) : (
          <ButtonText $color={textColor} $disabled={disabled}>
            {title}
          </ButtonText>
        )}
      </ButtonContainer>
    </TouchableOpacity>
  );
};

export const Button = forwardRef(ButtonComponent);
