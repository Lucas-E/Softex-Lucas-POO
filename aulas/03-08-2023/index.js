var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(idade, nome) {
        this.idade = idade;
        this.nome = nome;
    }
    Pessoa.prototype.apresentar = function () {
        return "".concat(this.nome, " tem ").concat(this.idade, " anos");
    };
    return Pessoa;
}());
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(matricula, idade, nome) {
        var _this = _super.call(this, idade, nome) || this;
        _this.matricula = matricula;
        return _this;
    }
    return Aluno;
}(Pessoa));
var aluno1 = new Aluno('001', 23, 'lucas');
console.log(aluno1.apresentar());
console.log(aluno1.idade);
