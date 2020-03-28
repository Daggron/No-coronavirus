replaceText(document.body);


function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
            element.textContent = element.textContent.replace(/coronavirus|CoV-2|[cC][oO][vV][iI][dD]\-19|[sS][aA][rR][sS]|[cC][oO][rR][oO][nN][aA][vV][iI][rR][uU][sS]|[cC][oO][rR][oO][nN][aA]|[vV][iI][rR][uU][sS]|[cC][oO][vV][iI][dD]|[sS][aA][rR][sS]\-[cC][oO][vV][iI][dD]\-19|[sS][aA][rR][sS]\-[cC][oO][vV][iI][dD]\-19\-2|[sS][aA][rR][sS]\-[cC][oO][vV]\-2|2019\-[nN][cC][oO][vV]|CoV/gi, '░░█▒ █▒▒ █▓▓░');
            
                }
    }
