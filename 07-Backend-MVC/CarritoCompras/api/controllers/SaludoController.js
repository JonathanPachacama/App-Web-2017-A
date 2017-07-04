//En typescript podemos usar arrow fuction
// /Saludo/crearUsuarioQuemado
module.exports = {
    welcome: function (req, res) {
        //POST
        //.error
        //.silly
        sails.log.info(req.method);
        if (req.method == "POST") {
            return res.json({ saludo: "hola" });
        }
        else {
            return res.send("Error en metodo");
        }
        //Metodo : GET POST PUT DELETE
        //Si no ponen el metodo devolver
        //Metodo:perteneces al req.method;
        // return res.send("Error en metodo")
    },
    //otra ruta que hace lo mismo pero resumen res y req y evia texto plano
    bienvenido: function (req, res) {
        //PUT
        sails.log.info(req.method);
        if (req.method == "PUT") {
            return res.json("hola");
        }
        else {
            return res.send("Error en metodo (ruta bienvenida)");
        }
    },
    crearUsuarioQuemado: function (req, res) {
        var nuevoUsuario = {
            nombres: 'Jonathan',
            apellidos: 'Pachacama',
            password: '12345',
            correo: 'jonathan.pachacama@epn.edu.ec',
            fechaNacimiento: new Date()
        };
        //nombreModelo.metodo(parametros).exec((err,registro)=>{})
        Usuario.create(nuevoUsuario)
            .exec(function (error, usuarioCreado) {
            if (error) {
                return res.serverError(error);
            }
            else {
                return res.ok(usuarioCreado);
            }
        });
    },
    crearUsuarioQP: function (req, res) {
        var parametros = req.allParams();
        //  Ejemplo para crear por parametros query
        // http://localhost:1337/Saludo/crearUsuarioQuemado?nombres=Vicente&fechaNacimiento=2016-01-02
        var nuevoUsuario = {
            nombres: parametros.nombres,
            apellidos: parametros.apellidos,
            password: parametros.password,
            correo: parametros.correo,
            fechaNacimiento: parametros.fechaNacimiento
        };
        // 1 - Query Parameters ?nombre=Adrian&apellidos=Eguez
        // 2 - Forms Parameters
        //nombreModelo.metodo(parametros).exec((err,registro)=>{})
        Usuario.create(nuevoUsuario)
            .exec(function (error, usuarioCreado) {
            if (error) {
                return res.serverError(error);
            }
            else {
                return res.ok(usuarioCreado);
            }
        });
    },
    contar: function (req, res) {
        Usuario.count({ nombres: 'Jonathan' }).exec(function countCB(error, found) {
            console.log('Hay' + found + ' Usuario llamado jonathan');
            return res.send("contado exitoso");
        });
    },
    destruir: function (req, res) {
        Usuario.destroy({ nombres: 'Jonathan' }).exec(function (err) {
            if (err) {
                return res.negotiate(err);
            }
            sails.log('Algun usuario llamado Jonathan ha sido eliminado, si hay alguno.');
            return res.ok();
        });
    },
    actualizar: function (req, res) {
        Usuario.update({ nombres: 'Jonathan' }, { nombres: 'Paul' }).exec(function afterwards(err, updated) {
            if (err) {
                // handle error here- e.g. `res.serverError(err);`
                return;
            }
            console.log('Actualizado el nombre de jonathan a paul');
        });
    },
};
