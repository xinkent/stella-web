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
});
