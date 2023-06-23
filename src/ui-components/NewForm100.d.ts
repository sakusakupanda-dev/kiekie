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
export declare type NewForm100InputValues = {
    address?: string;
    image_url?: string;
    price?: number;
};
export declare type NewForm100ValidationValues = {
    address?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewForm100OverridesProps = {
    NewForm100Grid?: PrimitiveOverrideProps<GridProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    image_url?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewForm100Props = React.PropsWithChildren<{
    overrides?: NewForm100OverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewForm100InputValues) => NewForm100InputValues;
    onSuccess?: (fields: NewForm100InputValues) => void;
    onError?: (fields: NewForm100InputValues, errorMessage: string) => void;
    onChange?: (fields: NewForm100InputValues) => NewForm100InputValues;
    onValidate?: NewForm100ValidationValues;
} & React.CSSProperties>;
export default function NewForm100(props: NewForm100Props): React.ReactElement;
