/**
 * Created by @iamserj on 27.06.2017.
 */

const resizeImage = (containerFrame, naturalImage) => {

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

export default resizeImage;
