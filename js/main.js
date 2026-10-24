/* CampusNest — Landing Page
   Los botones de esta página llevan a la Web Application.
   Cuando publiquen la web app (por ejemplo en GitHub Pages),
   reemplacen APP_URL por la URL real. */
(function () {
  "use strict";

  // Mientras trabajan en local (ambos repos clonados lado a lado) funciona tal cual.
  var APP_URL = "../campusnest-web-application/index.html";

  function appLink(hash, role, query) {
    var qs = [];
    if (role) qs.push("role=" + encodeURIComponent(role));
    if (query) qs.push("q=" + encodeURIComponent(query));
    return APP_URL + (qs.length ? "?" + qs.join("&") : "") + hash;
  }

  // Enlaces con data-app="#/ruta" (y opcionalmente data-role="student|host")
  document.querySelectorAll("[data-app]").forEach(function (a) {
    a.href = appLink(a.dataset.app, a.dataset.role);
  });

  // Buscador del hero: envía el distrito a la búsqueda de la web app
  var form = document.getElementById("heroForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var q = document.getElementById("heroInput").value.trim();
      window.location.href = appLink("#/buscar", null, q);
    });
  }
})();
