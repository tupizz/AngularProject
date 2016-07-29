angular.module("listaTelefonica", ['ngMask']);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $filter) {
    $scope.app = "Lista Telefônica";
    $scope.contatos = [
        {nome: $filter('uppercase')("Pedro"), telefone: "(11) 9999-9999", data: new Date(), operadora: {nome: "Oi", codigo: "14", categoria: "Celular"}},
        {nome: $filter('uppercase')("Ana"), telefone: "(11) 9299-9999", data: new Date(), operadora: {nome: "Tim", codigo: "41", categoria: "Celular"}},
        {nome: $filter('uppercase')("Maria"), telefone: "(11) 9999-9399", data: new Date(), operadora:{nome: "Vivo", codigo: "15", categoria: "Celular"}}
    ];
    $scope.operadoras = [
        {nome: "Oi", codigo: "14", categoria: "Celular"},
        {nome: "Vivo", codigo: "15", categoria: "Celular"},
        {nome: "Tim", codigo: "41", categoria: "Celular"},
        {nome: "GVT", codigo: "25", categoria: "Fixo"},
        {nome: "Embratel", codigo: "21", categoria: "Fixo"}
    ];
    $scope.adicionarContato = function (contato) {
        contato.data = new Date();
        $scope.contatos.push(angular.copy(contato));
        console.log(contato);
        delete $scope.contato;
        $scope.contatoForm.$setPristine(); //Após adicionar, volta o formulário para o estado inicial dele.
    };
    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado)
                return contato;
        });
    };
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor= function (tipo){
        $scope.criterioDeOrdenacao = tipo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
});