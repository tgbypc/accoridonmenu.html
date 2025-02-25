document.addEventListener("DOMContentLoaded", function () {
  // Tüm accordion başlıklarını seç
  const accordionItems = document.querySelectorAll(".item");

  accordionItems.forEach((item) => {
    const title = item.querySelector(".title");

    title.addEventListener("click", function () {
      // Eğer birden fazla açık kalmasını istemiyorsan, önce tümünü kapat
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // Aç/kapa işlemi için active class'ını ekle/kaldır
      item.classList.toggle("active");
    });
  });
});