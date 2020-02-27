const express = require('express');
const db = require('../models/index')

const router = express.Router();

router.get('/burgers', async (_, res)=>{
    const data = await db.Burger.findAll();

    res.json(data);
})
module.exports = router;