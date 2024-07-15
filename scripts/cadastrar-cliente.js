const alertaAdicionarNovoCliente = require("../scripts/alerta");
var bancoDeDados = require("../scripts/banco-de-dados");

function adicionarProduto(event) {
  event.preventDefault();
 
  var cliente = document.getElementById("cliente").value;
  var carro = document.getElementById("carro").value;
  var placa = document.getElementById("placa").value;

  console.log(cliente, carro, placa)

  var queryInserir= `INSERT INTO clientes (cliente, carro, placa) VALUES ("${cliente}", "${carro}", "${placa}")`;

console.log('ENTROU NA FUNÇÃO ADICIONAR PRODUTO')

  bancoDeDados.query(queryInserir, function(error) {
    if(error) {
      console.log(`Ocorreu um erro ao adicionar o cliente: ${error.code}`);
      console.log(`Ocorreu um erro ao adicionar o cliente: ${error.fatal}`);
    } else {
      console.log('CLIENTE ADICIONADO COM SUCESSO AO BANCO DE DADOS');
      alertaAdicionarNovoCliente()
    }
  });
}
 
var formulario = document.getElementById('formulario')
formulario.addEventListener('submit', adicionarProduto)