import styled from '@emotion/native';
import theme from '@src/core/library/theme.ts';

const TextBoxContainer = styled.View``;

const TextBoxInputContainer = styled.View`
    flex-direction: column;
    justify-content: center;
    height: 56px;
    border-width: 1px;
    border-radius: 4px;
    padding: 8px 0;
    margin: 4px 0;
    ${({ $fullWidth }: { $fullWidth: boolean }) => ({
        width: $fullWidth ? '100%' : '326px',
    })}
`;

const TextBoxInputLabelText = styled.Text`
    ${() => {
        return {
        };
    }}
    width: 100%;
    padding: 0 0 0 16px;
    line-height: 20px;
    color: ${theme.colors.primary.charcoal._100};
`;

const MandatoryInputView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    flex: 1;
`;

const TextBoxInputText = styled.TextInput`
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
const TextBoxInputUnitText = styled.Text`
    position: absolute;
    top: 15px;
    right: 0;
    height: 100%;
    width: 40px;
    z-index: 1;
    ${() => {
        return {
        };
    }}
`;

export {
    TextBoxContainer,
    TextBoxInputContainer,
    TextBoxInputLabelText,
    TextBoxInputUnitText,
    TextBoxInputText,
    MandatoryInputView,
};
