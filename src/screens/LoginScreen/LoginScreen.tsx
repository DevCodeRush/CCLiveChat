import { View } from 'react-native'
import { TextBoxInput, PasswordBoxInput, Button } from '@src/core/components/Form'
import React from 'react'

import { Controller, useForm } from 'react-hook-form';

import styles from './LoginScreen.style.tsx'
import theme from '@src/core/library/theme.ts'
import { loginOkta } from '@src/services/okta.service.ts'
import { LoginForm } from '@src/screens/LoginScreen/types.ts'

const initialForm: LoginForm = {
    username: '',
    password: '',
};

export const LoginScreen = () => {
    const {
        control,
        handleSubmit,
        formState: { isValid, isSubmitting },
        reset,
        setValue,
        getValues,
        watch,
    } = useForm({
        defaultValues: initialForm,
        mode: 'onChange',
    });

    const submitForm = async (data: LoginForm) => {
        try {
            const payload = {
                ...data,
                context: {
                    deviceToken: 'test token'
                }
            }
            const loginResult = await loginOkta(payload);
            console.log({ loginResult })
        } catch (e) {
            console.error(e);
        }

    }

    return (
        <View style={styles.inputForm}>
            <View style={styles.inputWrapper}>
                <Controller
                    control={control}
                    name="username"
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                        <TextBoxInput
                            {...field}
                            {...fieldState}
                            fullWidth
                            label="Username"
                            placeholder="Username"
                            labelColor={theme.colors.interactiveState.enabled}
                            units={''}
                            editable
                            onChangeText={field.onChange}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                        <PasswordBoxInput
                            {...field}
                            {...fieldState}
                            fullWidth
                            label="Password"
                            placeholder="Password"
                            labelColor={theme.colors.interactiveState.enabled}
                            editable
                            onChangeText={field.onChange}
                        />
                    )}
                />
            </View>
            <Button
                title="Login"
                variant="primary"
                onPress={handleSubmit(submitForm)}
                size={'large'}
                fullWidth={true}
                disabled={!isValid || isSubmitting}
                loading={isSubmitting}
                invalid={false}
                isTouched={false}
                isDirty={false}
                isValidating={false}
            />
        </View>
    )
}
