const router = require("express").Router();
const gameController =  require("");

router.get('/game/:id',gameController); // Récupère le jeu par son ID
router.get('/game', gameController); // Renvoie les fiches des jeux
router.get('/game/keyword', gameController); // Récupère la liste id des jeux par mot clef // A REVOIR AVEC HUGO
router.post('/game/rating', gameController); // Permet de noter le jeu

module.exports = router;