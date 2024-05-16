const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<header>
<nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-dark box-shadow mb-3">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">
            <span class="logo">
                <i class="fas fa-dice-one"></i>
                <i class="fas fa-dice-two"></i>
                <i class="fas fa-dice-three"></i>
                <i class="fas fa-dice-four"></i>
                <i class="fas fa-dice-five"></i>
                <i class="fas fa-dice-six"></i>
            </span>
            <span class="sr-only">Home</span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
            <ul class="navbar-nav flex-grow-1">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Blog">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/search.html">Search</a>
                </li>                
            </ul>
        </div>
    </div>
</nav>
</header>
`

export class Header extends HTMLElement {
    constructor() {
        super();        
        this.appendChild(headerTemplate.content.cloneNode(true));
    }
}

window.customElements.define('six-sided-header', Header);