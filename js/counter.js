// Free, no-signup counter using countapi.mileshilliard.com
// Docs: https://countapi.mileshilliard.com
//
// NOTE: this is a lightweight community-run service, not an enterprise
// analytics tool. It's great for a simple "X people have read this" number.
//
// hitOncePerBrowser() only adds +1 the FIRST time a given browser opens a
// page — it remembers with localStorage, so refreshing or revisiting the
// same page from the same browser won't inflate the count. It's "per
// browser/device", not a verified unique human (someone using two devices,
// or clearing their browser data, will be counted again) — but it's much
// closer to "people" than counting every single page load.

(function () {
  const API_BASE = 'https://countapi.mileshilliard.com/api/v1';

  // Change this if you ever want a fresh set of counters (e.g. after a relaunch).
  // Keep it fairly unique so it doesn't collide with someone else's counters.
  const PREFIX = 'heir-kings-fist-2026';

  async function hit(key) {
    try {
      const res = await fetch(`${API_BASE}/hit/${PREFIX}-${key}`);
      const data = await res.json();
      return Number(data.value);
    } catch (err) {
      console.error('Counter error:', err);
      return null;
    }
  }

  async function get(key) {
    try {
      const res = await fetch(`${API_BASE}/get/${PREFIX}-${key}`);
      if (!res.ok) return 0;
      const data = await res.json();
      return Number(data.value) || 0;
    } catch (err) {
      console.error('Counter error:', err);
      return null;
    }
  }

  async function hitOncePerBrowser(key) {
    const storageKey = 'counted_' + key;
    try {
      if (localStorage.getItem(storageKey)) {
        // Already counted this browser before — just show the current total.
        return await get(key);
      }
      const value = await hit(key);
      if (value !== null) localStorage.setItem(storageKey, '1');
      return value;
    } catch (err) {
      // localStorage can be unavailable (private browsing, blocked cookies, etc.)
      // Fall back to a plain hit so the site still works.
      return await hit(key);
    }
  }

  window.siteCounter = { hit, get, hitOncePerBrowser };
})();