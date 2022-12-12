import {Router} from 'express';
import {Customer} from "../schemas/customer.model";
import multer from 'multer';


const customerRouters = Router();
const upload = multer();

customerRouters.get('/create', (req, res) => {
    res.render("create");
});

customerRouters.post('/create', async (req, res) => {
    try {
        console.log(req.body);
        const newCustomer = new Customer(req.body);
        const customer = await newCustomer.save();
        if (customer) {
            res.redirect("list");
        } else {
            res.render("error");
        }
    } catch (err) {
        res.render("error");
    }
});

customerRouters.get('/list', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.render("list", {customers: customers});
    } catch {
        res.render("error");
    }
});

customerRouters.get('/update/:id', async (req, res) => {
    try {
        const customer = await Customer.findOne({_id: req.params.id});
        console.log(customer)
        if (customer) {
            res.render("update", {customer: customer})
        } else {
            res.render('error')
        }
    } catch (err) {
        res.render('error');
    }
})
customerRouters.post('/update/:id', async (req, res) => {
    try {
        const customer = await Customer.findOne({_id: req.params.id});
        console.log(customer)
        customer.name = req.body.name;
        customer.code = req.body.code;
        customer.email = req.body.email;
        customer.phoneNumber = req.body.phoneNumber;
        await customer.save();
        if (customer) {
            res.redirect("/list");
        } else {
            res.render("error");
        }
    } catch (err) {
        res.render("error");
    }
});

customerRouters.get('/delete/:id',async (req, res)=>{
    try{
       const customer = await Customer.findOne({_id: req.params.id});
       if(customer){
           await customer.remove();
           res.redirect('/list');
       }else{
           res.render('error');
       }
    } catch(err){
        res.render('error');
    }
})


export default customerRouters;
