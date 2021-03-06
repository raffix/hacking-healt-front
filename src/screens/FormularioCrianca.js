import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './../styles/App.css';
import './../styles/NavigationFormStyle.css';
import './../styles/InputTextStyle.css';
import './../styles/ActionsButtonsStyle.css';
import './../styles/Formulario.css';
import NavigationFormComponent from './../components/NavigationFormComponent';
import FormTitleComponent from './../components/FormTitleComponent';

const inputs = [
  {
     "id": "numero_identificacao",
     "title": "Número Identificação Criança",
     "subtitle": "Informe o número de identificação",
     "type": "text",
     "placeholder": "Ex: 201910992",
   }, {
     "id": "regiao",
     "title": "Região",
     "subtitle": "Em qual destas regiões é a residência da criança?",
     "hint": "",
     "type": "radio",
     "options": [
       {"value": 1, "description": "São Paulo Capital"},
       {"value": 2, "description": "São Paulo Interior"},
       {"value": 3, "description": "Baixada Santista"},
       {"value": 4, "description": "Rio de Janeiro"},
       {"value": 5, "description": "Santa Catarina"},
       {"value": 6, "description": "Paraná"},
       {"value": 7, "description": "Outra"}
     ],
   }, {
     "id": "outra_regiao",
     "title": "Outra Região",
     "subtitle": "Informe a outra região",
     "hint": "",
     "placeholder": "Digite aqui",
     "type": "text"
   },
   {
     "id": "nome_completo",
     "title": "Nome completo",
     "subtitle": "Informe o nome completo",
     "hint": "",
     "placeholder": "Digite aqui",
     "type": "text"
   },
   {
     "id": "data_nascimento",
     "title": "Data de nascimento",
     "subtitle": "Informe a data de nascimento",
     "hint": "",
     "placeholder": "Digite aqui",
     "type": "data"
   },
   {
     "id": "numero_identidade",
       "title": "Número de identidade",
       "subtitle": "Informe o número de identidade. Caso possua.",
       "hint": "",
       "placeholder": "Digite aqui",
       "type": "text"
   },
   {
     "id": "CPF",
       "title": "Número do CPF",
       "subtitle": "Informe o número do CPF. Caso possua.",
       "hint": "",
       "placeholder": "Digite aqui",
       "type": "cpf"
   },
   {
     "id": "email",
       "title": "Email",
       "subtitle": "Informe o email. Caso possua.",
       "hint": "",
       "placeholder": "Digite aqui",
       "type": "text"
   },
   {
     "id": "telefone",
       "title": "Número do telefone",
       "subtitle": "Informe o número do telefone. Caso possua.",
       "hint": "",
       "placeholder": "Digite aqui",
       "type": "text"
   },
   {
     "id": "acesso_escola",
       "title": "Acesso a escola?",
       "subtitle": "",
       "hint": "",
       "placeholder": "Digite aqui",
       "type": "radio",
       "options": [
         {"value": 1, "description": "SIM"},
         {"value": 2, "description": "NÃO"},
       ],
   },
   {
       "id": "qual_escola",
       "title": "Qual escola",
       "subtitle": "Informe a escola",
       "hint": "",
       "placeholder": "Digite aqui",
       "type": "text"
   },
     {
         "id": "necessidade_especial",
         "title": "Possui Necessidade especial?",
         "subtitle": "Informe se a criança possui alguma necessidade especial",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "radio",
         "options": [
             {"value": 1, "description": "SIM"},
             {"value": 2, "description": "NÃO"},
       ],
   },
     {
         "id": "qual_necessidade_especial",
         "title": "Qual necessidade especial?",
         "subtitle": "Informe a necessidade especial",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",

     },
     {
         "id": "outra_necessidade_especial",
         "title": "Possui outra necessidade especial?",
         "subtitle": "Informe a outra necessidade especial",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text"
     },
     {
         "id": "doenca_psiquiatrica",
         "title": "Doença psiquiátrica",
         "subtitle": "Possui alguma doença psiquiátrica?",
         "hint": "",
         "type": "radio",
         "options": [
             {"value": 1, "description": "SIM"},
             {"value": 2, "description": "NÃO"},
         ],
     },
     {
         "id": "qual_doenca_psiquiatrica",
         "title": "Qual a doença psiquiatrica?",
         "subtitle": "Informe a doenca psiquiatrica",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",

     },
     {
         "id": "CEP",
         "title": "Digite o CEP",
         "subtitle": "Digite o CEP onde a criança reside",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "cep",

     },
     {
         "id": "endereco",
         "title": "Digite o endereço",
         "subtitle": "Digite o endereço onde a criança reside",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",

     },
     {
         "id": "complemento",
         "title": "Digite o complemento",
         "subtitle": "Informe número da residência, apto, etc",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",

     },
     {
         "id": "cidade",
         "title": "Digite a cidade",
         "subtitle": "Informe a cidade onde a criança reside",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",

     },
     {
         "id": "estado",
         "title": "Digite o estado",
         "subtitle": "Informe o estado onde a criança reside",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "transporte_crianca",
         "title": "Quais os meios de transporte utilizados pela criança?",
         "subtitle": "Informe os meios de transporte que a criança utiliza",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "acompanhante_crianca",
         "title": "Quem acompanha a criança no transporte?",
         "subtitle": "Informe a pessoa que sempre acompanha a criança durante o transporte",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "nome_mae",
         "title": "Nome Completo da Mãe",
         "subtitle": "Informe o nome completo da mãe da criança",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "identidade_mae",
         "title": "Número de identidade da Mãe",
         "subtitle": "Informe o número do documento de identidade da mãe da criança juntamente com o tipo, Orgão emissor e Data",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "CPF",
         "title": "Número de CPF da Mãe",
         "subtitle": "Informe o número do documento de CPF da mãe da criança",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "cpf",
     },
     {
         "id": "estado_civil_mae",
         "title": "Estado Civil Mãe da Criança",
         "subtitle": "Qual o Estado Civil da Mãe da Criança?",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "endereco_residencial",
         "title": "Endereço Residencial",
         "subtitle": "Endereço Residencial é o mesmo da criança?",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "radio",
         "options": [
             {"value": 1, "description": "SIM"},
             {"value": 2, "description": "NÃO"},
         ],
     },
     {
         "id": "CEP_mae",
         "title": "Digite o CEP",
         "subtitle": "Digite o CEP onde a mãe criança reside",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "cep",

     },
     {
         "id": "endereco_mae",
         "title": "Digite o endereço",
         "subtitle": "Digite o endereço onde a mãe criança reside",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",

     },
     {
         "id": "complemento_mae",
         "title": "Digite o complemento",
         "subtitle": "Informe número da residência, apto, etc onde a mãe reside",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",

     },
     {
         "id": "cidade_mae",
         "title": "Digite a cidade",
         "subtitle": "Informe a cidade onde a mãe criança reside",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",

     },
     {
         "id": "estado_mae",
         "title": "Digite o estado",
         "subtitle": "Informe o estado onde a mãe criança reside",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "telefone_principal_mae",
         "title": "Principal telefone para contato",
         "subtitle": "Informe o número de telefone com código de área",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "telefone_alternativo_mae",
         "title": "Telefone alternativo para contato",
         "subtitle": "Informe outro número de telefone para contato caso julgue necessário",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "email_mae",
         "title": "E-mail da mãe",
         "subtitle": "Informe o endereço eletônico da mãe",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "escolaridade_mae",
         "title": "Escolaridade da mãe",
         "subtitle": "Informe qual o grau de escolaridade da mãe",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "nome_pai",
         "title": "Nome Completo do pai",
         "subtitle": "Informe qual o nome completo do pai da criança",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "identidade_pai",
         "title": "Número de identidade do pai",
         "subtitle": "Informe qual o número do documento de identidade do pai da criança juntamente com o tipo, Orgão emissor e Data",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "CPF",
         "title": "Número de CPF do Pai",
         "subtitle": "Informe qual o número do documento de CPF do pai da criança",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "cpf",
     },
     {
         "id": "estado_civil_pai",
         "title": "Estado Civil do pai da criança",
         "subtitle": "Qual o Estado Civil do pai da criança?",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     //
     {
         "id": "endereco_residencial_pai",
         "title": "Endereço Residencial",
         "subtitle": "Endereço Residencial é o mesmo da criança?",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "radio",
         "options": [
             {"value": 1, "description": "SIM"},
             {"value": 2, "description": "NÃO"},
         ],
     },
     {
         "id": "CEP_pai",
         "title": "Digite o CEP",
         "subtitle": "Digite o CEP onde o pai da criança reside",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "cep",

     },
     {
         "id": "endereco_pai",
         "title": "Digite o endereço",
         "subtitle": "Digite o endereço onde o pai da criança reside",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",

     },
     {
         "id": "complemento_pai",
         "title": "Digite o complemento",
         "subtitle": "Informe número da residência, apto, etc onde o pai da criança reside",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",

     },
     {
         "id": "cidade_pai",
         "title": "Digite a cidade",
         "subtitle": "Informe a cidade onde o pai da criança reside",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",

     },
     {
         "id": "estado_pai",
         "title": "Digite o estado",
         "subtitle": "Informe o estado onde o pai da criança reside",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "telefone_principal_pai",
         "title": "Principal telefone para contato do pai",
         "subtitle": "Informe o número de telefone com código de área",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "telefone_alternativo_pai",
         "title": "Telefone alternativo para contato",
         "subtitle": "Informe outro número de telefone para contato caso julgue necessário",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "email_pai",
         "title": "E-mail do pai",
         "subtitle": "Informe o endereço eletônico do pai",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "escolaridade_mae",
         "title": "Escolaridade do pai",
         "subtitle": "Informe qual o grau de escolaridade do pai",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "custodia_crianca",
         "title": "Custódia da criança",
         "subtitle": "Quem possui a custódia da criança além de ser o responsável legal e será o ponto de contato com os Shriners?",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "radio",
         "options": [
             {"value": 1, "description": "MÃE"},
             {"value": 2, "description": "PAI"},
             {"value": 2, "description": "OUTRO"},
         ],
     },
     {
         "id": "responsavel_crianca",
         "title": "Nome Completo do responsável",
         "subtitle": "Informe qual o nome completo do responsável legal da criança",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "identidade_responsavel",
         "title": "Identidade do responsável",
         "subtitle": "Informe qual o número do documento de identidade do responsável legal da criança juntamente com o tipo, Orgão emissor e Data de Emissão",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     // responsavel
     {
         "id": "CPF_responsavel",
         "title": "Número de CPF do responsável",
         "subtitle": "Informe qual o número do documento de CPF do responsável da criança",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "cpf",
     },
     {
         "id": "estado_civil_responsavel",
         "title": "Estado Civil do responsável da criança",
         "subtitle": "Qual o Estado Civil do responsável da criança?",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "endereco_residencial_responsavel",
         "title": "Endereço Residencial",
         "subtitle": "Endereço Residencial é o mesmo da criança?",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "radio",
         "options": [
             {"value": 1, "description": "SIM"},
             {"value": 2, "description": "NÃO"},
         ],
     },
     {
         "id": "CEP_responsavel",
         "title": "Digite o CEP",
         "subtitle": "Digite o CEP onde o do responsável da criança reside",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "cep",

     },
     {
         "id": "endereco_responsavel",
         "title": "Digite o endereço",
         "subtitle": "Digite o endereço onde o responsável da criança reside",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",

     },
     {
         "id": "complemento_responsavel",
         "title": "Digite o complemento",
         "subtitle": "Informe número da residência, apto, etc onde responsável da criança reside",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",

     },
     {
         "id": "cidade_responsavel",
         "title": "Digite a cidade",
         "subtitle": "Informe a cidade onde responsável da criança reside",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",

     },
     {
         "id": "estado_responsavel",
         "title": "Digite o estado",
         "subtitle": "Informe o estado onde responsável da criança reside",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "telefone_principal_responsavel",
         "title": "Principal telefone para contato responsável",
         "subtitle": "Informe o número de telefone com código de área",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "telefone_alternativo_responsavel",
         "title": "Telefone alternativo para contato",
         "subtitle": "Informe outro número de telefone para contato caso julgue necessário",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "email_responsavel",
         "title": "E-mail do responsável",
         "subtitle": "Informe o endereço eletônico do responsável",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "escolaridade_responsavel",
         "title": "Escolaridade do responsável",
         "subtitle": "Informe qual o grau de escolaridade do responsável",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "renda_familiar",
         "title": "Renda familiar",
         "subtitle": "Informe qual a renda mensal do grupo familiar",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "radio",
         "options": [
             {"value": 1, "description": "Até ½ salário mínimo"},
             {"value": 2, "description": "De ½ a 1 salário mínimo"},
             {"value": 3, "description": "De 1 a 2 salários mínimos"},
             {"value": 4, "description": "De 2 a 3 salários mínimos"},
             {"value": 5, "description": "De 3 a 4 salários mínimos"},
             {"value": 6, "description": "De 4 a 5 salários mínimos"},
             {"value": 7, "description": "Mais de 5 salários mínimos"},
         ],
     },
     {
         "id": "plano_saude_crianca",
         "title": "Plano de saúde da criança",
         "subtitle": "Informe qual o plano de saúde a criança utiliza",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "radio",
         "options": [
             {"value": 1, "description": "SUS"},
             {"value": 2, "description": "Plano Privado"},
             {"value": 3, "description": "Outro"},
         ],
     },
     {
         "id": "outro_plano",
         "title": "Outro plano",
         "subtitle": "Qual outro plano privado?",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },

     //situação clinica criança

     {
         "id": "situacao_clinica_crianca[]",
         "title": "Assinale qual a situação clínica",
         "subtitle": "Assinale as opções que se enquadram na situação clínica da criança",
         "hint": "",
         "type": "checkbox",
         "options": [
          {"value": 1, "description": "Situação 1"},
          {"value": 2, "description": "Situação 2"},
          {"value": 3, "description": "Situação 3"},
         ]
     },
     {
         "id": "detalhamento_politraumatismo",
         "title": "Detalhamento Politraumatismo",
         "subtitle": "Descreva os politraumatismos",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "outra_situacao",
         "title": "Outra Situação clínica",
         "subtitle": "Explicite qual outra situação clínica",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "diagnostico_criança",
         "title": "Descreva qual a doença ou diagnóstico da criança:",
         "subtitle": "Descreva com suas palavras qual a doença ou diagnóstico",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "data_sintomas",
         "title": "Em qual data aproximada começaram os primeiros sinais e sintomas da doença?",
         "subtitle": "Informe aproximadamente quando os sintomas tiveram inicio",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "data",
     },
     {
         "id": "descricao_primeiros_sintomas",
         "title": "Descrição de como ocorreram os primeiros sinais e sintomas (anamnese):",
         "subtitle": "Descreva como quando ocorreram os primeiros sintomas",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "tratamento_esperado",
         "title": "Qual tratamento ou serviço é esperado que a criança receba?",
         "subtitle": "Descreva como o Shriners pode ajudar?",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "tratamentos_anteriores",
         "title": "Quais tratamentos anteriores a criança já recebeu?",
         "subtitle": "Descreva os tratamentos prévios que a criança tenha recebido",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "doenca_genetica",
         "title": "A patologia (doença) é genética?",
         "subtitle": "Se a doença tem cunho genético",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "radio",
         "options": [
             {"value": 1, "description": "SIM"},
             {"value": 2, "description": "NÃO"},
             {"value": 3, "description": "NÃO SEI INFORMAR"},
         ],
     },
     {
         "id": "condicao_especial",
         "title": "Necessita de condição especial de locomoção?",
         "subtitle": "A criança necessita de condição especial para locomoção",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "radio",
         "options": [
             {"value": 1, "description": "SIM"},
             {"value": 2, "description": "NÃO"},
         ],
     },
     {
         "id": "necessidade_crianca",
         "title": "O que precisa?",
         "subtitle": "Escolha a opção necessária para locomoção",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "radio",
         "options": [
          {"value": 1, "description": "OPÇÃO 1"},
          {"value": 2, "description": "OPÇÃO 2"},
          {"value": 3, "description": "OPÇÃO 3"},
          {"value": 4, "description": "OPÇÃO 4"},
          {"value": 5, "description": "OUTRA"},
         ]
     },
     {
         "id": "outra_necessidade_crianca",
         "title": "Outra qual?",
         "subtitle": "Informe o que é necessário para a locomoção",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "data_ultima_consulta",
         "title": "Data da última Consulta?",
         "subtitle": "Informe data da última Consulta",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "data",
     },
     {
         "id": "tipo_parto",
         "title": "Tipo de Parto",
         "subtitle": "Informe o tipo de parto da criança",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "radio",
         "options": [
             {"value": 1, "description": "PARTO NORMAL"},
             {"value": 2, "description": "CESARIANA"},
         ],
     },
     {
         "id": "info_mae",
         "title": "Saberia informar se a mãe tem histórico de aborto e/ou algum tipo de caso de agressão?",
         "subtitle": "Informe se por ventura a mãe já sofreu algum aborto ou se já foi vítima de violência.",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "complicacao_parto",
         "title": "A criança teve complicações clínica ao nascer?",
         "subtitle": "A criança teve alguma complicação clínica ao nascer?",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "radio",
         "options": [
             {"value": 1, "description": "SIM"},
             {"value": 2, "description": "NÃO"},
         ],
     },
     {
         "id": "qual_complicao",
         "title": "Qual Complicação?",
         "subtitle": "",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "radio",
         "options": [
             {"value": 1, "description": "MÁ FORMAÇÃO CONGÊNITA"},
             {"value": 2, "description": "CARDIOVASCULARES"},
             {"value": 3, "description": "NEUROLÓGICAS"},
             {"value": 4, "description": "ALTERAÇÕES NO TRATO GASTROINTESTINAL"},
         ],
     },

     //ANEXAR BOX OU TEAM DRIVE NESSE
     {
         "id": "exame_realizado",
         "title": "Exames realizados",
         "subtitle": "",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "nome_CRM_medico",
         "title": "Nome Completo do Médico e CRM",
         "subtitle": "Informe o médico que esta a tratar da criança caso se aplique",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "especialidade_medico",
         "title": "Especialidade",
         "subtitle": "Informe a especialidade do médico caso saiba",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "telefone_medico",
         "title": "Telefone para contato",
         "subtitle": "Informe o telefone de contato do médico caso saiba",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "local_trabalho_medico",
         "title": "Local onde trabalha",
         "subtitle": "Informe o local onde trabalha caso saiba",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     // informações formulario
     {
         "id": "info_formulario",
         "title": "Por quem este formulário foi preenchido",
         "subtitle": "Informe por quem este formulário foi preenchido",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "radio",
         "options": [
             {"value": 1, "description": "MÃE"},
             {"value": 2, "description": "PAI"},
             {"value": 3, "description": "RESPONSÁVEL LEGAL INFORMADO ACIMA"},
             {"value": 4, "description": "SHRINER-AMAL"},
             {"value": 5, "description": "OUTRO"},
         ],
     },
     {
         "id": "cod_shriner",
         "title": "Código Shriner",
         "subtitle": "Informe o código de Matrícula Shriner",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "nome_shriner",
         "title": "Nome Shriner",
         "subtitle": "",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "clube_shriner",
         "title": "Clube Pertencente",
         "subtitle": "",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "telefone_shriner",
         "title": "Telefone",
         "subtitle": "",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "phone",
     },
     {
         "id": "email_shriner",
         "title": "Email",
         "subtitle": "",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "nome_completo_shriner",
         "title": "Nome Completo",
         "subtitle": "",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "documento_outro",
         "title": "Documento Identidade",
         "subtitle": "Informe o tipo de documento, número, órgão emissor e data do documento de identidade de quem preencheu o formulário",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "CPF_outro",
         "title": "CPF",
         "subtitle": "Informe o número do CPF",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "cpf",
     },
     {
         "id": "info_templo",
         "title": "Como ficou sabendo?",
         "subtitle": "Como ficou sabendo do Templo Amal Shriners e deste formulário?",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "radio",
         "options": [
          {"value": 1, "description": "OPÇÃO 1"},
          {"value": 2, "description": "OPÇÃO 2"},
          {"value": 3, "description": "OPÇÃO 3"},
          {"value": 4, "description": "OUTRO"},
      ],
     },
     {
         "id": "nome_shriner_indicacao",
         "title": "Nome do Shriner que fez a indicação",
         "subtitle": "Indique o nome do Shriner que  fez a indicação",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     },
     {
         "id": "email_acolhedor",
         "title": "Email acolhedor local",
         "subtitle": "Indique o nome do Shriner que  fez a indicação",
         "hint": "",
         "placeholder": "Digite aqui",
         "type": "text",
     }
 ]

class FormularioCrianca extends Component {
  render() {
    return (
      <div className="App">
        <FormTitleComponent title={'Formulário Criança'} />
        <NavigationFormComponent inputs={inputs} />
      </div>
    );
  }
}

export default FormularioCrianca;
