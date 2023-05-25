import { createEffect, createSignal, mergeProps } from "solid-js";
import "./search.css";

function Search(props: { section: string }) {
  const Props = mergeProps({ section: "" }, props);
  const [focus, setFocus] = createSignal(false);
  let searchInput: any;
  let search: any;
  let keybind: any;

  const startSearch = () => {
    if (!focus()) {
      console.log(`Start Search: <section: ${Props.section || "blank"}>`);
    }
  };

  const focusSearch = () => {
    startSearch();
    setFocus(true);
    keybind.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>`;
    searchInput.focus();
    searchInput.value = "";
    searchInput.placeholder = "";
  };

  const unfocusSearch = () => {
    setFocus(false);
    searchInput.blur();
    keybind.innerText = '/';
    searchInput.value = "";
    searchInput.placeholder = "search";
  };

  const blurSearch = (event: any) => {
    if (!search.contains(event.relatedTarget)) {
      unfocusSearch();
    }
  };

  createEffect(() => {
    addEventListener("keypress", (event) => {
      if (event.key === "/" && !focus()) {
        event.preventDefault();
        focusSearch();
      } else if (event.key === "Enter") {
        event.preventDefault();
        unfocusSearch();
      }
    });
  });

  return (
    <>
      <div
        id="search"
        ref={search}
        class={focus() ? "full-width" : "normal-width"}
        role="button"
        aria-label="Search"
        onBlur={blurSearch}
      >
        <div id="bar">
          <input
            type="text"
            ref={searchInput}
            placeholder="search"
            onFocusIn={focusSearch}
            onBlur={blurSearch}
            onKeyPress={(event) => {if (event.key === "Enter") unfocusSearch()}}
          />
          <button onClick={() => focus() ? unfocusSearch() : focusSearch()}>
            <kbd ref={keybind} id="search-keys">/</kbd>
          </button>  
        </div>
      </div>
    </>
  );
}

export default Search;
