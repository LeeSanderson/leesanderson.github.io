import{c as e,i as t,l as n,n as r,r as i,s as a,t as o,u as s}from"./signup-record-lJQZ10Rm.js";var c=`six-sided-signup-heading`,l=`Get new posts by email`,u=`six-sided-signup-submitted`,d=`six-sided-signup-email`,f=e=>`form-control d-inline-block w-auto align-middle mr-2 mb-2${e?` is-invalid`:``}`,p={body:`At most one email a week, and only when something new goes up. No tracking, no other mail, unsubscribe in one click.`,emailLabel:`Email address`,emailPlaceholder:`you@example.com`,submit:`Subscribe`,sending:`Sending…`,success:`Check your inbox — there's a confirmation link waiting. You're not subscribed until you click it.`,networkError:`That didn't go through. Check your connection and try again.`,invalidEmail:`That doesn't look like an email address.`},m={sending:p.sending,invalid:p.invalidEmail,error:p.networkError},h=class extends a{static properties={headingLevel:{type:Number,attribute:`heading-level`},state:{state:!0}};constructor(){super(),this.headingLevel=2,this.state=`idle`}createRenderRoot(){return this}render(){return s`
      ${this.#e()}
      ${this.state===`success`?this.#n():this.#t()}
    `}#e(){return this.headingLevel===1?s`<h1 id="${c}">${l}</h1>`:s`<h2 id="${c}">${l}</h2>`}#t(){let t=this.state===`sending`,n=this.state===`invalid`;return s`
      <p>${p.body}</p>
      <form novalidate @submit="${this.#r}">
        <label class="sr-only" for="${d}">${p.emailLabel}</label>
        <input
          type="email"
          required
          id="${d}"
          name="email"
          class="${f(n)}"
          autocomplete="email"
          placeholder="${p.emailPlaceholder}"
          aria-invalid="${n?`true`:e}">
        <input type="text" name="website" hidden autocomplete="off">
        <button
          type="submit"
          class="${i(t)} mb-2"
          aria-disabled="${r(t)}">${p.submit}</button>
      </form>
      <p role="status">${m[this.state]??``}</p>
    `}#n(){return s`<div tabindex="-1"><p>${p.success}</p></div>`}async#r(e){if(e.preventDefault(),this.state===`sending`)return;let n=this.querySelector(`#${d}`);if(!n.checkValidity()){this.state=`invalid`;return}this.state=`sending`;try{if(!(await t(n.value,this.querySelector(`input[name="website"]`).value)).ok){this.state=`error`;return}}catch{this.state=`error`;return}o(`submitted`),this.state=`success`,this.dispatchEvent(new CustomEvent(u,{bubbles:!0})),await this.updateComplete,this.querySelector(`[tabindex="-1"]`).focus({preventScroll:!0})}};customElements.define(`six-sided-signup-form`,h),n(s`
    <six-sided-signup-form heading-level="1"></six-sided-signup-form>
    <p>
      <em>Posts are about software craftsmanship, .NET and Azure. The email is the post list for that
      week and nothing else.</em>
    </p>
  `,document.getElementById(`six-sided-signup-root`));