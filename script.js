function hesapla() {
  // Uyarıyı her tıklamada sıfırla
  const uyari = document.getElementById("uyari");
  const sonucDiv = document.getElementById("sonuc");

  if (uyari) uyari.style.display = "none";
  if (sonucDiv) sonucDiv.style.display = "none";

  // Skorlar ve puanlar
  let skor = { A: 0, B: 0, C: 0, D: 0 };
  let puan = { A: 4, B: 3, C: 2, D: 1 };

  // 14 soruyu kontrol et
  for (let i = 1; i <= 14; i++) {
    let secim = document.querySelector(`input[name="q${i}"]:checked`);

    // Boş soru varsa
    if (!secim) {
      if (uyari) uyari.style.display = "block";
      return;
    }

    skor[secim.value] += puan[secim.value];
  }

  // En yüksek skoru bul
  let maxSkor = Math.max(...Object.values(skor));

  // Eşit olanları al
  let enYuksekler = Object.keys(skor).filter(
    (key) => skor[key] === maxSkor
  );

  // Eşitlik varsa random seç
  let secilen =
    enYuksekler[Math.floor(Math.random() * enYuksekler.length)];

  // Sonuç metinleri
  let sonucMetni = {
    A: "🦁 PANTER – Kararlı, sonuç odaklı ve lider ruhlu",
    B: "🦚 TAVUSKUŞU – Sosyal, enerjik ve motive edici",
    C: "🐬 YUNUS – Empatik, uyumlu ve ilişki odaklı",
    D: "🦉 BAYKUŞ – Analitik, planlı ve mantıklı"
  };

  // Sonucu ekranda göster
  if (sonucDiv) {
    sonucDiv.style.display = "block";
    sonucDiv.innerHTML = `
      <p style="margin-bottom:10px;">🎯 Sonucunuz</p>
      <strong>${sonucMetni[secilen]}</strong>
    `;
  }
}
