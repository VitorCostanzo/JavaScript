console.error(new Error('Exemplo de StackTracing'));

/*
Observar erro.

Error: Exemplo de StackTracing
    at Object.<anonymous> (C:\Vitor\DEV\Html_Css_Js\Referencia\js\stacktracing.js:1:15)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47

Linha pai -> Indica o tipo de erro
1ª linha filha -> indica o caminho do erro
demais linhas -> indicam os demais caminhos que referenciam o erro e que podem ser afetados pelo mesmo
*/