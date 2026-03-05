

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

// footer
const body = document.getElementsByTagName("body")[0];
const footer = document.createElement("footer");
const footerContent = createChild(footer, "div");
footerContent.textContent = "©コーエーテクモゲームス　　";
const license = createChild(footerContent, "a");
license.href = "https://github.com/moto-programmer-i/how-to-ryza/blob/main/LICENSE.md";
license.textContent = "ライセンス";
body.appendChild(footer);