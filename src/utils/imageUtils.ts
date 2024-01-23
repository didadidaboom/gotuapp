const imageContext = require.context('../assets/bg', false, /\.(png|jpe?g|gif|svg)$/);

export function getRandomImagePath() {
  const imagePaths = imageContext.keys();
  const randomIndex = Math.floor(Math.random() * imagePaths.length);
  return imagePaths[randomIndex].split('./')[1];
}
