module.exports = function (app, swig) {
    app.get('/autores/agregar', function (req, res) {
        let respuesta = swig.renderFile('views/autores-agregar.html', {});
        res.send(respuesta);
    });

    app.post("/autor", function (req, res) {
        let respuesta = "Autor agregado: ";
        // Nombre del autor
        if (typeof (req.body.nombre) != "undefined") {
            respuesta += 'Nombre: ' + req.body.nombre + "<br>";
        } else {
            respuesta += 'Nombre no enviado en la petición. <br>';
        }
        // Grupo del autor
        if (typeof (req.body.grupo) != "undefined") {
            respuesta += 'Grupo: ' + req.body.grupo + "<br>";
        } else {
            respuesta += 'Grupo no enviado en la petición. <br>';
        }
        // Rol del autor
        if (typeof (req.body.rol) != "undefined") {
            respuesta += 'Rol: ' + req.body.rol;
        } else {
            respuesta += 'Rol no enviado en la petición.';
        }

        res.send(respuesta);
    });

    app.get('/autores', function (req, res) {
        let autores = [{
            "nombre": "Freddy Mercury",
            "grupo": "Queen",
            "rol": "cantante"
        }, {
            "nombre": "John Lennon",
            "grupo": "The Beatles",
            "rol": "cantante"
        }, {
            "nombre": "Kurt Cobain",
            "grupo": "Nirvana",
            "rol": "cantante"
        }];
        let respuesta = swig.renderFile('views/autores.html', {
            autores: autores
        });
        res.send(respuesta);
    });

    app.get('/autores*', function (req, res) {
        res.redirect('/autores');
    });
};