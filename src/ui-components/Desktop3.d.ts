/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Desktop3OverridesProps = {
    Desktop3?: PrimitiveOverrideProps<ViewProps>;
    "\u2461\u696D\u52D9\u30EA\u30B9\u30C8\u306E\u4F5C\u6210"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<IconProps>;
    "\u90E8\u7F72\u540D"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Desktop3Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Desktop3OverridesProps | undefined | null;
}>;
export default function Desktop3(props: Desktop3Props): React.ReactElement;
