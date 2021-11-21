const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', (req, res) => {
    Comment.findAll()
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
// expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
    console.log(req.session);
    console.log(req.session.cookie);
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        BarList_id: req.body.BarList_id
    })
        .then(dbCommentData => {
            res.json(dbCommentData)
            console.log(dbCommentData)    
        }
        )
        .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.get('/:barID', (req, res) => {
    let barID = req.params.barID;

    Comment.findAll({
        where: { BarList_id : barID}
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});




module.exports = router;