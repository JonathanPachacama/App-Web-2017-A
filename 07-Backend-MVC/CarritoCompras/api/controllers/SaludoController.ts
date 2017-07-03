/**
 * Created by visitante on 19/06/2017.
 */
declare var module;
declare var sails;
declare var Usuario;
  //En typescript podemos usar arrow fuction


// /Saludo/crearUsuarioQuemado
module.exports = {
  welcome:(req,res)=>{
    //POST
    //.error
    //.silly
    sails.log.info(req.method);
    if(req.method=="POST"){
      return res.json({saludo:"hola"})
    }else{
      return res.send("Error en metodo")
    }
     //Metodo : GET POST PUT DELETE
    //Si no ponen el metodo devolver
    //Metodo:perteneces al req.method;
    // return res.send("Error en metodo")
  },

  //otra ruta que hace lo mismo pero resumen res y req y evia texto plano
  bienvenido:(req,res)=>{
    //PUT
    sails.log.info(req.method);
    if(req.method=="PUT"){
      return res.json("hola")
    }else{
      return res.send("Error en metodo (ruta bienvenida)")
    }
  },

  crearUsuarioQuemado:(req,res)=>{
    let nuevoUsuario = {
      nombre:'Jonathan',
      apellido:'Pachacama',
      password:'12345',
      email:'jonathan.pachacama@epn.edu.ec',
      fechaNacimiento:new Date()
    };

    //nombreModelo.metodo(parametros).exec((err,registro)=>{})
    Usuario.create(nuevoUsuario)
      .exec(
        (error,usuarioCreado)=>{
          if(error){
            return res.serverError(error)
          }else{
            return res.ok(usuarioCreado);
          }
        }
      )


  },

  crearUsuarioQP:(req,res)=>{
    let nuevoUsuario = {
      nombre:'Jonathan',
      apellido:'Pachacama',
      password:'12345',
      email:'jonathan.pachacama@epn.edu.ec',
      fechaNacimiento:new Date()
    }

    //nombreModelo.metodo(parametros).exec((err,registro)=>{})
    Usuario.create(nuevoUsuario)
      .exec(
        (error,usuarioCreado)=>{
          if(error){
            return res.serverError(error)
          }else{
            return res.ok(usuarioCreado);
          }
        }
      )


  }

};
