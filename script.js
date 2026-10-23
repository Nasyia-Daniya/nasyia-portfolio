:root {

    --cream: #fbf7f2;
    --white: #fffdf9;

    --pink: #b85b7b;
    --pink-soft: #f7e8ed;

    --text: #27242a;
    --muted: #777178;

    --line: #e7ddd9;

}


/* ================= RESET ================= */

* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {

    margin: 0;

    background:
        radial-gradient(
            circle at top left,
            #fffaf5 0,
            var(--cream) 45%,
            #f9f2ed 100%
        );

    color: var(--text);

    font-family:
        "DM Sans",
        sans-serif;

}

body.modal-open {
    overflow: hidden;
}

button,
a {
    font-family: inherit;
}


/* ================= HEADER ================= */

.header {

    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    z-index: 100;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 22px 6%;

    background:
        rgba(251,247,242,.88);

    backdrop-filter:
        blur(15px);

    border-bottom:
        1px solid rgba(0,0,0,.04);

}

.logo {

    color: var(--text);

    text-decoration: none;

    font-size: 14px;

    font-weight: 700;

}

.logo span {

    display: block;

    margin-top: 2px;

    color: var(--pink);

    font-size: 8px;

    letter-spacing: .15em;

}

.header nav {

    display: flex;

    gap: 27px;

}

.header nav a {

    color: var(--text);

    text-decoration: none;

    font-size: 11px;

    font-weight: 600;

}

.header nav a:hover {
    color: var(--pink);
}

.menu-btn {
    display: none;

    border: none;

    background: none;

    font-size: 22px;
}


/* ================= GENERAL ================= */

.section {

    width:
        min(1170px, 88%);

    margin:
        auto;

    padding:
        125px 0;

}

.section-heading {
    margin-bottom: 35px;
}

.section-label {

    margin: 0;

    color: var(--pink);

    font-size: 10px;

    font-weight: 700;

    letter-spacing: .16em;

}

.section-heading h2 {

    margin:
        12px 0 10px;

    font-family:
        "Playfair Display",
        serif;

    font-size:
        clamp(48px, 6vw, 76px);

    line-height:
        .98;

    letter-spacing:
        -.03em;

}

.section-heading h2 i {

    color: var(--pink);

    font-weight:
        500;

}

.section-description {

    max-width: 650px;

    color: var(--muted);

    font-size: 13px;

    line-height: 1.7;

}


/* ================= HERO ================= */

.hero {

    min-height:
        100vh;

    display:
        grid;

    grid-template-columns:
        1.1fr .9fr;

    gap:
        80px;

    align-items:
        center;

    padding-top:
        150px;

}

.eyebrow {

    color:
        var(--pink);

    font-size:
        10px;

    font-weight:
        700;

    letter-spacing:
        .16em;

}

.hero h1 {

    margin:
        15px 0 30px;

    font-family:
        "Playfair Display",
        serif;

    font-size:
        clamp(62px, 8vw, 105px);

    line-height:
        .84;

}

.hero h1 span {
    color:
        var(--pink);
}

.hero-description {

    max-width:
        650px;

    color:
        var(--muted);

    font-size:
        14px;

}

.interest-tags {

    display:
        flex;

    flex-wrap:
        wrap;

    gap:
        7px;

    margin-top:
        28px;

}

.interest-tags span {

    padding:
        8px 13px;

    background:
        #e9efc7;

    border-radius:
        30px;

    font-size:
        10px;

    font-weight:
        600;

}

.hero-photo-placeholder {

    height:
        470px;

    border:
        1px solid var(--line);

    border-radius:
        28px;

    background:
        #eee8e3;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    color:
        #a69d99;

    font-size:
        10px;

    letter-spacing:
        .12em;

}


/* ================= EDUCATION ================= */

.education-card {

    display:
        grid;

    grid-template-columns:
        1fr 190px;

    background:
        var(--white);

    border:
        1px solid var(--line);

    border-radius:
        25px;

    overflow:
        hidden;

}

.education-main {

    padding:
        40px 45px;

}

.mini-label {

    margin:
        0 0 10px;

    color:
        var(--pink);

    font-size:
        9px;

    font-weight:
        700;

    letter-spacing:
        .14em;

}

.education-main h3 {

    margin:
        0 0 8px;

    font-family:
        "Playfair Display",
        serif;

    font-size:
        31px;

}

.education-date {

    margin:
        0 0 18px;

    color:
        var(--pink);

    font-size:
        12px;

    font-weight:
        600;

}

.education-main > p:last-child {

    max-width:
        700px;

    color:
        var(--muted);

    font-size:
        13px;

}

.education-meta {

    display:
        flex;

    flex-direction:
        column;

    align-items:
        center;

    justify-content:
        center;

    background:
        var(--pink-soft);

    border-left:
        1px solid var(--line);

}

.education-meta span {

    color:
        var(--muted);

    font-size:
        10px;

}

.education-meta strong {

    margin-top:
        5px;

    color:
        var(--pink);

    font-family:
        "Playfair Display",
        serif;

    font-size:
        38px;

    font-weight:
        600;

}

.education-meta small {

    color:
        var(--muted);

    font-size:
        9px;

}


/* ================= FILTER ================= */

.project-filters {

    display:
        flex;

    flex-wrap:
        wrap;

    gap:
        8px;

    margin-bottom:
        25px;

}

.filter {

    padding:
        8px 15px;

    border:
        1px solid var(--line);

    border-radius:
        30px;

    background:
        var(--white);

    color:
        var(--text);

    font-size:
        10px;

    font-weight:
        600;

    cursor:
        pointer;

    transition:
        .2s ease;

}

.filter:hover {

    border-color:
        var(--pink);

    color:
        var(--pink);

}

.filter.active {

    background:
        var(--pink);

    color:
        white;

    border-color:
        var(--pink);

}


/* ================= PROJECT GRID ================= */

.project-grid {

    display:
        grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap:
        18px;

}


/* ================= PROJECT CARD ================= */

.project-card {

    overflow:
        hidden;

    background:
        rgba(255,253,249,.96);

    border:
        1px solid var(--line);

    border-radius:
        22px;

    transition:
        transform .25s ease,
        box-shadow .25s ease;

}

.project-card:hover {

    transform:
        translateY(-5px);

    box-shadow:
        0 15px 35px
        rgba(100,70,80,.10);

}


/* COVER */

.project-cover {

    width:
        100%;

    aspect-ratio:
        16 / 10;

    padding:
        8px;

}

.cover-placeholder {

    width:
        100%;

    height:
        100%;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    border-radius:
        17px;

    background:
        #eee8e3;

    color:
        #aaa19c;

    font-size:
        9px;

    letter-spacing:
        .13em;

}


/* CARD CONTENT */

.project-card-content {

    padding:
        18px 20px 20px;

}

.project-category {

    margin:
        0 0 7px;

    color:
        var(--pink);

    font-size:
        8px;

    font-weight:
        700;

    letter-spacing:
        .12em;

}

.project-card h3 {

    margin:
        0;

    font-family:
        "Playfair Display",
        serif;

    font-size:
        22px;

    line-height:
        1.1;

}


/* SKILLS ON CARD */

.card-skills {

    display:
        flex;

    flex-wrap:
        wrap;

    gap:
        5px;

    margin-top:
        15px;

}

.card-skills span {

    padding:
        5px 9px;

    border-radius:
        20px;

    background:
        var(--pink-soft);

    color:
        #a34e6c;

    font-size:
        8px;

    font-weight:
        600;

}


/* VIEW BUTTON */

.open-project {

    width:
        100%;

    margin-top:
        18px;

    padding:
        10px 0;

    display:
        flex;

    align-items:
        center;

    justify-content:
        space-between;

    border:
        none;

    border-top:
        1px solid var(--line);

    background:
        transparent;

    color:
        var(--text);

    font-size:
        10px;

    font-weight:
        700;

    cursor:
        pointer;

}

.open-project b {

    width:
        30px;

    height:
        30px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    border-radius:
        50%;

    background:
        var(--pink);

    color:
        white;

    font-size:
        15px;

    transition:
        .2s ease;

}

.open-project:hover b {

    transform:
        translate(2px,-2px);

}


/* ================= PROJECT MODAL ================= */

.project-modal {

    position:
        fixed;

    inset:
        0;

    z-index:
        500;

    display:
        none;

    align-items:
        center;

    justify-content:
        center;

    padding:
        30px;

}

.project-modal.show {

    display:
        flex;

}

.modal-overlay {

    position:
        absolute;

    inset:
        0;

    background:
        rgba(45,35,40,.60);

    backdrop-filter:
        blur(8px);

}


.modal-content {

    position:
        relative;

    z-index:
        2;

    width:
        min(1000px, 95vw);

    max-height:
        90vh;

    overflow:
        auto;

    display:
        grid;

    grid-template-columns:
        1.05fr .95fr;

    background:
        var(--white);

    border:
        1px solid var(--line);

    border-radius:
        26px;

    box-shadow:
        0 30px 80px
        rgba(30,20,25,.20);

}


/* MODAL CLOSE */

.modal-close {

    position:
        absolute;

    top:
        18px;

    right:
        20px;

    z-index:
        5;

    width:
        34px;

    height:
        34px;

    border:
        1px solid var(--line);

    border-radius:
        50%;

    background:
        rgba(255,255,255,.9);

    color:
        var(--text);

    font-size:
        20px;

    cursor:
        pointer;

}


/* MODAL GALLERY */

.modal-gallery {

    padding:
        25px;

}

.gallery-placeholder {

    height:
        100%;

    min-height:
        500px;

    border-radius:
        18px;

    background:
        #eee8e3;

    display:
        flex;

    flex-direction:
        column;

    align-items:
        center;

    justify-content:
        center;

    color:
        #aaa19c;

}

.gallery-placeholder span {

    font-size:
        10px;

    letter-spacing:
        .13em;

}

.gallery-placeholder small {

    margin-top:
        5px;

    font-size:
        9px;

}


/* MODAL INFO */

.modal-info {

    padding:
        65px 45px 45px 20px;

}

.modal-category {

    margin:
        0 0 8px;

    color:
        var(--pink);

    font-size:
        9px;

    font-weight:
        700;

    letter-spacing:
        .13em;

}

.modal-info h2 {

    margin:
        0 0 25px;

    font-family:
        "Playfair Display",
        serif;

    font-size:
        40px;

    line-height:
        1;

}

.modal-section {

    margin-top:
        25px;

}

.modal-section h4 {

    margin:
        0 0 8px;

    font-size:
        11px;

}

.modal-section p {

    margin:
        0;

    color:
        var(--muted);

    font-size:
        12px;

    line-height:
        1.75;

}


/* MODAL SKILLS */

.modal-skills {

    display:
        flex;

    flex-wrap:
        wrap;

    gap:
        6px;

}

.modal-skills span {

    padding:
        6px 10px;

    border-radius:
        20px;

    background:
        var(--pink-soft);

    color:
        #a34e6c;

    font-size:
        9px;

    font-weight:
        600;

}


/* PROJECT LINK */

.project-link {

    color:
        var(--pink);

    font-size:
        11px;

    font-weight:
        700;

}

.project-link.disabled {

    color:
        #aaa;

    pointer-events:
        none;

}


/* ================= CERTIFICATE ================= */

.certificate-placeholder {

    min-height:
        230px;

    display:
        flex;

    flex-direction:
        column;

    align-items:
        center;

    justify-content:
        center;

    border:
        1px dashed var(--line);

    border-radius:
        22px;

    color:
        var(--muted);

}

.certificate-placeholder p {

    margin:
        0 0 5px;

    font-family:
        "Playfair Display",
        serif;

    font-size:
        25px;

}

.certificate-placeholder span {

    font-size:
        11px;

}


/* ================= SKILLS ================= */

.skills-grid {

    display:
        grid;

    grid-template-columns:
        1fr 1fr;

    gap:
        18px;

}

.skill-box {

    padding:
        35px;

    background:
        var(--white);

    border:
        1px solid var(--line);

    border-radius:
        22px;

}

.tools-box {

    background:
        var(--pink-soft);

}

.skill-tags,
.tools-list {

    display:
        flex;

    flex-wrap:
        wrap;

    gap:
        7px;

    margin-top:
        20px;

}

.skill-tags span,
.tools-list span {

    padding:
        8px 11px;

    border-radius:
        20px;

    background:
        white;

    font-size:
        10px;

    font-weight:
        600;

}


/* ================= CONTACT ================= */

.contact-card {

    padding:
        60px;

    background:
        var(--pink-soft);

    border-radius:
        25px;

}

.contact-card h2 {

    margin:
        10px 0 20px;

    font-family:
        "Playfair Display",
        serif;

    font-size:
        clamp(55px, 7vw, 90px);

    line-height:
        .85;

}

.contact-card h2 i {

    color:
        var(--pink);

}

.contact-card > p:not(.section-label) {

    max-width:
        600px;

    color:
        var(--muted);

    font-size:
        13px;

}

.contact-links {

    display:
        flex;

    flex-wrap:
        wrap;

    gap:
        20px;

    margin-top:
        25px;

}

.contact-links a {

    color:
        var(--text);

    font-size:
        11px;

    font-weight:
        700;

}

.contact-links a:hover {

    color:
        var(--pink);

}


/* ================= FOOTER ================= */

footer {

    width:
        88%;

    margin:
        auto;

    padding:
        30px 0 40px;

    display:
        flex;

    justify-content:
        space-between;

    border-top:
        1px solid var(--line);

    color:
        var(--muted);

    font-size:
        10px;

}

footer strong {
    color:
        var(--text);
}


/* ================= RESPONSIVE ================= */

@media (max-width: 900px) {

    .header nav {

        display:
            none;

        position:
            absolute;

        top:
            70px;

        left:
            6%;

        right:
            6%;

        padding:
            20px;

        flex-direction:
            column;

        background:
            var(--white);

        border:
            1px solid var(--line);

        border-radius:
            18px;

    }

    .header nav.open {
        display:
            flex;
    }

    .menu-btn {
        display:
            block;
    }

    .hero {

        grid-template-columns:
            1fr;

    }

    .project-grid {

        grid-template-columns:
            repeat(2, 1fr);

    }

    .modal-content {

        grid-template-columns:
            1fr;

    }

    .modal-gallery {

        padding:
            20px;

    }

    .gallery-placeholder {

        min-height:
            280px;

    }

    .modal-info {

        padding:
            25px 30px 35px;

    }

}


@media (max-width: 600px) {

    .section {

        width:
            88%;

        padding:
            90px 0;

    }

    .project-grid,
    .skills-grid {

        grid-template-columns:
            1fr;

    }

    .education-card {

        grid-template-columns:
            1fr;

    }

    .education-meta {

        padding:
            20px;

        border-left:
            none;

        border-top:
            1px solid var(--line);

    }

    .education-meta strong {

        font-size:
            30px;

    }

    .contact-card {

        padding:
            35px;

    }

    .project-modal {

        padding:
            12px;

    }

}
