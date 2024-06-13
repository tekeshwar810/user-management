const express = require('express')
const router = express.Router()

router.get('/user-list',(req,res)=>{
    res.send('user list')
})

module.exports = router;