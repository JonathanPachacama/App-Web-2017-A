/**
 * MateriaMatricula.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    notaPrimerBimestre:{
      type:'float'
    },
    notaSegundoBimestre:{
      type:'float'
    },
    notaSupletorio:{
      type:'float'
    },
    estado:{//jalado aka topamos
      type:'string',
      enum:['Estudiando','Topamos','Exonerado','Supletorio'],
      defaultsTo:'Estudiando'
    },
    fkIdMatricula:{
      modelo:'Matricula',
      required:true
    },
    fkIdMateria:{
      modelo:'Materia',
      required:true
    }

  }
};

