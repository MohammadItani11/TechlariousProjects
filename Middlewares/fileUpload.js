const multer = require('multer');

module.exports.upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      let destination;

      if (file.mimetype.startsWith('image/')) {
        destination = 'public/images';
      } else if (file.mimetype.startsWith('audio/')) {
        destination = 'public/music';
      } else {
        return cb(new Error('Invalid file type'));
      }

      cb(null, destination);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  }),
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith('audio/') || file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  },
});