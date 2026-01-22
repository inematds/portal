# Portal INEMA - Guia de Atualizações

## Estrutura do Projeto

- `data.js` - Dados dos cursos (platformsData) e histórico de atualizações (updatesData)
- `index.html` - Estrutura HTML do portal
- `styles.css` - Estilos CSS
- `script.js` - Funcionalidades JavaScript

## Padrões para Adicionar Novos Cursos

### 1. Adicionar curso em `data.js`

Os cursos devem estar em **ordem alfabética** pelo título.

```javascript
{
    id: [próximo ID sequencial],
    title: "SIGLA - Nome do Curso",
    description: "Descrição breve do curso.",
    icon: "[emoji apropriado]",
    tags: ["Tag1", "Tag2", "Tag3"],
    url: "https://inematds.github.io/[REPOSITORIO]"
}
```

### 2. Adicionar ao histórico de atualizações

Adicionar no **início** do array `updatesData` (mais recente primeiro):

```javascript
{ date: "YYYY-MM-DD", title: "Nome do Curso", type: "novo", url: "URL" }
```

Tipos: `"novo"` ou `"atualizado"`

### 3. Commit pattern

```
feat: Adiciona curso [NOME DO CURSO]

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

## Seção "Últimas Atualizações"

- Mostra **5 atualizações** por padrão
- Expande para **20 atualizações** ao clicar em "Ver mais"
- Localização: acima da busca de cursos

## Repositórios GitHub

- Mostrar **12 repositórios mais recentes** (excluindo "portal")
- Adicionar **6 repositórios com mais estrelas** no final
- Total: 18 repositórios

## Badge "Participe da Comunidade"

- Localização: topo esquerdo do header
- Imagem: `doc/conviteinemap.png`
- Largura da imagem: 120px
- Texto abaixo: "Participe da Comunidade" (1.1rem, mesmo tamanho da tagline)
- Link: https://inema.vip
- Centralizado verticalmente no header

## Buscar informações de novo curso

Usar WebFetch na URL do curso para extrair:
- Nome completo
- Descrição
- Tags relevantes
- Escolher ícone apropriado

## Comandos Git

Sempre fazer commit e push após alterações:
```bash
git add [arquivos] && git commit -m "mensagem" && git push
```
