import express from 'express';


const router = express.Router();

//router.get('/', getPosts);
router.get('/', (req, res) => {
    res.send('THIS WORKS');
});


export default router;