	(function(t) {
		function e(e) {
			for (var r, a, s = e[0], c = e[1], u = e[2], p = 0, d = []; p < s.length; p++) a = s[p], i[a] && d.push(i[a][0]), i[a] = 0;
			for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (t[r] = c[r]);
			l && l(e);
			while (d.length) d.shift()();
			return o.push.apply(o, u || []), n()
		}

		function n() {
			for (var t, e = 0; e < o.length; e++) {
				for (var n = o[e], r = !0, s = 1; s < n.length; s++) {
					var c = n[s];
					0 !== i[c] && (r = !1)
				}
				r && (o.splice(e--, 1), t = a(a.s = n[0]))
			}
			return t
		}
		var r = {},
			i = {
				app: 0
			},
			o = [];

		function a(e) {
			if (r[e]) return r[e].exports;
			var n = r[e] = {
				i: e,
				l: !1,
				exports: {}
			};
			return t[e].call(n.exports, n, n.exports, a), n.l = !0, n.exports
		}
		a.m = t, a.c = r, a.d = function(t, e, n) {
			a.o(t, e) || Object.defineProperty(t, e, {
				enumerable: !0,
				get: n
			})
		}, a.r = function(t) {
			"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}, a.t = function(t, e) {
			if (1 & e && (t = a(t)), 8 & e) return t;
			if (4 & e && "object" === typeof t && t && t.__esModule) return t;
			var n = Object.create(null);
			if (a.r(n), Object.defineProperty(n, "default", {
					enumerable: !0,
					value: t
				}), 2 & e && "string" != typeof t)
				for (var r in t) a.d(n, r, function(e) {
					return t[e]
				}.bind(null, r));
			return n
		}, a.n = function(t) {
			var e = t && t.__esModule ? function() {
				return t["default"]
			} : function() {
				return t
			};
			return a.d(e, "a", e), e
		}, a.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, a.p = "/";
		var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
			c = s.push.bind(s);
		s.push = e, s = s.slice();
		for (var u = 0; u < s.length; u++) e(s[u]);
		var l = c;
		o.push([0, "chunk-vendors"]), n()
	})({
		0: function(t, e, n) {
			t.exports = n("56d7")
		},
		"0227": function(t, e, n) {},
		"0234": function(t, e, n) {
			"use strict";
			var r = n("0227"),
				i = n.n(r);
			i.a
		},
		"0c43": function(t, e, n) {
			"use strict";
			var r = n("79ce"),
				i = n.n(r);
			i.a
		},
		"12a1": function(t, e, n) {},
		1601: function(t, e, n) {},
		"16f9": function(t, e, n) {
			"use strict";
			var r = n("bece"),
				i = n.n(r);
			i.a
		},
		"1b06": function(t, e, n) {},
		"1d07": function(t, e, n) {},
		2710: function(t, e, n) {
			"use strict";
			var r = n("85ce"),
				i = n.n(r);
			i.a
		},
		"2b95": function(t, e, n) {
			"use strict";
			var r = n("913b"),
				i = n.n(r);
			i.a
		},
		3472: function(t, e, n) {
			"use strict";
			var r = n("e5bf"),
				i = n.n(r);
			i.a
		},
		"36f9": function(t, e, n) {
			"use strict";
			var r = n("1b06"),
				i = n.n(r);
			i.a
		},
		"45f5": function(t, e, n) {
			"use strict";
			var r = n("75bc"),
				i = n.n(r);
			i.a
		},
		"4b1d": function(t, e, n) {},
		"4fbf": function(t, e, n) {
			"use strict";
			var r = n("9285"),
				i = n.n(r);
			i.a
		},
		"53f8": function(t, e, n) {
			"use strict";
			var r = n("1601"),
				i = n.n(r);
			i.a
		},
		"56d7": function(t, e, n) {
			"use strict";
			n.r(e);
			n("cadf"), n("551c"), n("f751"), n("097d");
			var r = n("2b0e"),
				i = n("415c"),
				o = n.n(i),
				a = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("v-app", {
						attrs: {
							id: "app"
						}
					}, [n("router-view"), n("div", {
						attrs: {
							id: "nav"
						}
					}, [n("router-link", {
						class: {
							"router-link-active": t.isDefaultRoute
						},
						attrs: {
							to: "/"
						}
					}, [t._v("")]), t._v(" \n    "), n("router-link", {
						attrs: {
							to: ""
						}
					}, [t._v("")])], 1)], 1)
				},
				s = [],
				c = (n("7f7f"), n("6762"), n("2fdb"), {
					computed: {
						isDefaultRoute: function() {
							return ["song", "predict", void 0].includes(this.$route.name)
						}
					}
				}),
				u = c,
				l = (n("5c0b"), n("2877")),
				p = Object(l["a"])(u, a, s, !1, null, null, null),
				d = p.exports,
				f = n("8c4f"),
				h = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "about"
					}, [n("github-ribbon"), t._m(0), n("div", {
						staticClass: "about-content"
					}, [n("h2", [t._v("Instructions")]), n("div", {
						staticClass: "content-body"
					}, [n("ol", {
						attrs: {
							id: "instruction-list"
						}
					}, [n("li", [t._v("Search and select a pop song you like. This will give the model a good idea of what style to play in.")]), n("li", [t._v("Press the "), n("v-btn", {
						attrs: {
							color: "red darken-2",
							dark: "",
							small: "",
							fab: ""
						}
					}, [n("v-icon", [t._v("cached")])], 1), t._v(" generate button. This will create a new variation on the song you selected.")], 1), n("li", [t._v("Press "), n("v-btn", {
						attrs: {
							color: "blue darken-2",
							dark: "",
							small: "",
							fab: ""
						}
					}, [n("v-icon", [t._v("play_arrow")])], 1), t._v(" play to hear the output!")], 1), n("li", [t._v("Repeat as many times as you want. You'll get a different variation each time.")])])]), n("h2", [t._v("Cool Examples")]), n("div", {
						staticClass: "content-body"
					}, [n("v-btn-toggle", {
						staticClass: "control-group-toggle",
						attrs: {
							mandatory: ""
						},
						model: {
							value: t.window,
							callback: function(e) {
								t.window = e
							},
							expression: "window"
						}
					}, t._l(t.predictionTypes, function(e, r) {
						return n("v-btn", {
							key: e.name,
							attrs: {
								text: "",
								value: r,
								color: "red"
							}
						}, [t._v("\n          " + t._s(e.displayName) + "\n        ")])
					}), 1), n("v-window", {
						staticClass: "elevation-1",
						model: {
							value: t.window,
							callback: function(e) {
								t.window = e
							},
							expression: "window"
						}
					}, [n("v-window-item", {
						key: 0
					}, [n("v-card", {
						attrs: {
							flat: ""
						}
					}, [n("v-card-text", [n("div", {
						staticClass: "title"
					}, [t._v("Start with few notes and continue the idea.")]), n("ul", [n("li", [n("router-link", {
						attrs: {
							to: "/predict/e06828d196b2d5182cd459c273d609ac"
						}
					}, [t._v("Cannon in D - Pachelbel")])], 1), n("li", [n("router-link", {
						attrs: {
							to: "/predict/3a68d55f76b2900ac1441ca357b057ab"
						}
					}, [t._v("Wake Me Up - Avicii")])], 1)])])], 1)], 1), n("v-window-item", {
						key: 1
					}, [n("v-card", {
						attrs: {
							flat: ""
						}
					}, [n("v-card-text", [n("div", {
						staticClass: "title"
					}, [t._v("Generate a new melody on top of an existing chord progression.")]), n("ul", [n("li", [n("router-link", {
						attrs: {
							to: "/predict/551ca93cda1d2bdaa6e4d87888de893f"
						}
					}, [t._v("The Middle - Zedd")])], 1), n("li", [n("router-link", {
						attrs: {
							to: "/predict/2674406ddc3eed0adaa47355d92a7e8f"
						}
					}, [t._v("Scary Monsters and Nice Sprites - Skrillex")])], 1)])])], 1)], 1), n("v-window-item", {
						key: 2
					}, [n("v-card", {
						attrs: {
							flat: ""
						}
					}, [n("v-card-text", [n("div", {
						staticClass: "title"
					}, [t._v("Add chords to your melody")]), n("ul", [n("li", [n("router-link", {
						attrs: {
							to: "/predict/2b4f5e6613f366bad7b4f39c61be32b9"
						}
					}, [t._v("Where Is The Love - Black Eyed Peas")])], 1)])])], 1)], 1), n("v-window-item", {
						key: 3
					}, [n("v-card", {
						attrs: {
							flat: ""
						}
					}, [n("v-card-text", [n("div", {
						staticClass: "title"
					}, [t._v("Generate a completely new song in the exact same tempo as the original")]), n("ul", [n("li", [n("router-link", {
						attrs: {
							to: "/predict/1bbfcb942133414a5664a35a7e7b5612"
						}
					}, [t._v("Levels - Avicii")])], 1)])])], 1)], 1), n("v-window-item", {
						key: 4
					}, [n("v-card", {
						attrs: {
							flat: ""
						}
					}, [n("v-card-text", [n("div", {
						staticClass: "title"
					}, [t._v("Same song, but with a remixed rhythm")]), n("ul", [n("li", [n("router-link", {
						attrs: {
							to: "/predict/dd79fa52adaaed58a2945c1992ecada6"
						}
					}, [t._v("Fur Elise - Beethoven")])], 1), n("li", [n("router-link", {
						attrs: {
							to: "/predict/71d7ff59f67fffa98614c841101e1b6b"
						}
					}, [t._v("Scary Monsters and Nice Sprites - Skrillex")])], 1)])])], 1)], 1)], 1)], 1), n("h2", [t._v("Note Types")]), t._m(1), n("h2", [t._v("What is it?")]), t._m(2), n("h2", [t._v("Advanced Controls")]), t._m(3), t._m(4), t._m(5), n("h2", [t._v("Source Code")]), t._m(6), n("h2", [t._v("Acknowledgements")]), t._m(7)])], 1)
				},
				m = [function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "about-header"
					}, [n("h1", [t._v("MusicHub - The Pop Music Generator")]), n("span", {
						staticClass: "about-subtext"
					}, [t._v("Give it a few notes, and it'll autocomplete your song!")])])
				}, function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "content-body"
					}, [t._v("\n      Here's what all the colors on the grid mean:\n      "), n("ul", [n("li", [n("div", {
						staticClass: "note seed"
					}), t._v(" = Seed notes. The model uses these to predict the next sequence.")]), n("li", [n("div", {
						staticClass: "note generated"
					}), t._v(" = Generated notes - they get replaced on every new prediction.")]), n("li", [n("div", {
						staticClass: "note original"
					}), t._v(" = Original notes of the song.")])])])
				}, function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "content-body"
					}, [n("p", [t._v("MusicHub is a music model trained on a bunch of MIDI music found on the internet.")]), n("h4", [t._v("Deep Learning Model")]), t._v("\n        Recent advances in deep learning has produced amazing "), n("a", {
						attrs: {
							href: "https://transformer.huggingface.co/"
						}
					}, [t._v("results")]), t._v(" in generating text.\n        "), n("p", [t._v("We apply those same principles to music generation. Our model is based on several different variations of the transformer ("), n("a", {
						attrs: {
							href: "https://ai.googleblog.com/2019/01/transformer-xl-unleashing-potential-of.html"
						}
					}, [t._v("TransformerXL")]), t._v(", "), n("a", {
						attrs: {
							href: ""
						}
					}, [t._v("SequenceToSequence")]), t._v(", and "), n("a", {
						attrs: {
							href: "https://ai.googleblog.com/2018/11/open-sourcing-bert-state-of-art-pre.html"
						}
					}, [t._v("BERT")]), t._v(")")]), n("p", [t._v("This allows us to do really cool things like song generation, harmonization, generating melodies, and remixing existing songs.")]), n("h4", [t._v("Data")]), t._v("\n        MIDI files gathered from the internet to train the model. Sources include - classical, jazz, pop and edm.\n      "), n("br"), n("h4", [t._v("Blog Series")]), t._v("\n        Inner workings are explained in more detail in this 4 part blog post:\n        "), n("ul", [n("li", [n("a", {
						attrs: {
							href: "https://medium.com/@andrew.t.shaw/5867511b382a"
						}
					}, [t._v("Part I - Music Models")])]), n("li", [n("a", {
						attrs: {
							href: "https://medium.com/@andrew.t.shaw/755c62560ec2"
						}
					}, [t._v("Part II - Deep Dive")])]), n("li", [n("a", {
						attrs: {
							href: "https://medium.com/@andrew.t.shaw/3d80bd2ea08e"
						}
					}, [t._v("Part III - Multitask Models")])]), n("li", [n("a", {
						attrs: {
							href: "https://medium.com/@andrew.t.shaw/6b920359248c"
						}
					}, [t._v("Part IV - Remixing a Drop")])])])])
				}, function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "content-body"
					}, [n("h4", [t._v("Seed length")]), n("ul", [n("li", [t._v("Choose how much of the original song gets sent to the model for prediction")]), n("li", [t._v("Longer snippets give the model a better idea of the style to play in. It'll generate something more coherent, but less creative")])]), n("div", {
						attrs: {
							id: "about-seed"
						}
					}, [t._v("\n        ← Drag the brown dotted vertical line to change the seed length.\n        "), n("br"), n("div", {
						staticClass: "note seed"
					}), t._v(" notes are used to predict the next sequence.\n        "), n("br"), n("div", {
						staticClass: "note generated"
					}), t._v(" notes are overwritten with new predicted notes.\n    ")]), n("h4", [t._v("Grid editor\n    ")]), t._v("\n      The grid is a basic MIDI sequencer. Edit the song notes to generate even cooler music!\n      "), n("br"), n("ul", [n("li", [t._v("Add a note by clicking any spot in the grid")]), n("li", [t._v("Change the note pitch by draging it up or down")]), n("li", [t._v("Change the note length by draging the ends of the note longer or shorter")]), n("li", [t._v("Remove a note by collapsing the note ends.")])]), n("h4", {
						attrs: {
							id: "header-random"
						}
					}, [t._v("創作設定")]), t._v("\n    Alter how wild and creative you want the generated music should be.\n    "), n("ul", [n("li", [t._v("Pitch - amount of random variation in note pitch (C2, D2, E2, ..., F6, G6, A6)")]), n("li", [t._v("Rhythm - amount of random variation in note length (sixteenth, quarter, half notes)")])]), n("h4", {
						attrs: {
							id: "header-playback"
						}
					}, [t._v("播放設定")]), n("ul", [n("li", [t._v("Change the BPM to play faster/slower.")]), n("li", [t._v("Playback instrument. More coming soon!")])])])
				}, function() {
					var t = this,
						e = t.$createElement,
						r = t._self._c || e;
					return r("h2", [t._v("What's with the name? "), r("img", {
						attrs: {
							id: "icon-autobot",
							src: n("c1c2")
						}
					})])
				}, function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "content-body"
					}, [t._v("\n    This project is powerd by a Music Transformer"), n("br"), t._v("\n    Autobots are the coolest of all Transfromers."), n("br"), t._v("\n    Music Transformer = MusicHub"), n("br")])
				}, function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("ul", {
						staticClass: "variation-list"
					}, [n("li", [n("a", {
						attrs: {
							href: "https://github.com/bearpelican/musicautobot_vueapp",
							target: "_blank"
						}
					}, [t._v("Vue App")])]), n("li", [n("a", {
						attrs: {
							href: "https://github.com/bearpelican/musicautobot",
							target: "_blank"
						}
					}, [t._v("Python Model")])])])
				}, function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("ul", {
						staticClass: "variation-list"
					}, [n("li", [n("a", {
						attrs: {
							href: "https://www.fast.ai/",
							target: "_blank"
						}
					}, [t._v("Fast.Ai")])]), n("li", [n("a", {
						attrs: {
							href: "https://www.hooktheory.com/",
							target: "_blank"
						}
					}, [t._v("HookTheory")])]), n("li", [n("a", {
						attrs: {
							href: "https://www.southparkcommons.com/",
							target: "_blank"
						}
					}, [t._v("South Park Commons")])]), n("li", [n("a", {
						attrs: {
							href: "https://www.palapavc.com/",
							target: "_blank"
						}
					}, [t._v("Palapa Ventures")])])])
				}],
				g = (n("ac6a"), [{
					label: "whole",
					value: 4,
					font: "A"
				}, {
					label: "half",
					value: 2,
					font: "B"
				}, {
					label: "quarter",
					value: 1,
					font: "C"
				}, {
					label: "eighth",
					value: .5,
					font: "D"
				}, {
					label: "sixteenth",
					value: .25,
					font: "E"
				}, {
					label: "32nd",
					value: .125,
					font: "F"
				}]);

			function b(t) {
				for (var e = 0, n = g; e < n.length; e++) {
					var r = n[e];
					if (r.value === t) return r
				}
			}
			var v = n("2ef0"),
				y = n.n(v),
				w = b(1),
				O = b(.5),
				k = 50,
				j = 14,
				P = 70,
				S = 40,
				_ = 2,
				T = 7,
				x = {
					next: {
						name: "next",
						temp: [1.3, .8],
						filter: [24, .92],
						track: -1,
						/*displayName: "",
						description: ""*/
					},
					melody: {
						name: "melody",
						temp: [1.4, 1],
						filter: [24, .92],
						track: 0,
						/*displayName: "",
						description: ""*/
					},
					chords: {
						name: "chords",
						temp: [.8, .8],
						filter: [12, .92],
						track: 1,
						/*displayName: "",
						description: ""*/
					},
					pitch: {
						name: "pitch",
						temp: [1.2, 0],
						filter: [24, .92],
						track: -1,
						/*displayName: "",
						description: ""*/
					},
					rhythm: {
						name: "rhythm",
						temp: [0, 1.2],
						filter: [24, .92],
						track: -1,
						/*displayName: "",
						description: ""*/
					}
				};

			function C(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
				if ("notes" === t) return x.pitch;
				var n = y.a.isEmpty(e) ? x.next : e;
				return y.a.get(x, t, n)
			}
			var L = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("a", {
						staticClass: "github-corner",
						attrs: {
							href: "https://github.com/bearpelican/musicautobot",
							"aria-label": "View source on GitHub"
						}
					}, [n("svg", {
						staticStyle: {
							fill: "#70B7FD",
							color: "#fff",
							position: "absolute",
							top: "0",
							border: "0",
							right: "0"
						},
						attrs: {
							width: "80",
							height: "80",
							viewBox: "0 0 250 250",
							"aria-hidden": "true"
						}
					}, [n("path", {
						attrs: {
							d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
						}
					}), n("path", {
						staticClass: "octo-arm",
						staticStyle: {
							"transform-origin": "130px 106px"
						},
						attrs: {
							d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
							fill: "currentColor"
						}
					}), n("path", {
						staticClass: "octo-body",
						attrs: {
							d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
							fill: "currentColor"
						}
					})])])
				},
				N = [],
				E = (n("2710"), {}),
				D = Object(l["a"])(E, L, N, !1, null, null, null),
				M = D.exports,
				q = {
					name: "About",
					props: {
						msg: String
					},
					data: function() {
						return {
							predictionTypes: this._.values(x),
							window: 0
						}
					},
					components: {
						GithubRibbon: M
					}
				},
				R = q,
				I = (n("c735"), Object(l["a"])(R, h, m, !1, null, "fd16b9f4", null)),
				A = I.exports,
				B = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "predict"
					}, [n("header-controls", {
						attrs: {
							id: "header-controls"
						}
					}), 0 === t.tutorialStep ? n("tutorial", {
						attrs: {
							id: "tutorial-one"
						}
					}) : t._e(), n("sequencer", {
						style: t.sequenceStyle,
						scopedSlots: t._u([{
							key: "overlay",
							fn: function() {
								return [n(""), 1 === t.tutorialStep ? n("tutorial-two", {
									attrs: {
										id: "tutorial-two"
									}
								}) : t._e(), n("loading", {
									style: t.loadingStyle,
									attrs: {
										id: "loading-predict",
										value: t.loadingState
									}
								})]
							},
							proxy: !0
						}])
					}), n("footer-controls")], 1)
				},
				$ = [],
				K = (n("8e6e"), n("456d"), n("bd86")),
				F = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						attrs: {
							id: "sequencer"
						}
					}, [n("div", {
						ref: "scrollSection",
						attrs: {
							id: "section"
						}
					}, [n("keyboard"), n("score", {
						attrs: {
							gridOpacity: t.gridOpacity
						}
					})], 1), n("play-button", {
						attrs: {
							buttonID: "play-button"
						}
					}), t._t("overlay")], 2)
				},
				V = [],
				X = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "keyboard"
					}, t._l(t.keys, function(t, e) {
						return n("key", {
							key: e,
							attrs: {
								index: e,
								keyType: t.type,
								pitch: t.name
							}
						})
					}), 1)
				},
				G = [],
				z = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("button", {
						class: t.classes,
						style: t.keyDimensions,
						on: {
							mousedown: t.mousedown
						}
					}, [t._v(t._s(t.caption))])
				},
				W = [],
				U = (n("c5f6"), n("2f62")),
				Y = n("75fc"),
				J = {
					C: "white",
					"C#": "black",
					D: "white",
					"D#": "black",
					E: "white",
					F: "white",
					"F#": "black",
					G: "white",
					"G#": "black",
					A: "white",
					"A#": "black",
					B: "white"
				};

			function H() {
				for (var t = [], e = function(e) {
						t.push.apply(t, Object(Y["a"])(Object.keys(J).map(function(t) {
							return t + e
						})))
					}, n = _; n < T; n++) e(n);
				return t
			}
			var Z = Object(Y["a"])(H());

			function Q(t) {
				var e = parseInt(t.charAt(t.length - 1)),
					n = Object.keys(J).indexOf(t.substring(0, t.length - 1)),
					r = 12 * (e + 1) + n;
				return r
			}

			function tt(t) {
				return J[t.substring(0, t.length - 1)]
			}

			function et(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function nt(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? et(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : et(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var rt = Object(U["a"])("sequence"),
				it = rt.mapActions,
				ot = {
					props: {
						pitch: String,
						keyType: String,
						index: Number
					},
					computed: {
						classes: function() {
							return {
								"black-key": "black" === this.keyType,
								"white-key": "white" === this.keyType
							}
						},
						caption: function() {
							return /C[0-9]/.test(this.pitch) ? this.pitch : ""
						},
						keyDimensions: function() {
							return "white" === this.keyType ? {
								height: 12 * j / 7 + "px",
								top: this.index * j + "px",
								width: P + "px"
							} : {
								height: j + "px",
								top: this.index * j + "px",
								width: P - 20 + "px"
							}
						}
					},
					methods: nt({}, it(["startPreview", "finishPreview"]), {
						mousedown: function() {
							window.addEventListener("mouseup", this.mouseup), this.startPreview({
								keyNumber: Q(this.pitch)
							})
						},
						mouseup: function() {
							window.removeEventListener("mouseup", this.mouseup), this.finishPreview()
						}
					})
				},
				at = ot,
				st = (n("2b95"), Object(l["a"])(at, z, W, !1, null, "49a1643a", null)),
				ct = st.exports,
				ut = Object(U["a"])("sequence"),
				lt = ut.mapState,
				pt = {
					components: {
						Key: ct
					},
					data: function() {
						return {
							keys: Z.map(function(t) {
								return {
									type: tt(t),
									name: t
								}
							}).reverse()
						}
					},
					computed: lt(["scrollTopPosition"]),
					watch: {
						scrollTopPosition: function() {
							this.$el.scrollTop = this.scrollTopPosition
						}
					}
				},
				dt = pt,
				ft = (n("16f9"), Object(l["a"])(dt, X, G, !1, null, "077334b7", null)),
				ht = ft.exports,
				mt = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						ref: "scoreContainer",
						staticClass: "score",
						on: {
							scroll: t.onScroll
						}
					}, [n("div", {
						staticClass: "inner",
						style: {
							width: t.width
						}
					}, [n("div", {
						staticClass: "grid",
						style: {
							opacity: t.gridOpacity
						}
					}, [t._l(t.keys, function(t, e) {
						return n("score-row", {
							key: e + "-key",
							attrs: {
								keyNumber: t.number,
								keyType: t.type
							}
						})
					}), t._l(t.notes, function(t, e) {
						return n("note", {
							key: e + "-note",
							attrs: {
								index: e,
								track: t.track,
								storeKeyNumber: t.key,
								storeTiming: t.timing,
								storeLength: t.length
							}
						})
					}), t._l(t.origNotes, function(t, e) {
						return n("orig-note", {
							key: e + "-orig-note",
							attrs: {
								index: e,
								track: t.track,
								storeKeyNumber: t.key,
								storeTiming: t.timing,
								storeLength: t.length
							}
						})
					}), t._l(t.beats, function(t, e) {
						return n("score-line", {
							key: e + "-beat",
							attrs: {
								index: e
							}
						})
					})], 2), n("div", {
						staticClass: "grid-controls"
					}, [n("progress-line", {
						key: "progress-line"
					}), n("seed-line", {
						key: "seed-line"
					}), n("mask-start-line", {
						key: "mask-start-line"
					}), n("mask-end-line", {
						key: "mask-end-line"
					})], 1)])])
				},
				gt = [],
				bt = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "score-row",
						class: t.classes,
						style: {
							height: t.height
						},
						on: {
							click: t.handleClick
						}
					})
				},
				vt = [];
			n("28a5");

			function yt(t, e) {
				var n = t / k,
					r = n % e;
				return n - r + (r > e / 2 ? e : 0)
			}

			function wt(t) {
				return t * k
			}

			function Ot(t, e) {
				return 60 * t / e
			}

			function kt(t, e) {
				return t * e / 60
			}

			function jt(t) {
				var e = 12 * (_ + 1),
					n = t;
				return (n - e) * j
			}

			function Pt(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function St(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? Pt(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Pt(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var _t = Object(U["a"])("sequence"),
				Tt = _t.mapActions,
				xt = _t.mapMutations,
				Ct = _t.mapState,
				Lt = {
					props: {
						keyNumber: Number,
						keyType: String
					},
					data: function() {
						return {
							height: "".concat(j, "px"),
							clickCount: 0,
							clickTimer: null,
							delay: 250
						}
					},
					computed: St({}, Ct(["currentLength", "appState", "currentTrack"]), {
						classes: function() {
							return {
								"black-score": "black" === this.keyType,
								"white-score": "white" === this.keyType
							}
						}
					}),
					methods: St({}, Tt(["addNote", "startEditingScore", "finishEditingScore", "startPreview"]), {}, xt(["updatePlayOffset"]), {
						handleClick: function(t) {
							var e = this;
							t.preventDefault(), this.clickCount++, 1 === this.clickCount ? this.clickTimer = setTimeout(function() {
								e.clickCount = 0, e.seek(t)
							}, this.delay) : 2 === this.clickCount && (clearTimeout(this.clickTimer), this.clickCount = 0, this.add(t))
						},
						add: function(t) {
							if ("playing" !== this.appState) {
								var e = k / 2;
								this.addNote({
									key: this.keyNumber,
									timing: yt(t.offsetX - e, this.currentLength.value),
									length: this.currentLength.value,
									track: this.currentTrack
								}), this.startPreview({
									keyNumber: this.keyNumber,
									timeout: 2
								})
							}
						},
						seek: function(t) {
							var e = yt(t.offsetX, this.currentLength.value);
							this.updatePlayOffset(e)
						}
					})
				},
				Nt = Lt,
				Et = (n("9062"), Object(l["a"])(Nt, bt, vt, !1, null, "6e266526", null)),
				Dt = Et.exports,
				Mt = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "note",
						style: {
							bottom: t.bottom,
							left: t.left,
							width: t.width,
							height: t.height,
							opacity: t.opacity
						},
						on: {
							mousedown: t.startMoving,
							dblclick: t.remove
						}
					}, [n("div", {
						staticClass: "note-color",
						class: t.noteColor
					}), n("div", {
						staticClass: "selection begin",
						class: t.noteColor,
						on: {
							mousedown: function(e) {
								return e.stopPropagation(), t.startEditingStartTime(e)
							}
						}
					}), n("div", {
						staticClass: "selection end",
						class: t.noteColor,
						on: {
							mousedown: function(e) {
								return e.stopPropagation(), t.startEditingEndTime(e)
							}
						}
					})])
				},
				qt = [];

			function Rt(t, e, n) {
				return t >= 0 && n >= 12 * _ && n <= 12 * (T + 1)
			}

			function It(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function At(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? It(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : It(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var Bt = Object(U["a"])("sequence"),
				$t = Bt.mapActions,
				Kt = Bt.mapState,
				Ft = Object(U["a"])("predict"),
				Vt = Ft.mapState,
				Xt = {
					props: {
						index: Number,
						track: Number,
						storeKeyNumber: Number,
						storeTiming: Number,
						storeLength: Number
					},
					data: function() {
						return {
							state: "normal",
							height: "".concat(j, "px"),
							editLength: this.storeLength,
							editTiming: this.storeTiming,
							editKeyNumber: this.storeKeyNumber,
							movingOffsetX: 0,
							movingFirstY: 0
						}
					},
					computed: At({}, Kt({
						minimumUnit: function(t) {
							return t.currentLength.value
						}
					}), {}, Kt(["progressTime", "appState", "version", "playbackVersion"]), {}, Vt(["seedLen", "maskStart", "maskEnd", "predictionType"]), {
						bottom: function() {
							return "normal" === this.state ? "".concat(jt(this.storeKeyNumber), "px") : "".concat(jt(this.editKeyNumber), "px")
						},
						left: function() {
							return "normal" === this.state ? "".concat(wt(this.storeTiming), "px") : "".concat(wt(this.editTiming), "px")
						},
						width: function() {
							return "normal" === this.state ? "".concat(wt(this.storeLength), "px") : "".concat(wt(this.editLength), "px")
						},
						opacity: function() {
							return "original" === this.playbackVersion ? .2 : .8
						},
						noteColor: function() {
							var t = this._.round(this.storeTiming, 3),
								e = this.predictionType,
								n = e.name,
								r = e.track;
							if ("playing" === this.appState) {
								var i = t < this.progressTime && t + this.storeLength > this.progressTime;
								if (i && "original" !== this.playbackVersion) return "note-playing"
							}
							return 0 === this.storeLength ? "note-delete" : ["rhythm", "pitch"].includes(n) ? t >= this.maskStart && t < this.maskEnd ? "note-".concat(n) : "note-default" : ["melody", "chords"].includes(n) && this.track !== r ? "note-default" : t >= this.seedLen ? "note-predict" : "note-default"
						},
						scoreLeftOffset: function() {
							return this.$el.parentNode.parentNode.scrollLeft - this.$el.parentNode.parentNode.getBoundingClientRect().left
						},
						scrollLeft: function() {
							return this.$el.parentNode.parentNode.scrollLeft
						},
						scrollTop: function() {
							return this.$el.parentNode.parentNode.scrollTop
						}
					}),
					watch: {
						version: function() {
							this.reload()
						},
						state: function() {
							this.reload()
						}
					},
					methods: At({}, $t(["updateNoteLength", "updateNoteTiming", "updateNoteKeyNumber", "removeNote", "startPreview"]), {
						reload: function() {
							this.editLength = this.storeLength, this.editTiming = this.storeTiming, this.editKeyNumber = this.storeKeyNumber
						},
						remove: function() {
							this.removeNote(this.index)
						},
						addListeners: function() {
							window.addEventListener("mousemove", this.updateEditing), window.addEventListener("mouseup", this.finishEditing)
						},
						removeListeners: function() {
							window.removeEventListener("mousemove", this.updateEditing), window.removeEventListener("mouseup", this.finishEditing)
						},
						startMoving: function(t) {
							this.addListeners(), this.state = "moving", this.movingOffsetX = t.offsetX, this.movingFirstY = t.clientY + this.scrollTop
						},
						startEditingEndTime: function() {
							this.addListeners(), this.state = "editing-end-time"
						},
						startEditingStartTime: function() {
							this.addListeners(), this.state = "editing-start-time"
						},
						updateEditing: function(t) {
							var e = this.editTiming,
								n = this.editLength,
								r = this.editKeyNumber;
							switch (this.state) {
								case "editing-end-time":
									n = yt(t.clientX + this.scoreLeftOffset, O.value) - this.editTiming;
									break;
								case "moving":
									e = yt(t.clientX + this.scoreLeftOffset - this.movingOffsetX, O.value), r = this.storeKeyNumber + Math.round((this.movingFirstY - (t.clientY + this.scrollTop)) / j), this.editKeyNumber !== r && this.startPreview({
										keyNumber: r,
										timeout: 2
									});
									break;
								case "editing-start-time":
									e = yt(t.clientX + this.scoreLeftOffset, O.value), n = this.storeLength + this.storeTiming - e;
									break
							}
							Rt(e, n, r) && (this.editTiming = e, this.editLength = n, this.editKeyNumber = r)
						},
						finishEditing: function() {
							this.removeListeners(), this.editLength <= 0 ? this.removeNote(this.index) : (this.state = "normal", this.movingFirstY = 0, this.movingOffsetX = 0, this.storeLength !== this.editLength && this.updateNoteLength({
								index: this.index,
								length: this.editLength
							}), this.storeTiming !== this.editTiming && this.updateNoteTiming({
								index: this.index,
								timing: this.editTiming
							}), this.storeKeyNumber !== this.editKeyNumber && this.updateNoteKeyNumber({
								index: this.index,
								keyNumber: this.editKeyNumber
							}))
						}
					})
				},
				Gt = Xt,
				zt = (n("0234"), Object(l["a"])(Gt, Mt, qt, !1, null, "613c03c1", null)),
				Wt = zt.exports,
				Ut = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "note-previous",
						style: {
							bottom: t.bottom,
							left: t.left,
							width: t.width,
							display: t.display
						}
					})
				},
				Yt = [];

			function Jt(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function Ht(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? Jt(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Jt(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var Zt = Object(U["a"])("predict"),
				Qt = Zt.mapState,
				te = {
					props: {
						index: Number,
						storeKeyNumber: Number,
						storeTiming: Number,
						storeLength: Number
					},
					mounted: function() {},
					data: function() {
						return {
							state: "normal",
							length: this.storeLength,
							timing: this.storeTiming,
							keyNumber: this.storeKeyNumber
						}
					},
					computed: Ht({}, Qt(["seedLen"]), {
						bottom: function() {
							return "".concat(jt(this.storeKeyNumber) + 2, "px")
						},
						left: function() {
							return "".concat(wt(this.storeTiming), "px")
						},
						width: function() {
							return "".concat(wt(this.storeLength), "px")
						},
						display: function() {
							return this._.round(this.storeTiming, 3) >= this.seedLen ? "block" : "none"
						}
					}),
					methods: {}
				},
				ee = te,
				ne = (n("6dc2"), Object(l["a"])(ee, Ut, Yt, !1, null, "238d3a82", null)),
				re = ne.exports,
				ie = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "note-original",
						style: {
							bottom: t.bottom,
							left: t.left,
							width: t.width,
							display: t.display,
							opacity: t.opacity,
							filter: t.filter
						}
					})
				},
				oe = [];

			function ae(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function se(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? ae(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ae(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var ce = Object(U["a"])("predict"),
				ue = ce.mapState,
				le = Object(U["a"])("sequence"),
				pe = le.mapState,
				de = {
					props: {
						index: Number,
						storeKeyNumber: Number,
						storeTiming: Number,
						storeLength: Number
					},
					mounted: function() {},
					data: function() {
						return {
							state: "normal",
							length: this.storeLength,
							timing: this.storeTiming,
							keyNumber: this.storeKeyNumber
						}
					},
					computed: se({}, ue(["seedLen"]), {}, pe(["playbackVersion", "appState", "progressTime"]), {
						bottom: function() {
							return "".concat(jt(this.storeKeyNumber) + 2, "px")
						},
						left: function() {
							return "".concat(wt(this.storeTiming), "px")
						},
						width: function() {
							return "".concat(wt(this.storeLength), "px")
						},
						display: function() {
							return "block"
						},
						filter: function() {
							if ("playing" === this.appState) {
								var t = this._.round(this.storeTiming, 3),
									e = t < this.progressTime && t + this.storeLength > this.progressTime;
								if (e && "original" === this.playbackVersion) return "brightness(50%)"
							}
							return "none"
						},
						opacity: function() {
							return "original" === this.playbackVersion ? .8 : .3
						}
					}),
					methods: {}
				},
				fe = de,
				he = (n("d946"), Object(l["a"])(fe, ie, oe, !1, null, "1bceae9e", null)),
				me = he.exports,
				ge = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						style: {
							left: t.left,
							"border-left-color": t.borderColor
						}
					})
				},
				be = [],
				ve = {
					props: {
						index: Number
					},
					computed: {
						left: function() {
							return "".concat(this.index * k, "px")
						},
						borderColor: function() {
							return this.index % 4 === 0 ? "rgb(95, 95, 95)" : "#bbdefb"
						}
					}
				},
				ye = ve,
				we = (n("7cb4"), Object(l["a"])(ye, ge, be, !1, null, "14377cef", null)),
				Oe = we.exports,
				ke = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "",
						style: {
							left: t.left,
							visibility: t.visibility
						},
						attrs: {
							id: t.divID
						},
						on: {
							mousedown: t.beginEditing
						}
					})
				},
				je = [],
				Pe = {
					props: {},
					data: function() {
						return {
							divID: "draggable-line"
						}
					},
					computed: {
						offset: function() {
							return 0
						},
						beat: {
							set: function(t) {},
							get: function() {
								return 0
							}
						},
						left: function() {
							return "".concat(this.beat * k + this.offset, "px")
						},
						hidden: function() {
							return !1
						},
						visibility: function() {
							return this.hidden ? "hidden" : "visible"
						}
					},
					methods: {
						moveLine: function(t) {
							var e = 1,
								n = this.$el.parentNode.parentNode.getBoundingClientRect().left,
								r = yt(t.clientX - n, e);
							r < 0 && (r = 0), this.beat = r
						},
						beginEditing: function(t) {
							this.addListeners()
						},
						addListeners: function() {
							window.addEventListener("mousemove", this.moveLine), window.addEventListener("mouseup", this.finishEditing)
						},
						removeListeners: function() {
							window.removeEventListener("mousemove", this.moveLine), window.removeEventListener("mouseup", this.finishEditing)
						},
						finishEditing: function() {
							this.removeListeners()
						}
					}
				},
				Se = Pe,
				_e = (n("9ce8"), Object(l["a"])(Se, ke, je, !1, null, null, null)),
				Te = _e.exports;

			function xe(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function Ce(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? xe(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : xe(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var Le, Ne, Ee = Object(U["a"])("sequence"),
				De = Ee.mapState,
				Me = Ee.mapMutations,
				qe = {
					extends: Te,
					data: function() {
						return {
							divID: "progress-line"
						}
					},
					computed: Ce({}, De(["progressTime", "playOffset", "appState"]), {
						offset: function() {
							return this.beat <= 0 ? 2 : 0
						},
						beat: {
							set: function(t) {
								this.updatePlayOffset(t)
							},
							get: function() {
								return "editing" === this.appState ? this.playOffset : this.progressTime
							}
						}
					}),
					methods: Ce({}, Me(["updatePlayOffset"]))
				},
				Re = qe,
				Ie = (n("3472"), Object(l["a"])(Re, Le, Ne, !1, null, "6bff2918", null)),
				Ae = Ie.exports;

			function Be(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function $e(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? Be(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Be(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var Ke, Fe, Ve = Object(U["a"])("predict"),
				Xe = Ve.mapState,
				Ge = Ve.mapMutations,
				ze = {
					extends: Te,
					props: {},
					data: function() {
						return {
							divID: "seed-line"
						}
					},
					computed: $e({}, Xe(["seedLen", "predictionType"]), {
						offset: function() {
							return this.beat <= 0 ? 2 : -4
						},
						hidden: function() {
							return ["pitch", "rhythm"].includes(this.predictionType.name)
						},
						beat: {
							set: function(t) {
								this.updateSeedLen(t)
							},
							get: function() {
								return this.seedLen
							}
						}
					}),
					methods: $e({}, Ge(["updateSeedLen"]))
				},
				We = ze,
				Ue = (n("0c43"), Object(l["a"])(We, Ke, Fe, !1, null, "25ff7860", null)),
				Ye = Ue.exports;

			function Je(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function He(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? Je(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Je(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var Ze, Qe, tn = Object(U["a"])("predict"),
				en = tn.mapState,
				nn = tn.mapMutations,
				rn = {
					extends: Te,
					data: function() {
						return {
							divID: "mask-start-line"
						}
					},
					computed: He({}, en(["maskStart", "maskEnd", "predictionType"]), {
						offset: function() {
							return this.beat <= 0 ? 2 : -4
						},
						hidden: function() {
							return null === this.maskStart || !["pitch", "rhythm"].includes(this.predictionType.name)
						},
						beat: {
							set: function(t) {
								t < this.maskEnd && this.updateMaskStart(t)
							},
							get: function() {
								return this.maskStart
							}
						}
					}),
					methods: He({}, nn(["updateMaskStart"]))
				},
				on = rn,
				an = (n("b8a0"), Object(l["a"])(on, Ze, Qe, !1, null, "30acfff8", null)),
				sn = an.exports;

			function cn(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function un(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? cn(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : cn(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var ln, pn, dn = Object(U["a"])("predict"),
				fn = dn.mapState,
				hn = dn.mapMutations,
				mn = {
					extends: Te,
					data: function() {
						return {
							divID: "mask-end-line"
						}
					},
					computed: un({}, fn(["maskStart", "maskEnd", "predictionType"]), {
						offset: function() {
							return this.beat <= 0 ? 2 : -4
						},
						hidden: function() {
							return null === this.maskEnd || !["pitch", "rhythm"].includes(this.predictionType.name)
						},
						beat: {
							set: function(t) {
								t > this.maskStart && this.updateMaskEnd(t)
							},
							get: function() {
								return this.maskEnd
							}
						}
					}),
					methods: un({}, hn(["updateMaskEnd"]))
				},
				gn = mn,
				bn = (n("817c"), Object(l["a"])(gn, ln, pn, !1, null, "39d7288a", null)),
				vn = bn.exports;

			function yn(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function wn(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? yn(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : yn(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var On = Object(U["a"])("sequence"),
				kn = On.mapActions,
				jn = On.mapState,
				Pn = On.mapGetters,
				Sn = {
					components: {
						ScoreRow: Dt,
						PrevNote: re,
						OrigNote: me,
						Note: Wt,
						ScoreLine: Oe,
						ProgressLine: Ae,
						SeedLine: Ye,
						MaskStartLine: sn,
						MaskEndLine: vn
					},
					props: {
						gridOpacity: Number
					},
					data: function() {
						return {
							keys: Z.map(function(t) {
								return {
									type: tt(t),
									number: Q(t)
								}
							}).reverse(),
							scoreScrollLeft: 0,
							scoreRect: {
								left: 0,
								top: 0,
								right: 0,
								bottom: 0
							}
						}
					},
					computed: wn({}, jn(["notes", "prevNotes", "origNotes"]), {}, Pn(["scoreLength"]), {
						beats: function() {
							return console.log("Beats", this.scoreLength), Array(Math.ceil(this.scoreLength))
						},
						width: function() {
							return "".concat(this.scoreLength * k, "px")
						},
						scoreLeftOffset: function() {
							return this.scoreScrollLeft - this.scoreRect.left
						}
					}),
					mounted: function() {
						this.scoreRect = this.$el.getBoundingClientRect(), window.addEventListener("resize", this.onResize)
					},
					methods: wn({}, kn(["scrollLeft"]), {
						onScroll: function() {
							this.scoreScrollLeft = this.$el.scrollLeft, this.scrollLeft(this.scoreScrollLeft)
						},
						onResize: function() {
							this.scoreRect = this.$el.getBoundingClientRect()
						}
					})
				},
				_n = Sn,
				Tn = (n("53f8"), Object(l["a"])(_n, mt, gt, !1, null, "120ecda2", null)),
				xn = Tn.exports,
				Cn = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("v-tooltip", {
						attrs: {
							right: ""
						},
						scopedSlots: t._u([{
							key: "activator",
							fn: function(e) {
								var r = e.on;
								return [n("v-btn", t._g({
									attrs: {
										id: t.buttonID,
										color: "blue darken-2",
										dark: "",
										fab: "",
										large: ""
									},
									on: {
										click: t.toggle
									}
								}, r), [n("v-icon", [t._v(t._s(t.icon))])], 1)]
							}
						}])
					}, [n("div", [t._v("播放!")])])
				},
				Ln = [];

			function Nn(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function En(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? Nn(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Nn(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var Dn = Object(U["a"])("sequence"),
				Mn = Dn.mapActions,
				qn = Dn.mapState,
				Rn = Object(U["a"])("predict"),
				In = Rn.mapMutations,
				An = {
					props: {
						buttonID: String
					},
					computed: En({}, qn(["appState"]), {
						icon: function() {
							return "playing" === this.appState ? "stop" : "play_arrow"
						}
					}),
					methods: En({}, Mn(["play", "stop"]), {}, In(["updateTutorialStep"]), {
						toggle: function() {
							this.updateTutorialStep(2), "editing" === this.appState ? this.play() : this.stop()
						}
					})
				},
				Bn = An,
				$n = Object(l["a"])(Bn, Cn, Ln, !1, null, null, null),
				Kn = $n.exports;

			function Fn(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function Vn(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? Fn(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Fn(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var Xn = Object(U["a"])("predict"),
				Gn = Xn.mapState,
				zn = {
					name: "sequencer",
					components: {
						Keyboard: ht,
						Score: xn,
						PlayButton: Kn
					},
					computed: Vn({}, Gn(["tutorialStep"]), {
						gridOpacity: function() {
							return 1 !== this.tutorialStep ? 1 : .4
						}
					}),
					methods: {
						scrollBottom: function() {
							var t = this.$refs.scrollSection;
							t.scrollTop = t.scrollHeight
						}
					},
					mounted: function() {
						this.scrollBottom()
					}
				},
				Wn = zn,
				Un = (n("efe3"), n("dbef"), Object(l["a"])(Wn, F, V, !1, null, "962b792e", null)),
				Yn = Un.exports,
				Jn = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "header-controls"
					}, [n("search-table", {
						staticClass: "header-container"
					}), n("span", {
						ref: "editableTitle",
						staticClass: "header-container",
						attrs: {
							id: "sequence-title",
							contenteditable: "true"
						},
						on: {
							blur: function(e) {
								return t.updateSeqName(e.target.textContent)
							}
						}
					}), n("div", {
						staticClass: "header-container"
					}, [n("v-btn", {
						attrs: {
							outlined: "",
							small: "",
							color: "green lighten-1"
						},
						on: {
							click: t.exportMidi
						}
					}, [t._v("下載")]), n("v-btn", {
						attrs: {
							outlined: "",
							small: "",
							color: "green lighten-1"
						},
						on: {
							click: t.share
						}
					}, [t._v("分享")])], 1), this.origNotes.length > 0 ? n("div", {
						staticClass: "playback-version"
					}, [n("v-btn-toggle", {
						staticClass: "control-group-toggle",
						model: {
							value: t.selectPlaybackVersion,
							callback: function(e) {
								t.selectPlaybackVersion = e
							},
							expression: "selectPlaybackVersion"
						}
					}, [n("v-btn", {
						attrs: {
							text: "",
							value: "prediction",
							color: "red"
						}
					}, [t._v("Prediction")]), n("v-btn", {
						attrs: {
							text: "",
							value: "original",
							color: "green"
						}
					}, [t._v("Original")])], 1)], 1) : t._e()], 1)
				},
				Hn = [],
				Zn = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", [n("v-btn", {
						attrs: {
							outlined: "",
							small: "",
							color: "green lighten-1"
						},
						on: {
							click: function(e) {
								t.showDialog = !0
							}
						}
					}, [t._v("\n 歌曲列表 \n")]), t._.isEmpty(t.sid) ? t._e() : n("v-btn", {
						attrs: {
							outlined: "",
							small: "",
							color: "green lighten-1"
						},
						on: {
							click: t.restart
						}
					}, [t._v("\n 重整 \n")]), n("v-dialog", {
						attrs: {
							"max-width": "1000px"
						},
						model: {
							value: t.showDialog,
							callback: function(e) {
								t.showDialog = e
							},
							expression: "showDialog"
						}
					}, [n("v-card", [n("v-card-title", [n("v-text-field", {
						attrs: {
							"append-icon": "search",
							label: t.searchLabel,
							"single-line": "",
							"hide-details": ""
						},
						model: {
							value: t.searchResults,
							callback: function(e) {
								t.searchResults = e
							},
							expression: "searchResults"
						}
					}), n("v-spacer"), n("v-btn", {
						attrs: {
							outlined: "",
							small: "",
							color: "green lighten-1"
						},
						on: {
							click: t.shuffle
						}
					}, [t._v("\n          隨機載入\n          "), n("v-icon", [t._v("shuffle")])], 1), n("v-btn", {
						attrs: {
							outlined: "",
							small: "",
							color: "green lighten-1"
						},
						on: {
							click: function(e) {
								return t.$refs.fileUpload.click()
							}
						}
					}, [t._v("\n          載入歌曲\n          "), n("v-icon", [t._v("folder")]), n("input", {
						ref: "fileUpload",
						attrs: {
							id: "fileUpload",
							type: "file",
							hidden: ""
						},
						on: {
							change: function(e) {
								return t.loadLocalFile(e)
							}
						}
					})], 1), n("v-btn", {
						attrs: {
							outlined: "",
							small: "",
							color: "green lighten-1"
						},
						on: {
							click: t.blankSheet
						}
					}, [t._v("\n          空白頁\n          "), n("v-icon", [t._v("create_new_folder")])], 1)], 1), n("v-data-table", {
						attrs: {
							headers: t.headers,
							items: t.results
						},
						on: {
							"click:row": t.selectSong
						},
						scopedSlots: t._u([{
							key: "items",
							fn: function(e) {
								return [n("tr", [n("td", {
									staticClass: "text-xs-left"
								}, [t._v(t._s(e.item.title))]), n("td", {
									staticClass: "text-xs-left"
								}, [t._v(t._s(e.item.artist))]), n("td", {
									staticClass: "text-xs-right"
								}, [t._v(t._s(e.item.section))])])]
							}
						}, {
							key: "no-results",
							fn: function() {
								return [n("v-alert", {
									attrs: {
										value: !0,
										color: "error",
										icon: "warning"
									}
								}, [t._v('\n            Your search for "' + t._s(t.term) + '" found no results.\n          ')])]
							},
							proxy: !0
						}])
					})], 1)], 1)], 1)
				},
				Qn = [],
				tr = (n("96cf"), n("3b8d")),
				er = (n("386d"), n("ffe7")),
				nr = n.n(er),
				rr = n("5118");

			function ir(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function or(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? ir(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ir(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var ar = Object(U["a"])("predict"),
				sr = ar.mapActions,
				cr = ar.mapState,
				ur = ar.mapMutations,
				lr = Object(U["a"])("sequence"),
				pr = lr.mapActions,
				dr = {
					name: "search-table",
					props: {
						searchLabel: {
							type: String,
							default: "搜尋歌曲..."
						}
					},
					data: function() {
						return {
							results: [],
							fuse: null,
							term: null,
							debounce: null,
							error: "",
							showDialog: !1,
							headers: [{
								text: "名稱",
								align: "left",
								value: "title",
								width: "50%"
							}, {
								text: "作者",
								width: "30%",
								align: "left",
								value: "artist"
							}, {
								text: "類別",
								width: "20%",
								align: "right",
								value: "section"
							}]
						}
					},
					computed: or({}, cr(["songs", "sid"]), {
						searchResults: {
							set: function(t) {
								null !== this.debounce && this.debounce(t)
							},
							get: function() {
								return null
							}
						}
					}),
					watch: {
						songs: function() {
							this.loadSearch()
						}
					},
					methods: or({}, sr(["fetchSongs", "saveMidi"]), {}, pr(["loadMidiBuffer", "clear"]), {}, ur(["updateSID"]), {
						loadSearch: function() {
							if (!this._.isEmpty(this.songs) && null === this.fuse) {
								var t = {
									shouldSort: !0,
									threshold: .6,
									location: 0,
									distance: 100,
									maxPatternLength: 32,
									minMatchCharLength: 1,
									keys: ["artist", "title"]
								};
								this.fuse = new nr.a(this.songs, t), this.debounce = this._.debounce(this.updateSearch, 100), this.results = this.songs
							}
						},
						blankSheet: function() {
							this.$router.push({
								path: "/song/blank"
							}), this.showDialog = !1
						},
						restart: function() {
							this.$router.push({
								path: "/song/".concat(this.sid)
							})
						},
						shuffle: function() {
							this.$router.push({
								path: "/shuffle"
							}), this.showDialog = !1
						},
						selectSong: function(t) {
							this.$router.push({
								path: "/song/".concat(t.sid)
							}), this.showDialog = !1
						},
						updateSearch: function(t) {
							var e = this;
							null === this.fuse || this._.isEmpty(t) || this._.isEmpty(this.songs) || Object(rr["setTimeout"])(function() {
								e.results = e.fuse.search(t, {
									limit: 50
								})
							}, 0)
						},
						loadLocalFile: function() {
							var t = Object(tr["a"])(regeneratorRuntime.mark(function t(e) {
								var n, r, i, o, a = this;
								return regeneratorRuntime.wrap(function(t) {
									while (1) switch (t.prev = t.next) {
										case 0:
											if (n = this._.get(e, "target.files[0]"), r = this._.get(n, "name", "").split("."), i = r.pop(), "mid" === i) {
												t.next = 6;
												break
											}
											return console.log("Error loading file", n), t.abrupt("return");
										case 6:
											this.clear(), o = new FileReader, o.fileName = r[0], o.onload = function(t) {
												return a.loadMidiBuffer({
													midiBuffer: t.target.result,
													seqName: t.target.fileName,
													savePrevious: !1
												})
											}, o.readAsArrayBuffer(n), Object(rr["setTimeout"])(Object(tr["a"])(regeneratorRuntime.mark(function t() {
												var e;
												return regeneratorRuntime.wrap(function(t) {
													while (1) switch (t.prev = t.next) {
														case 0:
															return t.next = 2, a.saveMidi();
														case 2:
															e = t.sent, a.updateSID(e), a.$router.push({
																path: "/song/".concat(e)
															}), a.showDialog = !1;
														case 6:
														case "end":
															return t.stop()
													}
												}, t)
											})), 1e3);
										case 12:
										case "end":
											return t.stop()
									}
								}, t, this)
							}));

							function e(e) {
								return t.apply(this, arguments)
							}
							return e
						}()
					}),
					mounted: function() {
						this.fetchSongs()
					}
				},
				fr = dr,
				hr = (n("a1fb"), Object(l["a"])(fr, Zn, Qn, !1, null, "03f18144", null)),
				mr = hr.exports;

			function gr(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function br(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? gr(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : gr(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var vr = Object(U["a"])("sequence"),
				yr = vr.mapActions,
				wr = vr.mapState,
				Or = {
					name: "header-controls",
					data: function() {
						return {}
					},
					computed: br({}, wr(["playbackVersion", "seqName", "origNotes"]), {
						selectPlaybackVersion: {
							set: function(t) {
								this.updatePlaybackVersion({
									playbackVersion: t
								})
							},
							get: function() {
								return this.playbackVersion
							}
						}
					}),
					watch: {
						seqName: function(t) {
							console.log("Seq name changed:", t), this.$refs.editableTitle.textContent = t
						}
					},
					methods: br({}, yr(["exportMidi", "clear", "updatePlaybackVersion", "updateSeqName"]), {
						share: function() {
							var t = window.location.href,
								e = "聽看看我剛做的音樂~ #MusicHub";
							window.open("http://twitter.com/share?url=" + encodeURIComponent(t) + "&text=" + encodeURIComponent(e), "", "left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0")
						}
					}),
					mounted: function() {},
					components: {
						SearchTable: mr
					}
				},
				kr = Or,
				jr = (n("b3d0"), Object(l["a"])(kr, Jn, Hn, !1, null, "e7e3ca06", null)),
				Pr = jr.exports,
				Sr = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "footer-controls"
					}, [n("sequence-controls", {
						attrs: {
							id: "sequence-controls"
						}
					}), n("regen-controls", {
						attrs: {
							id: "regen-controls"
						}
					}), n("predict-controls", {
						attrs: {
							id: "predict-controls"
						}
					})], 1)
				},
				_r = [],
				Tr = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "control-group"
					}, [n("div", {
						staticClass: "control-group-header"
					}, [t._v("播放設定")]), n("div", {
						staticClass: "control-group-content"
					}, [n("div", {
						staticClass: "control-group-control"
					}, [n("div", {
						staticClass: "control-group-label"
					}, [t._v("速度: " + t._s(this.bpm))]), n("v-slider", {
						staticClass: "control-group-slider",
						attrs: {
							id: "bpm",
							color: "blue",
							min: 60,
							max: 150,
							step: 1,
							"hide-details": ""
						},
						model: {
							value: t.selectBPM,
							callback: function(e) {
								t.selectBPM = e
							},
							expression: "selectBPM"
						}
					})], 1), n("div", {
						staticClass: "control-group-control"
					}, [n("div", {
						staticClass: "control-group-label"
					}, [t._v("樂器")]), n("v-btn-toggle", {
						staticClass: "control-group-toggle",
						model: {
							value: t.selectInstrumentType,
							callback: function(e) {
								t.selectInstrumentType = e
							},
							expression: "selectInstrumentType"
						}
					}, [n("v-btn", {
						attrs: {
							text: "",
							value: "piano"
						}
					}, [t._v("\n          鋼琴\n        ")]), n("v-btn", {
						attrs: {
							text: "",
							value: "synth"
						}
					}, [t._v("\n          混音\n        ")])], 1)], 1)])])
				},
				xr = [];

			function Cr(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function Lr(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? Cr(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Cr(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var Nr = Object(U["a"])("sequence"),
				Er = Nr.mapActions,
				Dr = Nr.mapState,
				Mr = {
					data: function() {
						return {}
					},
					computed: Lr({}, Dr(["appState", "bpm", "instrumentType", "progressTime"]), {
						icon: function() {
							return "playing" === this.appState ? "stop" : "play_arrow"
						},
						selectBPM: {
							set: function(t) {
								this.updateBPM(t)
							},
							get: function() {
								return this.bpm
							}
						},
						selectInstrumentType: {
							set: function(t) {
								this.updateInstrumentType({
									instrumentType: t
								})
							},
							get: function() {
								return this.instrumentType
							}
						}
					}),
					methods: Lr({}, Er(["play", "stop", "updateBPM", "updateInstrumentType"]), {
						toggle: function() {
							"editing" === this.appState ? this.play() : this.stop()
						}
					}),
					mounted: function() {}
				},
				qr = Mr,
				Rr = (n("36f9"), Object(l["a"])(qr, Tr, xr, !1, null, "68e0a0f3", null)),
				Ir = Rr.exports,
				Ar = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", [n("div", {
						staticClass: "control-group"
					}, [n("v-btn-toggle", {
						staticClass: "control-group-toggle",
						attrs: {
							mandatory: ""
						},
						model: {
							value: t.selectPredictionType,
							callback: function(e) {
								t.selectPredictionType = e
							},
							expression: "selectPredictionType"
						}
					}, t._l(t.predictionTypes, function(e) {
						return n("v-btn", {
							key: e.name,
							attrs: {
								text: "",
								value: e,
								color: "red"
							}
						}, [t._v("\n        " + t._s(e.displayName) + "\n      ")])
					}), 1), n("label", {
						attrs: {
							id: "prediction-type-hint"
						}
					}, [t._v("\n      " + t._s(t.predictionType.description) + "\n    ")])], 1)])
				},
				Br = [];

			function $r(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function Kr(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? $r(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : $r(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var Fr = Object(U["a"])("predict"),
				Vr = Fr.mapMutations,
				Xr = Fr.mapState,
				Gr = {
					name: "regen-controls",
					data: function() {
						return {
							error: "",
							predictionTypes: x
						}
					},
					computed: Kr({}, Xr(["predictionType"]), {
						noteTempPCT: function() {
							return parseInt((this.noteTemp - .7) / .9 * 100)
						},
						durationTempPCT: function() {
							return parseInt((this.durationTemp - .3) / .7 * 100)
						},
						selectPredictionType: {
							set: function(t) {
								this.updatePredictionType(t)
							},
							get: function() {
								return this.predictionType
							}
						}
					}),
					methods: Kr({}, Vr(["updatePredictionType"])),
					mounted: function() {},
					components: {}
				},
				zr = Gr,
				Wr = (n("45f5"), Object(l["a"])(zr, Ar, Br, !1, null, "4131a14f", null)),
				Ur = Wr.exports,
				Yr = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "control-group"
					}, [n("div", {
						staticClass: "control-group-header"
					}, [t._v("創作設定")]), n("div", {
						staticClass: "control-group-content"
					}, [n("div", {
						staticClass: "control-group-control"
					}, [n("div", {
						staticClass: "control-group-label"
					}, [t._v("音調: " + t._s(t.noteTempPCT) + "%")]), n("v-slider", {
						staticClass: "control-group-slider",
						attrs: {
							id: "noteTemp",
							color: "red",
							type: "range",
							min: .1,
							max: 2.1,
							step: .05,
							"hide-details": ""
						},
						model: {
							value: t.selectNoteTemp,
							callback: function(e) {
								t.selectNoteTemp = e
							},
							expression: "selectNoteTemp"
						}
					})], 1), n("div", {
						staticClass: "control-group-control"
					}, [n("div", {
						staticClass: "control-group-label"
					}, [t._v("節奏: " + t._s(t.durationTempPCT) + "%")]), n("v-slider", {
						staticClass: "control-group-slider",
						attrs: {
							id: "durTemp",
							color: "red",
							type: "range",
							min: .1,
							max: 2.1,
							step: .05,
							"hide-details": ""
						},
						model: {
							value: t.selectDurationTemp,
							callback: function(e) {
								t.selectDurationTemp = e
							},
							expression: "selectDurationTemp"
						}
					})], 1)])])
				},
				Jr = [];

			function Hr(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function Zr(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? Hr(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Hr(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var Qr = Object(U["a"])("predict"),
				ti = Qr.mapMutations,
				ei = Qr.mapState,
				ni = {
					name: "predict-controls",
					data: function() {
						return {
							error: ""
						}
					},
					computed: Zr({}, ei(["nSteps", "seedLen", "durationTemp", "noteTemp"]), {
						selectNoteTemp: {
							set: function(t) {
								this.updateNoteTemp(t)
							},
							get: function() {
								return this.noteTemp
							}
						},
						selectDurationTemp: {
							set: function(t) {
								this.updateDurationTemp(t)
							},
							get: function() {
								return this.durationTemp
							}
						},
						noteTempPCT: function() {
							return parseInt((this.noteTemp - .1) / 2 * 100)
						},
						durationTempPCT: function() {
							return parseInt((this.durationTemp - .1) / 2 * 100)
						}
					}),
					methods: Zr({}, ti(["updateSteps", "updateSeedLen", "updateNoteTemp", "updateDurationTemp"])),
					mounted: function() {},
					components: {}
				},
				ri = ni,
				ii = (n("f80c"), Object(l["a"])(ri, Yr, Jr, !1, null, "3d15187a", null)),
				oi = ii.exports,
				ai = {
					components: {
						SequenceControls: Ir,
						RegenControls: Ur,
						PredictControls: oi
					}
				},
				si = ai,
				ci = (n("4fbf"), Object(l["a"])(si, Sr, _r, !1, null, null, null)),
				ui = ci.exports,
				li = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("v-tooltip", {
						attrs: {
							left: ""
						},
						scopedSlots: t._u([{
							key: "activator",
							fn: function(e) {
								var r = e.on;
								return [n("v-btn", t._g({
									style: {
										left: t.left
									},
									attrs: {
										id: "generate-button",
										color: "red darken-2",
										dark: "",
										large: "",
										fab: ""
									},
									on: {
										click: t.predict
									}
								}, r), [n("v-icon", {
									attrs: {
										id: ""
									}
								}, [t._v("cached")])], 1)]
							}
						}]),
						model: {
							value: t.showTooltip,
							callback: function(e) {
								t.showTooltip = e
							},
							expression: "showTooltip"
						}
					}, [n("div", [t._v("生成!")])])
				},
				pi = [],
				di = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "tutorial-predict",
						on: {
							click: t.dismiss
						}
					}, [n("svg", {
						staticClass: "arrow-generate",
						staticStyle: {
							"enable-background": "new 0 0 120 100"
						},
						attrs: {
							version: "1.1",
							xmlns: "http://www.w3.org/2000/svg",
							"xmlns:xlink": "http://www.w3.org/1999/xlink",
							x: "0px",
							y: "0px",
							viewBox: "0 0 120 100",
							"xml:space": "preserve"
						}
					}, [n("path", {
						staticClass: "st0 draw-arrow",
						attrs: {
							stroke: "null",
							id: "ag",
							d: "m11.076091,12.500004c56.035746,-3.602122 67.399242,0.71061 74.550715,17.915384c0.297942,1.864719 6.050072,27.60371 4.645055,63.484612",
							"stroke-linejoin": "round",
							"stroke-linecap": "round"
						}
					}), n("path", {
						staticClass: "draw-arrow tail-1",
						attrs: {
							id: "ag-t1",
							d: "m91.6,95.1c6.4,-7.8 8.6,-9.5 12.6,-14.1",
							"stroke-linejoin": "round",
							"stroke-linecap": "round"
						}
					}), n("path", {
						staticClass: "draw-arrow tail-2",
						attrs: {
							stroke: "null",
							id: "ag-t2",
							d: "m89.8,95.5c-7.2,-5.3 -10.3,-10.7 -14.5,-13.1",
							"stroke-linejoin": "round",
							"stroke-linecap": "round"
						}
					})]), t._m(0)])
				},
				fi = [function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						attrs: {
							id: "tutorial-generate"
						}
					}, [n("p", [t._v("Time to generate new music!")]), n("p", {
						attrs: {
							id: "tutorial-generate-subtext"
						}
					}, [t._v("Click me to remix!")])])
				}];

			function hi(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function mi(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? hi(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : hi(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var gi = Object(U["a"])("predict"),
				bi = gi.mapMutations,
				vi = {
					methods: mi({}, bi(["updateTutorialStep"]), {
						dismiss: function() {
							this.updateTutorialStep(2)
						}
					}),
					mounted: function() {
						var t = this;
						setTimeout(function() {
							t.updateTutorialStep(2)
						}, 16e3)
					}
				},
				yi = vi,
				wi = (n("df3f"), Object(l["a"])(yi, di, fi, !1, null, "ff062bde", null)),
				Oi = wi.exports;

			function ki(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function ji(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? ki(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ki(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var Pi = Object(U["a"])("predict"),
				Si = Pi.mapState,
				_i = Pi.mapActions,
				Ti = Object(U["a"])("sequence"),
				xi = Ti.mapState,
				Ci = {
					props: {
						scoreRect: {}
					},
					data: function() {
						return {
							parentNode: null,
							showTooltip: !1
						}
					},
					computed: ji({}, Si(["seedLen", "maskStart", "predictionType"]), {}, xi(["scrollLeftPosition"]), {
						beat: function() {
							var t = this._.get(this.predictionType, "name");
							return ["pitch", "rhythm"].includes(t) ? this.maskStart : this.seedLen
						},
						left: function() {
							var t = this.beat * k,
								e = 50,
								n = t - this.scrollLeftPosition + P,
								r = 0;
							if (null !== this.parentNode) {
								var i = this.parentNode.getBoundingClientRect();
								r = i.right - i.left
							}
							return n < e + P ? n = e + P : n > r - e && (n = r - e), "".concat(n, "px")
						}
					}),
					methods: ji({}, _i(["predictMidi"]), {
						predict: function() {
							var t = Object(tr["a"])(regeneratorRuntime.mark(function t() {
								var e;
								return regeneratorRuntime.wrap(function(t) {
									while (1) switch (t.prev = t.next) {
										case 0:
											return this.showTooltip = !1, t.next = 3, this.predictMidi();
										case 3:
											e = t.sent, e && this.$router.push({
												path: "/predict/".concat(e)
											});
										case 5:
										case "end":
											return t.stop()
									}
								}, t, this)
							}));

							function e() {
								return t.apply(this, arguments)
							}
							return e
						}()
					}),
					mounted: function() {
						var t = this;
						this.parentNode = this.$el.parentNode, setTimeout(function() {
							t.showTooltip = !0, setTimeout(function() {
								t.showTooltip = !1
							}, 8e3)
						}, 1e3)
					},
					components: {
						TutorialPredict: Oi
					}
				},
				Li = Ci,
				Ni = (n("8cc9"), Object(l["a"])(Li, li, pi, !1, null, "552289c8", null)),
				Ei = Ni.exports,
				Di = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "loading-outer"
					}, [n("div", {
						staticClass: "loading-inner"
					}, [n("v-progress-circular", {
						attrs: {
							indeterminate: "",
							color: "green accent-3",
							size: 40
						}
					}), n("label", [t._v(t._s(t.value))]), n("v-progress-circular", {
						attrs: {
							indeterminate: "",
							color: "green accent-3",
							size: 40
						}
					})], 1)])
				},
				Mi = [],
				qi = {
					props: {
						value: String
					},
					computed: {}
				},
				Ri = qi,
				Ii = (n("a73f"), Object(l["a"])(Ri, Di, Mi, !1, null, "6391dd3d", null)),
				Ai = Ii.exports,
				Bi = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "tutorial-start"
					}, [n("svg", {
						staticStyle: {
							"enable-background": "new 0 0 43.1 85.9"
						},
						attrs: {
							version: "1.1",
							xmlns: "http://www.w3.org/2000/svg",
							"xmlns:xlink": "http://www.w3.org/1999/xlink",
							x: "0px",
							y: "0px",
							viewBox: "0 0 43.1 85.9",
							"xml:space": "preserve"
						}
					}, [n("path", {
						staticClass: "st0 draw-arrow",
						attrs: {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							d: "M11.3,2.5c-5.8,5-8.7,12.7-9,20.3s2,15.1,5.3,22c6.7,14,18,25.8,31.7,33.1"
						}
					}), n("path", {
						staticClass: "draw-arrow tail-1",
						attrs: {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							d: "M40.6,78.1C39,71.3,37.2,64.6,35.2,58"
						}
					}), n("path", {
						staticClass: "draw-arrow tail-2",
						attrs: {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							d: "M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9"
						}
					})]), t._m(0)])
				},
				$i = [function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "tutorial-text"
					}, [n("p", {
						staticClass: "tutorial-header"
					}, [t._v("Choose a song to start.")]), n("p", {
						staticClass: "tutorial-p"
					}, [t._v("We'll use this to generate new music in the same style!")])])
				}],
				Ki = {},
				Fi = Ki,
				Vi = (n("962c"), Object(l["a"])(Fi, Bi, $i, !1, null, "3f610dc8", null)),
				Xi = Vi.exports,
				Gi = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "tutorial-two",
						on: {
							click: t.dismiss
						}
					}, [n("svg", {
						staticClass: "arrow-play",
						staticStyle: {
							"enable-background": "new 0 0 43.1 85.9"
						},
						attrs: {
							version: "1.1",
							xmlns: "http://www.w3.org/2000/svg",
							"xmlns:xlink": "http://www.w3.org/1999/xlink",
							x: "0px",
							y: "0px",
							viewBox: "0 0 43.1 85.9",
							"xml:space": "preserve"
						}
					}, [n("path", {
						staticClass: "st0 draw-arrow",
						attrs: {
							id: "ap",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							d: "M11.3,2.5c-5.8,5-8.7,12.7-9,20.3s2,15.1,5.3,22c6.7,14,18,25.8,31.7,33.1"
						}
					}), n("path", {
						staticClass: "draw-arrow tail-1",
						attrs: {
							id: "ap-t1",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							d: "M40.6,78.1C39,71.3,37.2,64.6,35.2,58"
						}
					}), n("path", {
						staticClass: "draw-arrow tail-2",
						attrs: {
							id: "ap-t2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							d: "M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9"
						}
					})]), n("svg", {
						staticClass: "arrow-generate",
						staticStyle: {
							"enable-background": "new 0 0 120 100"
						},
						attrs: {
							version: "1.1",
							xmlns: "http://www.w3.org/2000/svg",
							"xmlns:xlink": "http://www.w3.org/1999/xlink",
							x: "0px",
							y: "0px",
							viewBox: "0 0 120 100",
							"xml:space": "preserve"
						}
					}, [n("path", {
						staticClass: "st0 draw-arrow",
						attrs: {
							stroke: "null",
							id: "ag",
							d: "m11.076091,12.500004c56.035746,-3.602122 67.399242,0.71061 74.550715,17.915384c0.297942,1.864719 6.050072,27.60371 4.645055,63.484612",
							"stroke-linejoin": "round",
							"stroke-linecap": "round"
						}
					}), n("path", {
						staticClass: "draw-arrow tail-1",
						attrs: {
							id: "ag-t1",
							d: "m91.6,95.1c6.4,-7.8 8.6,-9.5 12.6,-14.1",
							"stroke-linejoin": "round",
							"stroke-linecap": "round"
						}
					}), n("path", {
						staticClass: "draw-arrow tail-2",
						attrs: {
							stroke: "null",
							id: "ag-t2",
							d: "m89.8,95.5c-7.2,-5.3 -10.3,-10.7 -14.5,-13.1",
							"stroke-linejoin": "round",
							"stroke-linecap": "round"
						}
					})]), t._m(0), n("p", {
						attrs: {
							id: "tutorial-play"
						}
					}, [t._v("Play it back here!")])])
				},
				zi = [function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						attrs: {
							id: "tutorial-generate"
						}
					}, [n("p", [t._v("Time to generate new music!")]), n("p", {
						attrs: {
							id: "tutorial-generate-subtext"
						}
					}, [t._v("You'll get a new sequence with each time you click")])])
				}];

			function Wi(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function Ui(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? Wi(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Wi(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var Yi = Object(U["a"])("predict"),
				Ji = Yi.mapMutations,
				Hi = {
					methods: Ui({}, Ji(["updateTutorialStep"]), {
						dismiss: function() {
							this.updateTutorialStep(2)
						}
					}),
					mounted: function() {
						var t = this;
						setTimeout(function() {
							t.updateTutorialStep(2)
						}, 16e3)
					}
				},
				Zi = Hi,
				Qi = (n("c44e"), Object(l["a"])(Zi, Gi, zi, !1, null, "31c6a4cc", null)),
				to = Qi.exports;

			function eo(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function no(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? eo(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : eo(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var ro = Object(U["a"])("predict"),
				io = ro.mapActions,
				oo = ro.mapMutations,
				ao = ro.mapState,
				so = Object(U["a"])("sequence"),
				co = so.mapActions,
				uo = {
					name: "predict",
					data: function() {
						return {
							error: "",
							debug: !1
						}
					},
					computed: no({}, ao(["loadingState", "tutorialStep"]), {
						sequenceStyle: function() {
							return {
								visibility: 0 !== this.tutorialStep || this.debug ? "visible" : "hidden"
							}
						},
						loadingStyle: function() {
							return {
								display: null !== this.loadingState ? "block" : "none"
							}
						}
					}),
					watch: {
						$route: "fetchData"
					},
					created: function() {
						this.fetchData()
					},
					methods: no({}, io(["loadSong", "loadPrediction"]), {}, co(["clear"]), {}, oo(["updateTutorialStep", "updateSeedLen", "updateSID"]), {
						fetchData: function() {
							var t = this.$route.path;
							console.log("PATHS", t), console.log("params", this.$route.params);
							var e = this.$route.params.sid,
								n = this.$route.params.pid;
							e ? "blank" === e ? (this.updateSID(null), this.clear()) : this.loadSong(e) : n && this.loadPrediction(n)
						}
					}),
					components: {
						Sequencer: Yn,
						HeaderControls: Pr,
						FooterControls: ui,
						GenerateButton: Ei,
						Loading: Ai,
						Tutorial: Xi,
						TutorialTwo: to
					}
				},
				lo = uo,
				po = (n("c8cf"), Object(l["a"])(lo, B, $, !1, null, null, null)),
				fo = po.exports,
				ho = function() {
					var t = this,
						e = t.$createElement;
					t._self._c;
					return t._m(0)
				},
				mo = [function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "sheet"
					}, [n("div", {
						attrs: {
							id: "sheet-container"
						}
					})])
				}],
				go = n("2938");

			function bo(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function vo(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? bo(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : bo(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var yo = Object(U["a"])("predict"),
				wo = yo.mapActions,
				Oo = Object(U["a"])("sequence"),
				ko = Oo.mapState,
				jo = {
					name: "sheet",
					components: {},
					data: function() {
						return console.log(go["OpenSheetMusicDisplay"]), {
							osmd: null,
							containerWidth: 720
						}
					},
					computed: vo({}, ko(["notes"])),
					mounted: function() {
						console.log(go["OpenSheetMusicDisplay"]), this.osmd = new go["OpenSheetMusicDisplay"]("sheet-container", {
							drawingParameters: "compact",
							drawPartNames: !1
						}), this.updateSheet()
					},
					methods: vo({}, wo(["convertToXML"]), {
						loadSheet: function(t) {
							var e = this;
							this.osmd.load(t).then(function() {
								e.containerWidth = 900, e.osmd.render()
							})
						},
						updateSheet: function() {
							var t = Object(tr["a"])(regeneratorRuntime.mark(function t() {
								var e, n = this;
								return regeneratorRuntime.wrap(function(t) {
									while (1) switch (t.prev = t.next) {
										case 0:
											if (!this._.isEmpty(this.notes)) {
												t.next = 2;
												break
											}
											return t.abrupt("return");
										case 2:
											return t.next = 4, this.convertToXML();
										case 4:
											e = t.sent, this.osmd.load(e).then(function() {
												n.containerWidth = 900, n.osmd.render()
											});
										case 6:
										case "end":
											return t.stop()
									}
								}, t, this)
							}));

							function e() {
								return t.apply(this, arguments)
							}
							return e
						}()
					})
				},
				Po = jo,
				So = Object(l["a"])(Po, ho, mo, !1, null, null, null),
				_o = So.exports,
				To = [{
					sid: "99c5db9ce936b7a1c5faab57cc3f160c",
					display: "Call Me Maybe - Carly Rae Jepsen",
					seedLen: 10
				}, {
					sid: "aeee134e4034e5f98bb630c56d2f7f8c",
					display: "La Bamba - Ritchie Valen",
					seedLen: 13
				}, {
					sid: "b4c62f3d11f448db69c4fa15e27e9e8e",
					display: "Can You Feel The Love Tonight - Elton John",
					seedLen: 14
				}, {
					sid: "8f10995e036c5f590ca616dee0c9c7d7",
					display: "Colors Of The Wind - Disney",
					seedLen: 20
				}, {
					sid: "58890c433f173ba77220274017b8af92",
					display: "A Thousand Miles - Vanessa Carlton",
					seedLen: 12
				}, {
					sid: "19762ebd7059dd5f8809f98b2575d8c1",
					display: "Levels - Avicii",
					seedLen: 12
				}, {
					sid: "c4d9e72a92f931b2c72e84b6efee4b51",
					display: "Canon In D Major - Johann Pachelbel",
					seedLen: 12
				}, {
					sid: "de1fa62a9c209491d4fd81f1d1ceb55e",
					display: "In The Hall Of the Mountain King - Edvard Grieg",
					seedLen: 12
				}, {
					sid: "f8b65d3624d9a68e417792ec27de9296",
					display: "Scary Monsters And Nice Sprites - Skrillex"
				}, {
					sid: "2ad86f3ecd71b058eac9cc5ceba11db8",
					display: "I Want You Back - Jackson 5",
					seedLen: 28
				}, {
					sid: "999e8169b01f59fa28e63b142f35feda",
					display: "All I Want For Christmas Is You - Mariah Carey",
					seedLen: 12
				}, {
					sid: "7f0f162d111f880cf77ff9bed15acd5d",
					display: "Middle - Zedd",
					seedLen: 9
				}, {
					sid: "077b40997776b84366ee18056948ae38",
					display: "Locked Out Of Heaven - Bruno Mars",
					seedLen: 20
				}, {
					sid: "065b1c94fe8545bbe8eeec2f1bf4efa2",
					display: "Just Give Me A Reason - Pink",
					seedLen: 16
				}, {
					sid: "f2062929514d3084f73a1ad81bbbe01f",
					display: "Let It Go - Idina Menzel",
					seedLen: 20
				}, {
					sid: "68ce7fc929f395291507cc47510cd82c",
					display: "Where Is The Love - Black Eyed Peas",
					seedLen: 12
				}, {
					sid: "6ae7e284e78824ee4c17dc6e6bda361c",
					display: "Fuer Elise - Ludwig Van Beethoven",
					seedLen: 14
				}, {
					sid: "73b2b8e7db746b7e4b6fc3fa4658671b",
					display: "The Four Seasons Concert No 4 Winter - Antonio Vivaldi",
					seedLen: 15
				}];

			function xo() {
				return To[Math.floor(Math.random() * To.length)]
			}
			r["default"].use(f["a"]);
			var Co = new f["a"]({
					routes: [{
						path: "/about",
						name: "about",
						component: A
					}, {
						path: "/",
						redirect: "/shuffle"
					}, {
						path: "/shuffle",
						redirect: function(t) {
							var e = xo();
							return "/song/".concat(e.sid)
						}
					}, {
						path: "/song/:sid",
						component: fo
					}, {
						path: "/song/:sid",
						component: fo
					}, {
						path: "/predict/:pid",
						component: fo
					}, {
						path: "/sheet",
						name: "sheet",
						component: _o
					}],
					linkActiveClass: "active"
				}),
				Lo = n("a8db"),
				No = (n("5df3"), n("768b")),
				Eo = n("bc3a"),
				Do = n.n(Eo),
				Mo = n("21a6"),
				qo = Do.a.create({
					baseURL: "https://api.musicautobot.com/",
					timeout: 18e4
				}),
				Ro = "https://s3-us-west-2.amazonaws.com/ashaw-midi-web-server/",
				Io = {
					song: "examples/seed",
					songList: "examples/json/htlist.json",
					predict: "generated"
				};
			qo.interceptors.response.use(function(t) {
				return t
			}, function(t) {
				return console.log(t), Promise.reject(t)
			});
			var Ao = {
					axios: qo,
					fetchSongs: function() {
						var t = Object(tr["a"])(regeneratorRuntime.mark(function t() {
							var e;
							return regeneratorRuntime.wrap(function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, qo.get(Ro + Io.songList);
									case 2:
										return e = t.sent, t.abrupt("return", e.data);
									case 4:
									case "end":
										return t.stop()
								}
							}, t)
						}));

						function e() {
							return t.apply(this, arguments)
						}
						return e
					}(),
					fetchMidi: function() {
						var t = Object(tr["a"])(regeneratorRuntime.mark(function t(e, n) {
							var r, i, o;
							return regeneratorRuntime.wrap(function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return r = Io[n], i = e.split("").reverse().join(""), t.next = 4, qo.get(Ro + "".concat(r, "/").concat(i, ".mid"), {
											responseType: "arraybuffer"
										});
									case 4:
										return o = t.sent, t.abrupt("return", o.data);
									case 6:
									case "end":
										return t.stop()
								}
							}, t)
						}));

						function e(e, n) {
							return t.apply(this, arguments)
						}
						return e
					}(),
					fetchJson: function() {
						var t = Object(tr["a"])(regeneratorRuntime.mark(function t(e, n) {
							var r, i, o;
							return regeneratorRuntime.wrap(function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return r = Io[n], i = e.split("").reverse().join(""), t.next = 4, qo.get(Ro + "".concat(r, "/").concat(i, ".json"));
									case 4:
										return o = t.sent, t.abrupt("return", o.data);
									case 6:
									case "end":
										return t.stop()
								}
							}, t)
						}));

						function e(e, n) {
							return t.apply(this, arguments)
						}
						return e
					}(),
					loadState: function() {
						var t = Object(tr["a"])(regeneratorRuntime.mark(function t(e) {
							var n, r, i, o, a, s = arguments;
							return regeneratorRuntime.wrap(function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return n = s.length > 1 && void 0 !== s[1] ? s[1] : "predict", t.next = 3, Promise.all([this.fetchMidi(e, n), this.fetchJson(e, n)]);
									case 3:
										return r = t.sent, i = Object(No["a"])(r, 2), o = i[0], a = i[1], t.abrupt("return", {
											midiBuffer: o,
											store: a
										});
									case 8:
									case "end":
										return t.stop()
								}
							}, t, this)
						}));

						function e(e) {
							return t.apply(this, arguments)
						}
						return e
					}(),
					predictMidi: function() {
						var t = Object(tr["a"])(regeneratorRuntime.mark(function t(e) {
							var n, r, i, o, a;
							return regeneratorRuntime.wrap(function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return n = e.midi, r = Object(Lo["a"])(e, ["midi"]), i = new FormData, i.append("midi", this.midiToBlob(n)), y.a.forOwn(r, function(t, e) {
											i.append(e, t)
										}), o = {
											headers: {
												"content-type": "multipart/form-data"
											}
										}, t.next = 7, qo.post("predict/midi", i, o);
									case 7:
										return a = t.sent, console.log("Response:", a), t.abrupt("return", a.data);
									case 10:
									case "end":
										return t.stop()
								}
							}, t, this)
						}));

						function e(e) {
							return t.apply(this, arguments)
						}
						return e
					}(),
					convertToXML: function() {
						var t = Object(tr["a"])(regeneratorRuntime.mark(function t(e) {
							var n, r, i, o;
							return regeneratorRuntime.wrap(function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return n = e.midi, r = new FormData, r.append("midi", this.midiToBlob(n)), i = {
											headers: {
												"content-type": "multipart/form-data"
											}
										}, t.next = 6, qo.post("midi/convert", r, i);
									case 6:
										return o = t.sent, t.abrupt("return", o.data);
									case 8:
									case "end":
										return t.stop()
								}
							}, t, this)
						}));

						function e(e) {
							return t.apply(this, arguments)
						}
						return e
					}(),
					midiToBlob: function(t) {
						return new Blob([t.toArray()], {
							type: "audio/midi"
						})
					},
					exportMidi: function(t) {
						var e = t.midi,
							n = t.fileName;
						Object(Mo["saveAs"])(this.midiToBlob(e), n)
					},
					saveStore: function() {
						var t = Object(tr["a"])(regeneratorRuntime.mark(function t(e) {
							var n, r, i, o, a;
							return regeneratorRuntime.wrap(function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return n = e.midi, r = Object(Lo["a"])(e, ["midi"]), i = new FormData, i.append("midi", this.midiToBlob(n)), y.a.forOwn(r, function(t, e) {
											i.append(e, t)
										}), o = {
											headers: {
												"content-type": "multipart/form-data"
											}
										}, t.next = 7, qo.post("store/save", i, o);
									case 7:
										return a = t.sent, console.log("Response:", a), t.abrupt("return", a.data);
									case 10:
									case "end":
										return t.stop()
								}
							}, t, this)
						}));

						function e(e) {
							return t.apply(this, arguments)
						}
						return e
					}()
				},
				Bo = (n("55dd"), n("388a"));

			function $o(t) {
				var e = t.name,
					n = y.a.get(t, "header.tempos[0].bpm", 120),
					r = [];
				return t.tracks.forEach(function(t, e) {
					t.notes.forEach(function(t) {
						r.push({
							key: t.midi,
							track: e,
							timing: kt(t.time, n),
							length: kt(t.duration, n)
						})
					})
				}), {
					notes: r,
					bpm: n,
					midiName: e
				}
			}

			function Ko(t) {
				return new Bo["a"](t)
			}

			function Fo(t, e) {
				var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
					r = t.map(function(t, r) {
						var i = {
							midi: t.key,
							track: t.track,
							time: y.a.round(Ot(t.timing, e), 3),
							duration: Ot(t.length, e),
							velocity: .8
						};
						return n && (i["index"] = r), i
					}).sort(function(t, e) {
						return t.time - e.time
					}).filter(function(t) {
						return t.duration > 0
					}).filter(function(t) {
						return t.time >= -.1
					});
				return r
			}

			function Vo(t) {
				var e = t.bpm,
					n = t.name,
					r = void 0 === n ? "" : n,
					i = {
						name: r,
						ppq: 220,
						meta: [],
						tempos: [{
							ticks: 0,
							bpm: e
						}],
						timeSignatures: [{
							ticks: 0,
							timeSignature: [4, 4],
							measures: 0
						}]
					};
				return i
			}

			function Xo(t) {
				var e = t.name,
					n = void 0 === e ? "" : e;
				return {
					name: n,
					channel: 0,
					instrument: {
						number: 0,
						name: "acoustic grand piano",
						family: "piano"
					},
					controlChanges: {},
					notes: []
				}
			}

			function Go(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
					r = t.seqName,
					i = t.bpm,
					o = t.notes;
				null != e && (o = o.filter(function(t) {
					var r = -1 !== n && t.track !== n,
						i = y.a.round(t.timing, 3) < e;
					return !(t.length < 0) && (i || r)
				}));
				var a = new Bo["a"];
				a.header.fromJSON(Vo({
					bpm: i,
					seqName: r
				}));
				var s = Fo(o, i, !1),
					c = y.a.max(s.map(function(t) {
						return t.track
					})) + 1,
					u = y.a.range(c).map(function(t) {
						var e = a.addTrack();
						return e.fromJSON(Xo({
							seqName: r
						})), e
					});
				return s.forEach(function(t) {
					u[t.track].addNote(t)
				}), {
					midi: a,
					bpm: i,
					seqName: r
				}
			}
			var zo = {
					songs: [],
					sid: null,
					nSteps: 400,
					seedLen: 10,
					maskStart: 1,
					maskEnd: null,
					durationTemp: .7,
					noteTemp: 1.2,
					topK: 24,
					topP: .92,
					midiXML: null,
					tutorialStep: 10,
					loadingState: null,
					predictionType: x.next
				},
				Wo = {
					updateSID: function(t, e) {
						t.sid = e
					},
					updateTutorialStep: function(t, e) {
						t.tutorialStep
					},
					updateSongs: function(t, e) {
						t.songs = e
					},
					updateSteps: function(t, e) {
						t.nSteps = e
					},
					updateSeedLen: function(t, e) {
						t.seedLen = e
					},
					updateMaskStart: function(t, e) {
						t.maskStart = e
					},
					updateMaskEnd: function(t, e) {
						t.maskEnd = e
					},
					updatePredictionType: function(t, e) {
						t.predictionType = e, t.noteTemp = e.temp[0], t.durationTemp = e.temp[1], t.topK = e.filter[0], t.topP = e.filter[1]
					},
					updateNoteTemp: function(t, e) {
						t.noteTemp = e
					},
					updateDurationTemp: function(t, e) {
						t.durationTemp = e
					},
					updateMidiXML: function(t, e) {
						t.midiXML = e
					},
					fromSave: function(t, e) {
						for (var n in t.predictionType = C(e.predictionType, t.predictionType), delete e.predictionType, t) y.a.has(e, n) && (t[n] = e[n])
					},
					updateLoadingState: function(t, e) {
						t.loadingState = e, console.log("Updating loading state:", e)
					},
					showError: function(t, e) {
						var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2e3;
						t.loadingState = e, console.log("Updating with error:", e), setTimeout(function() {
							t.loadingState = null
						}, n)
					}
				},
				Uo = {
					fetchSongs: function() {
						var t = Object(tr["a"])(regeneratorRuntime.mark(function t(e) {
							var n;
							return regeneratorRuntime.wrap(function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										n = e.commit, Ao.fetchSongs().then(function(t) {
											n("updateSongs", t)
										});
									case 2:
									case "end":
										return t.stop()
								}
							}, t)
						}));

						function e(e) {
							return t.apply(this, arguments)
						}
						return e
					}(),
					predictMidi: function() {
						var t = Object(tr["a"])(regeneratorRuntime.mark(function t(e) {
							var n, r, i, o, a, s, c, u, l, p, d, f, h, m, g, b, v, w, O, k, j, P, S, _;
							return regeneratorRuntime.wrap(function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return n = e.commit, r = e.rootState, n("updateLoadingState", "Making music..."), n("updateTutorialStep", 2), i = r.predict, o = i.sid, a = i.nSteps, s = i.predictionType, c = i.durationTemp, u = i.noteTemp, l = i.seedLen, p = i.maskStart, d = i.maskEnd, f = i.topK, h = i.topP, m = Go(r.sequence), g = m.midi, b = m.bpm, v = m.seqName, w = {
											midi: g,
											bpm: b,
											seqName: v,
											originalSID: o,
											nSteps: a,
											predictionType: s.name,
											durationTemp: c,
											noteTemp: u,
											seedLen: l,
											maskStart: p,
											maskEnd: d,
											topK: f,
											topP: h
										}, O = y.a.omitBy(w, y.a.isNil), k = -10, j = setInterval(function() {
											k > 0 && n("updateLoadingState", "Generating steps (".concat(k, " / ").concat(a, ")...")), k += 1
										}, 100), setTimeout(function() {
											null != j && (clearInterval(j), n("showError", "Error: Timeout trying to generate sequence..."))
										}, 250 * a), P = null, S = null, t.prev = 12, t.next = 15, Ao.predictMidi(O);
									case 15:
										_ = t.sent, S = _.result, P = _.error, t.next = 23;
										break;
									case 20:
										t.prev = 20, t.t0 = t["catch"](12), P = t.t0;
									case 23:
										if (!P) {
											t.next = 27;
											break
										}
										return clearInterval(j), n("showError", "Error: ".concat(P)), t.abrupt("return", null);
									case 27:
										return clearInterval(j), j = null, t.abrupt("return", S);
									case 30:
									case "end":
										return t.stop()
								}
							}, t, null, [
								[12, 20]
							])
						}));

						function e(e) {
							return t.apply(this, arguments)
						}
						return e
					}(),
					saveMidi: function() {
						var t = Object(tr["a"])(regeneratorRuntime.mark(function t(e) {
							var n, r, i, o, a, s, c, u, l, p, d, f, h, m, g, b, v, w, O, k, j, P, S;
							return regeneratorRuntime.wrap(function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return n = e.commit, r = e.rootState, n("updateLoadingState", "Making music..."), n("updateTutorialStep", 2), i = r.predict, o = i.nSteps, a = i.predictionType, s = i.durationTemp, c = i.noteTemp, u = i.seedLen, l = i.maskStart, p = i.maskEnd, d = i.topK, f = i.topP, h = Go(r.sequence), m = h.midi, g = h.bpm, b = h.seqName, v = {
											midi: m,
											bpm: g,
											seqName: b,
											nSteps: o,
											predictionType: a.name,
											durationTemp: s,
											noteTemp: c,
											seedLen: u,
											maskStart: l,
											maskEnd: p,
											topK: d,
											topP: f
										}, w = y.a.omitBy(v, y.a.isNil), O = -10, k = setInterval(function() {
											O > 0 && n("updateLoadingState", "Generating steps (".concat(O, " / ").concat(o, ")...")), O += 1
										}, 100), setTimeout(function() {
											null != k && (clearInterval(k), n("showError", "Error: Timeout trying to generate sequence..."))
										}, 250 * o), j = null, P = null, t.prev = 12, t.next = 15, Ao.saveStore(w);
									case 15:
										S = t.sent, P = S.result, j = S.error, t.next = 23;
										break;
									case 20:
										t.prev = 20, t.t0 = t["catch"](12), j = t.t0;
									case 23:
										if (!j) {
											t.next = 27;
											break
										}
										return clearInterval(k), n("showError", "Error: ".concat(j)), t.abrupt("return", null);
									case 27:
										return clearInterval(k), k = null, t.abrupt("return", P);
									case 30:
									case "end":
										return t.stop()
								}
							}, t, null, [
								[12, 20]
							])
						}));

						function e(e) {
							return t.apply(this, arguments)
						}
						return e
					}(),
					convertToXML: function() {
						var t = Object(tr["a"])(regeneratorRuntime.mark(function t(e) {
							var n, r, i, o, a;
							return regeneratorRuntime.wrap(function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return n = e.commit, r = e.rootState, i = Go(r.sequence, null), o = i.midi, t.next = 4, Ao.convertToXML({
											midi: o
										});
									case 4:
										return a = t.sent, console.log("Result returned from convertToXML:", a), n("updateMidiXML", a), t.abrupt("return", a);
									case 8:
									case "end":
										return t.stop()
								}
							}, t)
						}));

						function e(e) {
							return t.apply(this, arguments)
						}
						return e
					}(),
					loadOrig: function() {
						var t = Object(tr["a"])(regeneratorRuntime.mark(function t(e, n) {
							var r, i, o;
							return regeneratorRuntime.wrap(function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return r = e.commit, i = e.dispatch, t.next = 3, Ao.fetchMidi(n, "song");
									case 3:
										return o = t.sent, r("updateSID", n), t.next = 7, i("sequence/loadOrigBuffer", {
											midiBuffer: o
										}, {
											root: !0
										});
									case 7:
									case "end":
										return t.stop()
								}
							}, t)
						}));

						function e(e, n) {
							return t.apply(this, arguments)
						}
						return e
					}(),
					loadSong: function() {
						var t = Object(tr["a"])(regeneratorRuntime.mark(function t(e, n) {
							var r, i, o, a, s, c, u, l, p, d, f, h;
							return regeneratorRuntime.wrap(function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return r = e.commit, i = e.dispatch, o = e.state, r("updateLoadingState", "載入歌曲..."), a = o.sid, r("updateSID", n), r("sequence/updateOrigNotes", {
											notes: []
										}, {
											root: !0
										}), s = null, c = null, t.prev = 7, t.next = 10, Ao.loadState(n, "song");
									case 10:
										u = t.sent, s = u.midiBuffer, c = u.store, t.next = 22;
										break;
									case 15:
										return t.prev = 15, t.t0 = t["catch"](7), t.next = 19, Ao.loadState(n, "predict");
									case 19:
										l = t.sent, s = l.midiBuffer, c = l.store;
									case 22:
										return r("fromSave", c), p = c, d = p.display, t.next = 26, i("sequence/loadMidiBuffer", {
											midiBuffer: s,
											seqName: d,
											savePrevious: !1
										}, {
											root: !0
										});
									case 26:
										f = t.sent, h = f.notes, r("updateLoadingState", null), a !== n && (r("updateMaskStart", Math.ceil(Math.min.apply(Math, Object(Y["a"])(h.map(function(t) {
											return t.timing
										})))) + 2), r("updateMaskEnd", Math.floor(Math.max.apply(Math, Object(Y["a"])(h.map(function(t) {
											return t.timing + t.length
										})))) - 2));
									case 30:
									case "end":
										return t.stop()
								}
							}, t, null, [
								[7, 15]
							])
						}));

						function e(e, n) {
							return t.apply(this, arguments)
						}
						return e
					}(),
					loadPrediction: function() {
						var t = Object(tr["a"])(regeneratorRuntime.mark(function t(e, n) {
							var r, i, o, a, s, c, u;
							return regeneratorRuntime.wrap(function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return r = e.commit, i = e.dispatch, r("updateLoadingState", "Loading prediction..."), t.next = 4, Ao.loadState(n, "predict");
									case 4:
										return o = t.sent, a = o.midiBuffer, s = o.store, r("fromSave", s), c = s.seqName, u = s.originalSID, u && i("loadOrig", u), t.next = 12, i("sequence/loadMidiBuffer", {
											midiBuffer: a,
											seqName: c,
											savePrevious: !1
										}, {
											root: !0
										});
									case 12:
										r("updateLoadingState", null);
									case 13:
									case "end":
										return t.stop()
								}
							}, t)
						}));

						function e(e, n) {
							return t.apply(this, arguments)
						}
						return e
					}()
				},
				Yo = {
					namespaced: !0,
					state: zo,
					mutations: Wo,
					actions: Uo
				};

			function Jo(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					})), n.push.apply(n, r)
				}
				return n
			}

			function Ho(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? Jo(n, !0).forEach(function(e) {
						Object(K["a"])(t, e, n[e])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Jo(n).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					})
				}
				return t
			}
			var Zo = {
					progressTime: 0,
					playOffset: 0,
					currentLength: w,
					currentTrack: 0,
					selectedNote: null,
					isEditingScore: !1,
					scrollTopPosition: 0,
					scrollLeftPosition: 0,
					previewingKeyNumber: null,
					appState: "editing",
					notes: [],
					prevNotes: [],
					origNotes: [],
					version: 0,
					bpm: 120,
					seqName: "未命名",
					duration: 0,
					instrumentType: "piano",
					playbackVersion: "prediction"
				},
				Qo = {
					updateCurrentLength: function(t, e) {
						t.currentLength = e
					},
					updateSelectedNote: function(t, e) {
						t.selectedNote = e
					},
					addNote: function(t, e) {
						var n = e.key,
							r = e.timing,
							i = e.length,
							o = e.track;
						t.notes.push({
							key: n,
							timing: r,
							length: i,
							track: o
						})
					},
					updateNoteLength: function(t, e) {
						var n = e.index,
							r = e.length;
						t.notes[n].length = r
					},
					updateNoteTiming: function(t, e) {
						var n = e.index,
							r = e.timing;
						t.notes[n].timing = r
					},
					updateNoteKeyNumber: function(t, e) {
						var n = e.index,
							r = e.keyNumber;
						t.notes[n].key = r
					},
					removeNote: function(t, e) {
						t.notes.splice(e, 1)
					},
					startEditingScore: function(t) {
						t.isEditingScore = !0
					},
					finishEditingScore: function(t) {
						t.isEditingScore = !1
					},
					scrollTop: function(t, e) {
						t.scrollTopPosition = e
					},
					scrollLeft: function(t, e) {
						t.scrollLeftPosition = e
					},
					startPreview: function(t, e) {
						var n = e.keyNumber;
						e.timeout;
						t.previewingKeyNumber = n
					},
					finishPreview: function(t) {
						t.previewingKeyNumber = null
					},
					play: function(t) {
						t.appState = "playing"
					},
					stop: function(t) {
						t.appState = "editing", t.progressTime = t.playOffset
					},
					finishMusic: function() {
						Zo.appState = "editing"
					},
					updateInstrumentType: function(t, e) {
						var n = e.instrumentType;
						t.instrumentType = n
					},
					updatePlaybackVersion: function(t, e) {
						var n = e.playbackVersion;
						t.playbackVersion = n
					},
					updateBPM: function(t, e) {
						t.bpm = parseInt(e)
					},
					updateSeqName: function(t, e) {
						t.seqName = e
					},
					updateProgressTime: function(t, e) {
						t.progressTime = e
					},
					updatePlayOffset: function(t, e) {
						t.playOffset = e
					},
					updateOrigNotes: function(t, e) {
						var n = e.notes;
						t.origNotes = n
					},
					updateNotes: function(t, e) {
						var n = e.notes,
							r = e.bpm,
							i = e.seqName,
							o = e.savePrevious,
							a = void 0 === o || o;
						t.version += 1, t.progressTime = 0, console.log("Version:", t.version), t.prevNotes = a ? t.notes : [], t.notes = n, t.bpm = parseInt(r), t.seqName = i, t.playbackVersion = "prediction"
					}
				};

			function ta(t) {
				var e = {
					loadMidi: function(t, e) {
						var n = t.commit,
							r = e.midi,
							i = e.seqName,
							o = e.savePrevious,
							a = void 0 === o || o,
							s = $o(r),
							c = s.notes,
							u = s.name,
							l = s.bpm;
						return y.a.isEmpty(i) && (i = u), n("updateNotes", {
							notes: c,
							bpm: l,
							seqName: i,
							savePrevious: a
						}), {
							notes: c,
							bpm: l
						}
					},
					loadMidiBuffer: function(t, e) {
						var n = t.dispatch,
							r = e.midiBuffer,
							i = e.seqName,
							o = e.savePrevious,
							a = void 0 === o || o;
						return n("loadMidi", {
							midi: Ko(r),
							seqName: i,
							savePrevious: a
						})
					},
					loadOrigBuffer: function(t, e) {
						var n = t.commit,
							r = e.midiBuffer,
							i = Ko(r),
							o = $o(i),
							a = o.notes;
						return n("updateOrigNotes", {
							notes: a
						}), a
					},
					clear: function(t) {
						var e = t.commit;
						e("updateNotes", {
							notes: [],
							bpm: 120,
							seqName: "未命名",
							savePrevious: !0
						})
					},
					exportMidi: function(t) {
						var e = t.state,
							n = Go(e, null),
							r = n.midi,
							i = n.seqName;
						Ao.exportMidi({
							midi: r,
							fileName: "".concat(i, ".mid")
						})
					}
				};
				return t.forEach(function(t) {
					e[t] = function(e, n) {
						var r = e.commit;
						0 === n || n ? r(t, n) : r(t)
					}
				}), e
			}
			var ea = Ho({}, ta(["updateCurrentLength", "addNote", "removeNote", "updateNoteLength", "updateNoteTiming", "updateNoteKeyNumber", "startEditingScore", "finishEditingScore", "scrollTop", "scrollLeft", "startPreview", "finishPreview", "play", "stop", "finishMusic", "updateProgressTime", "updateBPM", "updateInstrumentType", "updatePlaybackVersion", "updateSeqName"])),
				na = {
					scoreLength: function(t, e) {
						return Math.max(S, e.sequenceLength + 8)
					},
					sequenceLength: function(t) {
						return y.a.round(Math.max.apply(Math, Object(Y["a"])(t.notes.map(function(t) {
							return t.timing + t.length
						}))), 3)
					}
				},
				ra = {
					namespaced: !0,
					state: Zo,
					mutations: Qo,
					actions: ea,
					getters: na
				},
				ia = (n("a481"), n("d225")),
				oa = n("b0b4"),
				aa = n("8cc4"),
				sa = n.n(aa);

			function ca() {
				return new sa.a.Sampler({
					A0: "A0.[mp3|ogg]",
					C1: "C1.[mp3|ogg]",
					"D#1": "Ds1.[mp3|ogg]",
					"F#1": "Fs1.[mp3|ogg]",
					A1: "A1.[mp3|ogg]",
					C2: "C2.[mp3|ogg]",
					"D#2": "Ds2.[mp3|ogg]",
					"F#2": "Fs2.[mp3|ogg]",
					A2: "A2.[mp3|ogg]",
					C3: "C3.[mp3|ogg]",
					"D#3": "Ds3.[mp3|ogg]",
					"F#3": "Fs3.[mp3|ogg]",
					A3: "A3.[mp3|ogg]",
					C4: "C4.[mp3|ogg]",
					"D#4": "Ds4.[mp3|ogg]",
					"F#4": "Fs4.[mp3|ogg]",
					A4: "A4.[mp3|ogg]",
					C5: "C5.[mp3|ogg]",
					"D#5": "Ds5.[mp3|ogg]",
					"F#5": "Fs5.[mp3|ogg]",
					A5: "A5.[mp3|ogg]",
					C6: "C6.[mp3|ogg]",
					"D#6": "Ds6.[mp3|ogg]",
					"F#6": "Fs6.[mp3|ogg]",
					A6: "A6.[mp3|ogg]",
					C7: "C7.[mp3|ogg]",
					"D#7": "Ds7.[mp3|ogg]",
					"F#7": "Fs7.[mp3|ogg]",
					A7: "A7.[mp3|ogg]",
					C8: "C8.[mp3|ogg]"
				}, function() {}, "https://s3-us-west-2.amazonaws.com/ashaw-midi-web-server/audio/salamander/").toMaster()
			}

			function ua() {
				return new sa.a.PolySynth(6, sa.a.MonoSynth).toMaster()
			}
			var la = function() {
				function t(e) {
					var n = this;
					Object(ia["a"])(this, t), this.store = e, this.notes = [], this.audioContext = new AudioContext, sa.a.setContext(this.audioContext), this.synth = ca(), this.part = null, this.currentPreview = null, this.syncedEvents = [], this.progress = null, this.stopTimeout = null, e.subscribe(function(t, e) {
						switch (t.type.replace("sequence/", "")) {
							case "updateInstrumentType":
								n.updateInstrumentType(t.payload);
								break;
							case "startPreview":
								n.startPreview(t.payload);
								break;
							case "finishPreview":
								n.finishPreview();
								break;
							case "play":
								var r = "original" === e.sequence.playbackVersion ? e.sequence.origNotes : e.sequence.notes;
								n.play(r, e.sequence.bpm, e.sequence.playOffset);
								break;
							case "stop":
								n.stop();
								break;
							case "updatePlayOffset":
								console.log("dsjflksdjflsdkjfsdlk");
								var i = "original" === e.sequence.playbackVersion ? e.sequence.origNotes : e.sequence.notes;
								n.playNotesOnBeat(i, e.sequence.playOffset);
								break;
							default:
								break
						}
					})
				}
				return Object(oa["a"])(t, [{
					key: "stop",
					value: function() {
						this.reset(), this.store.commit("sequence/finishMusic")
					}
				}, {
					key: "reset",
					value: function() {
						null != this.progress && (clearInterval(this.progress), this.progress = null), null != this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null), sa.a.Transport.stop(), sa.a.Transport.cancel(0), this.notes = []
					}
				}, {
					key: "updateInstrumentType",
					value: function(t) {
						var e = t.instrumentType;
						this.synth.unsync(), this.synth = "synth" === e ? ua() : ca()
					}
				}, {
					key: "startPreview",
					value: function(t) {
						var e = this,
							n = t.keyNumber,
							r = t.timeout;
						this.finishPreview(), this.synth.triggerAttack(sa.a.Midi(n)), this.currentPreview = n, y.a.isNumber(r) && setTimeout(function() {
							e.finishPreview()
						}, 1e3 * r)
					}
				}, {
					key: "finishPreview",
					value: function() {
						null != this.currentPreview && (this.synth.triggerRelease(sa.a.Midi(this.currentPreview)), this.currentPreview = null)
					}
				}, {
					key: "endTime",
					value: function(t) {
						var e = 0;
						return t.forEach(function(t) {
							e = Math.max(e, t.duration + t.time)
						}), e
					}
				}, {
					key: "play",
					value: function(t, e) {
						var n = this,
							r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
						this.reset(), this.notes = Fo(t, e), sa.a.Transport.bpm.value = e;
						var i = new sa.a.Part(function(t, e) {
								n.synth.triggerAttackRelease(sa.a.Midi(e.midi), e.duration, t)
							}, this.notes),
							o = Ot(r, e);
						i.start("".concat(-o)), sa.a.Transport.start(), this.progress = setInterval(function() {
							var t = kt(sa.a.Transport.seconds + o, e);
							n.store.commit("sequence/updateProgressTime", t)
						}, 5), this.stopTimeout = setTimeout(function() {
							n.stop()
						}, 1e3 * (this.endTime(this.notes) + 1 - o))
					}
				}, {
					key: "playNotesOnBeat",
					value: function(t, e) {
						var n = t.filter(function(t) {
							return t.timing <= e && t.timing + t.length > e
						}).map(function(t) {
							return sa.a.Midi(t.key)
						});
						this.synth.triggerAttackRelease(n, "1n", void 0, .1)
					}
				}]), t
			}();

			function pa(t) {
				return new la(t)
			}
			r["default"].use(U["b"]);
			var da = new U["b"].Store({
					modules: {
						sequence: ra,
						predict: Yo
					},
					plugins: [pa]
				}),
				fa = n("ce5b"),
				ha = n.n(fa),
				ma = n("0284"),
				ga = n.n(ma);
			r["default"].config.productionTip = !1, console.log("Google Analytics enabled"), r["default"].use(ga.a, {
				id: "UA-145168476-1",
				router: Co,
				debug: {
					sendHitTask: !0
				}
			});
			var ba = {};
			r["default"].use(ha.a), r["default"].use(o.a, {}), new r["default"]({
				router: Co,
				store: da,
				render: function(t) {
					return t(d)
				},
				vuetify: new ha.a(ba)
			}).$mount("#app")
		},
		5998: function(t, e, n) {},
		"5a0c": function(t, e, n) {},
		"5c0b": function(t, e, n) {
			"use strict";
			var r = n("5e27"),
				i = n.n(r);
			i.a
		},
		"5e27": function(t, e, n) {},
		"60fb": function(t, e, n) {},
		"6dc2": function(t, e, n) {
			"use strict";
			var r = n("b8ee"),
				i = n.n(r);
			i.a
		},
		7551: function(t, e, n) {},
		"75bc": function(t, e, n) {},
		"79ce": function(t, e, n) {},
		"7cb4": function(t, e, n) {
			"use strict";
			var r = n("e0d6"),
				i = n.n(r);
			i.a
		},
		"817c": function(t, e, n) {
			"use strict";
			var r = n("ee40"),
				i = n.n(r);
			i.a
		},
		"85ce": function(t, e, n) {},
		"8cc9": function(t, e, n) {
			"use strict";
			var r = n("a88a"),
				i = n.n(r);
			i.a
		},
		9062: function(t, e, n) {
			"use strict";
			var r = n("b043"),
				i = n.n(r);
			i.a
		},
		"913b": function(t, e, n) {},
		9285: function(t, e, n) {},
		"962c": function(t, e, n) {
			"use strict";
			var r = n("f32a"),
				i = n.n(r);
			i.a
		},
		"9ce8": function(t, e, n) {
			"use strict";
			var r = n("ac1d"),
				i = n.n(r);
			i.a
		},
		a1fb: function(t, e, n) {
			"use strict";
			var r = n("7551"),
				i = n.n(r);
			i.a
		},
		a73f: function(t, e, n) {
			"use strict";
			var r = n("4b1d"),
				i = n.n(r);
			i.a
		},
		a88a: function(t, e, n) {},
		ac1d: function(t, e, n) {},
		b043: function(t, e, n) {},
		b3d0: function(t, e, n) {
			"use strict";
			var r = n("12a1"),
				i = n.n(r);
			i.a
		},
		b4c0: function(t, e, n) {},
		b8a0: function(t, e, n) {
			"use strict";
			var r = n("b4c0"),
				i = n.n(r);
			i.a
		},
		b8ee: function(t, e, n) {},
		bece: function(t, e, n) {},
		c1c2: function(t, e, n) {
			t.exports = n.p + "static/img/autobot_optimus.9dc92e9e.png"
		},
		c44e: function(t, e, n) {
			"use strict";
			var r = n("d1e9"),
				i = n.n(r);
			i.a
		},
		c735: function(t, e, n) {
			"use strict";
			var r = n("5998"),
				i = n.n(r);
			i.a
		},
		c8cf: function(t, e, n) {
			"use strict";
			var r = n("cc29"),
				i = n.n(r);
			i.a
		},
		cc29: function(t, e, n) {},
		cfb0: function(t, e, n) {},
		d1e9: function(t, e, n) {},
		d946: function(t, e, n) {
			"use strict";
			var r = n("ecf7"),
				i = n.n(r);
			i.a
		},
		dbef: function(t, e, n) {
			"use strict";
			var r = n("1d07"),
				i = n.n(r);
			i.a
		},
		df3f: function(t, e, n) {
			"use strict";
			var r = n("60fb"),
				i = n.n(r);
			i.a
		},
		e0d6: function(t, e, n) {},
		e5bf: function(t, e, n) {},
		ecf7: function(t, e, n) {},
		ee40: function(t, e, n) {},
		efe3: function(t, e, n) {
			"use strict";
			var r = n("cfb0"),
				i = n.n(r);
			i.a
		},
		f32a: function(t, e, n) {},
		f80c: function(t, e, n) {
			"use strict";
			var r = n("5a0c"),
				i = n.n(r);
			i.a
		}
	});
	//# sourceMappingURL=app.a76301cb.js.map