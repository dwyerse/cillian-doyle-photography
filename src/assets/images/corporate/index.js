const images = import.meta.glob("./*.webp", { eager: true });

const keys = Object.keys(images);

const smallKeys = keys.filter((key) => key.includes("_500px.webp"));
const mediumKeys = keys.filter((key) => key.includes("_1000px.webp"));
const largeKeys = keys.filter((key) => key.includes("_1500px.webp"));

const Images = smallKeys.map((_, index) => {
  return {
    small: images[smallKeys[index]].default,
    medium: images[mediumKeys[index]].default,
    large: images[largeKeys[index]].default,
  };
});

export default Images;
