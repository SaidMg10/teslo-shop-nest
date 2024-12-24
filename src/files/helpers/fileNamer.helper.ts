import { v4 as uuid } from 'uuid';
type FileNamerCallback = (error: Error | null, fileName?: string) => void;

export const fileNamer = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: FileNamerCallback,
) => {
  if (!file) return cb(new Error('File is empty'));

  const fileExtension = file.mimetype.split('/')[1];

  const fileName = `${uuid()}.${fileExtension}`;

  cb(null, fileName);
};
