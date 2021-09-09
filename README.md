# Teste Front End Jr - Lumis

<p>Você foi selecionado para criar um sistema utilizando ReactJs.

<p>Segue o link do Figma para ajudar na criação do Layout"</p>

[Figma](https://www.figma.com/file/o3OdUfyuawH00cf3JIX1rM/Lumis-Front-End-Jr?node-id=2%3A93)

<p>Antes de tudo rode o comando </p>

```javascript
npm install ou yarn
```

<p>Estamos disponibilizando uma API Rest para consumo. Para iniciar o server rode o seguinte comando</p>

```javascript
npm run start-server ou yarn start-server
```

## Documentação da api

### Get

- /games

```javascript
[
  {
    id: number,
    name: string,
    price: number,
    description: string,
    image: string,
  },
];
```

### Post

- /contact

```javascript
Espera receber um json, ex:
{
  "name": string,
	"email": string,
	"phone": string
}
```

## O que deve ser desenvolvido

</br>
</br>

### Home

- Listagem de jogos ( Utilize o endpoint /games do tipo GET)
- Filtro por nome (name)
- Caso não exista um jogo com o nome utilizado, deve retorna uma msg "Não foi possivel encontrar nenhum jogo com: Nome"
- Ao clicar no botão, deve abrir um modal contento a imagem, nome, preço e descrição do jogo selecionado

Obs: Não se preocupe com o tamanho das imagens.

### Contato

- Envio de contato ( Utilize o endpoint /contact do tipo Post)
- Validação dos campos
- Telefone deve ter no mínimo 10 e no máximo 11 digitos.
- Deve aparecer uma mensagem de erro em baixo de cada campo de texto caso não passe na validação
- Ao enviar, todos os campos precisam ser limpos.

### Desejável - Utilize sua imaginação

- Desenvolvimento responsivo
- Testes automatizados
- Código limpo

</br>
</br>

Obs: Seja livre para utilizar a lib você mais gosta para o desenvolvimento.

### Desafio 🚀

- Desenvolver a versão mobile.

</br>
</br>

### Como enviar o teste

- Exclua a node_modules, zip e nos envie por e-mail.
- Sua no seu GitHub e mande o link por e-mail.

### Contato

Qualquer coisa só mandar um e-mail para

rafael.sergio@lumis.com.br

</br>

## Boa sorte 🚀
