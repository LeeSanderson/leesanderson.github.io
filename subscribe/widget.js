//#region src/signup-record.js
var e = "six-sided.signup", t = {
	submitted: 7,
	dismissed: 30,
	confirmed: Infinity,
	optedOut: Infinity
};
function n() {
	let e = i();
	return e !== null && o(e) ? null : e;
}
function r(n) {
	if (!Object.hasOwn(t, n)) throw Error(`Unknown signup state: ${n}`);
	try {
		localStorage.setItem(e, JSON.stringify({
			v: 1,
			state: n,
			at: (/* @__PURE__ */ new Date()).toISOString()
		}));
	} catch {}
}
function i() {
	let t;
	try {
		t = localStorage.getItem(e);
	} catch {
		return null;
	}
	if (t === null) return null;
	try {
		let e = JSON.parse(t);
		return a(e) ? e : null;
	} catch {
		return null;
	}
}
function a(e) {
	return typeof e == "object" && !!e && e.v === 1 && Object.hasOwn(t, e.state) && typeof e.at == "string" && !Number.isNaN(Date.parse(e.at));
}
function o({ state: e, at: n }) {
	return (Date.now() - Date.parse(n)) / 864e5 > t[e];
}
//#endregion
//#region src/widget/anchor.js
function s(e, t) {
	if (e.length === 0) return null;
	let n = t.top + t.height / 2, r = (e) => Math.abs(e - n);
	return e.reduce((t, n, i) => r(n) < r(e[t]) ? i : t, 0);
}
//#endregion
//#region src/widget/prompt-decision.js
function c(e) {
	return e === null ? "prompt" : e.state === "submitted" ? "pendingNote" : "silent";
}
//#endregion
//#region node_modules/@lit/reactive-element/css-tag.js
var l = globalThis, u = l.ShadowRoot && (l.ShadyCSS === void 0 || l.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, d = Symbol(), f = /* @__PURE__ */ new WeakMap(), ee = class {
	constructor(e, t, n) {
		if (this._$cssResult$ = !0, n !== d) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, t = this.t;
		if (u && e === void 0) {
			let n = t !== void 0 && t.length === 1;
			n && (e = f.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && f.set(t, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, te = (e) => new ee(typeof e == "string" ? e : e + "", void 0, d), ne = (e, t) => {
	if (u) e.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let n of t) {
		let t = document.createElement("style"), r = l.litNonce;
		r !== void 0 && t.setAttribute("nonce", r), t.textContent = n.cssText, e.appendChild(t);
	}
}, re = u ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return te(t);
})(e) : e, { is: ie, defineProperty: ae, getOwnPropertyDescriptor: oe, getOwnPropertyNames: se, getOwnPropertySymbols: ce, getPrototypeOf: le } = Object, p = globalThis, m = p.trustedTypes, ue = m ? m.emptyScript : "", de = p.reactiveElementPolyfillSupport, h = (e, t) => e, g = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? ue : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, _ = (e, t) => !ie(e, t), v = {
	attribute: !0,
	type: String,
	converter: g,
	reflect: !1,
	useDefault: !1,
	hasChanged: _
};
Symbol.metadata ??= Symbol("metadata"), p.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var y = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = v) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && ae(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = oe(this.prototype, e) ?? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		};
		return {
			get: r,
			set(t) {
				let a = r?.call(this);
				i?.call(this, t), this.requestUpdate(e, a, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? v;
	}
	static _$Ei() {
		if (this.hasOwnProperty(h("elementProperties"))) return;
		let e = le(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(h("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(h("properties"))) {
			let e = this.properties, t = [...se(e), ...ce(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(1 / 0).reverse());
			for (let e of n) t.unshift(re(e));
		} else e !== void 0 && t.push(re(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
	}
	addController(e) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
	}
	removeController(e) {
		this._$EO?.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return ne(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach((e) => e.hostDisconnected?.());
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			let i = (n.converter?.toAttribute === void 0 ? g : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? g : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? _)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(e) {
		return !0;
	}
	update(e) {
		this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[h("elementProperties")] = /* @__PURE__ */ new Map(), y[h("finalized")] = /* @__PURE__ */ new Map(), de?.({ ReactiveElement: y }), (p.reactiveElementVersions ??= []).push("2.1.2");
//#endregion
//#region node_modules/lit-html/lit-html.js
var b = globalThis, fe = (e) => e, x = b.trustedTypes, pe = x ? x.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, me = "$lit$", S = `lit$${Math.random().toFixed(9).slice(2)}$`, he = "?" + S, ge = `<${he}>`, C = document, w = () => C.createComment(""), T = (e) => e === null || typeof e != "object" && typeof e != "function", E = Array.isArray, _e = (e) => E(e) || typeof e?.[Symbol.iterator] == "function", D = "[ 	\n\f\r]", O = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, k = /-->/g, A = />/g, j = RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), M = /'/g, N = /"/g, P = /^(?:script|style|textarea|title)$/i, F = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), I = Symbol.for("lit-noChange"), L = Symbol.for("lit-nothing"), R = /* @__PURE__ */ new WeakMap(), z = C.createTreeWalker(C, 129);
function B(e, t) {
	if (!E(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return pe === void 0 ? t : pe.createHTML(t);
}
var ve = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = O;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === O ? c[1] === "!--" ? o = k : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = j) : (P.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = j) : o = A : o === j ? c[0] === ">" ? (o = i ?? O, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? j : c[3] === "\"" ? N : M) : o === N || o === M ? o = j : o === k || o === A ? o = O : (o = j, i = void 0);
		let d = o === j && e[t + 1].startsWith("/>") ? " " : "";
		a += o === O ? n + ge : l >= 0 ? (r.push(s), n.slice(0, l) + me + n.slice(l) + S + d) : n + S + (l === -2 ? t : d);
	}
	return [B(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, V = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = ve(t, n);
		if (this.el = e.createElement(l, r), z.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = z.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(me)) {
					let t = u[o++], n = i.getAttribute(e).split(S), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? be : r[1] === "?" ? xe : r[1] === "@" ? Se : W
					}), i.removeAttribute(e);
				} else e.startsWith(S) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (P.test(i.tagName)) {
					let e = i.textContent.split(S), t = e.length - 1;
					if (t > 0) {
						i.textContent = x ? x.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], w()), z.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], w());
					}
				}
			} else if (i.nodeType === 8) {
				if (i.data === he) c.push({
					type: 2,
					index: a
				});
				else {
					let e = -1;
					for (; (e = i.data.indexOf(S, e + 1)) !== -1;) c.push({
						type: 7,
						index: a
					}), e += S.length - 1;
				}
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = C.createElement("template");
		return n.innerHTML = e, n;
	}
};
function H(e, t, n = e, r) {
	if (t === I) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = T(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = H(e, i._$AS(e, t.values), i, r)), t;
}
var ye = class {
	constructor(e, t) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? C).importNode(t, !0);
		z.currentNode = r;
		let i = z.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new U(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new Ce(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = z.nextNode(), a++);
		}
		return z.currentNode = C, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, U = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = L, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = H(this, e, t), T(e) ? e === L || e == null || e === "" ? (this._$AH !== L && this._$AR(), this._$AH = L) : e !== this._$AH && e !== I && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? _e(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== L && T(this._$AH) ? this._$AA.nextSibling.data = e : this.T(C.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = V.createElement(B(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new ye(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = R.get(e.strings);
		return t === void 0 && R.set(e.strings, t = new V(e)), t;
	}
	k(t) {
		E(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(w()), this.O(w()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = fe(e).nextSibling;
			fe(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, W = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = L, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = L;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = H(this, e, t, 0), a = !T(e) || e !== this._$AH && e !== I, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = H(this, r[n + o], t, o), s === I && (s = this._$AH[o]), a ||= !T(s) || s !== this._$AH[o], s === L ? e = L : e !== L && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === L ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, be = class extends W {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === L ? void 0 : e;
	}
}, xe = class extends W {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== L);
	}
}, Se = class extends W {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = H(this, e, t, 0) ?? L) === I) return;
		let n = this._$AH, r = e === L && n !== L || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== L && (n === L || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, Ce = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		H(this, e);
	}
}, we = b.litHtmlPolyfillSupport;
we?.(V, U), (b.litHtmlVersions ??= []).push("3.3.3");
var Te = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new U(t.insertBefore(w(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, G = globalThis, K = class extends y {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Te(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return I;
	}
};
K._$litElement$ = !0, K.finalized = !0, G.litElementHydrateSupport?.({ LitElement: K });
var Ee = G.litElementPolyfillSupport;
Ee?.({ LitElement: K }), (G.litElementVersions ??= []).push("4.2.2");
//#endregion
//#region src/api.js
var De = "https://api.sixsideddice.com";
function Oe(e, t) {
	return fetch(`${De}/api/email-subscription/subscribe`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email: e,
			website: t
		})
	});
}
//#endregion
//#region src/in-flight-button.js
var ke = (e) => `btn btn-info${e ? " disabled" : ""}`, Ae = (e) => e ? "true" : L, q = "six-sided-signup-heading", J = "Get new posts by email", je = "six-sided-signup-submitted", Y = "six-sided-signup-email", Me = (e) => `form-control d-inline-block w-auto align-middle mr-2 mb-2${e ? " is-invalid" : ""}`, X = {
	body: "At most one email a week, and only when something new goes up. No tracking, no other mail, unsubscribe in one click.",
	emailLabel: "Email address",
	emailPlaceholder: "you@example.com",
	submit: "Subscribe",
	sending: "Sending…",
	success: "Check your inbox — there's a confirmation link waiting. You're not subscribed until you click it.",
	networkError: "That didn't go through. Check your connection and try again.",
	invalidEmail: "That doesn't look like an email address."
}, Ne = {
	sending: X.sending,
	invalid: X.invalidEmail,
	error: X.networkError
}, Pe = class extends K {
	static properties = {
		headingLevel: {
			type: Number,
			attribute: "heading-level"
		},
		state: { state: !0 }
	};
	constructor() {
		super(), this.headingLevel = 2, this.state = "idle";
	}
	createRenderRoot() {
		return this;
	}
	render() {
		return F`
      ${this.#e()}
      ${this.state === "success" ? this.#n() : this.#t()}
    `;
	}
	#e() {
		return this.headingLevel === 1 ? F`<h1 id="${q}">${J}</h1>` : F`<h2 id="${q}">${J}</h2>`;
	}
	#t() {
		let e = this.state === "sending", t = this.state === "invalid";
		return F`
      <p>${X.body}</p>
      <form novalidate @submit="${this.#r}">
        <label class="sr-only" for="${Y}">${X.emailLabel}</label>
        <input
          type="email"
          required
          id="${Y}"
          name="email"
          class="${Me(t)}"
          autocomplete="email"
          placeholder="${X.emailPlaceholder}"
          aria-invalid="${t ? "true" : L}">
        <input type="text" name="website" hidden autocomplete="off">
        <button
          type="submit"
          class="${ke(e)} mb-2"
          aria-disabled="${Ae(e)}">${X.submit}</button>
      </form>
      <p role="status">${Ne[this.state] ?? ""}</p>
    `;
	}
	#n() {
		return F`<div tabindex="-1"><p>${X.success}</p></div>`;
	}
	async #r(e) {
		if (e.preventDefault(), this.state === "sending") return;
		let t = this.querySelector(`#${Y}`);
		if (!t.checkValidity()) {
			this.state = "invalid";
			return;
		}
		this.state = "sending";
		try {
			if (!(await Oe(t.value, this.querySelector("input[name=\"website\"]").value)).ok) {
				this.state = "error";
				return;
			}
		} catch {
			this.state = "error";
			return;
		}
		r("submitted"), this.state = "success", this.dispatchEvent(new CustomEvent(je, { bubbles: !0 })), await this.updateComplete, this.querySelector("[tabindex=\"-1\"]").focus({ preventScroll: !0 });
	}
};
customElements.define("six-sided-signup-form", Pe);
//#endregion
//#region src/widget/signup-widget.js
var Fe = "border-top border-bottom text-center py-4 my-4", Z = "btn btn-link p-0 align-baseline", Ie = 200, Q = {
	notNow: "Not now",
	alreadySubscribed: "I'm already subscribed",
	pendingNote: "Still waiting on a confirmation click — the link is in your inbox.",
	dismissedAcknowledgement: "No problem — we won't ask again for a while.",
	confirmedAcknowledgement: "Thanks — we won't ask again in this browser."
}, Le = class extends K {
	static properties = {
		decision: { type: String },
		state: { state: !0 },
		acknowledgement: { state: !0 }
	};
	constructor() {
		super(), this.decision = "prompt", this.state = "prompt", this.acknowledgement = "", this.addEventListener(je, () => {
			this.state = "submitted";
		});
	}
	createRenderRoot() {
		return this;
	}
	render() {
		return this.decision === "pendingNote" ? this.#t(Q.pendingNote, { focusable: !1 }) : this.state === "collapsed" ? this.#t(this.acknowledgement, { focusable: !0 }) : F`
      <aside class="${Fe}" aria-labelledby="${q}">
        <six-sided-signup-form heading-level="2"></six-sided-signup-form>
        ${this.state === "submitted" ? L : this.#e()}
      </aside>
    `;
	}
	#e() {
		return F`
      <p>
        <button
          type="button"
          class="${Z}"
          @click="${() => this.#n("dismissed")}">${Q.notNow}</button>
        <span>·</span>
        <button
          type="button"
          class="${Z}"
          @click="${() => this.#n("confirmed")}">${Q.alreadySubscribed}</button>
      </p>
    `;
	}
	#t(e, { focusable: t }) {
		return F`
      <aside class="${Fe}" aria-labelledby="${q}">
        <h2 class="sr-only" id="${q}">${J}</h2>
        <p tabindex="${t ? "-1" : L}">${e}</p>
      </aside>
    `;
	}
	async #n(e) {
		r(e);
		let t = this.querySelector("aside").scrollHeight;
		this.acknowledgement = e === "dismissed" ? Q.dismissedAcknowledgement : Q.confirmedAcknowledgement, this.state = "collapsed", await this.updateComplete, this.querySelector("[tabindex=\"-1\"]").focus({ preventScroll: !0 }), this.#r(t);
	}
	#r(e) {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let t = this.querySelector("aside"), n = t.scrollHeight;
		t.style.overflow = "hidden", t.style.height = `${e}px`, t.style.transition = `height ${Ie}ms ease-out`, t.addEventListener("transitionend", () => {
			t.style.removeProperty("overflow"), t.style.removeProperty("height"), t.style.removeProperty("transition");
		}, { once: !0 }), t.offsetHeight, t.style.height = `${n}px`;
	}
};
customElements.define("six-sided-signup-widget", Le);
//#endregion
//#region src/widget/widget.js
function $(e = document) {
	let t = c(n());
	if (t === "silent") return;
	let r = e.querySelector("main"), i = [...r.querySelectorAll("h2, h3, h4, h5, h6")], a = s(i.map((e) => e.getBoundingClientRect().top), r.getBoundingClientRect()), o = e.createElement("six-sided-signup-widget");
	o.decision = t, a === null ? r.append(o) : i[a].before(o);
}
document.readyState === "complete" ? $() : window.addEventListener("load", () => $(), { once: !0 });
//#endregion
export { $ as mountWidget };
