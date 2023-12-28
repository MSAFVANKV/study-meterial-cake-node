import express from 'express';

const router = express.Router();

// @route   GET api/posts
router.route('/')
    .get((req, res) => {
        res.render("../views/index/pages/Home",
        
        {
            docTitle:"home"
        })
    });

    router.route('/store')
    .get((req, res) => {
        res.render("../views/index/pages/Store",
        
        {
            docTitle:"Store"
        })
    });

    router.route('/flavor')
    .get((req, res) => {
        res.render("../views/index/pages/Flavour",
        
        {
            docTitle:"Flavour"
        })
    });

    
    router.route('/jqury')
    .get((req, res) => {
        res.render("../views/index/pages/Jqury",
        
        {
            docTitle:"Jqury"
        })
    });

    router.route('/ajax')
    .get((req, res) => {
        res.render("../views/index/pages/ajax",
        
        {
            docTitle:"ajax"
        })
    });
    router.route('/palendroma')
    .get((req, res) => {
        res.render("../views/index/pages/palendroma",
        
        {
            docTitle:"palendroma"
        })
    });
    router.route('/prime')
    .get((req, res) => {
        res.render("../views/index/pages/PrimeNumber",
        
        {
            docTitle:"PrimeNumber"
        })
    });
    router.route('/todolist')
    .get((req, res) => {
        res.render("../views/index/pages/todoList",
        
        {
            docTitle:"todoList"
        })
    });
    router.route('/clock')
    .get((req, res) => {
        res.render("../views/index/pages/Clock",
        
        {
            docTitle:"Clock"
        })
    });
export default router;
