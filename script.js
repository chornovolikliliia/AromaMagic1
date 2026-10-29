/* AromaMagic — 7 функціональних багів */

var favCount = 0;
var cart = []; // {name, price} — price stored but display uses 0 (BUG 2)

function checkForm(e) {
  if (e) e.preventDefault();
  var name = document.getElementById("name");
  /* BUG 1: ім'я приймає цифри */
  alert("Дякуємо" + (name && name.value ? ", " + name.value : "") + "! Реєстрацію прийнято.");
  return false;
}

function showResult() {
  /* BUG 5: результат тесту завжди однаковий */
  var el = document.getElementById("result");
  if (el) el.innerHTML = "Ваш ідеальний аромат — Лаванда та Сандал.";
}

function addToCart(name, price) {
  /* BUG 2: у кошику ціна завжди 0 ₴ */
  cart.push({ name: name, price: price });
  renderCart();
}

function renderCart() {
  var list = document.getElementById("cartList");
  var total = document.getElementById("cartTotal");
  var count = document.getElementById("cartCount");
  var count2 = document.getElementById("cartCountBadge");
  if (count) count.textContent = String(cart.length);
  if (count2) count2.textContent = String(cart.length);
  if (list) {
    list.innerHTML = "";
    cart.forEach(function (item) {
      var row = document.createElement("div");
      row.style.padding = "6px 0";
      row.style.borderBottom = "1px solid #eee";
      row.textContent = item.name + " — 0 ₴";
      list.appendChild(row);
    });
  }
  if (total) total.textContent = "0 ₴";
}

function toggleCart() {
  var panel = document.getElementById("cartPanel");
  if (!panel) return;
  panel.style.display = panel.style.display === "none" || panel.style.display === "" ? "block" : "none";
}

function clearCart() {
  /* BUG 3: кнопка «Очистити кошик» не очищає кошик */
  alert("Кошик очищено");
  /* навмисно НЕ робимо cart = []; renderCart(); */
}

function addFavorite(name) {
  /* BUG 6: лічильник обраного не зростає */
  var el = document.getElementById("favCount");
  if (el) el.textContent = String(favCount);
  alert("«" + name + "» додано в обране");
}

function applyFilter() {
  /* BUG 7: фільтр не змінює список карток */
  var sel = document.getElementById("scentFilter");
  var msg = document.getElementById("filterMsg");
  if (msg) msg.textContent = "Показано: " + (sel ? sel.value : "");
}

function searchFacts() {
  /* BUG 4: пошук завжди порожній */
  var out = document.getElementById("searchOut");
  if (out) out.textContent = "Нічого не знайдено.";
}

function sortByPrice() {
  /* додатково можна використати: сортування не змінює порядок */
  var msg = document.getElementById("sortMsg");
  if (msg) msg.textContent = "Відсортовано за ціною";
}
