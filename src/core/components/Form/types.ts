import { FieldError } from 'react-hook-form';


export interface BaseFormProps {
    name?: string;
    placeholder?: string;
    placeholderTextColor?: string;
    value?: string;
    editable?: boolean;
    state?: string;
    onChangeText?: (text: string) => void;
    label?: string;
    labelColor?: string;
    errorWithoutText?: boolean;
    fullWidth?: boolean;
    invalid: boolean;
    isTouched: boolean;
    isDirty: boolean;
    isValidating: boolean;
    displayError?: boolean;
    error?: FieldError;
}
