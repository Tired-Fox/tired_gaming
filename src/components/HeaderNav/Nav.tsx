import { createSignal } from "solid-js";
import "./nav.css";

function Nav(props: { section: string }) {
  const [show, setShow] = createSignal(false);
  let nav: any;
  let currentSection: any;

  const blurNav = (event: any) => {
    if (!nav.contains(event.relatedTarget)) {
      setShow(false);
      currentSection.blur();
      currentSection.active = false;
    }
  };

  return (
    <div id="header-nav" ref={nav}>
      <span
        id="nav-button"
        role="button"
        class="sub-section"
        tabindex="0"
        ref={currentSection}
        onClick={() => setShow(!show())}
        onKeyDown={(e) => {
          if (e.key === "Enter") setShow(!show());
        }}
        data-section={props.section}
        onBlur={blurNav}
      >
        {props.section}
      </span>
      {show() && (
        <nav>
          {props.section !== "home" && (
            <a
              href="/"
              data-section="home"
              class="sub-section"
              onBlur={blurNav}
            >
              Home
            </a>
          )}
          {props.section !== "games" && (
            <a
              href="/games"
              data-section="games"
              class="sub-section"
              onBlur={blurNav}
            >
              Games
            </a>
          )}
          {props.section !== "assets" && (
            <a
              href="/assets"
              data-section="assets"
              class="sub-section"
              onBlur={blurNav}
            >
              Assets
            </a>
          )}
          {props.section !== "mixed" && (
            <a
              href="/mixed"
              data-section="mixed"
              class="sub-section"
              onBlur={blurNav}
            >
              Mixed
            </a>
          )}
        </nav>
      )}
    </div>
  );
}

export default Nav;
