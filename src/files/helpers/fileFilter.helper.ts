import { FileFilterCallback } from 'multer';

export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: FileFilterCallback,
) => {
  if (!file) return cb(new Error('File is empty'));

  const fileExptension = file.mimetype.split('/')[1];
  const validExtenions = ['jpg', 'jpeg', 'png', 'gif'];

  if (validExtenions.includes(fileExptension)) {
    return cb(null, true);
  } /*else {
    return cb(new Error(`File isn't a valid Extension`));
  }*/

  cb(null, false);
};
