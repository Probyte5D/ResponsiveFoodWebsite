
/* Section 4 - Footer */
.section-4 {
  background-color: #222;
  color: white;
  padding: 4rem 2rem;
}

.section-4-heading {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.signup-form {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.signup-form-input {
  padding: 0.75rem;
  border-radius: 2rem;
  border: none;
  flex: 1;
}

.signup-form-btn {
  background-color: #f4c10f;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 50%;
  color: #222;
}

.services-container {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.service {
  flex: 1 1 45%;
}

/* Footer */
footer {
  background-color: #111;
  color: white;
  text-align: center;
  padding: 1rem;
}

.footer-socials {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-icon {
  color: white;
  font-size: 1.25rem;
  transition: color 0.3s;
}

.social-icon:hover {
  color: #f4c10f;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .cards-container {
    flex-direction: column;
  }

  .card, .right-side {
    flex: 1 1 100%;
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 0.5rem;
  }

  .section-heading {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .signup-form {
    flex-direction: column;
  }

  .signup-form-btn {
    width: 100%;
    border-radius: 2rem;
  }
}

/* Section 1 */
.section-1 {
  text-align: center;
  padding: 4rem 2rem;
  background: #fff;
}

.section-heading {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-1-Text {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
  font-weight: 600;
  font-size: 1.25rem;
}

.text-item.change {
  color: #f4c10f;
}

