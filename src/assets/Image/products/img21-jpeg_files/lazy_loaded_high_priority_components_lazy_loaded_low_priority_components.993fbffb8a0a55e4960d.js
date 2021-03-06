/*! Copyright (c) 2021 WhatsApp Inc. All Rights Reserved. */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    baeaiejjhd: function (e, t) {
      e.exports = { prompt: "UKM49" };
    },
    baeeaadbih: function (e, t) {
      e.exports = { labelRow: "_1KmDn", labelContainer: "DMsVG" };
    },
    bajeaefcdg: function (e, t) {
      e.exports = {
        inputEmoji: "_1ZmLh",
        wrapper: "_3tSYy",
        textInput: "_3aBvl",
        labelText: "_3iU_H",
        clearInput: "_3Jrq3",
        float: "_3UqD6",
        textActive: "_1ZEZR",
        suggestionsPositioner: "_3pue_",
        suggestionsContainer: "_16lso",
        charCounter: "_1bDIX",
        inputControls: "_2DhU8",
        charCounterWithClearBtn: "QhCkJ",
        spacer: "rLPDp",
        noPlaceholder: "_5L4vr",
        buttonContainer: "_2p_8b",
        active: "_1WLC6",
      };
    },
    bbecefbeaa: function (e, t, a) {
      "use strict";
      var r = a("bfejgijfbh"),
        i = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.ProductListDrawer = void 0);
      var n = i(a("hhegggegb")),
        o = i(a("eaaagccfda")),
        l = r(a("ddhijeejag")),
        c = i(a("biegjchieg")),
        s = i(a("dhefebafbj")),
        d = i(a("eccabeiafh")),
        u = i(a("ejegihaeh")),
        f = i(a("hgigjbgie")),
        h = i(a("dahagdijgh")),
        p = i(a("bjheffjbgd")),
        m = r(a("bjjhgjdbhd")),
        g = r(a("cajijabhgb")),
        b = a("dhjcdeigfi"),
        j = i(a("hhibigida")),
        v = i(a("dbfjeecgih")),
        C = i(a("edfgfbdfg")),
        E = a("ddbdgibbbi"),
        _ = i(a("bdjjabfecc")),
        S = i(a("cddcdgeibi")),
        k = i(a("ebddggeaib")),
        P = a("ecceajhjba"),
        N = a("cbffieigcd"),
        I = a("cadfgefaja"),
        y = i(a("dcdcafjece")),
        T = i(a("echajahchj")),
        M = i(a("dcbgjijbcc")),
        R = i(a("dhccahhefj")),
        D = i(a("bfgbdiffgd")),
        x = i(a("dcdbbhicce")),
        L = a("hjbbdjjdf");
      class O extends l.Component {
        constructor(e) {
          super(e),
            (this.catalogFlatListController = new v.default()),
            (this._handleScroll = (e) => {
              this.state.loadingMore ||
                (e.scrollTop + f.default.SCROLL_FUDGE >
                  e.scrollHeight - e.clientHeight &&
                  this._loadMoreProduct());
            }),
            (this.handleScroll = (0, n.default)(this._handleScroll, 100)),
            (this._loadMoreProduct = () => {
              var { catalogId: e } = this.props,
                { stopLoading: t, loadedProducts: a } = this.state;
              if (!t) {
                var r = u.default.assertGet(e);
                if (r.afterCursor) {
                  var i = r.productCollection.getProductModels().length;
                  this.setState({ loadingMore: !0, loadedProducts: i }),
                    u.default
                      .update(e)
                      .checkpoint(this.props.rejectOnUnmount())
                      .then((e) => {
                        this.setState({ loadingMore: !1 }),
                          (Array.isArray(e)
                            ? e[0]
                            : e
                          ).productCollection.getProductModels().length === a &&
                            this.setState({ stopLoading: !0 }),
                          i * f.default.PRODUCT_LIST_ITEM_HEIGHT <
                            window.innerHeight && this._loadMoreProduct();
                      })
                      .catchType(g.Unmount, () => {})
                      .catch(() => {
                        this.setState({ loadingMore: !1, stopLoading: !0 });
                      });
                }
              }
            }),
            (this.onScroll = (e) => {
              this.handleScroll(e.currentTarget),
                this.props.setScrollOffset &&
                  this.props.setScrollOffset(e.currentTarget.scrollTop);
            }),
            (this.onCartChange = () => {
              var e = this.state.cart.itemCount;
              this.state.cartCount !== e && this.setState({ cartCount: e });
            }),
            (this._onCartClick = () => {
              var { contact: e, sessionId: t, onCartClick: a } = this.props;
              a && a(e.id.toString(), t);
            }),
            (this._onCatalogLinkClick = () => {
              var { catalog: e } = this.state;
              e &&
                this.props.onCatalogLinkClick(
                  e,
                  this.props.contact,
                  this.props.sessionId
                );
            });
          var t = u.default.get(this.props.catalogId),
            a = s.default.findCart(this.props.contact.id.toString());
          this.state = {
            loadingMore: !1,
            loadedProducts: 0,
            stopLoading: !1,
            catalog: t,
            cart: a,
            cartCount: a.itemCount,
            catalogFetchState: t ? "SUCCESS" : "NONE",
          };
        }
        componentDidMount() {
          var e,
            { catalogId: t, sessionId: a, listeners: r } = this.props;
          r.add(this.state.cart, "all", this.onCartChange),
            (null === (e = (0, E.getMaybeMeUser)()) || void 0 === e
              ? void 0
              : e.equals(t)) || (0, P.logCatalogListView)(t.toString(), a),
            this.state.catalog
              ? (this._loadMoreProduct(), this._watchProductCollection())
              : this._findCatalog();
        }
        _findCatalog() {
          return u.default
            .find(this.props.catalogId)
            .checkpoint(this.props.rejectOnUnmount())
            .then((e) => {
              this.setState({ catalog: e, catalogFetchState: "SUCCESS" }),
                this._loadMoreProduct(),
                this._watchProductCollection();
            })
            .catch((e) => {
              (0, b.parseErrorState)(e, (e) =>
                this.setState({ catalogFetchState: e })
              );
            });
        }
        _watchProductCollection() {
          var { catalog: e } = this.state;
          this.props.autoUpdate &&
            null != e &&
            (e.productCollection.on(
              "add",
              (0, o.default)(() => this.forceUpdate(), 100)
            ),
            e.productCollection.on(
              "remove",
              (0, o.default)(() => this.forceUpdate(), 100)
            ));
        }
        _getDrawerContent() {
          var e,
            { catalog: t } = this.state,
            {
              contact: a,
              sessionId: r,
              businessProfile: i,
              canManageCatalog: n,
              onAddProduct: o,
            } = this.props;
          return t
            ? (n &&
                o &&
                (e = l.createElement(c.default, {
                  onClick: () => o(r),
                  theme: "in-list",
                })),
              l.createElement(
                l.Fragment,
                null,
                i &&
                  l.createElement(
                    "div",
                    { className: T.default.header },
                    l.createElement(M.default, {
                      profilePicThumb: a.getProfilePicThumb(),
                      contact: a,
                      businessProfile: i,
                    })
                  ),
                l.createElement(
                  "div",
                  { className: T.default.list },
                  e,
                  l.createElement(y.default, {
                    onCartOpen: this._onCartClick,
                    onProductDetail: this.props.onProductDetail,
                    flatListController: this.catalogFlatListController,
                    catalog: t,
                    sessionId: r,
                    showPendingAndRejected: this.props.canManageCatalog,
                    shareLinks: this.props.canManageCatalog,
                    onProductShare: this.props.onProductShare,
                  }),
                  this.state.loadingMore && l.createElement(C.default, null)
                )
              ))
            : l.createElement(j.default, {
                fetchState: this.state.catalogFetchState,
              });
        }
        _getCartIcon() {
          var { onCartClick: e, headerType: t } = this.props;
          if (D.default.webCatalogCart && e) {
            var a = this.state.cartCount,
              r = (0, L.isNumber)(a) && a > 0 ? a.toString() : void 0,
              i = (0, N.getOnCartClickWithLog)(this._onCartClick);
            return l.createElement(I.MenuBarItem, {
              a8nText: "menu-bar-cart-link",
              icon: l.createElement(d.default, {
                theme:
                  t === m.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null,
              }),
              text: r,
              title: _.default.t(347),
              onClick: i,
            });
          }
          return null;
        }
        render() {
          return l.createElement(
            h.default,
            { theme: "products", onDrop: this.props.onBack },
            l.createElement(m.default, {
              title: _.default.t(1030),
              type: this.props.headerType || m.DRAWER_HEADER_TYPE.SMALL,
              onBack: this.props.onBack,
              menu:
                D.default.productCatalogDeeplink &&
                l.createElement(
                  l.Fragment,
                  null,
                  this._getCartIcon(),
                  l.createElement(I.MenuBarItem, {
                    a8nText: "menu-bar-catalog-link",
                    icon: l.createElement(S.default, {
                      theme:
                        this.props.headerType === m.DRAWER_HEADER_TYPE.LARGE
                          ? "inherit-color"
                          : null,
                    }),
                    title: _.default.t(364),
                    onClick: this._onCatalogLinkClick,
                  })
                ),
            }),
            l.createElement(
              p.default,
              {
                onScroll: this.onScroll,
                flatListControllers: [this.catalogFlatListController],
                scrollOffset: this.props.scrollOffset,
              },
              this._getDrawerContent()
            )
          );
        }
      }
      (t.ProductListDrawer = O), (O.CONCERNS = { contact: ["id"] });
      var w = (0, R.default)((0, k.default)((0, x.default)(O, O.CONCERNS)));
      t.default = w;
    },
    bbiebgjade: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = i(a("ddhijeejag")),
        o = r(a("cjjbjffaga")),
        l = a("ccfjbcbbga"),
        c = r(a("dcdbbhicce")),
        s = (e) => {
          var {
              mediaData: t,
              image: a,
              singleSlide: r,
              renderFallback: i,
              onClick: c,
              onLoad: s,
              forwardRef: d,
            } = e,
            u = t.renderableUrl,
            f = n.useRef(null),
            h = n.useRef(t.mediaStage === l.STAGE.RESOLVED);
          n.useEffect(() => {
            !s ||
              h.current ||
              i ||
              t.mediaStage !== l.STAGE.RESOLVED ||
              (s(), (h.current = !0));
          }, [s, i, t.mediaStage]);
          var p =
            t.fullWidth && t.fullHeight ? t.fullWidth / t.fullHeight : 0.8;
          p < 0.8 && (p = 0.8), p > 1.91 && (p = 1.91), p > 1 && !r && (p = 1);
          var m = {
              width:
                r && p < 1
                  ? "".concat(100 * p, "%")
                  : 1 !== p || r
                  ? null
                  : "100%",
            },
            g = { paddingTop: "".concat(Math.floor(100 / p), "%") },
            b = { cursor: "".concat(c ? "pointer" : "auto") };
          return n.createElement(
            "div",
            {
              ref: d ? (e) => d(e) : null,
              className: o.default.slide,
              style: m,
            },
            n.createElement(
              "div",
              { className: o.default.slideInnerContainer, style: g },
              n.createElement("img", {
                ref: f,
                src: u,
                className: o.default.image,
                style: b,
                draggable: "false",
                onClick: () => {
                  c && f.current && a && c(f.current, a);
                },
              })
            )
          );
        };
      s.CONCERNS = {
        mediaData: ["renderableUrl", "mediaStage", "fullWidth", "fullHeight"],
      };
      var d = (0, c.default)(s, s.CONCERNS, {}, !0);
      t.default = d;
    },
    bcbbffbhff: function (e, t, a) {
      "use strict";
      var r = a("bfejgijfbh"),
        i = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.CartDetailDrawer = void 0);
      var n = i(a("dfadhaifh")),
        o = r(a("ddhijeejag")),
        l = a("higbihfff"),
        c = i(a("dhefebafbj")),
        s = i(a("cacbgcigff")),
        d = i(a("biggfabaaj")),
        u = i(a("hgigjbgie")),
        f = r(a("bjgiedaj")),
        h = i(a("dahagdijgh")),
        p = i(a("bjheffjbgd")),
        m = r(a("bjjhgjdbhd")),
        g = i(a("dbfjeecgih")),
        b = i(a("edfgfbdfg")),
        j = i(a("bdjjabfecc")),
        v = i(a("ebddggeaib")),
        C = a("habihjdae"),
        E = i(a("chjejfcdd")),
        _ = i(a("deffjjfcba")),
        S = i(a("dgdcjccfdi")),
        k = a("dhhjhedjij"),
        P = i(a("didfdhbecg"));
      function N() {
        var e = (0, n.default)(["Unable to create catalog order"]);
        return (
          (N = function () {
            return e;
          }),
          e
        );
      }
      class I extends o.Component {
        constructor(e) {
          super(e),
            (this.cartFlatListController = new g.default()),
            (this.onSend = () => {
              var { cart: e, cartMessage: t } = this.state;
              (0, l.submitOrder)(e, this.props.chat, t)
                .then(() => {
                  var a = Boolean(t);
                  (0, C.logSendOrderMessage)(a),
                    this.props.onBack(),
                    (0, l.clearCart)(e),
                    this.setState({ cartMessage: void 0 });
                })
                .catch(() => {
                  __LOG__(4, !0, new Error())(N()),
                    SEND_LOGS(
                      "submitOrder: order creation or order message send error"
                    );
                });
            }),
            (this.onChange = (e) => {
              this.setState({ cartMessage: e });
            }),
            (this.setRefMessageInput = (e) => {
              this.refMessageInput = e;
            }),
            (this.state = {
              isLoading: !0,
              cart: c.default.findCart(this.props.sellerJid),
            });
        }
        componentDidMount() {
          this.setState({ isLoading: !1 }),
            this.props.listeners.add(
              this.state.cart,
              "change:cartItemCollection",
              () => {
                this.forceUpdate();
              }
            );
        }
        _getDrawerContent() {
          var { sellerJid: e, sessionId: t } = this.props,
            { cart: a } = this.state;
          if (this.state.isLoading) return o.createElement(b.default, null);
          var r,
            i = a.itemCount,
            n = i > 0;
          r = n
            ? j.default.t(729, { count: i, _plural: i })
            : j.default.t(1003);
          var l,
            c = o.createElement(k.TextDiv, { theme: "title" }, r);
          null != a.total && null != a.currency
            ? (l = o.createElement(
                k.TextDiv,
                { theme: "muted-small" },
                j.default.t(1001, { subtotal: f.format(a.currency, a.total) })
              ))
            : i > 0 &&
              (l = o.createElement(
                k.TextDiv,
                { theme: "muted-small" },
                j.default.t(998)
              ));
          var h = o.createElement(
              P.default,
              {
                transitionName: "media-caption",
                className: s.default.cartMessage,
              },
              o.createElement(E.default, {
                ref: this.setRefMessageInput,
                chat: this.props.chat,
                maxLength: u.default.MAX_CART_MESSAGE_LENGTH,
                multiline: !0,
                onEnter: this.onSend,
                onChange: this.onChange,
                placeholder: j.default.t(351),
                spellCheck: !0,
                supportsEmoji: !0,
                value: this.state.cartMessage,
              })
            ),
            p = o.createElement(
              "button",
              {
                className: s.default.btnSend,
                tabIndex: "-1",
                onClick: this.onSend,
                title: j.default.t(352),
              },
              o.createElement(
                _.default,
                { large: !0 },
                o.createElement(S.default, { name: "send", directional: !0 })
              )
            );
          return o.createElement(
            o.Fragment,
            null,
            o.createElement("div", { className: s.default.info }, c, l),
            o.createElement(d.default, {
              flatListController: this.cartFlatListController,
              onProductDetail: this.props.onProductDetail,
              cart: a,
              sellerJid: e,
              sessionId: t,
            }),
            n &&
              o.createElement(
                "div",
                { className: s.default.footer },
                h,
                o.createElement(
                  P.default,
                  { transitionAppear: !0, transitionName: "btn", delay: 400 },
                  p
                )
              )
          );
        }
        render() {
          var { onBack: e } = this.props;
          return o.createElement(
            h.default,
            { onDrop: e, theme: "striped" },
            o.createElement(m.default, {
              title: j.default.t(347),
              type: m.DRAWER_HEADER_TYPE.SMALL,
              onBack: e,
            }),
            o.createElement(
              p.default,
              { flatListControllers: [this.cartFlatListController] },
              this._getDrawerContent()
            )
          );
        }
      }
      t.CartDetailDrawer = I;
      var y = (0, v.default)(I);
      t.default = y;
    },
    bceahhbbcj: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendAddParticipants = function (e, t) {
          var a;
          if (i.default.supportsFeature(i.default.F.MD_BACKEND)) {
            if (!a)
              return Promise.reject(
                new Error(
                  "addParticipants: not supported when not build with MD_BACKEND"
                )
              );
          } else a = n.default.addParticipants(e, t);
          return a;
        }),
        (t.sendRemoveParticipants = function (e, t) {
          var a;
          if (i.default.supportsFeature(i.default.F.MD_BACKEND)) {
            if (!a)
              return Promise.reject(
                new Error(
                  "sendRemoveParticipants: not supported when not build with MD_BACKEND"
                )
              );
          } else a = n.default.removeParticipants(e, t);
          return a;
        }),
        (t.sendDemoteParticipants = function (e, t) {
          var a;
          if (i.default.supportsFeature(i.default.F.MD_BACKEND)) {
            if (!a)
              return Promise.reject(
                new Error(
                  "sendDemoteParticipants: not supported when not build with MD_BACKEND"
                )
              );
          } else a = n.default.demoteParticipants(e, t);
          return a;
        }),
        (t.sendPromoteParticipants = function (e, t) {
          var a;
          if (i.default.supportsFeature(i.default.F.MD_BACKEND)) {
            if (!a)
              return Promise.reject(
                new Error(
                  "sendPromoteParticipants: not supported when not build with MD_BACKEND"
                )
              );
          } else a = n.default.promoteParticipants(e, t);
          return a;
        });
      var i = r(a("bhbdiadfhj")),
        n = r(a("cfidecfjad"));
    },
    bcegbecagi: function (e, t) {
      e.exports = {
        mediaCanvas: "w3gMB",
        shade: "_1LCIa",
        iconType: "_1CUMT",
        iconStar: "_2KFoO",
        mediaCanvasDuration: "_1pjfi",
        shadeTop: "QONv3",
        canvasBody: "_1Yd3w",
        canvasSelected: "T07BL",
        mediaSelect: "_1KUkl",
        canvasComponent: "_2Uxkh",
        canvasSecondRow: "_3k0qg",
        viewerFlow: "Y6m5P",
        active: "_3xa67",
        viewerFlowTransparent: "_3pxdL",
      };
    },
    bddadijgjj: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var { product: t, onClick: a } = e,
            r = n.createElement(f.default, {
              text: t.name,
              ellipsify: !0,
              titlify: !0,
            }),
            i = t.imageCdnUrl.productImageModel.mediaData,
            g = n.createElement(p.default, { theme: "list", mediaData: i });
          function b(t) {
            var { cartId: a, product: r } = e,
              i = (0, o.deleteProductFromCart)(a, r.id.toString());
            (0, o.deleteProductFromCart)(a, r.id.toString()),
              (0, h.logDeleteProduct)(),
              0 === i && (0, h.logCartAbandon)(),
              (function (e) {
                e.preventDefault(), e.stopPropagation();
              })(t);
          }
          function j(t) {
            var { cartId: a, product: r } = e;
            (0, o.updateProductQuantity)(a, r, t), (0, h.logEditProduct)(t);
          }
          var v = null;
          null != t.priceAmount1000 &&
            null != t.currency &&
            (v = n.createElement(
              m.TextSpan,
              { className: l.default.price },
              d.format(t.currency, t.priceAmount1000)
            ));
          var C = n.createElement("div", null, v);
          return n.createElement(s.default, {
            key: t.id.toString(),
            image: g,
            customImage: !0,
            primary: r,
            secondary: C,
            theme: "cart-product",
            onClick: a,
            secondaryDetail: n.createElement(c.default, {
              quantity: e.quantity,
              onChange: j,
            }),
            detail: n.createElement(
              "div",
              { className: l.default.actionsContainer },
              n.createElement(u.default, { onClick: b })
            ),
            className: l.default.cartListItem,
          });
        });
      var n = i(a("ddhijeejag")),
        o = a("higbihfff"),
        l = r(a("ciceejahaj")),
        c = r(a("djahdgcjcj")),
        s = r(a("cefccdiabc")),
        d = i(a("bjgiedaj")),
        u = r(a("dadjdgeaif")),
        f = r(a("gfebgebbi")),
        h = a("cbffieigcd"),
        p = r(a("dchhjffcdj")),
        m = a("dhhjhedjij");
    },
    bedcfjhfa: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var { catalog: t, onSend: a } = e,
            r = (0, s.createCatalogLink)(t.id.user),
            i = t.id.equals((0, o.getMaybeMeUser)())
              ? "".concat(l.default.t(1028), " ").concat(r)
              : r;
          return n.createElement(c.default, {
            text: i,
            pushTransition: "none",
            popTransition: "none",
            onSend: a,
          });
        });
      var n = i(a("ddhijeejag")),
        o = a("ddbdgibbbi"),
        l = r(a("bdjjabfecc")),
        c = r(a("dighgbcbbd")),
        s = a("cachecbicf");
    },
    behbhcibea: function (e, t) {
      e.exports = {
        icon: "_3I3b7",
        disabled: "_3c5Yc",
        transparent: "_1HmfW",
        compact: "QhoaU",
      };
    },
    beifadgccg: function (e, t) {
      e.exports = {
        productImage: "_96FkX",
        productImageContainer: "vtijO",
        productThumb: "_2Ybvb",
        productThumbContainer: "_3bvwS",
        prompt: "_2OWtN",
      };
    },
    bffbaagjef: function (e, t) {
      e.exports = { icon: "DXJih" };
    },
    bfjhbddha: function (e, t) {
      e.exports = {
        item: "pTxb9",
        overlay: "_1VDc9",
        numberText: "_1YLhn",
        loadingImageContainer: "OR9VO",
        loadingImage: "_1FjhI",
      };
    },
    bgbbjeecab: function (e, t) {
      e.exports = {
        section: "_3Pylw",
        reasonList: "_2ltn2",
        label: "_3WUHu",
        input: "_3gIWO",
        buttons: "usrx1",
      };
    },
    bhddedjfaf: function (e, t, a) {
      "use strict";
      var r = a("bfejgijfbh"),
        i = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var {
              images: t,
              renderFallback: a,
              fallbackMediaData: r,
              fetching: i,
              onClick: l,
            } = e,
            g = o.useRef(null),
            b = o.useRef(null),
            j = o.useRef(null),
            v = o.useRef(null),
            C = o.useRef(null),
            [E, _] = o.useState(null),
            [S, k] = o.useState(
              t.filter((e) => e.mediaData.mediaStage === u.STAGE.RESOLVED)
                .length
            ),
            [P, N] = o.useState(!1),
            I = S === t.length,
            y = () => k((e) => e + 1);
          o.useEffect(() => {
            if (!I && !a) {
              var e,
                t = b.current;
              if (!t) return;
              null === (e = j.current) || void 0 === e || e.cancel(),
                (j.current = (j.current || Promise.resolve())
                  .then(() =>
                    (0, m.default)(
                      t,
                      { opacity: [1, 0] },
                      { delay: 75, duration: 50 }
                    )
                  )
                  .cancellable()
                  .then(() => {
                    N(!0);
                  })
                  .catchType(Promise.CancellationError, () => {
                    (0, m.default)(t, "stop", !0);
                  })
                  .finally(() => {
                    j.current = null;
                  }));
            }
            return () => {
              var e;
              null === (e = j.current) || void 0 === e || e.cancel();
            };
          }, [I, a]);
          var T,
            M,
            R,
            D = () => {
              var e;
              return (
                null === (e = g.current) || void 0 === e ? void 0 : e.children
              )
                ? g.current.scrollWidth === g.current.offsetWidth
                  ? null
                  : 0 === g.current.scrollLeft
                  ? "next"
                  : g.current.scrollWidth - 1 <=
                    g.current.scrollLeft + g.current.offsetWidth
                  ? "prev"
                  : "both"
                : null;
            };
          if (
            (o.useEffect(() => {
              _(D());
            }, [I]),
            a && 0 === t.length)
          )
            return o.createElement(
              "div",
              { className: s.default.carousel, dir: "ltr" },
              o.createElement(
                "div",
                {
                  className: (0, n.default)(
                    s.default.contentContainer,
                    s.default.slidesContainer
                  ),
                },
                r &&
                  o.createElement(d.default, {
                    mediaData: r,
                    renderFallback: !0,
                    singleSlide: !0,
                  })
              )
            );
          var x = () => {
            v.current = null;
            var e = D();
            E !== e && _(e);
          };
          if (t.length > 1) {
            var L = () => {
                var e = g.current;
                if (null != e && ("prev" === E || "both" === E)) {
                  for (
                    var t = 0,
                      a = e.scrollLeft + Math.floor(e.offsetWidth / 2),
                      r = e.lastElementChild;
                    r instanceof HTMLElement && 0 === t;

                  ) {
                    var i = r.offsetLeft + Math.floor(r.offsetWidth / 2);
                    i < a && (t = i - a), (r = r.previousElementSibling);
                  }
                  0 !== t && e.scrollBy({ left: t, behavior: "smooth" });
                }
              },
              O = () => {
                var e = g.current;
                if (null != e && ("next" === E || "both" === E)) {
                  for (
                    var t = 0,
                      a = e.scrollLeft + Math.floor(e.offsetWidth / 2),
                      r = e.firstElementChild;
                    r instanceof HTMLElement && 0 === t;

                  ) {
                    var i = r.offsetLeft + Math.floor(r.offsetWidth / 2);
                    a < i && (t = i - a), (r = r.nextElementSibling);
                  }
                  0 !== t && e.scrollBy({ left: t, behavior: "smooth" });
                }
              },
              w = () => {
                C.current = null;
                var e = D();
                E !== e && _(e);
              };
            (R = () => {
              null == C.current && (C.current = requestAnimationFrame(w));
            }),
              I &&
                null != E &&
                ((T = o.createElement(c.default, {
                  type: c.ButtonType.Prev,
                  onClick: L,
                  onKeyDown: L,
                  disabled: "prev" !== E && "both" !== E,
                  theme: h.RoundTheme.Small,
                  overMedia: !0,
                })),
                (M = o.createElement(c.default, {
                  type: c.ButtonType.Next,
                  onClick: O,
                  onKeyDown: O,
                  disabled: "next" !== E && "both" !== E,
                  theme: h.RoundTheme.Small,
                  overMedia: !0,
                })));
          }
          var A = 1 === t.length,
            F = t.map((e, t) =>
              o.createElement(d.default, {
                key: t,
                image: e,
                singleSlide: A,
                mediaData: e.mediaData,
                onClick: l,
                onLoad: y,
              })
            ),
            U = I
              ? null
              : o.createElement(
                  "div",
                  {
                    className: (0, n.default)(
                      s.default.contentContainer,
                      s.default.spinnerContainer
                    ),
                  },
                  o.createElement(
                    "div",
                    { className: s.default.spinner, ref: b },
                    o.createElement(p.default, {
                      color: "default",
                      size: 50,
                      stroke: 4,
                    })
                  )
                ),
            B = (0, n.default)(s.default.carousel, {
              [s.default.loaded]: !i && I,
              [s.default.fadeIn]: P,
            });
          return o.createElement(
            "div",
            { className: B, dir: "ltr" },
            U,
            o.createElement(
              "div",
              {
                ref: g,
                className: (0, n.default)(
                  s.default.contentContainer,
                  s.default.slidesContainer
                ),
                onScroll: R,
              },
              F
            ),
            T,
            M,
            o.createElement(f.default, {
              onResize: () => {
                null == v.current && (v.current = requestAnimationFrame(x));
              },
            })
          );
        });
      var n = i(a("ceffhbhahb")),
        o = r(a("ddhijeejag")),
        l = i(a("caifiegjaf")),
        c = r(a("bjdccffhaj")),
        s = i(a("cjcbgcihaj")),
        d = i(a("bbiebgjade")),
        u = a("ccfjbcbbga"),
        f = i(a("djeebcafcb")),
        h = a("deffjjfcba"),
        p = i(a("ecdebjcgfa")),
        m = i(a("bcifhbgija"));
      l.default.polyfill();
    },
    bhehhaehi: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = i(a("ddhijeejag")),
        o = r(a("baeaiejjhd")),
        l = r(a("cefccdiabc")),
        c = r(a("ccbgfecegc")),
        s = r(a("chhdaecjcj")),
        d = i(a("hhcjfgifh")),
        u = r(a("dahagdijgh")),
        f = r(a("bjheffjbgd")),
        h = i(a("bjjhgjdbhd")),
        p = a("ddbdgibbbi"),
        m = r(a("bdjjabfecc")),
        g = r(a("daaejhfihg")),
        b = a("ecceajhjba"),
        j = r(a("gjbhafcjg")),
        v = r(a("bedcfjhfa")),
        C = r(a("ddjgdbbihc")),
        E = a("cachecbicf");
      class _ extends n.Component {
        constructor(...e) {
          super(...e),
            (this._handleCatalogLinkClick = (e) => {
              e.preventDefault(), this._handleSendCatalogLinkClick();
            }),
            (this._handleSendCatalogLinkClick = () => {
              var { catalog: e, sessionId: t, onSend: a } = this.props;
              c.default.openModal(
                n.createElement(v.default, { catalog: e, onSend: a }),
                { transition: "modal-flow" }
              ),
                e.id.equals((0, p.getMaybeMeUser)()) &&
                  (0, b.logShareCatalogViaWALinkClick)(t);
            }),
            (this._handleCopyLinkClick = () => {
              var { catalog: e } = this.props;
              e.id.equals((0, p.getMaybeMeUser)()) &&
                (0, b.logShareCatalogCopyLinkClick)(this.props.sessionId);
            });
        }
        render() {
          var e,
            t,
            {
              onBack: a,
              onCancel: r,
              catalog: i,
              contact: c,
              prompt: p,
              centerDrawer: b,
            } = this.props,
            v = n.createElement(d.default, {
              id: c.id,
              size: 82,
              quality: d.DETAIL_IMAGE_QUALITY.HIGH,
            });
          return (
            b && ((e = "labels"), (t = "center-column")),
            n.createElement(
              u.default,
              { key: "catalog-link-drawer", theme: e },
              n.createElement(h.default, {
                a8n: "catalog-link-title",
                title: m.default.t(364),
                onBack: a,
                onCancel: r,
                type: h.DRAWER_HEADER_TYPE.SMALL,
              }),
              n.createElement(
                f.default,
                { theme: t },
                n.createElement("div", { className: o.default.prompt }, p),
                n.createElement(l.default, {
                  image: v,
                  primary: n.createElement(j.default, {
                    contact: c,
                    useVerifiedName: !0,
                  }),
                  theme: "identity",
                  secondary: n.createElement(g.default, {
                    id: "catalog-link-anchor",
                    href: (0, E.createCatalogLink)(i.id.user),
                    onClick: this._handleCatalogLinkClick,
                    noHandle: !0,
                  }),
                }),
                n.createElement(C.default, {
                  onClick: this._handleSendCatalogLinkClick,
                }),
                n.createElement(s.default, {
                  elementId: "catalog-link-anchor",
                  onClick: this._handleCopyLinkClick,
                })
              )
            )
          );
        }
      }
      t.default = _;
    },
    bhfadhddje: function (e, t, a) {
      "use strict";
      var r = a("bfejgijfbh"),
        i = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = i(a("dfadhaifh")),
        o = i(a("ceffhbhahb")),
        l = r(a("ddhijeejag")),
        c = i(a("dhefebafbj")),
        s = i(a("ejegihaeh")),
        d = i(a("deccgghbae")),
        u = i(a("dbdfbgehgj")),
        f = i(a("ccbgfecegc")),
        h = i(a("hgigjbgie")),
        p = i(a("deegiebgah")),
        m = i(a("dahagdijgh")),
        g = i(a("bjheffjbgd")),
        b = r(a("bjjhgjdbhd")),
        j = a("bgihjbde"),
        v = r(a("cajijabhgb")),
        C = i(a("bdjjabfecc")),
        E = i(a("ebddggeaib")),
        _ = a("ecceajhjba"),
        S = a("cbcbdjdah"),
        k = a("cjcghajbag"),
        P = i(a("ecdebbajad")),
        N = i(a("dbijiicabc")),
        I = i(a("cjdgafagge")),
        y = i(a("dhccahhefj")),
        T = i(a("dcdcffcgdj")),
        M = r(a("ecdebjcgfa")),
        R = i(a("dcdbbhicce")),
        D = a("cjfegjecaj"),
        x = a("dhhjhedjij");
      function L() {
        var e = (0, n.default)(["Failed to fetch product catalog"]);
        return (
          (L = function () {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = (0, n.default)(["Failed to fetch product catalog from server"]);
        return (
          (O = function () {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = (0, n.default)(["Failed to fetch product"]);
        return (
          (w = function () {
            return e;
          }),
          e
        );
      }
      function A() {
        var e = (0, n.default)(["Failed to fetch product from server"]);
        return (
          (A = function () {
            return e;
          }),
          e
        );
      }
      class F extends l.Component {
        constructor(e) {
          super(e),
            (this.onCartClick = () => {
              var { product: e, sessionId: t, onCartClick: a } = this.props;
              a && a(e.catalogWid.toString(), t);
            }),
            (this.onReportProduct = () => {
              var { product: e, sessionId: t } = this.props;
              f.default.openModal(
                l.createElement(T.default, { product: e, sessionId: t })
              );
            }),
            (this.onProductLinkClick = () => {
              var { product: e, sessionId: t } = this.props;
              this.props.onProductLinkClick(e, t);
            }),
            (this.onSendChat = () => {
              var { product: e } = this.props,
                { catalogWid: t } = e,
                a = s.default.get(t);
              if (a) {
                var r = a.productCollection.get(e.id),
                  i = r ? (0, D.unproxy)(r) : (0, D.unproxy)(e);
                if (i) {
                  var n = i.productImageCollection.head(),
                    o = n && n.mediaData;
                  o &&
                    u.default.find(t).then(function (e) {
                      f.default.openChatFromUnread(e).then((a) => {
                        if (a) {
                          var r = (0, D.unproxy)(
                            (0, S.createProductInquiry)(i, t, o)
                          );
                          (e.composeQuotedMsg = r),
                            f.default.focusChatTextInput(e),
                            window.innerWidth <=
                              h.default.LAYOUT_2COLUMNS_MAX_WIDTH &&
                              f.default.closeDrawerRight();
                        }
                      });
                    });
                }
              }
            }),
            (this.onSendProduct = () => {
              var { product: e } = this.props,
                { catalogWid: t } = e,
                a = s.default.get(t);
              if (a) {
                var r = a.productCollection.get(e.id),
                  i = r ? (0, D.unproxy)(r) : (0, D.unproxy)(e);
                f.default.attachProduct({ product: i });
              }
            }),
            (this.onBack = () => {
              var { onBack: e } = this.props;
              if (e) return e();
            }),
            (this.onProductCatalog = () => {
              var {
                onProductCatalog: e,
                sessionId: t,
                product: a,
              } = this.props;
              e && e(a.catalogWid, t);
            }),
            (this.onProductDetail = (e) => {
              var { onProductDetail: t, sessionId: a } = this.props;
              if (t) return t(e, a);
            }),
            (this.isRejected = () => {
              var { reviewStatus: e } = this.props.product;
              return e === k.PRODUCT_REVIEW_STATUS.REJECTED;
            }),
            (this.isAvailable = () => {
              var { productFetchState: e } = this.state;
              return "ERROR" !== e && "NOT_FOUND" !== e && !this.isRejected();
            });
          var t = e.product.fetchedFromServer ? "SUCCESS" : "PENDING",
            a = null,
            r = "NONE";
          e.refreshCarousel &&
            ((a = s.default.get(e.product.catalogWid)) &&
            a.productCollection &&
            a.fetchedFromServer
              ? (r = "SUCCESS")
              : ((a = null), (r = "PENDING")));
          var i = c.default.findCart(this.props.product.catalogWid.toString());
          this.state = {
            productCatalog: a,
            productFetchState: t,
            productCatalogFetchState: r,
            cart: i,
          };
        }
        componentDidMount() {
          var { product: e, sessionId: t, listeners: a } = this.props,
            r = this.state.cart,
            i = e.catalogWid,
            n = e.id.toString();
          i &&
            n &&
            (this._fetchProduct(),
            "PENDING" === this.state.productCatalogFetchState &&
              this._fetchProductCatalog(),
            a.add(r, "change:cartItemCollection", () => {
              this.forceUpdate();
            }),
            (0, _.logProductDetailView)((0, D.unproxy)(e), t));
        }
        _fetchProduct() {
          var { product: e, rejectOnUnmount: t } = this.props,
            a = e.catalogWid,
            r = e.id.toString();
          s.default
            .findProduct({
              catalogWid: a,
              productId: r,
              productMsgMediaData: (0, D.unproxy)(e).productMsgMediaData,
            })
            .checkpoint(t())
            .then(() => {
              this.setState({ productFetchState: "SUCCESS" });
            })
            .catchType(v.Unmount, () => {})
            .catchType(j.ServerStatusCodeError, (e) => {
              "not_found" === e.status
                ? this.setState({ productFetchState: "NOT_FOUND" })
                : (this.setState({ productFetchState: "ERROR" }),
                  __LOG__(3)(A()));
            })
            .catchType(j.WebdDrop, () => {
              this.setState({ productFetchState: "ERROR" }), __LOG__(3)(w());
            });
        }
        _fetchProductCatalog() {
          var { product: e, rejectOnUnmount: t } = this.props,
            a = e.catalogWid;
          s.default
            .findCarouselCatalog(a)
            .checkpoint(t())
            .then((e) => {
              var t = Array.isArray(e) ? e[0] : e;
              this.setState({
                productCatalog: t || null,
                productCatalogFetchState: t ? "SUCCESS" : "NONE",
              });
            })
            .catchType(v.Unmount, () => {})
            .catchType(j.ServerStatusCodeError, (e) => {
              "not_found" === e.status
                ? this.setState({
                    productCatalog: null,
                    productCatalogFetchState: "NOT_FOUND",
                  })
                : (this.setState({
                    productCatalog: null,
                    productCatalogFetchState: "ERROR",
                  }),
                  __LOG__(3)(O()));
            })
            .catchType(j.WebdDrop, () => {
              this.setState({
                productCatalog: null,
                productCatalogFetchState: "ERROR",
              }),
                __LOG__(3)(L());
            });
        }
        componentWillUnmount() {
          var { product: e } = this.props,
            t = e.catalogWid,
            a = e.id.toString();
          if (t && a) {
            var r = s.default.get(t),
              i = r && r.msgProductCollection.get(a);
            i && i.fetchedFromServer && r && r.msgProductCollection.remove(i);
          }
        }
        renderTopBar() {
          var e,
            { productFetchState: t, productCatalogFetchState: a } = this.state,
            r = this.isAvailable();
          e =
            "ERROR" === t
              ? l.createElement(
                  x.TextSpan,
                  {
                    className: P.default.text,
                    theme: "small",
                    color: "danger",
                  },
                  C.default.t(1029)
                )
              : r
              ? [
                  l.createElement(M.default, {
                    size: 14,
                    color: M.colorOptions.highlight,
                    key: "DetailDrawer-loadingBar-spinner",
                  }),
                  l.createElement(
                    x.TextSpan,
                    {
                      className: (0, o.default)(
                        P.default.text,
                        P.default.loadingText
                      ),
                      theme: "small",
                      key: "DetailDrawer-loadingBar-msg",
                    },
                    C.default.t(1052)
                  ),
                ]
              : l.createElement(
                  x.TextSpan,
                  {
                    className: P.default.text,
                    theme: "small",
                    color: "danger",
                  },
                  C.default.t(1038)
                );
          var i = "PENDING" === t || "PENDING" === a || !r;
          return l.createElement(
            "div",
            {
              className: (0, o.default)({
                [P.default.loadingContainer]: i,
                [P.default.shiftUp]: !i,
              }),
            },
            e
          );
        }
        renderDrawerMenu() {
          return this.isAvailable()
            ? l.createElement(p.default, {
                onSendProduct: this.onSendProduct,
                onReportProduct: this.onReportProduct,
                onProductLinkClick: this.onProductLinkClick,
                onCartClick: this.onCartClick,
                cartCount: this.state.cart.itemCount,
                catalogId: this.props.product.catalogWid.toString(),
              })
            : null;
        }
        renderDrawerHeader() {
          return l.createElement(b.default, {
            a8n: "drawer-title-profile",
            title: C.default.t(1032),
            onBack: this.onBack,
            type: b.DRAWER_HEADER_TYPE.SMALL,
            menu: this.renderDrawerMenu(),
          });
        }
        render() {
          var { product: e, sessionId: t } = this.props,
            { productCatalog: a, productFetchState: r } = this.state,
            i = this.isAvailable();
          return l.createElement(
            m.default,
            {
              onDrop: this.onBack,
              theme: "striped",
              key: "product-details-drawer",
            },
            this.renderDrawerHeader(),
            l.createElement(
              g.default,
              null,
              l.createElement(
                "div",
                { className: P.default.body },
                this.renderTopBar(),
                l.createElement(I.default, {
                  product: e,
                  isAvailable: i,
                  fetching: "PENDING" === r,
                  sessionId: t,
                }),
                l.createElement(N.default, {
                  product: e,
                  onCartOpen: this.onCartClick,
                  onSendChat: this.onSendChat,
                  isAvailable: i,
                  sessionId: t,
                }),
                a
                  ? l.createElement(d.default, {
                      catalog: a,
                      onProductCatalog: this.onProductCatalog,
                      onProductDetail: this.onProductDetail,
                      filterProductId: e.id.toString(),
                      title: C.default.t(1026),
                      animation: !1,
                      sessionId: t,
                    })
                  : null
              )
            )
          );
        }
      }
      F.CONCERNS = {
        product: [
          "id",
          "catalogWid",
          "productImageCollection",
          "fetchedFromServer",
          "name",
          "reviewStatus",
        ],
      };
      var U = (0, y.default)((0, E.default)((0, R.default)(F, F.CONCERNS)));
      t.default = U;
    },
    bhfbjbcic: function (e, t) {
      e.exports = {
        container: "_1OZ02",
        containerNoIcon: "jGCLj",
        containerListAligned: "_2DkIf",
        icon: "_1XPVe",
        danger: "_2WmG5",
        success: "_23-Xu",
        bodyContainer: "_3YGnG",
        body: "_3uvNV",
      };
    },
    biegjchieg: function (e, t, a) {
      "use strict";
      var r = a("bfejgijfbh"),
        i = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var { onClick: t } = e,
            a = (0, n.default)(l.default.addItemButton, {
              [l.default.themeDefault]: "default" === e.theme,
              [l.default.themeInList]: "in-list" === e.theme,
            });
          return o.createElement(c.default, {
            theme: "add-item",
            image: o.createElement("div", { className: l.default.addIcon }),
            customImage: !0,
            primary: s.default.t(355),
            className: a,
            onClick: t,
            idle: e.idle,
          });
        });
      var n = i(a("ceffhbhahb")),
        o = r(a("ddhijeejag")),
        l = i(a("cehaiccjjf")),
        c = i(a("cefccdiabc")),
        s = i(a("bdjjabfecc"));
    },
    biggfabaaj: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.CartProductList = void 0);
      var n = i(a("ddhijeejag")),
        o = a("higbihfff"),
        l = r(a("bddadijgjj")),
        c = r(a("hgigjbgie")),
        s = r(a("bgheieccaj")),
        d = r(a("bfchfhibba")),
        u = r(a("ebddggeaib"));
      class f extends n.Component {
        constructor(...e) {
          super(...e),
            (this.getData = () =>
              (0, o.matchCartItemsToProducts)(this.props.cart).map((e) => ({
                itemKey: e.cartItem.id.toString(),
                product: e.product,
                cartItem: e.cartItem,
              }))),
            (this.state = { items: this.getData() }),
            (this.renderItem = (e) => {
              var {
                  onProductDetail: t,
                  sellerJid: a,
                  sessionId: r,
                } = this.props,
                i = { productId: e.cartItem.id, businessOwnerJid: a };
              return n.createElement(l.default, {
                cartId: a,
                product: e.product,
                quantity: e.cartItem.quantity,
                onClick: () => t(i, r),
              });
            });
        }
        componentDidMount() {
          this.setState({ items: this.getData() }),
            this.props.listeners.add(
              this.props.cart,
              "change:cartItemCollection",
              () => {
                this.setState({ items: this.getData() });
              }
            );
        }
        render() {
          var e = this.state.items.map((e) => ({
            itemKey: ""
              .concat(e.product.id.toString(), "_")
              .concat(e.cartItem.quantity),
            product: e.product,
            cartItem: e.cartItem,
          }));
          return n.createElement(
            d.default,
            { flatListControllers: [this.props.flatListController] },
            n.createElement(s.default, {
              flatListController: this.props.flatListController,
              direction: "vertical",
              forceConsistentRenderCount: !1,
              data: e,
              renderItem: this.renderItem,
              defaultItemHeight: c.default.PRODUCT_LIST_ITEM_HEIGHT,
            })
          );
        }
      }
      t.CartProductList = f;
      var h = (0, u.default)(f);
      t.default = h;
    },
    bjgcbbjaij: function (e, t) {
      e.exports = {
        textInput: "_32Tkw",
        labelText: "_3kXKn",
        hideFloatingLabel: "_10fFC",
        float: "_2A3zR",
        spacer: "_1_kit",
        noPlaceholder: "_3OSUF",
        wrapper: "_2_g1_",
        locked: "_21Cgd",
        errorText: "_2HenB",
        textError: "_2gU3y",
        textActive: "_1hiPW",
        iconMainContainer: "_1b5K6",
        iconsEditContainer: "_2vrrM",
        invite: "_3Oi--",
        emojiBtn: "gCa9M",
        charCounter: "_8740E",
        iconMain: "_9uumR",
        iconSpinner: "D6RPP",
        infoStrip: "-YVvI",
        inputLarge: "_2779J",
        active: "_3C2GM",
        emptyValPlaceholder: "_1Eln7",
        more: "_2Hf1w",
        emojiText: "_1IZa_",
        groupInfoName: "_1V5xP",
        small: "_1ApvW",
        desaturated: "_1AD-D",
      };
    },
    caagbgjhgi: function (e, t) {
      e.exports = {
        canvasComponent: "_1dP4h",
        canvasEmpty: "_1pNEh",
        canvasSecondRow: "fhpBa",
        canvasFirst: "_1Pnau",
        more: "_2em7e",
        container: "_2y6Ss",
        galleryEmpty: "_2W6Gz",
        drawer: "_1MM_l",
        drawerBody: "GeI38",
      };
    },
    cabajjgbjb: function (e, t, a) {
      "use strict";
      var r = a("bfejgijfbh"),
        i = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = i(a("ceffhbhahb")),
        o = r(a("ddhijeejag")),
        l = i(a("cagaiadjai")),
        c = i(a("ccbgfecegc")),
        s = i(a("dhfbfehaef")),
        d = i(a("bdjjabfecc")),
        u = i(a("cbedabhaa")),
        f = i(a("dgjfidhijd")),
        h = i(a("bgbbjeecab")),
        p = r(a("bjhgigfbec")),
        m = ["NO_MATCH", "SPAM", "ILLEGAL", "SCAM", "KNOCKOFF", "OTHER"];
      class g extends o.Component {
        constructor(...e) {
          super(...e),
            (this.state = { reason: null }),
            (this.onCancel = () => {
              var { onCancel: e } = this.props;
              e && e();
            }),
            (this.onSubmit = () => {
              if (!this.state.reason) return this.noSelectionToast();
              this.props.onTellUsMoreSubmit(this.state.reason);
            }),
            (this.onReasonChange = (e) => {
              e.target &&
                e.target.value &&
                this.setState({ reason: e.target.value });
            });
        }
        noSelectionToast() {
          c.default.openToast(
            o.createElement(p.default, {
              msg: d.default.t(1050),
              id: (0, p.genId)(),
            })
          );
        }
        renderRadioOptions() {
          var { reason: e } = this.state;
          return m.map((t) =>
            o.createElement(
              "li",
              { key: "ReportProductReasonPopup-".concat(t, "-option") },
              o.createElement(
                "label",
                { className: h.default.label },
                o.createElement("input", {
                  type: "radio",
                  name: t,
                  value: t,
                  onChange: this.onReasonChange,
                  className: h.default.input,
                  checked: e === t,
                }),
                o.createElement(b, { reason: t })
              )
            )
          );
        }
        render() {
          var e = d.default.t(1043),
            t = o.createElement(
              "div",
              { className: (0, n.default)(h.default.section) },
              o.createElement(
                "ul",
                { className: h.default.reasonList },
                this.renderRadioOptions()
              )
            ),
            a = o.createElement(
              l.default,
              {
                a8nText: "popup-controls-submit",
                type: "primary",
                onClick: this.onSubmit,
                key: "ReportProductReasonPopup-submitButton",
                disabled: !this.state.reason,
              },
              d.default.t(1046)
            ),
            r = o.createElement(
              l.default,
              {
                type: "plain",
                a8nText: "popup-controls-cancel",
                onClick: this.onCancel,
                key: "ReportProductReasonPopup-cancelButton",
              },
              d.default.t(1416)
            ),
            i = { escape: this.onCancel },
            c = o.createElement("div", { className: h.default.buttons }, r, a);
          return o.createElement(
            s.default,
            { handlers: i },
            o.createElement(f.default, { title: e, actions: c, children: t })
          );
        }
      }
      function b(e) {
        var { reason: t } = e;
        switch (t) {
          case "NO_MATCH":
            return o.createElement(u.default, { id: 1041 });
          case "SPAM":
            return o.createElement(u.default, { id: 1045 });
          case "ILLEGAL":
            return o.createElement(u.default, { id: 1039 });
          case "SCAM":
            return o.createElement(u.default, { id: 1044 });
          case "KNOCKOFF":
            return o.createElement(u.default, { id: 1040 });
          case "OTHER":
            return o.createElement(u.default, { id: 1042 });
          default:
            throw new Error("Invalid reason: ".concat(t));
        }
      }
      t.default = g;
    },
    cacbgcigff: function (e, t) {
      e.exports = {
        info: "_2o0N0",
        footer: "-wm5g",
        btnSend: "_3-h-T",
        cartMessage: "_2jae9",
      };
    },
    cachecbicf: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createProductLink = function (e, t) {
          return "https://wa.me/p/".concat(t, "/").concat(e);
        }),
        (t.createCatalogLink = function (e) {
          return "https://wa.me/c/".concat(e);
        });
    },
    cbdhjigcdb: function (e, t) {
      e.exports = {
        header: "_31lgd",
        photo: "_2y9SG",
        text: "IdTzl",
        name: "CH1Cj",
        description: "_1CEiX",
        spinner: "_37MLX",
        img: "_2Qp_U",
      };
    },
    cbhhjfihbc: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var { product: t, onSend: a } = e,
            r = (0, s.createProductLink)(t.catalogWid.user, t.id.toString()),
            i = t.catalogWid.equals((0, o.getMaybeMeUser)())
              ? "".concat(l.default.t(1051), " ").concat(r)
              : r;
          return n.createElement(c.default, {
            text: i,
            pushTransition: "none",
            popTransition: "none",
            onSend: a,
          });
        });
      var n = i(a("ddhijeejag")),
        o = a("ddbdgibbbi"),
        l = r(a("bdjjabfecc")),
        c = r(a("dighgbcbbd")),
        s = a("cachecbicf");
    },
    cciafahdib: function (e, t, a) {
      "use strict";
      var r = a("bfejgijfbh"),
        i = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var {
              children: t,
              onClick: a,
              icon: r,
              className: i,
              color: f,
              theme: h,
            } = e,
            [p, m] = (0, u.default)(a),
            g =
              null != r
                ? l.createElement(
                    "div",
                    {
                      className: (0, o.default)(s.default.icon, {
                        [s.default.danger]: "danger" === f,
                        [s.default.success]: "success" === f,
                      }),
                    },
                    r
                  )
                : null,
            b = (0, o.default)(s.default.container, i, {
              [s.default.containerNoIcon]: !r,
              [s.default.containerListAligned]: "list-aligned" === h,
            }),
            j = "string" == typeof t ? t : null;
          return l.createElement(
            "div",
            (0, n.default)({}, m, {
              className: b,
              "data-a8n": c.default.key(e.a8nText),
              "data-ignore-capture": "any",
              ref: p,
              title: j,
            }),
            g,
            l.createElement(
              "div",
              { className: s.default.bodyContainer },
              l.createElement(
                "div",
                { className: s.default.body },
                l.createElement(d.TextSpan, { theme: "title", color: f }, t)
              )
            )
          );
        });
      var n = i(a("bacehaajgh")),
        o = i(a("ceffhbhahb")),
        l = r(a("ddhijeejag")),
        c = i(a("effbcehec")),
        s = i(a("bhfbjbcic")),
        d = a("dhhjhedjij"),
        u = i(a("ccaddbgihj"));
    },
    cddcdgeibi: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return n.createElement(c.default, {
            name: "link",
            className: (0, o.default)(l.default.linkIcon, {
              [l.default.inheritColor]: "inherit-color" === e.theme,
            }),
          });
        });
      var n = i(a("ddhijeejag")),
        o = r(a("ceffhbhahb")),
        l = r(a("fibcdcich")),
        c = r(a("dgdcjccfdi"));
    },
    cdhfigedae: function (e, t, a) {
      "use strict";
      var r = a("bfejgijfbh"),
        i = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.MediaThumb = void 0);
      var n = i(a("ceffhbhahb")),
        o = r(a("ddhijeejag")),
        l = i(a("cfghjdjcgg")),
        c = i(a("cfadcbbiie")),
        s = i(a("ebddggeaib")),
        d = i(a("dcjigehfeb")),
        u = i(a("bcegbecagi")),
        f = i(a("chihecbaj")),
        h = i(a("dgdcjccfdi"));
      class p extends o.Component {
        constructor() {
          super(...arguments),
            (this.setRefImg = (e) => {
              this.img = e;
            }),
            (this.setRefContainer = (e) => {
              this.container = e;
            }),
            (this.onSelectClick = () => {
              this.props.onMessageSelect &&
                this.props.onMessageSelect(
                  this.props.msg,
                  !this.props.selected
                );
            }),
            (this.onMouseOver = () => {
              this.state.hover || this.setState({ hover: !0 });
            }),
            (this.onMouseEnter = () => {
              this.state.hover || this.setState({ hover: !0 });
            }),
            (this.onMouseLeave = () => {
              this.state.hover && this.setState({ hover: !1 });
            }),
            (this._renderImgNode = (e, t, a, r) =>
              this.props.onDragStart
                ? o.createElement(
                    "div",
                    {
                      className: e,
                      style: t,
                      onClick: this.props.onClick || null,
                      ref: this.setRefImg,
                      onDragStart: this.props.onDragStart,
                      draggable: !0,
                    },
                    r,
                    a
                  )
                : o.createElement(
                    "div",
                    {
                      className: e,
                      style: t,
                      onClick: this.props.onClick || null,
                      ref: this.setRefImg,
                    },
                    r,
                    a
                  )),
            (this._renderImg = () => {
              var e,
                t,
                a,
                {
                  msg: { mediaData: r },
                  preferPreview: i,
                } = this.props;
              switch (
                (this.props.msg.star &&
                  r.type !== d.default.TYPE.AUDIO &&
                  (a = o.createElement("div", { className: u.default.shade })),
                r.type)
              ) {
                case d.default.TYPE.AUDIO:
                  return (
                    (e = "".concat(
                      u.default.mediaCanvas,
                      " attach-media-audio-thumb"
                    )),
                    this._renderImgNode(e, t, a)
                  );
                case d.default.TYPE.VIDEO:
                  return (
                    (a = o.createElement("div", {
                      className: u.default.shade,
                    })),
                    (e = r.isGif
                      ? r.preview
                        ? u.default.mediaCanvas
                        : "".concat(u.default.mediaCanvas, " media-video-thumb")
                      : u.default.mediaCanvas),
                    r.preview &&
                      (t = {
                        backgroundImage: 'url("'.concat(r.preview.url(), '")'),
                      }),
                    this._renderImgNode(e, t, a)
                  );
                case d.default.TYPE.IMAGE:
                  e = u.default.mediaCanvas;
                  var n = (t) => {
                      var i =
                        null != t
                          ? o.createElement("div", {
                              className: e,
                              style: { backgroundImage: "url(".concat(t, ")") },
                            })
                          : null;
                      return this._renderImgNode(
                        e,
                        r.preview
                          ? {
                              backgroundImage: "url(".concat(
                                r.preview.url(),
                                ")"
                              ),
                            }
                          : null,
                        a,
                        i
                      );
                    },
                    l = () =>
                      r.preview ? n(null) : this._renderImgNode(e, null, a);
                  return i
                    ? l()
                    : o.createElement(
                        "div",
                        { className: u.default.mediaCanvas },
                        o.createElement(
                          f.default,
                          {
                            mediaData: r,
                            placeholderRenderer: l,
                            renderProgressively: !0,
                          },
                          n
                        )
                      );
                default:
                  return this._renderImgNode(e, t, a);
              }
            }),
            (this._renderIcon = () => {
              var {
                msg: { mediaData: e },
              } = this.props;
              if (!e) return null;
              switch (e.type) {
                case d.default.TYPE.AUDIO:
                  return o.createElement(
                    "div",
                    { className: u.default.iconType },
                    o.createElement(h.default, { name: "msg-audio" })
                  );
                case d.default.TYPE.VIDEO:
                  return e.isGif
                    ? o.createElement(
                        "div",
                        { className: u.default.iconType },
                        o.createElement(h.default, { name: "msg-gif" })
                      )
                    : o.createElement(
                        "div",
                        { className: u.default.iconType },
                        o.createElement(h.default, { name: "msg-video" })
                      );
                default:
                  return null;
              }
            }),
            (this._renderDuration = () => {
              var {
                msg: { mediaData: e },
              } = this.props;
              switch (e.type) {
                case d.default.TYPE.AUDIO:
                  return o.createElement(m, { duration: e.duration });
                case d.default.TYPE.VIDEO:
                  return e.isGif
                    ? null
                    : o.createElement(m, { duration: e.duration });
                default:
                  return null;
              }
            }),
            (this.state = { hover: !1 });
        }
        componentDidMount() {
          this.props.listeners.add(
            this.props.msg.mediaData,
            "change:preview",
            () => {
              this.forceUpdate();
            }
          ),
            this.props.listeners.add(this.props.msg, "change:star", () => {
              this.forceUpdate();
            }),
            this.props.imgRef && this.props.imgRef(this.img),
            this.props.containerRef && this.props.containerRef(this.container);
        }
        componentDidUpdate() {
          this.props.imgRef && this.props.imgRef(this.img),
            this.props.containerRef && this.props.containerRef(this.container);
        }
        componentWillUnmount() {
          this.props.imgRef && this.props.imgRef(null),
            this.props.containerRef && this.props.containerRef(null);
        }
        render() {
          var e,
            { selectable: t, theme: a, active: r } = this.props,
            i = this.props.selected || !1;
          (t || this.state.hover) &&
            (e = o.createElement(
              "div",
              { className: u.default.mediaSelect },
              o.createElement("div", {
                className: u.default.shadeTop,
                onClick: this.props.onClick || null,
              }),
              o.createElement(l.default, {
                onChange: this.onSelectClick,
                hover: this.state.hover,
                checked: i,
              })
            ));
          var c = null,
            s = null,
            d = null;
          this.props.hoverEvent &&
            ((c = this.onMouseOver),
            (s = this.onMouseEnter),
            (d = this.onMouseLeave));
          var f = (0, n.default)(
            this.props.classes,
            u.default.canvasComponent,
            {
              [u.default.canvasSelected]: i,
              [u.default.canvasSecondRow]: "hideableSecondRow" === a,
              [u.default.viewerFlow]:
                "viewerFlow" === a || "viewerFlowTransparent" === a,
              [u.default.viewerFlowTransparent]: "viewerFlowTransparent" === a,
              [u.default.active]: !0 === r,
            }
          );
          return o.createElement(
            "div",
            {
              ref: this.setRefContainer,
              className: f,
              onMouseOver: c,
              onMouseEnter: s,
              onMouseLeave: d,
            },
            e,
            o.createElement(
              "div",
              { className: u.default.canvasBody },
              this._renderIcon(),
              this._renderDuration(),
              this.props.msg.star
                ? o.createElement(
                    "div",
                    { className: u.default.iconStar },
                    o.createElement(h.default, { name: "star" })
                  )
                : null
            ),
            this._renderImg()
          );
        }
      }
      function m({ duration: e }) {
        var t = c.default.durationStr(e);
        return t
          ? o.createElement(
              "span",
              { className: u.default.mediaCanvasDuration },
              t
            )
          : null;
      }
      t.MediaThumb = p;
      var g = (0, s.default)(p);
      t.default = g;
    },
    cdicaaigga: function (e, t, a) {
      "use strict";
      var r = a("bfejgijfbh"),
        i = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.Gallery = void 0);
      var n = i(a("hhegggegb")),
        o = i(a("ceffhbhahb")),
        l = r(a("ddhijeejag")),
        c = i(a("effbcehec")),
        s = i(a("ccbgfecegc")),
        d = i(a("hgigjbgie")),
        u = a("cdhbdacigj"),
        f = i(a("bdjjabfecc")),
        h = i(a("ebddggeaib")),
        p = i(a("dcjigehfeb")),
        m = i(a("caagbgjhgi")),
        g = i(a("ebibaajhjh")),
        b = i(a("cdhfigedae")),
        j = i(a("bfgbdiffgd")),
        v = i(a("ecdebjcgfa")),
        C = i(a("dcdbbhicce")),
        E = a("cjfegjecaj");
      class _ extends l.Component {
        constructor(...e) {
          super(...e),
            (this.onScroll = (e) => {
              this.handleScroll(e.currentTarget);
            }),
            (this.handleScroll = (0, n.default)((e) => {
              var t = this.props.mediaMsgs;
              t.hasMediaBefore &&
                e.scrollTop + d.default.SCROLL_FUDGE >
                  e.scrollHeight - e.clientHeight &&
                this.queryMedia(t.head());
            }, 100));
        }
        componentDidMount() {
          this.props.mediaMsgs.hasMediaBefore && this.queryMedia(),
            this.props.listeners.add(this.props.mediaMsgs, "add", () => {
              this.forceUpdate();
            }),
            this.props.listeners.add(this.props.mediaMsgs, "remove", (e) => {
              var t = this.props.selectedMessages;
              t && t.isSelected(e) && t.setVal(e, !1), this.forceUpdate();
            }),
            this.props.listeners.add(this.props.mediaMsgs, "reset", () => {
              this.props.selectedMessages &&
                this.props.selectedMessages.unsetAll(),
                this.forceUpdate();
            }),
            this.props.listeners.add(
              this.props.mediaMsgs,
              "query_media_before",
              () => {
                this.forceUpdate();
              }
            );
        }
        componentWillUnmount() {
          this.handleScroll.cancel();
        }
        queryMedia(e) {
          var t = this.props.mediaMsgs;
          t.hasMediaBefore &&
            this.props.listeners.uiIdle(() => {
              t.queryMedia((0, E.unproxy)(this.props.chat), e);
            });
        }
        render() {
          var e = this.props.mediaMsgs,
            { fullCollection: t, selectedMessages: a, chat: r } = this.props,
            i = e.map((r, i) => {
              var n;
              return (
                !this.props.fullCollection &&
                  i >= e.length - 6 &&
                  i <= e.length - 4 &&
                  (n = "hideableSecondRow"),
                l.createElement(k, {
                  msg: r,
                  hoverEvent: t,
                  selectable: this.props.selectable,
                  selectedMessages: a,
                  onMessageSelect: this.props.onMessageSelect,
                  theme: n,
                  key: r.id.toString(),
                })
              );
            });
          return (
            i.reverse(),
            t || (i = i.slice(0, 6)),
            l.createElement(P, {
              medias: i,
              mediaCollection: e,
              fullCollection: t,
              chat: (0, E.unproxy)(r),
              onScroll: this.onScroll,
            })
          );
        }
      }
      _.CONCERNS = { chat: ["linkCount", "docCount"] };
      class S extends l.Component {
        constructor() {
          super(...arguments),
            (this.setRefImg = (e) => {
              this.img = e;
            }),
            (this.onSelectChange = (e) => {
              this.state.selected !== e && this.setState({ selected: e });
            }),
            (this.onClick = (e) => {
              var { msg: t, selectable: a, onMessageSelect: r } = this.props,
                i = t.mediaData;
              if (a && r) r(t, !this.state.selected);
              else if (i.mediaStage !== p.default.STAGE.ERROR_MISSING) {
                var n;
                e && e.stopPropagation();
                var o = t.id;
                if (i.isGif || i.type === p.default.TYPE.IMAGE) {
                  var c = this.img;
                  n = (e) => (o.equals(e) && c ? c : null);
                }
                s.default.mediaViewerModal({
                  msg: (0, E.unproxy)(t),
                  getZoomNode: n,
                });
              } else
                s.default.openModal(l.createElement(g.default, { msg: t }));
            }),
            (this.onDragStart = (e) => {
              e.nativeEvent.dataTransfer.setData(
                "text/uri-list",
                this.props.msg.mediaData.renderableUrl
              );
            });
          var { msg: e, selectedMessages: t } = this.props;
          this.state = { selected: !(!t || !t.isSelected(e)) };
        }
        componentDidMount() {
          this.props.selectedMessages &&
            this.props.listeners.add(
              this.props.selectedMessages,
              this.props.msg.id.toString(),
              this.onSelectChange
            );
        }
        render() {
          var e = this.props.msg,
            t = e.mediaData,
            a =
              t.type === p.default.TYPE.IMAGE && t.renderableUrl
                ? this.onDragStart
                : null,
            r = (0, o.default)(this.props.className);
          return l.createElement(b.default, {
            classes: r,
            onClick: this.onClick,
            hoverEvent: this.props.hoverEvent,
            selectable: this.props.selectable,
            selected: this.state.selected,
            onMessageSelect: this.props.onMessageSelect,
            onDragStart: a,
            msg: e,
            theme: this.props.theme,
            imgRef: this.setRefImg,
          });
        }
      }
      var k = (0, h.default)(S);
      class P extends l.Component {
        render() {
          var {
              mediaCollection: e,
              fullCollection: t,
              chat: a,
              onScroll: r,
            } = this.props,
            i = this.props.medias || this.props.productMedias;
          if (!i) return null;
          var n,
            s,
            d,
            h,
            p = (0, o.default)(m.default.container, {
              [m.default.drawer]: t,
              [m.default.galleryEmpty]: 0 === e.length,
            }),
            g = [...i];
          if (e.queryMediaBefore && (t || g.length < 6)) {
            var b = (0, o.default)(m.default.more, m.default.canvasComponent, {
              [m.default.canvasSecondRow]: !t && g.length >= 3,
              [m.default.canvasFirst]: 0 === e.length,
            });
            g.push(
              l.createElement(
                "div",
                { className: b, key: "spinner" },
                l.createElement(v.default, { stroke: 6, size: 24 })
              )
            );
          }
          if (0 === e.length) {
            if (t)
              return e.queryMediaBefore
                ? l.createElement(
                    "div",
                    {
                      className: (0, o.default)(
                        m.default.drawer,
                        m.default.drawerBody
                      ),
                    },
                    l.createElement(u.Loading, null)
                  )
                : l.createElement(u.MediaMsgs, null);
            e.queryMediaBefore ||
              e.hasMediaBefore ||
              ((p = (0, o.default)(p, m.default.galleryEmpty)),
              (g = [
                ((n = Math.max(a ? a.docCount : 0, 0)),
                (s = Math.max(a ? a.linkCount : 0, 0)),
                (d = Math.max(a ? a.productCount : 0, 0)),
                (h = []),
                null != n &&
                  n > 0 &&
                  h.push(f.default.t(476, { count: n, _plural: n })),
                null != s &&
                  s > 0 &&
                  h.push(f.default.t(744, { count: s, _plural: s })),
                j.default.productMediaAttachments &&
                  null != d &&
                  d > 0 &&
                  h.push(f.default.t(1054, { count: d, _plural: d })),
                h.length > 0
                  ? h.join(f.default.t(506))
                  : j.default.productMediaAttachments
                  ? f.default.t(974)
                  : f.default.t(973)),
              ]));
          } else
            for (var C = 0; C < 6; C++)
              g.push(
                l.createElement("div", {
                  className: m.default.canvasEmpty,
                  key: "empty" + C,
                })
              );
          return l.createElement(
            "div",
            {
              onScroll: r,
              "data-a8n": c.default.key("media-gallery"),
              className: p,
            },
            g
          );
        }
      }
      t.Gallery = P;
      var N = (0, h.default)((0, C.default)(_, _.CONCERNS));
      t.default = N;
    },
    cdjacgadag: function (e, t) {
      e.exports = { select: "_38eoB" };
    },
    cebicejafi: function (e, t) {
      e.exports = { cartIcon: "_24blV", inheritColor: "_2W7WG" };
    },
    cehaiccjjf: function (e, t) {
      e.exports = {
        addItemButton: "i2U-Z",
        themeInList: "_24129",
        themeDefault: "_2-XT1",
        addIcon: "_2WvWn",
      };
    },
    cfdfiiafca: function (e, t) {
      e.exports = {
        container: "_3ikY2",
        containerBg: "_2Lv59",
        loadingBlock: "_8fDwc",
        fadeIn: "_26Cwg",
        column: "_3AWLS",
        lastColumn: "_2h8Hi",
        lastColumnWidth: "oCLLQ",
        headContainer: "_3lQNk",
        spinner: "_3UIa9",
      };
    },
    cgjcdbggeb: function (e, t, a) {
      "use strict";
      var r = a("bfejgijfbh"),
        i = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.addParticipants = function (e, t) {
          return (function e(t, a, r = (0, l.genId)()) {
            var i = t.groupMetadata.participants;
            if (a.some((e) => i.get(e.id)))
              return __LOG__(3)(j()), Promise.reject(new s.ActionError());
            if (!i.canAdd()) return Promise.reject(new s.ActionError());
            var n = (0, f.sendAddParticipants)(
                t.id,
                a.map((e) => e.id)
              ),
              h = a.map((e) => e.formattedShortName).join(u.default.t(506)),
              p = new l.ActionType(
                u.default.t(141, { participantNames: h, _plural: a.length })
              ),
              m = n
                .then((e) => {
                  i.sendForNeededAddRequest(e);
                  var t = d.formatResult(
                    e,
                    d.addSuccessString,
                    d.addFailedString,
                    d.addPartialFailedString,
                    a
                  );
                  return new l.ActionType(t);
                })
                .catch(
                  () => (
                    __LOG__(3)(b()),
                    new l.ActionType(
                      u.default.t(138, {
                        participantNames: h,
                        _plural: a.length,
                      }),
                      u.default.t(178),
                      () => e(t, a, r)
                    )
                  )
                );
            return (
              c.default.openToast(
                o.createElement(l.ActionToast, {
                  id: r,
                  initialAction: p,
                  pendingAction: m,
                })
              ),
              n.then(() => {})
            );
          })((0, h.unproxy)(e), t);
        }),
        (t.removeParticipants = function (e, t) {
          return (function e(t, a, r = (0, l.genId)()) {
            var i = t.groupMetadata.participants;
            if (a.some((e) => !i.canRemove(e)))
              return Promise.reject(new s.ActionError());
            var n = (0, f.sendRemoveParticipants)(
                t.id,
                a.map((e) => e.id)
              ),
              h = a
                .map((e) => e.contact.formattedShortName)
                .join(u.default.t(506)),
              p = new l.ActionType(
                u.default.t(159, { participantNames: h, _plural: a.length })
              ),
              m = n
                .then((e) => {
                  var t = d.formatRemoveResult(
                    e,
                    a.map((e) => e.contact)
                  );
                  return new l.ActionType(t);
                })
                .catch(
                  () => (
                    __LOG__(3)(g()),
                    new l.ActionType(
                      u.default.t(155, {
                        participantNames: h,
                        _plural: a.length,
                      }),
                      u.default.t(178),
                      () => e(t, a, r)
                    )
                  )
                );
            return (
              c.default.openToast(
                o.createElement(l.ActionToast, {
                  id: r,
                  initialAction: p,
                  pendingAction: m,
                })
              ),
              n.then(() => {})
            );
          })((0, h.unproxy)(e), t);
        }),
        (t.promoteParticipants = function (e, t) {
          return (function e(t, a, r = (0, l.genId)()) {
            var i = t.groupMetadata.participants;
            if (a.some((e) => !i.canPromote(e)))
              return Promise.reject(new s.ActionError());
            var n = (0, f.sendPromoteParticipants)(
                t.id,
                a.map((e) => e.id)
              ),
              h = a
                .map((e) => e.contact.formattedShortName)
                .join(u.default.t(506)),
              p = new l.ActionType(
                u.default.t(154, { participantNames: h, _plural: a.length })
              ),
              g = n
                .then((e) => {
                  var t = d.formatResult(
                    e,
                    d.promoteSuccessString,
                    d.promoteFailedString,
                    d.promotePartialFailedString,
                    a.map((e) => e.contact)
                  );
                  return new l.ActionType(t);
                })
                .catch(
                  () => (
                    __LOG__(3)(m()),
                    new l.ActionType(
                      u.default.t(151, {
                        participantNames: h,
                        _plural: a.length,
                      }),
                      u.default.t(178),
                      () => e(t, a, r)
                    )
                  )
                );
            return (
              c.default.openToast(
                o.createElement(l.ActionToast, {
                  id: r,
                  initialAction: p,
                  pendingAction: g,
                })
              ),
              n.then(() => {})
            );
          })((0, h.unproxy)(e), t);
        }),
        (t.demoteParticipants = function (e, t) {
          return (function e(t, a, r = (0, l.genId)()) {
            var i = t.groupMetadata.participants;
            if (a.some((e) => !i.canDemote(e)))
              return Promise.reject(new s.ActionError());
            var n = (0, f.sendDemoteParticipants)(
                t.id,
                a.map((e) => e.id)
              ),
              h = a
                .map((e) => e.contact.formattedShortName)
                .join(u.default.t(506)),
              m = new l.ActionType(
                u.default.t(146, { participantNames: h, _plural: a.length })
              ),
              g = n
                .then((e) => {
                  var t = d.formatResult(
                    e,
                    d.demoteSuccessString,
                    d.demoteFailedString,
                    d.demotePartialFailedString,
                    a.map((e) => e.contact)
                  );
                  return new l.ActionType(t);
                })
                .catch(
                  () => (
                    __LOG__(3)(p()),
                    new l.ActionType(
                      u.default.t(142, {
                        participantNames: h,
                        _plural: a.length,
                      }),
                      u.default.t(178),
                      () => e(t, a, r)
                    )
                  )
                );
            return (
              c.default.openToast(
                o.createElement(l.ActionToast, {
                  id: r,
                  initialAction: m,
                  pendingAction: g,
                })
              ),
              n.then(() => {})
            );
          })((0, h.unproxy)(e), t);
        });
      var n = i(a("dfadhaifh")),
        o = r(a("ddhijeejag")),
        l = a("dheeaichcj"),
        c = i(a("ccbgfecegc")),
        s = r(a("cajijabhgb")),
        d = r(a("gcehifbbc")),
        u = i(a("bdjjabfecc")),
        f = a("bceahhbbcj"),
        h = a("cjfegjecaj");
      function p() {
        var e = (0, n.default)([
          "models:groupMetadata:participantCollection:demoteParticipants dropped",
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = (0, n.default)([
          "models:groupMetadata:participantCollection:removeParticipants dropped",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = (0, n.default)([
          "models:groupMetadata:participantCollection:removeParticipants dropped",
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = (0, n.default)([
          "models:groupMetadata:participantCollection:addParticipants dropped",
        ]);
        return (
          (b = function () {
            return e;
          }),
          e
        );
      }
      function j() {
        var e = (0, n.default)([
          "models:groupMetadata:participantCollection:addParticipants already a group member",
        ]);
        return (
          (j = function () {
            return e;
          }),
          e
        );
      }
    },
    chcebgfahi: function (e, t, a) {
      "use strict";
      var r = a("bfejgijfbh"),
        i = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var [t, a] = o.useState(null);
          return (
            o.useEffect(() => {
              if (e) {
                var t = !1;
                return (
                  (0, n.default)(function* () {
                    var r,
                      i,
                      n = yield (0, c.default)(e).catch(() => {}),
                      o =
                        (null == n || null === (r = n.data) || void 0 === r
                          ? void 0
                          : r.title) ||
                        (null == n || null === (i = n.data) || void 0 === i
                          ? void 0
                          : i.description)
                          ? n.data
                          : null;
                    t || a(o);
                  })(),
                  () => {
                    t = !0;
                  }
                );
              }
              a(null);
            }, [e]),
            {
              linkPreview: t,
              clearLinkPreview: () => {
                a(null);
              },
            }
          );
        }),
        (t.findFirstWebLink = void 0);
      var n = i(a("ffedgcdgj")),
        o = r(a("ddhijeejag")),
        l = a("dacicgjcai"),
        c = i(a("ifeefbdg")),
        s = r(a("dbcedfihd"));
      t.findFirstWebLink = (e) => {
        var t,
          a = (0, l.removeCodeBlocks)(e);
        return null === (t = s.findLinks(a, !0)[0]) || void 0 === t
          ? void 0
          : t.url;
      };
    },
    chgjjahcff: function (e, t) {
      e.exports = {
        buttonContainer: "_1r_hd",
        addToCartButton: "_3Dxzl",
        addToCartIcon: "LvjNA",
        addToCartContainer: "_1QZd6",
        name: "_2nLh-",
        price: "dz69u",
        description: "_34-Pt",
        more: "_8C2wC",
        descBlock: "rG4Ah",
      };
    },
    chhdaecjcj: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function ({ elementId: e, onClick: t }) {
          return document.queryCommandSupported("copy")
            ? n.createElement(
                s.default,
                {
                  a8nText: "li-copy-link",
                  icon: n.createElement(u.default, {
                    name: "copy",
                    className: l.default.icon,
                  }),
                  onClick: () =>
                    (function (e, t) {
                      (0, c.default)(e)
                        ? o.default.openToast(
                            n.createElement(f.default, {
                              msg: d.default.t(742),
                              id: (0, f.genId)(),
                            })
                          )
                        : o.default.openToast(
                            n.createElement(f.default, {
                              msg: d.default.t(741),
                              id: (0, f.genId)(),
                            })
                          );
                      null != t && t();
                    })(e, t),
                },
                d.default.t(447)
              )
            : null;
        });
      var n = i(a("ddhijeejag")),
        o = r(a("ccbgfecegc")),
        l = r(a("bffbaagjef")),
        c = r(a("idecbbghf")),
        s = r(a("cciafahdib")),
        d = r(a("bdjjabfecc")),
        u = r(a("dgdcjccfdi")),
        f = i(a("bjhgigfbec"));
    },
    chhebaafhb: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = i(a("ddhijeejag")),
        o = a("eajdbbfgfg"),
        l = r(a("baeeaadbih")),
        c = r(a("eeebhdeed"));
      class s extends n.PureComponent {
        constructor(...e) {
          super(...e),
            (this.renderLabel = () => {
              var { labels: e } = this.props;
              if (e)
                return e.map((e, t) =>
                  n.createElement(
                    "div",
                    { key: t, className: l.default.labelRow },
                    n.createElement(c.default, { labels: [e], showName: !0 })
                  )
                );
            });
        }
        render() {
          var { labels: e } = this.props;
          return e && (0, o.canDisplayLabel)()
            ? n.createElement(
                "div",
                { className: l.default.labelContainer },
                this.renderLabel()
              )
            : null;
        }
      }
      var d = s;
      t.default = d;
    },
    chjejfcdd: function (e, t, a) {
      "use strict";
      var r = a("bfejgijfbh"),
        i = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = i(a("ceffhbhahb")),
        o = r(a("ddhijeejag")),
        l = i(a("ccbgfecegc")),
        c = i(a("bbfjdcedab")),
        s = a("jagjbhcgf"),
        d = i(a("bjjdjibgad")),
        u = a("dbbhijehii"),
        f = i(a("dhfbfehaef")),
        h = i(a("bdjjabfecc")),
        p = i(a("jdibabjeb")),
        m = i(a("bajeaefcdg")),
        g = a("cecdefhddc"),
        b = i(a("dgdcjccfdi")),
        j = i(a("cgjdibiahi")),
        v = i(a("dfciadajdf")),
        C = a("bficeagfg"),
        E = i(a("didfdhbecg"));
      class _ extends o.Component {
        constructor(...e) {
          super(...e),
            (this.state = { active: !1, emojiPicker: null }),
            (this.onEmojiPicker = (e) => {
              e && (e.preventDefault(), e.stopPropagation());
              var t = o.createElement(d.default, {
                onEmoji: this.onEmoji,
                onFocusNext: this.restoreFocus,
                onFocusPrev: this.restoreFocus,
              });
              this.setState({
                emojiPicker: {
                  menu: t,
                  dirY: s.DirY.TOP,
                  type: "emoji_picker",
                  anchor: e.target,
                },
              }),
                this.restoreFocus();
            }),
            (this.onEmojiPickerClose = () => {
              this.setState({ emojiPicker: null });
            }),
            (this.onRestoreEmojiPickerFocus = () => {
              if (this.refEmojiPicker) {
                var e = this.refEmojiPicker.getRef();
                if (e) {
                  var t = e.getElement();
                  t && t.restoreFocus();
                }
              }
            }),
            (this.onEmoji = (e) => {
              var t = this.refInput;
              t && (t.focus(!1), t.replaceSelection(e)),
                this.onEmojiPickerClose();
            }),
            (this.setRefInput = (e) => {
              this.refInput = e;
            }),
            (this.setRefEmojiPicker = (e) => {
              this.refEmojiPicker = e;
            }),
            (this.onSelectionChange = (e) => {
              this.selection = e;
            }),
            (this.onMaxPasteExceeded = () => {
              l.default.openModal(
                o.createElement(
                  c.default,
                  {
                    title: h.default.t(346),
                    onOK: () => {
                      l.default.closeModal();
                    },
                    okText: h.default.t(1564),
                  },
                  h.default.t(345)
                )
              );
            }),
            (this.restoreFocus = () => {
              this.refInput && this.refInput.focus();
            }),
            (this.onBlur = (e) => {
              this.state.active && this.setState({ active: !1 }),
                this.props.onBlur && this.props.onBlur(e);
            }),
            (this.onFocus = (e) => {
              e.stopPropagation(),
                this.state.active || this.setState({ active: !0 }),
                this.props.onFocus && this.props.onFocus(e);
            }),
            (this.onReset = () => {
              this.refInput && this.refInput.reset();
            });
        }
        componentDidMount() {
          this.props.focusOnMount && this.restoreFocus();
        }
        render() {
          var e,
            t = this.props.maxLength,
            a = (0, C.numCodepoints)(this.props.value || ""),
            r = (0, n.default)(m.default.textInput, {
              [m.default.noPlaceholder]: !this.props.placeholder,
              [m.default.active]: !0,
            }),
            i = (0, n.default)(m.default.labelText, {
              [m.default.float]: !!this.props.value,
            }),
            l = this.props.supportsEmoji
              ? o.createElement(
                  "button",
                  {
                    className: m.default.inputEmoji,
                    onClick: this.onEmojiPicker,
                  },
                  o.createElement(b.default, { name: "emoji-input" })
                )
              : void 0,
            { value: c } = this.props;
          e =
            c && "" !== c
              ? o.createElement(
                  "div",
                  {
                    role: "button",
                    className: m.default.clearInput,
                    onClick: this.onReset,
                  },
                  o.createElement(b.default, { name: "x-alt" })
                )
              : null;
          var s,
            d = this.props.showRemaining
              ? o.createElement(
                  "div",
                  {
                    className: (0, n.default)(
                      m.default.buttonContainer,
                      m.default.charCounter,
                      { [m.default.charCounterWithClearBtn]: !!e }
                    ),
                  },
                  o.createElement(
                    "div",
                    { className: m.default.charCounter },
                    t - a < 50 ? h.default.n(t - a) : null
                  )
                )
              : null;
          return (
            this.state.emojiPicker &&
              (s = o.createElement(
                j.default,
                {
                  displayName: "EmojiPicker",
                  escapable: !0,
                  popable: !0,
                  ref: this.setRefEmojiPicker,
                  requestDismiss: this.onEmojiPickerClose,
                  requestFocus: this.onRestoreEmojiPickerFocus,
                },
                o.createElement(v.default, {
                  contextMenu: this.state.emojiPicker,
                })
              )),
            o.createElement(
              f.default,
              { className: r, onFocus: this.restoreFocus },
              o.createElement("span", { className: i }, this.props.placeholder),
              o.createElement("div", { className: m.default.spacer }),
              o.createElement(
                "div",
                { className: m.default.suggestionsPositioner },
                o.createElement(
                  "div",
                  { className: m.default.suggestionsContainer },
                  o.createElement(p.default.MentionSuggestions, {
                    chat: this.props.chat,
                    theme: g.ThemeOptions.MEDIA_CAPTION,
                  }),
                  o.createElement(p.default.EmojiSuggestions, {
                    chat: this.props.chat,
                    theme: u.ThemeOptions.MEDIA_CAPTION,
                  })
                )
              ),
              o.createElement(
                "div",
                {
                  className: (0, n.default)(m.default.wrapper, {
                    [m.default.textActive]: this.state.active,
                  }),
                },
                o.createElement(p.default, {
                  ref: this.setRefInput,
                  initialValue: this.props.value,
                  initialSelection: this.selection,
                  readOnly: !1,
                  spellCheck: this.props.spellCheck,
                  multiline: this.props.multiline,
                  maxLength: this.props.maxLength,
                  onEnter: this.props.onEnter,
                  onMaxPasteExceeded: this.onMaxPasteExceeded,
                  onFiles: this.props.onFiles,
                  onChange: this.props.onChange,
                  onSelect: this.onSelectionChange,
                  theme: "media-caption",
                }),
                o.createElement(
                  "div",
                  { className: m.default.inputControls },
                  o.createElement(
                    E.default,
                    {
                      transitionName: "pop",
                      component: "div",
                      className: m.default.buttonContainer,
                    },
                    e,
                    l
                  ),
                  d
                )
              ),
              s
            )
          );
        }
      }
      (t.default = _), (_.defaultProps = { maxLength: 25 });
    },
    ciceejahaj: function (e, t) {
      e.exports = {
        price: "_3aL0c",
        actionsContainer: "_202pA",
        cartListItem: "_2ER5G",
      };
    },
    cjcbgcihaj: function (e, t) {
      e.exports = {
        carousel: "_17oJo",
        contentContainer: "_2T8ev",
        slidesContainer: "_1f_-i",
        loaded: "_4is_H",
        fadeIn: "hFsU6",
        spinnerContainer: "_12xi3",
        spinner: "_2-hsG",
      };
    },
    cjdgafagge: function (e, t, a) {
      "use strict";
      var r = a("bfejgijfbh"),
        i = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = i(a("ceffhbhahb")),
        o = r(a("ddhijeejag")),
        l = i(a("ccbgfecegc")),
        c = a("ddbdgibbbi"),
        s = i(a("bhddedjfaf")),
        d = i(a("ecgccifibc")),
        u = a("ecceajhjba"),
        f = i(a("ehghbacbd")),
        h = i(a("bfgbdiffgd")),
        p = i(a("dcdbbhicce")),
        m = a("cjfegjecaj");
      class g extends o.Component {
        constructor(...e) {
          super(...e),
            (this.onClick = (e, t) => {
              var a,
                { product: r, sessionId: i } = this.props;
              (null === (a = (0, c.getMaybeMeUser)()) || void 0 === a
                ? void 0
                : a.equals(r.catalogWid)) ||
                (0, u.logDetailImageClick)((0, m.unproxy)(r), i);
              var n = {
                activeProductImage: t,
                productImageCollection: r.productImageCollection,
                getZoomNode: () => e,
                product: r,
              };
              l.default.productImageViewerModal(n, i);
            });
        }
        render() {
          var {
              product: e,
              shouldShrinkUp: t,
              isAvailable: a,
              fetching: r,
            } = this.props,
            i = e.productImageCollection.toArray(),
            l = h.default.catalogPdpNewDesign;
          return o.createElement(
            "div",
            {
              className: (0, n.default)({
                [f.default.imageCarouselContainer]: l,
                [f.default.container]: 1 === i.length && !l,
                [f.default.gridContainer]: i.length > 1 && !l,
                [f.default.shrinkUp]: i.length > 1 && t && !l,
              }),
            },
            l
              ? o.createElement(s.default, {
                  images: i,
                  fetching: r,
                  onClick: a ? this.onClick : null,
                  renderFallback: !a,
                  fallbackMediaData: e.productMsgMediaData,
                })
              : o.createElement(d.default, {
                  columns: 2,
                  lastColumnNumRows: 2,
                  imageModels: i,
                  numberTextClassName: f.default.numberText,
                  onClick: a ? this.onClick : null,
                  lastColumnClassName:
                    i.length > 1 ? f.default.lastColumn : void 0,
                  renderFallbackImage: !a,
                  productMsgMediaData: e.productMsgMediaData,
                  fetching: r,
                })
          );
        }
      }
      g.CONCERNS = {
        product: [
          "productImageCollection",
          "productMsgMediaData",
          "catalogWid",
          "imageCdnUrl",
        ],
      };
      var b = (0, p.default)(g, g.CONCERNS);
      t.default = b;
    },
    cjjbjffaga: function (e, t) {
      e.exports = {
        slide: "_24Qxt",
        slideInnerContainer: "_2z8Lb",
        image: "_1ch_d",
      };
    },
    daaejhfihg: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function ({ id: e, href: t, onClick: a, noHandle: r }) {
          return n.createElement(
            "span",
            { className: o.default.linkContainer },
            n.createElement(
              l.SelectableLink,
              {
                id: e,
                href: t,
                className: o.default.activeLink,
                selectable: !0,
                onClick: a,
                "data-nohandle": r,
              },
              t
            )
          );
        });
      var n = i(a("ddhijeejag")),
        o = r(a("ddbdaccaeh")),
        l = a("cbhhehcjbb");
    },
    dadjdgeaif: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return n.createElement(c.default, {
            name: "delete",
            title: l.default.t(1037),
            className: o.default.deleteIcon,
            onClick: e.onClick,
          });
        });
      var n = i(a("ddhijeejag")),
        o = r(a("diegbedhjf")),
        l = r(a("bdjjabfecc")),
        c = r(a("dgdcjccfdi"));
    },
    dbihaeaggd: function (e, t, a) {
      "use strict";
      var r = a("bfejgijfbh"),
        i = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.TextInputCustomStyleThemes = void 0);
      var n = i(a("ceffhbhahb")),
        o = r(a("ddhijeejag")),
        l = a("jagjbhcgf"),
        c = i(a("cbdcjfiefg")),
        s = i(a("bjjdjibgad")),
        d = a("dbbhijehii"),
        u = r(a("gfebgebbi")),
        f = a("dhegcfddhg"),
        h = i(a("dhfbfehaef")),
        p = i(a("chgaccicf")),
        m = i(a("bdjjabfecc")),
        g = i(a("ecdebjcgfa")),
        b = i(a("dgdcjccfdi")),
        j = i(a("bjgcbbjaij")),
        v = i(a("cgjdibiahi")),
        C = i(a("dfciadajdf")),
        E = a("bficeagfg"),
        _ = i(a("didfdhbecg")),
        S = (0, p.default)({ groupInfoName: null, desaturated: null });
      t.TextInputCustomStyleThemes = S;
      class k extends o.Component {
        constructor(...e) {
          super(...e),
            (this.state = {
              active: !1,
              locked: !!this.props.lockable,
              emojiPicker: null,
            }),
            (this.emojiInputComponent = (0, c.default)()),
            (this.isSkinTonePickerOpen = !1),
            (this.onEmojiPicker = (e) => {
              e && (e.preventDefault(), e.stopPropagation());
              var t = o.createElement(s.default, {
                onEmoji: this.onEmoji,
                onFocusNext: this.restoreFocus,
                onFocusPrev: this.restoreFocus,
              });
              this.setState({
                emojiPicker: {
                  menu: t,
                  dirY: l.DirY.TOP,
                  type: "emoji_picker",
                  anchor: e.target,
                },
              }),
                this.restoreFocus();
            }),
            (this.onEmojiPickerClose = () => {
              this.setState({ emojiPicker: null });
            }),
            (this.onRestoreEmojiPickerFocus = () => {
              if (this.refEmojiPickerUIE) {
                var e = this.refEmojiPickerUIE.getRef();
                if (e) {
                  var t = e.getElement();
                  t && t.restoreFocus();
                }
              }
            }),
            (this.onEmoji = (e) => {
              this.inputLine && this.inputLine.replaceSelection(e);
            }),
            (this.onEnter = (e) => {
              this.props.lockable && this.onSaveAndLock(),
                this.props.onEnter &&
                  !this.props.multiline &&
                  (e.persist(), this.props.onEnter(e));
            }),
            (this.onChange = (e) => {
              this.props.onChange && this.props.onChange(e);
            }),
            (this.restoreFocus = () => {
              this.inputLine && this.inputLine.focus();
            }),
            (this.onBlur = (e) => {
              this.isSkinTonePickerOpen ||
                (this.state.active && this.setState({ active: !1 }),
                this.props.onBlur && this.props.onBlur(e));
            }),
            (this.onFocus = (e) => {
              e.stopPropagation(),
                this.state.active || this.setState({ active: !0 }),
                this.props.onFocus && this.props.onFocus(e);
            }),
            (this.onSkinTonePicker = (e) => {
              this.isSkinTonePickerOpen = e;
            }),
            (this.onUnlock = () => {
              this.props.onBeginEdit && this.props.onBeginEdit(),
                this.setState({ locked: !1 });
            }),
            (this.onSaveAndLock = () => {
              var e = !(!this.props.lowProfile && this.props.error);
              this.props.validate &&
                e &&
                (e = this.props.validate(this.props.value)),
                e
                  ? (this.props.onSave && this.props.onSave(),
                    this.setState({ locked: !0 }))
                  : this.props.onError && this.props.onError();
            }),
            (this.onCancel = () => {
              this.props.onCancel && this.props.onCancel(),
                this.setState({ locked: !0 });
            }),
            (this.setRefEmojiPickerUIE = (e) => {
              this.refEmojiPickerUIE = e;
            }),
            (this.showEmptyValuePlaceholder = () => {
              var { value: e } = this.props;
              return (
                (!e || "" === e) &&
                this.props.emptyValuePlaceholder &&
                this.state.locked
              );
            }),
            (this.isEditing = () => this.props.editable && !this.state.locked),
            (this.renderEmojiText = () => {
              var { renderEmojiTextInLockMode: e, value: t } = this.props;
              if (e && t) {
                var {
                  textLimit: a,
                  readMoreText: r,
                  onReadMore: i,
                  formatters: n,
                } = e;
                return o.createElement(
                  "div",
                  { className: j.default.emojiText },
                  o.createElement(u.default, {
                    text: t,
                    selectable: !0,
                    emojiSize: u.EMOJI_SIZE.SMALL,
                    textLimit: a,
                    formatters: n,
                  }),
                  (0, E.numCodepoints)(t) > a &&
                    o.createElement(
                      "span",
                      { className: j.default.more, role: "button", onClick: i },
                      " ".concat(r)
                    )
                );
              }
            });
        }
        componentDidMount() {
          this.props.focusOnMount && this.restoreFocus();
        }
        componentDidUpdate(e, t) {
          t.locked || !e.editable || this.props.editable || this.onCancel(),
            !this.inputLine ||
              (this.isEditing() && !this.props.managed) ||
              this.inputLine.value === this.props.value ||
              this.inputLine.reset(this.props.value || "");
        }
        render() {
          var e,
            t,
            a = this.props.maxLength || k.defaultProps.maxLength,
            r = this.isEditing(),
            i = r && !!this.props.error && !this.props.lowProfile,
            { customStyleThemes: l = [] } = this.props,
            c = {
              container: (0, n.default)(
                j.default.textInput,
                l && l.map((e) => j.default[e]),
                {
                  [j.default.noPlaceholder]: !this.props.placeholder,
                  [j.default.invite]: "v4-invite-caption" === this.props.theme,
                  [j.default.active]: r,
                  [j.default.small]: "small" === this.props.theme,
                  [j.default.inputLarge]: "large" === this.props.theme,
                }
              ),
              label: (0, n.default)(j.default.labelText, {
                [j.default.float]: !!this.props.value,
                [j.default.hideFloatingLabel]: !!this.props.hideFloatingLabel,
              }),
              inputWrapper: (0, n.default)(j.default.wrapper, {
                [j.default.textError]: i,
                [j.default.invite]: "v4-invite-caption" === this.props.theme,
                [j.default.textActive]: this.state.active,
                [j.default.locked]: this.state.locked,
              }),
              infoWrapper: (0, n.default)(j.default.infoStrip, {
                [j.default.textError]: i,
                [j.default.textActive]: this.state.active,
              }),
            };
          this.props.lockable &&
            (this.props.pending
              ? (t = o.createElement(
                  "div",
                  {
                    className: (0, n.default)(
                      j.default.iconSpinner,
                      j.default.iconMain
                    ),
                    key: "spinner",
                  },
                  o.createElement(g.default, {
                    size: 18,
                    stroke: 6,
                    color: "highlight",
                  })
                ))
              : this.state.locked
              ? this.props.editable
                ? (t = o.createElement(
                    "div",
                    {
                      className: j.default.iconMain,
                      onClick: this.onUnlock,
                      key: "btn-edit",
                      title: m.default.t(491),
                    },
                    o.createElement(b.default, {
                      name: "pencil",
                      directional: !0,
                    })
                  ))
                : this.props.editRestrictionInfo &&
                  !this.props.editable &&
                  (t = o.createElement(
                    "div",
                    {
                      className: j.default.iconMain,
                      onClick: this.props.editRestrictionInfo,
                      key: "btn-info",
                    },
                    o.createElement(b.default, { name: "info" })
                  ))
              : (t = o.createElement(
                  "div",
                  {
                    className: j.default.iconMain,
                    onClick: this.onSaveAndLock,
                    key: "btn-done",
                    title: m.default.t(411),
                  },
                  o.createElement(b.default, { name: "checkmark" })
                )),
            (e = this.props.lockable
              ? o.createElement(
                  _.default,
                  {
                    className: j.default.iconMainContainer,
                    transitionName: "pop",
                  },
                  t
                )
              : null));
          var s,
            u =
              r && this.props.supportsEmoji
                ? o.createElement(
                    "div",
                    {
                      className: (0, n.default)(j.default.emojiBtn),
                      onClick: this.onEmojiPicker,
                      key: "emoji-btn",
                    },
                    o.createElement(b.default, { name: "emoji-input" })
                  )
                : null;
          if (this.props.showRemaining) {
            var p = (0, E.numCodepoints)(this.props.value || "");
            s =
              a - p < 50 && r
                ? o.createElement(
                    "div",
                    {
                      className: (0, n.default)(j.default.charCounter),
                      key: "counter",
                    },
                    m.default.n(a - p)
                  )
                : null;
          }
          var S,
            P,
            N =
              this.props.supportsEmoji || this.props.showRemaining
                ? o.createElement(
                    _.default,
                    {
                      className: j.default.iconsEditContainer,
                      transitionName: "pop",
                    },
                    s,
                    u
                  )
                : null,
            I = this.props.lowProfile
              ? null
              : o.createElement(
                  "div",
                  { className: c.infoWrapper },
                  o.createElement(
                    "div",
                    { className: j.default.errorText },
                    i ? this.props.error : null
                  )
                );
          this.props.lockable && !this.state.locked
            ? (this.state.emojiPicker &&
                (P = o.createElement(
                  v.default,
                  {
                    displayName: "EmojiPicker",
                    escapable: !0,
                    popable: !0,
                    ref: this.setRefEmojiPickerUIE,
                    requestDismiss: this.onEmojiPickerClose,
                    requestFocus: this.onRestoreEmojiPickerFocus,
                  },
                  o.createElement(C.default, {
                    contextMenu: this.state.emojiPicker,
                  })
                )),
              (S = o.createElement(
                v.default,
                {
                  displayName: "TextInput",
                  escapable: !0,
                  requestFocus: this.restoreFocus,
                  requestDismiss: this.onCancel,
                },
                o.createElement("div", null, P)
              )))
            : !this.props.lockable &&
              this.state.emojiPicker &&
              (S = o.createElement(
                v.default,
                {
                  displayName: "EmojiPicker",
                  escapable: !0,
                  popable: !0,
                  ref: this.setRefEmojiPickerUIE,
                  requestDismiss: this.onEmojiPickerClose,
                  requestFocus: this.onRestoreEmojiPickerFocus,
                },
                o.createElement(C.default, {
                  contextMenu: this.state.emojiPicker,
                })
              ));
          var y,
            T,
            M = this.props.editable && !this.state.locked,
            {
              emptyValuePlaceholder: R,
              renderEmojiTextInLockMode: D,
            } = this.props,
            x = this.emojiInputComponent,
            L = M || !D,
            O = L
              ? o.createElement(x, {
                  a8n: this.props.a8n,
                  ref: (0, f.GetRef)("inputLine", this),
                  initialValue: this.props.value,
                  theme: this.props.theme || "default",
                  multiline: this.props.multiline,
                  onChange: this.onChange,
                  onFocus: this.onFocus,
                  onBlur: this.onBlur,
                  onEnter: this.onEnter,
                  onFiles: this.props.onFiles,
                  spellCheck: this.props.spellCheck,
                  maxLength: this.props.maxLength,
                  readOnly: !M,
                })
              : this.renderEmojiText();
          return (
            this.props.placeholder &&
              ((y =
                (!this.props.value || !this.props.hideFloatingLabel) &&
                o.createElement(
                  "span",
                  { className: c.label },
                  this.props.placeholder
                )),
              (T = o.createElement("div", { className: j.default.spacer }))),
            o.createElement(
              h.default,
              { className: c.container, onFocus: this.restoreFocus },
              y,
              T,
              o.createElement(
                "div",
                { className: c.inputWrapper },
                O,
                this.showEmptyValuePlaceholder() &&
                  o.createElement(
                    "div",
                    { className: j.default.emptyValPlaceholder },
                    R
                  ),
                N,
                e
              ),
              L &&
                o.createElement(x.EmojiSuggestions, {
                  theme: d.ThemeOptions.EMOJI_INPUT,
                  onSkinTonePicker: this.onSkinTonePicker,
                }),
              I,
              S
            )
          );
        }
      }
      (t.default = k), (k.defaultProps = { maxLength: 25, editable: !0 });
    },
    dbijiicabc: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = i(a("ddhijeejag")),
        o = r(a("djedbadjhc")),
        l = r(a("biejajcgdf")),
        c = r(a("cagaiadjai")),
        s = r(a("hgigjbgie")),
        d = i(a("bjgiedaj")),
        u = r(a("ddeefhbafc")),
        f = r(a("gfebgebbi")),
        h = a("djaiggcdb"),
        p = a("gaifbabbj"),
        m = r(a("bdjjabfecc")),
        g = i(a("dbcedfihd")),
        b = a("ecceajhjba"),
        j = r(a("chgjjahcff")),
        v = r(a("bfgbdiffgd")),
        C = r(a("dcdbbhicce")),
        E = a("cjfegjecaj"),
        _ = a("dhhjhedjij");
      class S extends n.Component {
        constructor(e) {
          super(e),
            (this.onAddToCart = (e) => {
              var { product: t, onCartOpen: a } = this.props;
              null != a && ((0, o.default)(t, a), e.stopPropagation());
            }),
            (this.onReadMore = () => {
              this.setState({ isDescExpanded: !0 });
            }),
            (this.onClickUrl = (e, t) => {
              e.stopPropagation();
              var { product: a, sessionId: r } = this.props;
              (0, b.logDetailLinkClick)((0, E.unproxy)(a), r);
              var i = t && g.findLink(t);
              i && (0, h.openExternalLink)(i.url);
            }),
            (this.state = { isDescExpanded: !1 });
        }
        renderMessageBusinessButton() {
          var { onSendChat: e, product: t, isAvailable: a } = this.props;
          if (!t.fetchedFromServer || !a) return null;
          var r = m.default.t(1034);
          return n.createElement(
            "div",
            { className: j.default.buttonContainer, title: r },
            n.createElement(c.default, { onClick: e, type: "primary" }, r)
          );
        }
        renderAddToCartButton() {
          var { product: e, isAvailable: t } = this.props;
          if (!e.fetchedFromServer || !t || !v.default.webCatalogCart)
            return null;
          var a = m.default.t(1023);
          return n.createElement(
            "div",
            { className: j.default.buttonContainer, title: a },
            n.createElement(
              c.default,
              {
                onClick: this.onAddToCart,
                className: j.default.addToCartButton,
                type: "plain",
              },
              n.createElement(
                "span",
                { className: j.default.addToCartContainer },
                n.createElement(l.default, {
                  className: j.default.addToCartIcon,
                }),
                a
              )
            )
          );
        }
        renderLink(e) {
          var { product: t, isAvailable: a } = this.props;
          if (!t.fetchedFromServer || !e || !a) return null;
          var r = p.Configuration.TrustedGroupDesc({ links: g.findLinks(e) });
          return n.createElement(
            "div",
            { className: j.default.descBlock },
            n.createElement(f.default, {
              selectable: !0,
              formatters: r,
              text: e,
              onClick: (t) => this.onClickUrl(t, e),
            })
          );
        }
        renderDesc() {
          var { product: e } = this.props,
            { isDescExpanded: t } = this.state;
          if (!e.description && !e.url && !e.retailerId) return null;
          var a,
            r =
              !(!e || !e.description) &&
              e.description.length >
                s.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH;
          return (
            e.description &&
              (a = n.createElement(
                "div",
                { className: j.default.descBlock },
                n.createElement(f.default, {
                  selectable: !0,
                  multiline: !0,
                  text: e.description,
                  textLimit: t
                    ? 1 / 0
                    : s.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                }),
                r && !t
                  ? n.createElement(
                      "span",
                      {
                        className: j.default.more,
                        role: "button",
                        onClick: this.onReadMore,
                      },
                      " ".concat(m.default.t(1072))
                    )
                  : null
              )),
            n.createElement(
              _.TextDiv,
              { theme: "plain", className: j.default.description },
              a,
              this.renderLink(e.url),
              e.retailerId
                ? n.createElement(
                    "div",
                    { className: j.default.descBlock },
                    n.createElement(f.default, {
                      text: e.retailerId,
                      selectable: !0,
                      direction: "inherit",
                    })
                  )
                : null
            )
          );
        }
        render() {
          var { product: e } = this.props;
          return n.createElement(
            u.default,
            { theme: "padding-product", animation: !1 },
            n.createElement(
              _.TextDiv,
              { theme: "title", className: j.default.name },
              n.createElement(f.default, { text: e.name, selectable: !0 })
            ),
            e.currency && null != e.priceAmount1000 && 0 !== e.priceAmount1000
              ? n.createElement(
                  _.TextDiv,
                  { className: j.default.price, color: "dark", theme: "plain" },
                  n.createElement(f.default, {
                    text: d.format(e.currency, e.priceAmount1000),
                    selectable: !0,
                    direction: "inherit",
                  })
                )
              : null,
            this.renderDesc(),
            this.renderMessageBusinessButton(),
            this.renderAddToCartButton()
          );
        }
      }
      S.CONCERNS = {
        product: [
          "name",
          "url",
          "description",
          "currency",
          "priceAmount1000",
          "fetchedFromServer",
          "retailerId",
          "catalogWid",
          "imageCdnUrl",
          "id",
        ],
      };
      var k = (0, C.default)(S, S.CONCERNS);
      t.default = k;
    },
    dcbcigbda: function (e, t, a) {
      "use strict";
      var r = a("bfejgijfbh"),
        i = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = i(a("ceffhbhahb")),
        o = r(a("ddhijeejag")),
        l = i(a("cefccdiabc")),
        c = i(a("ccbgfecegc")),
        s = i(a("hhcjfgifh")),
        d = i(a("gfebgebbi")),
        u = i(a("bhbcdbjdeg")),
        f = i(a("bdjjabfecc")),
        h = a("cadfgefaja"),
        p = i(a("difhgjjfcb")),
        m = i(a("dhagfeibfb")),
        g = i(a("dcdbbhicce")),
        b = i(a("dgdcjccfdi")),
        j = i(a("cgjdibiahi")),
        v = i(a("bcifhbgija"));
      class C extends o.Component {
        constructor(...e) {
          super(...e),
            (this.state = { style: { visibility: "hidden" } }),
            (this.onScroll = (e) => {
              Math.abs(e.deltaY) > 3 && this.onClose();
            }),
            (this.onClose = () => {
              if (!this.closing) {
                var e;
                if (
                  ((this.closing = !0),
                  this.props.getZoomNode((t) => {
                    e = t;
                  }),
                  !e)
                )
                  return c.default.closeModalMedia();
                var t = this.refImage;
                if (t) {
                  this.props.animateBorderRadius &&
                    ((t.style.transition = "border-radius ".concat(
                      500,
                      "ms cubic-bezier(.1,.82,.25,1)"
                    )),
                    (t.style.borderRadius = "50%"));
                  var a = t.getBoundingClientRect(),
                    r = e.getBoundingClientRect(),
                    i = r.top - a.top,
                    n = r.left - a.left,
                    o = e.clientWidth / t.clientWidth;
                  (0, v.default)(
                    t,
                    { translateX: [n, 0], translateY: [i, 0], scale: [o, 1] },
                    { duration: 200, easing: [0.1, 0.82, 0.25, 1] }
                  ).then(() => {
                    c.default.closeModalMedia();
                  });
                }
              }
            }),
            (this.onImageLoad = (e) => {
              var t = e.target;
              this.setState(
                { size: { width: t.naturalWidth, height: t.naturalHeight } },
                () => {
                  this.props.getZoomNode((e) => {
                    var a = t.getBoundingClientRect(),
                      r = e.getBoundingClientRect(),
                      i = r.top - a.top,
                      n = r.left - a.left,
                      o = e.clientWidth / t.clientWidth,
                      l = {
                        visibility: "hidden",
                        transform: "translateX("
                          .concat(n, "px) translateY(")
                          .concat(i, "px) scale(")
                          .concat(o, ")"),
                        transition: "transform 0s",
                        borderRadius: void 0,
                      };
                    this.props.animateBorderRadius && (l.borderRadius = "50%"),
                      this.setState({ style: l }, () => {
                        var e = {
                          transform: "translateX(0px) translateY(0px) scale(1)",
                          transition: "transform ".concat(
                            500,
                            "ms cubic-bezier(.1,.82,.25,1)"
                          ),
                        };
                        this.props.animateBorderRadius &&
                          (e = {
                            transform:
                              "translateX(0px) translateY(0px) scale(1)",
                            borderRadius: "0%",
                            transition: "transform "
                              .concat(
                                500,
                                "ms cubic-bezier(.1,.82,.25,1),\n                                         border-radius "
                              )
                              .concat(500, "ms cubic-bezier(.1,.82,.25,1)"),
                          }),
                          this.setState({ style: e });
                      });
                  });
                }
              );
            }),
            (this.setRefImage = (e) => {
              this.refImage = e;
            });
        }
        shouldComponentUpdate(e) {
          return !!e.profilePicThumb.imgFull || (this.onClose(), !1);
        }
        render() {
          var e,
            { contact: t, profilePicThumb: a } = this.props;
          return (
            a.imgFull &&
              (e = o.createElement(u.default, {
                src: a.imgFull,
                hasPrivacyChecks: !0,
                onLoad: this.onImageLoad,
                className: m.default.profileViewerImg,
              })),
            o.createElement(
              j.default,
              {
                displayName: "PhotoViewer",
                escapable: !0,
                requestDismiss: this.onClose,
              },
              o.createElement(
                "div",
                {
                  className: (0, n.default)("overlay", m.default.container),
                  onWheel: this.onScroll,
                  onClick: this.onClose,
                },
                o.createElement(
                  "div",
                  { className: m.default.headerContainer },
                  o.createElement(
                    "div",
                    { className: m.default.profileThumb },
                    o.createElement(l.default, {
                      image: o.createElement(s.default, { id: t.id, size: 40 }),
                      theme: "plain",
                      primary: o.createElement(d.default, {
                        text: t.formattedUser,
                      }),
                    })
                  ),
                  o.createElement(
                    "div",
                    { className: m.default.mediaPanelTools },
                    o.createElement(
                      h.MenuBar,
                      { key: "media-panel-header", theme: "strong" },
                      o.createElement(h.MenuBarItem, {
                        a8nText: "btn-close",
                        icon: o.createElement(b.default, { name: "x-viewer" }),
                        title: f.default.t(1426),
                        onClick: this.onClose,
                      })
                    )
                  )
                ),
                o.createElement(
                  "div",
                  { className: m.default.profileContainer, dir: "ltr" },
                  o.createElement(
                    "div",
                    { className: m.default.media },
                    o.createElement(
                      p.default,
                      { type: "scaleDown", size: this.state.size },
                      o.createElement(
                        "div",
                        {
                          className: m.default.profileViewer,
                          "data-animate-profile-viewer": !0,
                          ref: this.setRefImage,
                          style: this.state.style,
                        },
                        e
                      )
                    )
                  )
                )
              )
            )
          );
        }
      }
      C.CONCERNS = {
        contact: ["formattedUser", "id"],
        profilePicThumb: ["imgFull"],
      };
      var E = (0, g.default)(C, C.CONCERNS);
      t.default = E;
    },
    dcbgjijbcc: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = i(a("ddhijeejag")),
        o = a("hhcjfgifh"),
        l = r(a("gfebgebbi")),
        c = r(a("gjbhafcjg")),
        s = r(a("cbdhjigcdb")),
        d = r(a("dcdbbhicce")),
        u = a("dhhjhedjij");
      class f extends n.Component {
        renderDescription() {
          var { businessProfile: e } = this.props;
          return e && e.description
            ? n.createElement(
                "div",
                { className: s.default.description },
                n.createElement(l.default, {
                  text: e.description,
                  direction: "auto",
                  selectable: !0,
                  titlify: !0,
                })
              )
            : null;
        }
        renderPicture() {
          var { profilePicThumb: e, contact: t } = this.props;
          if (!e) return null;
          var a = (0, o.getDefaultIcon)(t.id);
          return n.createElement(
            "div",
            { className: s.default.photo },
            n.createElement(o.DetailImageCommon, {
              profilePicThumb: e,
              loader: !0,
              defaultIcon: a,
              profilePicThumbImg: e.imgFull,
              spinnerClassName: s.default.spinner,
              imgClassName: s.default.img,
              theme: "business",
            })
          );
        }
        render() {
          var { contact: e } = this.props;
          return n.createElement(
            "div",
            { className: s.default.header },
            this.renderPicture(),
            n.createElement(
              "div",
              { className: s.default.text },
              n.createElement(
                u.TextDiv,
                { className: s.default.name, theme: "large" },
                n.createElement(c.default, {
                  contact: e,
                  selectable: !0,
                  useVerifiedName: !0,
                })
              ),
              this.renderDescription()
            )
          );
        }
      }
      f.CONCERNS = {
        profilePicThumb: ["imgFull"],
        contact: ["id", "isMe"],
        businessProfile: ["description"],
      };
      var h = (0, d.default)(f, f.CONCERNS);
      t.default = h;
    },
    dcdcafjece: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = i(a("ddhijeejag")),
        o = r(a("hgigjbgie")),
        l = r(a("bgheieccaj")),
        c = r(a("bfchfhibba")),
        s = a("ddbdgibbbi"),
        d = a("ecceajhjba"),
        u = r(a("bbebhbifga")),
        f = a("cjcghajbag"),
        h = r(a("dcdbbhicce")),
        p = a("cjfegjecaj");
      class m extends n.Component {
        constructor(...e) {
          super(...e),
            (this.onProductDetail = (e) => {
              var t,
                { catalog: a, onProductDetail: r, sessionId: i } = this.props;
              return (
                (null === (t = (0, s.getMaybeMeUser)()) || void 0 === t
                  ? void 0
                  : t.equals(a.id)) ||
                  (0, d.logCatalogListDetailClick)((0, p.unproxy)(e), i),
                r(e, i)
              );
            }),
            (this.onProductShare = (e, t) => {
              e.stopPropagation();
              var { onProductShare: a, sessionId: r } = this.props;
              a && a(t, r);
            }),
            (this.renderItem = (e) => {
              var { product: t } = e,
                { sessionId: a, onCartOpen: r, shareLinks: i } = this.props;
              return n.createElement(u.default, {
                product: t,
                sessionId: a,
                onCartOpen: r,
                onClick: () => this.onProductDetail(t),
                onProductShare: i ? this.onProductShare : null,
              });
            });
        }
        getData() {
          var { catalog: e } = this.props;
          return e.productCollection
            .getProductModels(this.getStatuses())
            .map((e) => ({ itemKey: e.id.toString(), product: e }));
        }
        getStatuses() {
          var { showPendingAndRejected: e } = this.props;
          return e
            ? [
                f.PRODUCT_REVIEW_STATUS.OUTDATED,
                f.PRODUCT_REVIEW_STATUS.NO_REVIEW,
                f.PRODUCT_REVIEW_STATUS.APPROVED,
                f.PRODUCT_REVIEW_STATUS.REJECTED,
                f.PRODUCT_REVIEW_STATUS.PENDING,
              ]
            : [f.PRODUCT_REVIEW_STATUS.APPROVED];
        }
        render() {
          var { catalog: e } = this.props;
          return e.productCollection &&
            e.productCollection.getProductModels(this.getStatuses()).length
            ? n.createElement(
                c.default,
                { flatListControllers: [this.props.flatListController] },
                n.createElement(l.default, {
                  flatListController: this.props.flatListController,
                  direction: "vertical",
                  forceConsistentRenderCount: !1,
                  data: this.getData(),
                  renderItem: this.renderItem,
                  defaultItemHeight: o.default.PRODUCT_LIST_ITEM_HEIGHT,
                  itemEnterAnimationsEnabled: !0,
                })
              )
            : null;
        }
      }
      m.CONCERNS = {
        catalog: ["productCollection", "afterCursor", "id", "index"],
      };
      var g = (0, h.default)(m, m.CONCERNS);
      t.default = g;
    },
    dcdcffcgdj: function (e, t, a) {
      "use strict";
      var r = a("bfejgijfbh"),
        i = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = i(a("dfadhaifh")),
        o = r(a("ddhijeejag")),
        l = a("dheeaichcj"),
        c = i(a("ccbgfecegc")),
        s = i(a("bdeebiagii")),
        d = i(a("bdjjabfecc")),
        u = a("ecceajhjba"),
        f = a("eaibdijehg"),
        h = i(a("ebihidhhdg")),
        p = i(a("cabajjgbjb")),
        m = a("cjfegjecaj");
      function g() {
        var e = (0, n.default)(["error submitting product report"]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      class b extends s.default {
        constructor(...e) {
          super(...e),
            (this.submitReason = (e) => {
              var { product: t, sessionId: a } = this.props;
              return (
                (0, u.logReportProduct)((0, m.unproxy)(t), a),
                (0, f.reportProduct)(t.catalogWid, t.id.toString(), e)
              );
            }),
            (this.onDelete = () => {
              this.end();
            }),
            (this.onReport = (e) => {
              this.onShowSubmittedToast(e);
            }),
            (this.onTellUsMore = () => {
              this.push(
                o.createElement(p.default, {
                  onTellUsMoreSubmit: this.onReport,
                  onCancel: this.onCancel,
                }),
                "none"
              );
            }),
            (this.onPopupCancel = () => {
              this.end();
            }),
            (this.onCancel = () => {
              this.end();
            }),
            (this.onReportSubmitted = () => {
              this.end();
            }),
            (this.onShowSubmittedToast = (e, t = (0, l.genId)()) => {
              var a = this.submitReason(e),
                r = new l.ActionType(d.default.t(1049)),
                i = a
                  .then(
                    () =>
                      new l.ActionType(
                        ""
                          .concat(d.default.t(1048), ". ")
                          .concat(d.default.t(1094))
                      )
                  )
                  .catch(
                    () => (
                      __LOG__(3)(g()),
                      new l.ActionType(
                        d.default.t(1047),
                        d.default.t(1103),
                        () => this.onShowSubmittedToast(e, t)
                      )
                    )
                  );
              return (
                c.default.openToast(
                  o.createElement(l.ActionToast, {
                    id: t,
                    initialAction: r,
                    pendingAction: i,
                  })
                ),
                this.onReportSubmitted(),
                a
              );
            });
        }
        componentDidMount() {
          this.push(
            o.createElement(h.default, {
              onTellUsMore: this.onTellUsMore,
              onReport: this.onReport,
              onPopupCancel: this.onPopupCancel,
              onCancel: this.onCancel,
            })
          );
        }
      }
      t.default = b;
    },
    ddajejfdfc: function (e, t, a) {
      "use strict";
      var r = a("bfejgijfbh"),
        i = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = i(a("ceffhbhahb")),
        o = r(a("ddhijeejag")),
        l = i(a("cefccdiabc")),
        c = i(a("ccbgfecegc")),
        s = i(a("chhdaecjcj")),
        d = i(a("dahagdijgh")),
        u = i(a("bjheffjbgd")),
        f = r(a("bjjhgjdbhd")),
        h = i(a("gfebgebbi")),
        p = a("ddbdgibbbi"),
        m = i(a("bdjjabfecc")),
        g = i(a("daaejhfihg")),
        b = a("ecceajhjba"),
        j = i(a("beifadgccg")),
        v = r(a("dchhjffcdj")),
        C = i(a("ddjgdbbihc")),
        E = i(a("ecdfhfiied")),
        _ = i(a("cbhhjfihbc")),
        S = a("cachecbicf"),
        k = a("cjfegjecaj");
      function P(e) {
        var t = e.productImageCollection.head();
        return t
          ? o.createElement(v.default, {
              className: (0, n.default)(
                j.default.productImage,
                j.default.productImageContainer
              ),
              mediaData: t.mediaData,
            })
          : o.createElement(v.ProductThumbPlaceholder, {
              className: (0, n.default)(
                j.default.productThumb,
                j.default.productThumbContainer
              ),
            });
      }
      class N extends o.Component {
        constructor(...e) {
          super(...e),
            (this._handleProductLinkClick = (e) => {
              e.preventDefault(), this._handleSendProductLinkClick();
            }),
            (this._handleSendProductLinkClick = () => {
              var { product: e, sessionId: t, onSend: a } = this.props;
              c.default.openModal(
                o.createElement(_.default, { product: e, onSend: a }),
                { transition: "modal-flow" }
              ),
                e.catalogWid.equals((0, p.getMaybeMeUser)()) &&
                  (0, b.logShareProductViaWALinkClick)(e, t);
            }),
            (this._handleCopyLinkClick = () => {
              var { product: e, sessionId: t } = this.props;
              e.catalogWid.equals((0, p.getMaybeMeUser)()) &&
                (0, b.logShareProductCopyLinkClick)(e, t);
            }),
            (this._handleSendProduct = () => {
              var { product: e, onSend: t } = this.props;
              c.default.attachProduct({
                product: (0, k.unproxy)(e),
                onSend: t,
              });
            });
        }
        render() {
          var e,
            t,
            a,
            {
              onBack: r,
              onCancel: i,
              product: n,
              prompt: c,
              centerDrawer: p,
              sendProductMsg: b,
            } = this.props,
            v = (0, S.createProductLink)(n.catalogWid.user, n.id.toString());
          return (
            p && ((e = "labels"), (t = "center-column")),
            (a =
              null != b
                ? o.createElement(E.default, {
                    onClick: this._handleSendProduct,
                  })
                : o.createElement(C.default, {
                    onClick: this._handleSendProductLinkClick,
                  })),
            o.createElement(
              d.default,
              { key: "product-link-drawer", theme: e },
              o.createElement(f.default, {
                a8n: "product-link-title",
                title: m.default.t(1033),
                onBack: r,
                onCancel: i,
                type: f.DRAWER_HEADER_TYPE.SMALL,
              }),
              o.createElement(
                u.default,
                { theme: t },
                o.createElement("div", { className: j.default.prompt }, c),
                o.createElement(l.default, {
                  image: P(n),
                  primary: o.createElement(h.default, {
                    text: n.name,
                    direction: "auto",
                  }),
                  theme: "identity",
                  secondary: o.createElement(g.default, {
                    id: "product-link-anchor",
                    href: v,
                    onClick: this._handleProductLinkClick,
                    noHandle: !0,
                  }),
                }),
                a,
                o.createElement(s.default, {
                  elementId: "product-link-anchor",
                  onClick: this._handleCopyLinkClick,
                })
              )
            )
          );
        }
      }
      t.default = N;
    },
    ddbdaccaeh: function (e, t) {
      e.exports = { linkContainer: "_2zAIV", activeLink: "_3Oye7" };
    },
    ddjgdbbihc: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return n.createElement(
            o.default,
            {
              a8nText: "li-share-link",
              icon: n.createElement(s.default, {
                name: "forward",
                className: c.default.icon,
              }),
              onClick: e.onClick,
            },
            l.default.t(1151)
          );
        });
      var n = i(a("ddhijeejag")),
        o = r(a("cciafahdib")),
        l = r(a("bdjjabfecc")),
        c = r(a("ecffjagdje")),
        s = r(a("dgdcjccfdi"));
    },
    deccgghbae: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = i(a("ddhijeejag")),
        o = r(a("dfigdahihj")),
        l = r(a("ddeefhbafc")),
        c = r(a("bdjjabfecc")),
        s = a("ecceajhjba"),
        d = a("cdicaaigga"),
        u = r(a("bdcchebfge")),
        f = r(a("dchhjffcdj")),
        h = a("cjfegjecaj"),
        p = r(a("dgdcjccfdi"));
      class m extends n.Component {
        constructor(...e) {
          super(...e),
            (this.onProductDetail = (e) => {
              var {
                onProductDetail: t,
                sessionId: a,
                entryPoint: r,
              } = this.props;
              r === u.default.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE &&
                (0, s.logProfileProductClick)((0, h.unproxy)(e), a),
                t(e, a);
            });
        }
        componentDidMount() {
          var { entryPoint: e, catalog: t, sessionId: a } = this.props;
          e === u.default.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE &&
            (0, s.logBusinessProfileCatalogView)(t.id.toString(), a);
        }
        render() {
          var {
              catalog: e,
              onProductCatalog: t,
              filterProductId: a,
              title: r,
              animation: i,
              sessionId: s,
            } = this.props,
            u = e.productCollection
              .getProductModels()
              .slice(0, 7)
              .filter((e) => e.id.toString() !== a)
              .map((e) =>
                n.createElement(f.default, {
                  key: e.id.toString(),
                  onClick: () => this.onProductDetail(e),
                  mediaData: e.imageCdnUrl.productImageModel.mediaData,
                })
              )
              .slice(0, 6);
          if (!u.length) return null;
          var h = n.createElement(p.default, {
            className: o.default.chevron,
            name: "chevron-right-alt",
            directional: !0,
          });
          return n.createElement(
            l.default,
            {
              title: r || c.default.t(1025),
              titleOnClick: t.bind(this, s),
              subtitle: h,
              theme: "padding",
              animation: i,
            },
            n.createElement(d.Gallery, {
              productMedias: u,
              mediaCollection: e.productCollection,
            })
          );
        }
      }
      t.default = m;
    },
    deegiebgah: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = i(a("ddhijeejag")),
        o = r(a("eccabeiafh")),
        l = r(a("jagjbhcgf")),
        c = r(a("dgebcfedgb")),
        s = r(a("bdjjabfecc")),
        d = r(a("cddcdgeibi")),
        u = a("cbffieigcd"),
        f = a("cadfgefaja"),
        h = r(a("bfgbdiffgd")),
        p = r(a("dgdcjccfdi")),
        m = a("hjbbdjjdf");
      class g extends n.PureComponent {
        getCartIcon() {
          var { onCartClick: e, cartCount: t, catalogId: a } = this.props;
          if (h.default.webCatalogCart && e && a) {
            var r = (0, m.isNumber)(t) && t > 0 ? t.toString() : void 0,
              i = (0, u.getOnCartClickWithLog)(e);
            return n.createElement(f.MenuBarItem, {
              a8nText: "menu-bar-cart-link",
              icon: n.createElement(o.default, null),
              text: r,
              title: s.default.t(347),
              onClick: i,
            });
          }
          return null;
        }
        render() {
          var {
            onSendProduct: e,
            onReportProduct: t,
            onProductLinkClick: a,
          } = this.props;
          return n.createElement(
            n.Fragment,
            null,
            h.default.productCatalogDeeplink &&
              n.createElement(
                n.Fragment,
                null,
                this.getCartIcon(),
                n.createElement(f.MenuBarItem, {
                  a8nText: "menu-bar-product-link",
                  icon: n.createElement(d.default, null),
                  title: s.default.t(1033),
                  onClick: a,
                })
              ),
            n.createElement(
              f.MenuBarItem,
              {
                a8nText: "menu-bar-menu",
                icon: n.createElement(p.default, { name: "menu" }),
                title: s.default.t(824),
              },
              n.createElement(
                l.default,
                {
                  type: "dropdown_menu",
                  flipOnRTL: !0,
                  key: "ProductDetailHeader",
                  dirX: "LEFT",
                },
                n.createElement(
                  c.default,
                  { a8n: "mi-send menu-item", action: e },
                  s.default.t(1174)
                ),
                n.createElement(
                  c.default,
                  { a8n: "mi-report menu-item", action: t },
                  s.default.t(1091)
                )
              )
            )
          );
        }
      }
      t.default = g;
    },
    dfigdahihj: function (e, t) {
      e.exports = { chevron: "fWcfV" };
    },
    dgcjebcibe: function (e, t, a) {
      "use strict";
      var r = a("bfejgijfbh"),
        i = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = i(a("ceffhbhahb")),
        o = r(a("ddhijeejag")),
        l = a("dhegcfddhg"),
        c = i(a("bfjhbddha")),
        s = i(a("bdjjabfecc")),
        d = i(a("dcjigehfeb")),
        u = i(a("chihecbaj")),
        f = i(a("dcdbbhicce")),
        h = a("dhhjhedjij");
      class p extends o.PureComponent {
        constructor(...e) {
          super(...e),
            (this.hasResolved = !1),
            (this._renderImage = (e) => {
              var { onClick: t } = this.props;
              return e
                ? o.createElement("div", {
                    className: this.getItemClassName(),
                    style: {
                      backgroundImage: "url('".concat(e, "')"),
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      cursor: "".concat(t ? "pointer" : "auto"),
                    },
                    ref: (0, l.GetRef)("image", this),
                    onClick: this._handleClick,
                  })
                : null;
            }),
            (this._renderImagePreview = () => {
              var { mediaData: e } = this.props,
                t = e.preview && e.preview.url();
              return o.createElement(
                "div",
                {
                  className: (0, n.default)(
                    this.getItemClassName(),
                    c.default.loadingImageContainer
                  ),
                },
                t &&
                  o.createElement("div", {
                    className: c.default.loadingImage,
                    style: {
                      backgroundImage: "url('".concat(t, "')"),
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      cursor: "auto",
                    },
                  })
              );
            }),
            (this._handleClick = () => {
              var { onClick: e, imageModel: t } = this.props;
              e && t && e(this.image, t);
            });
        }
        componentDidUpdate() {
          var {
            incrementResolvedCount: e,
            renderFallbackImage: t,
            mediaData: a,
          } = this.props;
          !e ||
            this.hasResolved ||
            t ||
            a.mediaStage !== d.default.STAGE.RESOLVED ||
            (e(), (this.hasResolved = !0));
        }
        getItemClassName() {
          var { className: e } = this.props;
          return (0, n.default)({ [c.default.item]: !e }, e);
        }
        _renderFallbackImage() {
          var { mediaData: e } = this.props;
          return o.createElement(
            u.default,
            { mediaData: e, placeholderRenderer: this._renderImagePreview },
            this._renderImage
          );
        }
        _renderOverlayTile() {
          var {
              numImagesNotRendered: e = 0,
              numberTextClassName: t,
              mediaData: a,
            } = this.props,
            r = t ? { [t]: "string" == typeof t } : null;
          return o.createElement(
            "div",
            {
              className: (0, n.default)(c.default.item, c.default.overlay),
              onClick: this._handleClick,
            },
            this._renderImage(a.renderableUrl),
            e > 0
              ? o.createElement(
                  h.TextSpan,
                  {
                    theme: "large",
                    className: (0, n.default)(c.default.numberText, r),
                  },
                  s.default.t(984, { number: e })
                )
              : null
          );
        }
        render() {
          var {
            mediaData: e,
            renderOverlay: t,
            renderImage: a,
            renderFallbackImage: r,
          } = this.props;
          return r
            ? this._renderFallbackImage()
            : a
            ? e.mediaStage !== d.default.STAGE.RESOLVED
              ? null
              : t
              ? this._renderOverlayTile()
              : this._renderImage(e.renderableUrl)
            : null;
        }
      }
      p.CONCERNS = {
        mediaData: ["mediaStage", "filehash", "preview", "renderableUrl"],
      };
      var m = (0, f.default)(p, p.CONCERNS);
      t.default = m;
    },
    dgidfhbehe: function (e, t) {
      e.exports = {
        container: "_1ZcoY",
        inputContainer: "K_AH2",
        btnContainer: "_1NUmz",
        btnPosition: "_1z_cB",
      };
    },
    dhagfeibfb: function (e, t) {
      e.exports = {
        mediaPanelTools: "_2BsY2",
        profileThumb: "_2eYpU",
        profileContainer: "_2xHYZ",
        media: "_3cF3r",
        profileViewer: "_3iVjW",
        profileViewerImg: "_3zk9D",
        container: "_3pVXd",
        "media-viewer-animate": "_1j60e",
        mediaViewerAnimate: "_1j60e",
        headerContainer: "_2CDVd",
      };
    },
    dhjcdeigfi: function (e, t, a) {
      "use strict";
      var r = a("bfejgijfbh"),
        i = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseErrorState = function (e, t) {
          if (e instanceof l.Unmount);
          else if (e instanceof o.ServerStatusCodeError)
            "not_found" === e.status
              ? t("NOT_FOUND")
              : (t("ERROR"), __LOG__(3)(s()));
          else {
            if (!(e instanceof o.WebdDrop)) throw (t("ERROR"), e);
            t("ERROR"), __LOG__(3)(c());
          }
        });
      var n = i(a("dfadhaifh")),
        o = a("bgihjbde"),
        l = r(a("cajijabhgb"));
      function c() {
        var e = (0, n.default)([
          "parseErrorState:Failed to fetch due to WebdDrop",
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = (0, n.default)(["parseErrorState:Failed to fetch from server"]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
    },
    diegbedhjf: function (e, t) {
      e.exports = { deleteIcon: "_3AQCt" };
    },
    dighgbcbbd: function (e, t, a) {
      "use strict";
      var r = a("bfejgijfbh"),
        i = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = i(a("ffedgcdgj")),
        o = r(a("ddhijeejag")),
        l = a("dfdebdgdei"),
        c = a("dghfbecefg"),
        s = i(a("ccbgfecegc")),
        d = i(a("hgigjbgie")),
        u = i(a("bdeebiagii")),
        f = i(a("bdjjabfecc")),
        h = r(a("chbeahhfcj")),
        p = a("dbbhhgjjbg"),
        m = i(a("bfgbdiffgd")),
        g = i(a("dihidadcee"));
      class b extends u.default {
        constructor(...e) {
          var t;
          super(...e),
            (t = this),
            (this._selected = []),
            (this._getSelected = () => this._selected),
            (this._handleSelectionChange = (e, t, a) => {
              this._selected = a;
            }),
            (this._handleForwardConfirmed = (e) => {
              this._send(e);
            }),
            (this._handleCancel = () => {
              this.end();
            }),
            (this._send = (function () {
              var e = (0, n.default)(function* (e) {
                var { text: a, title: r, onSend: i } = t.props;
                if (1 === e.length) {
                  var n = e[0];
                  yield t._pasteText(n, a),
                    t.end(),
                    window.innerWidth <= d.default.LAYOUT_2COLUMNS_MAX_WIDTH &&
                      s.default.closeDrawerRight();
                } else t.push(o.createElement(g.default, { defaultText: a, title: r || f.default.t(872), onSend: (a, r) => t._handleSend(e, a, r), onBack: t._handleBack }));
                i && i();
              });
              return function () {
                return e.apply(this, arguments);
              };
            })()),
            (this._handleSend = (e, t, a) => {
              this._sendText(e, t, a), this.end();
            }),
            (this._handleBack = () => {
              this.pop();
            }),
            (this._pasteText = (function () {
              var e = (0, n.default)(function* (e, a) {
                yield t._ensureContactUnblocked(e),
                  e.active
                    ? s.default.pasteChatTextInput(e, a)
                    : (e.setComposeContents({ text: a }),
                      s.default.openChatFromUnread(e).then((t) => {
                        t && s.default.focusChatTextInput(e);
                      }));
              });
              return function () {
                return e.apply(this, arguments);
              };
            })()),
            (this._sendText = (e, a, r) => {
              e.forEach(
                (function () {
                  var e = (0, n.default)(function* (e) {
                    yield t._ensureContactUnblocked(e),
                      s.default.once("ui_idle", () => {
                        (0, p.sendTextMsgToChat)(e, a, { linkPreview: r });
                      });
                  });
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()
              );
            }),
            (this._ensureContactUnblocked = (function () {
              var e = (0, n.default)(function* (e) {
                e.isUser &&
                  e.contact.isBlocked() &&
                  (yield (0, l.unblockContact)(e.contact));
              });
              return function () {
                return e.apply(this, arguments);
              };
            })());
        }
        componentDidMount() {
          this.push(
            o.createElement(h.default, {
              title: this.props.title || f.default.t(872),
              listType: h.ListType.CHAT_SELECT_MODAL,
              getInitialItems: this._getSelected,
              maxItems: m.default.multicastLimitGlobal,
              onConfirm: this._handleForwardConfirmed,
              onCancel: this._handleCancel,
              onSelectionChanged: this._handleSelectionChange,
              singleSelectionFooterType: c.FooterType.NEXT,
              multipleSelectionFooterType: c.FooterType.NEXT,
            })
          );
        }
      }
      t.default = b;
    },
    dihidadcee: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = i(a("ddhijeejag")),
        o = r(a("hgigjbgie")),
        l = r(a("dahagdijgh")),
        c = r(a("bjheffjbgd")),
        s = i(a("bjjhgjdbhd")),
        d = r(a("gfebgebbi")),
        u = r(a("dhfbfehaef")),
        f = r(a("bcggadeggg")),
        h = i(a("dgjfidhijd")),
        p = r(a("bgiidadjgb")),
        m = r(a("deffjjfcba")),
        g = r(a("dgdcjccfdi")),
        b = r(a("dbihaeaggd")),
        j = r(a("dgidfhbehe")),
        v = r(a("cgjdibiahi")),
        C = i(a("chcebgfahi")),
        E = (e, t) => {
          var { defaultText: a, title: r, onSend: i, onBack: E } = e,
            [_, S] = n.useState(a),
            k = (0, C.findFirstWebLink)(_),
            { linkPreview: P, clearLinkPreview: N } = (0, C.default)(k),
            I = r
              ? n.createElement(d.default, {
                  text: r,
                  direction: "auto",
                  titlify: !0,
                  ellipsify: !0,
                })
              : null,
            { title: y, canonicalUrl: T, description: M, thumbnail: R } =
              P || {},
            D = P
              ? n.createElement(
                  v.default,
                  {
                    displayName: "ComposeBoxLinkPreview",
                    escapable: !0,
                    requestDismiss: N,
                  },
                  n.createElement(
                    p.default,
                    { onOmit: N },
                    n.createElement(f.default, {
                      title: y,
                      compose: !0,
                      canonicalUrl: T,
                      description: M,
                      thumbnailJpeg: R,
                    })
                  )
                )
              : null;
          return n.createElement(
            h.default,
            { type: h.BoxModalType, ref: t },
            n.createElement(
              l.default,
              null,
              n.createElement(
                s.default,
                { type: s.DRAWER_HEADER_TYPE.POPUP, onBack: E },
                I
              ),
              n.createElement(
                c.default,
                null,
                n.createElement(
                  u.default,
                  { className: j.default.container },
                  n.createElement(
                    "div",
                    { className: j.default.inputContainer },
                    n.createElement(b.default, {
                      a8n: "text-message-modal-text-unput",
                      value: _,
                      maxLength: o.default.MAX_TXT_MSG_SIZE,
                      onChange: (e) => {
                        S(e);
                      },
                      supportsEmoji: !0,
                      multiline: !0,
                      spellCheck: !0,
                      showRemaining: !0,
                      focusOnMount: !0,
                      theme: "small",
                    })
                  ),
                  D
                )
              ),
              n.createElement(
                "div",
                { className: j.default.btnContainer },
                n.createElement(
                  "div",
                  { className: j.default.btnPosition },
                  n.createElement(
                    m.default,
                    {
                      large: !0,
                      onClick: () => {
                        _.length && i(_, P);
                      },
                    },
                    n.createElement(g.default, {
                      name: "send",
                      directional: !0,
                    })
                  )
                )
              )
            )
          );
        },
        _ = n.forwardRef(E);
      t.default = _;
    },
    djahdgcjcj: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return n.createElement(
            "div",
            { className: l.default.select },
            n.createElement(
              "select",
              {
                onClick: function (e) {
                  e.preventDefault(), e.stopPropagation();
                },
                value: e.quantity,
                onChange: function (t) {
                  var a = t.target;
                  a instanceof HTMLSelectElement &&
                    e.onChange(parseInt(a.value, 10));
                },
              },
              (function () {
                for (var e = [], t = 1; t <= o.MAX_QUANTITY; t++)
                  e.push(n.createElement("option", { key: t, value: t }, t));
                return e;
              })()
            )
          );
        });
      var n = i(a("ddhijeejag")),
        o = a("ecghacihc"),
        l = r(a("cdjacgadag"));
    },
    djjcfagidg: function (e, t) {
      e.exports = { buttons: "DKWYl", button: "_3ksB6" };
    },
    ebihidhhdg: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = i(a("ddhijeejag")),
        o = r(a("cagaiadjai")),
        l = r(a("dhfbfehaef")),
        c = r(a("bdjjabfecc")),
        s = r(a("dgjfidhijd")),
        d = r(a("djjcfagidg"));
      class u extends n.Component {
        constructor(...e) {
          super(...e),
            (this.onCancel = () => {
              var { onPopupCancel: e } = this.props;
              e();
            }),
            (this.onReport = () => {
              this.props.onReport();
            }),
            (this.onTellUsMore = () => {
              this.props.onTellUsMore();
            });
        }
        render() {
          var e = c.default.t(1095),
            t = n.createElement(
              "div",
              { key: "ReportProductChoicePopup-desc" },
              c.default.t(1093)
            ),
            a = n.createElement(
              o.default,
              {
                a8nText: "popup-controls-more",
                type: "plain",
                onClick: this.onTellUsMore,
                key: "ReportProductChoicePopup-moreBtn",
              },
              c.default.t(1096)
            ),
            r = n.createElement(
              o.default,
              {
                a8nText: "popup-controls-report",
                type: "plain",
                onClick: this.onReport,
                key: "ReportProductChoicePopup-reportBtn",
              },
              c.default.t(1092)
            ),
            i = n.createElement(
              o.default,
              { type: "plain", onClick: this.onCancel, key: 0 },
              c.default.t(1416)
            ),
            u = { escape: this.onCancel },
            f = n.createElement(
              "div",
              { className: d.default.buttons },
              n.createElement("div", { className: d.default.button }, a),
              n.createElement("div", { className: d.default.button }, r),
              n.createElement("div", { className: d.default.button }, i)
            );
          return n.createElement(
            l.default,
            { handlers: u },
            n.createElement(s.default, { title: e, actions: f, children: t })
          );
        }
      }
      t.default = u;
    },
    ecbiejfbbg: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.ProductDetailsForDeepLink = void 0);
      var n = i(a("ddhijeejag")),
        o = r(a("ejegihaeh")),
        l = r(a("dahagdijgh")),
        c = r(a("bjheffjbgd")),
        s = i(a("bjjhgjdbhd")),
        d = a("dhjcdeigfi"),
        u = r(a("hhibigida")),
        f = r(a("bahheegiac")),
        h = r(a("bdjjabfecc")),
        p = r(a("cahfddcdga")),
        m = r(a("bhfadhddje")),
        g = r(a("dhccahhefj")),
        b = a("dcbdjheea");
      class j extends n.PureComponent {
        constructor(e) {
          super(e), (this.state = { product: null, productFetchState: "NONE" });
          var { productId: t, businessOwnerJid: a } = this.props.productInfo,
            r = (0, f.default)({ productId: t, businessOwnerJid: a });
          this.state = r
            ? { product: r, productFetchState: "NONE" }
            : { product: r, productFetchState: "PENDING" };
        }
        componentDidMount() {
          this.state.product || this._fetchProduct();
        }
        _fetchProduct() {
          var { productId: e, businessOwnerJid: t } = this.props.productInfo,
            a = (0, b.createWid)(t);
          o.default
            .findProduct({ catalogWid: a, productId: e })
            .checkpoint(this.props.rejectOnUnmount())
            .then(() => {
              var t = o.default.get(a),
                r = (0, p.default)(t, "catalog").productCollection.get(e);
              this.setState({ product: r, productFetchState: "SUCCESS" });
            })
            .catch((e) => {
              (0, d.parseErrorState)(e, (e) =>
                this.setState({ productFetchState: e })
              );
            });
        }
        render() {
          return this.state.product
            ? n.createElement(m.default, {
                product: this.state.product,
                onEnd: this.props.onEnd,
                onBack: this.props.onBack,
                onProductDetail: this.props.onProductDetail,
                onProductCatalog: this.props.onProductCatalog,
                refreshCarousel: !0,
                sessionId: this.props.sessionId,
                onProductLinkClick: this.props.onProductLinkClick,
                onCartClick: this.props.onCartClick,
              })
            : n.createElement(
                l.default,
                { onDrop: this.props.onBack, key: "product-details-drawer" },
                n.createElement(s.default, {
                  a8n: "drawer-title-profile",
                  title: h.default.t(1032),
                  onBack: this.props.onBack,
                  type: s.DRAWER_HEADER_TYPE.SMALL,
                }),
                n.createElement(
                  c.default,
                  null,
                  n.createElement(u.default, {
                    fetchState: this.state.productFetchState,
                  })
                )
              );
        }
      }
      t.ProductDetailsForDeepLink = j;
      var v = (0, g.default)(j);
      t.default = v;
    },
    eccabeiafh: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return n.createElement(c.default, {
            name: "shopping-cart",
            className: (0, o.default)(l.default.cartIcon, {
              [l.default.inheritColor]: "inherit-color" === e.theme,
            }),
          });
        });
      var n = i(a("ddhijeejag")),
        o = r(a("ceffhbhahb")),
        l = r(a("cebicejafi")),
        c = r(a("dgdcjccfdi"));
    },
    ecdebbajad: function (e, t) {
      e.exports = {
        body: "P4VHE",
        loadingContainer: "_3WItk",
        text: "_2hBor",
        loadingText: "_5pbKg",
        shiftUp: "_1RF7A",
      };
    },
    ecdfhfiied: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return n.createElement(
            o.default,
            {
              a8nText: "li-share-link",
              icon: n.createElement(s.default, {
                name: "forward",
                className: c.default.icon,
              }),
              onClick: e.onClick,
            },
            l.default.t(1174)
          );
        });
      var n = i(a("ddhijeejag")),
        o = r(a("cciafahdib")),
        l = r(a("bdjjabfecc")),
        c = r(a("jhgfbigja")),
        s = r(a("dgdcjccfdi"));
    },
    ecffjagdje: function (e, t) {
      e.exports = { icon: "_23Tyk" };
    },
    ecgccifibc: function (e, t, a) {
      "use strict";
      var r = a("bfejgijfbh"),
        i = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = i(a("ceffhbhahb")),
        o = r(a("ddhijeejag")),
        l = i(a("cfdfiiafca")),
        c = i(a("dgcjebcibe")),
        s = a("ccfjbcbbga"),
        d = i(a("ecdebjcgfa")),
        u = i(a("bcifhbgija"));
      class f extends o.Component {
        constructor(e) {
          super(e),
            (this.setRefElement = (e) => {
              this.refElement = e;
            }),
            (this.setRefSpinner = (e) => {
              this.refSpinner = e;
            }),
            (this.spinningAnimation = null),
            (this.incrementResolvedCount = () => {
              this.setState({ resolved: this.state.resolved + 1 });
            });
          for (var t = 0, a = 0; a < e.imageModels.length; a++)
            e.imageModels[a].mediaData.mediaStage === s.STAGE.RESOLVED &&
              (t += 1);
          this.state = { resolved: t, fadeInImages: !1 };
        }
        componentDidMount() {
          this.isAllImagesLoaded() ||
            this.props.renderFallbackImage ||
            this.animateSpinnerAppearance();
        }
        componentWillUnmount() {
          this.spinningAnimation && this.spinningAnimation.cancel();
        }
        animateSpinnerAppearance() {
          var e = this.refSpinner;
          e &&
            (this.spinningAnimation && this.spinningAnimation.cancel(),
            (this.spinningAnimation = (
              this.spinningAnimation || Promise.resolve()
            )
              .then(() =>
                (0, u.default)(
                  e,
                  { opacity: [1, 0] },
                  { delay: 75, duration: 50 }
                )
              )
              .cancellable()
              .then(() => {
                this.setState({ fadeInImages: !0 });
              })
              .catchType(Promise.CancellationError, () => {
                (0, u.default)(e, "stop", !0);
              })
              .finally(() => {
                this.spinningAnimation = null;
              })));
        }
        getRowKey(e) {
          return "ImageGrid-row-".concat(e);
        }
        getColumnKey(e) {
          return "ImageGrid-col-".concat(e);
        }
        isAllImagesLoaded() {
          var { imageModels: e } = this.props,
            { resolved: t } = this.state;
          return t >= Math.min(3, e.length);
        }
        renderLastItem(e) {
          var {
              imageModels: t,
              numberTextClassName: a,
              fetching: r,
              onClick: i,
            } = this.props,
            n = t.length - 1 - e,
            l = t[e];
          return o.createElement(c.default, {
            key: this.getRowKey(e),
            onClick: i,
            imageModel: l,
            mediaData: l.mediaData,
            renderOverlay: n > 0,
            numImagesNotRendered: n,
            numberTextClassName: a,
            incrementResolvedCount: this.incrementResolvedCount,
            renderImage: this.isAllImagesLoaded() && !r,
          });
        }
        renderItem(e, t, a) {
          var { fetching: r, onClick: i } = this.props,
            n = t.mediaData;
          return o.createElement(c.default, {
            key: e,
            className: a,
            onClick: i,
            imageModel: t,
            mediaData: n,
            incrementResolvedCount: this.incrementResolvedCount,
            renderImage: this.isAllImagesLoaded() && !r,
          });
        }
        renderLastColumnImages(e, t) {
          for (
            var { imageModels: a } = this.props, r = [], i = e;
            i < t - 1;
            i++
          )
            r.push(this.renderItem(this.getRowKey(i), a[i]));
          return r.push(this.renderLastItem(t - 1)), r;
        }
        renderLastColumn(e, t, a) {
          var { lastColumnClassName: r } = this.props;
          return o.createElement(
            "div",
            {
              key: e,
              className: (0, n.default)(
                l.default.column,
                l.default.lastColumn,
                r,
                { [l.default.lastColumnWidth]: !r }
              ),
            },
            this.renderLastColumnImages(t, a)
          );
        }
        renderImagesInColumns(e, t) {
          var { imageModels: a } = this.props;
          if (!a.length) return null;
          var r = Math.min(a.length, e - 1 + t);
          if (1 === r)
            return this.renderItem(
              this.getColumnKey(0),
              a[0],
              l.default.column
            );
          if (2 === r)
            return [
              this.renderItem(this.getColumnKey(0), a[0], l.default.column),
              this.renderItem(this.getColumnKey(1), a[1], l.default.column),
            ];
          for (var i = [], n = 0; n < e - 1; n++) {
            var o = a[n];
            i.push(this.renderItem(this.getColumnKey(n), o, l.default.column));
          }
          return (
            e - 1 < r - 1 &&
              i.push(this.renderLastColumn(this.getColumnKey(e - 1), e - 1, r)),
            i
          );
        }
        _renderFallbackImage() {
          var { productMsgMediaData: e } = this.props;
          return o.createElement(
            "div",
            { className: l.default.headContainer },
            o.createElement(
              "div",
              {
                className: (0, n.default)(
                  l.default.container,
                  l.default.containerBg
                ),
                ref: this.setRefElement,
              },
              e &&
                o.createElement(c.default, {
                  className: l.default.column,
                  mediaData: e,
                  renderFallbackImage: !0,
                })
            )
          );
        }
        render() {
          var { fetching: e, renderFallbackImage: t } = this.props,
            { fadeInImages: a } = this.state;
          if (t) return this._renderFallbackImage();
          var { columns: r, lastColumnNumRows: i } = this.props;
          (null != r && 0 !== r) || (r = 2), (null != i && 0 !== i) || (i = 2);
          var c = this.isAllImagesLoaded(),
            s = c
              ? null
              : o.createElement(
                  "div",
                  { className: l.default.loadingBlock },
                  o.createElement(
                    "div",
                    { className: l.default.spinner, ref: this.setRefSpinner },
                    o.createElement(d.default, {
                      color: "default",
                      size: 50,
                      stroke: 4,
                    })
                  )
                );
          return o.createElement(
            "div",
            { className: l.default.headContainer },
            s,
            o.createElement(
              "div",
              {
                className: (0, n.default)(l.default.container, {
                  [l.default.containerBg]: !e && c,
                  [l.default.fadeIn]: a,
                }),
                ref: this.setRefElement,
              },
              this.renderImagesInColumns(r, i)
            )
          );
        }
      }
      t.default = f;
    },
    echajahchj: function (e, t) {
      e.exports = { header: "_1zUIu", list: "_2Ng6E" };
    },
    efedbfchg: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg"),
        i = a("bfejgijfbh");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return n.createElement(
            "div",
            {
              className: (0, o.default)(l.default.icon, {
                [l.default.transparent]: e.theme && "transparent" === e.theme,
                [l.default.compact]: e.theme && "compact" === e.theme,
                [l.default.disabled]: e.disabled,
              }),
            },
            e.children
          );
        });
      var n = i(a("ddhijeejag")),
        o = r(a("ceffhbhahb")),
        l = r(a("behbhcibea"));
    },
    ehghbacbd: function (e, t) {
      e.exports = {
        imageCarouselContainer: "_3kwQl",
        container: "_3BtoT",
        gridContainer: "_3JAV6",
        lastColumn: "_3wLV0",
        shrinkUp: "_1fOZT",
        "container-animateShrinkUp": "_3BN5w",
        containerAnimateShrinkUp: "_3BN5w",
        numberText: "_1i7fc",
      };
    },
    fibcdcich: function (e, t) {
      e.exports = { linkIcon: "_3jGWj", inheritColor: "_2ZEfG" };
    },
    gcehifbbc: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatRemoveResult = function (e, t) {
          return c(e, f, h, p, t);
        }),
        (t.formatResult = c),
        (t.formatParticipantActionString = s),
        (t.formatGroupStatusReasonString = d),
        (t.formatParticipantStatusReasonString = u),
        (t.addSuccessString = function (e, t) {
          return o.default.t(140, { participantNames: e, _plural: t });
        }),
        (t.addFailedString = function (e, t) {
          return o.default.t(138, { participantNames: e, _plural: t });
        }),
        (t.addPartialFailedString = function () {
          return o.default.t(139);
        }),
        (t.removeSuccessString = f),
        (t.removeFailedString = h),
        (t.removePartialFailedString = p),
        (t.promoteSuccessString = function (e, t) {
          return o.default.t(153, { participantNames: e, _plural: t });
        }),
        (t.promoteFailedString = function (e, t) {
          return o.default.t(151, { participantNames: e, _plural: t });
        }),
        (t.promotePartialFailedString = function () {
          return o.default.t(152);
        }),
        (t.demoteFailedString = function (e, t, a) {
          switch (a) {
            case 406:
              return o.default.t(143, { participant: e });
            default:
              return o.default.t(142, { participantNames: e, _plural: t });
          }
        }),
        (t.demoteSuccessString = function (e, t) {
          return o.default.t(145, { participantNames: e, _plural: t });
        }),
        (t.demotePartialFailedString = function () {
          return o.default.t(144);
        });
      var i = r(a("dhigahgdjb")),
        n = r(a("bhbdiadfhj")),
        o = r(a("bdjjabfecc")),
        l = r(a("jccfhaecf"));
      function c(e, t, a, r, o) {
        var c;
        if (207 === e.status) {
          var f = {};
          for (var h in e)
            if (l.default.isWid(h)) {
              var p = e[h];
              if (
                (403 !== p ||
                  !n.default.supportsFeature(
                    n.default.F.GROUPS_V_4_JOIN_PERMISSION
                  )) &&
                207 !== p
              ) {
                f[p] || (f[p] = []);
                var m = i.default.get(h);
                m && f[p].push(m);
              }
            }
          var g = [];
          for (var b in f) {
            var j = s(t, a, u, parseInt(b, 10), f[b]);
            j && g.push(j);
          }
          c = g.length > 0 ? g.join("\n") : r();
        } else c = s(t, a, d, e.status, o);
        return c;
      }
      function s(e, t, a, r, i) {
        var n = i.map((e) => e.formattedShortName).join(o.default.t(506)),
          l = 200 === r;
        return (
          (l ? e(n, i.length) : t(n, i.length, r)) + (l ? "" : a(r, i.length))
        );
      }
      function d(e) {
        var t = "";
        switch (e) {
          case 403:
            t = " " + o.default.t(88);
            break;
          case 408:
            t = " " + o.default.t(148);
            break;
          case 404:
            t = " " + o.default.t(89);
            break;
          case 429:
            t = " " + o.default.t(90);
        }
        return t;
      }
      function u(e, t) {
        var a = "";
        switch (e) {
          case 401:
          case 406:
          case 409:
            break;
          case 404:
            a = " " + o.default.t(147, { _plural: t });
            break;
          case 408:
            a = " " + o.default.t(148, { _plural: t });
            break;
          case 500:
            a = " " + o.default.t(149);
            break;
          default:
            a = " " + o.default.t(150);
        }
        return a;
      }
      function f(e, t) {
        return o.default.t(158, { participantNames: e, _plural: t });
      }
      function h(e, t, a) {
        switch (a) {
          case 406:
            return o.default.t(157, { participant: e });
          default:
            return o.default.t(155, { participantNames: e, _plural: t });
        }
      }
      function p() {
        return o.default.t(156);
      }
    },
    gijfafhh: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return n.default.supportsFeature(n.default.F.RICH_TEXT)
            ? (0, i.default)(e, c, l.TextSerializer)
            : e;
        });
      var i = r(a("daabecicc")),
        n = r(a("bhbdiadfhj")),
        o = a("gaifbabbj"),
        l = a("cdejbeiiha"),
        c = o.Configuration.ComposeBox();
    },
    hhibigida: function (e, t, a) {
      "use strict";
      var r = a("bfejgijfbh"),
        i = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function ({ fetchState: e }) {
          switch (e) {
            case "NONE":
            case "SUCCESS":
              return null;
            case "PENDING":
              return o.createElement(
                "div",
                { className: (0, n.default)(c.default.loadingContainer) },
                o.createElement(s.default, {
                  size: 14,
                  color: s.colorOptions.highlight,
                }),
                o.createElement(
                  d.TextSpan,
                  {
                    className: (0, n.default)(
                      c.default.text,
                      c.default.loadingText
                    ),
                    theme: "small",
                  },
                  l.default.t(1052)
                )
              );
            case "NOT_FOUND":
            case "ERROR":
              return o.createElement(
                "div",
                { className: (0, n.default)(c.default.loadingContainer) },
                o.createElement(
                  d.TextSpan,
                  {
                    className: c.default.text,
                    theme: "small",
                    color: "danger",
                  },
                  "NOT_FOUND" === e ? l.default.t(1038) : l.default.t(1029)
                )
              );
            default:
              throw new Error("invalid fetchState ".concat(e));
          }
        });
      var n = i(a("ceffhbhahb")),
        o = r(a("ddhijeejag")),
        l = i(a("bdjjabfecc")),
        c = i(a("ecdebbajad")),
        s = r(a("ecdebjcgfa")),
        d = a("dhhjhedjij");
    },
    idecbbghf: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          window.getSelection().removeAllRanges();
          var t = document.getElementById(e),
            a = document.createRange();
          t && a.selectNode(t), window.getSelection().addRange(a);
          try {
            var r = document.execCommand("copy");
            return window.getSelection().removeAllRanges(), r;
          } catch (e) {
            return !1;
          }
        });
    },
    jdibabjeb: function (e, t, a) {
      "use strict";
      var r = a("cfjecfhbfg");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = r(a("cfgafiffdb")),
        n = r(a("dfdhhbaich")),
        o = r(a("dbbhijehii")),
        l = r(a("ecddiajibj")),
        c = r(a("igieaiddf")),
        s = r(a("ifdgihhgf")),
        d = r(a("cecdefhddc")),
        u = r(a("dajheaeehj")),
        f = new l.default(),
        h = new i.default();
      class p extends (0, c.default)([n.default, h, f, s.default]) {}
      (t.default = p),
        (p.MentionSuggestions = (0, u.default)(d.default, { plugin: f })),
        (p.EmojiSuggestions = (0, u.default)(o.default, { plugin: h }));
    },
    jhgfbigja: function (e, t) {
      e.exports = { icon: "_3o98J" };
    },
  },
]);
