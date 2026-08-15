document.addEventListener('DOMContentLoaded', () => {
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
