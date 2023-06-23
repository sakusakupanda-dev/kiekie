/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewForm101InputValues = {
    address?: string;
    image_url?: string;
    price?: number;
};
export declare type NewForm101ValidationValues = {
    address?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewForm101OverridesProps = {
    NewForm101Grid?: PrimitiveOverrideProps<GridProps>;
    address?: PrimitiveOverrideProps<TextAreaFieldProps>;
    image_url?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewForm101Props = React.PropsWithChildren<{
    overrides?: NewForm101OverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewForm101InputValues) => NewForm101InputValues;
    onSuccess?: (fields: NewForm101InputValues) => void;
    onError?: (fields: NewForm101InputValues, errorMessage: string) => void;
    onChange?: (fields: NewForm101InputValues) => NewForm101InputValues;
    onValidate?: NewForm101ValidationValues;
} & React.CSSProperties>;
export default function NewForm101(props: NewForm101Props): React.ReactElement;
