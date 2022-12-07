# Trybesmith

---

## Habilidades

- Programar com a linguagem TypeScript.
- Desenvolver uma API REST.
- Desenvolver endpoints que interagem com um banco de dados MySQL.

---

## Documentação da API

#### Cria um usuario e retorna um token de autenticação

```
  POST /users
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `username` | `string` | **Obrigatório**. O nome de usuario |
| `classe` | `string` | **Obrigatório**. A classe do usuario |
| `level` | `number` | **Obrigatório**. O nivel do usuario |
| `password` | `string` | **Obrigatório**. A senha do usuario |

#### Faz o login e retorna o token de autenticação

```
  POST /login
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `username`      | `string` | **Obrigatório**. O nome do usuario |
| `password` | `string` | **Obrigatório**. A senha do usuario |

#### Faz o cadastro de produtos

```
  POST /products
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O nome do produto |
| `amount`    | `string` | **Obrigatório**. O montante do usuario |

#### Lista todos os produtos

```
  GET /products
```
#### Cadastra um pedido

```
  POST /orders
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `products`      | `array number` | **Obrigatório**. O ID dos produtos que quer pedir |

#### Lista todos os pedidos

```
  GET /orders
```

#### Lista um pedido

```
  GET /orders/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do pedido que você quer |