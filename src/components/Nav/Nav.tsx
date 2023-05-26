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
      <div
        tabindex="0"
        ref={currentSection}
        onClick={() => setShow(!show())}
        onKeyDown={(e) => {
          if (["Enter"].includes(e.key)) setShow(!show());
        }}
        onBlur={blurNav}
      >
        <span
          id="nav-button"
          role="button"
          class="sub-section"
          data-section={props.section}
        >
          {props.section}
        </span>
        <span>⯆</span>
      </div>
      {show() && (
        <nav>
          {props.section !== "jam" && (
            <a
              href="/jam"
              data-section="jam"
              class="sub-section"
              onBlur={blurNav}
            >
              Jam
            </a>
          )}
          {props.section !== "game" && (
            <a
              href="/jam/game"
              data-section="game"
              class="sub-section"
              onBlur={blurNav}
            >
              Game
            </a>
          )}
          {props.section !== "asset" && (
            <a
              href="/jam/asset"
              data-section="asset"
              class="sub-section"
              onBlur={blurNav}
            >
              Asset
            </a>
          )}
          {props.section !== "mixed" && (
            <a
              href="/jam/mixed"
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
