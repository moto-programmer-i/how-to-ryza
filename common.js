

/**
 * 
 * @param {HTMLElement} parent 
 * @param {string} tagName 
 * @returns 
 */
function createChild(parent, tagName) {
    const child = document.createElement(tagName);
    parent.appendChild(child);
    return child;
}

async function appendFooter() {
    const body = document.getElementsByTagName("body")[0];
    const footer = document.createElement("footer");
    const footerContent = createChild(footer, "div");
    footerContent.textContent = "©コーエーテクモゲームス　　";
    const license = createChild(footerContent, "a");
    license.href = "https://github.com/moto-programmer-i/how-to-ryza/blob/main/LICENSE.md";
    license.textContent = "ライセンス";
    body.appendChild(footer);
}

/**
 * h1タグにaタグを挿入
 */
async function insertAtoH1() {
    const h1s = document.getElementsByTagName("h1");
    for(let h1 of h1s) {
        const text = h1.textContent;
        h1.textContent = "";
        const a = createChild(h1, "a");
        a.textContent = text;

        // IDをhrefへ
        a.href = "#" + h1.id;
    }
}


appendFooter();
insertAtoH1();