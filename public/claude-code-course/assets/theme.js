(function () {
  var btn = document.getElementById("theme");
  if (!btn) return;
  btn.addEventListener("click", function () {
    var d = document.documentElement, n = d.getAttribute("data-theme") === "light" ? "dark" : "light";
    d.setAttribute("data-theme", n);
    try { localStorage.setItem("site-theme", n); } catch (e) {}
  });
})();
