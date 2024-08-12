export const highlightDirective = {
  mounted(el, binding) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach(block => {
      hljs.highlightElement(block);

      console.log(binding)

      // Display the language at the top left if an argument is provided
      if (binding.arg) {
        const languageLabel = document.createElement('div');
        languageLabel.innerText = binding.arg.toUpperCase();
        languageLabel.style.position = 'absolute';
        languageLabel.style.top = '0.5rem';
        languageLabel.style.left = '0.5rem';
        languageLabel.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        languageLabel.style.color = 'white';
        languageLabel.style.padding = '0.2rem 0.5rem';
        languageLabel.style.borderRadius = '0.2rem';
        languageLabel.style.fontSize = '0.8rem';
        block.parentElement.style.position = 'relative';
        block.parentElement.appendChild(languageLabel);
      }

      block.style.paddingTop = '2.5rem';

      // Create the copy button
      const copyButton = document.createElement('button');
      copyButton.innerHTML = '<div>Copy</div>'; // FontAwesome copy icon
      copyButton.className = '';
      copyButton.style.position = 'absolute';
      copyButton.style.color = 'white';
      copyButton.style.top = '0.5rem';
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
  updated(el, binding) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach(block => {
      hljs.highlightElement(block);
    });
  }
};
