/**
 * ==========================================
 * MÓDULO DE FORMULÁRIO DE CONTATO
 * ==========================================
 */

const SELECTOR = '#contact-form';
let contactForm;

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormMessage(message, type) {
    try {
        document.querySelector('.form-message')?.remove();

        const messageElement = document.createElement('div');
        messageElement.className = `form-message form-message--${type}`;
        messageElement.textContent = message;
        
        Object.assign(messageElement.style, {
            padding: '12px 16px',
            marginTop: '16px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            backgroundColor: type === 'success' ? '#d1fae5' : '#fee2e2',
            color: type === 'success' ? '#065f46' : '#991b1b',
            border: `1px solid ${type === 'success' ? '#a7f3d0' : '#fca5a5'}`
        });

        contactForm.appendChild(messageElement);

        setTimeout(() => messageElement.remove(), 5000);
    } catch (error) {
        console.error('Erro ao mostrar mensagem do formulário:', error);
    }
}

function validateContactForm(data) {
    const errors = [];
    if (!data.name || data.name.length < 2) errors.push('Nome inválido');
    if (!data.email || !isValidEmail(data.email)) errors.push('Email inválido');
    if (!data.subject || data.subject.length < 5) errors.push('Assunto inválido');
    if (!data.message || data.message.length < 10) errors.push('Mensagem inválida');

    if (errors.length > 0) {
        showFormMessage(errors.join(', '), 'error');
        return false;
    }
    return true;
}

function handleContactFormSubmit(e) {
    e.preventDefault();
    
    try {
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name')?.trim() || '',
            email: formData.get('email')?.trim() || '',
            subject: formData.get('subject')?.trim() || '',
            message: formData.get('message')?.trim() || ''
        };

        if (!validateContactForm(data)) return;

        // Simulação de envio bem-sucedido
        showFormMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
        contactForm.reset();

    } catch (error) {
        console.error('Erro no envio do formulário:', error);
        showFormMessage('Erro ao enviar mensagem. Tente novamente.', 'error');
    }
}

export function initContactForm() {
    try {
        contactForm = document.querySelector(SELECTOR);
        if (!contactForm) {
            console.warn('Formulário de contato não encontrado');
            return;
        }
        
        contactForm.addEventListener('submit', handleContactFormSubmit);
    } catch (error) {
        console.error('Erro na inicialização do formulário:', error);
    }
}