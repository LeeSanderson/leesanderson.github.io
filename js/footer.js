const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<footer class="footer bg-dark">
<div class="container-fluid pt-3 pb-2 mt-5">
    <div class="container">
        <div class="text-muted">Disclaimer: The opinions expressed herein are my own personal opinions and do not represent my employer's view in any way.</div>
        <div class="clearfix">
        <div class="float-right">
            <a class="pr-3" target="twitter" href="https://twitter.com/SixSidedDev">
                <i class="fab fa-twitter fa-3x"></i>
                <span class="sr-only">Six Sided Dev on Twitter</span>
            </a>            
            <a class="pr-3" target="github" href="https://github.com/LeeSanderson">
                <i class="fab fa-github fa-3x"></i>
                <span class="sr-only">Six Sided Dev on GitHub</span>
            </a>
            <a class="pr-3" target="linkedin" href="https://www.linkedin.com/in/lee-sanderson">
                <i class="fab fa-linkedin fa-3x"></i>
                <span class="sr-only">Six Sided Dev on Linked-In</span>
            </a>
        </div>
        </div>
        <div class="text-muted mt-2">&copy; 2025 - SixSidedDice.com</div>
    </div>
</div>
</footer>`

export class Footer extends HTMLElement {
    constructor() {
        super();        
        this.appendChild(footerTemplate.content.cloneNode(true));
    }
}

window.customElements.define('six-sided-footer', Footer);