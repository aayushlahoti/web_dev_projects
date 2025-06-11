document.addEventListener('mousemove', (event) => {
    const eyes = [
        { eye: document.querySelector('.left-eye'), pupil: document.querySelector('.left-pupil') },
        { eye: document.querySelector('.right-eye'), pupil: document.querySelector('.right-pupil') }
    ];

    eyes.forEach(({ eye, pupil }) => {
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = event.clientX - eyeCenterX;
        const dy = event.clientY - eyeCenterY;
        const angle = Math.atan2(dy, dx);

        // Max distance pupil can move from center
        const maxX = (rect.width / 2) - 20;
        const maxY = (rect.height / 2) - 20;

        const pupilX = Math.cos(angle) * maxX * 0.5 + (rect.width / 2 - 10);
        const pupilY = Math.sin(angle) * maxY * 0.5 + (rect.height / 2 - 10);

        pupil.style.position = 'relative';
        pupil.style.left = `${pupilX}px`;
        pupil.style.top = `${pupilY}px`;
    });
});