import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export function splitHeading(element: HTMLElement) {
  element.classList.add("split-heading");

  const split = SplitText.create(element, {
    aria: "auto",
    mask: "words",
    type: "words",
    wordsClass: "split-heading__word",
  });

  return {
    words: split.words,
    revert: () => {
      split.revert();
      element.classList.remove("split-heading");
    },
  };
}
