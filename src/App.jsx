import { useCallback, useEffect, useRef } from "react";
import { PrefsProvider, usePrefs } from "./lib/prefs.jsx";
import { HOME_HREF, RouteContext, navigate, scrollToSection, useRoute, useRouteState } from "./lib/router.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import Offers from "./components/Offers.jsx";
import Journey from "./components/Journey.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ProjectPage from "./components/ProjectPage.jsx";

function Shell() {
  const route = useRoute();
  const { t } = usePrefs();
  const homeScroll = useRef(0);
  const pending = useRef(null);
  const wasHome = useRef(true);

  // Remember where the reader was on the home page, so "All work" brings them back to the same spot.
  useEffect(() => {
    if (route.name === "project") {
      if (wasHome.current) homeScroll.current = window.scrollY;
      wasHome.current = false;
      window.scrollTo(0, 0);
      return;
    }
    wasHome.current = true;
    if (pending.current) {
      const id = pending.current;
      pending.current = null;
      requestAnimationFrame(() => (id === "top" ? window.scrollTo(0, 0) : scrollToSection(id)));
    } else {
      window.scrollTo(0, homeScroll.current || 0);
    }
  }, [route.name, route.slug]);

  const onNav = useCallback(
    (id) => {
      if (route.name !== "home") {
        pending.current = id;
        navigate(HOME_HREF);
        return;
      }
      if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
      else scrollToSection(id);
    },
    [route.name]
  );

  return (
    <>
      <a className="skip" href="#main" onClick={(e) => { e.preventDefault(); document.getElementById("main")?.focus(); }}>
        {t("skip")}
      </a>
      <Header onNav={onNav} />
      <main id="main" tabIndex={-1}>
        {route.name === "project" ? (
          <ProjectPage slug={route.slug} />
        ) : (
          <>
            <Hero onNav={onNav} />
            <Work />
            <Offers />
            <Journey />
            <Contact />
          </>
        )}
      </main>
      <Footer onNav={onNav} />
    </>
  );
}

// `initialPath` is only passed by the build-time pre-renderer; in the browser the route follows the URL.
export default function App({ initialPath }) {
  const route = useRouteState(initialPath);
  return (
    <PrefsProvider>
      <RouteContext.Provider value={route}>
        <Shell />
      </RouteContext.Provider>
    </PrefsProvider>
  );
}
