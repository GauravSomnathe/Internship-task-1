
        document.addEventListener('DOMContentLoaded', () => {
            const themeToggleButton = document.querySelector('.theme-toggle');
            const themeIconMoon = document.getElementById('theme-icon-moon');
            const themeIconSun = document.getElementById('theme-icon-sun');
            const body = document.body;
            const navLinks = document.querySelectorAll('nav a[href^="#"]');
            const sections = document.querySelectorAll('main section[id]');
            const scrollTopButton = document.querySelector('.scroll-top');
            const contactForm = document.getElementById('contactForm');
            const formSubmissionMessage = document.getElementById('formSubmissionMessage');
            const currentYearSpan = document.getElementById('currentYear');
            const headerHeight = document.querySelector('header').offsetHeight;

            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                body.classList.add(savedTheme);
                updateThemeIcons(savedTheme);
            } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                body.classList.add('light');
                updateThemeIcons('light');
            } else {
                updateThemeIcons('dark');
            }

            function toggleTheme() {
                body.classList.toggle('light');
                const currentTheme = body.classList.contains('light') ? 'light' : 'dark';
                localStorage.setItem('theme', currentTheme);
                updateThemeIcons(currentTheme);
            }

            function updateThemeIcons(theme) {
                if (theme === 'light') {
                    themeIconMoon.style.display = 'none';
                    themeIconSun.style.display = 'inline-block';
                } else {
                    themeIconMoon.style.display = 'inline-block';
                    themeIconSun.style.display = 'none';
                }
            }

            themeToggleButton.addEventListener('click', toggleTheme);

            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        const offsetTop = targetSection.offsetTop - headerHeight;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            function highlightNavLink() {
                let currentScroll = window.scrollY;
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - headerHeight - 1;
                    const sectionBottom = sectionTop + section.offsetHeight;
                    if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
                        navLinks.forEach(link => link.classList.remove('active'));
                        const activeLink = document.querySelector(`nav a[href="#${section.id}"]`);
                        if (activeLink) {
                            activeLink.classList.add('active');
                        }
                    }
                });
            }

            window.addEventListener('scroll', highlightNavLink);
            highlightNavLink();

            function toggleScrollTopButton() {
                if (window.scrollY > 300) {
                    scrollTopButton.classList.add('show');
                } else {
                    scrollTopButton.classList.remove('show');
                }
            }

            window.addEventListener('scroll', toggleScrollTopButton);

            scrollTopButton.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();

                const name = this.name.value.trim();
                const email = this.email.value.trim();
                const message = this.message.value.trim();

                if (!name || !email || !message) {
                    displayFormMessage('Please fill in all fields.', 'error');
                    return;
                }

                if (!validateEmail(email)) {
                    displayFormMessage('Please enter a valid email address.', 'error');
                    return;
                }

                console.log('Form Submitted!', { name, email, message });

                displayFormMessage('Your message has been sent successfully!', 'success');
                this.reset();
            });

            function displayFormMessage(msg, type) {
                formSubmissionMessage.textContent = msg;
                formSubmissionMessage.className = `form-message ${type}`;
                formSubmissionMessage.style.display = 'block';

                setTimeout(() => {
                    formSubmissionMessage.style.display = 'none';
                    formSubmissionMessage.textContent = '';
                }, 5000);
            }

            function validateEmail(email) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(String(email).toLowerCase());
            }

            currentYearSpan.textContent = new Date().getFullYear();
        });
   