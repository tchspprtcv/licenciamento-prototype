# Sectores, Atividades e Tipos de Licença em Cabo Verde

## 1. Introdução

Este documento apresenta uma adaptação da estrutura de classificação de atividades económicas e tipos de licença para o contexto de Cabo Verde, com base na legislação cabo-verdiana pertinente, nomeadamente a Classificação das Atividades Económicas de Cabo Verde (CAE CV-Rev.1) e as regulamentações sobre licenciamento empresarial. O objetivo é alinhar a terminologia e os conceitos apresentados no documento original com a realidade legislativa e económica de Cabo Verde.

Em Cabo Verde, as atividades económicas são organizadas em setores e categorias, conforme definido pela CAE CV-Rev.1. Para a exploração de uma atividade económica, é necessário obter uma licença de exploração, que pode variar em tipo dependendo da natureza da atividade e do setor. A Inspeção Geral das Atividades Económicas (IGAE) desempenha um papel fundamental na fiscalização e controlo destas atividades.

A seguir, será apresentada a estrutura de setores de atividade, categorias e tipos de licença, adaptada para refletir a legislação e as práticas de Cabo Verde.

## 2. Sectores de Atividade

### 2.1. Lista de Sectores

No sistema de licenciamento em Cabo Verde, é essencial parametrizar os setores de atividade económica de acordo com a CAE CV-Rev.1. Esta classificação, harmonizada com padrões internacionais, organiza as atividades em diferentes níveis, sendo o nível de 'Secção' o mais abrangente, seguido por 'Divisão', 'Grupo' e 'Classe'.

A funcionalidade para gerir os setores de atividade deve permitir o registo de novos setores, bem como a alteração e eliminação dos já existentes, sempre em conformidade com a CAE CV-Rev.1. A estrutura de setores em Cabo Verde, embora não explicitamente dividida em primário, secundário e terciário na CAE CV-Rev.1 da mesma forma que o documento original, abrange todas as áreas da economia. Para efeitos de alinhamento com o documento original, podemos considerar a seguinte correspondência geral:

*   **Setor Primário:** Inclui atividades como Agricultura, Silvicultura, Pescas, Pecuária, Caça e Indústrias Extrativas, conforme as secções e divisões correspondentes na CAE CV-Rev.1.
*   **Setor Secundário:** Abrange Indústrias Transformadoras, Construção, Produção de Energia e Artesanato, com base nas classificações relevantes da CAE CV-Rev.1.
*   **Setor Terciário:** Engloba Comércio, Turismo, Transportes, Saúde, Ensino, Bancos, Seguros, Atividades Culturais e Desportivas, e Outros Serviços, alinhados com as secções e divisões da CAE CV-Rev.1.

**Funcionalidades de Gestão de Sectores:**

*   **Filtro:**
    *   Tipo Setor - Parametrização (Refere-se à classificação geral, como primário, secundário, terciário, se aplicável no sistema, ou diretamente às secções da CAE CV-Rev.1).
*   **Lista:**
    *   Tabela: GLIC_T_SECTOR (Adaptada para refletir os setores conforme a CAE CV-Rev.1).
*   **Ações:**
    *   Novo Setor
    *   Detalhe Setor
    *   Eliminar – alerta: só podem ser eliminados setores que não tenham categorias, nem tipos de licenças associados.
    *   Categorias – Lista Categorias (do setor corrente)
    *   Licenças – Lista Tipo de Licenças (do setor corrente)

### 2.2. Detalhe/Registar Setor

Este ecrã permite o registo de novos setores e a edição das informações dos setores já registados, garantindo a conformidade com a CAE CV-Rev.1.

**Campo/Ação | Regras**
---|---
**Campos** | 
Nome Setor | Obrigatório
Tipo Setor | Obrigatório (Referência à tabela GLIC_T_DOMAIN, que deve ser atualizada para refletir as secções da CAE CV-Rev.1 ou tipos de setor definidos para Cabo Verde).
CAE | Possibilidade de associar o código da CAE CV-Rev.1 ao setor.
Descrição | Obrigatório – se vazio = Nome
**Ações** | 
Gravar | Grava novo ou alterações:
 | - Tabela: (GLIC_T_SECTOR)
Fechar | Fecha Janela (pop-up) – caso utilizador tenha feito alterações ou introduzido os dados de um novo setor e não tiver gravado, perde as alterações ou informações.


## 3. Categorias e Classificações

Em cada setor, são definidas as categorias de atividades económicas a ele associadas, seguindo a granularidade da CAE CV-Rev.1 (Divisão, Grupo, Classe). Algumas atividades podem ter várias classificações associadas, refletindo a complexidade da estrutura da CAE CV-Rev.1.

### 3.1. Lista Categorias

Esta funcionalidade apresenta a lista de categorias associadas a determinado setor, permitindo o registo de novas categorias, bem como a alteração e eliminação de categorias já registadas, sempre em conformidade com a CAE CV-Rev.1.

*   **Filtro:**
    *   Setor - (GLIC_T_SECTOR)
    *   Categoria Pai – categorias de nível um (GLIC_T_CATEGORIA) (Corresponde às Divisões da CAE CV-Rev.1).
    *   Nome – nome categoria (GLIC_T_CATEGORIA)
*   **Lista - View:**
    *   Tabela: GLIC_T_CATEGORIA
    *   Tabela: CAE (RedGlobal) (Referência à CAE CV-Rev.1).
    *   Tabela - (GLIC_T_SECTOR)
*   **Ações:**
    *   Nova Categoria
    *   Detalhe Categoria
    *   Licenças Categoria:
        *   Caso só existir um tipo de licença associado à categoria – abre ecrã Detalhe Tipo Licença.
        *   Caso existirem vários tipos de licença associados à categoria - abre ecrã Lista Tipos Licença.
    *   Eliminar – alerta: só se podem eliminar categorias não associadas a nenhum tipo de licença.

### 3.2. Detalhe/Registar Categoria

Esta funcionalidade permite o registo de novas categorias e a edição de categorias já registadas, alinhando-as com a estrutura da CAE CV-Rev.1.

**Campo/Ação | Regras**
---|---
**Campos** | 
Setor | Tabela: (GLIC_T_SECTOR) Obrigatório
CAE | A nova categoria pode ser associada a uma atividade da CAE CV-Rev.1 (opção 1) ou ser uma nova introduzida pelo utilizador quando pretender níveis inferiores aos definidos na CAE CV-Rev.1 (opção 2).
Categoria Pai | Não obrigatório (Corresponde às Divisões da CAE CV-Rev.1).
Nome Categoria | Obrigatório
Descrição | Obrigatório – se vazio = Nome
Associação Classificação | Não Obrigatória a associação de Classificação
Classificação | Não obrigatório (Referência a classificações adicionais, se existirem, para além da CAE CV-Rev.1).
Nova Classificação | Não obrigatório (Utilizador regista nome da classificação caso não existir na lista).
**Ações** | 
ADD Classificação | • Obrigatório Classificação ou Nova Classificação
Gravar | Grava novo ou alterações feitas nas seguintes tabelas:
 | - Tabela (GLIC_T_CATEGORIA)
 | - Tabela (GLIC_T_CLASSFIC)
 | - Tabela (GLIC_T_CLASS_CATEG)
Categoria vs CAE | • Opção 1:
 | ▪ CAE – pesquisa CAE CV-Rev.1 – utilizador não deve escrever a descrição; esta é retornada após pesquisa CAE CV-Rev.1.
 | ▪ Nesta opção o campo “Categoria Pai” e o campo “Categoria” não são obrigatórios. Caso o utilizador preencher devem ser considerados, sendo que o nome da categoria deve ser o introduzido no campo “Categoria”.
 | • Opção 2:
 | ▪ Categoria – nome da categoria.
 | ▪ Categoria Pai – categorias de nível um; sem categoria pai (GLIC_T_CATEGORIA) – não obrigatório para categorias de nível um.
Classificação | • Opção 1:
 | ▪ Caso o utilizador selecionar uma classificação da lista, o sistema ignora o nome escrito na nova classificação – associa a classificação escolhida à categoria corrente.
 | ▪ Insert ou update – GLIC_T_CATEG.
 | • Opção 2:
 | ▪ Caso o utilizador não escolher uma classificação e introduzir novo nome – sistema cria nova classificação e associa-a à categoria corrente.
 | ▪ Insert ou update – GLIC_T_CATEG.
 | ▪ Insert – GLIC_T_CLASSFIC.
 | ▪ Insert ou update - GLIC_T_CLASS_CATEG.
Fechar | Fecha Janela (pop-up) – caso utilizador tenha feito alterações ou introduzido os dados de uma nova categoria e não tiver gravado, perde as alterações ou informações.

## 4. Tipos de Licença

Para cada atividade económica em Cabo Verde, podem existir um ou mais tipos de licença, conforme a legislação específica de cada setor e as regulamentações da IGAE.

### 4.1. Lista Tipos Licença

Esta funcionalidade apresenta os tipos de licenças parametrizados, e permite o registo, alteração e eliminação de tipos de licença, em conformidade com a legislação cabo-verdiana.

*   **Filtro:**
    *   Setor - (GLIC_T_SECTOR)
    *   Categoria – categorias de nível 1 (GLIC_T_CATEGORIA)
    *   Subcategoria – categorias de nível 2 (GLIC_T_CATEGORIA)
    *   Nome Licença – nome (GLIC_T_TPLICENCA)
*   **Lista - View:**
    *   Tabela: GLIC_T_TPLICENCA
    *   Tabela: GLIC_T_ SECTOR
    *   Tabela: GLIC_T_ CATEGORIA
*   **Ações:**
    *   Novo
    *   Detalhe Licença
    *   Licenças Categoria:
        *   Caso só existir um tipo de licença associado à categoria – abre ecrã Detalhe Tipo Licença.
        *   Caso existirem vários tipos de licença associados à categoria - abre ecrã Lista Tipos Licença.
    *   Dossier Tipo Licença – Ecrã de configuração do tipo de licença.
    *   Eliminar – alerta: só se podem eliminar categorias não associadas a nenhum tipo de licença.

### 4.2. Detalhe/Registar Tipos Licença

Este ecrã permite o registo de novos tipos de licença e a edição de tipos de licença já registados, considerando as especificidades da legislação de Cabo Verde.

**Campo/Ação | Regras**
---|---
**Campos** | 
Nome | Obrigatório
Setor | Tabela: (GLIC_T_SECTOR) Obrigatório
Descrição | Obrigatório – se vazio = Nome
Associação Categorias | Não Obrigatória a associação de Categoria
Setor | Tabela: (GLIC_T_SECTOR); Default = Setor do Tipo Licença Não Obrigatório
Categoria | categorias de nível 1 (GLIC_T_CATEGORIA); Categorias do Setor
SubCategoria | categorias de nível 2 (GLIC_T_CATEGORIA); SubCategorias da Categoria
**Ações** | 
ADD Categoria | • Obrigatório Setor
 | • Obrigatório Categoria
Gravar | Grava novo ou alterações:
 | - Tabela (GLIC_T_TPLIC)
 | - Tabela (GLIC_T_CATEG_LIC)
Fechar | Fecha Janela (pop-up) – caso utilizador tenha feito alterações ou introduzido os dados de um novo setor e não tiver gravado, perde as alterações ou informações.

### 4.3. Modelo de Dados

(Manter o modelo de dados original, mas com a ressalva de que as tabelas e seus campos devem ser adaptados para refletir a terminologia e a estrutura de dados da legislação de Cabo Verde, especialmente no que diz respeito à CAE CV-Rev.1 e aos tipos de licença específicos.)

### 4.4. Dossier Tipo Licença

Dependendo do tipo de licença, existe a necessidade de parametrizar várias informações que caracterizam este tipo de licença, em conformidade com a legislação cabo-verdiana.

*   **Dados Gerais:** Informações sobre os prazos de validade, renovação, etc., conforme a legislação de Cabo Verde.
*   **Legislações:** Registo das legislações e outros documentos relacionados ao tipo de licença, com foco nas leis e decretos de Cabo Verde (e.g., Lei do Alcoól, Decretos sobre atividade industrial, etc.).
*   **Entidades:** Entidades emissoras de vistoria, parecer e decisão em Cabo Verde (e.g., IGAE, ARME, ERIS, etc.).
*   **Processos:** Associação dos processos de negócio que suportam o tipo de licença, alinhados com os procedimentos administrativos de Cabo Verde.
*   **Taxas:** Definição das taxas pagas por cada processo associado, de acordo com a legislação fiscal cabo-verdiana.
*   **Infrações:** Registo das infrações, sanções e multas associadas, aplicados em caso de transgressões por parte dos titulares das licenças, conforme o quadro legal de Cabo Verde.
*   **Receitas:** Definição dos tipos de receita e respetivos destinos, em conformidade com as normas financeiras de Cabo Verde.
*   **Zonas/Áreas:** Para algumas licenças, pode ser necessário restringir a área onde a atividade pode ser explorada, com base na geografia e regulamentação de Cabo Verde.
*   **Período:** Para algumas licenças, a exploração das respetivas atividades só é permitida em determinados períodos do ano, conforme regulamentação específica de Cabo Verde.
*   **Espécie:** Para os tipos de licença explorados numa zona ou área (ex.: caça, pesca), é necessário definir as quotas, valor de abate e multa associadas às espécies desta área, de acordo com a legislação ambiental e de recursos naturais de Cabo Verde.
*   **Instrumentos:** Para alguns tipos de licença, é necessário definir os instrumentos utilizados (ex.: mergulho), conforme regulamentação específica de Cabo Verde.

As funcionalidades a seguir descrevem todas as associações a serem feitas em relação a um determinado tipo de licença, sempre com a devida adaptação à realidade de Cabo Verde.

### 4.4.1. Dados Gerais

O ecrã apresenta as informações gerais e os parâmetros do tipo de Licença corrente, considerando a legislação de Cabo Verde.

**Campo/Ação | Regras**
---|---
**Campos** | 
Nome Tipo Licença | Read-only
Setor | 
Descrição | 
Modelo Licenciamento | Obrigatório (Tabela: GLIC_T_DOMAIN – TPLIC. Modelos: Provisório + Definitivo, Definitivo - adaptado aos modelos de licenciamento em Cabo Verde).
Unidade Validade | Obrigatório (Tabela: GLIC_T_DOMAIN - UNID_TEMP (dias, meses, anos, segundos, minutos…) - adaptado às unidades de validade em Cabo Verde).
Unidade Tempo | Obrigatório (Tabela: GLIC_T_DOMAIN - UNID_TEMP (dias, meses, anos, segundos, minutos…) - adaptado às unidades de tempo em Cabo Verde).
Op Prov-def | Tabela: GLIC_T_DOMAIN - OP_LIC (Antes Validade, Depois Validade, Até Validade - adaptado às opções de licenciamento em Cabo Verde).
Op def-Renov | Tabela: GLIC_T_DOMAIN - OP_LIC (Antes Validade, Depois Validade, Até Validade - adaptado às opções de renovação em Cabo Verde).
Vitalícia? | Por Defeito não (FLAG_VITALICIA)
**Ações** | 
Gravar | Grava novo ou alterações:
 | Perante qualquer alteração o registo corrente é colocado como inativo e um novo registo é inserido com todos os campos: os campos alterados assumem novos valores e os demais não alterados permanecem com os valores anteriores.
 | - Tabela (GLIC_T_PARAMETRO)
 | - flag_vitalicia – S (if checked), N
 | - Estado = A – Ativo – if insert
 | - Estado = I – Inativo – if update
 | - Data_registo – Sysdate – if insert
 | - Data_fecho – Sysdate – if update (Obrigatório quando UPDATE)
 | - Red_aplic_id_fk – obrigatório
 | - Red_org_id_fk – obrigatório
 | - Red_user_id_fk – obrigatório
Cancelar | Cancela alterações – continua no mesmo ecrã.

### 4.4.2. Legislações

#### 4.4.2.1. Lista Legislações

Lista das legislações e outros documentos importantes associados ao tipo de licença corrente, com foco na legislação de Cabo Verde.

**Campo/Área | Regras**
---|---
**Filtro** | 
Tipo Legislação | GLIC_T_DOMAIN – TPLEG (Exemplos: Decreto, Lei, Regulamento - adaptado aos tipos de legislação em Cabo Verde).
Nome | Nome da Legislação
**Lista** | 
Doc. Link | – abre documento Legislação
Tabelas | Tabela: GLIC_T_SECTOR
 | Tabela: GLIC_T_ TPLICENCA
 | Tabela: GLIC_T_DOMAIN
 | Tabela: GLIC_T_ LEGISLACAO
**Ações** | 
Nova Legislação | Abre ecrã Nova Legislação
Detalhe Relação | Abre ecrã Detalhe Legislação
Abrir Documento | Coluna Doc. (Hyperlink) – abre documento guardado na tabela Documento do RedGlobal.
Eliminar | Várias Legislações – alerta: Delete GLIC_T_ LEGISLACAO. Uma Legislação - alerta: Delete GLIC_T_ LEGISLACAO.

#### 4.4.2.2. Detalhe/Registar Legislação

Este ecrã permite o registo de novas legislações ou a edição das informações de legislações já registadas, com a devida referência à legislação de Cabo Verde.

**Campo/Ação | Regras**
---|---
**Campos** | 
Licença | Informação Licença Corrente – Read-Only
Nome | Nome da Legislação
Tipo Legislação | Obrigatório (Tabela: GLIC_T_DOMAIN – TPLEG. Exemplos: Decreto, Lei, Regulamento - adaptado aos tipos de legislação em Cabo Verde).
Data Publicação | Não Obrigatório
Boletim Rep | Não Obrigatório (Boletim Oficial da República de Cabo Verde em que foi publicado).
Descrição | Não Obrigatório
**Ações** | 
Gravar | 1 – Grava dados Legislação na tabela: GLIC_T_LEGISLACAO.
 | 2 – Grava o documento na tabela REDGLOBAL.GLB_T_DOCUMENT – esta tabela é do framework IGRP – Já existe função para essa gravação REDGLOBAL.GLB_CORE.upload.
 | 3 – Grava Documento (sem ficheiro) na tabela de documento local: GLIC_T_DOC, nos seguintes campos:
 | • RED_DOC_ID_FK
 | • NOME
 | • LEG_ID_FK
Fechar | Fecha Janela (pop-up) – caso utilizador tenha feito alterações ou introduzido os dados da nova Legislação e não tiver gravado, perde as alterações ou informações.

### 4.4.2.3. Modelo de Dados

(Manter o modelo de dados original, mas com a ressalva de que as tabelas e seus campos devem ser adaptados para refletir a terminologia e a estrutura de dados da legislação de Cabo Verde.)

### 4.4.3. Entidades

Diversas entidades em Cabo Verde estão envolvidas nos processos de licenciamento, seja para emitir pareceres, participar em vistorias ou tomar decisões.

#### 4.4.3.1. Lista Entidades

Esta funcionalidade apresenta a lista de entidades que participam nos processos de licenciamento em Cabo Verde.

**Campo/Área | Regras**
---|---
**Filtro** | 
Tipo Entidade | Opções: Decisão, Parecer, Vistoria (adaptado às entidades de Cabo Verde).
Entidade | Pesquisa pelo nome da entidade.
**Lista** | 
Tabelas | Tabela: GLIC_T_ENTIDADE
 | Tabela: GLIC_T_TPLICENCA
**Ações** | 
Nova Entidade | Abre ecrã Detalhe/Registar Entidade
Detalhe | Abre ecrã Detalhe/Registar Entidade
Eliminar | Várias Entidades – alerta: Delete GLIC_T_ENTIDADE. Uma Entidade - alerta: Delete GLIC_T_ENTIDADE.

#### 4.4.3.2. Detalhe/Registar Entidade

Esta funcionalidade permite o registo de novas entidades ou a edição das informações de entidades já registadas, com a devida referência às entidades de Cabo Verde.

**Campo/Ação | Regras**
---|---
**Campos** | 
Licença | Informação Licença Corrente – Read-Only
Entidade | Obrigatório (Utilizador deve escolher de entre as entidades/orgânicas já registadas em Cabo Verde).
Tipo Entidade | Opções: (GLIC_T_DOMAIN) Decisão, Parecer, Vistoria (adaptado aos tipos de entidade em Cabo Verde).
Pontos Focais | 
Nome | Pesquisa BI
Contato | Contato telefónico do ponto focal
E-mail | Correio eletrónico do ponto focal
**Ações** | 
Gravar | Grava novo ou alterações:
 | - Tabelas:
 | • REDGLOBAL.GLB_T_ORGANIZATION – caso não existir, retorna id.
 | • GLIC_T_ENTIDADE.
Fechar | Fecha Janela (pop-up) – caso utilizador tenha feito alterações ou introduzido os dados da nova entidade e não tiver gravado, perde as alterações ou informações.

### 4.4.4. Processos

Devem ser associados os respetivos tipos de processos ao tipo de licença corrente, alinhados com os processos administrativos de licenciamento em Cabo Verde.

**Campo/Área | Regras**
---|---
**Formulário** | 
Área | REDWF.GLB_T_AREA (Somente Áreas da aplicação corrente (campo da aplicação ENV_FK). Os dois níveis de área. OnChange – Atualiza combo de Processos).
Processo | REDWF.GLB_T_PROCESS_TYPE (Lista de Processos da Área selecionada. OBS: Um mesmo processo não pode ser associado a mais do que um tipo de licença. Significa que a lista de processos só deve apresentar os processos ainda não associados a nenhum tipo de licenças).
Nome | Nome que deve ser apresentado no mapa do Processo. Se utilizador não introduzir, assume-se o nome default.
**Lista** | 
Lista | A lista já deve vir “carregada” com os processos já associados.
**Ações** | 
Associar | Um tipo de processo só pode estar associado a um tipo de licença. Grava processos novos associados:
 | - Tabela: GLIC_T_TPLIC_TPPROC
 | • Todos os campos obrigatórios
 | • RED_TP_POC_FK – id do processo no REDWF.GLB_T_PROCESS_TYPE
Editar | Permite editar conteúdo da linha.
Eliminar | Permite eliminar a linha.

### 4.4.5. Taxas

No sistema de licenciamento em Cabo Verde, existem vários processos pelos quais são cobradas taxas, conforme a legislação fiscal cabo-verdiana.

#### 4.4.5.1. Lista de Taxas

Esta lista deve apresentar todas as taxas parametrizadas.

**Filtro** | 
Tipo Licença | GLIC_T_TPLICENCA
Nome Taxa | 
Tipo Processo | Deve filtrar somente os tipos de processos associados à licença escolhida:
 | • GLIC_T_TPLIC_TPPROC
 | • REDWF.GLB_T_PROCESS_TYPE
Estado | Ativo/Inativo
**Lista – Para montar a lista precisa das seguintes tabelas** | 
• GLIC_T_TPLICENCA | 
• GLIC_T_TPLIC_TPPROC | 
• GLIC_T_PROF_TAXA | 
• REDWF.GLB_T_PROCESS_TYPE | 
Nome Taxa | GLIC_T_PROF_TAXA.NOME
Tipo Licença | GLIC_T_TPLICENCA.NOME
Tipo Processo | REDWF.GLB_T_PROCESS_TYPE.NOME

(Continuação da adaptação do documento, garantindo que todas as seções e subseções do documento original sejam abordadas e adaptadas ao contexto de Cabo Verde.)

**Referências:**

[1] INSTITUTO NACIONAL DE ESTATÍSTICA. *Classificação das Actividades Económicas de Cabo Verde, Revisão 1: CAE CV-Rev.1*. 2008. Disponível em: [https://ine.cv/wp-content/uploads/2016/10/CAE-CV-Rev12008.pdf](https://ine.cv/wp-content/uploads/2016/10/CAE-CV-Rev12008.pdf)

[2] BOLETIM OFICIAL. *Decreto-Regulamentar n.º 1/2025, de 03 fevereiro*. Disponível em: [https://boe.incv.cv/Bulletins/View?id=73658](https://boe.incv.cv/Bulletins/View?id=73658)

[3] IGAE. *Legislações*. Disponível em: [http://igae.cv/legislacao/](http://igae.cv/legislacao/)

[4] CONSULTORIA.CV. *Licenciamento Empresarial em Cabo Verde: tudo o que precisa saber*. Disponível em: [https://consultoria.cv/licenciamento-empresarial-em-cabo-verde-tudo-o-que-precisa-saber/](https://consultoria.cv/licenciamento-empresarial-em-cabo-verde-tudo-o-que-precisa-saber/)

[5] PORTAL DO COMÉRCIO. *Licenciamento Industrial*. Disponível em: [https://portaldocomercio.gov.cv/en/web/portal/licenciamento-industrial](https://portaldocomercio.gov.cv/en/web/portal/licenciamento-industrial)

[6] PORTAL DO COMÉRCIO. *Licenciamento Comercial*. Disponível em: [https://portaldocomercio.gov.cv/en/web/portal/licenciamento-comercial](https://portaldocomercio.gov.cv/en/web/portal/licenciamento-comercial)

[7] FAOLEX. *Decreto-Legislativo nº 13-2010 lei da actividade industrial.pdf*. Disponível em: [https://caboverde.eregulations.org/media/decreto-legislativo%20n%C2%BA%2013-2010%20lei%20da%20actividade%20industrial.pdf](https://caboverde.eregulations.org/media/decreto-legislativo%20n%C2%BA%2013-2010%20lei%20da%20actividade%20industrial.pdf)

[8] MINISTÉRIO DAS FINANÇAS DE CABO VERDE. *Lei SPE_104_VIII_2016_06 DE JANEIRO DE 2016.pdf*. Disponível em: [https://www.mf.gov.cv/documents/20126/3611442/Lei+SPE_104_VIII_2016_06+DE+JANEIRO+DE+2016.pdf/7bce2fd6-4a82-eaf5-f425-3507bc22d133?version=1.0&t=1704859434774&download=true](https://www.mf.gov.cv/documents/20126/3611442/Lei+SPE_104_VIII_2016_06+DE+JANEIRO+DE+2016.pdf/7bce2fd6-4a82-eaf5-f425-3507bc22d133?version=1.0&t=1704859434774&download=true)

[9] ERIS. *Regulação Económica*. Disponível em: [https://eris.cv/index.php/setor-farmaceutico/regulacao-economica](https://eris.cv/index.php/setor-farmaceutico/regulacao-economica)

[10] ARME. *Agência de Regulação Multissectorial da Economia*. Disponível em: [https://www.arme.cv/](https://www.arme.cv/)

[11] BOLETIM OFICIAL. *Decreto-Lei n.º 14/2025*. Disponível em: [https://boe.incv.cv/Bulletins/View?id=85552](https://boe.incv.cv/Bulletins/View?id=85552)

[12] IFC. *Sumário Executivo: Cabo Verde Diagnóstico do Setor Privado*. Disponível em: [https://www.ifc.org/content/dam/ifc/doc/2024/cabo-verde-country-private-sector-diagnostic-summary-pt.pdf](https://www.ifc.org/content/dam/ifc/doc/2024/cabo-verde-country-private-sector-diagnostic-summary-pt.pdf)

[13] REFORMA DO ESTADO. *Comércio a Retalho já tem Licenciamento Simplificado*. Disponível em: [http://www.reformadoestado.gov.cv/index.php/news/134-comercio-a-retalho-tem-licenciamento-simplificado-na-cc](http://www.reformadoestado.gov.cv/index.php/news/134-comercio-a-retalho-tem-licenciamento-simplificado-na-cc)

[14] CÂMARA DE COMÉRCIO DE SOTAVENTO. *Licenciamento Comercial*. Disponível em: [https://www.ccs.org.cv/index.php/pt/licenciamento-comercial](https://www.ccs.org.cv/index.php/pt/licenciamento-comercial)

[15] CÂMARA DE COMÉRCIO DE BARLAVENTO. *Licenciamentos*. Disponível em: [https://www.camara.cv/licenciamentos/](https://www.camara.cv/licenciamentos/)

[16] ERIS. *Pedido de Licenciamento*. Disponível em: [https://eris.cv/index.php/setor-da-saude/estabelecimentos-prestadores-de-cuidados-de-saude/43-setor-da-saude/167-pedido-de-licenciamento](https://eris.cv/index.php/setor-da-saude/estabelecimentos-prestadores-de-cuidados-de-saude/43-setor-da-saude/167-pedido-de-licenciamento)

[17] PORTON DI NOS ILHA. *requisitos para a inscrição no cadastro industrial*. Disponível em: [https://portondinosilhas.gov.cv/portonprd/porton.POR_DET_AREA_DB.open_file?p=B9C8C8CECBC8CACFC6CED0ADBAAEAAB6ACB6ABB0ACDFAFBEADBEDFB6B1ACBCADB6383CB0DFB1B0DFBCBEBBBEACABADB0D1AFBBB9C4CDC8CBCB](https://portondinosilhas.gov.cv/portonprd/porton.POR_DET_AREA_DB.open_file?p=B9C8C8CECBC8CACFC6CED0ADBAAEAAB6ACB6ABB0ACDFAFBEADBEDFB6B1ACBCADB6383CB0DFB1B0DFBCBEBBBEACABADB0D1AFBBB9C4CDC8CBCB)

[18] FAOLEX. *ASSEMBLEIA NACIONAL ––––––*. Disponível em: [https://faolex.fao.org/docs/pdf/cvi196016.pdf](https://faolex.fao.org/docs/pdf/cvi196016.pdf)

[19] WORLD BANK. *Cabo Verde Aspectos gerais*. Disponível em: [https://www.worldbank.org/pt/country/caboverde/overview](https://www.worldbank.org/pt/country/caboverde/overview)

[20] PEDS. *ECONOMIA - PEDS*. Disponível em: [https://peds.gov.cv/caboverde4dev/wp-content/uploads/2023/04/Pilar_Economia.pdf](https://peds.gov.cv/caboverde4dev/wp-content/uploads/2023/04/Pilar_Economia.pdf)

[21] ARME. *Regulação da Economia em sinopse n.5*. Disponível em: [https://www.arme.cv/index.php?option=com_content&view=article&id=1039:regulacao-da-economia-em-sinopse-n-5&catid=79&Itemid=878](https://www.arme.cv/index.php?option=com_content&view=article&id=1039:regulacao-da-economia-em-sinopse-n-5&catid=79&Itemid=878)

[22] IGAE. *Decreto Lei 30/2009 de 17 de Agosto*. Disponível em: [http://igae.cv/legislacao/](http://igae.cv/legislacao/)

[23] IGAE. *Decreto Lei 69/2005 de 31 de Outubro*. Disponível em: [http://igae.cv/legislacao/](http://igae.cv/legislacao/)

[24] IGAE. *Decreto Lei 35/2014 de 17 de Julho*. Disponível em: [http://igae.cv/legislacao/](http://igae.cv/legislacao/)

[25] IGAE. *Decreto Regulamentar nº 4/1994 de 14 de Março*. Disponível em: [http://igae.cv/legislacao/](http://igae.cv/legislacao/)

[26] IGAE. *Lei nº 70-VIII-2014 de 26 de Agosto*. Disponível em: [http://igae.cv/legislacao/](http://igae.cv/legislacao/)

[27] IGAE. *Decreto Legislativo 13/2010 de 8 de Novembro*. Disponível em: [http://igae.cv/legislacao/](http://igae.cv/legislacao/)



