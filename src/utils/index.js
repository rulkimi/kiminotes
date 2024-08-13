export const getSubLinks = () => {
  const sublinks = [];
  const sublinkElements = document.querySelectorAll('.sublink');
  sublinkElements.forEach(sublinkElement => {
    sublinkElement.addEventListener('click', () => {
      sublinkElement.scrollIntoView({ behavior: 'smooth' });
    })
    sublinks.push({
      element: sublinkElement,
      title : sublinkElement.innerText,
      position : sublinkElement.getBoundingClientRect().top + window.scrollY
    });
  });

  return sublinks;
}