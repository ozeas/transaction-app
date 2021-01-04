# O desafio

Nossa maior preocupação é garantir que as pessoas que utilizam nossos produtos tenham a melhor experiência possível - _por isso, nosso foco para o desafio é a qualidade do resultado entregue_.


## O teste

Nossos clientes precisam criar transações. Para isso desenvolveremos uma plataforma em que o cliente consiga criar e visualizar suas transações.

## Requisitos

- Listagem de transações

  - Deverá ser feita apenas 1x requisição para a API solicitando os dados. Quando forem cadastradas novas transações, além da requisição da API(POST), os dados deverão ser inseridos no estado da aplicação, para serem mostrados na listagem.
  - Uma nova requisição para a API só ocorrerá quando o usuário fechar a página e abri-la novamente.

- As requisições devem lidar tanto com sucesso quanto falha (ex: timeout, conexão lenta, usuário está offline...). O feedback disso fica a seu critério.
- O projeto deve consumir a API disposta para o mesmo. Para isso, execute o comando `yarn server`.

### Endpoints da API

- GET `http://localhost:3000/transactions/` será retornado o seguinte payload:

```json
[
  {
    "id": 1,
    "buyer_document": "12345678912",
    "credit_card_holder_name": "JOAO S SAURO",
    "credit_card_number": "4111111111111111",
    "credit_card_expiration_date": "0121",
    "credit_card_cvv": "123",
    "amount": 10000,
    "status" "paid"
  }
]
```

- GET `http://localhost:3000/transactions/1` será retornado o seguinte payload:

```json
{
  "id": 1,
  "buyer_document": "12345678912",
  "credit_card_holder_name": "JOAO S SAURO",
  "credit_card_number": "4111111111111111",
  "credit_card_expiration_date": "0121",
  "credit_card_cvv": "123",
  "amount": 10000,
  "status" "paid"
}
```

- POST `http://localhost:3000/transactions/` para criar nova transações seguindo esse payload:

| Parâmetro                     |  Tipo  |             Condição |
| :---------------------------- | :----: | -------------------: |
| `buyer_document`              | String |        11 caracteres |
| `credit_card_holder_name`     | String | 2 ou mais caracteres |
| `credit_card_number`          | String |        16 caracteres |
| `credit_card_expiration_date` | String |         4 caracteres |
| `credit_card_cvv`             | String |         3 caracteres |
| `amount`                      | Number |     Inteiro positivo |

Esta rota retorna os dados informados adicionando o campo `status`, que para critérios de testes pode retornar `paid` ou `refused`:

```json
{
    "buyer_document": "12345678912",
    "credit_card_holder_name": "JOAO S SAURO",
    "credit_card_number": "4111111111111111",
    "credit_card_expiration_date": "0121",
    "credit_card_cvv": "123",
    "amount": 10000,
    "status": "paid",
    "id": 6
}
```
