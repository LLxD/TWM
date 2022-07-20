const data = [
  { lost_reason: "", count: 5685 },
  { lost_reason: "[CL] Cliente com a margem excedida", count: 2 },
  { lost_reason: "[CL] Cliente desistiu durante processo", count: 2 },
  { lost_reason: "[CL] Falha processual bx", count: 1 },
  { lost_reason: "Cliente tem restrições", count: 2397 },
  {
    lost_reason: "[CL] Informação de margem/histórico desatualizada",
    count: 1
  },
  {
    lost_reason: "[CL] Negado pelo BB por restrições/análise interna",
    count: 4
  },
  { lost_reason: "[CL] Risco de fraude", count: 2 },
  { lost_reason: "Convênio não atendido", count: 336485 },
  { lost_reason: "Curiosidade", count: 400 },
  { lost_reason: "Deal não possui ou recusou oportunidades", count: 7341 },
  { lost_reason: "Fechando automaticamente para testes", count: 21 },
  { lost_reason: "Fechou com concorrente", count: 30 },
  { lost_reason: "Fora do target", count: 3291 },
  { lost_reason: "[LD] Cliente desistiu da simulação", count: 13980 },
  { lost_reason: "[LD] Convênio não atendido", count: 205148 },
  { lost_reason: "[LD] Curiosidade", count: 172357 },
  { lost_reason: "[LD] Erro na consulta de margem", count: 5538 },
  { lost_reason: "[LD] Fora do target", count: 591 },
  { lost_reason: "(LD) Interesse em Empréstimo Pessoal", count: 1 },
  { lost_reason: "[LD] Não encontrado nos providers", count: 15125 },
  { lost_reason: "[LD] Não enviou comprovante de margem", count: 9462 },
  { lost_reason: "[LD] Não enviou contracheque", count: 11100 },
  {
    lost_reason: "[LD] Não enviou contracheque ou extrato de consignação",
    count: 251178
  },
  { lost_reason: "[LD] Não enviou o comprovante de margem", count: 9 },
  {
    lost_reason: "[ld] não enviou o contracheque ou extrato de consignação",
    count: 5109
  },
  {
    lost_reason: "[LD] não enviou o contracheque ou extrato de consignação",
    count: 8121
  },
  {
    lost_reason: "[LD] Não enviou o contracheque ou extrato de consignação",
    count: 1543
  },
  { lost_reason: "[LD] Não possui contas de FGTS.", count: 90 },
  { lost_reason: "[LD] Ocorreu um erro inesperado.", count: 1567 },
  { lost_reason: "[LD] Operação não permitida.", count: 23 },
  { lost_reason: "[LD] Primeiro acesso ao SIGEPE", count: 5892 },
  {
    lost_reason: "[LD] Risco de atuação de pastinha identificado",
    count: 6010
  },
  { lost_reason: "(LD) Saldo Insuficiente para Antecip FGTS", count: 3 },
  {
    lost_reason: "[LQ] API do banco não retornou ofertas de portabilidade",
    count: 357
  },
  {
    lost_reason:
      "[LQ] As taxas dos empréstimos são mais baixas que nossa taxa atual",
    count: 1950
  },
  { lost_reason: "[LQ] Benefício bloqueado para empréstimo", count: 88 },
  { lost_reason: "[LQ] Cliente desistiu da simulação", count: 1857 },
  {
    lost_reason: "[LQ] Cliente não atendido dentro do prazo esperado",
    count: 885
  },
  {
    lost_reason: "[LQ] Cliente não possui 12 parcelas pagas para portabilidade",
    count: 1626
  },
  { lost_reason: "[LQ] Cliente não possui empréstimos portáveis", count: 3464 },
  {
    lost_reason: "[LQ] Cliente tem restrições que não permitem gerar proposta",
    count: 130931
  },
  { lost_reason: "[LQ] Convênio informado incorretamente", count: 561 },
  { lost_reason: "[LQ] Convênio não atendido", count: 235 },
  { lost_reason: "[LQ] Enviou o comprovante de margem incorreto", count: 2 },
  { lost_reason: "[LQ] Espécie de benefício incorreta", count: 11 },
  { lost_reason: "[LQ] Fora do target", count: 2 },
  { lost_reason: "[LQ] Margem inviável para Portabilidade", count: 3741 },
  { lost_reason: "[LQ] Não aderiu ao saque aniversário (FGTS)", count: 88 },
  { lost_reason: "[LQ] Não autorizou o banco (FGTS)", count: 6142 },
  {
    lost_reason: "[LQ] Não é o momento para a contratação do empréstimo",
    count: 51
  },
  { lost_reason: "[LQ] Não há possibilidade de contratos", count: 1447 },
  { lost_reason: "[LQ]Não há possibilidade de contratos.", count: 6481 },
  { lost_reason: "[LQ] Não há possibilidades de contratos", count: 889204 },
  {
    lost_reason: "[LQ]  Não portamos do banco de origem do contrato",
    count: 1
  },
  {
    lost_reason:
      "[LQ] Operação bloqueada por estar próximo a data de aniversário",
    count: 93
  },
  {
    lost_reason:
      "[LQ] Operação bloqueada por mudanças cadastrais na conta FGTS",
    count: 300
  },
  {
    lost_reason:
      "[LQ] Operação bloqueada por pendência no processo de pagamento do saque aniversário",
    count: 4
  },
  {
    lost_reason:
      "[LQ] Parcela do cliente abaixo do permitido para portabilidade",
    count: 46
  },
  { lost_reason: "[LQ] Proposta não-rentável", count: 217 },
  { lost_reason: "[LQ] Risco de atuação de pastinha identificado", count: 13 },
  { lost_reason: "[LQ] Saldo abaixo de 300 reais.", count: 998 },
  { lost_reason: "[LQ] Saldo Bloqueado (FGTS)", count: 166 },
  {
    lost_reason: "[LQ] Saldo bloqueado ou valor abaixo de 400 reais.",
    count: 4557
  },
  { lost_reason: "[LQ] Saldo Insuficiente (FGTS)", count: 19 },
  {
    lost_reason:
      "[LQ] Saldo ou troco abaixo do min/acima do max para portabilidade",
    count: 15
  },
  {
    lost_reason: "[LQ] Todos os empréstimos estão com dados incompletos",
    count: 59
  },
  { lost_reason: "Não aceitou proposta original", count: 14 },
  {
    lost_reason: "Não acessou a página do afiliado após 30 dias da criação",
    count: 5281
  },
  { lost_reason: "Não assinou contrato", count: 1 },
  { lost_reason: "Não encontrado nos Providers", count: 5560 },
  { lost_reason: "Não encontrado no Viper", count: 19712 },
  { lost_reason: "Não engajou com proposta enviada", count: 137 },
  { lost_reason: "Não enviou comprovante de margem", count: 38 },
  { lost_reason: "Não enviou contracheque", count: 7034 },
  { lost_reason: "Não há possibilidades de contratos", count: 2525 },
  { lost_reason: "Não recebemos documentos", count: 6 },
  { lost_reason: "Não temos proposta", count: 135 },
  { lost_reason: "Negado pelo banco", count: 1 },
  {
    lost_reason: "[OPT] Aceitou proposta automática por curiosidade",
    count: 1
  },
  {
    lost_reason: "[OPT] Cliente com restrição que não permite gerar proposta",
    count: 1
  },
  { lost_reason: "[OPT] Cliente desistiu de proposta em curso", count: 1 },
  { lost_reason: "[OPT] Erro de processamento do BB", count: 1 },
  {
    lost_reason: "[OPT]  Informação de margem/histórico desatualizada",
    count: 1
  },
  {
    lost_reason: "[OPT] Não recebemos documentos pessoais completos/corretos",
    count: 2
  },
  { lost_reason: "[OPT] Não respondeu as tentativas de contato", count: 4 },
  {
    lost_reason: "[OPT] Negado pelo banco por não ter margem ou limite",
    count: 4
  },
  { lost_reason: "[OPT] Proposta automática inviável", count: 4 },
  { lost_reason: "[OPT] Proposta manual inviável", count: 1 },
  {
    lost_reason:
      "[OPT] Restrições do cliente impediram de gerar contrato para assinatura",
    count: 10
  },
  { lost_reason: "[OPT] Risco de fraude", count: 2 },
  { lost_reason: "Parceiro não entrou em contato", count: 236 },
  {
    lost_reason: "[PO] Cliente com a margem negativa para portabilidade",
    count: 2
  },
  {
    lost_reason: "[PO] Cliente com restrição que não permite gerar proposta",
    count: 5
  },
  { lost_reason: "[PO] Cliente desistiu da simulação", count: 9 },
  {
    lost_reason: "[PO] Cliente não atendido dentro do prazo esperado",
    count: 276
  },
  {
    lost_reason: "[PO] Cliente queria portabilidade sem refinanciamento",
    count: 1
  },
  { lost_reason: "[PO] Cliente tem interesse em portabilidade", count: 28 },
  { lost_reason: "[PO] Cliente tem interesse em refinanciamento", count: 1 },
  { lost_reason: "[PO] Erro de processamento do BB", count: 1 },
  { lost_reason: "[PO] Erro de proposta manual", count: 1 },
  { lost_reason: "[PO] Espécie do benefício incorreta", count: 1 },
  { lost_reason: "[PO] Fechou com concorrente", count: 2 },
  { lost_reason: "[PO] Fechou com o concorrente", count: 1 },
  {
    lost_reason: "[PO] Informação de margem/histórico desatualizada",
    count: 54
  },
  { lost_reason: "[PO] Não aceitou a proposta", count: 1 },
  { lost_reason: "[PO] Não aceitou proposta", count: 10 },
  { lost_reason: "[PO] Não aceitou proposta original", count: 6 },
  { lost_reason: "[PO] Não autorizou o banco (FGTS)", count: 3 },
  { lost_reason: "[PO] Não engajou com proposta enviada", count: 7 },
  {
    lost_reason: "[PO] Não enviou extrato de empréstimo consignado",
    count: 5312
  },
  {
    lost_reason: "[PO] Não é o momento para contratação do empréstimo",
    count: 12
  },
  { lost_reason: "[PO] Não há linhas de crédito BB", count: 4 },
  {
    lost_reason: "[PO] Não recebemos documentos pessoais completos/corretos",
    count: 1
  },
  { lost_reason: "[PO] Não respondeu as tentativas de contato", count: 88 },
  {
    lost_reason: "[PO] Parcela do banco atual é maior que a parcela original",
    count: 9
  },
  { lost_reason: "[PO] Proposta manual inviável", count: 31 },
  { lost_reason: "[PO] Proposta não-rentável", count: 4 },
  { lost_reason: "[PO] Repassado para atendimento parceiro", count: 1 },
  { lost_reason: "[PO] Risco de fraude", count: 385 },
  { lost_reason: "[PO] Simulou por curiosidade", count: 11 },
  { lost_reason: "[PO] Sugestão de contrato do Snake inviável", count: 91 },
  { lost_reason: "Proposta automática errada", count: 1 },
  { lost_reason: "Sem margem", count: 41 },
  { lost_reason: "Teste Tech [Lazaro]", count: 2 },
  { lost_reason: "[VI] Cliente desistiu da simulação", count: 3 },
  { lost_reason: "[VS] Cliente desistiu da simulação", count: 18538 },
  { lost_reason: "[VS] Convênio sem validação de margem", count: 15 },
  { lost_reason: "[VS] Erro de processamento do BB", count: 5 },
  { lost_reason: "[VS] Erro na consulta de margem", count: 11968 },
  { lost_reason: "[VS] Fora do target", count: 1037768 },
  { lost_reason: "[VS] Fora do Target", count: 5098 },
  {
    lost_reason: "[VS] Não enviou contracheque ou extrato de consignação",
    count: 298523
  },
  { lost_reason: "[VS] Proposta BB não rentável", count: 7 },
  { lost_reason: null, count: 13849 }
]
console.log(data.length)
const targetStrings = [
  "[LD] Erro na consulta de margem",
  "[LD] Não enviou contracheque ou extrato de consignação",
  "[LD] Não possui contas de FGTS.",
  "[LD] Ocorreu um erro inesperado.",
  "[LD] Operação não permitida.",
  "[LD] Primeiro acesso ao SIGEPE",
  "[LD] Risco de atuação de pastinha identificado",
  "[LQ] API do banco não retornou ofertas de portabilidade",
  "[LQ] As taxas dos empréstimos são mais baixas que nossa taxa atual",
  "[LQ] Benefício bloqueado para empréstimo",
  "[LQ] Cliente não possui empréstimos portáveis",
  "[LQ] Cliente tem restrições que não permitem gerar proposta",
  "[LQ] Convênio não atendido",
  "[LQ] Não há possibilidades de contratos",
  "[LQ] Operação bloqueada por estar próximo a data de aniversário",
  "[LQ] Operação bloqueada por mudanças cadastrais na conta FGTS",
  "[LQ] Operação bloqueada por pendência no processo de pagamento do saque aniversário",
  "[LQ] Saldo abaixo de 300 reais.",
  "[LQ] Saldo bloqueado ou valor abaixo de 400 reais.",
  "[LQ] Todos os empréstimos estão com dados incompletos",
  "[VS] Erro na consulta de margem",
  "[VS] Fora do target",
  "[VS] Não enviou contracheque ou extrato de consignação"
]

console.log(targetStrings.length)

// make a Set to hold values from namesToDeleteArr
const namesToDeleteSet = new Set(targetStrings)
// use filter() method
// to filter only those elements
// that need not to be deleted from the array
const unformattedArray = data.filter((data) => {
  // return those elements not in the namesToDeleteSet
  return !namesToDeleteSet.has(data.lost_reason)
})

console.log(unformattedArray.length)

const checkSimilarity = (stringA, stringB, percentage) => {
  if (stringA === null || stringB === null || stringA === stringB) {
    return false
  }
  if (!/\[(L|V)(D|Q|S)]/g.test(stringA) || !/\[(L|V)(D|Q|S)]/g.test(stringB)) {
    return false
  }
  const stringAlower = stringA.toLowerCase()
  const stringBlower = stringB.toLowerCase()
  const stringAWords = stringAlower.split(" ")
  const stringBWords = stringBlower.split(" ")
  const stringASize = stringAWords.length
  const stringBSize = stringBWords.length

  let isSimilar = false
  let count = 0

  if (stringASize > stringBSize) {
    stringBWords.forEach((word) => {
      stringAWords.includes(word) ? count++ : false
      if (count / stringASize >= percentage) {
        isSimilar = true
      }
    })
  } else {
    stringAWords.forEach((word) => {
      stringBWords.includes(word) ? count++ : false
      if (count / stringBSize >= percentage) {
        isSimilar = true
      }
    })
  }

  return isSimilar
}

const clusterArray = []

targetStrings.map((targetString) => {
  for (let index = 0; index < unformattedArray.length; index++) {
    if (
      checkSimilarity(targetString, unformattedArray[index].lost_reason, 0.3)
    ) {
      clusterArray.push({
        wellFormatted: targetString,
        unformatted: unformattedArray[index].lost_reason
      })
    }
  }
})

console.log(clusterArray)
console.log(clusterArray.length)
