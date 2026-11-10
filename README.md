# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

## Testes visuais (Playwright)

Os testes tiram "fotos" (screenshots) da página e comparam com fotos de referência,
chamadas de **baselines**, que ficam em `tests/visual.spec.js-snapshots/`.

As baselines são geradas no **Docker (Linux)**, o mesmo ambiente do CI.
Por isso os arquivos terminam com `-chromium-linux.png`.

### Quando usar cada comando

| Comando                            | Quando usar                                                                                                               |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `npm run test:docker`              | Antes de fazer push, para conferir se algo mudou visualmente. Igual ao CI. Se falhar, o report abre sozinho no navegador. |
| `npm run test:docker:update`       | Quando você mudou o visual **de propósito** e quer criar ou atualizar as baselines.                                       |
| `npm run test:report`              | Para abrir de novo o report da última execução.                                                                           |
| `npm run test:ui`                  | Para explorar e depurar os testes no seu computador. Não serve para comparar com as baselines do Linux.                   |
| `npm test` / `npm run test:update` | Rodam direto no Mac. **Evite**: o Mac cria baselines `-darwin.png`, que não batem com o CI.                               |

### Exemplo 1: criando ou atualizando baselines

1. Você muda a cor do botão em `Card.vue` porque quer esse visual novo.
2. Roda `npm run test:docker:update`.
3. As imagens em `tests/visual.spec.js-snapshots/` são atualizadas.
4. Confira as imagens e faça commit delas junto com a mudança do código.

### Exemplo 2: quando um teste falha

1. Você muda algo no CSS e, sem querer, o card fica diferente.
2. Roda `npm run test:docker`.
3. O terminal mostra, por exemplo:

   ```
   1 failed
     [chromium] › tests/visual.spec.js:8:1 › card normal
   33824 pixels (ratio 0.85 of all image pixels) are different.
   ```

4. O report abre no navegador com três imagens:
   - **Expected**: a baseline (como deveria estar)
   - **Actual**: como ficou agora
   - **Diff**: as diferenças marcadas em vermelho
5. Agora decida:
   - **Foi sem querer?** Corrija o código e rode `npm run test:docker` de novo.
   - **Foi de propósito?** Rode `npm run test:docker:update` para aceitar o visual novo como baseline.
