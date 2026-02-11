/**
 * Contact Form Module
 * Handles form validation and submission
 */

import { showToast } from '../utils/UiUtils.js';

const validators = {
  name: {
    required: true,
    minLength: 2,
    message: 'Por favor, insira seu nome'
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Por favor, insira um email válido'
  },
  subject: {
    required: true,
    minLength: 3,
    message: 'Por favor, insira um assunto'
  },
  message: {
    required: true,
    minLength: 10,
    message: 'Por favor, insira uma mensagem com pelo menos 10 caracteres'
  }
};

const validateField = (field, rules) => {
  const value = field.value.trim();
  const formGroup = field.closest('.form-group');
  const errorElement = formGroup?.querySelector('.form-error');

  // Reset error state
  formGroup?.classList.remove('error');
  if (errorElement) {
    errorElement.textContent = '';
  }

  // Required check
  if (rules.required && !value) {
    showError(formGroup, errorElement, rules.message);
    return false;
  }

  // Min length check
  if (rules.minLength && value.length < rules.minLength) {
    showError(formGroup, errorElement, rules.message);
    return false;
  }

  // Pattern check
  if (rules.pattern && !rules.pattern.test(value)) {
    showError(formGroup, errorElement, rules.message);
    return false;
  }

  return true;
};

const showError = (formGroup, errorElement, message) => {
  formGroup?.classList.add('error');
  if (errorElement) {
    errorElement.textContent = message;
  }
};

export const initContactForm = () => {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    let isValid = true;

    // Validate all fields
    Object.keys(validators).forEach(fieldName => {
      const field = contactForm.querySelector(`[name="${fieldName}"]`);
      if (field) {
        const fieldValid = validateField(field, validators[fieldName]);
        if (!fieldValid) {
          isValid = false;
        }
      }
    });

    if (!isValid) {
      showToast('Por favor, corrija os erros no formulário', 'error');
      return;
    }

    // Simulate form submission
    const submitBtn = contactForm.querySelector('.btn-submit');
    submitBtn?.classList.add('loading');
    submitBtn?.setAttribute('disabled', 'true');

    // Simulate API call
    setTimeout(() => {
      submitBtn?.classList.remove('loading');
      submitBtn?.removeAttribute('disabled');

      showToast('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
      contactForm.reset();
    }, 2000);
  };

  // Real-time validation
  Object.keys(validators).forEach(fieldName => {
    const field = contactForm.querySelector(`[name="${fieldName}"]`);
    if (field) {
      field.addEventListener('blur', () => {
        validateField(field, validators[fieldName]);
      });

      field.addEventListener('input', () => {
        const formGroup = field.closest('.form-group');
        if (formGroup?.classList.contains('error')) {
          validateField(field, validators[fieldName]);
        }
      });
    }
  });

  // Form submission
  contactForm.addEventListener('submit', handleSubmit);
};

