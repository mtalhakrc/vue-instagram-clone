import { createApp } from "vue";
import { createPinia } from "pinia";

import "./styles/variables.css";
import "./styles/app.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(createPinia());
app.use(router);

app.mount("#app");

/*

  VUE STYLE GUIDE notes

  ESSENTIALS
  User component names should always be multi-word
  prop definitions should always be as detailed as possible, specifying at least type(s).
  Use keyed v-for # key with v-for is always required on components, in order to maintain internal component state down the subtree
  Never use v-if on the same element as v-for.
  For applications, styles in a top-level App component and in layout components may be global, but all other components should always be scoped.


  RECOMMENDED
  Whenever a build system is available to concatenate files, each component should be in its own file.
  Single-file component filename casing Filenames of Single-File Components should either be always PascalCase or always kebab-case.
  Base component names Base components (a.k.a. presentational, dumb, or pure components) that apply app-specific styling and conventions should all begin with a specific prefix, such as Base, App, or V.
  Single-instance component names Components that should only ever have a single active instance should begin with the The prefix, to denote that there can be only one.
  Tightly coupled component names Child components that are tightly coupled with their parent should include the parent component name as a prefix.
  Order of words in component names# Component names should start with the highest-level (often most general) words and end with descriptive modifying words.
  Self-closing components Components with no content should be self-closing in Single-File Components, string templates, and JSX - but never in DOM templates
  Full-word component names Component names should prefer full words over abbreviations.
  Prop name casing Prop names should always use camelCase during declaration, but kebab-case in templates and JSX.
  Multi-attribute elements#Elements with multiple attributes should span multiple lines, with one attribute per line.
  Simple expressions in templates#Component templates should only include simple expressions, with more complex expressions refactored into computed properties or methods.
  Simple computed properties#Complex computed properties should be split into as many simpler properties as possible.
  Quoted attribute values#Non-empty HTML attribute values should always be inside quotes (single or double, whichever is not used in JS).
  Directive shorthands#Directive shorthands (: for v-bind:, @ for v-on: and # for v-slot) should be used always or never.

 */

/*
3 saat
+1 saat
+1
 */
/*
   NOTLAR
   önce color'lar, svg'ler, bg-image gibi assetler alınır, proje bazında ayarlanır.
   sonra route'ler ayarlanır, viewslar oluşturulur. folder yapısı inşa edilir .
 */
/*
timeline ve sidebar
maxwidth kullanımı
 */
