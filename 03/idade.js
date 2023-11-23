let validarIdade = function (idade){
    if (idade >= 18) {
        return "Idade: Suficiente";
      } else {
        return "Idade: Idade insuficiente";
      }
}   

module.exports = validarIdade