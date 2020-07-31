var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/video" ,{ useNewUrlParser: true,useUnifiedTopology: true });
mongoose.connection.once("open",function () {
    console.log("MongoDB数据库已经成功连接");
});
