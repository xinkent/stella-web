document.addEventListener('DOMContentLoaded', () => {
    // ハンバーガーメニューの開閉（モバイル）
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            navToggle.classList.toggle('open', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }

    // FAQ アコーディオンの開閉
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach((btn) => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const answer = item.querySelector('.faq-answer');
            const isOpen = item.classList.toggle('open');

            // 開いたら中身の高さ分だけ展開、閉じたら 0 に戻す
            answer.style.maxHeight = isOpen ? answer.scrollHeight + 'px' : null;
        });
    });

    // ギャラリーのカルーセル（左右送り）
    const track = document.querySelector('.carousel-track');

    if (track) {
        const scrollByOne = (dir) => {
            const item = track.querySelector('.carousel-item');
            const step = item ? item.offsetWidth + 16 : track.clientWidth;
            track.scrollBy({ left: step * dir, behavior: 'smooth' });
        };

        const prev = document.querySelector('.carousel-arrow.prev');
        const next = document.querySelector('.carousel-arrow.next');
        if (prev) prev.addEventListener('click', () => scrollByOne(-1));
        if (next) next.addEventListener('click', () => scrollByOne(1));
    }

    // 画像をクリックで拡大表示
    const lightbox = document.getElementById('lightbox');

    if (lightbox) {
        const lightboxImg = lightbox.querySelector('img');

        const closeLightbox = () => {
            lightbox.hidden = true;
            lightboxImg.src = '';
        };

        document.querySelectorAll('.carousel-item').forEach((item) => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                lightboxImg.src = item.dataset.full || img.src;
                lightboxImg.alt = img.alt;
                lightbox.hidden = false;
            });
        });

        lightbox.addEventListener('click', closeLightbox);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
        });
    }

    // 切替タブ（ページ内移動）のアクティブ表示
    const tabLinks = document.querySelectorAll('.tab-link');

    if (tabLinks.length) {
        const setActive = (link) => {
            tabLinks.forEach((l) => l.classList.toggle('active', l === link));
        };

        tabLinks.forEach((link) => {
            link.addEventListener('click', () => setActive(link));
        });

        // スクロール位置に応じて現在地を切り替える
        const targets = [...tabLinks].map((l) => document.querySelector(l.getAttribute('href')));
        window.addEventListener('scroll', () => {
            let current = 0;
            targets.forEach((el, i) => {
                if (el && el.getBoundingClientRect().top <= 120) current = i;
            });
            setActive(tabLinks[current]);
        });
    }
});
