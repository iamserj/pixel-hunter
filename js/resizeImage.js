/**
 * Created by soniko on 27.06.2017.
 */

const resizeImage = (frame, given) => {

  const ratio = given.width / given.height;

  let actualWidth;
  let actualHeight;

  if ((frame.width / ratio) < frame.height) {
    actualWidth = frame.width;
    actualHeight = frame.width / ratio;
  } else {
    actualWidth = frame.height * ratio;
    actualHeight = frame.height;
  }

  return {
    width: actualWidth,
    height: actualHeight
  };

};

export default resizeImage;
