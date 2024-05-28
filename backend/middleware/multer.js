import multer from "multer";
import fs from "fs";

// Create the uploads directory if it doesn't exist
const uploadDirectory = './uploads';
if (!fs.existsSync(uploadDirectory)){
    fs.mkdirSync(uploadDirectory);
}

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    console.log(file.originalname)
    cb(null, `${new Date(Date.now()).getMilliseconds()}-${file.originalname}`)
  },
  destination: function (req, file, cb) {
    cb(null, uploadDirectory); // Use the defined uploadDirectory
  },
});

const upload = multer({ storage });

export default upload;
