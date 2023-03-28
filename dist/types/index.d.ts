export type ObjectType = Partial<Record<string, any>>;
export type ValuesType = Partial<Record<string, string | number>>;
export interface ISort {
    param: string;
    desc?: boolean;
}
export interface IHTMLElement extends HTMLElement {
    mozRequestFullScreen?: () => Promise<void>;
    msRequestFullscreen?: () => Promise<void>;
    webkitRequestFullscreen?: () => Promise<void>;
}
export interface IDocument extends Document {
    webkitFullscreenElement: Element | null;
    mozFullScreenElement: Element | null;
    msFullscreenElement: Element | null;
    msExitFullscreen?: () => Promise<void>;
    mozCancelFullScreen?: () => Promise<void>;
    webkitExitFullscreen?: () => Promise<void>;
}
