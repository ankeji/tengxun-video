//来定义user的模型
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//创建约束对象
var stuSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
});

//创建模型
var Video = mongoose.model("video",stuSchema);

//将Student暴露出去
module.exports = Video;
