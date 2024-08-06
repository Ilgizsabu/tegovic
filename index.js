const getTagRenderer = (teg) => {
    return (string) => `<${teg}>${string}</${teg}>`;
}

const renderH1 = getTagRenderer('h1');
const h1Html = renderH1('Домашка по функциям');

const renderDiv = getTagRenderer('div');
const divHtml = renderDiv('Ого, работает!');