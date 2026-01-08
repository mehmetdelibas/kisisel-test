function hesapla() {
  let skor = { A:0, B:0, C:0, D:0 };
  let puan = { A:4, B:3, C:2, D:1 };

  for(let i=1;i<=14;i++){
    let secim = document.querySelector(`input[name="q${i}"]:checked`);
    if(!secim){
      alert("Lütfen tüm soruları cevaplayın");
      return;
    }
    skor[secim.value] += puan[secim.value];
  }

  let maxSkor = Math.max(...Object.values(skor));
  let enYuksekler = Object.keys(skor).filter(k => skor[k] === maxSkor);

  // EŞİTLİK VARSA RANDOM
  let secilen = enYuksekler[Math.floor(Math.random() * enYuksekler.length)];

  let sonucMetni = {
    A: "🦁 PANTER – Kararlı, sonuç odaklı ve lider ruhlu",
    B: "🦚 TAVUSKUŞU – Sosyal, enerjik ve motive edici",
    C: "🐬 YUNUS – Empatik, uyumlu ve ilişki odaklı",
    D: "🦉 BAYKUŞ – Analitik, planlı ve mantıklı"
  };

let sonucDiv = document.getElementById("sonuc");
sonucDiv.style.display = "block";

sonucDiv.innerHTML = `
  <p style="margin-bottom:10px;">🎯 Sonucunuz</p>
  <strong>${sonucMetni[secilen]}</strong>
`;
