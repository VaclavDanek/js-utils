export declare const matches: (value: any, regex: string) => boolean;
export declare const isNumber: (value: any) => boolean;
export declare const hasMinNumber: (value: number, minNumber: number) => boolean;
export declare const hasMaxNumber: (value: number, maxNumber: number) => boolean;
export declare const isAlphabetic: (value: string) => boolean;
export declare const isAlphanumeric: (value: string | number) => boolean;
export declare const hasMinLength: (value: string | number, minLength: number) => boolean;
export declare const hasMaxLength: (value: string | number, maxLength: number) => boolean;
export declare const isEmail: (value: string) => boolean;
export declare const isPhone: (value: string, withPrefix?: boolean) => boolean;
export declare const isPSC: (value: string) => boolean;
export declare const isRC: (value: string) => boolean;
export declare const isICO: (value: string) => boolean;
export declare const isDIC: (value: string) => boolean;
declare const _default: {
    matches: (value: any, regex: string) => boolean;
    isNumber: (value: any) => boolean;
    hasMinNumber: (value: number, minNumber: number) => boolean;
    hasMaxNumber: (value: number, maxNumber: number) => boolean;
    isAlphabetic: (value: string) => boolean;
    isAlphanumeric: (value: string | number) => boolean;
    hasMinLength: (value: string | number, minLength: number) => boolean;
    hasMaxLength: (value: string | number, maxLength: number) => boolean;
    isEmail: (value: string) => boolean;
    isPhone: (value: string, withPrefix?: boolean) => boolean;
    isPSC: (value: string) => boolean;
    isICO: (value: string) => boolean;
    isDIC: (value: string) => boolean;
    isRC: (value: string) => boolean;
};
export default _default;
