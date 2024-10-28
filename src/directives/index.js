export const highlightDirective = {
  mounted(el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach(block => {
      hljs.highlightElement(block);
    });
  },
  updated(el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach(block => {
      hljs.highlightElement(block);
    });
  }
};
