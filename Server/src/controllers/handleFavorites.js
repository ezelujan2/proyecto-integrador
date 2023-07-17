let myFavorites = [];

function addFavorite(req,res) {
    myFavorites.push(req.body)
    res.json(myFavorites)
}

function deleteFavorite (req,res) {
    myFavorites = myFavorites.filter(favs => favs.id != req.params.id)
    res.json(myFavorites)
}

module.exports = {addFavorite,deleteFavorite};