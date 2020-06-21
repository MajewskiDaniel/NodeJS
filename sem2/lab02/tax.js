const express = require('express');

const router = express.Router();

const calculateTax = (tax, amount) => {
    const taxValue = amount/100 * tax;
    return {
        tax: taxValue, 
        amount: amount - taxValue
    }
}
router.post("/", (req, res)=> {
    const {tax, amount} = req.body;
    const result = calculateTax(tax, amount);
    res.send(result)
})

module.exports = router;


