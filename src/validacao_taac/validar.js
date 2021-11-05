import { load } from "js-yaml";

function validar(docYamlStr){
    let erros = [];
    let doc = load(docYamlStr);

    console.log("doc ", doc);
    if(!doc){
        return ["Documento Inválido"];
    }

    console.log("doc.phases", doc.phases);
    console.log("doc.phases.build", doc.phases.build);
    console.log("doc.phases.build.commands", doc.phases.build.commands);

    let comandosExiste = !!doc.phases && !!doc.phases.build && !!doc.phases.build.commands;
    if (!comandosExiste){
        erros.push("phases -> build -> commands - Caminho não encontrado!");
    }
    
    if(comandosExiste && Array.isArray(doc.phases.commands) && doc.phases.commands.length <= 0){
        erros.push("phases -> build -> commands - encontrado mas nenhum especificado!");
    }

    console.log("reports", doc.reports);
    if(!!doc && !doc.reports){
        erros.push("reports - Não encontrado")
    }

    return erros
}
export default validar;