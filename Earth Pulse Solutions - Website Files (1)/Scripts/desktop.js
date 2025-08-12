
    window._currentDevice = 'desktop';
    window.Parameters = window.Parameters || {
        HomeUrl: 'http://app.multiscreensite.com/site/53c41459',
        AccountUUID: '1afa2f482bf742dcac6f50e941a32c3a',
        SystemID: 'US_DIRECT_PRODUCTION',
        SiteAlias: '53c41459',
        SiteType: atob('RFVEQU9ORQ=='),
        PublicationDate: 'Mon Jul 21 19:32:02 UTC 2025',
        ExternalUid: null,
        IsSiteMultilingual: false,
        InitialPostAlias: '',
        InitialPostPageUuid: '',
        InitialDynamicItem: '',
        DynamicPageInfo: {
            isDynamicPage: false,
            base64JsonRowData: 'null',
        },
        InitialPageAlias: 'home',
        InitialPageUuid: 'd05bec0a473644ea8f1ea89e2fcb30a6',
        InitialPageId: '1158483028',
        InitialEncodedPageAlias: 'aG9tZQ==',
        InitialHeaderUuid: '1d7d8105ed0c48a3bae4056ee8e9809b',
        CurrentPageUrl: '',
        IsCurrentHomePage: true,
        AllowAjax: false,
        AfterAjaxCommand: null,
        HomeLinkText: 'Back To Home',
        UseGalleryModule: false,
        CurrentThemeName: 'Layout Theme',
        ThemeVersion: '500000',
        DefaultPageAlias: '',
        RemoveDID: true,
        WidgetStyleID: null,
        IsHeaderFixed: false,
        IsHeaderSkinny: false,
        IsBfs: true,
        StorePageAlias: 'null',
        StorePagesUrls: 'e30=',
        IsNewStore: 'false',
        StorePath: '',
        StoreId: 'null',
        StoreVersion: 0,
        StoreBaseUrl: '/site/53c41459?preview=true&dm_device=desktop&dm_exportSite=true&nossl&dm_exportSite_protected=84eb762d_1753126329097_5_53ba5ab0d077860227f606b1de37ccd8cd1eeb0d189cbab0f44544836380cb84',
        StoreCleanUrl: true,
        StoreDisableScrolling: true,
        IsStoreSuspended: false,
        HasCustomDomain: true,
        SimpleSite: false,
        showCookieNotification: false,
        cookiesNotificationMarkup: 'null',
        translatedPageUrl: '',
        isFastMigrationSite: false,
        sidebarPosition: 'NA',
        currentLanguage: 'en',
        currentLocale: 'en',
        NavItems: '{}',
        errors: {
            general: 'There was an error connecting to the page.<br/> Make sure you are not offline.',
            password: 'Incorrect name/password combination',
            tryAgain: 'Try again'
        },
        NavigationAreaParams: {
            ShowBackToHomeOnInnerPages: true,
            NavbarSize: -1,
            NavbarLiveHomePage: 'http://app.multiscreensite.com/site/53c41459',
            BlockContainerSelector: '.dmBody',
            NavbarSelector: '#dmNav:has(a)',
            SubNavbarSelector: '#subnav_main'
        },
        hasCustomCode: true,
        planID: '7',
        customTemplateId: 'null',
        siteTemplateId: 'null',
        productId: 'DM_DIRECT',
        disableTracking: false,
        pageType: 'FROM_SCRATCH',
        isRuntimeServer: true,
        isInEditor: false,
        hasNativeStore: false,
        defaultLang: 'en',
        hamburgerMigration: null,
        isFlexSite : false
    };

    window.Parameters.LayoutID = {};
    window.Parameters.LayoutID[window._currentDevice] = 6;
    window.Parameters.LayoutVariationID = {};
    window.Parameters.LayoutVariationID[window._currentDevice] = 5;


    window.SystemID = 'US_DIRECT_PRODUCTION';

    if (!window.dmAPI) {
        window.dmAPI = {
            registerExternalRuntimeComponent: function () {
            },
            getCurrentDeviceType: function () {
                return window._currentDevice;
            },
            runOnReady: (ns, fn) => {
                const safeFn = dmAPI.toSafeFn(fn);
                ns = ns || 'global_' + Math.random().toString(36).slice(2, 11);
                const eventName = 'afterAjax.' + ns;

                if (document.readyState === 'complete') {
                    $.DM.events.off(eventName).on(eventName, safeFn);
                    setTimeout(function () {
                        safeFn({
                            isAjax: false,
                        });
                    }, 0);
                } else {
                    window?.waitForDeferred?.('dmAjax', () => {
                        $.DM.events.off(eventName).on(eventName, safeFn);
                        safeFn({
                            isAjax: false,
                        });
                    });
                }
            },
            toSafeFn: (fn) => {
                if (fn?.safe) {
                    return fn;
                }
                const safeFn = function (...args) {
                    try {
                        return fn?.apply(null, args);
                    } catch (e) {
                        console.log('function failed ' + e.message);
                    }
                };
                safeFn.safe = true;
                return safeFn;
            }
        };
    }

    if (!window.requestIdleCallback) {
        window.requestIdleCallback = function (fn) {
            setTimeout(fn, 0);
        }
    }


/**
 * There are a few <link> tags with CSS resource in them that are preloaded in the page
 * in each of those there is a "onload" handler which invokes the loadCSS callback
 * defined here.
 * We are monitoring 3 main CSS files - the runtime, the global and the page.
 * When each load we check to see if we can append them all in a batch. If threre
 * is no page css (which may happen on inner pages) then we do not wait for it
 */
(function () {
  let cssLinks = {};
  function loadCssLink(link) {
    link.onload = null;
    link.rel = "stylesheet";
    link.type = "text/css";
  }
  
    function checkCss() {
      const pageCssLink = document.querySelector("[id*='CssLink']");
      const widgetCssLink = document.querySelector("[id*='widgetCSS']");

        if (cssLinks && cssLinks.runtime && cssLinks.global && (!pageCssLink || cssLinks.page) && (!widgetCssLink || cssLinks.widget)) {
            const storedRuntimeCssLink = cssLinks.runtime;
            const storedPageCssLink = cssLinks.page;
            const storedGlobalCssLink = cssLinks.global;
            const storedWidgetCssLink = cssLinks.widget;

            storedGlobalCssLink.disabled = true;
            loadCssLink(storedGlobalCssLink);

            if (storedPageCssLink) {
                storedPageCssLink.disabled = true;
                loadCssLink(storedPageCssLink);
            }

            if(storedWidgetCssLink) {
                storedWidgetCssLink.disabled = true;
                loadCssLink(storedWidgetCssLink);
            }

            storedRuntimeCssLink.disabled = true;
            loadCssLink(storedRuntimeCssLink);

            requestAnimationFrame(() => {
                setTimeout(() => {
                    storedRuntimeCssLink.disabled = false;
                    storedGlobalCssLink.disabled = false;
                    if (storedPageCssLink) {
                      storedPageCssLink.disabled = false;
                    }
                    if (storedWidgetCssLink) {
                      storedWidgetCssLink.disabled = false;
                    }
                    // (SUP-4179) Clear the accumulated cssLinks only when we're
                    // sure that the document has finished loading and the document 
                    // has been parsed.
                    if(document.readyState === 'interactive') {
                      cssLinks = null;
                    }
                }, 0);
            });
        }
    }
  

  function loadCSS(link) {
    try {
      var urlParams = new URLSearchParams(window.location.search);
      var noCSS = !!urlParams.get("nocss");
      var cssTimeout = urlParams.get("cssTimeout") || 0;

      if (noCSS) {
        return;
      }
      if (link.href && link.href.includes("d-css-runtime")) {
        cssLinks.runtime = link;
        checkCss();
      } else if (link.id === "siteGlobalCss") {
        cssLinks.global = link;
        checkCss();
      } 
      
      else if (link.id && link.id.includes("CssLink")) {
        cssLinks.page = link;
        checkCss();
      } else if (link.id && link.id.includes("widgetCSS")) {
        cssLinks.widget = link;
        checkCss();
      }
      
      else {
        requestIdleCallback(function () {
          window.setTimeout(function () {
            loadCssLink(link);
          }, parseInt(cssTimeout, 10));
        });
      }
    } catch (e) {
      throw e
    }
  }
  window.loadCSS = window.loadCSS || loadCSS;
})();


    /* usage: window.getDeferred(<deferred name>).resolve() or window.getDeferred(<deferred name>).promise.then(...)*/
    function Def() {
        this.promise = new Promise((function (a, b) {
            this.resolve = a, this.reject = b
        }).bind(this))
    }

    const defs = {};
    window.getDeferred = function (a) {
        return null == defs[a] && (defs[a] = new Def), defs[a]
    }
    window.waitForDeferred = function (b, a, c) {
        let d = window?.getDeferred?.(b);
        d
            ? d.promise.then(a)
            : c && ["complete", "interactive"].includes(document.readyState)
                ? setTimeout(a, 1)
                : c
                    ? document.addEventListener("DOMContentLoaded", a)
                    : console.error(`Deferred  does not exist`);
    };


{
  "@context" : {
    "@vocab" : "http://schema.org/"
  },
  "@type" : "ProfessionalService",
  "name" : "Earth Pulse Solutions",
  "address" : {
    "@type" : "PostalAddress",
    "streetAddress" : "1825 Scarlet Sage Ln",
    "addressLocality" : "Laurel",
    "addressRegion" : "MT",
    "postalCode" : "59044",
    "addressCountry" : "US"
  },
  "geo" : {
    "@type" : "GeoCoordinates",
    "latitude" : "45.69406",
    "longitude" : "-108.73909"
  },
  "url" : "https://www.earthpulsesolutions.com",
  "description" : "At Earth Pulse Solutions, we are dedicated to pioneering sustainable land and wildlife management practices that foster ecological balance and enhance property value. With a commitment to harmonizing natural processes with innovative techniques, we offer a comprehensive range of services designed to revitalize ecosystems and support landowners. Our team of experts combines extensive experience with a passion for environmental stewardship to deliver solutions that address immediate concerns and promote long-term sustainability. Whether through strategic water development, forest management, or regenerative grazing, our goal is to create thriving, resilient landscapes that benefit both wildlife and the communities we serve. At Earth Pulse Solutions, we believe in crafting a legacy of responsible stewardship, where every project contributes to a more sustainable and vibrant future.",
  "telephone" : "406-223-4434",
  "email" : "stryker@earthpulsesolutions.com",
  "logo" : "https://irp.cdn-website.com/53c41459/dms3rep/multi/Earth-Pulse-Logo.png",
  "image" : [ "https://irp.cdn-website.com/53c41459/dms3rep/multi/large+bull+moose+at+edge+of+lake+at+maroon+bells-+colorado+in+early+autumn-+walking+past+b.webp", "https://irp.cdn-website.com/53c41459/dms3rep/multi/Water+Mapping.webp", "https://irp.cdn-website.com/53c41459/dms3rep/multi/Stream.webp", "https://irp.cdn-website.com/53c41459/dms3rep/multi/Image+by+Glen+Carrie.webp", "https://irp.cdn-website.com/53c41459/dms3rep/multi/Misty+landscape+with+fir+forest+in+hipster+vintage+retro+style.webp" ],
  "@id" : "https://www.earthpulsesolutions.com"
}
