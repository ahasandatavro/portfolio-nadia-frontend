import { Project } from '@/types/project'
import ZiloChat from '@/assets/projects/zilochat.png'
import Automation_Script from '@/assets/projects/Automation_Script.png'
import Webpage_Communication from '@/assets/projects/Webpage_Communication.png'
import Ezbombs_Website_Revamp from '@/assets/projects/Ezbombs_Website_Revamp.png'
import Uder_User_App_Screenshot from '@/assets/projects/Uder_User_App_Screenshot.png'
import Nextjs_Page_Loading_Fix from '@/assets/projects/Nextjs_Page_Loading_Fix.png'

export const projects: Project[] = [
    {
        title: 'Web App Development for CRM Solutions',
        desc:
            'Developed a full-scale CRM web application featuring multi-role access, chatbot flows, broadcast automation, analytics, and real-time messaging.',
        img: ZiloChat,
        tags: ['React', 'Node.js', 'Prisma', 'PostgreSQL', 'WebSockets'],
        cta: 'Visit Live',
        href: 'https://www.zilochat.io/',
        projectDetails: {
            overview:
                'Built a complete CRM platform designed for marketing, sales, and support teams, integrating multi-number WhatsApp management, automation workflows, and analytics into one unified dashboard.',
            keyFeatures: [
                'Shared Team Inbox for multiple WhatsApp numbers with real-time collaboration.',
                'Multi-number support with unified contact hub and per-number analytics.',
                'Keyword-based and default automation for chat responses and workflows.',
                'Broadcast and bulk messaging using WhatsApp templates with segmentation.',
                'No-code chatbot builder with drag-and-drop conversational flow creation.',
                'Developer API, webhooks, and native integrations with other CRMs and systems.',
                'Comprehensive analytics for agent performance, chatbot interactions, and campaigns.',
                'Supports marketing, sales, and customer support operations across channels.'
            ],

            technicalStack: [
                'React.js + Node.js (Express) with Prisma ORM and PostgreSQL database',
                'Socket.io for real-time chat and notifications',
                'Agenda for background job scheduling and automation',
                'Cookie-based authentication with Google SSO',
                'Razorpay integration for payments',
                'SendGrid for email verification',
                'HubSpot and Google Sheets API integrations',
                'WhatsApp embedded signup integration',
                'Swagger for OpenAPI documentation',
                'Deployed on DigitalOcean (App + Space for storage)'
            ],
            integrations: [
                'Razorpay for payments',
                'SendGrid for email verification',
                'HubSpot API integration',
                'Google Sheets API integration',
                'WhatsApp embedded signup integration',
                'Swagger for OpenAPI documentation'
            ],
            deployment: 'DigitalOcean (App + Space for storage)'

        },
    }
    ,
    {
        title: 'React UI + Console Automation Script',
        desc: 'Built a Firefox-compatible console script to drive a React Material UI page: type, select, wait for widgets, click, and loop through inputs.',
        img: Automation_Script,
        tags: ['React', 'Material UI', 'JavaScript', 'Automation'],
        cta: 'View Project',
        href: 'https://www.coinglass.com/pro/futures/LiquidationHeatMap',
        projectDetails: {
            overview:
                'Implemented a browser-console function that accepts an array of strings, types each value into an input, waits for the listbox to populate, selects a matching option using String().includes(), waits for the widget to load, clicks a follow-up button, pauses, and repeats. Output begins with the word “Pink” per requirement.',
            keyFeatures: [
                'Console function accepts array of strings as input',
                'Types into input then waits until listbox options render',
                'Starts application output with the word “Pink”',
                'Selects valid option using simple String().includes() rule',
                'Waits for downstream JS widget to load after selection',
                'Clicks a secondary action button to proceed',
                'Applies a short delay before iterating to next value',
                'Loops through entire array with basic success reporting'
            ],
            integrations: [
                'React + Material UI page elements',
                'DOM events for typing and clicking',
                'Listbox/Autocomplete widget compatibility',
                'Optional MutationObserver for readiness checks'
            ],
            technicalStack: [
                'ReactJS',
                'JavaScript (ES6+)',
                'HTML',
                'Browser Console APIs',
                'MutationObserver',
                'setTimeout / async–await control flow',
                'Firefox compatibility testing'
            ],
            deployment:
                'Runs directly in the browser console on the target React page; no server deployment required.'
        },
    }
    ,
    {
        title: 'Webpage Communication with APK',
        desc:
            'Built real-time POS ↔︎ React Native APK communication using WebSockets and TypeScript, with device detection, order list, menu sync, and SMS triggers.',
        img: Webpage_Communication,
        tags: ['WebSockets', 'Node.js', 'TypeScript', 'PostgreSQL'],
        cta: 'View Project',
        href: 'https://aye-ai.org/aye-face/',
        projectDetails: {
            overview:
                'Implemented backend and POS simulator updates to reliably connect multiple APK devices via WebSockets and APIs. Added device discovery, synchronized menus between POS and APK for self-ordering, live order lists with Ready actions, and SMS notifications upon order completion/payment.',
            keyFeatures: [
                'Device detection & registration between POS simulator and APK',
                'Real-time sync of menu data across web and APK',
                'Live list of orders per device visible in POS',
                '“Ready” action on POS triggers SMS to customer for pickup',
                'APK-originated SMS trigger for completed orders & payment',
                'Queue-safe message handling with retries and acknowledgements',
                'Role-safe endpoints and guarded actions for retailers/operators'
            ],
            integrations: [
                'React Native APK self-ordering flow',
                'WebSocket channel for bi-directional updates',
                'REST API for menu and order synchronization',
                'SMS gateway for customer notifications'
            ],
            technicalStack: [
                'Node.js (TypeScript)',
                'WebSockets (Socket.IO or WS)',
                'PostgreSQL for orders/menu/state',
                'Express APIs',
                'JWT or key-based service auth',
                'Message queue semantics with retry/ack logic'
            ],
            deployment:
                'Containerized services behind Nginx on a VPS; environment-based configs and rolling restarts for zero/minimal downtime.'
        },
    },
    {
        title: "UI/Website Revamp and Production Deployment",
        desc: "Revamping UI for an existing production website and managing deployment process.",
        img: Ezbombs_Website_Revamp,
        tags: ["React", "Node.js", "PostgreSQL", "API Integration"],
        cta: "View Project",
        href: "https://ezbombs.com/",
        projectDetails: {
            "overview": "Revamped the UI of an existing production website, enhancing its user experience and implementing necessary front-end and back-end fixes. Managed the deployment process to transition the updates to the live environment seamlessly.",
            "keyFeatures": [
                "UI bug fixes for seamless user experience",
                "Website revamp based on Figma wireframes",
                "Front-end development with modern responsive design",
                "Back-end development for supporting new features",
                "Smooth production deployment on cloud instances"
            ],
            integrations: [
                "React for front-end development",
                "Node.js for server-side development",
                "PostgreSQL for database management",
                "API integrations for feature support"
            ],
            technicalStack: [
                "React",
                "Node.js",
                "PostgreSQL",
                "API Integration"
            ],
            deployment: "Deployed the revamped website on production cloud instances, ensuring a smooth transition and minimal downtime."
        }
    },
    {
        title: "Existing React Native Apps and Google Play Store Update",
        desc: "Maintaining and updating React Native apps, preparing and publishing on Google Play.",
        img: Uder_User_App_Screenshot,
        tags: ["React Native", "Android Studio", "Node.js", "AWS", "Laravel", "Google Play"],
        cta: "View Project",
        href: "https://apkcombo.com/uder-user/com.uderuser.almalak/",
        projectDetails: {
            "overview": "Maintained and updated React Native apps, prepared for deployment, and managed the process of publishing updates on the Google Play Store. Included several bug fixes, feature updates, and deployment tasks.",
            "keyFeatures": [
                "Login and registration with automatic OTP",
                "Admin dashboard for statistics and approval (Laravel & Namecheap)",
                "Google Map API and geolocation integration in both driver and user apps",
                "SDK update, app rename, and logo generation",
                "Bug fixes and iOS testing",
                "Play Store deployment and version updates",
                "Namecheap domain mapping",
                "AWS setup (EC2) for Laravel and Node.js",
                "Version upgrades, debugging, and store release preparation",
                "Localization for multi-language support"
            ],
            integrations: [
                "Google Map API for geolocation",
                "React Native for cross-platform development",
                "AWS EC2 for backend deployment",
                "Socket.io for real-time communication",
                "Laravel for backend and admin dashboard",
                "Gradle for building and releasing Android apps"
            ],
            technicalStack: [
                "React Native",
                "Android Studio",
                "Gradle",
                "Amazon EC2",
                "Node.js",
                "Socket.io",
                "Laravel"
            ],
            deployment: "Deployed updated apps on Google Play Store, ensuring smooth updates and integration with backend systems."
        }
    },
    {
        title: "Next.js Page Loading Issue with fs Module",
        desc: "Debugged server-side rendering issue with fs module in Next.js.",
        img: Nextjs_Page_Loading_Fix,
        tags: ["Next.js", "Node.js", "Webpack"],
        cta: "View Project",
        href: "https://whatsnxt.app/",
        projectDetails: {
            overview: "Debugged a server-side rendering issue in Next.js, where the page failed to load when using the fs module or any other local caching module for file writing. The issue was identified as being caused by webpack bundle settings.",
            keyFeatures: [
                "Debugged page loading issues with fs module",
                "Resolved server-side rendering issues",
                "Weekly development support for ongoing troubleshooting",
                "Assisted with webpack configuration for debugging"
            ],
            integrations: [
                "Next.js for server-side rendering",
                "Node.js for backend processing",
                "Webpack for bundling and optimization"
            ],
            technicalStack: [
                "Next.js",
                "Node.js",
                "Webpack"
            ],
            deployment: "Fixed the issue in the Next.js page loading process and ensured smooth deployment without disruptions."
        }
    }


]

export default projects