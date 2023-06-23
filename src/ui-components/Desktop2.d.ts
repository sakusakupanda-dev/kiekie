/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Desktop2OverridesProps = {
    Desktop2?: PrimitiveOverrideProps<ViewProps>;
    "\u696D\u52D9\u540D\u306E\u5165\u529B"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
    "\u5165\u529B"?: PrimitiveOverrideProps<TextProps>;
    "\u696D\u52D9\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Desktop2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Desktop2OverridesProps | undefined | null;
}>;
export default function Desktop2(props: Desktop2Props): React.ReactElement;
