let validarEstado = function (estado){
    if (estado === "SP" || estado === "RJ") {
        return "Estado: Permitido";
      } else {
        return "Estado: Negado";
      }
}

module.exports = validarEstado