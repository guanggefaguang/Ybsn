/**
 * Created by Administrator on 2017/7/24.
 */
var express=require('express');
var mysql=require('mysql');
var router=express.Router();

//链接数据库 start
var pool=mysql.createPool({
    host:'localhost',
    user:'root',//用户名
    password:'',//密码
    database:'mydata',//数据库
    port:3306
})
//链接数据库 end

router.get('/',function (req,res) {
    res.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * from nav',function (err,rows,fields) {
        if(err) throw err;
        res.send(rows)
    });
});


module.exports=router;