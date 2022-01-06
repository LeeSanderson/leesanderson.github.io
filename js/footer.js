const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<footer class="footer bg-primary">
<div class="container-fluid pt-3 pb-2 mt-5">
    <div>Disclaimer: The opinions expressed herein are my own personal opinions and do not represent my employer's view in any way.</div>
    <div class="text-muted mt-2">&copy; 2022 - SixSidedDice.com</div>
</div>
</footer>`

export class Footer extends HTMLElement {
    constructor() {
        super();        
        this.appendChild(footerTemplate.content.cloneNode(true));
    }
}

window.customElements.define('six-sided-footer', Footer);