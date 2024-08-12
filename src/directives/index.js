export const highlightDirective = {
  mounted(el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach(block => {
      hljs.highlightElement(block);

      block.style.paddingTop = '2rem';

      // Create the copy button
      const copyButton = document.createElement('button');
      copyButton.innerHTML = '<div>Copy</div>'; // FontAwesome copy icon
      copyButton.className = '';
      copyButton.style.position = 'absolute';
      copyButton.style.color = 'white';
      copyButton.style.top = '2rem';
      copyButton.style.right = '1rem';
      copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(block.innerText).then(() => {
          // Optionally show a success message or visual feedback
          copyButton.innerHTML = '<div>Copied!</div>';
          setTimeout(() => copyButton.innerHTML = '<div>Copy</div>', 2000);
        });
      });

      // Add the button to the code block
      block.parentElement.insertBefore(copyButton, block);
    });
  },
  updated(el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach(block => {
      hljs.highlightElement(block);
    });
  }
};