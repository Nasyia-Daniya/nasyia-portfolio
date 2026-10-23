const projects = [

  {
    title: "Small Business-Thrifted",
    category: ["business"],
    images: [
      "assets/projects/portfolio - Nasyia (8).png"
    ],
    description: `This small-scale thrift business provided an opportunity to examine how product information, presentation, and customer communication influence the selling process. I focused on organizing product information and understanding how product value could be communicated more effectively to the target audience. The experience helped me understand the connection between customer needs, product positioning, and day-to-day business activities.`
  },

  {
    title: "CareerPath",
    category: ["business", "uiux"],
    images: [
      "assets/projects/Home.png",
      "assets/projects/Assesment(1).png",
      "assets/projects/explore career I(1).png",
      "assets/projects/Learning path I.png"
    ],
    description: `CareerPath is a digital career discovery platform designed to bridge the gap between academic learning and industry skill benchmarks for early-career talents. Serving as both Chief Financial Officer (CFO) and Lead UI/UX Interface Designer, I developed the freemium revenue model, unit economics, and B2B partnership strategies while architecting intuitive mobile interfaces using Figma including skill radar scorecards, salary benchmark visualizers, and structured 60-minute assessment flows.`
  },

  {
    title: "Homify",
    category: ["uiux"],
    images: [
      "assets/projects/iPhone 16 Pro Max - 8.png",
      "assets/projects/iPhone 16 Pro Max - 66.png",
      "assets/projects/iPhone 16 Pro Max - 62.png",
      "assets/projects/iPhone 16 Pro Max - 26.png",
      "assets/projects/iPhone 16 Pro Max - 11.png",
      "assets/projects/iPhone 16 Pro Max - 9.png"
    ],
    description: `Homify is a digital platform concept focused on helping users explore home interior ideas and discover inspiration based on their preferences. The project was designed around the idea of making the process of finding suitable interior styles more convenient and visually engaging.`
  },

  {
    title: "NusantaraTrip",
    category: ["uiux"],
    images: [
      "assets/projects/Sign up(1).png",
      "assets/projects/Travel-Now Page(1).png",
      "assets/projects/Weathehr Card(1).png",
      "assets/projects/About Us Page(1).png",
      "assets/projects/Check Out Page(1).png",
      "assets/projects/Contact Page(1).png",
      "assets/projects/Destination Page(1).png",
      "assets/projects/Homepage(1).png",
      "assets/projects/Log in(1).png",
      "assets/projects/Payment(1).png"
    ],
    description: `NusantaraTrip explored the travel planning process from the user's perspective, particularly the challenge of finding and organizing relevant destination information. The project required identifying the information users need throughout their planning journey and structuring it into a more organized flow.`
  },

  {
    title: "Satu Jalan",
    category: ["uiux", "business"],
    images: [
      "assets/projects/Form-1.png",
      "assets/projects/Home(1).png",
      "assets/projects/Line 2.png",
      "assets/projects/Pembayaran.png",
      "assets/projects/Tiket.png",
      "assets/projects/Detail.png",
      "assets/projects/Form.png"
    ],
    description: `The project focuses on structuring a clear digital journey around the booking and transaction process.`
  },

  {
    title: "Copyin",
    category: ["uiux", "business"],
    images: [],
    description: `The Copyin project examined the e-commerce process from both customer and administrative perspectives. Key requirements were identified across product browsing, product information, ordering, transaction management, and business administration. These requirements were then connected through structured user flows and interfaces.`
  },

  {
    title: "Sales & Regional Performance Dashboard",
    category: ["data", "business"],
    images: [],
    description: `This project focuses on transforming complex transactional records into an interactive Microsoft Excel business intelligence dashboard to resolve delays in tracking regional sales contributions and purchasing behavior.`
  },

  {
    title: "E-Commerce Logistics & Shipping Expenditure Analytics",
    category: ["data", "business"],
    images: [],
    description: `Shipping expenditure was identified as a potential factor affecting e-commerce profitability. The analysis examined relationships between shipping costs, product price tiers, and payment channels to identify unusual spending patterns and potential inefficiencies.`
  },

  {
    title: "SmartCity Logistics Analytics Dashboard",
    category: ["data"],
    images: [],
    description: `Delivery delays were identified as an operational issue with potential impacts on logistics performance and revenue. The analysis examined delivery duration, revenue, delay counts, and weather conditions to identify relationships that could explain operational bottlenecks.`
  },

  {
    title: "AI Impact on Global Workforce Analytics",
    category: ["data"],
    images: [],
    description: `The analysis examined how AI adoption may influence workforce displacement, skill retention, and sector growth across different countries. Multi-country data was structured across time and geography to identify relevant patterns and relationships.`
  },

  {
    title: "Academic Enterprise Database & Course Management System",
    category: ["oracle", "business"],
    images: [
      "assets/projects/admin.png",
      "assets/projects/admin-1.png",
      "assets/projects/admin-2.png",
      "assets/projects/admin-3.png"
    ],
    description: `The project began with operational issues in academic administration, including paper-based processes, data duplication, and inefficient information retrieval. These business needs were translated into structured data requirements through entity relationships and database normalization.`
  },

  {
    title: "Creative Business — Slarasoap",
    category: ["business"],
    images: [],
    description: `Slarasoap is a sustainable personal care startup that upcycles spent coffee grounds and banana peel waste into premium exfoliator soaps, directly aligning with SDG 12 (Responsible Consumption & Production) and SDG 13 (Climate Action).`
  }

];


const grid = document.getElementById("projectGrid");


function renderProjects(filter = "all") {

  grid.innerHTML = "";

  const filtered =
    filter === "all"
      ? projects
      : projects.filter(project =>
          project.category.includes(filter)
        );


  filtered.forEach((project, index) => {

    const card = document.createElement("article");

    card.className = "project-card";


    const images = project.images.length
      ? project.images
      : [];


    let imageHTML = "";

    if (images.length) {

      imageHTML = `
        <div class="project-media">

          <img
            class="project-image"
            src="${images[0]}"
            alt="${project.title}"
            data-index="0"
          >

          ${
            images.length > 1
              ? `
                <button
                  class="carousel-btn prev"
                  data-direction="-1"
                >‹</button>

                <button
                  class="carousel-btn next"
                  data-direction="1"
                >›</button>

                <div class="dots">
                  ${images.map((_, i) =>
                    `<span class="${i === 0 ? "active" : ""}"></span>`
                  ).join("")}
                </div>
              `
              : ""
          }

        </div>
      `;

    } else {

      imageHTML = `
        <div class="project-media empty-media">
          <span>PROJECT</span>
        </div>
      `;

    }


    card.innerHTML = `

      ${imageHTML}

      <div class="project-content">

        <p class="project-number">
          ${String(index + 1).padStart(2, "0")}
        </p>

        <h3>${project.title}</h3>

        <p>${project.description}</p>

        <button class="read-project">
          View Project ↗
        </button>

      </div>

    `;


    grid.appendChild(card);


    if (images.length > 1) {

      const img = card.querySelector(".project-image");
      const dots = card.querySelectorAll(".dots span");

      let current = 0;


      function changeImage(direction) {

        current += direction;

        if (current < 0)
          current = images.length - 1;

        if (current >= images.length)
          current = 0;


        img.src = images[current];


        dots.forEach(dot =>
          dot.classList.remove("active")
        );

        dots[current].classList.add("active");
      }


      card.querySelector(".prev")
        ?.addEventListener("click", () =>
          changeImage(-1)
        );

      card.querySelector(".next")
        ?.addEventListener("click", () =>
          changeImage(1)
        );

    }

  });

}


renderProjects();


/* FILTER */

document.querySelectorAll(".filter").forEach(button => {

  button.addEventListener("click", () => {

    document.querySelectorAll(".filter")
      .forEach(btn =>
        btn.classList.remove("active")
      );

    button.classList.add("active");

    renderProjects(button.dataset.filter);

  });

});


/* MOBILE NAV */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});


document.querySelectorAll("#nav a").forEach(link => {

  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });

});


/* CERTIFICATE LIGHTBOX */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");


document.querySelectorAll(".certificate img").forEach(image => {

  image.addEventListener("click", () => {

    lightboxImage.src = image.src;

    lightbox.classList.add("show");

  });

});


document.querySelectorAll(".view-cert").forEach(button => {

  button.addEventListener("click", () => {

    const image =
      button.closest(".certificate")
      .querySelector("img");

    lightboxImage.src = image.src;

    lightbox.classList.add("show");

  });

});


closeLightbox.addEventListener("click", () => {

  lightbox.classList.remove("show");

});


lightbox.addEventListener("click", event => {

  if (event.target === lightbox) {
    lightbox.classList.remove("show");
  }

});


/* SCROLL ANIMATION */

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }

      });

    },
    {
      threshold: 0.12
    }
  );


document
  .querySelectorAll(".section, .project-card, .certificate")
  .forEach(element =>
    observer.observe(element)
  );
