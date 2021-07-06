import type { Ace } from "ace-builds";
import { getCurrentInstance, onMounted, toRef, watch } from "vue";

import type { Props } from "./types/props";
export default function watchAnnotations(editor: { value: Ace.Editor }, props: Props) {
  onMounted(() => {
    watch(
      toRef(props, "annotations"),
      (newValue) => {
        console.log(123123123);
        editor.value.getSession().setAnnotations(newValue || []);
      },
      { immediate: true, deep: true }
    );
    editor.value.getSession().on("changeAnnotation", () => {
      console.log("inner");
      const annotations = editor.value.getSession().getAnnotations();
      getCurrentInstance()?.emit("validate", annotations);
    });
  });
}