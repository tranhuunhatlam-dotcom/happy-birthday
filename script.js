/**
 * ==============================================================================
 * WEBSITE CHÚC MỪNG SINH NHẬT BÀN BÈ (FRIENDSHIP BIRTHDAY WEBSITE)
 * Tác giả: Antigravity Pair Programmer
 * Sử dụng HTML, CSS và JavaScript thuần - Không phụ thuộc thư viện bên ngoài.
 * ==============================================================================
 */

// ==============================================================================
// 1. CẤU HÌNH THÔNG TIN DỄ DÀNG CHỈNH SỬA
// (Bạn có thể thay đổi các thông tin tại đây để cá nhân hóa cho bạn bè)
// ==============================================================================
const BIRTHDAY_CONFIG = {
  // 1. Tên người nhận
  recipientName: "Lê Thị Minh Thư",

  // 2. File nhạc nền: Để "" nếu muốn dùng chuông sinh nhật Web Audio API tự động có sẵn.
  //    Nếu bạn có bài hát yêu thích, hãy copy file vào thư mục (ví dụ "music.mp3") rồi điền tên file vào đây:
  musicFile: "", // Ví dụ: "music.mp3"

  // 3. File ảnh kỷ niệm: Để [] nếu chưa có ảnh. Các khung ảnh sẽ hiển thị hướng dẫn thân thiện.
  //    Nếu đã có ảnh trong thư mục, bạn có thể điền: ["photo1.jpg", "photo2.jpg", "photo3.jpg"]
  photoFiles: [],

  // 4. Lời nhắn trêu đùa bất ngờ ở phần popup cuối cùng
  surpriseQuote: "Quà thì chưa biết có không, nhưng lời chúc cho Minh Thư là chân thành 100% nha! 😂",

  // 5. Lời nhắn thêm trong popup bất ngờ
  surpriseSubtext:
    "Chúc Minh Thư tuổi mới rực rỡ, ăn bánh kem không sợ béo, deadline né xa và lúc nào cũng ngập tràn tiếng cười bên hội bạn thân! 🎂✨",

  // 6. Danh sách các màu pháo hoa giấy (Tông pastel hồng, tím, vàng, xanh mint)
  confettiColors: ["#ffb3c6", "#cbb2fe", "#fde047", "#a7f3d0", "#bae6fd", "#fda4af"]
};

// Danh sách quẻ may mắn tuổi mới độc quyền cho Minh Thư
const FORTUNE_LIST = [
  {
    icon: "💰",
    title: "🌟 Quẻ Đại Phú Quý",
    text: "Tiền vào như nước sông Đà, tiền ra nhỏ giọt như cafe phin! Năm nay Minh Thư tha hồ shopping, nhớ bao bạn bè ăn lẩu nha! 🍲💸"
  },
  {
    icon: "👑",
    title: "✨ Quẻ Nhan Sắc Vô Cực",
    text: "Tuổi mới nhan sắc thăng hạng vượt bậc, ăn cả thế giới vẫn giữ dáng chuẩn hoa hậu! Cười một cái là tỏa sáng cả góc phòng! 🍕💖"
  },
  {
    icon: "🚀",
    title: "⚡ Quẻ Đánh Bay Deadline",
    text: "Học tập & công việc hanh thông tuyệt đối. Deadline vừa thấy Minh Thư là tự động run sợ bay màu trước 24h! 💯🎯"
  },
  {
    icon: "🥳",
    title: "✌️ Quẻ Cạ Cứng Tri Kỷ",
    text: "Hội bạn thân luôn kề vai sát cánh cùng Minh Thư vượt mọi sóng gió, đồng hành trong mọi cuộc vui bất tận! 🎉🎈"
  },
  {
    icon: "🌟",
    title: "🌈 Quẻ Năng Lượng Rạng Rỡ",
    text: "365 ngày tới mỗi ngày thức dậy là một ngày vui. Nụ cười luôn nở trên môi, mọi điều ước sinh nhật đều thành hiện thực! ✨🎂"
  },
  {
    icon: "🎁",
    title: "🍀 Quẻ Vận May Bất Ngờ",
    text: "Bước chân ra đường nhặt được niềm vui, về nhà ngập tràn quà tặng và bất ngờ. Năm nay là năm may mắn nhất của Minh Thư! 🎊❤️"
  }
];

// ==============================================================================
// 2. KHỞI TẠO KHI TẢI TRANG
// ==============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initRecipientName();
  initStaggeredTitle();
  initCakeAndCandle();
  initEnvelope();
  initFortuneTeller();
  initSparkleTrail();
  initConfetti();
  initMusicController();
  initSurpriseModal();
  initCopyWish();
  initSmoothScroll();
});

// Hiển thị tên người nhận từ cấu hình
function initRecipientName() {
  const nameEl = document.getElementById("display-recipient-name");
  if (nameEl) {
    nameEl.textContent = BIRTHDAY_CONFIG.recipientName;
  }
}

// ==============================================================================
// 3. HIỆU ỨNG CHỮ "HAPPY BIRTHDAY 🎂" XUẤT HIỆN TỪNG CHỮ
// ==============================================================================
function initStaggeredTitle() {
  const titleContainer = document.getElementById("stagger-title");
  if (!titleContainer) return;

  const words = ["HAPPY", "BIRTHDAY"];
  titleContainer.innerHTML = "";

  let globalCharIndex = 0;

  words.forEach((word) => {
    const wordSpan = document.createElement("span");
    wordSpan.className = "stagger-word";

    [...word].forEach((char) => {
      const span = document.createElement("span");
      span.className = "stagger-letter";
      span.textContent = char;
      span.style.animationDelay = `${globalCharIndex * 0.08}s`;
      wordSpan.appendChild(span);
      globalCharIndex++;
    });

    titleContainer.appendChild(wordSpan);
  });

  // Thêm emoji bánh sinh nhật
  const emojiSpan = document.createElement("span");
  emojiSpan.className = "stagger-emoji";
  emojiSpan.textContent = "🎂";
  emojiSpan.style.animationDelay = `${globalCharIndex * 0.08 + 0.1}s`;
  titleContainer.appendChild(emojiSpan);
}

// ==============================================================================
// 4. BÁNH SINH NHẬT & HIỆU ỨNG THỔI NẾN TƯƠNG TÁC
// ==============================================================================
function initCakeAndCandle() {
  const blowBtn = document.getElementById("blow-candle-btn");
  const candleFlame = document.getElementById("candle-flame");
  const candleSmoke = document.getElementById("candle-smoke");
  const candleMessage = document.getElementById("candle-message");
  const candleBtnText = document.getElementById("candle-btn-text");

  let isBlownOut = false;

  function toggleCandle() {
    if (!isBlownOut) {
      // Thổi tắt nến
      candleFlame.classList.add("blown-out");
      candleSmoke.classList.add("active");
      isBlownOut = true;

      candleBtnText.textContent = "Thắp nến lại 🕯️";
      candleMessage.textContent = "🎉 Nến đã tắt! Điều ước của bạn chắc chắn sẽ thành hiện thực!";
      candleMessage.style.color = "#059669";
      candleMessage.style.fontWeight = "700";

      // Bắn pháo hoa ăn mừng khi thổi nến
      triggerConfettiBurst(60);
      playTwinkleSound();

      // Tắt khói sau khi bay xong
      setTimeout(() => {
        candleSmoke.classList.remove("active");
      }, 1600);
    } else {
      // Thắp nến lại
      candleFlame.classList.remove("blown-out");
      candleSmoke.classList.remove("active");
      isBlownOut = false;

      candleBtnText.textContent = "Thổi nến ngay!";
      candleMessage.textContent = "Nến đã được thắp lại, tiếp tục ước điều thứ hai nha!";
      candleMessage.style.color = "var(--text-muted)";
      candleMessage.style.fontWeight = "500";
    }
  }

  if (blowBtn) blowBtn.addEventListener("click", toggleCandle);
  if (candleFlame) candleFlame.addEventListener("click", toggleCandle);
}

// ==============================================================================
// 5. PHONG BÌ & THIỆP CHÚC MỪNG TRƯỢT RA
// ==============================================================================
function initEnvelope() {
  const toggleBtn = document.getElementById("toggle-letter-btn");
  const letterPaper = document.getElementById("letter-paper");
  const btnIcon = document.getElementById("letter-btn-icon");
  const btnText = document.getElementById("letter-btn-text");

  if (!toggleBtn || !letterPaper) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = letterPaper.classList.toggle("open");
    if (isOpen) {
      btnIcon.textContent = "📪";
      btnText.textContent = "Đóng thiệp lại";
      triggerConfettiBurst(35);
      playTwinkleSound();
    } else {
      btnIcon.textContent = "📩";
      btnText.textContent = "Đọc lời nhắn";
    }
  });
}

// ==============================================================================
// 5.1. MINI GAME: RÚT QUẺ VẬN MAY TUỔI MỚI CHO MINH THƯ
// ==============================================================================
let currentFortuneIndex = 0;
function initFortuneTeller() {
  const drawBtn = document.getElementById("draw-fortune-btn");
  const fortuneIcon = document.getElementById("fortune-icon-box");
  const fortuneTitle = document.getElementById("fortune-title");
  const fortuneText = document.getElementById("fortune-text");

  if (!drawBtn || !fortuneText) return;

  drawBtn.addEventListener("click", () => {
    // Hiệu ứng rung lắc hộp quà may mắn
    if (fortuneIcon) {
      fortuneIcon.classList.remove("shake");
      void fortuneIcon.offsetWidth; // kích hoạt reflow để reset animation
      fortuneIcon.classList.add("shake");
    }

    // Lấy quẻ tiếp theo trong danh sách
    const item = FORTUNE_LIST[currentFortuneIndex];
    currentFortuneIndex = (currentFortuneIndex + 1) % FORTUNE_LIST.length;

    // Cập nhật nội dung quẻ
    if (fortuneIcon) fortuneIcon.textContent = item.icon;
    if (fortuneTitle) fortuneTitle.textContent = item.title;
    if (fortuneText) fortuneText.textContent = item.text;

    // Phát âm thanh leng keng & bắn pháo hoa giấy chúc mừng
    playTwinkleSound();
    triggerConfettiBurst(40);
  });
}

// ==============================================================================
// 5.2. HIỆU ỨNG VỆT SAO PHÉP THUẬT (SPARKLE TRAIL)
// ==============================================================================
function initSparkleTrail() {
  const sparkles = ["✨", "⭐", "🌟", "🎈", "🌸"];
  let lastSparkleTime = 0;

  function createSparkle(x, y) {
    const now = Date.now();
    if (now - lastSparkleTime < 65) return; // Giới hạn tần suất để trang luôn mượt mà 60fps
    lastSparkleTime = now;

    const sparkle = document.createElement("span");
    sparkle.className = "magic-sparkle";
    sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    sparkle.style.fontSize = `${Math.random() * 10 + 14}px`;
    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 820);
  }

  window.addEventListener("mousemove", (e) => {
    createSparkle(e.clientX, e.clientY);
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    if (e.touches && e.touches[0]) {
      createSparkle(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });
}

// Phát âm thanh chuông leng keng ma thuật bằng Web Audio API
function playTwinkleSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const freqs = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    freqs.forEach((f, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(f, ctx.currentTime + i * 0.07);
      gain.gain.setValueAtTime(0.001, ctx.currentTime + i * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + i * 0.07 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.07 + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.07);
      osc.stop(ctx.currentTime + i * 0.07 + 0.36);
    });
  } catch (e) {}
}

// ==============================================================================
// 6. XỬ LÝ KHUNG ẢNH POLAROID & CHỌN ẢNH XEM TRƯỚC
// ==============================================================================
function initPhotoPreviewHelper() {
  const images = document.querySelectorAll(".polaroid-img");
  
  // Tự động kiểm tra lỗi tải ảnh
  images.forEach(img => {
    const slot = img.getAttribute("data-slot");
    const fallbackBox = document.querySelector(`.img-fallback[data-fallback="${slot}"]`);

    img.addEventListener("error", () => {
      // Ẩn ảnh bị lỗi và hiện khung hướng dẫn thân thiện, không hỏng trang
      img.style.display = "none";
      if (fallbackBox) fallbackBox.style.display = "flex";
    });

    img.addEventListener("load", () => {
      // Nếu ảnh tải thành công thì ẩn khung dự phòng và hiển thị ảnh
      img.style.display = "block";
      if (fallbackBox) fallbackBox.style.display = "none";
    });
  });

  // Tải danh sách ảnh được cấu hình trong BIRTHDAY_CONFIG (nếu có)
  if (Array.isArray(BIRTHDAY_CONFIG.photoFiles) && BIRTHDAY_CONFIG.photoFiles.length > 0) {
    BIRTHDAY_CONFIG.photoFiles.forEach((fileSrc, idx) => {
      if (!fileSrc) return;
      const slot = idx + 1;
      const targetImg = document.querySelector(`.polaroid-img[data-slot="${slot}"]`);
      if (targetImg) {
        targetImg.src = fileSrc;
      }
    });
  }

  // Hỗ trợ chọn ảnh từ máy để xem trước trực tiếp trên giao diện
  const fileInput = document.getElementById("custom-photo-input");
  if (fileInput) {
    fileInput.addEventListener("change", (e) => {
      const files = Array.from(e.target.files);
      if (!files.length) return;

      files.slice(0, 3).forEach((file, index) => {
        const slot = index + 1;
        const targetImg = document.querySelector(`.polaroid-img[data-slot="${slot}"]`);
        const fallbackBox = document.querySelector(`.img-fallback[data-fallback="${slot}"]`);

        if (targetImg) {
          const objectUrl = URL.createObjectURL(file);
          targetImg.src = objectUrl;
          targetImg.style.display = "block";
          if (fallbackBox) fallbackBox.style.display = "none";
        }
      });

      triggerConfettiBurst(30);
    });
  }
}

// ==============================================================================
// 7. BỘ ĐIỀU KHIỂN ÂM NHẠC (AN TOÀN - TỰ ĐỘNG CHUYỂN TỔNG HỢP NẾU THIẾU FILE)
// ==============================================================================
let audioCtx = null;
let melodyInterval = null;
let isMusicPlaying = false;

// Nốt nhạc bài Happy Birthday (Tần số Hz và độ dài)
const HAPPY_BIRTHDAY_NOTES = [
  { freq: 261.63, dur: 0.35 }, // C4
  { freq: 261.63, dur: 0.25 }, // C4
  { freq: 293.66, dur: 0.6 },  // D4
  { freq: 261.63, dur: 0.6 },  // C4
  { freq: 349.23, dur: 0.6 },  // F4
  { freq: 329.63, dur: 1.1 },  // E4
  
  { freq: 261.63, dur: 0.35 }, // C4
  { freq: 261.63, dur: 0.25 }, // C4
  { freq: 293.66, dur: 0.6 },  // D4
  { freq: 261.63, dur: 0.6 },  // C4
  { freq: 392.00, dur: 0.6 },  // G4
  { freq: 349.23, dur: 1.1 },  // F4

  { freq: 261.63, dur: 0.35 }, // C4
  { freq: 261.63, dur: 0.25 }, // C4
  { freq: 523.25, dur: 0.6 },  // C5
  { freq: 440.00, dur: 0.6 },  // A4
  { freq: 349.23, dur: 0.6 },  // F4
  { freq: 329.63, dur: 0.6 },  // E4
  { freq: 293.66, dur: 1.0 },  // D4

  { freq: 466.16, dur: 0.35 }, // Bb4
  { freq: 466.16, dur: 0.25 }, // Bb4
  { freq: 440.00, dur: 0.6 },  // A4
  { freq: 349.23, dur: 0.6 },  // F4
  { freq: 392.00, dur: 0.6 },  // G4
  { freq: 349.23, dur: 1.4 }   // F4
];

function initMusicController() {
  const musicBtn = document.getElementById("music-btn");
  const audioEl = document.getElementById("birthday-audio");
  const musicText = document.getElementById("music-status-text");
  const musicHint = document.getElementById("music-hint");

  if (!musicBtn) return;

  // Xử lý bật/tắt nhạc khi nhấn nút
  musicBtn.addEventListener("click", () => {
    if (isMusicPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  });

  function startMusic() {
    isMusicPlaying = true;
    musicBtn.classList.add("playing");
    if (musicText) musicText.textContent = "Tắt nhạc";

    // Nếu có khai báo file nhạc trong BIRTHDAY_CONFIG.musicFile
    if (BIRTHDAY_CONFIG.musicFile && audioEl) {
      audioEl.src = BIRTHDAY_CONFIG.musicFile;
      audioEl.play().catch(() => {
        // Nếu không tìm thấy file nhạc hoặc trình duyệt chặn, chuyển ngay sang chuông sinh nhật Web Audio API
        playSynthesizedMelody();
        if (musicHint) {
          musicHint.style.display = "block";
          setTimeout(() => { musicHint.style.display = "none"; }, 6000);
        }
      });
    } else {
      // Mặc định: Phát giai điệu chuông sinh nhật Web Audio API trong trẻo, vui nhộn
      playSynthesizedMelody();
    }
  }

  function stopMusic() {
    isMusicPlaying = false;
    musicBtn.classList.remove("playing");
    if (musicText) musicText.textContent = "Bật nhạc";

    if (audioEl) {
      audioEl.pause();
      audioEl.currentTime = 0;
    }

    if (audioCtx) {
      audioCtx.close().catch(() => {});
      audioCtx = null;
    }
    if (melodyInterval) {
      clearTimeout(melodyInterval);
      melodyInterval = null;
    }
  }

  // Tự động phát nhạc ngay khi vừa mở trang
  setTimeout(() => {
    startMusic();
  }, 300);

  // Cơ chế dự phòng: Nếu trình duyệt chặn autoplay ban đầu, nhạc sẽ tự phát ngay khi chạm/click đầu tiên
  function tryAutoPlayOnFirstInteraction() {
    if (!isMusicPlaying) {
      startMusic();
    }
    window.removeEventListener("click", tryAutoPlayOnFirstInteraction);
    window.removeEventListener("touchstart", tryAutoPlayOnFirstInteraction);
    window.removeEventListener("scroll", tryAutoPlayOnFirstInteraction);
  }

  window.addEventListener("click", tryAutoPlayOnFirstInteraction, { passive: true });
  window.addEventListener("touchstart", tryAutoPlayOnFirstInteraction, { passive: true });
  window.addEventListener("scroll", tryAutoPlayOnFirstInteraction, { passive: true });
}

// Bộ tạo giai điệu chuông sinh nhật vui tươi bằng Web Audio API thuần
function playSynthesizedMelody() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    if (audioCtx) {
      audioCtx.close().catch(() => {});
    }
    audioCtx = new AudioContextClass();

    let noteIndex = 0;

    function playNextNote() {
      if (!isMusicPlaying || !audioCtx) return;

      const note = HAPPY_BIRTHDAY_NOTES[noteIndex];
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "sine"; // Âm thanh chuông gió nhẹ nhàng, vui vẻ
      osc.frequency.setValueAtTime(note.freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.2, audioCtx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + note.dur);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + note.dur);

      noteIndex = (noteIndex + 1) % HAPPY_BIRTHDAY_NOTES.length;
      melodyInterval = setTimeout(playNextNote, note.dur * 1000 + 40);
    }

    playNextNote();
  } catch (err) {
    console.log("Audio synthesis notice:", err);
  }
}

// ==============================================================================
// 8. BẤT NGỜ CUỐI CÙNG & CỬA SỔ MODAL
// ==============================================================================
function initSurpriseModal() {
  const surpriseBtn = document.getElementById("surprise-btn");
  const modal = document.getElementById("surprise-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const confirmBtn = document.getElementById("modal-confirm-btn");
  const shootBtn = document.getElementById("modal-shoot-confetti");
  const quoteText = document.getElementById("surprise-quote-text");
  const subText = document.getElementById("surprise-subtext");

  if (!modal) return;

  // Nạp nội dung từ cấu hình
  if (quoteText) quoteText.textContent = BIRTHDAY_CONFIG.surpriseQuote;
  if (subText) subText.textContent = BIRTHDAY_CONFIG.surpriseSubtext;

  function openModal() {
    modal.classList.add("active");
    triggerConfettiBurst(75);
  }

  function closeModal() {
    modal.classList.remove("active");
  }

  if (surpriseBtn) surpriseBtn.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (confirmBtn) confirmBtn.addEventListener("click", closeModal);
  if (shootBtn) {
    shootBtn.addEventListener("click", () => {
      triggerConfettiBurst(80);
    });
  }

  // Đóng khi click ngoài hộp thoại
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Đóng bằng phím Esc
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

// ==============================================================================
// 9. HIỆU ỨNG PHÁO HOA GIẤY (CANVAS CONFETTI ENGINE THUẦN)
// ==============================================================================
let confettiParticles = [];
let confettiAnimationId = null;

function initConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resize);
  resize();
}

function triggerConfettiBurst(count = 50) {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  // Vị trí bắn: tỏa ra từ giữa hoặc hai bên màn hình
  const originX = canvas.width / 2;
  const originY = canvas.height * 0.45;

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 9 + 4;

    confettiParticles.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 4,
      vy: Math.sin(angle) * speed - Math.random() * 5,
      size: Math.random() * 8 + 5,
      color: BIRTHDAY_CONFIG.confettiColors[Math.floor(Math.random() * BIRTHDAY_CONFIG.confettiColors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 12,
      opacity: 1,
      shape: Math.random() > 0.4 ? "rect" : "circle"
    });
  }

  if (!confettiAnimationId) {
    animateConfetti(canvas, ctx);
  }
}

function animateConfetti(canvas, ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = confettiParticles.length - 1; i >= 0; i--) {
    const p = confettiParticles[i];

    // Trọng lực và chuyển động
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.22; // Trọng lực nhẹ rơi xuống
    p.vx *= 0.98; // Ma sát không khí
    p.rotation += p.rotSpeed;
    p.opacity -= 0.009;

    ctx.save();
    ctx.globalAlpha = Math.max(0, p.opacity);
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.fillStyle = p.color;

    if (p.shape === "rect") {
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
    } else {
      ctx.beginPath();
      ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();

    if (p.opacity <= 0 || p.y > canvas.height + 20) {
      confettiParticles.splice(i, 1);
    }
  }

  if (confettiParticles.length > 0) {
    confettiAnimationId = requestAnimationFrame(() => animateConfetti(canvas, ctx));
  } else {
    confettiAnimationId = null;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

// ==============================================================================
// 10. SAO CHÉP LỜI CHÚC & CUỘN TRANG MƯỢT MÀ
// ==============================================================================
function initCopyWish() {
  const copyBtn = document.getElementById("copy-wish-btn");
  const wishContent = document.getElementById("wishes-text-content");

  if (!copyBtn || !wishContent) return;

  copyBtn.addEventListener("click", () => {
    const text = wishContent.textContent.trim();
    navigator.clipboard.writeText(text).then(() => {
      const originalText = copyBtn.textContent;
      copyBtn.textContent = "✅ Đã sao chép!";
      setTimeout(() => {
        copyBtn.textContent = originalText;
      }, 2200);
    }).catch(() => {
      alert("Không thể tự động sao chép, bạn hãy bôi đen văn bản để sao chép nhé!");
    });
  });
}

function initSmoothScroll() {
  const openGiftBtn = document.getElementById("open-gift-btn");
  const mainContent = document.getElementById("main-content");

  if (!openGiftBtn || !mainContent) return;

  openGiftBtn.addEventListener("click", () => {
    // Tự động bật nhạc nếu chưa phát
    const musicBtn = document.getElementById("music-btn");
    if (musicBtn && !musicBtn.classList.contains("playing")) {
      musicBtn.click();
    }

    // Cuộn mượt mà xuống phần nội dung chính
    mainContent.scrollIntoView({ behavior: "smooth" });
    // Bắn pháo hoa chào mừng
    setTimeout(() => {
      triggerConfettiBurst(60);
    }, 400);
  });
}
