// contact.js - Contact form handling for Mahmoud Frikha's Portfolio

// Update copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Contact form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();
    
    // Validate form
    if (!firstName || !lastName || !email || !subject || !message) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }
    
    // Build email body
    let emailBody = `Nom: ${firstName} ${lastName}\nEmail: ${email}\n`;
    
    if (phone) {
        emailBody += `Téléphone: ${phone}\n`;
    }
    
    emailBody += `\nMessage:\n${message}`;
    
    // Get subject text
    const subjectSelect = document.getElementById('subject');
    const subjectText = subjectSelect.options[subjectSelect.selectedIndex].text;
    
    // Create mailto link
    const mailtoLink = `mailto:mahmoudfrikha14@gmail.com?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    const successMessage = document.getElementById('formSuccess');
    successMessage.classList.remove('hidden');
    
    // Reset form
    document.getElementById('contactForm').reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.classList.add('hidden');
    }, 5000);
    
    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Add input validation feedback
const inputs = document.querySelectorAll('#contactForm input[required], #contactForm textarea[required], #contactForm select[required]');

inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            this.classList.add('is-invalid');
            this.classList.remove('is-valid');
        } else {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
        }
    });
    
    input.addEventListener('input', function() {
        if (this.classList.contains('is-invalid') && this.value.trim() !== '') {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
        }
    });
});

// Email validation
const emailInput = document.getElementById('email');
emailInput.addEventListener('blur', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.value)) {
        this.classList.add('is-invalid');
        this.classList.remove('is-valid');
    } else {
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
    }
});

// Phone number formatting (optional)
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', function() {
    // Remove non-numeric characters except + and spaces
    this.value = this.value.replace(/[^\d\s+]/g, '');
});

console.log('Contact form initialized successfully ⚓');