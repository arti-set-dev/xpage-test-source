"use strict";(self.webpackChunkgulp_builder=self.webpackChunkgulp_builder||[]).push([[792],{854:()=>{const e={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body},t=()=>{e.bodyEl.classList.remove("dis-scroll")};!function(){const a=document?.querySelector("[data-burger]"),s=document?.querySelector("[data-menu]"),l=document?.querySelectorAll("[data-menu-item]"),i=document?.querySelector("[data-menu-overlay]"),r=document?.querySelector("[data-menu-close]");a?.addEventListener("click",(l=>{a?.classList.toggle("burger--active"),s?.classList.toggle("menu--active"),i?.classList.toggle("overlay--active"),s?.classList.contains("menu--active")?(a?.setAttribute("aria-expanded","true"),a?.setAttribute("aria-label","Закрыть меню"),e.bodyEl.classList.add("dis-scroll")):(a?.setAttribute("aria-expanded","false"),a?.setAttribute("aria-label","Открыть меню"),t())})),r?.addEventListener("click",(()=>{a?.setAttribute("aria-expanded","false"),a?.setAttribute("aria-label","Открыть меню"),a.classList.remove("burger--active"),s.classList.remove("menu--active"),i?.classList.remove("overlay--active"),t()})),i?.addEventListener("click",(()=>{a?.setAttribute("aria-expanded","false"),a?.setAttribute("aria-label","Открыть меню"),a.classList.remove("burger--active"),s.classList.remove("menu--active"),i?.classList.remove("overlay--active"),t()})),l?.forEach((e=>{e.addEventListener("click",(()=>{a?.setAttribute("aria-expanded","false"),a?.setAttribute("aria-label","Открыть меню"),a.classList.remove("burger--active"),s.classList.remove("menu--active"),i?.classList.remove("overlay--active"),t()}))}))}()}},e=>{e(e.s=854)}]);