module.exports = function (app, swig, gestorBD) {
    app.post('/comentarios/:cancion_id', function (req, res) {
        if (req.session.usuario == null) {
            res.send("Error: no ha iniciado sesión.");
            return;
        } else {
            let id = req.params.id; // id de la cancion
            let cancion_id = gestorBD.mongo.ObjectID(id) // guardar id de canción como objectID
            let comentario = {
                autor: req.session.usuario,
                texto: req.body.texto,
                cancion_id: cancion_id
            }
            // Conectarse a la bd
            gestorBD.insertarComentario(comentario, function (id) {
                if (id == null) {
                    res.send("Error al insertar comentario.");
                } else {
                    res.redirect('/cancion/' + req.params.cancion_id);
                }
            });
        }

    });
};