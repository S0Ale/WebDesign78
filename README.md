Questa branch contiene il progetto pronto per il deploy sul dominio registrato.
Per fare il deploy, eseguire il comando `npm run build`, prendere il contenuto nel folder `/dist` e caricarlo su altervista tramite ftp (va bene anche drag & drop)

# Come testare

## Live test
- ATTENZIONE: assicurarsi di avere la cartella node_modules/, altrimenti eseguire il comando `npm install`
- comando `npm run dev`, cliccare sul link in output per visualizzare nel browser

## Preview del sito in produzione
- comando `npm run build`
- comando `npm run preview`, cliccare sul link per visualizzare nel browser

## Deploy
Ad ogni push nella branch dev, viene effettuato il deploy su Github Pages su questo [link](https://s0ale.github.io/WebDesign78/).

## TODO
- Sezione articoli con drag
- Soluzione per animazioni
- Provare animazioni con routing di React
