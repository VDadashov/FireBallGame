const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
  const image = container.querySelector('img');
  const opacityRange = container.querySelector('.opacity-range');
  const radiusRange = container.querySelector('.radius-range');
  
  const savedOpacity = localStorage.getItem(`opacity-${image.alt}`);
  if (savedOpacity) {
    image.style.opacity = savedOpacity;
    opacityRange.value = savedOpacity;
  }
  
  const savedRadius = localStorage.getItem(`radius-${image.alt}`);
  if (savedRadius) {
    image.style.borderRadius = `${savedRadius}px`;
    radiusRange.value = savedRadius;
  }

  opacityRange.addEventListener('input', () => {
    const opacity = opacityRange.value;
    image.style.opacity = opacity;
    localStorage.setItem(`opacity-${image.alt}`, opacity);
  });

  radiusRange.addEventListener('input', () => {
    const radius = radiusRange.value;
    image.style.borderRadius = `${radius}px`;
    localStorage.setItem(`radius-${image.alt}`, radius);
  });
});


