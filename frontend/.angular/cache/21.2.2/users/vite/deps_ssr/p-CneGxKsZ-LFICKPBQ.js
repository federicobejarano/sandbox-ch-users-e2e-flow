import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  f,
  m
} from "./chunk-SJBWLUMK.js";
import {
  e
} from "./chunk-ZY5SCQBK.js";
import {
  P,
  W
} from "./chunk-S4CYRHMB.js";
import "./chunk-6DU2HRTW.js";

// node_modules/@ionic/core/components/p-CneGxKsZ.js
var n = () => {
  const n2 = window;
  n2.addEventListener("statusTap", (() => {
    W((() => {
      const o = document.elementFromPoint(n2.innerWidth / 2, n2.innerHeight / 2);
      if (!o) return;
      const e2 = f(o);
      e2 && new Promise(((o2) => e(e2, o2))).then((() => {
        P((async () => {
          e2.style.setProperty("--overflow", "hidden"), await m(e2, 300), e2.style.removeProperty("--overflow");
        }));
      }));
    }));
  }));
};
export {
  n as startStatusTap
};
//# sourceMappingURL=p-CneGxKsZ-LFICKPBQ.js.map
