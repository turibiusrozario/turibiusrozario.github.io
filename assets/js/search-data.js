// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Personal projects, ranging from software and hardware to drones and larger projects. Some of these are tutorial-style, and some are just a fun watch.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications are in reverse-chronological order, with pdf files where available.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "My intended focus is in the fields related to renewable energy, climate change reversal, and sustainability. My current or previous research experiences are listed below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-crash-cam",
          title: 'Crash Cam',
          description: "Crashes happen. Here are a few.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/crash_cam/";
            },},{id: "projects-cube-3000",
          title: 'Cube 3000',
          description: "Oversized fidget cube that also vibrates.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cube_3000/";
            },},{id: "projects-dbf-2024-competition",
          title: 'DBF 2024 Competition',
          description: "Recap of the 2023-2024 DBF competition",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dbf_2024_competition/";
            },},{id: "projects-dbf-proposals",
          title: 'DBF Proposals',
          description: "Proposals for the AIAA DBF competition",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dbf_proposals/";
            },},{id: "projects-dovetail-firestyle",
          title: 'Dovetail Firestyle',
          description: "A cinematic/freestyle 6&quot; quadcopter.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dt_fs/";
            },},{id: "projects-getting-started-beginner-rc-plane",
          title: 'Getting Started: Beginner RC Plane',
          description: "Detailed tutorial on getting started to your first RC plane",
          section: "Projects",handler: () => {
              window.location.href = "/projects/getting_started_rc/";
            },},{id: "projects-not-crash-cam",
          title: 'Not Crash Cam',
          description: "Most times, I don&#39;t crash. Here are some of my highlights.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/not_crash_cam/";
            },},{id: "projects-suas-2025-competition",
          title: 'SUAS 2025 Competition',
          description: "Recap of the 2024-2025 SUAS competition",
          section: "Projects",handler: () => {
              window.location.href = "/projects/suas_2025_competition/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%75%72%69%62%69%75%73@%62%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/turibiusrozario", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-8888-8873", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=tzZvB3kAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://matrix.to/#/@tiberius_dreadnought:matrix.org", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
