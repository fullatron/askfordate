// DOM Elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const responseSection = document.getElementById('responseSection');
const responseText = document.getElementById('responseText');
const noSequence = document.getElementById('noSequence');
const redirectScreen = document.getElementById('redirectScreen');

// No sequence screens
const screen1 = document.querySelector('.screen-1');
const screen2 = document.querySelector('.screen-2');
const screen3 = document.querySelector('.screen-3');
const screen4 = document.querySelector('.screen-4');
const screen5 = document.querySelector('.screen-5');

// No sequence buttons
const sureYes = document.getElementById('sureYes');
const takeMeBack = document.getElementById('takeMeBack');
const oopsMyBad = document.getElementById('oopsMyBad');
const nopeStillNo = document.getElementById('nopeStillNo');
const okayFineCoffee = document.getElementById('okayFineCoffee');
const stillNo = document.getElementById('stillNo');
const alrightTakeMeBack = document.getElementById('alrightTakeMeBack');
const finalAnswerNo = document.getElementById('finalAnswerNo');
const letsGoBack = document.getElementById('letsGoBack');

// Confetti function
function triggerConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const confetti = window.confetti.create(canvas, {
        resize: true,
        useWorker: true
    });
    
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Show response
function showResponse(message) {
    responseText.textContent = message;
    responseSection.classList.remove('hidden');
    
    // Scroll to response
    responseSection.scrollIntoView({ behavior: 'smooth' });
}

// Show redirect screen and then redirect
function showRedirectAndRedirect() {
    // Hide any visible screens
    responseSection.classList.add('hidden');
    noSequence.classList.add('hidden');
    
    // Show redirect screen
    redirectScreen.classList.remove('hidden');
    
    // Redirect after 2.5 seconds
    setTimeout(() => {
        window.location.href = 'https://2no.co/231A06';
    }, 2500);
}

// Show no sequence
function showNoSequence() {
    noSequence.classList.remove('hidden');
    screen1.classList.remove('hidden');
    screen2.classList.add('hidden');
    screen3.classList.add('hidden');
    screen4.classList.add('hidden');
    screen5.classList.add('hidden');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Hide no sequence
function hideNoSequence() {
    noSequence.classList.add('hidden');
}

// Event Listeners
yesBtn.addEventListener('click', () => {
    triggerConfetti();
    showRedirectAndRedirect();
});

noBtn.addEventListener('click', () => {
    showNoSequence();
});

// No sequence navigation
// Screen 1 navigation
sureYes.addEventListener('click', () => {
    screen1.classList.add('hidden');
    screen2.classList.remove('hidden');
});

takeMeBack.addEventListener('click', () => {
    showRedirectAndRedirect();
});

// Screen 2 navigation
oopsMyBad.addEventListener('click', () => {
    showRedirectAndRedirect();
});

nopeStillNo.addEventListener('click', () => {
    screen2.classList.add('hidden');
    screen3.classList.remove('hidden');
});

// Screen 3 navigation
okayFineCoffee.addEventListener('click', () => {
    showRedirectAndRedirect();
});

stillNo.addEventListener('click', () => {
    screen3.classList.add('hidden');
    screen4.classList.remove('hidden');
});

// Screen 4 navigation
alrightTakeMeBack.addEventListener('click', () => {
    showRedirectAndRedirect();
});

finalAnswerNo.addEventListener('click', () => {
    screen4.classList.add('hidden');
    screen5.classList.remove('hidden');
});

// Screen 5 navigation
letsGoBack.addEventListener('click', () => {
    showRedirectAndRedirect();
});

// Add subtle animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in classes to elements that should animate in
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-delay');
    
    fadeElements.forEach((el, index) => {
        // Add a slight delay to each element
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
