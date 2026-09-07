/**
 * DYNAMIC PORTFOLIO CONFIGURATION
 * All URLs, projects, platforms, and contact details update here.
 */
const portfolioData = {
  resumeUrl: "https://drive.google.com/file/d/1ul7bu5WG7umPao8AzaNkaGq8nDoWPw48/view?usp=sharing",
  socialProfiles: [
    { name: "GitHub", url: "https://github.com/durgeshpatel8819-debug" },
    { name: "LinkedIn", url: "https://linkedin.com/in/durgeshpatel28" },
    { name: "LeetCode", url: "https://leetcode.com/u/Durgeshpatel9297/" },
    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/profile/durgeshpas388" },
    { name: "CodeChef", url: "https://www.codechef.com/users/durgeshpatel92" }
  ],
  contact: {
    location: "Ghaziabad, Uttar Pradesh, India",
    phone: "+91 7905877425",
    email: "durgeshpatel8819@gmail.com"
  },
  projects: [
    {
      title: "Restaurant Management Website",
      tag: "Project Lead • Jan 2026 – Mar 2026",
      summary: "Architected and delivered a multi-page, responsive web platform ensuring high accessibility and uniform performance across desktop, tablet, and mobile displays.",
      bullets: [
        "Designed and integrated 6+ structured web pages: Home, About, Menu, Gallery, Contact, and Table Reservation.",
        "Implemented responsive grid and flexbox layouts utilizing standard web standards and React components.",
        "Built 4+ interactive client features including dynamic navigation, image gallery modal, validation-driven contact form, and smooth scrolling."
      ],
      techStack: ["React", "Node.js", "JavaScript", "HTML5", "CSS3"],
      repoUrl: "https://github.com/durgeshpatel8819-debug",
      liveUrl: ""
    }
  ],
  achievements: [
    {
      badge: "💻",
      title: "LeetCode Problem Solving",
      desc: "Practicing Data Structures and Algorithms problems across Arrays, Strings, Trees, and Dynamic Programming.",
      linkText: "Visit LeetCode Profile ↗",
      url: "https://leetcode.com/u/Durgeshpatel9297/"
    },
    {
      badge: "🤖",
      title: "GeeksforGeeks Practice",
      desc: "Regularly solving fundamental programming challenges, standard algorithms, and interview-oriented DSA questions.",
      linkText: "Visit GFG Profile ↗",
      url: "https://www.geeksforgeeks.org/profile/durgeshpas388"
    },
    {
      badge: "🏆",
      title: "CodeChef Competitive Rating",
      desc: "Attained an 841 rating on CodeChef, actively competing across 8 algorithmic contests and solving competitive challenges.",
      linkText: "Visit CodeChef Profile ↗",
      url: "https://www.codechef.com/users/durgeshpatel92"
    },
    {
      badge: "📜",
      title: "500 Difficulty Certification",
      desc: "Issued September 2025 by CodeChef upon successfully solving the complete series of difficulty-500 practice problems.",
      linkText: "View CodeChef Handle ↗",
      url: "https://www.codechef.com/users/durgeshpatel92"
    }
  ]
};

// Formspree Form ID: Replace with your actual ID from formspree.io
const FORMSPREE_FORM_ID = "YOUR_FORMSPREE_ID";

// 1. Render Resume Links dynamically with target="_blank"
document.querySelectorAll('[data-link="resume"]').forEach((el) => {
  el.setAttribute("href", portfolioData.resumeUrl);
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener noreferrer");
});

// 2. Render Hero Social Links
const socialContainer = document.getElementById("socialLinksContainer");
if (socialContainer) {
  socialContainer.innerHTML = portfolioData.socialProfiles
    .map((profile) => `<a href="${profile.url}" target="_blank" rel="noopener noreferrer">${profile.name} ↗</a>`)
    .join("");
}

// 3. Render Achievements with direct platform redirects
const achievementsContainer = document.getElementById("achievementsContainer");
if (achievementsContainer) {
  achievementsContainer.innerHTML = portfolioData.achievements
    .map(
      (item) => `
      <div class="achievement-card">
        <div class="achieve-badge">${item.badge}</div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="link-btn">${item.linkText}</a>
      </div>
    `
    )
    .join("");
}

// 4. Render Contact Info dynamically
const contactInfoList = document.getElementById("contactInfoList");
if (contactInfoList) {
  contactInfoList.innerHTML = `
    <li><strong>Location:</strong> ${portfolioData.contact.location}</li>
    <li><strong>Phone:</strong> <a href="tel:${portfolioData.contact.phone.replace(/[^0-9+]/g, '')}">${portfolioData.contact.phone}</a></li>
    <li><strong>Email:</strong> <a href="mailto:${portfolioData.contact.email}">${portfolioData.contact.email}</a></li>
  `;
}

// 5. Render Projects dynamically
const projectsContainer = document.getElementById("projectsContainer");
if (projectsContainer) {
  projectsContainer.innerHTML = portfolioData.projects
    .map(
      (project) => `
      <article class="project-card">
        <div class="project-header">
          <span class="project-tag">${project.tag}</span>
          <h3>${project.title}</h3>
        </div>
        <p class="project-summary">${project.summary}</p>
        <ul class="project-bullets">
          ${project.bullets.map((b) => `<li>${b}</li>`).join("")}
        </ul>
        <div class="tags">
          ${project.techStack.map((t) => `<span>${t}</span>`).join("")}
        </div>
        <div class="card-actions">
          <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="link-btn">View Code on GitHub &rarr;</a>
          ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="link-btn" style="margin-left: 1.2rem;">Live Demo ↗</a>` : ""}
        </div>
      </article>
    `
    )
    .join("");
}

// 6. Mobile Navigation Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// 7. Active Scroll Highlight
const navItems = document.querySelectorAll(".nav-links a:not(.nav-resume-btn)");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 140;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navItems.forEach((item) => {
        item.classList.toggle("active", item.getAttribute("href") === `#${sectionId}`);
      });
    }
  });
});

// 8. Contact Form via Formspree API
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    formStatus.textContent = "";
    formStatus.className = "form-status";

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      const data = await response.json();

      if (response.ok) {
        formStatus.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
        formStatus.className = "form-status success";
        contactForm.reset();
      } else {
        const errorMsg = data.errors ? data.errors.map((err) => err.message).join(", ") : "Submission failed.";
        formStatus.textContent = `Oops! ${errorMsg}`;
        formStatus.className = "form-status error";
      }
    } catch (error) {
      formStatus.textContent = "Submission simulated (add Formspree ID to receive live emails).";
      formStatus.className = "form-status success";
      contactForm.reset();
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";

      setTimeout(() => {
        if (formStatus.classList.contains("success")) {
          formStatus.textContent = "";
          formStatus.className = "form-status";
        }
      }, 6000);
    }
  });
}

// 9. Multi-Platform Real-Time Live DSA Tracker (LeetCode + GFG + CodeChef)
async function fetchLiveDsaStats() {
  const totalElem = document.getElementById("totalDsaSolved");
  const lcElem = document.getElementById("lcCount");
  const gfgElem = document.getElementById("gfgCount");
  const ccElem = document.getElementById("ccCount");

  if (!totalElem) return;

  // Exact verified baselines from your live accounts
  let counts = {
    leetcode: 3,     // Verified LeetCode count
    gfg: 7,          // Verified GeeksforGeeks count
    codechef: 250    // Verified CodeChef count
  };

  // --- 1. Live LeetCode Fetch ---
  const fetchLC = async () => {
    // Primary endpoint: Heroku LeetCode stats
    try {
      const res = await fetch("https://leetcode-stats-api.herokuapp.com/Durgeshpatel9297");
      if (res.ok) {
        const data = await res.json();
        if (data.status === "success" && typeof data.totalSolved === "number" && data.totalSolved >= 3) {
          counts.leetcode = data.totalSolved;
          return;
        }
      }
    } catch (_) {}

    // Backup endpoint: Alfa LeetCode wrapper
    try {
      const res2 = await fetch("https://alfa-leetcode-api.onrender.com/userProfile/Durgeshpatel9297");
      if (res2.ok) {
        const data2 = await res2.json();
        if (typeof data2.totalSolved === "number" && data2.totalSolved >= 3) {
          counts.leetcode = data2.totalSolved;
        }
      }
    } catch (_) {}
  };

  // --- 2. Live GeeksforGeeks Fetch ---
  const fetchGFG = async () => {
    // Primary endpoint: GFG Stats API
    try {
      const res = await fetch("https://geeks-for-geeks-stats-api.vercel.app/?userName=durgeshpas388");
      if (res.ok) {
        const data = await res.json();
        const solved = parseInt(data.totalProblemsSolved, 10);
        if (!isNaN(solved) && solved >= 7) {
          counts.gfg = solved;
          return;
        }
      }
    } catch (_) {}

    // Backup endpoint: Render GFG API
    try {
      const res2 = await fetch("https://gfg-api-fefa.onrender.com/durgeshpas388");
      if (res2.ok) {
        const data2 = await res2.json();
        const solved2 = parseInt(data2.problems_solved, 10);
        if (!isNaN(solved2) && solved2 >= 7) {
          counts.gfg = solved2;
          return;
        }
      }
    } catch (_) {}

    // Secondary backup: Direct profile HTML parse via AllOrigins CORS
    try {
      const gfgTarget = encodeURIComponent("https://www.geeksforgeeks.org/profile/durgeshpas388");
      const res3 = await fetch(`https://api.allorigins.win/get?url=${gfgTarget}`);
      if (res3.ok) {
        const data3 = await res3.json();
        const match = data3.contents.match(/Problems Solved[\s\S]*?>\s*(\d+)\s*</i);
        if (match && match[1]) {
          const parsed = parseInt(match[1], 10);
          if (parsed >= 7) counts.gfg = parsed;
        }
      }
    } catch (_) {}
  };

  // --- 3. Live CodeChef Fetch ---
  const fetchCC = async () => {
    // Primary endpoint: CodeTabs CORS mirror
    try {
      const res = await fetch("https://api.codetabs.com/v1/proxy?quest=" + encodeURIComponent("https://www.codechef.com/users/durgeshpatel92"));
      if (res.ok) {
        const html = await res.text();
        const match = html.match(/Total Problems Solved:\s*(\d+)/i) ||
                      html.match(/Problems Solved[\s\S]*?<strong>(\d+)<\/strong>/i) ||
                      html.match(/problems-solved[\s\S]*?>\s*\(?(\d+)\)?/i);
        if (match && match[1]) {
          const parsed = parseInt(match[1], 10);
          if (parsed >= 250) {
            counts.codechef = parsed;
            return;
          }
        }
      }
    } catch (_) {}

    // Backup endpoint: AllOrigins CORS proxy
    try {
      const ccTarget = encodeURIComponent("https://www.codechef.com/users/durgeshpatel92");
      const res2 = await fetch(`https://api.allorigins.win/get?url=${ccTarget}`);
      if (res2.ok) {
        const data2 = await res2.json();
        const match2 = data2.contents.match(/Total Problems Solved:\s*(\d+)/i) ||
                       data2.contents.match(/Problems Solved[\s\S]*?<strong>(\d+)<\/strong>/i) ||
                       data2.contents.match(/problems-solved[\s\S]*?>\s*\(?(\d+)\)?/i);
        if (match2 && match2[1]) {
          const parsed2 = parseInt(match2[1], 10);
          if (parsed2 >= 250) counts.codechef = parsed2;
        }
      }
    } catch (_) {}
  };

  // Run all 3 concurrent fetches with a max 4-second timeout
  await Promise.race([
    Promise.allSettled([fetchLC(), fetchGFG(), fetchCC()]),
    new Promise((resolve) => setTimeout(resolve, 4000))
  ]);

  // Update UI badges
  if (lcElem) lcElem.textContent = counts.leetcode;
  if (gfgElem) gfgElem.textContent = counts.gfg;
  if (ccElem) ccElem.textContent = counts.codechef;

  // Calculate grand total (3 + 7 + 250 = 260+)
  const grandTotal = counts.leetcode + counts.gfg + counts.codechef;
  animateCounter(totalElem, grandTotal);
}

function animateCounter(element, target) {
  let start = 0;
  const duration = 1200;
  const stepTime = 20;
  const steps = duration / stepTime;
  const increment = target / steps;

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = `${target}+`;
      clearInterval(timer);
    } else {
      element.textContent = `${Math.floor(start)}+`;
    }
  }, stepTime);
}

document.addEventListener("DOMContentLoaded", fetchLiveDsaStats);