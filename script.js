// /**
//  * The Oncology Dietitian - Portfolio Landing Page Interactivity
//  */

// document.addEventListener('DOMContentLoaded', () => {
//   initHeaderScroll();
//   initMobileMenu();
//   initNavHighlight();
//   initWhatsApp();
//   initModal();
// });

// /* --- Header Scroll Shadow Effect --- */
// function initHeaderScroll() {
//   const header = document.getElementById('siteHeader');
//   if (!header) return;

//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 40) {
//       header.classList.add('scrolled');
//     } else {
//       header.classList.remove('scrolled');
//     }
//   });
// }

// /* --- Mobile Navigation Drawer Toggle --- */
// function initMobileMenu() {
//   const toggleBtn = document.getElementById('mobileMenuToggle');
//   const mainNav = document.getElementById('mainNav');
//   const navLinks = document.querySelectorAll('.nav-link');

//   if (!toggleBtn || !mainNav) return;

//   toggleBtn.addEventListener('click', () => {
//     mainNav.classList.toggle('open');
//     toggleBtn.classList.toggle('active');
//   });

//   navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//       mainNav.classList.remove('open');
//       toggleBtn.classList.remove('active');
//     });
//   });
// }

// /* --- Active Navigation Highlighting on Scroll --- */
// function initNavHighlight() {
//   const sections = document.querySelectorAll('section[id]');
//   const navLinks = document.querySelectorAll('.nav-link');

//   window.addEventListener('scroll', () => {
//     let current = '';
//     const scrollPosition = window.pageYOffset + 200;

//     sections.forEach(section => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.offsetHeight;
//       if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//         current = section.getAttribute('id');
//       }
//     });

//     navLinks.forEach(link => {
//       link.classList.remove('active');
//       if (link.getAttribute('href') === `#${current}`) {
//         link.classList.add('active');
//       }
//     });
//   });
// }

// /* --- WhatsApp Floating Chat Popup --- */
// function initWhatsApp() {
//   const chatTime = document.getElementById('chatTime');
//   if (chatTime) {
//     const now = new Date();
//     chatTime.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   }

//   // Close popup when clicking outside
//   document.addEventListener('click', (e) => {
//     const popup = document.getElementById('whatsappPopup');
//     const container = document.querySelector('.whatsapp-float-container');
//     if (popup && popup.classList.contains('active')) {
//       if (!container.contains(e.target)) {
//         popup.classList.remove('active');
//       }
//     }
//   });
// }

// function toggleWhatsAppPopup() {
//   const popup = document.getElementById('whatsappPopup');
//   if (popup) {
//     popup.classList.toggle('active');
//   }
// }

// /* --- Booking / Consultation Modal --- */
// function initModal() {
//   const modal = document.getElementById('bookingModal');
//   if (!modal) return;

//   // Close when clicking on backdrop
//   modal.addEventListener('click', (e) => {
//     if (e.target === modal) {
//       closeBookingModal();
//     }
//   });

//   // Close on Escape key
//   document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape' && modal.classList.contains('active')) {
//       closeBookingModal();
//     }
//   });
// }

// function openBookingModal(serviceName = 'Consultation with Nichole') {
//   const modal = document.getElementById('bookingModal');
//   const title = document.getElementById('modalServiceTitle');
//   const select = document.getElementById('clientInterest');

//   if (modal) {
//     if (title) title.textContent = serviceName;
//     if (select && serviceName) {
//       // Try to match option
//       for (let i = 0; i < select.options.length; i++) {
//         if (select.options[i].text.includes(serviceName) || serviceName.includes(select.options[i].text)) {
//           select.selectedIndex = i;
//           break;
//         }
//       }
//     }
//     modal.classList.add('active');
//     modal.setAttribute('aria-hidden', 'false');
//     document.body.style.overflow = 'hidden';
//   }
// }

// function closeBookingModal() {
//   const modal = document.getElementById('bookingModal');
//   if (modal) {
//     modal.classList.remove('active');
//     modal.setAttribute('aria-hidden', 'true');
//     document.body.style.overflow = '';
//   }
// }

// function handleBookingSubmit(event) {
//   event.preventDefault();
//   const name = document.getElementById('clientName').value;
//   alert(`Thank you, ${name}! Your consultation inquiry has been sent to Nichole Andrews. We will reach out within 24 business hours.`);
//   closeBookingModal();
//   event.target.reset();
// }

// /* --- Lead Magnet / Freebie Form Handler --- */
// function handleFormSubmit(event) {
//   event.preventDefault();
//   const nameInput = document.getElementById('userName');
//   const emailInput = document.getElementById('userEmail');
//   const feedback = document.getElementById('formFeedback');

//   if (!nameInput || !emailInput || !feedback) return;

//   const name = nameInput.value.trim();
//   const email = emailInput.value.trim();

//   if (name && email) {
//     feedback.className = 'form-feedback success';
//     feedback.innerHTML = `✓ Thank you, <strong>${name}</strong>! Your Free Cancer Nutrition Guide is on its way to <strong>${email}</strong>.`;
//     nameInput.value = '';
//     emailInput.value = '';
//   } else {
//     feedback.className = 'form-feedback error';
//     feedback.textContent = 'Please enter both your name and email address.';
//   }
// }
document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  initMobileMenu();
  initNavHighlight();
  initWhatsApp();
});


/* ================================
   HEADER SCROLL
================================ */

function initHeaderScroll() {
  const header = document.getElementById("siteHeader");

  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}


/* ================================
   MOBILE MENU
================================ */

function initMobileMenu() {
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const mainNav = document.getElementById("mainNav");

  if (!toggleBtn || !mainNav) {
    console.log("Mobile menu elements not found");
    return;
  }

  toggleBtn.addEventListener("click", (event) => {
    event.stopPropagation();

    mainNav.classList.toggle("open");
    toggleBtn.classList.toggle("active");

    const isOpen = mainNav.classList.contains("open");

    toggleBtn.setAttribute("aria-expanded", isOpen);
  });


  // Close menu when a link is clicked
  const navLinks = mainNav.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      toggleBtn.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}


/* ================================
   ACTIVE NAVIGATION
================================ */

function initNavHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    const scrollPosition = window.pageYOffset + 200;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}


/* ================================
   WHATSAPP
================================ */

function initWhatsApp() {
  const chatTime = document.getElementById("chatTime");

  if (chatTime) {
    const now = new Date();

    chatTime.textContent = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  document.addEventListener("click", (e) => {
    const popup = document.getElementById("whatsappPopup");
    const container = document.querySelector(
      ".whatsapp-float-container"
    );

    if (
      popup &&
      popup.classList.contains("active") &&
      container &&
      !container.contains(e.target)
    ) {
      popup.classList.remove("active");
    }
  });
}


function toggleWhatsAppPopup() {
  const popup = document.getElementById("whatsappPopup");

  if (popup) {
    popup.classList.toggle("active");
  }
}