export const db_html = [
    // first page
    {
        title: "Introduction",
        page: [
            {
                title: "HTML Overview",
                content: [
                    {
                        desc: "HTML stands for Hyper Text Mark-up Language, which is the most widely used language on the Web to develop web pages. HTML was created by Berners-Lee in late 1991 but \"HTML 2.0\" was the first standard HTML specification which was published in 1995."
                    },
                    {
                        desc: "Thus, HTML defines the structure of web pages by defining the elements, tags, attributes, DOM events, etc, which are utilized to render text-based content with the help of hyperlinks to other text that the reader can immediately access over the Browser. The latest version of HTML is HTML5."
                    },
                    {
                        points: [
                            "\".htm\" and \".html\" redirect here.",
                            "HyperText Markup Language or HTML",
                            "HTML was created by Tim Berners-Lee in 1991.",
                            "HTML is the language of the web, used to create websites.",
                            "The latest version of HTML is HTML5."
                        ]
                    },
                    {
                        title: "What is HTML?"
                    },
                    {
                        desc: "HTML (HyperText Markup Language) was created by Tim Berners-Lee in 1991 as a standard for creating web pages. It's a markup language used to structure content on the web, defining elements like headings, paragraphs, links, and images. HTML forms the backbone of web content. In layman's terms, HTML is like the skeleton of a website. It's a set of instructions that tells a web browser how to display text, images, videos, and other elements on a webpage. Think of it as the building blocks that create the structure and look of a website."
                    },
                    {
                        title: "Features of HTML"
                    },
                    {
                        points: [
                            "Structure: HTML provides a structured way to organize content on a web page using elements such as headings, paragraphs, lists, tables, and more.",
                            "Semantic Markup: HTML allows you to use semantic elements to describe the meaning of content, making it more accessible to users and search engines. Semantic elements include `<header>`, `<footer>`, `<nav>`, `<article>`, `<section>`, `<aside>`, `<main>`, etc.",
                            "Hyperlinks: HTML enables you to create hyperlinks that allow users to navigate between different web pages and resources on the internet. Hyperlinks are created using the `<a>` (anchor) element.",
                            "Images and Multimedia: HTML supports the embedding of images, audio, video, and other multimedia content into web pages using elements like `<img>`, `<audio>`, `<video>`, etc.",
                            "Images and Multimedia: HTML supports the embedding of images, audio, video, and other multimedia content into web pages using elements like `<img>`, `<audio>`, `<video>`, etc.",
                            "Forms: HTML provides form elements (<form>, <input>, <select>, <textarea>, <button>, etc.) for collecting user input, such as text, selections, and file uploads.",
                            "Accessibility: HTML includes features to make web content more accessible to users with disabilities, such as semantic markup, ARIA (Accessible Rich Internet Applications) attributes, and the ability to specify alternative text for images.",
                            "Compatibility: HTML is supported by all modern web browsers and is compatible with various devices, including desktops, laptops, tablets, and smartphones.",
                            "Easy to Learn: HTML has a relatively simple syntax, making it easy for beginners to learn and use. It follows a tag-based structure where elements are enclosed within angle brackets `< >`.",
                            "Interoperability: HTML can be easily integrated with other web technologies like CSS (Cascading Style Sheets) for styling and JavaScript for interactivity, making it a powerful tool for web development.",
                            "Standardization: HTML is maintained and developed by the World Wide Web Consortium (W3C) and WHATWG (Web Hypertext Application Technology Working Group), ensuring that it remains a standardized and widely adopted technology for creating web content."
                        ]
                    },
                    {
                        title: "Why the Term HyperText & Markup Language?"
                    },
                    {
                        desc: `The term 'Hypertext Markup Language' is composed of two main words: 'hypertext' and 'markup language.' 'Hypertext' refers to the linking of text with other documents, while 'markup language' denotes a language that utilizes a specific set of tags.
                        Thus, HTML is the practice of displaying text, graphics, audio, video etc. in a certain way using special tags.`
                    },
                    {
                        title: "The syntax of HTML (Hypertext Markup Language)"
                    },
                    {
                        code: ["<tagname>Content goes here</tagname>"]
                    },
                    {
                        code: [`<!DOCTYPE html>`,
                            "<html>",
                            "<head>",
                                "<title>Document Title</title>",
                                "<meta charset=\"UTF-8\">",
                                "<link rel=\"stylesheet\" href=\"styles.css\">",
                            "</head>",
                            "<body>",
                                "<h1>Hello, World!</h1>",
                                "<p>This is a paragraph.</p>",
                            "</body>",
                            "</html>"
                        ]
                    },
                    {
                        title: "History of HTML:"
                    },
                    {
                        points: [
                            "In 1989, Tim Berners-Lee established the World Wide Web (www), and in 1991, he created the first version of HTML.",
                            "From 1995 to 1997, further work was done to develop and refine different versions of HTML.",
                            "In 1999, a committee was organized that standardized HTML 4.0, a version still used by many today.",
                            "The latest and most stable version of HTML is 5, also known as HTML5."
                        ]
                    }
                ]
            },
            {
                title: "HTML Working",
                content: [
                    {
                        desc: "Frontend and backend are two crucial components in web development. Frontend encompasses the visible aspects of a website or application that users directly interact with, such as tables, images, and buttons. It's constructed using languages like HTML, CSS, and JavaScript. On the flip side, the backend operates behind the scenes, managing data storage and processing when users interact with the frontend. Backend development typically employs languages like Python, Ruby, and Java. In essence, frontend constitutes the user-facing interface, while the backend handles the underlying functionality."
                    },
                    {
                        title:"How do websites work?"
                    },
                    {
                        desc: `When we want to access any information on the internet, we search for it using a web browser. The web browser retrieves the content from web servers, where it is stored in the form of HTML documents.

                        An HTML document is created by writing code with specific tags in a code editor of your choice. The document is then saved with the '.html' extension. Once saved, the browser interprets the HTML document, reads it, and renders the web page.`
                    },
                    {
                        image: {
                            image: "/image/tutorials/html/render.png",
                            height: 500,
                            width: 1000
                        }
                    },
                    {
                        desc: "The text editor has the HTML code of a website. This website can now be viewed in a beautifully rendered format using a computer program known as a web browser."
                    },
                    {
                        title: "What is a Web Browser?"
                    },
                    {
                        desc: "A web browser is a software application used to access, view, and interact with information on the World Wide Web. It allows users to navigate between web pages, search for content, and consume various types of multimedia such as text, images, videos, and interactive elements. The browser's core component is the rendering engine, responsible for interpreting and displaying web content. Features like tabbed browsing, bookmarks, search engine integration, security measures, and cross-platform compatibility enhance the user experience. With web browsers, users can seamlessly explore the vast array of content available on the internet, making them an essential tool for accessing online information and services."
                    },
                    {
                        title: "What is an HTML Document?"
                    },
                    {
                        desc: "An HTML document, short for Hypertext Markup Language document, is a file containing structured code that defines the content, structure, and layout of a web page. It serves as the foundation for displaying information on the internet. HTML documents are composed of elements, tags, and attributes that instruct web browsers on how to render and present content to users. These documents typically start with a document type declaration (<!DOCTYPE html>) followed by the `<html>` element, which encapsulates the entire document. Within the `<html>` element, there are two main sections: the `<head>` section, which contains metadata such as the page title, character encoding, and links to external resources like CSS and JavaScript files, and the `<body>` section, which contains the actual content of the web page, such as text, images, links, and multimedia elements. HTML documents may also include comments (<!-- -->), which provide annotations or explanations within the code but are not displayed in the rendered page. Overall, an HTML document serves as the building block for creating and presenting content on the web, allowing developers to structure and organize information in a standardized format that browsers can interpret and display to users."
                    },
                    {
                        title: "What is a Rendered Page:"
                    },
                    {
                        desc: "A rendered page refers to the visual representation of a web page that is displayed to the user within their web browser. Rendering is the process by which the web browser interprets and transforms the HTML, CSS, and JavaScript code of a web page into the visual layout that users can interact with."
                    },
                    {
                        desc: "When a user visits a web page, their browser receives the HTML document from the web server and begins parsing the markup. The browser then applies the styles defined in the CSS files to the HTML elements, determining factors such as the font, color, size, and positioning of the content. Additionally, any JavaScript code included in the page may execute, altering the page's structure or behavior dynamically."
                    },
                    {
                        title: "How does a basic website work?"
                    },
                    {
                        points: [
                            "Client Request: The process begins when a user opens their web browser (the client) and enters the URL (Uniform Resource Locator) of the website they want to visit or clicks on a link. The browser sends a request to the server hosting the website.",
                            "DNS Resolution: The browser first performs a DNS (Domain Name System) lookup to translate the human-readable domain name (e.g., www.example.com) into an IP address, which identifies the server hosting the website. This step allows the browser to locate the server on the internet.",
                            "Server Processing: Once the browser has obtained the IP address, it sends an HTTP (Hypertext Transfer Protocol) request to the server. The server receives the request and processes it, determining which web page or resource the client is requesting.",
                            "Content Retrieval: The server retrieves the requested web page from its storage, which could be a static HTML file or a dynamically generated page assembled from a database or server-side scripts (e.g., PHP, Python, Ruby). If the page contains additional resources such as CSS stylesheets, JavaScript files, images, or multimedia content, the server may also retrieve these resources.",
                            "Data Transfer: The server sends the HTTP response back to the client (web browser) over the internet. This involves transferring data packets across various network devices and infrastructure."
                        ]
                    },
                    {
                        title: "How does a browser work?"
                    },
                    {
                        points: [
                            "User Input: The process begins when a user opens the web browser and enters a URL (Uniform Resource Locator) into the address bar or clicks on a link. This input triggers the browser to initiate a request to the server hosting the requested web page.",
                            "HTTP Request: The browser sends an HTTP (Hypertext Transfer Protocol) request to the server, specifying the URL of the web page or resource the user wants to access. This request is sent over the internet using the TCP/IP (Transmission Control Protocol/Internet Protocol) network protocol suite.",
                            "Rendering Engine: Upon receiving the HTTP response, the browser's rendering engine begins parsing the HTML content of the web page. It constructs the Document Object Model (DOM) tree, which represents the structure of the web page, and the CSS Object Model (CSSOM), which represents the styles applied to the elements.",
                            "Layout and Rendering: The rendering engine calculates the layout of the web page based on the DOM and CSSOM, determining the size, position, and styling of each element. It then paints the visual representation of the web page on the screen, incorporating text, images, forms, buttons, and other elements.",
                            "JavaScript Execution: If the web page includes JavaScript code, the browser's JavaScript engine executes the scripts, modifying the DOM and CSSOM, and adding interactivity and dynamic behavior to the page.",
                            "Security and Privacy: The browser includes security features to protect users from malicious websites, phishing attempts, and malware. This may include features such as sandboxing, pop-up blockers, SSL/TLS encryption, and privacy settings."
                        ]
                    }
                ]
            },
            {
                title: "HTML Installation",
                content: [
                    {
                        desc: "Let's get our hands dirty and start preparing to write some code. In this tutorial, we will install VS Code and some related extensions for faster and more efficient HTML development."
                    },
                    {
                        title: "What are HTML Editors?"
                    },
                    {
                        desc: "HTML Editors are tools to write and run (in some cases) an HTML code. There are several HTML Editors available to the user (paid and unpaid both)."
                    },
                    {
                        title: "Tools needed to make an HTML page:"
                    },
                    {
                        title: "1. Text Editors:"
                    },
                    {
                        points: [
                            "Notepad++: A lightweight text editor with syntax highlighting and support for various programming languages, including HTML.",
                            "Sublime Text: A versatile text editor known for its speed and customization options, with support for plugins and syntax highlighting.",
                            "Atom: A modern and customizable text editor developed by GitHub, offering features like syntax highlighting, code folding, and built-in package manager."
                        ]
                    },
                    {
                        title: "2. IDEs (Integrated Development Environments):"
                    },
                    {
                        points: [
                            "Visual Studio Code: A free, open-source code editor developed by Microsoft, featuring built-in Git integration, IntelliSense, debugging support, and a rich extension ecosystem.",
                            "JetBrains WebStorm: A powerful IDE specifically designed for web development, with advanced features for HTML, CSS, JavaScript, and more.",
                            "Adobe Dreamweaver: A professional web design and development tool with a visual editor, code editor, and built-in FTP client for managing websites."
                        ]
                    },
                    {
                        title: "3. Online Editors:"
                    },
                    {
                        points: [
                            "CodePen: An online community for sharing and showcasing HTML, CSS, and JavaScript code snippets, with a live preview feature and collaboration options.",
                            "JSFiddle: An online playground for web developers to test and share HTML, CSS, and JavaScript code in real-time, with support for various frameworks and libraries."
                        ]
                    },
                    {
                        title: "4. Browser:"
                    },
                    {
                        desc: "HTML tags are not displayed by browsers; instead, they are read and interpreted to render the web page. In a web browser, HTML structures are displayed in a styled and visually appealing form. In this tutorial, we are using Google Chrome. Other commonly used browsers include Chromium, Firefox, Safari on Mac, and Microsoft Edge."
                    },
                    {
                        title: "Installation & Setup of Visual Studio Code for HTML:"
                    },
                    {
                        desc: "We will install and set up HTML to optimize its utility for creating web pages. Additionally, we'll install extensions in Visual Studio Code to enhance its functionality. If you're unsure about which editor to use, you can confidently start with Visual Studio Code. You won't regret it; it's one of the best free code editors available in the market."
                    },
                    {
                        points: [
                            "Search for \"Visual Studio Code download\" on Google",
                            "Download Visual Studio Code for your Operating System. I am using Windows so I will install it for Windows Here is a quick video showing VS Code Installation:"
                        ]
                    },
                    {
                        link: "https://code.visualstudio.com/download"
                    },
                    {
                        title: "Here is a quick video showing VS Code Installation:"
                    },
                    {
                        video: {
                            video: "/videos/tutorials/html/download-vscode.mp4"
                        }
                    },
                    {
                        title: "Live Server Extension"
                    },
                    {
                        desc: "In addition, we'll be installing the Live Server extension in our Visual Studio Code editor to view live reload pages. The Live Server extension is used to launch a local development server with a live reload feature for HTML pages. Here is a quick video showing the installation of the VS Code 'Live Server' extension:"
                    },
                    {
                        video: {
                            video: "/videos/tutorials/html/install-live-server.mp4"
                        }
                    },
                    {
                        desc: "Your VS Code Editor Installition Complete!!!"
                    }
                ]
            },
            {
                title: "HTML Execution",
                content: [
                    {
                        desc: "Let's mark this as an important milestone: the creation of your first website! And what's a better way to start than with the traditional \"Hello, World!\"?"
                    },
                    {
                        title: "overview"
                    },
                    {
                        points: [
                            "How to create a folder in VS Code Editor?",
                            "How to Create HTML Page?",
                            "How to execute HTML first Command?"
                        ]
                    },
                    {
                        title: "Setting Up Your VS Code"
                    },
                    {
                        desc: "If you haven't already set up your environment, let's begin by opening Visual Studio Code (VS Code)."
                    },
                    {
                        link: "https://code.visualstudio.com/download"
                    },
                    {
                        points: [
                            "First step: Go to side left bar in VS Code Editor.",
                            "And Click File icon (Explorer) > Short Cut Key (Ctrl+Shift+E)",
                            "Second step: Click on (New File) icon on SideBar Top",
                            "Third step: Write File name (index.html) or (index.htm) or (any.html)"
                        ]
                    },
                    {
                        video: {
                            video: "/videos/tutorials/html/open-vs-code.mp4"
                        }
                    },
                    {
                        title: "Pasting the Code"
                    },
                    {
                        desc: "Now that your file is ready, copy the following code and paste it into your \"index.html\" file."
                    },
                    {
                        code: [
                            "<!DOCTYPE html>",
                            "<html lang=\"en\">",
                            "<head>",
                            `<meta charset="UTF-8">`,
                            `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
                            `<title>Document</title>`,
                            "</head>",
                            "<body>Hello world!</body>",
                            "</html>"
                        ]
                    },
                    {
                        title: "Going Live using the \"live server\" extension"
                    },
                    {
                        desc: "Your VS Code Bottom Right Side > In (Go Live) Button Show and Click Go Live Button in (index.html) file. Then, open your browser and show your html text e.g (Hello world!)"
                    },
                    {
                        desc: "But, Go Live Button not show then, install (live server) extension in vs code. Go to HTML Installation Page > Live Server Extension and install (live server)"
                    },
                    {
                        title: "Your First Website is Live!"
                    },
                    {
                        desc: "Hello world! > show in browser!"
                    }
                ]
            },
            {
                title: "HTML Error and problems",
                content: [
                    {
                        desc: "If you are facing any error and problems in `.html`, then follow this points."
                    },
                    {
                        title: "1. Go Live Button and live server not show?"
                    },
                    {
                        desc: "If problems is show, Then:"
                    },
                    {
                        video: {
                            video: "/videos/tutorials/html/install-live-server.mp4"
                        }
                    },
                    {
                        title: "2. HTML tag Suggestions not show or HTML tag Extension not working."
                    },
                    {
                        desc: "Then, check in your vs code."
                    },
                    {
                        points: [
                            "In, VS Code, Bottom Right Side (show) `html, javascrpit, etc.` text",
                            "Hover this text button, popup a box (Select Language Mode)",
                            "And Click (Select Language Mode)",
                            "Open a text box and write/Search html",
                            "and click html button/ press Enter",
                            "Your HTML Mode Activate!"
                        ]
                    }
                ]
            },
            {
                title: "HTML Page Structure",
                content: [
                    {
                        desc: "An HTML document is structured using a set of nested tags. Each tag is enclosed within <…> angle brackets and acts as a container for content or other HTML tags. Let's take a look at a basic HTML document structure:"
                    },
                    {
                        code: [
                            "<!DOCTYPE html>",
                            "<html lang=\"en\">",
                            "<head>",
                            `<title>Document</title>`,
                            "</head>",
                            "<body>",
                            "<!-- content -->",
                            "</body>",
                            "</html>"
                        ]
                    },
                    {
                        title: "DOCTYPE Declaration"
                    },
                    {
                        desc: "The DOCTYPE declaration, often positioned at the top of an HTML document, serves as a crucial instruction that defines the document type and version. Placed before the `<html>` tag, this declaration guides web browsers in interpreting and rendering the content accurately. By specifying the type of markup language and its version, the DOCTYPE declaration ensures consistency and compatibility across various browsers and validators. For instance, in modern HTML documents, the DOCTYPE declaration for HTML5 typically appears as `<!DOCTYPE html>`, signaling browsers to render the document according to the HTML5 standard. This declaration not only influences rendering rules but also plays a vital role in maintaining backward compatibility with older browsers and validators, facilitating the creation of accessible and interoperable web content."
                    },
                    {
                        title: "HTML Root Element"
                    },
                    { code: ["<html>"] },
                    { 
                        desc: "The <html> tag is the root element that encapsulates all the content on the page."
                    },
                    { code: ["</html>"] },
                    {
                        desc: "The </html> tag marks the end of the <html> section."
                    },
                    {
                        title: "Head Section"
                    },
                    { code: ["<head>"] },
                    {
                        desc: "The <head> tag contains metadata and links to external resources like CSS and JavaScript files."
                    },
                    { code: ["</head>"] },
                    {
                        desc: "The </head> tag marks the end of the <head> section."
                    },
                    {
                        title: "Title Tag"
                    },
                    {
                        code: ["<title>Document</title>"]
                    },
                    {
                        desc: "The <title> tag sets the title of the web page, which is displayed in the browser's title bar or tab."
                    },
                    {
                        title: "Body Selection"
                    },
                    { code: ["<body>"] }, 
                    {
                        desc: "The <body> tag contains the visible content of the web page. This is where text, images, and other elements go."
                    },
                    { code: ["</body>"] },
                    {
                        desc: "The </body> tag marks the end of the visible content of the web page."
                    },
                    {
                        title: "Important Points!"
                    },
                    {
                        points: [
                            "The <!DOCTYPE html> tag specifies that the document is an HTML5 document.",
                            "The <html lang=\"en\"> tag defines the document to be in English.",
                            "The <head> section contains metadata and the title of the webpage, which appears in the browser's title bar.",
                            "The <body> section contains the content that will be displayed on the webpage.",
                            "The h1 and p are two types of tags. We will learn about more tags in the later section."
                        ]
                    },
                    {
                        title: "HTML Document Structure:"
                    },
                    {
                        desc: "The following image provides a visual representation of the HTML structure:"
                    },
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/html-page-structure/html-tag-structure-image.png",
                            width: 500,
                            height: 500
                        }
                    },
                    {
                        title: "Add Content in HTML and show in web browser:"
                    },
                    { desc: "Consider this html code:" },
                    {
                        code: [
                            "<!DOCTYPE html>",
                            "<html lang=\"en\">",
                            "<head>",
                            `<title>Document</title>`,
                            "</head>",
                            "<body>",
                            "<h2>This is a heading.</h2>",
                            "<p>This is a paragraph.</p>",
                            "</body>",
                            "</html>"
                        ]
                    },
                    {
                        desc: "Below is an image showing how this HTML document will be rendered in a web browser:"
                    },
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/html-page-structure/html-headings.png",
                            width: 500,
                            height: 500
                        }
                    }
                ]
            },
            {
                title: "HTML Tags",
                content: [
                    {
                        desc: "HTML tags are the fundamental elements of HTML used for defining the structure of the document., tags are essential elements that help you achieve that. An HTML tag acts as a container for content or other HTML tags. Tags are words enclosed within < and > angle brackets. They serve as keywords that instruct the web browser on how to format and display the content."
                    },
                    {
                        title: "Commonly used tags in HTML"
                    },
                    {
                        desc: "Here are some commonly used tags in HTML. These are the only tags used 70% of the time"
                    },
                    {
                        title: "Document Structure Tags"
                    },
                    {
                        points: [
                            "<!DOCTYPE html>: Specifies the document type.",
                            "<html>: Encloses the entire HTML document.",
                            "<head>: Contains meta-information and links to scripts and stylesheets.",
                            "<body>: Contains the content of the web page."
                        ]
                    },
                    {
                        title: "Metadata Tags"
                    },
                    {
                        points: [
                            "<title>: Sets the title of the web page.",
                            "<meta>: Provides metadata such as character set, author, and viewport settings.",
                            "<link>: Links external resources like stylesheets."
                        ]
                    },
                    {
                        title: "Text Formatting Tags"
                    },
                    {
                        points: [
                            "<p>: Paragraph.",
                            "<h1>, <h2>, <h3>, <h4>, <h5>, <h6>: Headings.",
                            "<strong>: Strong emphasis (typically bold).",
                            "<em>: Emphasis (typically italic).",
                            "<br>: Line break.",
                            "<hr>: Horizontal rule.",
                            "<center>: Text in center.",
                            "<pre>: Preformatted remove extra space."
                        ]
                    },
                    {
                        title: "List Tags"
                    },
                    {
                        points: [
                            '<ul>: Unordered list.',
                            "<ol>: Ordered list.",
                            "<li>: List item."
                        ]
                    },
                    {
                        title: "Hyperlink and Media Tags"
                    },
                    {
                        points: [
                            "<a>: Anchor (used for links).",
                            "<img>: Image.",
                            "<audio>: Audio content.",
                            "<video>: Video content.",
                            "<source>: media sources for browser compatibility."
                        ]
                    },
                    {
                        title: "Form Tags"
                    },
                    {
                        points: [
                            "<form>: Form.",
                            "<input>: Input field.",
                            "<textarea>: Text area.",
                            "<button>: Button.",
                            "<select>: Dropdown list.",
                            "<option>: Options within a <select> or <datalist>."
                        ]
                    },
                    {
                        title: "Table Tags"
                    },
                    {
                        points: [
                            "<table>: Table.",
                            "<tr>: Table row.",
                            "<td>: Table data cell.",
                            "<th>: Table header cell.",
                            "<thead>: Table header group.",
                            "<tbody>: Table body group.",
                            "<tfoot>: Table footer group."
                        ]
                    },
                    {
                        title: "Semantic Tags"
                    }, 
                    {
                        points: [
                            "<header>: Header section.",
                            "<footer>: Footer section.",
                            "<article>: Article.",
                            "<section>: Section.",
                            "<nav>: Navigation.",
                            "<aside>: Sidebar content."
                        ]
                    },
                    {
                        title: "Scalable Vector Graphics (SVG)"
                    },
                    {
                        points: [
                            "<svg>: The root SVG container element.",
                            "<rect>: Defines a rectangle.",
                            "<circle>: Defines a circle.",
                            "<ellipse>: Defines an ellipse.",
                            "<line>: Defines a line segment.",
                            "<polyline>: Defines a series of connected straight lines.",
                            "<path>: Defines a custom path using commands such as moveto, lineto, curveto, etc.",
                            "<text>: Defines text content.",
                            "<tspan>: Defines a subtext element within a <text> element.",
                            "<g>: Groups SVG elements together for styling and manipulation.",
                            "<defs>: Defines reusable elements or objects.",
                            "<symbol>: Defines a graphical symbol that can be reused.",
                            "<use>: References a <symbol> element to reuse it.",
                            "<image>: Embeds raster images within SVG.",
                            "<clipPath>: Defines a clipping path.",
                            "<mask>: Defines an SVG mask.",
                            "<linearGradient>: Defines a linear gradient.",
                            "<radialGradient>: Defines a radial gradient.",
                            "<pattern>: Defines a pattern fill.",
                            "<filter>: Defines image effects like blurring, shadows, etc."
                        ]
                    },
                    {
                        title :"Canvas Tag"
                    },
                    {
                        points: [
                            "<canvas>: A container for graphics",
                            "graphics, animations, and interactive content using JavaScript."
                        ]
                    }
                ]
            },
            {
                title: "HTML Elements",
                content: [
                    {
                        desc: "Beginners often get confused between HTML elements, nested elements, and tags. Let's clarify the difference by understanding each one step-by-step."
                    },
                    {
                        title: "What is an HTML Element?"
                    },
                    {
                        desc: "An HTML element is a complete set that consists of a start tag (or opening tag), content, and an end tag (or closing tag).",
                    },
                    {
                        title : "HTML Element = Start Tag + Content + End Tag"
                    },
                    {
                        desc: "For example:"
                    },
                    {
                        code: ["<h1>This is our first heading</h1>"]
                    },
                    {
                        desc: "In this example, <h1> is the start tag, \"This is our first heading\" is the content, and </h1> is the end tag. Together, they form an HTML element."
                    },
                    {
                        title: "What is a Nested HTML Element?"
                    },
                    {
                        desc: "A nested HTML element is an HTML structure where one element is placed inside another element. The enclosing element is often referred to as the \"parent,\" while the enclosed element is called the \"child.\""
                    },
                    {
                        title: "Nested HTML Element = One HTML Element Inside Another HTML Element"
                    },
                    {
                        desc:"For example:"
                    },
                    {
                        code: ["<h1><b>This is our first heading</b></h1>"]
                    },
                    {
                        desc :"In this example, the <b> element (child) is nested inside the <h1> element (parent)."
                    },
                    {
                        title: "HTML Tags vs. Elements"
                    },
                    {
                        title: "HTML Tags"
                    },
                    {
                        desc: "HTML tags are the markers that define the start and end of an element. They are wrapped in angle brackets, like <h2> and </h2>."
                    },
                    {
                        title: "HTML Elements"
                    },
                    {
                        desc: "An HTML element includes an opening tag, content, and a closing tag, forming a complete set. For example, <h2>This is a heading.</h2>."
                    },
                    {
                        title: "Key Takeaways"
                    },
                    {
                        points: [
                            "Tags set boundaries; elements include tags plus content.",
                            "Tags come in pairs (most of the time), whereas elements may include nested elements.",
                            "Self-closing or void elements like <br /> are still considered elements, even though they don't have a closing tag or content.",
                            "Elements can be \"parent\" or \"child\" when nested, but tags cannot."
                        ]
                    }
                ]
            },
            {
                title: "HTML Attributes",
                content: [
                    {
                        desc: "HTML attributes are used to define the characteristics of an HTML element. They are placed within the element's opening tag and consist of two parts: the name and the value."
                    },
                    {
                        points: [
                            "Name: Specifies the property for that element.",
                            "Value: Sets the value of that property for the element."
                        ]
                    },
                    {
                        title: "Types of HTML Attributes"
                    },
                    {
                        desc: "There are three main types of HTML attributes:"
                    },
                    {
                        points: [
                            "Core Attributes: These are basic attributes that can be applied to most HTML elements. Examples include id, class, and style.",
                            "Internationalization Attributes: These attributes help adapt the document to different languages and regions. Examples include lang and dir.",
                            "Generic Attributes: These attributes provide additional information about the element but don't necessarily affect its appearance or behavior. Examples include data-* attributes for storing custom data private to the page or application."
                        ]
                    },
                    {
                        desc:"Core attributes are some of the most widely used attributes in HTML. There are four main types:"
                    },
                    {
                        points: [
                            "id", "class", "title", "style"
                        ]
                    },
                    {
                        title :"ID Attribute"
                    },
                    {
                        desc: "The ID attribute is used to assign a unique identifier to an HTML element. Each element with an ID has its own unique identity, similar to how each individual has a unique identity. Multiple elements cannot have the same ID. Example:"
                    },
                    {
                        code: [
                            "<p id=\"html\">This is an HTML tutorial</p>",
                            `<p id="javascript">This is a JavaScript tutorial</p>`
                        ]
                    },
                    {
                        desc: "In this example, the ID attribute helps to distinguish between two paragraphs by having different values: \"html\" and \"javascript\"."
                    },
                    {
                        title: "Class Attribute"
                    },
                    {
                        desc: "The class attribute is used to associate an HTML element with a particular class, typically for styling or JavaScript manipulation. Unlike the ID attribute, the class attribute is not unique, and multiple elements can share the same class."
                    },
                    {
                        title: "Title Attribute"
                    },
                    {
                        desc: "The title attribute provides additional information about an element and is often displayed as a tooltip when the mouse hovers over it. Example:"
                    },
                    {
                        code: ["<h4 title=\"hello, motto\">Title attribute</h4>"]
                    },
                    { desc: "Output:" },
                    {
                        video: {
                            video: "/videos/tutorials/html/tooltip-using-title.mp4",
                        }
                    },
                    {
                        title: "Style Attribute"
                    },
                    {
                        desc: "The style attribute allows for inline styling of HTML elements. It is used in conjunction with CSS properties to directly style individual elements within the HTML code."
                    },
                    {
                        title: "Case Sensitivity",
                        desc: "The HTML standard is flexible about the case of attribute names, allowing them to be written in either uppercase or lowercase, such as \"title\" or \"TITLE.\" However, for best practices and compatibility with stricter document types like XHTML, the W3C recommends using lowercase attributes."
                    }
                ]
            },
            {
                title: "HTML Comments",
                content: [
                    {
                        desc: "In HTML, you can create comments using the `<!-- -->` syntax. Comments are used to add notes or explanations within the HTML code that are not displayed in the rendered webpage."
                    },
                    {
                        title: "Key Points About HTML Comments"
                    },
                    {
                        points: [
                            "Comments are ignored by web browsers.",
                            "They aid in code readability and documentation.",
                            "HTML comments are denoted by <!-- content -->.",
                            "The shortcut key for commenting out code is Ctrl + /.",
                            "HTML supports both single-line and multi-line comments."
                        ]
                    },
                    {
                        title: "Types of Comments in HTML"
                    },
                    {
                        desc: "HTML primarily supports two types of comments:"
                    },
                    {
                        title: "Single-line comments are contained within one line. They are useful for short annotations. Example:"
                    },
                    {
                        code: ["<!-- This is a single-line comment -->"]
                    },
                    {
                        title: "Multi-line Comments"
                    },
                    {
                        code: {
                            type: "none",
                            code: ["<!--", "This is a multi-line comment.", "It spans multiple lines.", "-->"]
                        }
                    }
                ]
            },
            {
                title: "HTML Id & Classes",
                content: [
                    {
                        desc: "HTML offers multiple ways to select and style elements. Two of the most commonly used selectors are IDs and Classes. This blog explores what they are, how to use them, and their differences."
                    },
                    {
                        title: "What is an ID?"
                    },
                    {
                        desc: "An ID is an attribute, a unique identifier assigned to only one HTML element within a page. It is often used for unique styling and JavaScript manipulations."
                    },
                    {
                        code: ["<div id=\"myUniqueID\">This is a div with an ID.</div>"]
                    },
                    {
                        title: "What are Classes?"
                    },
                    {
                        desc: "The class attribute lets you give the same name to multiple HTML elements. That way, you can easily change their look or behavior all at once. Classes are not unique and can be assigned to multiple elements. They are generally used for applying the same styles or behaviors to a group of elements."
                    },
                    {
                        code: ["<div class=\"myClass\">This is a div with a class.</div>",
                        "<p class=\"myClass\">This is a paragraph with the same class.</p>"]
                    },
                    {
                        title :"The Style Tag"
                    },
                    {
                        desc: "The style tag in HTML is used to include embedded CSS (Cascading Style Sheets) within an HTML document. It is commonly placed within the <head> section of the HTML file, although it can technically be used in the <body> as well. The style tag allows you to define the look and feel of various HTML elements on the page, including their colors, sizes, margins, and other visual styles."
                    },
                    { desc: "Here's a simple example:" },
                    {
                        code: [
                            "<!DOCTYPE html>",
                            "<html>",
                            "<head>",
                            "<style>",
                            "/* CSS rules go here */",
                            `p { color: blue; font-size: 18px; }`,
                            `.highlight { background-color: yellow; }`,
                            "</style>",
                            "</head>",
                            "<body>",
                            "<p>This is a blue paragraph.</p>",
                            "<p class=\"highlight\">This paragraph has a yellow background.</p>",
                            "</body>",
                            "</html>"
                        ]
                    },
                    {
                        desc: "In this example, we have targetted the second paragraph by its class name in CSS. The style tag is used to add CSS right into HTML. We will learn about CSS and selectors later in the CSS tutorial"
                    },
                    {
                        title: "Using IDs and Classes in CSS"
                    },
                    {
                        desc: "In CSS, elements with IDs are selected using a hash (#) symbol before the ID, and elements with classes are selected using a dot (.) before the class name."
                    },
                    {
                        code: [
                            "/* CSS for ID */",
                            `#myUniqueID { background-color: yellow; }`,
                            `/* CSS for Class */`,
                            `.myClass { font-size: 18px; }`
                        ]
                    },
                    {
                        title: "Differences Between IDs and Classes"
                    },
                    {
                        points: [
                            "Uniqueness: IDs are unique, and classes can be reused.",
                            "JavaScript: IDs are often used for JavaScript operations.",
                            "Styling: Both can be used for styling, but IDs have higher specificity."
                        ]
                    },
                    {
                        title: "Conclusion"
                    },
                    {
                        desc: "Understanding the difference between IDs and Classes is crucial for effective web development. While IDs are for unique elements, classes are for grouping elements."
                    }
                ]
            }
        ]
    },
    // second page
    {
        title: "HTML Basic Tags",
        page: [
            {
                title: "Skeletal Tags",
                content: [
                    {
                        desc: `Let's discuss some basic HTML tags known as "skeletal tags".`
                    },
                    {
                        title: "<html> Tag: \"Root of an HTML Page\""
                    },
                    { desc: "Syntax:" },
                    {
                        code: ["<html>", "<!-- Content -->", "</html>"]
                    },
                    {
                        desc: "The <html> tag is the root element that wraps all the content on the page. It generally contains two main sections: the header (<head>...</head>) and the body (<body>...</body>)."
                    },
                    {
                        title: `<head> Tag: "Header Part of an HTML Page"`
                    },
                    { desc: "Syntax:" },
                    {
                        code: ["<head>", "<!-- Header Content -->", "</head>"]
                    },
                    {
                        desc: "The <head> tag contains meta information and the title of the document. While the title appears in the browser tab, meta information is often used for SEO purposes."
                    },
                    {
                        title: `<title> Tag: "Title Part of an HTML Page"`
                    },
                    { desc: "Syntax:" },
                    {
                        code: ["<body>", "<!-- Body Content -->", "</body>"]
                    },
                    {
                        desc: "The <body> tag encloses the main content of the page, and everything within this tag is displayed in the browser.:"
                    },

                ]
            },
            {
                title: "Heading Tags",
                content: [
                    {
                        desc: "Heading tags in HTML are used to define headings or titles for sections of a webpage. There are six levels of heading tags, from <h1> to <h6>, where <h1> represents the most important heading and <h6> represents the least important."
                    },
                    {
                        desc: "The <h1> tag is generally used for the main title and is the largest and most prominent, while <h2> to <h6> tags are used for subheadings, further subheadings and so on... Proper use of heading tags not only improves the readability of a web page but also optimizes it for search engine ranking in Google"
                    },
                    {
                        desc: "Here's how you can use heading tags in HTML:"
                    },
                    {
                        code: [
                            "<h1>This is a Heading 1</h1>",
                            "<h2>This is a Heading 2</h2>",
                            "<h3>This is a Heading 3</h3>",
                            "<h4>This is a Heading 4</h4>",
                            "<h5>This is a Heading 5</h5>",
                            "<h6>This is a Heading 6</h6>"
                        ]
                    },
                    {
                        desc: "In terms of visual hierarchy, <h1> is typically used for the main title of the webpage or the most important section, while <h2> through <h6> are used for subheadings within that section, with decreasing importance."
                    },
                    {
                        points: [
                            "Search engines use heading tags to understand the structure and hierarchy of the content on a webpage, so it's important to use them appropriately and semantically."
                        ]
                    }
                ]
            },
            {
                title: "Paragraph Tag",
                content: [
                    {
                        desc: "To create well-structured text in your HTML document, the <p> tag is essential for defining paragraphs."
                    },
                    {
                        title: "<p> Tag: Defining a Paragraph in HTML"
                    },
                    {
                        desc: "The <p> tag is used to format text into distinct paragraphs. Each paragraph element is separated by automatic empty line spaces above and below the content, providing a clear visual separation. The tag must be closed with its corresponding </p> tag."
                    },
                    {
                        code: [ "<p>Paragraph content</p>" ]
                    },
                    {
                        title: "Attributes and Styling"
                    },
                    {
                        desc: "While the <p> tag is straightforward, you can enhance its functionality using various attributes like class or id for CSS styling. You can also include inline styles using the style attribute."
                    },
                    {
                        code: [
                            `<p class="example" style="color: blue;"> This is a styled paragraph. </p>`
                        ]
                    },
                    {
                        title: "<p>: strong and em"
                    },
                    {
                        code: [
                            "<p>This is a paragraph with",
                            "<strong>bold text</strong> and",
                            "<em>italic text</em>.",
                            "</p>"
                        ]
                    },
                    {
                        desc: "Paragraph tags are commonly used to structure the textual content of a webpage, such as articles, descriptions, or sections of information. They help maintain readability and organization by separating blocks of text into distinct paragraphs."
                    }
                ]
            },
            {
                title: "Horizontal Line Tag",
                content: [
                    {
                        desc: "To add a horizontal line in your HTML document, the <hr> tag comes in handy."
                    },
                    {
                        title: "How to use the <hr> tag?"
                    },
                    {
                        desc: "The syntax of the hr tag looks something like this."
                    },
                    {
                        code: ["<hr>"]
                    },
                    {
                        desc: "The <hr> tag is an empty or self-closing tag, meaning it doesn't require a closing tag. It serves as a visual separator, dividing different sections of your document with a horizontal line."
                    }
                ]
            },
            {
                title :"Line Break Tag",
                content: [
                    {
                        desc: "To insert a line break in your HTML document, you can utilize the <br> tag. <br> tag is used to insert line breaks in text or paragraphs"
                    },
                    {
                        desc: "The syntax for the <br> tag looks like this:"
                    },
                    {
                        code: ["<br>"]
                    },
                    {
                        desc: "The <br> tag is commonly referred to as an empty or self-closing tag, meaning it doesn't require a closing tag. This tag is responsible for breaking text lines or separating paragraphs. When implemented, it automatically moves the text following the tag to the next line."
                    },
                    {
                        desc: "It's particularly useful in formatting textual content where line breaks are essential for readability or visual layout. For instance, it can be used in addresses, poems, or song lyrics to preserve the original line structure."
                    }
                ]
            },
            {
                title: "Anchor Tag",
                content: [
                    {
                        desc: "Links are fundamental to navigating the web. In HTML, links are created using the <a> tag, also known as the Anchor tag."
                    },
                    {
                        title: "Key Characteristics of HTML Links"
                    },
                    {
                        points: [
                            "Specified by the <a> tag.",
                            "Also known as hyperlinks.",
                            "Used to link one document to another.",
                            "Includes a closing tag </a>."
                        ]
                    },
                    {
                        title: "Syntax of HTML Links"
                    },
                    {
                        code: [`<a href="Your specified path">content</a>`]
                    },
                    {
                        title: "Essential Attributes of the Anchor Tag"
                    },
                    { desc: "HTML links primarily use two attributes:" },
                    {points: [
                        "href attribute: Defines the URL the link points to.",
                        "target attribute: Specifies where to open the linked document."
                    ]},
                    {
                        title: "Target Attribute Values"
                    },
                    {
                        points: [
                            "_blank: Opens the linked document in a new window or tab.",
                            "_top: Opens document in the full body of the window.",
                            "_self: Opens document in the same window or tab (default behavior).",
                            "_parent: Opens the linked document in the parent frame."
                        ]
                    },
                    {
                        title: "Linking to Specific Page Sections"
                    },
                    {
                        desc: "To link to a specific section of a webpage, you can:"
                    },
                    {
                        points: [
                            "Use the name or id attribute of the target section.",
                            "Use a hyperlink with a hash (#) followed by the target id or name."
                        ]
                    },
                    {
                        title: "Example"
                    },
                    {
                        desc: "Let's say you have a long webpage with multiple sections, and you want to create a link at the top that, when clicked, takes the user directly to a specific section further down the page. You can do this using HTML links that target specific sections."
                    },
                    {
                        code: [
                            "<body>", 
                            "<!-- Link at the top -->",
                            `<a href="#gardening-tips">Go to Gardening Tips</a>`,
                            `<!-- Some content -->`,
                            `<p>Here is some other content...</p>`,
                            "</body>"
                        ]
                    }
                ]
            },
            {
                title: "Image Tag",
                content: [
                    {
                        desc: "Images play a crucial role in enhancing web pages by providing a visual context that complements textual content. In HTML, the <img> tag is used to embed images into web pages."
                    },
                    {
                        title: "Basic Syntax for Embedding Images"
                    },
                    {
                        desc: "This is how the syntax to embed an image in html looks like:"
                    },
                    {
                        code: [`<img src="image's path" />`]
                    },
                    {
                        title: "Key Features of the <img> Tag"
                    },
                    {
                        points: [
                            "It's a self-closing tag, meaning it doesn't require a corresponding closing tag.",
                            `Commonly used attributes include the "alt" attribute for image descriptions and the "src" attribute for specifying the image location.`,
                            "Supports various image formats including PNG, JPEG, JPG, and GIF."
                        ]
                    },
                    {
                        title: "Setting Mandatory Attributes"
                    },
                    {
                        desc: `The "src" and "alt" attributes are essential for the proper functioning of the <img> tag.`
                    },
                    {
                        points: [
                            "src attribute: Specifies the path to the image file.",
                            "alt attribute: Provides a text description for the image."
                        ]
                    },
                    {
                        code: [`<img src="images/profile_picture.jpg" alt="Profile Picture" />`]
                    },
                    {
                        desc: "Note: To find the image's location, right-click on the image, go to properties, and check the location field."
                    },
                    {
                        title: "Setting Image Dimensions"
                    },
                    {
                        desc: `Although dimensions can be set using the "width" and "height" attributes in the <img> tag, modern best practices recommend using CSS for this purpose.`
                    },
                    {
                        code: [`<img src="image.png" alt="Description" width="300" height="100" />`]
                    },
                    {
                        desc: `Setting the width and height attributes for images in HTML can have a positive impact on Search Engine Optimization (SEO). Specifying these dimensions in the <img> tag allows browsers to allocate the correct amount of space on a web page even before the image is fully loaded. This prevents layout shifts, improving the Cumulative Layout Shift (CLS) score—a key metric in Google's Core Web Vitals. A better CLS score can lead to a higher page ranking in search engine results.

                        Note: Styling dimensions and other properties are now more commonly managed through CSS for better flexibility and maintainability.`
                    }
                ]
            },
            {
                title: "Pre Tag",
                content: [
                    {
                        desc: "The <pre> tag serves as an indispensable tool in HTML for displaying preformatted text, such as code snippets in various programming languages."
                    },
                    {
                        title: "What Does the <pre> Tag Do?"
                    },
                    {
                        desc: "The <pre> tag preserves the original formatting of text, making it an excellent choice for displaying code where spacing and indentation are key."
                    },
                    {
                        title: "Syntax for Using the <pre> Tag"
                    },
                    {
                        code: ["<pre>code snippet in any programming language</pre>"]
                    },
                    {
                        title: "Key Features"
                    },
                    {
                        points: [
                            "The <pre> tag maintains both spaces and line breaks, ensuring that text appears exactly as it was originally formatted.",
                            "The <pre> tag has both an opening tag <pre> and a closing tag </pre>.",
                            "Additional attributes can also be added for further customization."
                        ]
                    },
                    {
                        title :"When to Use the <pre> Tag?"
                    },
                    {
                        desc: "The <pre> tag is most effective when you want the text to display on your HTML page exactly as it was typed, without any formatting changes. It is especially useful for displaying code snippets or preformatted text from data files."
                    },
                    {
                        title :"Displaying a Simple Javascript Program and Its Output"
                    },
                    {
                        desc: "In this section, we will use HTML to display a simple Python program that prints 'Hello, World!' to the console. Don't worry, you don't need to know Python; we're just showing how to display the program using the HTML <pre> tag."
                    },
                    {
                        title: "Javascript Program"
                    },
                    {
                        code: {
                            type: "none",
                            code: [ "<pre>console.log(\"Hello world!\")</pre>" ]
                        }
                    },
                    {
                        title: "Program Output"
                    },
                    {
                        desc: "This HTML code will display the program exactly as it is, preserving spaces and new lines. We'll use the <pre> tag to achieve this 'preformatted' display, as shown below."
                    },
                    {
                        code: {
                            type: "none",
                            code: ["console.log(\"Hello world!\")"]
                        }
                    },
                    {
                        title: "Conclusion"
                    },
                    {
                        desc: "In summary, the <pre> tag is a versatile tool for preserving the original formatting of text in HTML. Whether you are displaying code snippets or preformatted text, this tag ensures that your content appears exactly as intended."
                    }
                ]
            }
        ]
    },
    // Third page
    {
        title: "Inline & Block Elements",
        page: [
            {
                title: "HTML Inline Elements",
                content: [
                    {
                        desc: "Inline Elements don't start on a new line. It only takes the width required to cover the content. HTML elements are generally divided into two categories: Block-level and Inline elements."
                    },
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/html-inline-elements/inline-block-image.jpg",
                            width: 500,
                            height: 500
                        }
                    },
                    {
                        desc: "No matter what the width is, block elements will always start on a new line and take up the full available width of their container by default. This means they essentially claim all the horizontal space for themselves, pushing any content that comes after them to a new line. But the inline elements will fit snugly within the flow of other elements, taking up only as much width as their content requires."
                    },
                    {
                        title: "What are Inline Elements?"
                    },
                    {
                        desc: `Inline elements do not start on a new line and only take up as much width as necessary. They are part of the flow within other elements.

                        Inline elements can contain other inline elements, but they generally should not contain block-level elements. For example, you could nest a <strong> (strong emphasis) element within a <span> (a generic inline container) element, like so:`
                    },
                    {
                        code: ["<span>This is ", "<strong>important</strong> text.", "</span>"]
                    },
                    {
                        desc: "However, placing a block-level element like a <div> or <p> inside an inline element like <span> or <a> is typically considered incorrect HTML and could lead to unexpected behavior in terms of layout and styling."
                    },
                    {
                        code: [
                            "<!-- This is generally considered incorrect -->",
                            "<span>This is ",
                            "<div>not recommended</div> text.",
                            "</span>"
                        ]
                    },
                    {
                        title: "Common Inline Elements"
                    },
                    {
                        points: [
                            "<span>: A generic inline container for text",
                            "<a>: Defines a hyperlink",
                            "<strong>: Defines important text",
                            "<em>: Defines emphasized text",
                            "<img>: Embeds an image",
                            "<input>: Defines an input control"
                        ]
                    },
                    {
                        title: "Examples"
                    },
                    {
                        desc: "Here is an example of using inline elements within a paragraph. This text contains a link, an important text, and an emphasized text."
                    },
                    {
                        title: "Styling Inline Elements"
                    },
                    {
                        desc: "You can use CSS to style inline elements. However, some properties like width and height may not apply. Here is an exhaustive list of the most used Inline Elements:"
                    },
                    {
                        points: [
                            "<a>", "<abbr>","<acronym>","<button>","<br>","<big>","<bdo>","<b>","<cite>","<code>",
                            "<dfn>","<i>","<em>","<img>","<input>","<kbd>","<label>","<map>","<object>","<output>",
                            "<tt>","<time>","<samp>","<script>","<select>","<small>","<span>","<strong>","<sub>",
                            "<sup>","<textarea>"
                        ]
                    }
                ]
            },
            {
                title: "HTML Block Elements",
                content: [
                    {
                        desc: `HTML block-level elements are those that typically start on a new line and stretch out to the full width available. They create "blocks" of content within the structure of a webpage. Block-level elements are used to define the main structure of a webpage and can contain other block-level elements as well as inline elements.`
                    },
                    {
                        title: "What are Block-level Elements?"
                    },
                    {
                        desc: "Block-level elements are those that start on a new line and take up the entire width of their container by default. They essentially claim all the horizontal space for themselves, pushing any content that comes after them to a new line."
                    },
                    {
                        title: "Characteristics of Block-level Elements:"
                    },
                    {
                        points: ["Always start on a new line.", "Take up the full width available.", "Width and height can be controlled via CSS.", "Can contain other block-level as well as inline elements.",
                        ]
                    },
                    {
                        title: "Common Block-level Elements:"
                    },
                    {
                        points: [
                            "<h1>,<h2>,<h3>,<h4>,<h5>,<h6> - Headings", "<p> - Paragraphs", "<hr> - Horizontal rule", "<address> - Address information", "<article> - Article content", "<aside> - Sidebar content", "<blockquote> - Block quotations", "<canvas> - Drawing area", "<dd> - Description in a description list", "<div> - Generic container", "<dl> - Description list", "<dt> - Term in a description list", "<fieldset> - Group of related form elements", "<figcaption> - Caption for a figure", "<figure> - Image or media with a caption", "<footer> - Footer of a section or page", "<form> - HTML form", "<header> - Header of a section or page", "<li> - List item", "<main> - Main content of a document", "<nav> - Navigation links", "<noscript> - Alternate content when JavaScript is not enabled", "<ol> - Ordered list", "<ul> - Unordered list", "<pre> - Preformatted text","<section> - Standalone section in a document", "<table> - Table", "<video> - Video content"
                        ]
                    },
                    {
                        desc: "These block-level elements can be styled using CSS to control their appearance, layout, and positioning on the webpage. They play a crucial role in structuring the content of a webpage and defining its layout."
                    }
                ]
            }
        ]
    },
    // Fourth page
    {
        title: "HTML Lists",
        page: [
            {
                title: "HTML Lists",
                content: [
                    {
                        desc: "Our day-to-day lives often involve the use of lists. For example, when we go shopping, the bill we receive includes a list of all the items we've purchased. In a similar manner, web developers use lists to neatly display data on websites."
                    },
                    {
                        desc: `In HTML, there are two main types of lists: ordered lists (<ol>) and unordered lists (<ul>). Both types allow you to create lists of items, but they are displayed differently. Here's how you can use each type:`
                    },
                    {
                        title: "Types of HTML Lists"
                    },
                    {
                        desc: "HTML provides different types of lists to display data in various forms. Each list contains one or more list items."
                    },
                    {
                        points: [
                            "Unordered List: Displays items using bullets.", "Ordered List: Displays items in a numerical sequence, and supports various numbering styles like Arabic numerals, Roman numerals, and so on.", "Definition List: Organizes items in a format similar to a dictionary, with terms and their corresponding definitions."
                        ]
                    },
                    {
                        title: "Unordered Lists (<ul>)"
                    },
                    {desc: "Unordered lists are typically displayed with bullet points."},
                    {
                        code: [
                            "<ul>", "<li>Item 1</li>", "<li>Item 2</li>", "<li>Item 3</li>", "</ul>",
                        ]
                    },
                    {
                        title :"Ordered Lists (<ol>)"
                    },
                    { desc: "Ordered lists are typically displayed with numbers or letters." },
                    {
                        code: [
                            "<ol>", "<li>Item 1</li>", "<li>Item 2</li>", "<li>Item 3</li>", "</ol>",
                        ]
                    },
                    {
                        title : "List Items (<li>)"
                    },
                    { desc: "In both types of lists, each item is represented by the <li> tag." },
                    {
                        desc: "You can also nest lists within each other:"
                    },
                    {
                        code: [
                            "<ul>", 
                            "<li>Main item 1</li>", "<li>Main item 2", "<ul>", "<li>Sub-item 1</li>", "<li>Sub-item 2</li>", 
                            "</ul>", 
                            "</li>", "<li>Main item 3</li>", 
                            "</ul>",
                        ]
                    },
                    {
                        desc: "This creates a hierarchical structure where sub-items are indented within their parent items."
                    },
                    {
                        title: "A Definition List"
                    },
                    {
                        desc: "A definition list arranges items in a way similar to a dictionary, with a term followed by its definition. This is useful for glossaries or to display metadata."
                    },
                    {
                        points: [
                            "<dl>: This is the container element for the entire definition list.", "<dt>: This represents the term being defined within the list.", "<dd>: This represents the definition or description of the term."
                        ]
                    },
                    {
                        desc: "Here's an example of how to use a definition list in HTML:"
                    },
                    {
                        code: [
                            "<dl>", "<dt>HTML</dt>" , "<dd>HyperText Markup Language - the standard markup language for creating web pages and web applications.</dd>", "<dt>CSS</dt>", "<dd>Cascading Style Sheets - a style sheet language used for describing the presentation of a document written in HTML.</dd>", "<dt>JavaScript</dt>", "<dd>A programming language that enables interactive web pages and is essential for web development.</dd>", "</dl>"
                        ]
                    },
                    {
                        desc: "Lists are commonly used in web development for navigation menus, sidebar content, displaying sets of options, and organizing information in a structured manner. They are versatile and can be styled using CSS to match the design of your website."
                    }
                ]
            },
            {
                title: "HTML Unordered List",
                content: [
                    {
                        desc: "An unordered list is a list of items that are not arranged in any specific, sequential order. Unlike ordered lists, the items in an unordered list are typically marked with bullet points, dashes, or other symbols to indicate list membership, but these markers do not imply any particular order."
                    },
                    {
                        title: "Syntax for Creating Unordered Lists"
                    },
                    {
                        code: [
                            "<ul>", "<li>Item 1</li>", "<li>Item 2</li>", "<li>Item 3</li>", "</ul>",
                        ]
                    },
                    {
                        title: "Output:"
                    },
                    {
                        points: ["Item 1", "Item 2", "Item 3"]
                    },
                    {
                        title: "Customizing Bullet Points with 'type' Attribute"
                    },
                    {
                        desc: "You can specify the style of bullet points using the type attribute. It supports three values:"
                    },
                    {
                        points: [
                            "disc - default bullet style", "square", "circle",
                        ]
                    },
                    {
                        title :"Example Using Square Bullets:"
                    },
                    {
                        code: [
                            "<ul type=\"square\">", "<li>Notebook</li>", "<li>Marker</li>", "</ul>",
                        ]
                    }
                ]
            },
            {
                title : "HTML Ordered List",
                content: [
                    {
                        desc: "An ordered list is a list of items that are arranged in a specific, sequential order. Each item in the list is usually numbered to indicate its position in the sequence. Ordered lists are commonly used when the sequence of the items is important, such as in step-by-step instructions or rankings."
                    },
                    {
                        title: "Syntax for Creating ordered Lists"
                    },
                    {
                        code: [
                            "<ol>", "<li>Item 1</li>", "<li>Item 2</li>", "<li>Item 3</li>", "</ol>",
                        ]
                    },
                    {
                        title: "Key Points"
                    },
                    {
                        points:[
                            "Ordered lists are used for items that follow a sequence.",
                            "They are created using the <ol> (Ordered List) tag.",
                            "List items are enclosed within <li> (List Item) tags.",
                        ]
                    },
                    {
                        title : "Setting the 'type' Attribute"
                    },
                    {
                        desc: "The type attribute specifies the style of numbering. You have several options:"
                    },
                    {
                        points: [
                            `Uppercase Roman Numerals: Use type="I"`, `Lowercase Roman Numerals: Use type="i"`, `Arabic Numerals: Use type="1" (This is the default if the type attribute is not specified)`, `Lowercase Alphabetical Letters: Use type="a"`, `Uppercase Alphabetical Letters: Use type="A"`
                        ]
                    },
                    {
                        title: "Setting the 'start' Attribute"
                    },
                    {
                        desc: "The start attribute specifies the starting number for the list."
                    },
                    {
                        code: [
                            `<ol type="A" start="3">`, `<li>Pen</li>`, `<li>Pencil</li>`,`</ol>`
                        ]
                    }
                ]
            },
            {
                title :"HTML Definition Lists",
                content: [
                    {
                        desc: "A Definition List in HTML is used to represent a list of terms along with their corresponding descriptions or definitions. The Definition List is created using the <dl> (Definition List) element, which wraps around one or more pairs of <dt> (Definition Term) and <dd> (Definition Description) elements."
                    },
                    {
                        title: "Syntax:"
                    },
                    {
                        code: [
                            "<dl>", "<dt>HTML</dt>" , "<dd>HyperText Markup Language - the standard markup language for creating web pages and web applications.</dd>", "<dt>CSS</dt>", "<dd>Cascading Style Sheets - a style sheet language used for describing the presentation of a document written in HTML.</dd>", "<dt>JavaScript</dt>", "<dd>A programming language that enables interactive web pages and is essential for web development.</dd>", "</dl>"
                        ]
                    },
                    {
                        title: "Understanding the example"
                    },
                    { desc : "In this example:" },
                    {
                        points: [
                            "<dl> is the container for the list.", "<dt> defines the terms that you want to explain.", "<dd> contains the definitions or explanations for the terms."
                        ]
                    },
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/html-definition-list-tutorial/definition-list-html.png",
                            width: 1000,
                            height:500
                        }
                    },
                    {
                        desc: "This creates a clean, organized way to present a list of terms and their corresponding definitions, much like a glossary or dictionary."
                    }
                ]
            }
        ]
    },
    // Fifth page
    {
        title: "HTML Tables",
        page: [
            {
                title: "HTML Tables",
                content: [
                    {
                        desc: "HTML tables allow you to arrange data like text, images, and links in rows and columns. You use the <table> tag to start and end a table."
                    },
                    {
                        title : "Syntax of HTML Table"
                    },
                    {
                        code: ["<table>Table content</table>"]
                    },
                    {
                        desc: "Key Elements of HTML Table"
                    },
                    {
                        points: [
                            "<table>: Defines the table itself.", "<tr>: Used for table rows.", "<th>: Used for table headings.", "<td>: Used for table cells (data).",
                        ]
                    },
                    {
                        title : "Basic Table Structure"
                    },
                    {
                        code: [
                            "<table>", 
                            "<tr>", "<th>Name</th>", "<th>Age</th>", "</tr>", 
                            "<tr>", "<td>Harry</td>", "<td>100</td>", "</tr>",
                            "</table>",
                        ]
                    },
                    {
                        title :"rowspan and colspan Attributes"
                    },
                    {
                        desc: "Rowspan: If you want a table cell to span multiple rows, you can use the rowspan attribute."
                    },
                    {
                        code: [`<td rowspan="value">`]
                    },
                    {
                        desc: "Colspan: If you want a table cell to span multiple columns, you can use the colspan attribute."
                    },
                    {
                        code: [`<td colspan="value">`]
                    },
                    {
                        title :"Visual Representation of Rowspan and Colspan"
                    },
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/html-tables/colspan-rowspan.png",
                            width: 1000, 
                            height: 1000
                        }
                    },
                    {
                        title: "Examples"
                    },
                    {
                        desc: "Here are simple examples to demonstrate the use of rowspan and colspan in HTML tables."
                    },
                    {
                        title : "Example for Colspan:"
                    },
                    {
                        code: [ 
                            `<table border="1">`, 
                            `<tr>`, `<td colspan="2">Merged Columns</td>`, `</tr>`,
                            `<tr>`, `<td>Column 1</td>`, `<td>Column 2</td>`, `</tr>`,
                            `</table>`,
                        ]
                    },
                    {
                        title: "Example for Rowspan:"
                    },
                    {
                        code: [
                            `<table border="1">`,
                            `<tr>`, `<td>Row 1, Column 1</td>`, `<td rowspan="2">Merged Rows</td>`, `</tr>`,
                            `<tr>`, `<td>Row 2, Column 1</td>`, `</tr>`,
                            `</table>`,
                        ]
                    }
                ]
            },
            {
                title: "More on Tables",
                content: [
                    {
                        desc: "Let's take a closer look at HTML tables and delve into some more aspects of using tables in HTML."
                    },
                    {
                        title: "Caption"
                    },
                    {
                        desc: "To add a title to your table, you can use the <caption> element. This element helps both in terms of SEO and accessibility."
                    },
                    {
                        code: [
                            "<table>",
                            "<caption>Student Details</caption>",
                            "<!-- Rest of the table here -->",
                            "</table>"
                        ]
                    },
                    {
                        title : "Table Headers and Footers"
                    },
                    {
                        desc: "Besides <th> for individual header cells, HTML tables allow you to group header or footer content using <thead> and <tfoot>."
                    },
                    {
                        code: [
                            "<table>", 
                            "<thead>Header content</thead>",
                            "<tfoot>Footer content</tfoot>",
                            "<tbody>Body content</tbody>",
                            "</table>"
                        ]
                    },
                    {
                        title: "Column Groups"
                    },
                    {
                        desc: "You can use the <colgroup> and <col> elements to apply styles to an entire column in an HTML table."
                    },
                    {
                        code: [ 
                            `<table>`,
                            `<colgroup>`, `<col style="background-color:yellow">`, `</colgroup>`,
                            `<!-- rest of the table -->`,
                            `</table>`
                        ]
                    },
                    {
                        title : "Accessibility in Tables"
                    },
                    {
                        desc: "To make your tables more accessible, you can use the scope attribute in <th> elements to specify if they are headers for columns, rows, or groups of columns or rows."
                    },
                    {
                        code: [
                            `<th scope="col">Name</th>`,
                            `<th scope="col">Age</th>`
                        ]
                    },
                    {
                        title : "Sample HTML Table"
                    },
                    {
                        desc: "Here is an example HTML table with all the important elements:"
                    },
                    {
                        code: [
                            `<table border="1">`, 
                            `<!-- Caption -->`, 
                            `<caption>Employee Information</caption>`,
                            `<!-- Table Header -->`,
                            `<thead>`, 
                            `<tr>`, `<th>ID</th>`, `<th>Name</th>`, `<th>Position</th>`, `<th>Salary</th>`, `</tr>`,
                            `</thead>`,
                            `<!-- Table Body -->`,
                            `<tbody>`,
                            `<tr>`, `<td>1</td>`, `<td>Alice</td>`, `<td>Developer</td>`, `<td>$80,000</td>`,`</tr>`,
                            `<tr>`, `<td>2</td>`, `<td>Bob</td>`, `<td>Designer</td>`, `<td>$70,000</td>`, `</tr>`,
                            `</tbody>`, 
                            `<!-- Table Footer -->`, 
                            `<tfoot>`, 
                            `<tr>`, `<td colspan="3">Total Employees</td>`, `<td>3</td>`, `</tr>`,
                            `</tfoot>`,
                            `</table>`,
                        ]
                    },
                    {
                        title : "Conclusion"
                    },
                    {
                        desc: "We've covered some advanced topics related to HTML tables in this blog. By using these features, you can create tables that are not only visually appealing but also highly functional and accessible. Stay tuned for more insights into HTML and web development!"
                    }
                ]
            }
        ]
    },
    // sixth page,
    {
        title: "HTML Forms",
        page: [
            {
                title : "Introduction to HTML Forms",
                content: [
                    {
                        desc: "HTML forms are a crucial part of web development as they allow users to interact with websites by submitting data. Forms can be used for various purposes such as logging in, signing up, providing feedback, making purchases, and more. They consist of HTML elements that collect input from the user and send it to a server for processing. Here's a basic structure of an HTML form:"
                    },
                    {
                        title : "HTML Forms Structure:"
                    },
                    {
                        desc: "The fundamental structure of an HTML form is encapsulated within the <form> tags. Inside these tags, you'll place various form controls like text fields, checkboxes, radio buttons, and buttons for submitting the form."
                    },
                    {
                        code: [
                            `<form action="/submit-form" method="post">`,
                            `<!-- Form fields go here -->`,
                            `<label for="username">Username:</label>`,
                            `<input type="text" id="username" name="username" required>`,
                            `<label for="password">Password:</label>`,
                            `<input type="password" id="password" name="password" required>`,
                            `<button type="submit">Submit</button>`,
                            `</form>`
                        ]
                    },
                    {
                        title : "How to Use Form Controls?"
                    },
                    {
                        desc: "The <input> tag is commonly used to create form controls. The attributes of this tag define the control's behavior."
                    },
                    {
                        code: [`<input type="" name="" value="">`]
                    },
                    {desc: `The "type" attribute specifies the type of input control (e.g., text, password, checkbox).`},
                    {desc: `The "value" attribute sets a default value for the control, which the user can overwrite.`},
                    {desc: `The "name" attribute is used for identifying the control, especially when the data is sent to the server.`},
                    {
                        title : "Let's break down the key components:",
                    },
                    {
                        points: [
                            `"<form>": This element wraps all the form controls and defines where the form data will be sent upon submission (action attribute) and the HTTP method used (method attribute).`,
                            `Form fields: These are the elements where users input data. Common form fields include text fields (<input type="text">), password 'fields (<input type="password">), checkboxes (<input type="checkbox">), radio buttons (<input type="radio">), dropdown menus (<select> with <option> elements), and text areas (<textarea>).`,
                            `"<label>": This element associates a text label with a form field. It improves accessibility and usability by providing a description for each input field.`,
                            `"<input>": This element creates an input field within the form. The type attribute specifies the type of input (e.g., text, password, checkbox), while the name attribute provides a name for the input field, which is used to identify it when the form is submitted.`,
                            `"<button>": This element creates a submit button that users can click to submit the form. The type="submit" attribute indicates that it's a submit button.`
                        ]
                    },
                    {
                        desc: "When a user submits the form, the browser sends the data to the URL specified in the action attribute using the HTTP method specified in the method attribute (usually GET or POST)."
                    }
                ]
            },
            {
                title: "HTML Input Types",
                content: [
                    {
                        desc: "Input types in HTML forms are the backbone of interactive web applications. They allow users to send information to web servers for various purposes like searching, logging in, or providing feedback. In this blog, we'll explore common HTML input types: text, password, radio, and checkbox."
                    },
                    { title : "Text Input" },
                    {
                        desc: "The text input type is the most basic form of input and is widely used for collecting simple text data."
                    },
                    {
                        code: [`<input type="text" name="username" placeholder="Enter your username">`]
                    },
                    {
                        desc: "In the above example, the placeholder attribute provides a hint to the user about what to enter."
                    },
                    {title: "Password Input"},
                    {
                        desc: "The password input type is similar to the text type but hides the characters entered by the user for security reasons."
                    },
                    {
                        code: [`<input type="password" name="password" placeholder="Enter your password">`]
                    },
                    {title: "Radio Buttons"},
                    {
                        desc: "Radio buttons are used when you want the user to select only one option from a set of choices."
                    },
                    {
                        code: [
                            `<input type="radio" id="male" name="gender" value="male">`, 
                            `<label for="male">Male</label>`,
                            `<input type="radio" id="female" name="gender" value="female">`,
                            `<label for="female">Female</label>`,
                        ]
                    },
                    {
                        title : "Checkbox"
                    },
                    {
                        desc: "Checkboxes allow the user to select multiple options from a set."
                    },
                    {
                        code: [
                            `<input type="checkbox" id="subscribe" name="subscribe" value="yes">`,
                            `<label for="subscribe">Subscribe to newsletter</label>`
                        ]
                    },
                    {
                        title: "More input types"
                    },
                    {
                        desc: "Here is a comprehensive list of input types you can use in html:"
                    },
                    {
                        title: "Input Type: Description"
                    },
                    {
                        points: [
                            "text: Allows the user to type a single line of text.",
                            "password: Allows the user to type a password.",
                            "submit: Represents a button that, when pressed, submits the form.",
                            "reset: Represents a button that, when pressed, resets all the form controls to their initial values.",
                            "radio: Represents an option in a set of options that are mutually exclusive with each other.",
                            "checkbox: Represents an option in a set that may be selected independently of other options.",
                            "button: Represents a clickable button.",
                            "color: Allows the user to select a color.",
                            "date: Allows the user to select a date.",
                            "datetime-local: Allows the user to select a date and time with no time zone.",
                            "email: Allows the user to enter an email address.",
                            "file: Allows the user to select one or more files from their device storage.",
                            "hidden: Represents a value that is not displayed but is submitted to the server.",
                            "image:	Defines an image that acts as a submit button.",
                            "month: Allows the user to select a month and year.",
                            "number: Allows the user to enter a number.",
                            "range:	Allows the user to select a number from a range.",
                            "search: Allows the user to enter a search query string.",
                            "tel: Allows the user to enter a telephone number.",
                            "time: Allows the user to select a time.",
                            "url: Allows the user to enter a URL.",
                            "week: Allows the user to select a week."
                        ]
                    },
                    {
                        title: "Conclusion"
                    },
                    {
                        desc: "Understanding the different types of HTML input is crucial for creating interactive and user-friendly forms. Each input type serves a specific purpose, making it easier to collect, validate, and process user data."
                    }
                ]
            },
            {
                title: "Textarea & Select",
                content: [
                    {
                        desc: "In addition to the basic input types, HTML forms offer other controls like textarea and select for richer user interaction. These elements allow for more complex data collection and provide a better user experience. In this blog, we will dive into these form controls and provide examples."
                    },
                    { title : "The Textarea Element" },
                    {
                        desc: "The textarea element is used when you need multiline text input from the user. This is particularly useful for comments, reviews, or any other type of input where the length is unpredictable."
                    },
                    {
                        code: [`<textarea name="comment" rows="4" cols="50">Enter your comment here...</textarea>`]
                    },
                    {
                        desc: "The rows and cols attributes define the visible dimensions of the textarea."
                    },
                    {
                        title: "The Select Element"
                    },
                    {
                        desc: "The select element creates a dropdown menu for the user. It is useful when you have a predefined list of options for the user to choose from."
                    },
                    {
                        code: [
                            `<select name="fruits">`,
                            `<option value="apple">Apple</option>`,
                            `<option value="banana">Banana</option>`,
                            `<option value="cherry">Cherry</option>`,
                            `</select>`
                        ]
                    },
                    {
                        desc: "Each option inside the select tag represents an item in the dropdown list."
                    },
                    {
                        title: "Combining Textarea and Select"
                    },
                    {
                        desc: "You can combine textarea and select in the same form to capture varied types of user input."
                    },
                    {
                        code: [
                            `<form action="/submit">`,
                            `<textarea name="comment" rows="4" cols="50">Enter your comment here...</textarea>`,
                            `<select name="fruits">`,
                            `<option value="apple">Apple</option>`,
                            `<option value="banana">Banana</option>`,
                            `<option value="cherry">Cherry</option>`,
                            `</select>`,
                            `<input type="submit" value="Submit">`,
                            `</form>`,
                        ]
                    }
                ]
            },
            {
                title: "More on forms",
                content: [
                    {
                        desc: "HTML forms are the backbone of interactive websites. They allow users to submit data, which can be processed on the server. While we have covered basic input types in previous tutorials, this tutorial aims to delve deeper into form attributes, both common and new HTML5 additions. We'll also look at HTML5 validation attributes to ensure data integrity."
                    },
                    {
                        title: "Common Attributes"
                    },
                    {title: "Action"},
                    {
                        desc: "The action attribute specifies the URL where the form data should be sent after submission."
                    },
                    {
                        code: [`<form action="/submit.php" method="POST"></form>`]
                    },
                    { title: "Method" },
                    {
                        desc: "The method attribute defines how data is sent. The two most common methods are GET and POST."
                    },
                    {
                        code: [`<form action="/submit.php" method="POST"></form>`]
                    },
                    { title: "Name" },
                    {
                        desc : "The name attribute specifies the name for the form element, making it easier to reference in scripts or the server-side code."
                    },
                    {
                        code: [`<input type="text" name="username">`]
                    },
                    {
                        title: "New HTML5 Attributes"
                    },
                    { title: "Placeholder" },
                    {
                        desc: "This attribute provides a hint to the user as to what can be entered in the field."
                    },
                    {
                        code: [`<input type="text" placeholder="Enter your username">`]   
                    },
                    { title: "Required" },
                    {
                        desc: "The required attribute makes a field mandatory to fill out."
                    },
                    {
                        code: [`<input type="text" required>`]
                    },
                    {title : "Autofocus"},
                    {
                        desc: "The autofocus attribute automatically focuses the cursor on the particular input when the page loads."
                    },
                    {
                        code: [`<input type="text" autofocus>`]
                    },
                    {
                        title: "HTML5 Validation Attributes"
                    },
                    {title: "Required"},
                    {
                        desc: "As mentioned above, this attribute makes a field mandatory."
                    },
                    {
                        code: [`<input type="text" required>`]
                    },
                    {title: "Pattern"},
                    {
                        desc: "The pattern attribute specifies a regular expression that the input must match to be valid."
                    },
                    {
                        code: [`<input type="text" pattern="[a-zA-Z0-9]+">`]
                    },
                    { title: "Conclusion" },
                    {
                        desc: "Understanding the different attributes available for HTML forms is crucial for building robust and user-friendly web applications. This tutorial covered both commonly used and new HTML5-specific attributes that enhance functionality and user interaction. Employing these attributes effectively will greatly enhance your web forms."
                    }
                ]
            }
        ]
    },
    // seventh page
    {
        title: "HEAD ELEMENTS",
        page: [
            {
                title: "HTML Meta Tags",
                content: [
                    {
                        desc: "The <meta> tags in HTML provide metadata about the HTML document. Metadata is data (information) about data. <meta> tags always go inside the document's <head> tag and are typically used to specify the character set, page description, keywords, author, and other metadata."
                    },
                    {
                        desc: "Below is an example HTML code snippet that includes various types of <meta> tags commonly used:"
                    },
                    {
                        code: [
                            `<head>`,
                            `<meta charset="UTF-8">  # Character encoding`,
                            `<meta name="viewport" content="width=device-width, initial-scale=1.0">  # Responsive design`,
                            `<meta http-equiv="X-UA-Compatible" content="ie=edge">  # Internet Explorer compatibility`,
                            `<meta name="description" content="This is a description of the web page">  # Description for search engines -->`,
                            `<meta name="keywords" content="HTML, CSS, JavaScript">  # Keywords for search engines`,
                            `<meta name="author" content="Your Name"> #  Author name`,
                            `<title>Document</title>`,
                            `</head>`,
                        ]
                    },
                    {
                        title: "Explanation of each meta tag:"
                    },
                    {
                        points: [
                            `Character Encoding (charset): <meta charset="UTF-8"> sets the character encoding for the webpage. UTF-8 is the most common and recommended.`,
                            `Viewport: <meta name="viewport" content="width=device-width, initial-scale=1.0"> sets the viewport to scale the page to the screen width, useful for responsive design.`,
                            `IE Compatibility: <meta http-equiv="X-UA-Compatible" content="ie=edge"> specifies that the page should be rendered using the latest rendering engine available on Internet Explorer.`,
                            `Description: <meta name="description" content="This is a description of the web page"> provides a brief description of the webpage, which search engines may use in search results.`,
                            `Keywords: <meta name="keywords" content="HTML, CSS, JavaScript"> specifies keywords for the webpage, which were historically used by search engines but are less relevant today.`,
                            `Author: <meta name="author" content="Your Name"> indicates the name of the author of the webpage.`,
                        ]
                    },
                    {
                        title : "How to add favicon in HTML?"
                    },
                    {
                        desc: "A favicon is a small icon that appears next to your website's title in browser tabs. It helps in branding and easy identification among multiple tabs."
                    },
                    {
                        image: {
                            image: "/image/tutorials/html/favicon-add-image.png",
                            width: 500,
                            height: 500
                        }
                    },
                    {
                        title: "Step 1: Create/Choose Favicon"
                    },
                    {
                        desc: "Make a square image, usually 16x16 or 32x32 pixels, in .ico format. You can create a favicon from this website"
                    },
                    {
                        title: "Step 2: Upload Favicon"
                    },
                    {
                        desc: "Place the .ico file in your website's root directory, where index.html is located."
                    },
                    {
                        title: "Step 3: Update HTML"
                    },
                    {
                        desc: "Insert the following code in the <head> section of your index.html file:"
                    },
                    {
                        code: [`<link rel="icon" href="favicon.ico" type="image/x-icon">`]
                    },
                    {
                        desc : "Replace favicon.ico with your file's path if different."
                    },
                    {
                        title: "Step 4: Test"
                    },
                    {
                        desc: "Open your site in different browsers to make sure the favicon appears. In the next tutorial, we will talk about more HTML head elements"
                    }
                ]
            },
            {
                title: "Link & Script Tags",
                content: [
                    {
                        desc: "The <link> and <script> tags are essential elements within an HTML document's <head> section. They serve various purposes, like linking external stylesheets or including JavaScript files."
                    },
                    { title: "The <link> Tag" },
                    {
                        desc: "The <link> tag is commonly used to link external stylesheets to an HTML document. It's a self-closing tag, meaning it doesn't require a closing tag."
                    },
                    {
                        desc: "Below is an example HTML code snippet that includes a <link> tag to link an external stylesheet:"
                    },
                    {
                        code: [`<link rel="stylesheet" type="text/css" href="styles.css"> `]
                    },
                    {
                        title: "Example"
                    },
                    {
                        desc: "Make a `style.css` in directary."
                    },
                    {
                        code: [`<head>`, `<link rel="stylesheet" type="text/css" href="styles.css">`, `</head>`]
                    },
                    {
                        title: "The <script> Tag"
                    },
                    {
                        desc: "The <script> tag is used to include JavaScript code or files in an HTML document. Unlike the <link> tag, the <script> tag must be closed with a </script> tag."
                    },
                    {
                        desc: "Below is an example HTML code snippet that includes a <script> tag to link an external JavaScript file:"
                    },
                    {
                        code: [`<script src="script.js" type="text/javascript"></script>`]
                    },
                    {
                        title: "Example"
                    },
                    {
                        desc: "Make a `script.js` in directary."
                    },
                    {
                        code: [`<body>`, `<script src="script.js" type="text/javascript" defer></script>`, `</body>`]
                    },
                    {
                        title: "Conclusion"
                    },
                    {
                        desc: "The <link> and <script> tags are crucial for linking external resources like stylesheets and JavaScript files, enhancing the functionality and presentation of your HTML documents."
                    }
                ]
            }
        ]
    },
    // eighth page
    {
        title: "HTML MEDIA",
        page: [
            {
                title: "Video & Audio Tags",
                content: [
                    {
                        desc: "This tutorial aims to provide a comprehensive guide on using <video> and <audio> tags in HTML to embed media files."
                    },
                    { title: "The <video> Tag" },
                    {
                        desc: "The <video> tag is used to embed video files in an HTML document. It supports multiple attributes to control the video playback."
                    },
                    { desc: "Example usage:" },
                    {
                        code: [`<video src="video.mp4" controls></video>`]
                    },
                    {
                        title : "Attributes for <video> Tag"
                    },
                    {
                        points: [
                            `src: Specifies the path to the video file.`,
                            `controls: Adds video controls, like play, pause, and volume.`,
                            `autoplay: Automatically starts playing the video when the page loads.`,
                            `loop: Repeats the video once it ends.`,
                            `muted: Mutes the video by default.`,
                            `poster: Specifies an image to be displayed before the video starts playing.`,
                            `width and height: Specifies the dimensions of the video.`,
                        ]
                    },
                    {
                        title :"The <audio> Tag"
                    },
                    {
                        desc: "The <audio> tag is used to embed audio files in an HTML document. It also supports multiple attributes for control. Example usage:"
                    },
                    {
                        code: [`<audio src="audio.mp3" controls></audio>`]
                    },
                    {
                        title: "Attributes for <audio> Tag"
                    },
                    {
                        points: [
                            `src: Specifies the path to the audio file.`,
                            `controls: Adds audio controls, like play, pause, and volume.`,
                            `autoplay: Automatically starts playing the audio when the page loads.`,
                            `loop: Repeats the audio once it ends.`,
                            `muted: Mutes the audio by default.`,
                            `preload: Specifies if and how the audio should be loaded when the page loads ('auto', 'metadata', 'none').`,
                        ]
                    },
                    {
                        title: "The \"preload\" attribute can have the following values:"
                    },
                    {
                        points: [
                            `none: This is the default value. It indicates that the browser should not preload the audio file at all. The audio file will only start downloading when the user initiates playback.`,
                            `metadata: This value tells the browser to preload only the metadata of the audio file, such as its duration and basic information about the audio. This can be useful if you want to display the audio duration to the user without fully loading the audio data.`,
                            `auto: This value instructs the browser to preload the entire audio file as much as possible without delaying the loading of other important page content. The browser will try to load the audio file in the background so that it's ready to play when the user decides to start it.`
                        ]
                    },
                    {
                        title: "Conclusion"
                    },
                    {
                        desc: "The <video> and <audio> tags are powerful tools for embedding media content in HTML documents. Utilizing their attributes allows you to offer an interactive and dynamic user experience."
                    }
                ]
            },
            {
                title: "SVG in HTML",
                content: [
                    {
                        desc: "Scalable Vector Graphics (SVG) has become an indispensable part of modern web development. SVG enables developers to create high-quality, scalable graphics that look crisp at any size or resolution. In this blog post, we'll explore the basics of using SVG in HTML, its benefits, and some practical examples."
                    },
                    { title :"What is SVG?" },
                    {
                        desc: "SVG stands for Scalable Vector Graphics. Unlike raster images like PNGs or JPGs, SVGs are not pixel-based. They're composed of vectors—mathematical formulas that describe shapes, paths, and fills. This means SVGs can be resized without losing quality."
                    },
                    { title :"Why Use SVG?" },
                    {title: "Scalability" },
                    {
                        desc: "SVG images can be scaled indefinitely without losing quality, which is ideal for responsive web design."
                    },
                    { title: "File Size" },
                    {
                        desc: "SVGs can be styled, animated, and manipulated using CSS and JavaScript."
                    },
                    {
                        title: "How to Embed SVG in HTML"
                    },
                    {
                        desc: "SVG can be embedded in HTML in several ways:"
                    },
                    {
                        points: [
                            `Inline SVG: Directly writing the SVG XML code within HTML.`,
                            `Using an <img> tag: Point the src attribute to an SVG file.`,
                            `Using CSS: Setting SVG as a background image in a CSS file.`
                        ]
                    },
                    {
                        title :"Inline SVG Example"
                    },
                    {
                        code: [
                            `<svg height="100" width="100">`,
                            `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />`,
                            `</svg>`
                        ]
                    },
                    {
                        title: "<img> Tag Example"
                    },
                    {
                        code: [`<img src="image.svg" alt="Sample SVG">`]
                    },
                    {
                        title: "CSS Background Example"
                    },
                    {
                        code: [`.background { background-image: url('image.svg'); }`]
                    },
                    {
                        title: "SVG Attributes"
                    },
                    {
                        desc: "SVG comes with a set of attributes to control its behavior:"
                    },
                    {
                        points: [
                            `width and height: To set the dimensions.`,
                            `viewBox: To set the coordinate system.`,
                            `fill and stroke: To set the colors.`
                        ]
                    },
                    {title: "Practical Examples"},
                    { tilte : "Creating a Simple Icon" },
                    {
                        code: [`<svg height="30" width="30">`,
                        `<rect width="30" height="30" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />`,
                        `</svg>`]
                    },
                    { title: "Creating Complex Shapes" },
                    {desc: "SVG can also be used to create more complex shapes like polygons, lines, and text."},
                    {
                        title: "Conclusion"
                    },
                    {
                        desc: "SVG offers a powerful way to add scalable and interactive graphics to your HTML documents. Its compatibility with CSS and JavaScript makes it a versatile choice for modern web development. Whether you're creating simple icons or intricate illustrations, SVG has got you covered."
                    }
                ]
            },
            {
                title: "iFrames in HTML",
                content: [
                    {
                        desc: "iFrames, or Inline Frames, are an integral part of modern web development. They allow you to embed another HTML page within your current page. In this blog, we'll delve into the utility of iFrames, their attributes, and some use-cases."
                    },
                    {
                        title: "What is an iFrame?"
                    },
                    {
                        desc: "An iFrame is an HTML element that enables an inline frame for the embedding of external content. Essentially, you can load another web page within a designated area of your current webpage."
                    },
                    {
                        title: "Why Use iFrames?"
                    },
                    {desc: "iFrames offer a variety of use-cases:"},
                    {
                        points: [
                            `Content Isolation: iFrames allow you to isolate third-party content, which can improve security.`,
                            `Modularity: Easily embed external plugins, widgets, or content.`,
                            `Resource Separation: Content within an iFrame can load separately from the rest of the page.`,
                        ]
                    },
                    {
                        title: "Basic Syntax"
                    },
                    {
                        desc: "The basic syntax of an iFrame is quite straightforward:"
                    },
                    {
                        code: [`<iframe src="URL" width="width" height="height"></iframe>`]
                    },
                    {
                        title: "Attributes of iFrame"
                    },
                    {
                        desc: "Several attributes can enhance the functionality of an iFrame:"
                    },
                    {
                        points: [
                            `src: Specifies the URL of the page to embed.`,
                            `height and width: Define the dimensions.`,
                            `frameborder: Indicates whether to display a border.`,
                            `scrolling: Controls the scrollbars.`,
                            `name: For targeting the iFrame in JavaScript.`,
                        ]
                    },
                    {
                        title: "Practical Examples"
                    },
                    {title: "Embedding a YouTube Video"},
                    {
                        code: [`<iframe src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>`]
                    },
                    {title: "Embedding Google Maps"},
                    {
                        code: [`<iframe src="https://maps.google.com/maps?q=LOCATION&output=embed" frameborder="0"></iframe>`]
                    },
                    {
                        desc: "iFrames offers a convenient way to embed external content into your web pages. Their flexibility and ease of use make them an invaluable tool for modern web development."
                    }
                ]
            }
        ]
    },
    // nighth page
    {
        title: "Miscellaneous Tags",
        page: [
            {
                title: "HTML Code Tag",
                content: [
                    {
                        desc: "The HTML <code> tag is a powerful element for displaying code snippets within a webpage. It preserves both spaces and line breaks, making it ideal for showcasing code. In this blog post, we'll explore how to use the <code> tag effectively, especially in conjunction with Prism for code highlighting."
                    },
                    {
                        title: "What is the <code> Tag?"
                    },
                    {
                        desc: "The <code> tag is a semantic HTML tag that's used for displaying code snippets. It can be used both inline and within a block-level element like <pre>."
                    },
                    {
                        title: "Why Use the <code> Tag?"
                    },
                    {
                        points: [
                            `Semantic Meaning: Provides semantic value to the enclosed code.`,
                            `Readability: This makes it easier for both browsers and developers to understand that the text is code.`,
                            `Styling: Easier to style and highlight with CSS or JavaScript libraries like Prism.`,
                        ]
                    },
                    {
                        title: "Basic Usage"
                    },
                    {
                        desc:"The most straightforward way to use the <code> tag is inline for short code snippets:"
                    },
                    {
                        code: [`<code>Your code here</code>`]
                    },
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/html-code-tags/c-code-snippet.png",
                            width: 1000, height: 1000
                        }
                    },
                    {
                        title: "Using <code> with <pre>"
                    },
                    {
                        desc: "For multiline code snippets, it's common to combine the <code> tag with the <pre> tag:"
                    },
                    {
                        code: [`<pre>`, `<code>Your multiline code here</code>`, `</pre>`]
                    },
                    {
                        desc: "The HTML <code> tag is a simple yet powerful way to include code snippets in your webpage. "
                    }
                ]
            },
            {
                title: "HTML Semantic Tags",
                content: [
                    {
                        desc: "HTML5 introduced a range of semantic tags that provide meaning to the structure of web content. This blog will guide you through the importance and usage of these tags."
                    },
                    {
                        title: "What are Semantic Tags?"
                    },
                    {
                        desc: "Semantic tags add meaning to your HTML. They tell both the browser and the developer what kind of content is being presented."
                    },
                    {
                        desc: "Here are some of the key semantic tags you must know about:"
                    },
                    {
                        points: [
                            `<header>: Use to represent the top section of a web page, often containing headings, logos, and navigation.`,
                            `<nav>: Signifies a navigation menu on a web page.`,
                            `<article>: Indicates a self-contained piece of content, such as a blog post or news article.`,
                            `<section>: Represents a thematic grouping of content on a web page.`,
                            `<aside>: Typically used for sidebars or content that is tangentially related to the main content.`,
                            `<footer>: Represents the footer of a web page, usually containing copyright information and contact details.`,
                            `<figure> and <figcaption>: Used for embedding images, diagrams, or charts, along with a caption.`,
                            `<main>: Signifies the main content area of a web page.`,
                            `<time>: Used to represent time-related information, like dates and times.`,
                        ]
                    },
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/html-semantic-tags/semantic-tags.png",
                            width: 1000, height: 1000
                        }
                    },
                    {
                        title: "Why Use Semantic Tags?"
                    },
                    {
                        desc: "They enhance SEO, improve accessibility, and make your code easier to read and maintain."
                    },
                    {
                        title: "Commonly Used Semantic Tags"
                    },
                    {
                        desc: "Here are some commonly used semantic tags in HTML:"
                    },
                    {
                        points: [
                            `header: Contains introductory content.`,
                            `footer: Holds footer information.`,
                            `article: Encapsulates a self-contained composition.`,
                            `section: Represents a standalone section.`,
                            `aside: Contains content aside from the content it is placed in.`,
                            `nav: Holds navigation links.`,
                        ]
                    },
                    { title: "Examples" },
                    {
                        title: "Using the <header> tags and <footer> tags"
                    },
                    {
                        code: [
                            `<header>`,
                            `<h1>My Website</h1>`,
                            `<nav>`,
                            `<ul>`,
                            `<li>`,`<a href="#">Home</a>`,`</li>`,
                            `<li>`,`<a href="#">About</a>`,`</li>`,
                            `<li>`,`<a href="#">Services</a>`,`</li>`,
                            `<li>`,`<a href="#">Contact</a>`,`</li>`,
                            `</ul>`,
                            `</nav>`,
                            `</header>`,
                            `<footer>`,
                            `<p>Copyright 2023</p>`,
                            `</footer>`,
                        ]
                    },
                    {
                        title: "Using the <article> and <section> tags"
                    },
                    {
                        code: [
                            `<article>`,
                            `<h2>Article Title</h2>`,
                            `<section>`,`<p>Content here</p>`,`</section>`,
                            `</article>`,
                        ]
                    },
                    {
                        title: "Using the <aside> and <nav> tags"
                    },
                    {
                        code: [
                            `<aside>`,
                            `<p>This is an aside content</p>`,
                            `</aside>`,
                            `<nav>`,
                            `<ul>`, `<li>Home</li>`, `<li>About</li>`, `</ul>`,
                            `</nav>`,
                        ]
                    },
                    {
                        title: "Using the <figure> and <figcaption> tags"
                    },
                    {
                        code: [
                            `<figure>`,
                            `<img src="image.jpg" alt="An example image">`,
                            `<figcaption>This is an example image.</figcaption>`,
                            `</figure>`,
                        ]
                    },
                    {
                        desc: "Using HTML's semantic tags can greatly benefit both your website's SEO and the maintainability of your code. They offer a way to structure your HTML in a meaningful manner, making your website more accessible and easier to understand."
                    }
                ]
            },
            {
                title: "HTML Canvas",
                content: [
                    {
                        desc: "The <canvas> element in HTML is a powerful feature for rendering graphics and shapes directly within web pages. Though it's often paired with JavaScript for dynamic rendering, the canvas itself is an HTML element. In this blog, we'll explore what you can do with the <canvas> element alone."
                    },
                    {
                        title: "What is Canvas?"
                    },
                    {
                        desc: "The <canvas> element serves as a container for graphics, which can be rendered via scripting. Essentially, it offers a drawing area for visual content."
                    },
                    {
                        title: "Why Use Canvas?"
                    },
                    {desc: "Here are some reasons why you might use the <canvas> element:"},
                    {
                        points: [
                            `Graphics: For drawing shapes, graphs, and other visual representations.`,
                            `Dynamic Content: To dynamically update visual elements.`,
                            `Interactivity: Though this involves JavaScript, the canvas element is the foundation for interactive graphical content.`,
                        ]
                    },
                    {
                        title: "Basic Syntax"
                    },
                    {
                        desc: "Here's how you can define a simple <canvas> element:"
                    },
                    {
                        code: [`<canvas id="myCanvas" width="200" height="100"></canvas>`]
                    },
                    {
                        title: "Attributes of Canvas"
                    },
                    {
                        desc: "While the <canvas> element is simple, it does have a couple of important attributes:"
                    },
                    {
                        points: [
                            `width: Specifies the width of the canvas.`,
                            `height: Specifies the height of the canvas.`,
                        ]
                    },
                    {
                        title: "Styling with CSS"
                    },
                    {
                        desc: "You can also style the <canvas> element with CSS. For example, to add a border:"
                    },
                    {
                        code: [`canvas { border: 1px solid black; }`]
                    },
                    {
                        desc: "The HTML <canvas> element serves as a robust foundation for creating graphics and other visual elements on a web page. Even without involving JavaScript, understanding the canvas element and its basic attributes can be quite useful."
                    }
                ]
            },
            {
                title: "HTML Global Attributes",
                content: [
                    {
                        desc: "HTML Global Attributes play a crucial role in HTML development, providing a consistent set of attributes that can be applied to any HTML element. In this blog, we'll explore what these attributes are, their descriptions, and how to use them effectively."
                    },
                    {
                        title: "What Are HTML Global Attributes?"
                    },
                    {
                        desc: "The global attributes are a set of attributes that can be used with all HTML elements, making them incredibly versatile and essential for dynamic HTML coding."
                    },
                    {
                        title: "List of Common Global Attributes"
                    },
                    {
                        desc: "The global attributes are a set of attributes that can be used with all HTML elements, making them incredibly versatile and essential for dynamic HTML coding."
                    },
                    {
                        title: "List of Common Global Attributes"
                    },
                    {
                        title: "Attributes: Descrption"
                    },
                    {
                        points: [
                            `accesskey: Specifies a shortcut key to activate/focus an element`,
                            `class: Specifies one or more classes for an element`,
                            `contenteditable: Specifies whether the content is editable or not`,
                        ]
                    },
                    {
                        title: "Using Global Attributes"
                    },
                    {
                        desc: "Now, let's look at some examples that illustrate the usage of some of these global attributes."
                    },
                    {
                        title: "Using the class Attribute"
                    },
                    {
                        code: [`<div class="container">This is a container.</div>`]
                    },
                    {
                        title: "Using the id Attribute"
                    },
                    {
                        code: [`<span id="unique">Unique Element</span>`]
                    },
                    {
                        title: "Using the data-* Attribute for Custom Data"
                    },
                    {
                        code: [`<div data-user="123">Custom Data</div>`]
                    },
                    {
                        desc: "HTML Global Attributes offer a powerful and consistent way to control and manage HTML elements. Understanding these attributes can significantly improve your HTML coding efficiency and the dynamism of the web pages you create."
                    }
                ]
            },
            {
                title: "HTML Entities",
                content: [
                    {
                        desc: "HTML entities are a crucial part of HTML markup language. They enable you to display characters that are reserved in HTML or that aren't readily available on the keyboard. In this blog, we'll explore what HTML entities are, their types, and how to use them."
                    },
                    {
                        title: "What Are HTML Entities?"
                    },
                    {
                        desc: "HTML entities are used to represent special characters in a format that the browser can understand. They start with an ampersand (&) and end with a semicolon (;)."
                    },
                    {
                        title : "Why Use HTML Entities?"
                    },
                    {desc: "Here are some reasons:"},
                    {
                        points: [
                            `Reserved Characters: Characters like <, >, and & are reserved in HTML.`,
                            `Special Symbols: For symbols like ©, ®, or mathematical symbols.`,
                            `Non-Breaking Spaces: To create white spaces that won't break into a new line.`,
                        ]
                    },
                    {
                        title: "Common HTML Entities"
                    },
                    {
                        points: [
                            `&lt;  for <`, `&gt;  for >`, `&amp; for &`, `&nbsp; for a non-breaking space`,`&copy; for ©`,
                        ]
                    },
                    {
                        title: "How to Use HTML Entities"
                    },
                    {
                        desc: "Entities can be implemented easily within HTML code. Here are some examples:"
                    },
                    {
                        title: "Using Reserved Characters"
                    },
                    {
                        code: {type: "none", code: [`<p>The price is 10 &lt; 20.</p>`]}
                    },
                    {
                        title: "Displaying Special Symbols"
                    },
                    {
                        code: {type: "none", code: [`<p>Copyright &copy; 2023.</p>`]}
                    },
                    {
                        title: "Creating Non-Breaking Spaces"
                    },
                    {
                        code: {type: "none", code: [`<p>This is an example&nbsp;text.</p>`]}
                    },
                    {
                        desc: "HTML entities are essential for rendering special or reserved characters on a web page. Understanding how to use them effectively is key to creating web pages that display content as intended."
                    }
                ]
            },
            {
                title: "HTML Quotation Tag",
                content: [
                    {
                        desc: "The use of quotations is common in textual content. HTML provides specific tags to handle this: <blockquote> for block quotations and <q> for inline quotations. In this blog, we'll explore these tags, their attributes, and how to style them."
                    },
                    {
                        title: "What Are <blockquote> and <q> Tags?"
                    },
                    {
                        desc: "The <blockquote> and <q> tags serve to define quotations in HTML. While <blockquote> is used for longer, block-level quotes, <q> is used for shorter, inline quotes."
                    },
                    {
                        title: "Why Use These Tags?"
                    },
                    {
                        desc: "They provide semantic meaning to your quotations, making it easier for search engines to understand the context and relevance of the content."
                    },
                    {
                        title: "Basic Syntax"
                    },
                    {
                        title: "<blockquote> Tag"
                    },
                    {
                        code: [`<blockquote cite="source-url">Quotation text here.</blockquote>`]
                    },
                    {
                        title: "<q> Tag"
                    },
                    {
                        code: [`<q cite="source-url">Quotation text here.</q>`]
                    },
                    { title: "Attributes" },
                    {
                        desc: "Both <blockquote> and <q> tags support the cite attribute:"
                    },
                    {
                        points: ["cite: Specifies the URL of the quote's source."]
                    },
                    {
                        title: "Practical Examples"
                    },
                    {
                        title: "Using <blockquote> for Long Quotes"
                    },
                    {
                        code: [`<blockquote cite="https://example.com">This is a long quote from an external source. This quote can span multiple lines and paragraphs.</blockquote>`]
                    },
                    {
                        title: "Using <q> for Short, Inline Quotes"
                    },
                    {
                        code: {type: "none", code: [`The philosopher said, `,`<q cite="https://example.com">The unexamined life is not worth living.</q>`]}
                    },
                    {
                        title: "Styling with CSS"
                    },
                    {
                        desc: "You can style these tags using CSS to better match the aesthetics of your website."
                    },
                    {
                        title: "Conclusion"
                    },
                    {
                        desc: "The <blockquote> and <q> tags are essential for semantically marking up quotations in HTML. They provide both readability and SEO benefits. Understanding how to use these tags effectively can add more depth and clarity to your web content."
                    }
                ]
            },
            {
                title: "Obsolete HTML Tags",
                content: [
                    {
                        desc: "As HTML has evolved, some tags have been deprecated or become obsolete. While modern browsers might still support them, their use is discouraged in favor of CSS or more semantic HTML5 elements. In this blog, we'll explore some of these obsolete tags and their modern alternatives."
                    },
                    {
                        title: "What Are Obsolete Tags?"
                    },
                    {
                        desc: "Obsolete tags are HTML elements that are no longer recommended for use. They may lack support in modern browsers and are likely to be phased out entirely in future versions of HTML."
                    },
                    {
                        title: "Why Avoid Obsolete Tags?"
                    },
                    {
                        points: [
                            `Compatibility Issues: Not supported by all modern browsers.`,
                            `Accessibility: This may not meet current web accessibility standards.`,
                            `Maintenance: Makes future updates difficult.`
                        ]
                    },
                    {
                        title: "Examples of Obsolete Tags"
                    },
                    {
                        title: "The <font> Tag"
                    },
                    {
                        desc: "Used to specify text color, size, and font."
                    },
                    {
                        code: [`<font color="red" size="3" face="verdana">This is some text</font>`]
                    },
                    {
                        title: "The <center> Tag"
                    },
                    {
                        desc: "Used to center-align elements."
                    },
                    {
                        code: [`<center>This text will be centered</center>`]
                    },
                    {
                        title: "The <u> Tag"
                    },
                    {
                        desc: "Used to underline text."
                    },
                    {
                        code: [`<u>This text will be underlined</u>`]
                    },
                    {
                        title: "Modern Alternatives"
                    },
                    {
                        desc: "It's better to use CSS for styling and layout as it separates content from presentation."
                    },
                    {
                        title: "Replacing <font>"
                    },
                    {
                        code: [`<span style="color:red; font-size:16px; font-family:verdana;">This is some text</span>`]
                    },
                    {
                        title: "Replacing <center>"
                    },
                    {
                        code: [`<div style="text-align:center;">This text will be centered</div>`]
                    },
                    {
                        title: "Replacing <u>"
                    },
                    {
                        code: [`<span style="text-decoration:underline;">This text will be underlined</span>`]
                    },
                    {
                        desc: "Understanding obsolete HTML tags is not just a trip down memory lane; it also emphasizes the importance of keeping up to date with the latest web standards. Always opt for modern, semantic HTML and CSS for styling to ensure your websites are future-proof."
                    }
                ]
            },
            {
                title: "Character Sets",
                content: [
                    {
                        desc: "Character sets are an essential concept in HTML, influencing how textual content is displayed and interpreted by the browser. This blog aims to elucidate what character sets are, why they matter, and how to specify them in HTML."
                    },
                    {
                        title: "What is a Character Set?"
                    },
                    {
                        desc: "A character set is a set of symbols and characters that a computer uses to represent text. In HTML, specifying the correct character set ensures that text is displayed properly across different browsers and platforms."
                    },
                    {
                        title: "Why is it Important?"
                    },
                    {
                        desc : "Using the correct character set is crucial for:"
                    },
                    {
                        points: [
                            `Accurate Rendering: To ensure that browsers correctly display your text.`,
                            `Multi-language Support: To display text in various languages and alphabets.`,
                            `Data Integrity: To make sure the data sent and received remains consistent.`,
                        ]
                    },
                    {
                        title: "Specifying Character Set in HTML"
                    },
                    {
                        desc: "The character set is generally specified using the <meta> tag within the <head> section of an HTML document"
                    },
                    {
                        code: [`<meta charset="UTF-8">`]
                    },
                    {
                        title : "Common Character Sets"
                    },
                    {
                        desc: "Here are some commonly used character sets:"
                    },
                    {
                        points: [
                            `UTF-8: Universal Character Set, 8-bit. It can represent any character in the Unicode standard.`,
                            `ISO-8859-1: Western Alphabet.`,
                            `ASCII: American Standard Code for Information Interchange.`,
                        ]
                    },
                    {
                        title :"Examples"
                    },
                    {
                        title :"Using UTF-8"
                    },
                    {
                        code: [`<meta charset="UTF-8">`]
                    },
                    {
                        title :"Using ISO-8859-1"
                    },
                    {
                        code: [`<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">`]
                    },
                    {
                        desc: "Understanding and specifying the correct character set is crucial for creating web pages that render text accurately across different platforms and languages. UTF-8 is the most commonly used and recommended character set due to its wide applicability and support."
                    }
                ]
            }
        ]
    }
]
