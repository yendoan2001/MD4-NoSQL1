"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_model_1 = require("../schemas/customer.model");
const multer_1 = __importDefault(require("multer"));
const customerRouters = (0, express_1.Router)();
const upload = (0, multer_1.default)();
customerRouters.get('/create', (req, res) => {
    res.render("create");
});
customerRouters.post('/create', async (req, res) => {
    try {
        console.log(req.body);
        const newCustomer = new customer_model_1.Customer(req.body);
        const customer = await newCustomer.save();
        if (customer) {
            res.redirect("list");
        }
        else {
            res.render("error");
        }
    }
    catch (err) {
        res.render("error");
    }
});
customerRouters.get('/list', async (req, res) => {
    try {
        const customers = await customer_model_1.Customer.find();
        res.render("list", { customers: customers });
    }
    catch (_a) {
        res.render("error");
    }
});
customerRouters.get('/update/:id', async (req, res) => {
    try {
        const customer = await customer_model_1.Customer.findOne({ _id: req.params.id });
        console.log(customer);
        if (customer) {
            res.render("update", { customer: customer });
        }
        else {
            res.render('error');
        }
    }
    catch (err) {
        res.render('error');
    }
});
customerRouters.post('/update/:id', async (req, res) => {
    try {
        const customer = await customer_model_1.Customer.findOne({ _id: req.params.id });
        console.log(customer);
        customer.name = req.body.name;
        customer.code = req.body.code;
        customer.email = req.body.email;
        customer.phoneNumber = req.body.phoneNumber;
        await customer.save();
        if (customer) {
            res.redirect("/list");
        }
        else {
            res.render("error");
        }
    }
    catch (err) {
        res.render("error");
    }
});
customerRouters.get('/delete/:id', async (req, res) => {
    try {
        const customer = await customer_model_1.Customer.findOne({ _id: req.params.id });
        if (customer) {
            await customer.remove();
            res.redirect('/list');
        }
        else {
            res.render('error');
        }
    }
    catch (err) {
        res.render('error');
    }
});
exports.default = customerRouters;
//# sourceMappingURL=customer.router.js.map