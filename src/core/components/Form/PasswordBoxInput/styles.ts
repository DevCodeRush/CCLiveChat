import styled from '@emotion/native';
import theme from '@src/core/library/theme.ts';

const PasswordBoxContainer = styled.View`
    flex-direction: row;
    align-items: stretch;
`;
const PasswordBoxInputContainer = styled.View`
    flex-direction: column;
    justify-content: center;
    height: 56px;
    border-width: 1px;
    border-radius: 4px;
    padding: 8px 0;
    margin: 4px 0;
    ${({ $fullWidth }: { $fullWidth?: boolean }) => ({
        width: $fullWidth ? '100%' : '326px',
    })}
`;

const PasswordBoxIconTouchableOpacity = styled.TouchableOpacity`
    position: absolute;
    top: 15px;
    right: 0;
    height: 100%;
    width: 40px;
    z-index: 1;
`;

const PasswordBoxInputLabelText = styled.Text`
    ${() => {
        return {
        };
    }}
    text-transform: capitalize;
    left: 16px;
    z-index: 1;
`;

const PasswordBoxInputText = styled.TextInput`
    ${() => {
        return {
        };
    }}
    width: 100%;
    padding: 0 0 0 16px;
    height: 24px;
    line-height: 20px;
    color: ${theme.colors.primary.charcoal._100};
`;

export {
    PasswordBoxContainer,
    PasswordBoxInputContainer,
    PasswordBoxIconTouchableOpacity,
    PasswordBoxInputLabelText,
    PasswordBoxInputText,
};
