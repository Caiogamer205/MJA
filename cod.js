function cod(){
    var personagem = (document.getElementById("lista").value);
    if(personagem == "Alex Mason"){
        document.getElementById("personagem").innerHTML = ("Capitão Alex Mason é um agente da CIA e capitão aposentado da Força Marinha. No início da década de 1950, Mason serviu como soldado de infantaria e mais tarde na Força de Reconhecimento da Marinha na Coréia do Sul. Ele passou sua juventude caçando alces e ursos pardos no deserto do Alasca com seu pai, um veterano da Segunda Guerra Mundial e destinatário do Purple Heart por ferimentos recebidos durante a ação no Makin Atoll. Como tal, ele é adepto de ambientes de clima frio e é um excelente atirador.");
        document.getElementById("img").innerHTML = "<img src = 'IMG_Personagens_COD/Alex.jpg' width = '190' height = '225'>";
    }
    else if(personagem == "Capitão Price"){
        document.getElementById("personagem").innerHTML = ("O Capitão John Price, indicativo Bravo Seis, é um soldado das forças especiais britânicas.  Após dissolução da unidade e da morte de seu líder traidor, General Shepherd, Price e o aliado de longa data John “Soap” MacTavish decreta uma vingança pessoal para acabar com o mentor da Terceira Guerra Mundial, Vladimir Makarov.");
        document.getElementById("img").innerHTML = "<img src = 'IMG_Personagens_COD/Price.jpg' width = '210' height = '225'>";
    }
    else if(personagem == "Soap MacTavish"){
        document.getElementById("personagem").innerHTML = ("Um sargento e soldado das forças especiais, servindo como o 22º S.A.S. Sniper do Regiment e especialista em demolições. Ele desempenhou um papel importante durante a crise ultranacionalista, sendo um recém-chegado ao Serviço Aéreo Especial Britânico e parte da Equipe Bravo do Capitão Price. Não se sabe muito sobre o início da vida de Soap, exceto que ele nasceu católico romano. Ele é da Escócia, o que é evidente pela bandeira escocesa vista em suas placas de identificação, junto com seu sotaque escocês. Soap serviu com o 3º Batalhão, Regimento de Pára-quedistas antes de ingressar no SAS, com pelo menos uma turnê na Irlanda do Norte.");
        document.getElementById("img").innerHTML = "<img src = 'IMG_Personagens_COD/Soap.jpg' width = '210' height = '225'>";
    }
    else if(personagem == "Simon 'Ghost' Riley"){
        document.getElementById("personagem").innerHTML = ("O tenente Simon “Ghost” Riley é um operador das forças especiais britânicas e um membro proeminente da Força-Tarefa 141, conhecido por sua icônica balaclava com padrão de caveira, fone de ouvido e óculos escuros vermelhos. Simon costumava ser aprendiz de açougueiro em uma mercearia quando cresceu. Após os ataques de 11 de setembro, ele se juntou ao exército. Ele era um soldado experiente que o colocou no Serviço Aéreo Especial.");
        document.getElementById("img").innerHTML = "<img src = 'IMG_Personagens_COD/Ghost.jpg' width = '210' height = '225'>";
    }
    else if(personagem == "Thomas A. Merrick"){
        document.getElementById("personagem").innerHTML = ("Capitão Thomas A. Merrick é um personagem coadjuvante em Call of Duty: Ghosts. Um SEAL da Marinha antes dos ataques da ODIN causados pela Federação, o Capitão Merrick é o comandante de campo dos Fantasmas em 2027, e mais tarde se torna o Comandante após a morte de seu Capitão em Las Vegas. Ele liderou soldados durante as batalhas finais da Guerra da Federação.");
        document.getElementById("img").innerHTML = "<img src = 'IMG_Personagens_COD/Thomas.jpg' width = '210' height = '225'>";
    }
    else if(personagem == "Frank Woods"){
        document.getElementById("personagem").innerHTML = ("Frank Woods nasceu em 20 de março de 1930 e foi criado na Filadélfia, Pensilvânia. Ele fugiu de sua casa quando criança, forçado a confiar na esperteza das ruas e seguir seus instintos. Woods rapidamente aprendeu a ser totalmente independente. Ele serviu no Corpo de Fuzileiros Navais dos Estados Unidos, durante o qual teve muita experiência de combate na Guerra da Coréia. Isso lhe rendeu uma reputação que levou a CIA a recrutá-lo para sua Divisão de Atividades Especiais.");
        document.getElementById("img").innerHTML = "<img src = 'IMG_Personagens_COD/Frank.jpg' width = '210' height = '225'>";
    }
    else if(personagem == "Logan Walker"){
        document.getElementById("personagem").innerHTML = ("O sargento Logan Walker é um personagem jogável e o principal protagonista de Call of Duty: Ghosts. Ele é o irmão mais novo de David Hesh Walker e filho de Elias T. Walker. Depois de passar por todos os seus testes no campo de batalha, ele se torna um membro dos Fantasmas depois de ser resgatado por eles e Elias, que é então revelado como o líder dos Fantasmas.");
        document.getElementById("img").innerHTML = "<img src = 'IMG_Personagens_COD/Logan.jpg' width = '210' height = '225'>";
    }
    else if(personagem == "Lucas Riggs"){
        document.getElementById("personagem").innerHTML = ("Lucas Riggs prefere ações a palavras e, embora sua personalidade esteja longe de ser explosiva, seu método de lidar com ameaças é altamente combustível. Filho de criadores de ovelhas nos arredores de Melbourne, na Austrália, Riggs trabalhou com sua família para cuidar do rebanho e coletar lã. Quando a Segunda Guerra Mundial começou, ele não hesitou em se alistar antes mesmo que o recrutamento fosse implementado. Ele estava pronto para ver mais do mundo e lutar contra um mal maior do que o ocasional mafioso mesquinho em sua área.");
        document.getElementById("img").innerHTML = "<img src = 'IMG_Personagens_COD/Riggs.jpg' width = '210' height = '255'>";
    }
    else if(personagem == "Jason Hudson"){
        document.getElementById("personagem").innerHTML = ("Hudson é um excelente estrategista e coordenador de missões, trazendo todo o peso de seu QI de nível genial. para o campo. Como tal, ele conquistou grande confiança nos corredores de Langley e, sem dúvida, irá longe, considerando sua capacidade de comandar uma sala e habilidades de gerenciamento de crises.");
        document.getElementById("img").innerHTML = "<img src = 'IMG_Personagens_COD/Jason.jpg' width = '190' height = '235'>";
    }
    else if(personagem == "Raul Menendez"){
        document.getElementById("personagem").innerHTML = ("Segundo Harper, ele é o terrorista mais perigoso desde Osama bin Laden, e segundo Briggs, os americanos o idolatram, apesar dele ser o responsável pelo sangue derramado em solo americano. Menendez é um traficante nicaraguense e líder da organização terrorista Cordis Die, que lançou um ataque de escala sem precedentes contra os Estados Unidos da América em retaliação às ações da CIA contra sua família nas décadas anteriores.");
        document.getElementById("img").innerHTML = "<img src = 'IMG_Personagens_COD/Menendez.jpg' width = '190' height = '235'>";
    }
}
function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active')
    var popup = document.getElementById('popup');
    popup.classList.toggle('active')
}
function toggle2(){
    var blur2 = document.getElementById('blur2');
    blur2.classList.toggle('active')
    var popup2 = document.getElementById('popup2');
    popup2.classList.toggle('active')
}
