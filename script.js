// ============================================
// PASSWORD LOGIC
// ============================================

const CORRECT_PASSWORD = "2026";

const passwordInput = document.getElementById('passwordInput');
const unlockBtn = document.getElementById('unlockBtn');
const errorMessage = document.getElementById('errorMessage');

function checkPassword() {
    const entered = passwordInput.value.trim();
    
    if (entered === CORRECT_PASSWORD) {
        // SUCCESS - redirect to dashboard
        errorMessage.classList.remove('show');
        window.location.href = 'main.html';
    } else {
        // ERROR - show message
        errorMessage.textContent = '❌ Incorrect password. Try again.';
        errorMessage.classList.add('show');
        passwordInput.classList.add('error');
        passwordInput.value = '';
        passwordInput.focus();
        
        setTimeout(() => {
            passwordInput.classList.remove('error');
        }, 500);
    }
}

// Click button
unlockBtn.addEventListener('click', checkPassword);

// Press Enter
passwordInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        checkPassword();
    }
});

// Auto-focus on load
window.addEventListener('load', () => {
    passwordInput.focus();
});
