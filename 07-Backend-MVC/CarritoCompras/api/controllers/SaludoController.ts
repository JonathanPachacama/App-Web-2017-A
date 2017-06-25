/**
 * Created by visitante on 19/06/2017.
 */
declare var module;
declare var sails;

  //En typescript podemos usar arrow fuction
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
};