import theme from '@src/core/library/theme.ts'

export const getButtonHeight = ($size?: 'small' | 'medium' | 'large') => {
    switch ($size) {
        case 'small':
            return 32;
        case 'large':
            return 56;
        case 'medium':
        default:
            return 44;
    }
};

export const getButtonPadding = ($size?: 'small' | 'medium' | 'large') => {
    switch ($size) {
        case 'small':
            return '0 12px';
        case 'large':
            return '0 24px';
        case 'medium':
        default:
            return '0 16px';
    }
};

export const getButtonBackgroundColor = ($variant?: 'primary' | 'secondary' | 'outline', $disabled?: boolean) => {
    if ($disabled) {
        return theme.colors.monotone._40;
    }

    switch ($variant) {
        case 'secondary':
            return theme.colors.primary.blue._100;
        case 'outline':
            return 'transparent';
        case 'primary':
        default:
            return theme.colors.interactiveState.actionable;
    }
};

export const getButtonBorderColor = ($variant?: 'primary' | 'secondary' | 'outline', $disabled?: boolean) => {
    if ($disabled) {
        return theme.colors.monotone._40;
    }

    switch ($variant) {
        case 'outline':
            return theme.colors.primary.blue._100;
        default:
            return 'transparent';
    }
};

export const getTextColor = ($variant?: 'primary' | 'secondary' | 'outline', $disabled?: boolean) => {
    if ($disabled) {
        return theme.colors.monotone._0;
    }

    switch ($variant) {
        case 'outline':
            return theme.colors.primary.blue._100;
        default:
            return theme.colors.monotone._0;
    }
};
