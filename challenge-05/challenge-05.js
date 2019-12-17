/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var obj = ['gustavo', true, 10, null, 'teste'];
var arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function listarArray(obj) {
    return obj;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(listarArray(obj)[1]);


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function funcao2(arrayValores, numero) {
    return arrayValores[numero];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array = ['string', 1, null, true, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
funcao2(array, 0);
funcao2(array, 1);
funcao2(array, 2);
funcao2(array, 3);
funcao2(array, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro) {
    var allBooks = {
        "livro1": {
            quantidadePaginas: 10,
            autor: 'teste',
            editora: 'teste2'
        },
        "livro2": {
            quantidadePaginas: 50,
            autor: 'gustavo',
            editora: 'saraiva'
        },
        "livro3": {
            quantidadePaginas: 77,
            autor: 'ana',
            editora: 'marisa'
        }
    }

    //COMO AS PROPRIEDADES DO OBJETO SÃO STRINGS, VC AINDA CONSEGUE ACESSAR ELAS USANDO A ANOTAÇÃO DE ARRAY([]) AO INVÉS DE OBJETO (.)
    return !nomeLivro ? allBooks : allBooks[nomeLivro];

}



/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = "livro3"
console.log(`O livro ${bookName} tem ${book(bookName).quantidadePaginas} paginas.`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${bookName} é ${book(bookName).autor}.`)
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro  ${bookName} foi publicado pela editora ${book(bookName).editora}.`)
