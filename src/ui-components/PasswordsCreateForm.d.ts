/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PasswordsCreateFormInputValues = {
    username?: string;
    password?: string;
    website?: string;
    userId?: string;
};
export declare type PasswordsCreateFormValidationValues = {
    username?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PasswordsCreateFormOverridesProps = {
    PasswordsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PasswordsCreateFormProps = React.PropsWithChildren<{
    overrides?: PasswordsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PasswordsCreateFormInputValues) => PasswordsCreateFormInputValues;
    onSuccess?: (fields: PasswordsCreateFormInputValues) => void;
    onError?: (fields: PasswordsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PasswordsCreateFormInputValues) => PasswordsCreateFormInputValues;
    onValidate?: PasswordsCreateFormValidationValues;
} & React.CSSProperties>;
export default function PasswordsCreateForm(props: PasswordsCreateFormProps): React.ReactElement;
