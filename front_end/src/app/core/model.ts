export class Endereco {
  logradouro!: string
  numero!: number
  complemento!: string
  bairro!: string
  cep!: string
  cidade!: string
  estado!: string
}

export class Pessoa {
  codigo!: string
  nome!: string
  ativo = true
  endereco: Endereco = new Endereco()

}

export class Categoria {
  codigo!: string
}

export class Lancamento {
  codigo!: string
  tipo = 'RECEITA'
  descricao!: string
  dataVencimento!: Date
  dataPagamento!: Date
  valor!: number
  observacao!: string
  pessoa: Pessoa = new Pessoa()
  categoria: Categoria = new Categoria()
}