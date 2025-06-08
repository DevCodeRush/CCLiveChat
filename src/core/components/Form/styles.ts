import styled from '@emotion/native';
import theme from '@src/core/library/theme.ts';

export const ErrorContainer = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 6px;
`;

export const ErrorText = styled.Text`
    color: ${theme.colors.interactiveState.error};
    margin-left: 4px;
    ${() => {
        return {
            // ...theme.fonts.th.mobile.body.paragraph,
        };
    }}
`;

export const BoxStyles: any = {
    NORMAL: {
        backgroundColor: 'white',
        borderColor: theme.colors.interactiveState.normalOutline,
        color: theme.colors.primary.charcoal._100,
        labelColor: theme.colors.primary.charcoal._80,
        borderBottomWidth: 1,
    },
    FOCUSED: {
        backgroundColor:
            'linear-gradient(0deg, rgba(31, 120, 173, 0.05), rgba(31, 120, 173, 0.05)), #FFFFFF',
        borderColor: theme.colors.primary.blue._100,
        color: theme.colors.primary.charcoal._100,
        labelColor: theme.colors.primary.charcoal._80,
        borderBottomWidth: 1,
    },
    ERROR: {
        borderColor: theme.colors.interactiveState.error,
        backgroundColor: 'white',
        color: theme.colors.primary.charcoal._100,
        labelColor: theme.colors.primary.charcoal._80,
        borderBottomWidth: 2,
    },
    DISABLED: {
        borderColor: theme.colors.interactiveState.disabledOutline,
        backgroundColor: theme.colors.monotone._20,
        color: theme.colors.interactiveState.disabled,
        labelColor: theme.colors.interactiveState.disabled,
        borderBottomWidth: 1,
    },
};
