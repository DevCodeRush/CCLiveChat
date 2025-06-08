import styled from '@emotion/native';

interface ButtonContainerProps {
  $padding?: string;
  $height?: number;
  $outline?: boolean;
  $backgroundColor?: string;
  $borderColor?: string;
  $fullWidth?: boolean;
}

interface ButtonTextProps {
  $color?: string;
  $disabled?: boolean;
}

export const ButtonContainer = styled.View<ButtonContainerProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${({ $height }) => {
    return `${$height}px`
  }};
  padding: ${({ $padding }) => $padding};
  background-color: ${({ $outline, $backgroundColor }) => $outline ? 'transparent' : $backgroundColor};
  border-radius: 4px;
  border-width: ${({ $outline }) => ($outline ? 1 : 0)}px;
  border-color: ${({ $borderColor }) => $borderColor};
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${({ $color }) => $color};
  font-weight: 500;
  text-align: center;
`;
