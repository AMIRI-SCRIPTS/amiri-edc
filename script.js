const CORRECT_PASSWORD = "2026";

const passwordInput = document.getElementById('passwordInput');
const unlockBtn = document.getElementById('unlockBtn');
const errorMessage = document.getElementById('errorMessage');
const container = document.querySelector('.container');

// Check password function
function checkPassword() {
    const entered = passwordInput.value.trim();
    
    if (entered === CORRECT_PASSWORD) {
        // Success!
        errorMessage.classList.remove('show');
        container.classList.add('success');
        
        // Redirect to main page after animation
        setTimeout(() => {
            window.location.href = 'main.html';
        }, 700);
    } else {
        // Error!
        errorMessage.textContent = '❌ Incorrect password. Try again.';
        errorMessage.classList.add('show');
        passwordInput.classList.add('error-shake');
        passwordInput.value = '';
        passwordInput.focus();
        
        // Remove shake after animation
        setTimeout(() => {
            passwordInput.classList.remove('error-shake');
        }, 400);
    }
}

// Event: Click button
unlockBtn.addEventListener('click', checkPassword);

// Event: Press Enter key
passwordInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        checkPassword();
    }
});

// Auto-focus on page load
window.addEventListener('load', () => {
    passwordInput.focus();
});