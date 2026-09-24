(function () {
  // O decap-cms.js (carregado via <script> no admin/index.html) expõe as globais
  // `h` (equivalente a React.createElement) e `createClass` (React.createClass).
  // NÃO existe `window.React` nesse carregamento — usar window.React.createElement
  // falha silenciosamente e o Decap volta para a prévia de texto padrão.
  const h = window.h;

  function value(entry, path, fallback) {
    const result = entry.getIn(['data', ...path]);
    return result == null ? fallback : result;
  }

  function list(entry, path) {
    const result = entry.getIn(['data', ...path]);
    return result && typeof result.toArray === 'function' ? result.toArray() : [];
  }

  function SitePreview({ entry }) {
    const marca = value(entry, ['marca', 'nomeTexto'], 'mateus_pala_cubbi');
    const frase = value(entry, ['topo', 'frase'], 'Curiosidade que vira código, atenção que vira proteção.');
    const menu = list(entry, ['topo', 'sumario']);
    const sobreTitulo = value(entry, ['sobre', 'titulo'], 'Sobre mim');
    const paragrafos = list(entry, ['sobre', 'paragrafos']);
    const cadernoTitulo = value(entry, ['caderno', 'titulo'], 'Meu Caderno');
    const atividades = list(entry, ['caderno', 'atividades']);
    const conhecimentos = list(entry, ['conhecimentos', 'itens']);

    return h('main', { className: 'site-preview' },
      h('style', null, `
        * { box-sizing: border-box; }
        body { margin: 0; background: #15161d; color: #f3f5f9; font-family: Arial, sans-serif; }
        .site-preview { min-height: 100vh; background: #15161d; }
        .hero { padding: 28px 6%; background: linear-gradient(180deg,#06073a,#0b0d52); }
        .brand { color: #79eea0; font: 24px monospace; margin: 0 0 22px; }
        .note { display: inline-block; padding: 14px 18px; margin-bottom: 18px; background: #fdf9ec; color: #2c2a1c; transform: rotate(-1deg); box-shadow: 0 5px 12px #0006; }
        .menu { display: flex; flex-wrap: wrap; gap: 10px; }
        .menu span { padding: 9px 13px; background: #fdf9ec; color: #2c2a1c; box-shadow: 0 4px 9px #0006; }
        section { max-width: 850px; margin: 0 auto; padding: 36px 6%; }
        h2 { color: #79eea0; margin: 0 0 18px; }
        p { color: #c2c7d5; line-height: 1.65; }
        .impact { max-width: none; background: #1d202b; color: #f4d35e; text-align: center; font-family: monospace; }
        .cards { display: grid; gap: 12px; }
        .card { padding: 16px; border: 1px solid #3c4254; border-radius: 8px; background: #1d202b; }
        .card strong { color: #fff; }
        .progress { height: 7px; margin-top: 10px; background: #3c4254; border-radius: 99px; overflow: hidden; }
        .progress i { display: block; height: 100%; background: #79eea0; }
        .empty { color: #aab0c2; font-style: italic; }
      `),
      h('header', { className: 'hero' },
        h('div', { className: 'brand' }, '[', marca, ']'),
        h('div', { className: 'note' }, frase),
        h('nav', { className: 'menu', 'aria-label': 'Prévia do menu' },
          menu.length ? menu.map((item, index) => h('span', { key: index }, item.get('texto') || 'Botão')) : h('span', null, 'Botões do menu aparecerão aqui')
        )
      ),
      h('section', null,
        h('h2', null, sobreTitulo),
        paragrafos.length ? paragrafos.map((texto, index) => h('p', { key: index }, texto)) : h('p', { className: 'empty' }, 'Adicione um parágrafo para vê-lo nesta prévia.')
      ),
      h('div', { className: 'impact' }, value(entry, ['fraseImpacto1'], 'Sua frase de impacto aparecerá aqui.')),
      h('section', null,
        h('h2', null, cadernoTitulo),
        h('div', { className: 'cards' }, atividades.length ? atividades.map((atividade, index) => h('article', { className: 'card', key: index },
          h('strong', null, atividade.get('titulo') || 'Atividade'),
          h('p', null, atividade.get('resumo') || 'Resumo da atividade')
        )) : h('p', { className: 'empty' }, 'Adicione uma atividade para vê-la nesta prévia.'))
      ),
      h('div', { className: 'impact' }, value(entry, ['fraseImpacto2'], 'Sua segunda frase de impacto aparecerá aqui.')),
      h('section', null,
        h('h2', null, value(entry, ['conhecimentos', 'titulo'], 'Conhecimentos em construção')),
        h('p', null, value(entry, ['conhecimentos', 'intro'], 'O texto de introdução aparecerá aqui.')),
        h('div', { className: 'cards' }, conhecimentos.length ? conhecimentos.map((item, index) => h('article', { className: 'card', key: index },
          h('strong', null, item.get('nome') || 'Conhecimento'),
          h('p', null, item.get('descricao') || 'Descrição do conhecimento'),
          h('div', { className: 'progress' }, h('i', { style: { width: `${item.get('nivel') || 0}%` } }))
        )) : h('p', { className: 'empty' }, 'Adicione um conhecimento para vê-lo nesta prévia.'))
      )
    );
  }

  CMS.registerPreviewTemplate('site', SitePreview);
})();

/* O Decap carrega este arquivo automaticamente por estar em /admin/preview.js. */
/* A prévia mostra as alterações enquanto você edita; o site público continua sendo o resultado publicado. */
