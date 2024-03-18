const User = require('../models/user');

exports.getuser = (req, res, next) => {
    res.render('users');
}

exports.postuser = (req, res, next) => {
    const users = {
        UserName: req.body.uname,
        Phone: req.body.phone,
        Email: req.body.email,
    };
    User.create(users).then((items) => {
        console.log('Inserted successfully');
        res.redirect('/user/add-user');
    }).catch((err) => {
        console.log(err);
    })
}

exports.getpostuser = (req, res, next) => {
    User.findAll().then((users) => {
        console.log(users);
        const viewData = {
            pagetitle: 'home-page',
            users
        }
        res.render('getusers', viewData)
    }).catch((err) => {
        console.log(err);
    })
}

exports.deleteusers = (req, res, next) => {
    const userId = req.body.userId;
    User.destroy({where:{id:userId}})
    .then(() => {
        console.log('DELETED SUCCESSFULLY');
        res.redirect('/user/add-user');
    }).catch((err) => {
        console.log(err);
    })
}