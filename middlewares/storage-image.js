const path = require("path");
const multer = require("multer");


const storage = multer.diskStorage({
    destination: path.join(__dirname, "../public/images"),
    
    filename:(req, file, cb)=>{
      let imageName = Date.now() + "-" + path.extname(file.originalname);
      cb(null, imageName)
    }
});
  
  const imagen = multer({
    storage,
     dest: path.join(__dirname, "../public/images"),
     fileFilter:(req,file,cb)=>{
      const filetypes = /image|png|jpg|svg|webp/;
      const mimetype = filetypes.test(file.mimetype);
      const extname = filetypes.test(path.extname(file.originalname))
      if(mimetype && extname){
        return cb(null, true)
      }
      cb("Debe ser una imagen valida")
     }
}).single("image");


module.exports = { imagen }