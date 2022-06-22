const express = require("express");
const AccountModel = require("../model/AccountModel");

const router = express.Router()

router.post("/addAccount",(req,res)=>{
    // console.log(req.body);
    const {name,number} = req.body
    AccountModel.create({
        name,number
    }).then(data=>{
        // console.log(data);
        res.send({ok:1})
    })
})

router.get("/getHistory",(req,res)=>{
    AccountModel.find().then(data=>{
        // console.log(data);
        res.send(data)
    })
})

//这样搜索不了空内容。。。。
// router.get("/search/:id",(req,res)=>{
//         AccountModel.find({'name':req.params.id}).then(data=>{
//             console.log(data);
//             console.log(req.params.id);
//             res.send(data)
//         })
// })

router.post("/search",(req,res)=>{
    console.log(req.body);
    if (req.body.name !=='') {
        AccountModel.find({'name':req.body.name}).then(data=>{
            console.log(data);
            res.send(data)
        })
    } else {
        AccountModel.find().then(data=>{
            console.log(data);
            res.send(data)
        })
    }
})

router.post("/updata/:id",(req,res)=>{
    console.log(req.body,req.params);
    const {name,number} = req.body
    AccountModel.updateOne({_id:req.params.id},{
        name,number
    }).then(data=> {
        res.send({
            ok:1
        })
    })
})

router.get("/remove/:id",(req,res)=>{
    AccountModel.deleteOne({
        _id:req.params.id
    }).then(data=>{
        res.send({
            ok:1
        })
    })
})


router.get("/getFocus",(req,res)=>{
    AccountModel.find().then(data=>{
        let earning = 0;
        let expend = 0;
        let balance = 0;
        data.map(item => {
            if (item.number>0) {
                earning = earning + item.number;
            } else {
                expend = expend + item.number;
            }
        });
        expend = -expend;
        balance = earning - expend;
        let obj = {
            'earning' : earning,
            'expend' : expend,
            "balance" : balance,
        }
        res.send(obj)
    })
})


module.exports=  router