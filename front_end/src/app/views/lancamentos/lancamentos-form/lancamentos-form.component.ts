import { Title } from '@angular/platform-browser'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

import { MessageService } from 'primeng/api'

import { ErrorHandlerService } from '../../../core/error-handler.service'
import { CategoriaService } from '../../categorias/categoria.service'
import { PessoaService } from '../../pessoas/pessoa.service'
import { LancamentoService } from '../lancamento.service'

import { Lancamento } from '../../../core/model'
import { Categoria } from '../../../core/model'
import { Pessoa } from '../../../core/model'

@Component({
  selector: 'app-lancamentos-form',
  templateUrl: './lancamentos-form.component.html',
})
export class LancamentosFormComponent implements OnInit {

  formulario!: FormGroup

  categorias: Categoria[] = []
  pessoas: Pessoa[] = []
  tipos: any[] = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ]

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private messageService: MessageService,

    private lancamentoService: LancamentoService,
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,

    private route: ActivatedRoute,
    private router: Router,

    private formBuilder: FormBuilder,

    private title: Title,
  ) { }

  ngOnInit(): void {
    this.configurarFormulario()

    this.title.setTitle('Novo lançamento')
    const codigoLancamento = this.route.snapshot.params['codigo']

    if (codigoLancamento) this.carregarLancamento(codigoLancamento)

    this.carregarCategirias()
    this.carregarPessoas()
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      codigo: [],
      tipo: ['RECEITA', this.validarObrigatoriedade],
      descricao: [null, [this.validarObrigatoriedade, this.validarTamanhoMinimo(5)]],
      dataVencimento: [null, this.validarObrigatoriedade],
      dataPagamento: [],
      valor: [null, this.validarObrigatoriedade],
      observacao: [],
      pessoa: this.formBuilder.group({
        codigo: [null, this.validarObrigatoriedade],
        nome: []
      }),
      categoria: this.formBuilder.group({
        codigo: [null, this.validarObrigatoriedade],
        nome: []
      })
    })
  }

  validarObrigatoriedade(input: FormControl) {
    return (input.value ? null : { obrigatoriedade: true })
  }

  validarTamanhoMinimo(valor: number) {
    return (input: FormControl) => {
      return (!input.value || input.value.length >= valor) ? null : { tamanhoMinimo: { tamanho: valor } }
    }
  }

  get editando(): boolean {
    return Boolean(this.formulario.get('codigo')!.value);
  }

  carregarLancamento(codigo: number): void {
    this.lancamentoService.buscarPorCodigo(codigo)
      .then((lancamento: Lancamento) => {
        this.formulario.patchValue(lancamento)
        this.atualizarTituloEdicao()
      })
      .catch(error => this.errorHandlerService.handle(error))
  }

  carregarCategirias(): any {
    return this.categoriaService.listarTodos()
      .then((categorias: any) => {
        this.categorias = categorias.map((c: any) => (
          { label: c.nome, value: c.codigo }
        ))
      })
      .catch(error => this.errorHandlerService.handle(error))
  }

  carregarPessoas(): any {
    return this.pessoaService.listarTodos()
      .then((pessoas: any) => {
        this.pessoas = pessoas.map((p: any) => (
          { label: p.nome, value: p.codigo }
        ))
      })
      .catch(error => this.errorHandlerService.handle(error))
  }

  salvar(): void {
    this.editando ? this.atualizarLancamento() : this.adicionarLancamento()
  }

  adicionarLancamento(): void {
    this.lancamentoService.adicionar(this.formulario.value)
      .then((response: Lancamento) => {
        this.messageService.add({ severity: 'success', detail: 'Lançamento adicionado com sucesso!' })

        this.router.navigate(['/lancamentos', response.codigo])
      })
      .catch(error => this.errorHandlerService.handle(error))
  }

  atualizarLancamento(): void {
    this.lancamentoService.atualizar(this.formulario.value)
      .then((response: Lancamento) => {
        this.formulario.patchValue(response)
        this.messageService.add({ severity: 'success', detail: 'Lançamento atualizado com sucesso!' })

        this.atualizarTituloEdicao()
      })
      .catch(error => this.errorHandlerService.handle(error))
  }

  novo(): void {
    this.formulario.reset(new Lancamento())

    this.router.navigate(['/lancamentos/novo'])
  }

  atualizarTituloEdicao(): void {
    this.title.setTitle(`Edição de lancamento: ${this.formulario.get('descricao')!.value}`)
  }
}
