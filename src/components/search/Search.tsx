import { createEffect, mergeProps } from "solid-js";
import './search.css';

function Search(props: {section: string}) {
  const Props = mergeProps({section: ''}, props);

  const startSearch = () => {
    alert(`Start Search: <section: ${Props.section || 'blank'}>`);
  };

  createEffect(() => {
    addEventListener("keypress", (event) => {
      if (event.key === "/") {
        startSearch();
      }
    })
  })

  return (
    <>
      <div id="search" onClick={startSearch} role="button" tabIndex="0" aria-label="Search">
        <svg id="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
        </svg>
        <div id="placeholder">search</div>
        <kbd>/</kbd>
      </div>
    </>
  )
}

export default Search;

