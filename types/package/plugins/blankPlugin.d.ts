import ace from "ace-builds";
import { Ref } from "vue";
interface params {
    editor: {
        value: ace.Ace.Editor;
    };
    editorValue: Ref<string>;
    plugins: Ref<Array<string>>;
    isReadOnly: Ref<boolean>;
    showLock: () => void;
}
export declare function useBlankPlugin({ editor, editorValue, plugins, isReadOnly, showLock, }: params): BlankPlugin;
export interface BlankPlugin {
    blanks: Ref<Array<any>>;
    blankGaps: Ref<Array<any>>;
    blankAnchors: Ref<Array<any>>;
    parseBlank: () => void;
    affectBlank: () => void;
    protectBlankBoundary: (evt: KeyboardEvent) => void;
    spliceBlanks: () => string;
    protectExternal: () => void;
}
export {};