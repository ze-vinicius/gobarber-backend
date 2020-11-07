# Anotações

## Repository

### O que é

Repository representa a ponte entre a persistência e a rota.

Persistência (Banco de dados) <-> Repositorio <-> Rota

### Conteúdo

O repositório é onde nós iremos conseguir buscar as informações dentro de algum local (banco de dados)

Geralmente se tem um repositório por model

#### métodos

- find
- create

## DTO - Data Transfer Object

Transferir um objeto / dados de um arquivo para outro.

## Rotas

As rotas devem estar preocupadas apenas com:

- Receber a requisição
- Chamar outro arquivo (função) para tratar aquela requisição
- Devolver uma resposta
