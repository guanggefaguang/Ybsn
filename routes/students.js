/**
 * Created by Administrator on 2017/7/27.
 */
var express=require('express');
var mysql=require('mysql');
var router=express.Router();

var pool=mysql.createPool({
    host:'localhost',
    user:'root',//用户名
    password:'',//密码
    database:'mydata',//数据库
    port:3306
})

router.get('/',function (req,res) {
    res.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * from students',function (err,rows,fields) {
        if(err) throw err;
        res.send(rows)
    });
});
module.exports=router;