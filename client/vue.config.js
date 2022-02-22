const path =require('path');
module.exports={
  outputDir:path.resolve(__dirname,'../src/public'),
  devServer:{
    proxy:{
      '/api':{
        target:'http://127.0.0.1:3000'
      }
    }
  }
}
