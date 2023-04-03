const express = require('express')
const router = express.Router()

router.post('/foodData',(req,res)=>{
    try {
        // console.log(global.menu);
        res.send([global.menu, global.category]);
    } catch (error) {
        console.error(error.message);
        res.send("Server Error");
    }
})

module.exports = router;