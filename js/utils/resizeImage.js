/**
 * Created by @iamserj on 27.06.2017.
 */

export const resizeImage = (containerFrame, naturalImage) => {
  const ratio = naturalImage.width / naturalImage.height;
  let actualWidth;
  let actualHeight;

  if ((containerFrame.width / ratio) < containerFrame.height) {
    actualWidth = containerFrame.width;
    actualHeight = containerFrame.width / ratio;
  } else {
    actualWidth = containerFrame.height * ratio;
    actualHeight = containerFrame.height;
  }
  return {
    width: actualWidth,
    height: actualHeight
  };
};

const imageOnload = (imageElement) => {
  const loadInterval = setInterval(() => {
    if (imageElement.naturalWidth) {
      clearInterval(loadInterval);
      const container = {width: imageElement.width, height: imageElement.height};
      const naturalFrame = {width: imageElement.naturalWidth, height: imageElement.naturalHeight};
      const actualSize = resizeImage(container, naturalFrame);
      imageElement.style.width = actualSize.width + `px`;
      imageElement.style.height = actualSize.height + `px`;
      imageElement.style.marginTop = (container.height - imageElement.height) / 2 + `px`;
      imageElement.style.visibility = `visible`;
    }
  }, 10);
};

export default imageOnload;
