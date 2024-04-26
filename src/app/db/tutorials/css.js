export const db_css = [
    // first page
    {
        title: "Introduction",
        page: [
            {
                title: "CSS Overview",
                content: [
                    {
                        desc: "CSS styles HTML elements, defining appearance. It uses selectors for targeting and properties for styling. Syntax involves selectors followed by property-value pairs. Styles can cascade with precedence based on specificity. Units control measurements. The box model governs layout. Media queries enable responsiveness. Flexbox and Grid Layout aid in positioning. Vendor prefixes ensure cross-browser compatibility. Preprocessors like Sass enhance CSS with variables and mixins, improving code maintainability. Overall, CSS crafts visually appealing and responsive web designs."
                    },
                    {
                        title: "What is CSS?"
                    },
                    {
                        desc: "CSS stands for Cascading Style Sheets. It is a stylesheet language that is used to describe the visual presentation of a web page written in HTML (Hypertext Markup Language)."
                    },
                    {
                        desc: "HTML creates the structure of the page, while CSS adds styling to that structure. This tutorial assumes that you have prior knowledge of HTML. If that's not the case, you can follow the HTML tutorial first."
                    },
                    {
                        redirect: {
                            text: "HTML tutorial",
                            href: "/tutorial/html/?query=html+overview"
                        }
                    },
                    {
                        title: "Why the word \"cascade\"?"
                    },
                    {
                        desc: `The term "cascade" refers to the priority scheme determining which CSS rules are applied when multiple rules target an element. This scheme takes into account specificity and inheritance, ensuring that the most specific and latest rules are applied.`
                    },
                    {
                        title: "Why use CSS?"
                    },
                    {
                        desc: "CSS is used to style HTML documents and control their visual appearance on web pages. Here's why it's essential:"
                    },
                    {
                        points: [
                            `Separation of Concerns: CSS separates content (HTML) from presentation (styling), making it easier to maintain and update each aspect independently.`,
                            `Consistency: CSS enables consistent styling across a website, ensuring uniformity in design elements like colors, fonts, and layout.`,
                            `Flexibility: With CSS, you can customize the appearance of HTML elements extensively, including size, color, spacing, borders, and backgrounds.`,
                            `Responsiveness: Media queries in CSS allow designs to adapt to different screen sizes and devices, ensuring a consistent user experience across desktops, tablets, and smartphones.`,
                            `Efficiency: CSS rules can be applied globally or targeted to specific elements, allowing for efficient styling of large websites with minimal repetition.`,
                            `Accessibility: CSS can enhance accessibility by allowing developers to modify the presentation of content to better suit users with disabilities, such as adjusting font sizes or contrast ratios.`,
                            `Browser Compatibility: CSS helps ensure consistent rendering across different web browsers, as it provides a standardized way to specify styles that browsers understand.`,
                            `Ease of Maintenance: Centralizing styles in CSS files makes it easier to update the appearance of a website globally by making changes to the CSS file rather than individual HTML files.`,
                            `Page Load Speed: Separating styling into external CSS files allows browsers to cache stylesheets, improving page load speed for subsequent visits to the website.`,
                            `Scalability: CSS is scalable and can accommodate the needs of websites ranging from simple personal blogs to complex web applications, offering a wide range of styling capabilities.`,
                        ]
                    },
                    {
                        desc: "personal blogs to complex web applications, offering a wide range of styling capabilities."
                    },
                    {
                        title: "Analogy to Understand CSS"
                    },
                    {
                        desc: "Imagine reading a book with only plain text. It's quite dull, isn't it? Now picture a book enriched with different colors, fonts, and styles. That's what CSS does to a webpage."
                    },
                    {
                        title: "How does CSS work?"
                    },
                    {
                        desc: "CSS operates by selecting HTML elements and applying styles to them. Styles dictate the appearance of elements on a webpage. You can target HTML elements, classes, or IDs, defining properties like colors, fonts, margins, etc."
                    },
                    {
                        code: [
                            `/* Example of a CSS rule */`,
                            `selector {`,`property: value;`, `}`,
                        ]
                    },
                    {
                        title: "Quick Follow-Up Task:"
                    },
                    {
                        points: [
                            `Right-click on the screen and select "Inspect" or press (Ctrl + Shift + C).`,
                            `Click on the arrow icon in the top-left corner of the inspection pane.`,
                            `Select elements on the page to toggle the CSS rules.`
                        ]
                    },
                    {
                        title: "Key Features of CSS:"
                    },
                    {
                        points: [
                            `Styles and layouts of web pages.`,
                            `Works alongside HTML and XML documents.`,
                            `Enables responsive design for different screen sizes.`,
                            `Supports interactive effects like hover states and animations.`,
                            `CSS is now modularized, with ongoing updates rather than version numbers.`,
                            `Allows reusability of the same rules across multiple HTML documents.`,
                        ]
                    },
                    {
                        title: "History of CSS"
                    },
                    {
                        desc: "Sure! CSS, which stands for Cascading Style Sheets, is like the makeup for a website. Just like makeup enhances someone's appearance, CSS makes websites look good. It's a language used to style web pages and make them visually appealing."
                    },
                    {
                        desc: "Imagine you have a plain HTML document, which is like a plain cake. CSS is what adds the colors, fonts, and layouts to make it look nice. For example, CSS can change the text color, background color, font size, and spacing of elements on a webpage."
                    }
                ]
            },
            {
                title: "Installation of CSS",
                content: [
                    {
                        desc: "In this tutorial, we will focus on creating our first CSS website."
                    },
                    {
                        desc: "We will divide the tutorial into the following parts:"
                    },
                    {
                        points: [
                            `Setting up the environment.`,
                            `Creating an HTML page.`,
                            `Adding CSS to HTML.`,
                        ]
                    },
                    {
                        title :"Setting up the Environment"
                    },
                    {
                        title: "Installing VS Code"
                    },
                    {
                        points: [
                            `Go to Google using your preferred browser.`,
                            `Type Visual Studio Code download in the search bar.`,
                            `Click on download and follow the installation instructions for your OS (Operating System).`,
                        ]
                    },
                    {
                        link: "https://code.visualstudio.com/download"
                    },
                    {
                        video: {
                            video : "/videos/tutorials/html/download-vscode.mp4"
                        }
                    },
                    {
                        title: "Installing the Live Server Extension"
                    },
                    {
                        desc: "We will also install the Live Server extension in Visual Studio Code to enable live reloading of pages. The Live Server extension launches a local development server and reloads the page live as you make changes. Here's a quick video showing how to install the Live Server extension:"
                    },
                    {
                        video: {
                            video: "/videos/tutorials/html/install-live-server.mp4"
                        }
                    },
                    {
                        title: "Creating an HTML Page"
                    },
                    {
                        desc: "If you're not comfortable with HTML, you can start by following this HTML Tutorial."
                    },
                    {
                        redirect: {
                            text: "Learn HTML Tutorial",
                            href: "/tutorial/html/?query=html+overview"
                        }
                    },
                    {
                        desc: "Assuming you have some knowledge of HTML, open VS Code and create a new file named `index.html`."
                    },
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-home/img1.png",
                            width: 1000, height: 1000
                        }
                    },
                    {
                        desc: "After creating the HTML file, type \"!\" and press enter. This will generate the default HTML boilerplate."
                    },
                    {
                        points: [
                            "Create a `index.html` file in vs code",
                            "type in `index.html` type of `!` and press enter.",
                            "Automatic add a boilerplate of html.",
                            "And click `Go Live` Button."
                        ]
                    },
                    {
                        code: [
                            `<!DOCTYPE html>`,
                            `<html lang="en">`,
                            `<head>`,
                            `<meta charset="UTF-8">`,
                            `<title>First CSS Website</title>`,
                            `</head>`,
                            `<body>`,
                            `This is your first css website.`,
                            `</body>`,
                            `</html>`,
                        ]
                    },
                    {
                        title: "Go Live"
                    },
                    {
                        video: {
                            video: "/videos/tutorials/html/install-live-server.mp4"
                        }
                    },
                    {
                        title: "Adding CSS to HTML"
                    },
                    {
                        desc: "Now that we've set up the environment and created an HTML page, let's add some CSS to style it. Inside the head tag, add the following code:"
                    },
                    {
                        desc: "`<style>` tag add between of `</head>` ... `<body>` in `index.html` page."
                    },
                    {
                        code: [
                            `<style>`,
                            `body {`,
                            `text-align: center;`,
                            `color: white;`,
                            `background-color: purple;`,
                            `}`,
                            `</style>`,
                        ]
                    },
                    {
                        desc: "You've successfully begun your journey into the world of CSS! As you follow these tutorials, you'll gain a better understanding of various CSS properties."
                    }
                ]
            },
            {
                title: "How CSS works?",
                content: [
                    {
                        desc: "We wrote our first CSS style but still, things wouldn’t be very much clear. Let’s look at how CSS works on the DOM model."
                    },
                    {
                        title: "How CSS Works?"
                    },
                    {
                        desc: "The following steps will help us understand more about CSS working :"
                    },
                    {
                        points: [
                            `The user types the URL and clicks enter.`,
                            `The browser makes a fetch request to the server.`,
                            `HTML is fetched from the server.`,
                            `HTML is converted into a DOM. In the DOM, each tag is considered a node.`,
                            `The browser fetches all the related files and assets that are linked to that HTML, such as external CSS, fonts, images, etc.`,
                            `The browser then parses the CSS and groups it based on the selectors, which can be tags.`,
                            `Each CSS is attached to its respective node. In this phase, CSS gets attached to its respective node. This is called a render tree.`,
                            `The render tree is the well-structured, well-arranged DOM node that will appear on the screen.`,
                            `The well-structured, custom-designed website is presented on the screen. This is called painting.`,
                        ]
                    },
                    {
                        image: {
                            image: "https://blogs.brain-mentors.com/content/images/2023/02/image.png",
                            width: 1000,
                            height: 1000
                        }
                    },
                    {
                        title: "What is a DOM?"
                    },
                    {
                        desc: "A DOM is like a tree structure representation of all the tags and elements on the page. Each part of a web page, like headings, paragraphs, images, buttons, etc., will be part of the tree. You can think of it as a blueprint for a web page that web browsers use to understand and display web content."
                    },
                    {
                        desc: "Consider the below example,"
                    },
                    {
                        image: {
                            image: "/image/tutorials/css/css-eg.png",
                            width: 500,
                            height: 500
                        }
                    },
                    {
                        desc: "The tags are converted into nodes. Each node establishes a parent-child relationship between each other. To be precise, Document Object Model(DOM) is a sort of API that represents and interacts with HTML documents."
                    },
                    {
                        desc: "The final result of the above code (the painting):"
                    },
                    {
                        image: {
                            image: "/image/tutorials/css/css-bro-eg.png",
                            width: 1000, height:1000
                        }
                    }
                ]
            },
            {
                title: "Syntax of CSS",
                content: [
                    {
                        desc: "CSS follows a rule-based structure. Each rule consists of a selector and a declaration block. Selectors pick the HTML elements, while declaration blocks contain pairs of properties and values."
                    },
                    {
                        desc: "The general syntax for writing CSS."
                    },
                    {
                        code: [`selector {`, `property: value;`, `}`]
                    },
                    {
                        desc: "Note: Semi-colon (;) at the end of each new property and property value is IMPORTANT."
                    },
                    {desc: "For example:"},
                    {
                        code: [`h2 {`, `color: blue;`, `}`,]
                    },
                    {desc: "In the example:"},
                    {
                        points: [
                            `h2: h2 is the selector.`,
                            `color: It's the property.`,
                            `blue: The property value.`,
                        ]
                    },
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/css-syntax/css%20syntx.png",
                            width: 1000, height: 1000
                        }
                    },
                    {
                        desc: "Within the declaration block, there can be multiple pairs of properties and values."
                    },
                    {desc: "Consider the example:"},
                    {
                        code: [
                            `button{`,
                                `color: white;`,
                                `background-color: black;`,
                                `border: transparent;`,
                                `border-radius: 5px;`,
                            `}`,
                        ]
                    },
                    {
                        desc: "Here, 'button' is the selector, and there are multiple pairs of properties and values. Each pair is separated by a semicolon \";\"."
                    }
                ]
            },
            {
                title:"Ways to add CSS",
                content:[
                    {
                        desc: "There are three different ways to add CSS to an HTML page, which are:"
                    },
                    {
                        points: [`Inline CSS`, `Internal CSS`, `External CSS`,]
                    },
                    {
                        title: "Inline CSS"
                    },
                    {
                        desc: "Inline CSS is used to add custom properties to specific elements. The added style will only reflect on that particular element only."
                    },
                    {
                        desc: "To use inline CSS, Insert the \"style\" attribute within the HTML element's opening tag."
                    },
                    {desc: "Consider the code snippet:"},
                    {
                        code: [
                            `<h1 style="color: purple;">I am Deepak Dhiman</h1>`,
                            `<h2>I am ProgrammerD</h2>`,
                        ]
                    },
                    {
                        image: {
                            image: "/image/tutorials/css/css-test1.png",
                            height: 500, width: 500
                        }
                    },
                    {
                        desc: "Here, the inline style of color: purple is attached to only the h1 tag."
                    },
                    {
                        desc: "Note: The downside of using inline CSS is, that once the project complexity increases, it will become difficult to manage the styles of each and individual elements."
                    },
                    {
                        title: "Internal CSS"
                    },
                    {
                        desc: "Internal CSS is used to apply custom style to the multiple elements on the same page. The style can be used throughout the HTML page."
                    },
                    {
                        desc: "Internal CSS is defined in a style block, which will be inside the head section."
                    },
                    {desc: "Consider the code snippet:"},
                    {
                        code: [
                            `<head>`,
                            `<style>`,
                            `p {`,
                            `color: red;`,
                            `}`,
                            `</style>`,
                            `</head>`,
                            `<body>`,
                            `<h1>Programmer D</h1>`,
                            `<p>I am Deepak, from Programmer D</p>`,
                            `<p>I am a Developer and founder of programmerd.in</p>`,
                            `</body>`,
                            `</html>`,
                        ]
                    },
                    {
                        image: {
                            image: "/image/tutorials/css/css-test2.png",
                            height: 500, width: 500
                        }
                    },
                    {
                        desc: "Here, in the style block, selector p will target all p tags and assign them color:red."
                    },
                    {
                        desc: "Note: The <style> block should always be in the <head> section."
                    },
                    {
                        title :"External CSS"
                    },
                    {
                        desc: "External CSS works similarly to internal CSS but with a twist. Instead of adding the styles within the HTML file, we create a separate file with .css extension. This file will hold all the styling details. Then, we link this file to the HTML page, giving it the instructions on how to look. "
                    },
                    {
                        desc: "The following video will explain, how to link a CSS file to HTML."
                    },
                    {
                        video: {
                            video: "/videos/tutorials/css/style-file-make.mp4"
                        }
                    },
                    {
                        desc: "There is a new <link> tag in the head section, and this link tag has rel and href properties."
                    },
                    {desc:"The following points will explain each keyword's meaning: "},
                    {
                        points: [
                            `<link>: This tag is used to create links between different resources, like stylesheets, fonts, and more. In our case, we are using a link tag to link the CSS file with the HTML file.`,
                            `rel="stylesheet": rel stands for relationship,  this defines the type of relationship between the HTML document and the linked resource. When set to "stylesheet", it specifies that the linked resource is a stylesheet that will be used to style the HTML content.`,
                            `href="style.css" : The href attribute stands for "hypertext reference." It specifies the path or URL to the external resource we want to link. In this case, it's the path to the external CSS file called "style.css".`,
                        ]
                    },
                    {desc:"Consider the code snippets:"},
                    {title: "Add Code in `index.html` file"},
                    {
                        code: [
                            `<html lang="en">`,
                            `<head>`,
                            `<title>Programmer D</title>`,
                            `<link rel="stylesheet" href="style.css">`,
                            `</head>`,
                            `<body>`,
                            `<p>I am Deepak, from Programmer D</p>`,
                            `<p>I'm a Developer and founder of programmerd.in</p>`,
                            `</body>`,
                            `</html>`,
                        ]
                    },
                    {title: "Add code in `style.css` file"},
                    {
                        code: [`p{`, `color: red;`, `}`]
                    },
                    {
                        desc: "This approach enables to use of the same CSS to multiple HTML files, wherever the same custom style is required. This is helpful when we have to maintain consistency on our web pages and want to use the same CSS styles across multiple pages."
                    },
                    {
                        desc: "Note: The precedence is Inline CSS > Internal CSS > External CSS. If we define the same property with different property values in three different ways, the element will have the property value of inline CSS.Feel free to explore the CSS Wikipedia page to gain more insights about CSS working."
                    }
                ]
            },
            {
                title: "CSS Selectors",
                content: [
                    {
                        title: "What are CSS Selectors?"
                    },
                    {
                        desc: "CSS selectors allow us to choose specific elements and apply styles to them. Suppose we want to add a custom style to only a specific tag(s). There, We can make use of CSS selector.",
                    },
                    {
                        desc: "There are different types of CSS selectors, which are as follows:"
                    },
                    {
                        points: ["Universal Selector","Element Selector","Id Selector","Class Selector","Group Selector",]
                    },
                    {desc:"Let's look into these selectors one by one"},
                    {
                        title: "Universal Selector"
                    },
                    {
                        desc: `Universal selector represented by "*" targets all the HTML elements on the page.`
                    },
                    {desc: "The syntax of Universal Selector is as follows:"},
                    {
                        code: ["* {","property : value;","}"]
                    },
                    {
                        title: "Consider the code snippet:"
                    },
                    {
                        code: [
                            `<html>`,
                            `<head>`,
                            `<style>`,
                            `* {`,
                            `color: purple;`,
                            `text-align: center;`,
                            `}`,
                            `</style>`,
                            `</head>`,
                            `<body>`,
                            `<p>Welcome to </p>`,
                            `<h1>Programmer D</h1>`,
                            `</body>`,
                            `</html>`,
                        ]
                    },
                    {desc:"Output:"},
                    {
                        html: `<html>
                        <head>
                            <style>
                                * {
                                    color: purple;
                                    text-align: center;
                                }
                            </style>
                        </head>
                        <body>
                            <p>Welcome to </p>
                            <h1>Programmer D</h1>
                        </body>
                        </html>`
                    },
                    {desc:"Notice, Irrespective of the tag, the style will be applied to all the elements and tags."},
                    {
                        title: "Element Selector (Type Selector)"
                    },
                    {
                        desc: "The element selector selects the target element based on the specific type. Suppose you want to underline all the <p> tags; in this case, the element selector will be the best choice."
                    },
                    {desc:"The syntax of Element Selector is as follows:"},
                    {
                        code: [`p {`,`property : value;`,`}`]
                    },
                    {
                        desc: "A selector can be any HTML tag. Here, we have considered the p tag."
                    },
                    {desc:"Consider the code snippet:"},
                    {
                        code: [
                            `<html>`,
                            `<head>`,
                            `<title>CSS</title>`,
                            `<style>`,`p{`,`text-decoration: underline;`,`}`,`</style>`,
                            `</head>`,
                            `<body>`,
                            `<h1>Programmer D</h1>`,
                            `<p>Python Tutorials - 100 Days of Code</p>`,
                            `<p>Ultimate JavaScript Course</p>`,
                            `<p>Next JS Tutorials For Beginners</p>`,
                            `</body>`,
                            `</html>`,
                        ]
                    },
                    {desc: "Output:"},
                    {
                        html : `<html>
                        <head>
                            <title>CSS</title>
                            <style>
                                p{
                                    text-decoration: underline;
                                }
                            </style>
                        </head>
                        <body>
                            <h1>Programmer D</h1>
                            <p>Python Tutorials - 100 Days of Code</p>
                            <p>Ultimate JavaScript Course</p>
                            <p>Next JS Tutorials For Beginners</p>
                        </body>
                        </html>`
                    },
                    {desc:"Note: Element selector is not recommended as the same tag can be used multiple times in the document. So, overlapping rules can occur in the stylesheet."},
                    {
                        title: "ID Selector"
                    },
                    {
                        desc:"The ID selector targets the elements based on the specific ID. It is written with the hash “#” character followed by the ID name in the style sheet."
                    },
                    {desc: "The syntax of ID Selector is as follows:"},
                    {
                        code: [`#ID {`,`property : value;`,`}`]
                    },
                    {desc:"Consider the code snippet:"},
                    {
                        code:[
                            `<html>`,
                            `<head>`,
                            `<style>`,`#title {`,`text-align: center;`,`color: red;`,`}`,`</style>`,
                            `</head>`,
                            `<body>`,
                            `<h1 id="title">Programmer D</h1>`,
                            `<p>I am a Developer and the founder of programmerd.in</p>`,
                            `</body>`,
                            `</html>`,
                        ]
                    },
                    {desc:"In the style block, the selector  #title, will only target the HTML element having an ID of \"title\"."},
                    {desc:"Consider the output of the above code:"},
                    {
                        html:`<html>
                        <head>
                            <style>
                                #title {
                                    text-align: center;
                                    color: red;
                                }
                            </style>
                        </head>
                        <body>
                            <h1 id="title">Programmer D</h1>
                            <p>I am a Developer and the founder of programmerd.in</p>
                        </body>
                        </html>`
                    },
                    {desc:"Notice, how the property color: red is only applied to <h1> tag."},
                    {
                        title: "Class Selector"
                    },
                    {
                        desc:"The class selector does the same job as the id selector, a class selector helps group various types of elements. Suppose, we want to give a custom style to a specific group of elements. In this case, the class selector is the best option. It is written with the period “.” character followed by the class name in the style sheet."
                    },
                    {desc:"The syntax of Class Selector is as follows:"},
                    {
                        code: [`.class {`,`property : value;`,`}`]
                    },
                    {desc: "Consider the code snippet:"},
                    {
                        code : [
                            `<html>`,
                            `<head>`,
                            `<title>CSS</title>`,
                            `<style>`,`.red {`,`color: red;`,`}`,`</style>`,
                            `</head>`,
                            `<body>`,
                            `<p>This is simple p tag</p>`,
                            `<p class="red">This p tag has class red</p>`,
                            `<p>This is simple p tag</p>`,
                            `<p class="red">This p tag has class red</p>`,
                            `</body>`,
                            `</html>`,
                        ]
                    },
                    {desc:"In the above code snippet, the color:red will only be applied to the element having class 'red'."},
                    {
                        html: `<html>
                        <head>
                            <title>CSS</title>
                            <style>
                                .red {
                                    color: red;
                                }
                            </style>
                        </head>
                        <body>
                            <p>This is simple p tag</p>
                            <p class="red">This p tag has class red</p>
                            <p>This is simple p tag</p>
                            <p class="red">This p tag has class red</p>
                        </body>
                        </html>`
                    },
                    {desc:"Note: The class selector helps in grouping two or more elements."},
                    {
                        title: "Group Selector"
                    },
                    {
                        desc: `The group selector is used to minimise the code. Commas "," are used to separate each selector in a grouping. This reduces the number of lines of code. The code also looks clean.`
                    },
                    {desc: "The syntax of Group Selector is as follows:"},
                    {
                        code: [`div, p, a {`,`property : value;`,`}`]
                    },
                    {desc: "Consider the code snippet:"},
                    {
                        code: [
                            `<html>`,
                            `<head>`,
                            `<title>CSS</title>`,
                            `<style>`,
                            `h1 {`,`color: red;`,`}`,
                            `p,a {`,`color: purple;`,`}`,
                            `</style>`,
                            `</head>`,
                            `<body>`,
                            `<h1>Programmer D</h1>`,
                            `<p>This is the p tag</p>`,
                            `<a href="#">This is the anchor (a) tag</a>`,
                            `</body>`,
                            `</html>`,
                        ]
                    },
                    {desc:"In the <style> block, p and a tag are grouped together so, that both tags will have the same properties."},
                    {
                        html: `<html>
                        <head>
                            <title>CSS</title>
                            <style>
                                h1 {
                                    color: red;
                                }
                                p,a {
                                    color: purple;
                                }
                            </style>
                        </head>
                        <body>
                            <h1>Programmer D</h1>
                            <p>This is the p tag</p>
                            <a href="#">This is the anchor (a) tag</a>
                        </body>
                        </html>`
                    },
                    {
                        title: "Summary:"
                    },
                    {
                        points: [
                            `Universal Selector(*): Target the entire page.`,
                            `Element Selector: Target a specific element.`,
                            `ID Selector(#): Target element with a specific ID.`,
                            `Class Selector(.): Target element(s) with the same class.`,
                            `Group Selector: Group elements and target them.`,
                        ]
                    }
                ]
            },
            {
                title: "CSS Comments",
                content: [
                    {
                        points:[ 
                            `Comments help with documentation and are helpful for the future users who read that code, so that they can understand it easily.`,
                            `Comments are ignored by the browser and Comments don't affect the styling or layout.`,
                            `CSS Comments are enclosed between /* and */.`,
                            `There are two types of comments in CSS:`,
                        ]
                    },
                    {
                        title: "Single-line comment:"
                    },
                    {desc:"Single-line comments are contained within one line. They are useful for short annotations."},
                    {title: "Syntax"},
                    {
                        code: [`selector{`,`/* property: value */`,`}`]
                    },
                    {desc: "for example:"},
                    {
                        code: [
                            `/* This is a single line commnent */`,
                            `p{`,`/* color: red */`,`}`
                        ]
                    },
                    {desc:"here, the comment is between /* and */"},
                    {
                        title:"Multi-line comments"
                    },
                    {
                        desc: "Multi-line comments span across multiple lines, making them ideal for detailed explanations or temporarily disabling blocks of code."
                    },
                    {
                        title: "Syntax"
                    },
                    {
                        code:[
                            `selector{`,
                            `/* property1: value1`,
                            `property1: value1`,
                            `property1: value1 */`,
                            `}`,
                        ]
                    },
                    {
                        desc:"These are similar to single-line comments, but this helps to comment large descriptions, notes, etc."
                    },
                    {desc:"for example:"},
                    {
                        code: [
                            `/* This is a`,
                            `multi line`,
                            `commment */`,
                            `p {`,
                            `/* color: red;`,
                            `background-color: purple; */`,
                            `color: purple;`,
                            `background-color: red;`,
                            `}`,
                        ]
                    },
                    {
                        points: ["Tip: If you are using vs code, you can use `cltr + /` to comment the line."]
                    }
                ]
            },
            {
                title: "CSS Specificity",
                content: [
                    {
                        desc: "CSS Specificity helps determine what style will be applied to the HTML element(s) when there are overlapping or multiple CSS rules."
                    },
                    {
                        desc:"It is a value or weight assigned to a CSS selector. The higher the specificity, the more precedence the selector has. Let's consider the following code"
                    },
                    {
                        code: [
                            `<html>`,
                            `<head>`,
                            `<style>`,
                            `*{`,`color: gray;`,`}`,
                            `#title{`,`color: red;`,`}`,
                            `.h1{`,`color: blue;`,`}`,
                            `h1{`,`color: pink;`,`}`,
                            `</style>`,
                            `</head>`,
                            `<body>`,
                            `<h1 id="title" class="h1" style="color:purple">Programmer D</h1>`,
                            `</body>`,
                            `</html>`,
                        ]
                    },
                    {
                        desc: "Here the question is, what color will h1 be assigned to? This is calculated based on the selector's components which we will discussed in this tutorial."
                    },
                    {
                        title: "The Cascade Algorithm"
                    },
                    {
                        desc: "CSS stands for Cascading Stylesheets. The cascade is the algorithm for solving conflicts where multiple CSS rules apply to an HTML element. It's the reason that the text of the button styled with the above CSS will be purple."
                    },
                    {
                        desc: "Understanding the cascade algorithm helps you understand how the browser resolves conflicts like this. The cascade algorithm has 4 distinct stages."
                    },
                    {
                        points:[
                            `Position and order of appearance: the order in which your CSS rules appear`,
                            `Specificity: an algorithm that determines which CSS selector has the strongest match`,
                            `Origin: the order in which CSS appears and where it comes from, whether that is a browser style, CSS from a browser extension, or your authored CSS`,
                            `Importance: some CSS rules are weighted more heavily than others, especially with the !important rule type Lets look into all these one by one`,
                        ]
                    },
                    {
                        title: "Effect of Position"
                    },
                    {
                        desc: `If there are two rules that have selectors of identical specificity, the last one to be declared won. In an HTML page, you can add styles in different ways: through a <link> tag, a <style> tag, or directly in the element's style attribute. If you have one <link> tag at the top of your page and another at the bottom, the styles from the bottom one will be used. The same goes for <style> tags; the ones lower down on the page take priority.

                        An inline style attribute with CSS declared in it will override all other CSS, regardless of its position, unless a declaration has !important defined.`
                    },
                    {
                        desc:"If the browser doesn't support a property, it is ignored!"
                    },
                    {
                        title: "Specificity"
                    },
                    {
                        desc:"CSS specificity determines which style rules get applied to an element when there are conflicts. Higher specificity means the style will be used. It's calculated based on a point system involving inline styles, IDs, classes, and tag names."
                    },
                    {
                        title: "Inline Styles"
                    },
                    {
                        desc: "Inline styles have the highest specificity and will always override styles if other selector(s) are also defined."
                    },
                    {
                        code: [
                            `<html>`,
                        `<head>`,
                            `<style>`,
                                `*{`,
                                    `color: gray;`,
                                `}`,
                                `#title{`,
                                    `color: red;`,
                                `}`,
                                `.h1{`,
                                    `color: blue;`,
                                `}`,
                                `h1{`,
                                    `color: pink;`,
                                `}`,
                            `</style>`,
                        
                        `</head>`,
                        `<body>`,
                            `<h1 id="title" class="h1" style="color:purple">Programmer D</h1>`,
                        `</body>`,
                        `</html>`,
                        ]
                    },
                    {desc: "Output:"},
                    {
                        html: `<html>
                        <head>
                            <style>
                                *{
                                    color: gray;
                                }
                                #title{
                                    color: red;
                                }
                                .h1{
                                    color: blue;
                                }
                                h1{
                                    color: pink;
                                }
                            </style>
                        
                        </head>
                        <body>
                            <h1 id="title" class="h1" style="color:purple">Programmer D</h1>
                        </body>
                        </html>`
                    },
                    {
                        desc: "Here, you can see that the color: purple is applied to the h1 tag."
                    },
                    {
                        title: "ID Selector"
                    },
                    {
                        desc: "The ID selector also has high specificity but comes after the inline Style specificity. So, if we have an ID and other selectors except the inline style, then the element will take the ID selector properties and values."
                    },
                    {
                        code: [
                            `<head>`,
                            `<style>`,
                                `*{`,
                                    `color: gray;`,
                                `}`,
                                `#title{`,
                                    `color: red;`,
                                `}`,
                                `.h1{`,
                                    `color: blue;`,
                                `}`,
                                `h1{`,
                                    `color: pink;`,
                                `}`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<h1 id="title" class="h1">Programmer D</h1>`,
                        `</body>`,
                        `</html>`,
                        ]
                    },
                    {desc: "Output:"},
                    {
                        html: `<head>
                        <style>
                            *{
                                color: gray;
                            }
                            #title{
                                color: red;
                            }
                            .h1{
                                color: blue;
                            }
                            h1{
                                color: pink;
                            }
                        </style>
                    </head>
                    <body>
                        <h1 id="title" class="h1">Programmer D</h1>
                    </body>
                    </html>`
                    },
                    {desc:"Here, you can see the color: red is applied to the h1 tag."},
                    {
                        title: "Class and Attribute Selectors"
                    },
                    {
                        desc:"Class selectors and attribute selectors have moderate specificity. Suppose the element has a class or attribute selector and not an inline style or ID selector, then the element will take properties and values from the class or attribute selector."
                    },
                    {
                        code: [
                            `<head>`,
                        `<style>`,
                            `*{`,`color: gray;`,`}`,
                            `.h1{`,`color: pink;`,`}`,
                        `</style>`,
                        `</head>`,
                        `<body>`,
                            `<h1 class="h1">Programmer D</h1>`,
                        `</body>`,
                        `</html>`,
                        ]
                    },
                    {
                        html: `<head>
                        <style>
                            *{color: gray;}
                            .h1{color: pink;}
                        </style>
                    </head>
                    <body>
                        <h1 class="h1">Programmer D</h1>
                    </body>
                    </html>`
                    },
                    {
                        desc: "Here, you can see color:pink is applied to the h1 tag."
                    },
                    {
                        title: "Element Selector:"
                    },
                    {
                        desc: "Element selectors like <p>, <div>, <a>, etc. have low specificity."
                    },
                    {
                        code: [
                            `<head>`,
                            `<style>`,
                                `*{`,`color: gray;`,`}`,
                                `h1{`,`color: tomato;`,`}`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<h1 class="h1">Programmer D</h1>`,
                        `</body>`,
                        `</html>`,
                        ]
                    },
                    {desc: "Output"},
                    {
                        html: `<head>
                        <style>
                            *{
                                color: gray;
                            }
                            h1{
                                color: tomato;
                            }
                        </style>
                    
                    </head>
                    <body>
                        <h1 class="h1">Programmer D</h1>
                    </body>
                    </html>`
                    },
                    {
                        desc: "Here, you can see color:tomato is applied to the h1 tag."
                    },
                    {
                        title: "Universal Selector:"
                    },
                    {
                        desc: "Universal selectors (*) and combining selectors like not, first-child, and last-child have the lowest specificity."
                    },
                    {
                        code: [
                            `<head>`,
                            `<style>`,
                                `*{`,`color: gray;`,`}`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<h1 class="h1">Programmer D</h1>`,
                        `</body>`,
                        `</html>`,
                        ]
                    },
                    {desc: "Output:"},
                    {
                        html: `<head>
                        <style>
                            *{
                                color: gray;
                            }
                        </style>
                    </head>
                    <body>
                        <h1 class="h1">Programmer D</h1>
                    </body>
                    </html>`
                    },
                    {
                        desc: `Here, you can see color:gray is applied to the h1 tag.
                        So, the order of specificity is:`
                    },
                    {
                        b: `Inline Style > ID Selector > Class or Attribute Selector > Element Selector > Universal Selector`
                    },
                    {
                        title: "Specificity Calculation"
                    },
                    {
                        desc:"To calculate specificity, assign a value to each part of the selector:"
                    },
                    {
                        points: [
                            `Universal Selector: 0`,
                            `Element selectors and pseudo-elements: 1`,
                            `Class selectors, attribute selectors, and pseudo-classes: 10`,
                            `ID selectors: 100`,
                            `Inline styles: 1000`,
                        ]
                    },
                    {
                        desc: "Then, add up the values of all the parts in the selector."
                    },
                    {desc: "Here is an example "},
                    {
                        code: [`<h1 id="title" class="h1">Programmer D</h1>`]
                    },
                    {
                        desc: "Here, the specificity value will be 111 because ID has a specificity of 100, the class has a specificity of 10, and the h1 element has a specificity of 1."
                    },
                    {desc:"In the case of a specificity tie, the rule that appears last in the CSS is applied."},
                    {
                        title :"Importance"
                    },
                    {
                        desc:"The !important flag in CSS is used to give a particular style rule the highest level of importance, overriding any other competing styles. When you add !important to a CSS rule, it will take precedence over other rules affecting the same element, regardless of their specificity. For example, if you have:"
                    },
                    {
                        code: [
                            `p {`,`color: red !important;`,`}`,
                            `p {`,`color: blue;`,`}`,
                        ]
                    },
                    {
                        desc: "The text in the <p> element will be red, not blue, because the !important flag makes that rule more important. an !important at the end of a CSS value gets a specificity score of 10,000 points. This is the highest specificity that one individual item can get."
                    },
                    {
                        desc: `However, it's generally best to use !important sparingly, as it can make debugging and maintaining your stylesheets more complicated. It can override styles in ways that are hard to trace, leading to unexpected results.`
                    },
                    {
                        title: "Quick Quiz"
                    },
                    {
                        desc: "What will be the specificity value of the following selector:"
                    },
                    {
                        code: [
                            `a.deepakclass.dot-class[href]:hover {`,`color: red;`,`}`,
                        ]
                    },
                    {
                        title:"Solution"
                    },
                    {
                        desc: "To calculate the specificity value of the selector a.harryclass.rohan-class[href]:hover, you can break down its components:"
                    },
                    {
                        points: [
                            `Element selectors: a contributes 1 point.`,
                            `Class selectors: .harryclass and .rohan-class each contributes 10 points, totaling 20 points.`,
                            `Attribute selector: [href] contributes 10 points.`,
                            `Pseudo-class: :hover adds another 10 points.`
                        ]
                    },
                    {desc: "Add up all these values:"},
                    {desc: "1 (element) + 20 (classes) + 10 (attribute) + 10 (pseudo-class) = 41."},
                    {desc: "So, the specificity value of the selector a.harryclass.rohan-class[href]:hover will be 41."}
                ]
            }
        ]
    },
    // second page
    {
        title: "CSS Properties",
        page: [
            {
                title: "CSS Colors",
                content: [
                    {
                        desc: "The color property of CSS helps to set the color of the HTML element(s). This helps to set the foreground color of text, text decorations, and borders."
                    },
                    {
                        title: "Syntax:"
                    },
                    {
                        code: [
                            `/* Syntax`,
                            `selector {`,
                                `color: value`,
                            `} `,
                            `*/`,
                            `selector {`,
                                `/* colorname can be any colour, such as red, blue, yellow, purple, green, etc. */`,
                                `color: colorname`,
                            `}`,
                        ]
                    },
                    {
                        desc: "Note: In CSS we use color, not colour."
                    },
                    {
                        title: "Example:"
                    },
                    {
                        code: [
                            `<head>`,
                            `<style>`,
                                `p{`,
                                    `color: purple;`,
                                `}`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<p>Hello World</p>`,
                            `<p>Programmer D</p>`,
                        `</body>`,
                        `</html>`,
                        ]
                    },
                    {desc: "Output"},
                    {
                        html: `<head>
                        <style>
                            p{
                                color: purple;
                            }
                        </style>
                    </head>
                    <body>
                        <p>Hello World</p>
                        <p>Programmer D</p>
                    </body>
                    </html>`
                    },
                    {
                        desc: "There are many ways to set the property-value of color, with some of the most common listed below."
                    },
                    {
                        title: "Hexadecimal notation:"
                    },
                    {
                        desc:"The hex code consists of a hash(#) symbol followed by six characters. These six characters are arranged into a set of three pairs (RR, GG, and BB)."
                    },
                    {
                        desc: "Each character pair defines the intensity level of the colour, where R stands for red, G stands for green, and B stands for blue."
                    },
                    {
                        desc: `The intensity value lies between 00 (no intensity) and ff (maximum intensity). 
                        Breaking the Character Set (RRGGBB):`
                    },
                    {
                        points: [
                            "RR: RR defines the intensity of color red, ranging from 00 (no red) to FF (maximum red).",
                            "GG: GG defines the intensity of color Green, with values from 00 (no green) to FF (full green).",
                            "BB: GG defines the intensity of color Blue, varying from 00 (no blue) to FF (full blue)."
                        ]
                    },
                    {
                        title: "Syntax:"
                    },
                    {
                        code: [
                            `seletor {`,`color: #RRGGBB;`,`}`
                        ]
                    },
                    {
                        title: "Example:"
                    },
                    {
                        code: [
                            `<head>`,
                        `<style>`,
                           `h1 {`,
                                `color: #FF0000;`,
                                `/*Pure Red*/`,
                            `}`,
                            `h2 {`,
                                `color: #00FF00;`,
                                `/* Pure Green */`,
                            `}`,
                            `h3 {`,
                                `color: #0000FF;`,
                                `/* Pure Blue */`,
                            `}`,
                            `h4 {`,
                                `color: #b700ff;`,
                                `/* Custom Color */`,
                            `}`,
                        `</style>`,
                    `</head>`,
                    `<body>`,
                        `<h1>Programmer D</h1>`,
                        `<h2>A Developer</h2>`,
                        `<h3>Founder programmerd.in</h3>`,
                        `<h4>Hello World</h4>`,
                    `</body>`,
                    `</html>`,
                        ]
                    },
                    {desc: "Output:"},
                    {
                        html : `<head>
                        <style>
                           h1 {
                                color: #FF0000;
                                /*Pure Red*/
                            }
                            h2 {
                                color: #00FF00;
                                /* Pure Green */
                            }
                            h3 {
                                color: #0000FF;
                                /* Pure Blue */
                            }
                            h4 {
                                color: #b700ff;
                                /* Custom Color */
                            }
                        </style>
                    </head>
                    <body>
                        <h1>Programmer D</h1>
                        <h2>A Developer</h2>
                        <h3>Founder programmerd.in</h3>
                        <h4>Hello World</h4>
                    </body>
                    </html>`
                    },
                    {
                        title: "RGB"
                    },
                    {
                        desc: "RGB stands for “Red, Green, Blue,” and it defines the colour value by taking three (red, green, blue) arguments. Each argument value lies between 0 and 255."
                    },
                    {
                        title: "Syntax:"
                    },
                    {
                        code: [
                            `selector{`,`color: rgb(red, green, blue);`,`}`
                        ]
                    },
                    {
                        title: "Example:"
                    },
                    {
                        code: [
                            `<head>`,
                        `<style>`,
                        `*{`, `background-color:gray;`, `}`,
                            `h1 {`,
                                `color: rgb(0, 0, 0);`,
                                `/* red:0, green:0, blue:0 */`,
                            `}`,
                            `h2 {`,
                                `color: rgb(255, 255, 255);`,
                                `/* red:255, green:255, blue:255 */`,
                            `}`,
                            `h3 {`,
                                `color: rgb(30, 150, 220);`,
                            `}`,
                        `</style>`,
                    `</head>`,
                    `<body>`,
                        `<h1>Programmer D</h1>`,
                        `<h2>A Developer</h2>`,
                        `<h3>programmerd.com founder</h3>`,
                    `</body>`,
                    `</html>`,
                        ]
                    },
                    {desc: "Output:"},
                    {
                        html: `<head>
                        <style>
                        *{background-color: gray;}
                            h1 {
                                color: rgb(0, 0, 0);
                                /* red:0, green:0, blue:0 */
                            }
                            h2 {
                                color: rgb(255, 255, 255);
                                /* red:255, green:255, blue:255 */
                            }
                            h3 {
                                color: rgb(30, 150, 220);
                            }
                        </style>
                    </head>
                    <body>
                        <h1>Programmer D</h1>
                        <h2>A Developer</h2>
                        <h3>programmerd.com founder</h3>
                    </body>
                    </html>`
                    },
                    {
                        title :"RGBA"
                    },
                    {
                        desc: "Similar to RGB, in RGBA, a stands for alpha value, which defines the opacity of the color. The alpha value lies between 0 and 1."
                    },
                    {
                        title: "Syntax:"
                    },
                    {
                        code: [`selector{`,`color: rgb(red, green, blue, opacity);`,`}`]
                    },
                    {
                        title: "Example:"
                    },
                    {
                        code: [
                            `<head>`,
                            `<style>`,
                                `*{`, `background-color:gray;`, `}`,
                                `h1 {`,
                                    `color: rgba(0, 0, 0, 0.8);`,
                                    `/* red:0, green:0, blue:0, Alpha: 0.8 = 80% */`,
                                `}`,
                                `h2 {`,
                                    `color: rgb(255, 255, 255, 0.6);`,
                                    `/* red:255, green:255, blue:255 */`,
                                `}`,
                                `h3 {`,
                                    `color: rgba(30 150 220 / 60% );`,
                                    `/* red:30, green:150, blue:200, alpha:60% */`,
                                `}`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<h1>Programmer D</h1>`,
                            `<h2>A Developer</h2>`,
                            `<h3>programmerd.in founder</h3>`,
                        `</body>`,
                        `</html>`,
                        ]
                    },
                    {desc: "Output:"},
                    {
                        html: `<head>
                        <style>
                        *{background-color: gray;}
                            h1 {
                                color: rgba(0, 0, 0, 0.8);
                                /* red:0, green:0, blue:0, Alpha: 0.8 = 80% */
                            }
                            h2 {
                                color: rgb(255, 255, 255, 0.6);
                                /* red:255, green:255, blue:255 */
                            }
                            h3 {
                                color: rgba(30 150 220 / 60% );
                                /* red:30, green:150, blue:200, alpha:60% */
                            }
                        </style>
                    </head>
                    <body>
                        <h1>Programmer D</h1>
                        <h2>A Developer</h2>
                        <h3>programmerd.in founder</h3>
                    </body>
                    </html>`
                    },
                    {title: "HSL"},
                    {
                        desc: "HSL stands for hue, saturation, and lightness. This is another way to set colour properties. Breaking each keyword:"
                    },
                    {
                        title: "Hue(h)"
                    },
                    {
                        points: [
                            "Hue represents the type of color. It is measured in degrees, and its value lies from 0 to 360.",
                            "0 degree represents black, 120 degree is for green, and 360 degree is for blue.",
                        ]
                    },
                    {
                        title: "Saturation (S):"
                    },
                    {
                        points: [
                            "Saturation controls the intensity or purity of the color. It is measured in percentage, and its value lies between 0% and 100%.",
                            "0% saturation is no color (grayscale),  and 100% saturation is the most intense colour."
                        ]
                    },
                    {
                        title: "Lightness (L):"
                    },
                    {
                        points: [
                            "Lightness determines how light or dark the colour is. It is measured in percentage, and its value lies between 0% and 100%.",
                            "0% lightness represents pure black, 50% lightness represents normal colour, and 100% lightness is pure white."
                        ]
                    },
                    {
                        title: "Syntax:"
                    },
                    {
                        code: [`selector{`,`color: hsl(hue, saturation, lightness);`,`}`]
                        
                    },
                    {
                        code: [
                            `<head>`,
                        `<style>`,
                            `h1 {`,
                                `color: hsl(235, 100%, 50%);`,
                            `}`,
                            `p {`,
                                `color: hsl(0, 0%, 0%);`,
                            `}`,
                        `</style>`,
                    `</head>`,
                    `<body>`,
                        `<h1>Programmer D</h1>`,
                        `<p>A Developer</p>`,
                    `</body>`,
                    `</html>`,
                        ]
                    },
                    {desc: "Output:"},
                    {
                        html: `<head>
                        <style>
                            h1 {
                                color: hsl(235, 100%, 50%);
                            }
                            p {
                                color: hsl(0, 0%, 0%);
                            }
                        </style>
                    </head>
                    <body>
                        <h1>Programmer D</h1>
                        <p>A Developer</p>
                    </body>
                    </html>`
                    },
                    {title: "HSLA"},
                    {
                        desc: "HSLA is similar to HSL; here, A stands for alpha value, which is used to set the opacity. Alpha values lie between 0 and 1."
                    },
                    {title: "Syntax:"},
                    {
                        code: [`selector{`,`color: hsla(hue, saturation, lightness, alpha);`,`}`]
                    },
                    {
                        title: "Example:"
                    },
                    {
                        code: [
                            `<head>`,
                        `<style>`,
                            `h1 {`,
                                `color: hsla(235, 100%, 50%, 0.7);`,
                            `}`,
                            `p {`,
                                `color: hsl(0, 0%, 0%, 0.4);`,
                            `}`,
                        `</style>`,
                    `</head>`,
                    `<body>`,
                        `<h1>Programmer D</h1>`,
                        `<p>A Developer</p>`,
                    `</body>`,
                    `</html>`,
                        ]
                    },
                    {desc: "Output:"},
                    {
                        html: `<head>
                        <style>
                            h1 {
                                color: hsla(235, 100%, 50%, 0.7);
                            }
                            p {
                                color: hsl(0, 0%, 0%, 0.4);
                            }
                        </style>
                    </head>
                    <body>
                        <h1>Programmer D</h1>
                        <p>A Developer</p>
                    </body>
                    </html>`
                    }
                ]
            },
            {
                title: "CSS Backgrounds",
                content: [
                    {
                        desc: "The CSS background property helps set the background style, property, and effects of the element. There are various background properties, such as:"
                    },
                    {
                        title: "Background color"
                    },
                    {
                        desc:"The background color property sets the background colour of HTML tags such as div, section, p, etc."
                    },
                    {title: "Syntax:"},
                    {
                        code: [`selector{`,`background-color: color;`,`}`]
                    },
                    {
                        desc: "Note: Color can be hex, rdb, hsl, etc. To learn more about colors, follow the CSS Colour Tutorial."
                    },
                    {
                        redirect: {
                            text: "CSS Color Tutorial",
                            href: "/tutorial/css/?query=css+colors"
                        }
                    },
                    {
                        title: "Example:"
                    },
                    {
                        code: [
                            `<html>`,
                        `<head>`,
                            `<style>`,
                                `div{`,
                                    `background-color: yellow;`,
                                `}`,
                                `h1{`,
                                    `background-color: #FF0000;`,
                                `}`,
                                `p{`,
                                    `background-color: orange;`,
                                `}`,
                                `span{`,
                                    `background-color: purple;`,
                                `}`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<div>`,
                                `<h1>Programmer D</h1>`,
                                `<p>Developer and founder of <span>programmerd.in</span></p>`,
                            `</div>`,
                        `</body>`,
                        `</html>`,
                        ]
                    },
                    {desc: "Output:"},
                    {
                        html: `<html>
                        <head>
                            <style>
                                div{
                                    background-color: yellow;
                                }
                                h1{
                                    background-color: #FF0000;
                                }
                                p{
                                    background-color: orange;
                                }
                                span{
                                    background-color: purple;
                                }
                            </style>
                        </head>
                        <body>
                            <div>
                                <h1>Programmer D</h1>
                                <p>Developer and founder of <span>programmerd.in</span></p>
                            </div>
                        </body>
                        </html>`
                    },
                    {
                        title: "Background Image"
                    },
                    {
                        desc: "The Background Image property sets an image as a background by providing the image URL within the url() function."
                    },
                    {title: "Syntax:"},
                    {
                        code: [`selector{`,`background-image: url('image-url');`,`}`]
                    },
                    {
                        title: "Example:"
                    },
                    {
                        code: {
                            type:"none",
                            code: [
                                `<style>`,
                                        `div{`,
                                            `background-image: url('/logo.png');`,
                                        `}`,
                                `</style>`,
                            ]
                        }
                    },
                    {desc: "Output:"},
                    {
                        image: {
                            image: "/logo.svg",
                            width: 50, height: 50
                        }
                    },
                    {
                        desc: "The image is repeated many times because CSS repeats the image on both the x and y axes, to avoid leaving empty spaces due to the image dimensions. To solve this issue, use the background property repeat."
                    },
                    {
                        title: "Background repeat"
                    },
                    {
                        desc: "Background repeat helps to control how the image will repeat."
                    },
                    {
                        title: "Syntax"
                    },
                    {
                        code: [`selector{`,`background-repeat: repeat-x || repeat-y || repeat || no-repeat;`,`}`]
                    },
                    {
                        desc: "background-repeat can be set to repeat, no-repeat, repeat-x (horizontal), or repeat-y (vertical)."
                    },
                    {
                        title: "repeat-x"
                    },
                    {
                        desc: "repeat the image in the x direction or horizontally repeat the image."
                    },
                    {title: "Syntax:"},
                    {
                        code: [`selector{`,`background-repeat: repeat-x;`,`}`]
                    },
                    {
                        title: "Example:"
                    },
                    {
                        image: {
                            image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jj2jwfwh0pboqpylkeq0.png",
                            width: 1000, height: 1000
                        }
                    },
                    {title: "repeat-y"},
                    {
                        desc: "repeat the image in the y direction or vertically repeat the image."
                    },
                    {
                        title: "Syntax:"
                    },
                    {
                        code: [`selector{`,`background-repeat: repeat-y;`,`}`]
                    },
                    {
                        title: "Example:"
                    },
                    {
                        image: {
                            image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jj2jwfwh0pboqpylkeq0.png",
                            width: 1000, height: 1000
                        }
                    },
                    {title: "repeat"},
                    {
                        desc: "The background image is repeated in both the x and y directions. This is the default."
                    },
                    {
                        title: "Syntax:"
                    },
                    {
                        code: [`selector{`,`background-repeat: repeat;`,`}`]
                    },
                    {
                        title: "Example:"
                    },
                    {
                        image: {
                            image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jj2jwfwh0pboqpylkeq0.png",
                            width: 1000, height: 1000
                        }
                    },
                    {title: "no-repeat"},
                    {
                        desc: "The background image is not repeated in any direction. Only one image will be on the screen."
                    },
                    {
                        title: "Syntax:"
                    },
                    {
                        code: [`selector{`,`background-repeat: no-repeat;`,`}`]
                    },
                    {
                        title: "Example:"
                    },
                    {
                        image: {
                            image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jj2jwfwh0pboqpylkeq0.png",
                            width: 1000, height: 1000
                        }
                    },
                    {title: "Background Size"},
                    {
                        desc :"The Background Size property sets custom sizes for the background image."
                    },
                    {title: "Syntax:"},
                    {
                        code: [`selector{`,`background-size: propery-value;`,`}`]
                    },
                    {
                        desc: "Property-value can be any of the following:"
                    },
                    {
                        title: "cover:"
                    },
                    {
                        desc: "The image fits the whole screen according to the dimensions; the background area will be completely covered by the image while maintaining its aspect ratio."
                    },
                    {title: "Syntax"},
                    {
                        code: [
                            `div{`,
                                `background-image: url("./logo.png");`,
                                `background-size: cover;`,
                           `} `,
                        ]
                    },
                    {
                        html: `
                        <html>
                        <head>
                            <style>
                                div{
                                    width: 500px; height: 300px;
                                    background-image: url("https://programmerd.netlify.app/pd-logo.png");
                                    background-size: cover;
                                }
                            </style>
                        </head>
                        <body>
                        <div></div>
                        </body>
                        </html>`
                    },
                    {title: "contain:"},
                    {
                        desc: "Scales the image to fit within the background area entirely while maintaining its aspect ratio."
                    },
                    {
                        title: "Syntax:"
                    },
                    {
                        code: [
                            `div{`,
                                `background-image: url("./logo.png");`,
                                `background-size: contain;`,
                            `}`,
                        ]
                    },
                    {
                        html: `<html>
                        <head>
                            <style>
                                div{
                                    width: 500px; height: 300px;
                                    background-image: url("https://programmerd.netlify.app/pd-logo.png");
                                    background-size: contain;
                                }
                            </style>
                        </head>
                        <body>
                        <div></div>
                        </body>
                        </html>`
                    },
                    {title: "auto"},
                    {desc: "The image will be displayed in its original size. This is the default"},
                    {
                        code: [
                            `div{`,
                                `background-image: url("./logo.png");`,
                                `background-size: auto;`,
                            `} `,
                        ]
                    },
                    {
                        title : "Distinct width and height"
                    },
                    {
                        desc: "We can manually set the width and height of the background image."
                    },
                    {
                        title: "Syntax:"
                    },
                    {
                        code:[
                            `div{`,
                            `background-image: url("./logo.png");`,
                            `background-size: 100% 100%;`,
                            `}`
                        ]
                    },
                    {
                        desc: "Note: The width and height are used in percentage(%);"
                    },
                    {
                        html: `<html>
                        <head>
                            <style>
                                div{
                                    width: 500px; height: 300px;
                                    background-image: url("https://programmerd.netlify.app/pd-logo.png");
                                    background-size: 100% 100%;
                                }
                            </style>
                        </head>
                        <body>
                        <div></div>
                        </body>
                        </html>`
                    },
                    {title: "Background Position"},
                    {
                        desc: "This property sets the starting position of the background image within the container (parent div). By default, the position is top left."
                    },
                    {title: "Syntax:"},
                    {
                        code: [`selector{`,`background-position: property-value;`,`}`]
                    },
                    {
                        desc: "Property value can be top, bottom, left, right, or center. We use combinations of positions such as top left, top right, bottom left, bottom right, centre, etc."
                    },
                    {
                        title: "Example:"
                    },
                    {
                        code: [
                            `div{`,
                                `background-image: url("./logo.png");`,
                                `background-repeat: no-repeat;`,
                                `background-position: top right;`,
                           `}`,
                        ]
                    },
                    {
                        html: `<html>
                        <head>
                            <style>
                                div{
                                    width: 500px; height: 300px;
                                    background-image: url("https://programmerd.netlify.app/pd-logo.png");
                                    background-repeat: no-repeat;
     background-position: top right;
                                }
                            </style>
                        </head>
                        <body>
                        <div></div>
                        </body>
                        </html>`
                    },
                    {
                        title: "Background Attachment"
                    },
                    {
                        desc: "The background-attachment property determines whether the background image scrolls with the content."
                    },
                    {
                        title: "Syntax:"
                    },
                    {
                        code: [`div{`,`background-attachment: fixed || scroll;`,`}`]
                    },
                    {
                        desc: "Use fixed for a fixed background, or scroll for a scrolling background."
                    },
                    {
                        title: "Shorthands"
                    },
                    {
                        desc: "All the background properties would look something like this in a single line."
                    },
                    {
                        title: "Syntax"
                    },
                    {
                        code: [`selector{`,`background: [background-color] [background-attachment] [background-image] [background-repeat] [background-position];`,`}`]
                    },
                    {
                        title: "Example:"
                    },
                    {
                        code: [`div{`,`background: purple fixed url("./logo.png") no-repeat right top;`,`}`]
                    },
                    {
                        html: `<html>
                        <head>
                            <style>
                                div{
                                    width: 700px; height: 300px;
                                    background: purple fixed url("https://programmerd.netlify.app/pd-logo.png") no-repeat right top;
                                }
                            </style>
                        </head>
                        <body>
                        <div></div>
                        </body>
                        </html>`
                    }
                ]
            },
            {
                title: "CSS Borders",
                content: [
                    {
                        desc: "CSS borders help define the visual boundaries of HTML elements. It can be text, div, p, h1, etc. The following are the different properties of a CSS border:"
                    },
                    {
                        title: "Border Style"
                    },
                    {desc: "Border styles define the style of the border."},
                    {desc: "There are various types of border styles; consider the code snippet:"},
                    {
                        code: [
                            `<html lang="en">`,
`<head>`,
    `<style>`,
        `.none {`,
            `border-style: none;`,
        `}`,
        `.hidden {`,
            `border-style: hidden;`,
        `}`,
        `.dotted {`,
            `border-style: dotted;`,
        `}`,
        `.dashed {`,
            `border-style: dashed;`,
        `}`,
        `.solid {`,
            `border-style: solid;`,
        `}`,
        `.double {`,
            `border-style: double;`,
        `}`,
        `.groove {`,
            `border-style: groove;`,
        `}`,
        `.ridge {`,
            `border-style: ridge;`,
        `}`,
        `.inset {`,
            `border-style: inset;`,
        `}`,
        `.outset {`,
            `border-style: outset;`,
        `}`,
    `</style>`,
`</head>`,
`<body>`,
    `<p class="none">no border</p>`,
    `<p class="hidden">Hidden Border</p>`,
    `<p class="dotted">Dotted Border</p>`,
    `<p class="dashed">Dashed Border</p>`,
    `<p class="solid">Solid border</p>`,
    `<p class="double">Double Border</p>`,
    `<p class="groove">Groove border</p>`,
    `<p class="ridge">ridge border</p>`,
    `<p class="inset">inset border</p>`,
    `<p class="outset">Outset Border</p>`,
`</body>`,
`</html>`
                        ]
                    },
                    {desc: "Output"},
                    {
                        html: `<html lang="en">
                        <head>
                            <style>
                                .none {
                                    border-style: none;
                                }
                                .hidden {
                                    border-style: hidden;
                                }
                                .dotted {
                                    border-style: dotted;
                                }
                                .dashed {
                                    border-style: dashed;
                                }
                                .solid {
                                    border-style: solid;
                                }
                                .double {
                                    border-style: double;
                                }
                                .groove {
                                    border-style: groove;
                                }
                                .ridge {
                                    border-style: ridge;
                                }
                                .inset {
                                    border-style: inset;
                                }
                                .outset {
                                    border-style: outset;
                                }
                            </style>
                        </head>
                        <body>
                            <p class="none">no border</p>
                            <p class="hidden">Hidden Border</p>
                            <p class="dotted">Dotted Border</p>
                            <p class="dashed">Dashed Border</p>
                            <p class="solid">Solid border</p>
                            <p class="double">Double Border</p>
                            <p class="groove">Groove border</p>
                            <p class="ridge">ridge border</p>
                            <p class="inset">inset border</p>
                            <p class="outset">Outset Border</p>
                        </body>
                        </html>`
                    },
                    {
                        title: "Border Color"
                    },
                    {
                        desc: "The border color property sets the colour of the border. We can use colourname, hex, rgb, or hsl to set the color. If you are not familiar with CSS colours, then follow the CSS Color Tutorial. Consider the code snippet:"
                    },
                    {
                        code: [
                            `<html lang="en">`,
                        `<head>`,
                            `<style>`,
                                `.dotted {`,
                                    `border-style: dotted;`,
                                    `color: purple;`,
                                `}`,
                                `.dashed {`,
                                    `border-style: dashed;`,
                                    `border-color: #FF0000;`,
                                `}`,
                                `.solid {`,
                                    `border-style: solid;`,
                                    `border-color: rgb(100, 233, 12);`,
                                `}`,
                                `.double {`,
                                    `border-style: double;`,
                                    `border-color: hsl(10, 50, 30);`,
                                `}`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<p class="dotted">Dotted Border</p>`,
                            `<p class="dashed">Dashed Border</p>`,
                            `<p class="solid">Solid border</p>`,
                            `<p class="double">Double Border</p>`,
                        `</body>`,
                        `</html>`,
                        ]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <style>
                                .dotted {
                                    border-style: dotted;
                                    color: purple;
                                }
                                .dashed {
                                    border-style: dashed;
                                    border-color: #FF0000;
                                }
                                .solid {
                                    border-style: solid;
                                    border-color: rgb(100, 233, 12);
                                }
                                .double {
                                    border-style: double;
                                    border-color: hsl(10, 50, 30);
                                }
                            </style>
                        </head>
                        <body>
                            <p class="dotted">Dotted Border</p>
                            <p class="dashed">Dashed Border</p>
                            <p class="solid">Solid border</p>
                            <p class="double">Double Border</p>
                        </body>
                        </html>`
                    },
                    {title: "Border Width"},
                    {
                        desc: "Specifies the width of the border. Sets the width of the border in pixels(px), or there are values like medium, thin, and thick to set the border width. Consider the code snippet:"
                    },
                    {
                        code: [
                            `<html lang="en">`,
                        `<head>`,
                            `<style>`,
                                `.solid1 {`,
                                    `border-width: 5px;`,
                                    `border-style: solid;`,
                                    `border-color: red;`,
                                `}`,
                                `.solid2 {`,
                                    `border-width: thin; /* thin || medium || thick */`,
                                    `border-style: solid;`,
                                    `border-color: #FF0000;`,
                                `}`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<p class="solid1">Solid border 1</p>`,
                            `<p class="solid2">Solid border 2</p>`,
                        `</body>`,
                        `</html>`,
                        ]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <style>
                                .solid1 {
                                    border-width: 5px;
                                    border-style: solid;
                                    border-color: red;
                                }
                                .solid2 {
                                    border-width: thin; /* thin || medium || thick */
                                    border-style: solid;
                                    border-color: #FF0000;
                                }
                            </style>
                        </head>
                        <body>
                            <p class="solid1">Solid border 1</p>
                            <p class="solid2">Solid border 2</p>
                        </body>
                        </html>`
                    },
                    {title: "Border Radius"},
                    {
                        desc: "Border radius helps create rounded borders for elements like buttons or images."
                    },
                    {
                        code: [
                            `<html lang="en">`,
                        `<head>`,
                            `<style>`,
                                `.solid1 {`,
                                    `border-radius: 20px;`,
                                    `border-style: solid;`,
                                    `border-color: red;`,
                                `}`,
                                `.solid2 {`,
                                    `border-radius: 25%;`,
                                    `border-style: solid;`,
                                    `border-color: #FF0000;`,
                                `}`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<p class="solid1">Solid border 1</p>`,
                            `<p class="solid2">Solid</p>`,
                        `</body>`,
                        `</html>`,
                        ]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <style>
                                .solid1 {
                                    border-radius: 20px;
                                    border-style: solid;
                                    border-color: red;
                                }
                                .solid2 {
                                    border-radius: 25%;
                                    border-style: solid;
                                    border-color: #FF0000;
                                }
                            </style>
                        </head>
                        <body>
                            <p class="solid1">Solid border 1</p>
                            <p class="solid2">Solid</p>
                        </body>
                        </html>`
                    },
                    {
                        desc: "We can also set border-radius to each individual edge (specific corners), such as top left, bottom right, top right, and bottom left."
                    },
                    {
                        title: "Set the border of individual corners"
                    },
                    {
                        title: "Syntax:"
                    },
                    {
                        code: [
                            `selector {`,
                                `border-radius: 10px 5px 15px 35px ;`,
                                `/* border-radius: top-left top-right bottom-right bottom-left ; */`,
                           `}`,
                        ]
                    },
                    {title: "or"},
                    {
                        code:  [
                            `selector {`,
                                `border-top-left-radius: 10px;`,
                                `border-top-right-radius: 5px;`,
                                `border-bottom-right-radius: 15px;`,
                                `border-bottom-left-radius: 35px;`,
                            `}`,
                        ]
                    },
                    {
                        title: "Border Collapse"
                    },
                    {
                        desc: "While working with tables, border-collapse helps to control how table borders interact with each other. There are two properties of border-collapse."
                    },
                    {title: "Collapse"},
                    {title: "Syntax:"},
                    {
                        code: [`selector {`,`border-collapse: collapse;`,`}`]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <style>
                            table, td, th {
                                border: 1px solid red;
                              }
                              #table2 {
                                border-collapse: collapse;
                              }
                            </style>
                        </head>
                        <body>
                        <table id="table2">
                        <tr>
                          <th>Firstname</th>
                          <th>Lastname</th>
                        </tr>
                        <tr>
                          <td>Peter</td>
                          <td>Griffin</td>
                        </tr>
                        <tr>
                          <td>Lois</td>
                          <td>Griffin</td>
                        </tr>
                      </table>
                        </body>
                        </html>`
                    },
                    {title: "Separate"},
                    {title: "Syntax:"},
                    {
                        code: [`selector {`,`border-collapse: separate;`,`}`]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <style>
                            table, td, th {
                                border: 1px solid red;
                              }
                              #table1 {
                                border-collapse: separate;
                              }
                            </style>
                        </head>
                        <body>
                        <table id="table1">
                        <tr>
                          <th>Firstname</th>
                          <th>Lastname</th>
                        </tr>
                        <tr>
                          <td>Peter</td>
                          <td>Griffin</td>
                        </tr>
                        <tr>
                          <td>Lois</td>
                          <td>Griffin</td>
                        </tr>
                      </table>
                        </body>
                        </html>`
                    },
                    {title: "Border Spacing"},
                    {
                        desc:"While working with tables, border-spacing helps define the space between the borders of adjacent table cells."
                    },
                    {
                        code: [`selector {`,`border-spacing: 5px;`,`}`]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <style>
                            table, td, th {
                                border: 1px solid red;
                              }
                              #table1 {
                                border-spacing: 5px;
                              }
                            </style>
                        </head>
                        <body>
                        <table id="table1">
                        <tr>
                          <th>Firstname</th>
                          <th>Lastname</th>
                        </tr>
                        <tr>
                          <td>Peter</td>
                          <td>Griffin</td>
                        </tr>
                        <tr>
                          <td>Lois</td>
                          <td>Griffin</td>
                        </tr>
                      </table>
                        </body>
                        </html>`
                    },
                    {title:"Shorthand"},
                    {desc:"Border shorthand takes three properties: width, style, and color."},
                    {title: "Syntax:"},
                    {
                        code: [`select{`,`border: width style color;`,`}`]
                    },
                    {title: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
`<head>`,
    `<style>`,
        `p {`,
            `border: 2px solid red;`,
        `}`,
    `</style>`,
`</head>`,
`<body>`,
    `<p>Hello world, I am Programmer D</p>`,
`</body>`,
`</html>`
                        ]
                    },
                    {
                        html: `<html lang="en">
<head>
    <style>
        p {
            border: 2px solid red;
        }
    </style>
</head>
<body>
    <p>Hello world, I am Programmer D</p>
</body>
</html>`
                    }
                ]
            },
            {
                title: "CSS Images",
                content: [
                    {
                        desc: "Images are an essential part of the website. Images help enhance the website's look."
                    },
                    {desc: "Syntax to use for the CSS image:"},
                    {
                        code: [`<img src="img_location" alt="alt_text">`]
                    },
                    {desc: "There are two attributes:"},
                    {
                        points: [
                            `src: The path of the image.`,
                            `alt: Alternate text for the image, if the image is not displayed due to any issue.`,
                        ]
                    },
                    {title: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
                        `<head>`,
                            `<title>PD</title>`,
                        `</head>`,
                        `<body>`,
                            `<img src="https://programmerd.netlify.app/pd-logo.png" alt="PD">`,
                        `</body>`,
                        `</html>`
                        ]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <title>PD</title>
                        </head>
                        <body>
                            <img src="https://programmerd.netlify.app/pd-logo.png" alt="PD">
                        </body>
                        </html>`
                    },
                    {
                        desc: "There are various properties of a CSS image, which are as follows:"
                    },
                    {
                        title: "Image width and height"
                    },
                    {
                        desc: "There are two ways to specify the width and height of the image."
                    },
                    {
                        title: "Inline"
                    },
                    {
                        title: "Example:"
                    },
                    {
                        code: [
                            `<html lang="en">`,
                        `<head>`,
                            `<title>PD</title>`,
                        `</head>`,
                        `<body>`,
                            `<img src="https://programmerd.netlify.app/pd-logo.png" height="200" width="300" alt="PD">`,
                        `</body>`,
                        `</html>`
                        ]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <title>PD</title>
                        </head>
                        <body>
                            <img src="https://programmerd.netlify.app/pd-logo.png" height="200" width="300" alt="PD">
                        </body>
                        </html>`
                    },
                    {
                        desc: "Here, the width and height are in pixels (px)."
                    },
                    {
                        title: "Internal/External CSS"
                    },
                    {
                        title: "Example:"
                    },
                    {
                        code: [
                            `<html lang="en">`,
                        `<head>`,
                            `<title>PD</title>`,
                            `<style>`,
                                `img{`,
                                    `width: 300px;`,
                                    `height: 200px;`,
                                `}`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<img src="https://programmerd.netlify.app/pd-logo.png" alt="PD">`,
                        `</body>`,
                        `</html>`,
                        ]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <title>PD</title>
                            <style>
                                img{
                                    width: 300px;
                                    height: 200px;
                                }
                            </style>
                        </head>
                        <body>
                            <img src="https://programmerd.netlify.app/pd-logo.png" alt="PD">
                        </body>
                        </html>`
                    },
                    {
                        desc: "Note: We can use pixels (px), percentages (%), or any other unit to specify the width and height of the image."
                    },
                    {
                        title: "Image Border Radius "
                    },
                    {
                        desc: "Image border-radius helps create rounded corners for the image."
                    },
                    {title: "Syntax:"},
                    {
                        code: [`selector{`,`border-radius: units;`,`}`]
                    },
                    {title: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
                        `<head>`,
                            `<title>PD</title>`,
                            `<style>`,
                                `img{`,
                                    `border-radius: 25px;`,
                                `}`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<img src="https://programmerd.netlify.app/pd-logo.png" alt="PD">`,
                        `</body>`,
                        `</html>`,
                        ]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <title>PD</title>
                            <style>
                                .img{
                                    border-radius: 25px;
                                }
                            </style>
                        </head>
                        <body>
                            <img src="https://programmerd.netlify.app/pd-logo.png" width="200px" height="200px" alt="PD"> 
                            border-radius: 0px;
                            <img class="img" src="https://programmerd.netlify.app/pd-logo.png" width="200px" height="200px" alt="PD">
                            border-radius: 25px;
                        </body>
                        </html>`
                    },
                    {title: "Image Responsiveness"},
                    {
                        desc:"Responsive images help to give a clear view of the image at different sizes of the screen."
                    },
                    {title: "Syntax:"},
                    {
                        code: [
                            `selector{`,
                                `max-width: units;`,
                                `height: auto;`,
                            `}`
                        ]
                    },
                    {desc:"height: auto helps to achieve the responsive layout of the image."},
                    {desc:"To play around with a responsive layout, follow the steps:"},
                    {
                        points: [
                            "right-click and click on inspect.",
                            "Click on the toggle device toolbar (laptop mobile icon) or (ctrl + Shift + M).",
                            "Change the dimensions and play around."
                        ]
                    },
                    {desc:"There are other ways to make the image responsive, such as:"},
                    {title: "fit-content"},
                    {desc: "The fit content specifies the size of that element, which should be determined by its content."},
                    {title: "Syntax:"},
                    {
                        code: [`selector{`,`width: fit-content;`,`}`]
                    },
                    {desc: "We can also set the maximum width of the element."},
                    {
                        code: [`selector{`,`width: fit-content(200px);`,`}`]
                    },
                    {desc: "Here, the element's width will be as wide as its content, up to a maximum of 200 pixels."},
                    {title: "max-content"},
                    {
                        desc: "The max-content property makes the element as wide as its content but not wider than the screen."
                    },
                    {title: "Syntax:"},
                    {
                        code: [`selector{`,`width: max-content;`,`}`]
                    },
                    {title: "min-content"},
                    {desc: "The min-content property makes the element's width shrink to the minimum required to display its content."},
                    {title: "Syntax:"},
                    {
                        code: [`selector{`,`width: min-content;`,`}`]
                    },
                    {
                        title: "Image Opacity"
                    },
                    {
                        desc:"Image opacity controls the transparency of the image. The property value ranges from 0 to 1."
                    },
                    {title: "Syntax:"},
                    {
                        code: [`img{`,`opacity: unit;`,`}`]
                    },
                    {
                        image:{
                            image:"https://www.lambdatest.com/blog/wp-content/uploads/2019/03/css-opacity-property1.png",
                            width: 1000, height: 1000
                        }
                    },
                    {title: "Image Filter"},
                    {
                        desc: "The CSS image filter allows you to apply various visual effects to the image."
                    },
                    {title: "Syntax:"},
                    {
                        code: [`img{`,`filter: property-value;`,`}`]
                    },
                    {desc: "Here, property value can be, any of the following:"},
                    {title: "Grayscale"},
                    {
                        desc: "Grayscale converts an image to grayscale, i.e., black and white. It sort of adds an overlay of grey color to the image."
                    },
                    {
                        title: "Example:"
                    },
                    {
                        code: [`img{`,`filter: grayscale(100%);`,`}`]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <title>PD</title>
                            <style>
                                .img{ filter: grayscale(100%); }
                            </style>
                        </head>
                        <body>
                            <img src="https://programmerd.netlify.app/pd-logo.png" width="200px" height="200px" alt="PD"> 
                            filter: grayscale(0);
                            <img class="img" src="https://programmerd.netlify.app/pd-logo.png" width="200px" height="200px" alt="PD">
                            filter: grayscale(100%);
                        </body>
                        </html>`
                    },
                    {
                        desc: "Note: The grayscale value ranges between 0 and 100 per cent. 0, which is the default image, and 100%, which is fully black and white."
                    },
                    {title: "Blur"},
                    {desc: "Blur applies a blur effect to the image."},
                    {title: "Example:"},
                    {
                        code: [`img{`,`filter: blur(5px);`,`}`]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <title>PD</title>
                            <style>
                                .img{ filter: blur(5px); }
                            </style>
                        </head>
                        <body>
                            <img src="https://programmerd.netlify.app/pd-logo.png" width="200px" height="200px" alt="PD"> 
                            filter: blur(0px);
                            <img class="img" src="https://programmerd.netlify.app/pd-logo.png" width="200px" height="200px" alt="PD">
                            filter: blur(5px);
                        </body>
                        </html>`
                    },
                    {desc:"Note: The blur value is specified in pixels(px)"},
                    {title: "Brightness"},
                    {desc: "The brightness property value helps in adjusting the brightness of the image."},
                    {
                        code: [`img{`,`filter: brightness(180%);`,`}`]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <title>PD</title>
                            <style>
                                .img{ filter: brightness(150%); }
                                .img1{ filter: brightness(30%); }
                            </style>
                        </head>
                        <body>
                            <img class="img1" src="https://programmerd.netlify.app/pd-logo.png" width="200px" height="200px" alt="PD"> 
                            filter: brightness(30%);
                            <img class="img" src="https://programmerd.netlify.app/pd-logo.png" width="200px" height="200px" alt="PD">
                            filter: brightness(150%);
                        </body>
                        </html>`
                    },
                    {
                        desc: `Note: The brightness level is specified in percentage. 0 being the black image, as brightness will be 0%, and as the value increases, brightness content increases.`
                    },
                    {title: "Contrast"},
                    {desc:"The contrast helps in adjusting the contrast of the image."},
                    {
                        code: [`img{`,`filter: contrast(10%);`,`}`]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <title>PD</title>
                            <style>
                                .img{ filter: contrast(200%); }
                                .img1{ filter: contrast(10%); }
                            </style>
                        </head>
                        <body>
                            <img class="img1" src="https://programmerd.netlify.app/pd-logo.png" width="200px" height="200px" alt="PD"> 
                            filter: contrast(10%);
                            <img class="img" src="https://programmerd.netlify.app/pd-logo.png" width="200px" height="200px" alt="PD">
                            filter: contrast(200%);
                        </body>
                        </html>`
                    },
                    {
                        desc: "Note: The contrast level is specified in percentage."
                    },
                    {title: "Invert:"},
                    {
                        desc: "Invert is used to invert the colours of the image."
                    },
                    {
                        code: [`img{`,`filter: invert(10%);`,`}`]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <title>PD</title>
                            <style>
                                .img{ filter: invert(300%); }
                                .img1{ filter: invert(10%); }
                            </style>
                        </head>
                        <body>
                            <img class="img1" src="https://programmerd.netlify.app/pd-logo.png" width="200px" height="200px" alt="PD"> 
                            filter: invert(10%);
                            <img class="img" src="https://programmerd.netlify.app/pd-logo.png" width="200px" height="200px" alt="PD">
                            filter: invert(300%);
                        </body>
                        </html>`
                    },
                    {
                        desc: "Note: The invert value is specified in percentage."
                    },
                    {title: "Saturate"},
                    {desc:"Saturate helps to adjust the saturation level of colours."},
                    {
                        code: [`img{`,`filter: saturate(100%);`,`}`]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <title>PD</title>
                            <style>
                                .img{ filter: saturate(300%); }
                                .img1{ filter: saturate(10%); }
                            </style>
                        </head>
                        <body>
                            <img class="img1" src="https://programmerd.netlify.app/pd-logo.png" width="200px" height="200px" alt="PD"> 
                            filter: saturate(10%);
                            <img class="img" src="https://programmerd.netlify.app/pd-logo.png" width="200px" height="200px" alt="PD">
                            filter: saturate(300%);
                        </body>
                        </html>`
                    },
                    {
                        desc: "Note: The saturation value is specified in percentages."
                    },
                    {title: "Hue-rotate"},
                    {desc: "The hue rotates the colours of the image."},
                    {
                        code: [`img{`,`filter: hue-rotate(90deg);`,`}`]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <title>PD</title>
                            <style>
                                .img{ filter: hue-rotate(90deg); }
                            </style>
                        </head>
                        <body>
                            <img class="img" src="https://programmerd.netlify.app/pd-logo.png" width="200px" height="200px" alt="PD">
                        </body>
                        </html>`
                    },
                    {
                        desc: "Note: The hue-rotate value is specified in degrees (deg). Positive hue rotation will increase the hue value, while negative hue will decrease the hue value."
                    }
                ]
            },
            {
                title: "CSS Video Embedding",
                content: [
                    {
                        desc: "CSS helps to customize the visual effects of video. If you are not familiar with videos, follow the HTML Video tutorial."
                    },
                    {
                        redirect: {
                            text: "HTML Video Tutorial",
                            href: "/tutorial/html/?query=video+%26+audio+tags"
                        }
                    },
                    {title: "Example:"},
                    {b: "Add Code in `index.html` file"},
                    {
                        code: [
                            `<body>`,
                            `<video controls>`,
                            `<source src="./Sigma Web Development Course.mp4" type="video/mp4">
                            Your browser does not support the video tag.`,
                            `</video>`,
                            `</body>`,
                        ]
                    },
                    {b: "Add Code in `style.css` file"},
                    {
                        code: [
                            `video {`,
                                `width: 500px;`,
                                `height: 200px;`,
                    `}`,
                        ]
                    },
                    {title: "Output"},
                    {
                        video: {
                            video : "/videos/pdbackplay.mp4"
                        }
                    }
                ]
            },
            {
                title: "CSS Fonts",
                content: [
                    {
                        desc: "Fonts play a crucial role in making your page visually appealing. Fonts decide how texts will look on the screen; depending on the website, different kinds of fonts are used."
                    },
                    {desc: "Let’s look at the major font attributes."},
                    {title: "Font Color"},
                    {desc: "Font color defines the colour of the text or typography."},
                    {b: "Syntax:"},
                    {
                        code: [`selector{`,`color: red;`,`}`]
                    },
                    {
                        desc: "For an in-depth explanation of colours, follow the CSS Color Tutorial."
                    },
                    {
                        redirect: {
                            text: "CSS Color Tutorial",
                            href: "/tutorial/css/?query=css+colors"
                        }
                    },
                    {title: "Font size"},
                    {desc: "The font size property sets the size of the fonts."},
                    {desc: "It has some predefined sizes, such as small, medium, large, larger, etc."},
                    {desc: "The most commonly used units for font size are px (pixels), em (ems), rem (root ems), and percentage (%)."},
                    {desc: "Quick notes:"},
                    {
                        points: [
                            "px: px is the absolute unit. This is useful for setting precise sizes.",
                            "em: em is the relative unit, based on the font size of the parent element. If the element's font size is 1.5 em, that means the element will be 1.5 times the size of the parent.",
                            "rem: rem is the relative unit, based on the font size of the root element, i.e., <html>."
                        ]
                    },
                    {b: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
`<head>`,
    `<style>`,
        `#p1 {`,`font-size: small;`,`}`,
        `#p2 {`,`font-size: medium;`,`}`,
        `#p3 {`,`font-size: large;`,`}`,
        `#p4 {`,`font-size: larger;`,`}`,
        `#p5 {`,`font-size: 25px;`,`}`,
        `#p6 {`,`font-size: 2em;`,`}`,
        `#p7 {`,`font-size: 2rem;`,`}`,
        `#p8 {`,`font-size: 50%;`,`}`,
    `</style>`,
`</head>`,
`<body>`,
    `<p id="p1">font-size: small</p>`,
    `<p id="p2">font-size: medium</p>`,
    `<p id="p3">font-size: largr</p>`,
    `<p id="p4">font-size: larger</p>`,
    `<p id="p5">font-size: 25px</p>`,
    `<p id="p6">font-size: 2em</p>`,
    `<p id="p7">font-size: 2rem</p>`,
    `<p id="p8">font-size: 50%</p>`,
`</body>`,
`</html>`
                        ]
                    },
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/css-fonts/font-size.png",
                            width: 1000, height: 1000
                        }
                    },
                    {title: "CSS Font Style"},
                    {desc: "The font style property sets the style of the font."},
                    {desc:"There are three types of font styles: italic, normal, and oblique."},
                    {desc: "Quick notes:"},
                    {
                        points: [
                            "italic: Italic texts are slightly to the right.",
                            "normal: Default text style.",
                            "Oblique: Oblique is similar to italic but has less bend" 
                        ]
                    },
                    {b: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
`<head>`,
    `<style>`,
        `#p1 {`,`font-style: italic;`,`}`,
        `#p2 {`,`font-style: normal;`,`}`,
        `#p3 {`,`font-style: oblique;`,`}`,
    `</style>`,
`</head>`,
`<body>`,
    `<p id="p1">font-style: italic</p>`,
    `<p id="p2">font-style: normal</p>`,
    `<p id="p3">font-style: oblique</p>`,
`</body>`,
`</html>`,
                        ]
                    },
                    {
                        image:{
                            image: "https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/css-fonts/font-style.png",
                            width: 1000, height: 1000
                        }
                    },
                    {title: "CSS Font Variant"},
                    {
                        desc: "The CSS font variant property helps to toggle with the variations of the text."
                    },
                    {desc:"There are two common values for the font-variant property."},
                    {
                        points: [
                            "normal: The default value.",
                            "small-caps: This value renders the text in small capital letters."
                        ]
                    },
                    {title: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
`<head>`,
    `<style>`,
        `#p1 {`,
            `font-variant: normal;`,
        `}`,
        `#p2 {`,
            `font-variant: small-caps;`,
        `}`,
    `</style>`,
`</head>`,
`<body>`,
    `<p id="p1">font-variant: normal;</p>`,
    `<p id="p2">font-variant: small-caps;</p>`,
`</body>`,
`</html>`
                        ]
                    },
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/css-fonts/font-variant.png",
                            width : 1000, height: 1000
                        }
                    },
                    {title: "CSS Font Weight"},
                    {
                        desc: "The font-weight property controls the thickness or boldness of the text. The values range from 100 (thin) to 900 (ultra-bold) and also have some predefined values such as lighter, bold, and bolder."
                    },
                    {b: "Example:"},
                    {
                        b: "Note: font-weight : 100 (100 to 900) or (lighter | bold | bolder)"
                    },
                    {
                        code: [
                            `<html lang="en">`,
`<head>`,
    `<style>`,
        `#p1 {`,
            `font-weight: 100;`,
        `}`,
        `#p2 {`,
            `font-weight: 900;`,
        `}`,
        `#p3 {`,
            `font-weight: lighter;`,
        `}`,
        `#p4 {`,
            `font-weight: bold;`,
        `}`,
        `#p5 {`,
            `font-weight: bolder;`,
        `}`,
    `</style>`,
`</head>`,
`<body>`,
    `<p id="p1">font-weight: 100</p>`,
    `<p id="p2">font-weight: 900</p>`,
    `<p id="p3">font-size: lighter</p>`,
    `<p id="p4">font-size: bold</p>`,
    `<p id="p5">font-size: bolder</p>`,
`</body>`,
`</html>`
                        ]
                    },
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/css-fonts/font-weight.png",
                            width: 1000, height: 1000
                        }
                    },
                    {title: "Font Family"},
                    {
                        desc: "The font family property specifies the font stack. This is used to set the preferred font for the text content. We can define multiple font family names separated by commas based on priority."
                    },
                    {title: "Syntax:"},
                    {
                        code: [`selector{`,`font-family: font1, font2, font3;`,`}`]
                    },
                    {b :"Example:"},
                    {
                        code: [
                            `<html lang="en">`,
`<head>`,
    `<style>`,
        `h1{`,`font-family: 'Courier New', Courier, monospace;`,`}`,
        `h2{`,`font-family: 'Times New Roman', Times, serif;`,`}`,
    `</style>`,
`</head>`,
`<body>`,
    `<h1>Programmer D</h1>`,
    `<h2>Hello World</h2>`,
`</body>`,
`</html>`,
                        ]
                    },
                    {title: "Generic Font family"},
                    {
                        desc: "There are five generic font family names that serve as fallback options when specific fonts are not available:"
                    },
                    {
                        points: [
                            "serif: generic serif fonts (like Times New Roman).",
                            "sans-serif: generic sans-serif fonts (like Arial or Helvetica).",
                            "monospace: generic monospaced fonts (like Courier New).",
                            "cursive: generic cursive fonts (for handwritten styles).",
                            "fantasy: generic fantasy fonts (for decorative styles)."
                        ]
                    },
                    {
                        desc: "Tip: It is recommended to end the font family with any of these generic font family names."
                    },
                    {title: "Custom fonts"},
                    {
                        desc: "We can also use custom fonts for our websites; here, we will be using Google Fonts. Follow the steps:"
                    },
                    {
                        href: "https://fonts.google.com/"
                    },
                    {
                        points: [
                            "Go to https://fonts.google.com/",
                            "Select your preferred font.",
                            "Choose the fonts based on font weight.",
                            "Copy the import link and paste it on the top of the stylesheet.",
                            "Copy the font family and paste it wherever you want to use it."
                        ]
                    },
                    {desc: "Or Follow the video:"},
                    {
                        video : {
                            video: "/videos/tutorials/css/add-googlefonts.mp4"
                        }
                    }
                ]
            },
            {
                title: "CSS Text Styling",
                content: [
                    {
                        desc: "In this tutorial, we will cover some of the important text styling properties:"
                    },
                    {
                        title: "Text Decoration"
                    },
                    {
                        desc: "The text-decoration property adds various types of text decorations."
                    },
                    {title: "Syntax:"},
                    {
                        code: [`selector {`,`text-decoration: value;`,`}`]
                    },
                    {
                        desc: "There are four values for text-decoration:"
                    },
                    {
                        points: [
                            `overline: adds a line above the text.`,
                            `underline: adds a line below the text.`,
                            `line-through: Adds a line to the text.`,
                            `none: To remove decoration.`,
                        ]
                    },
                    {title: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
`<head>`,
    `<style>`,
        `#p1 {text-decoration: overline;}`,
        `#p2 {text-decoration: underline;}`,
        `#p3 {text-decoration: line-through;}`,
        `#p4 {text-decoration: overline underline;}`,
    `</style>`,
`</head>`,
`<body>`,
    `<p id="p1">text-decoration: overline</p>`,
    `<p id="p2">text-decoration: undrline</p>`,
    `<p id="p3">text-decoration: line-through</p>`,
    `<p id="p4">text-decoration: overline underline</p>`,
`</body>`,
`</html>`,
                        ]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <style>
                                #p1 {text-decoration: overline;}
                                #p2 {text-decoration: underline;}
                                #p3 {text-decoration: line-through;}
                                #p4 {text-decoration: overline underline;}
                            </style>
                        </head>
                        <body>
                            <p id="p1">text-decoration: overline</p>
                            <p id="p2">text-decoration: undrline</p>
                            <p id="p3">text-decoration: line-through</p>
                            <p id="p4">text-decoration: overline underline</p>
                        </body>
                        </html>`
                    },
                    {title: "Text Alignment"},
                    {
                        desc: "The text alignment property is used to align the text within the container. Container can be a div, section, etc."
                    },
                    {title: "Syntax:"},
                    {
                        code: [`selector{`,`text-align: value;`,`}`]
                    },
                    {desc:"There are four values for text alignment:"},
                    {
                        points: [
                            `left: align the text to the left.`,
                            `centre: align the text to the centre.`,
                            `right: align the text to the right.`,
                            `justify: spread the text evenly between the left and right margins.`
                        ]
                    },
                    {title: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
`<head>`,
    `<style>`,
        `#p1 {text-align: left;}`,
        `#p2 {text-align: right;}`,
        `#p3 {text-align: end;}`,
        `#p4 {text-align: justify;}`,
    `</style>`,
`</head>`,
`<body>`,
    `<p id="p1">text-align: left</p>`,
    `<p id="p2">text-align: right</p>`,
    `<p id="p3">text-align: end</p>`,
    `<p id="p4">text-align: justify</p>`,
`</body>`,
`</html>`,
                        ]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <style>
                                #p1 {text-align: left;}
                                #p2 {text-align: right;}
                                #p3 {text-align: end;}
                                #p4 {text-align: justify;}
                            </style>
                        </head>
                        <body>
                            <p id="p1">text-align: left</p>
                            <p id="p2">text-align: right</p>
                            <p id="p3">text-align: end</p>
                            <p id="p4">text-align: justify</p>
                        </body>
                        </html>`
                    },
                    {title: "Text Transformation"},
                    {desc: "It transforms the text case."},
                    {title: "Syntax:"},
                    {
                        code: [`selector {`,`text-transform: value;`,`}`]
                    },
                    {
                        desc: "There are four values for text-transform:"
                    },
                    {
                        points: [
                            `uppercase: Transform text to uppercase (all capital letters).`,
                            `lowercase: transform text to lowercase (all small letters).`,
                            `capitalise: capitalise the first character from each word.`,
                            `none: To remove text transformation. `,
                        ]
                    },
                    {
                        code: [
                            `<html lang="en">`,
`<head>`,
    `<style>`,
        `#p1 {text-transform: uppercase;}`,
        `#p2 {text-transform: lowercase;}`,
        `#p3 {text-transform: capitalize;}`,
        `#p4 {text-transform: none;}`,
    `</style>`,
`</head>`,
`<body>`,
    `<p id="p1">text-transform: uppercase</p>`,
    `<p id="p2">text-transform: lowercase</p>`,
    `<p id="p3">text-transform: capitalize</p>`,
    `<p id="p4">text-transform: none</p>`,
`</body>`,
`</html>`,
                        ]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <style>
                                #p1 {text-transform: uppercase;}
                                #p2 {text-transform: lowercase;}
                                #p3 {text-transform: capitalize;}
                                #p4 {text-transform: none;}
                            </style>
                        </head>
                        <body>
                            <p id="p1">text-transform: uppercase</p>
                            <p id="p2">text-transform: lowercase</p>
                            <p id="p3">text-transform: capitalize</p>
                            <p id="p4">text-transform: none</p>
                        </body>
                        </html>`
                    },
                    {title: "Letter Spacing"},
                    {desc: "The letter-spacing property allows to specify the spacing between each character in the text."},
                    {desc:"The property values can be in pixels (px), em, rem, percentage (%), etc."},
                    {title: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
                        `<head>`,
                            `<style>`,
                                `h1{`,
                                    `letter-spacing: 5px;`,
                                `}`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<h1>Programmer D</h1>`,
                        `</body>`,
                        `</html>`,
                        ]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <style>
                                h1{letter-spacing: 5px;}
                            </style>
                        </head>
                        <body>
                            <h1>Programmer D</h1>
                        </body>
                        </html>`
                    },
                    {title: "Line Height"},
                    {desc:"The line-height property controls the spacing between the two lines of text."},
                    {title: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
                        `<head>`,
                            `<style>`,
                                `h1{`,
                                    `line-height: 3.5;`,
                                `}`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<h1>Programmer D</h1>`,
                            `<h1>Developer and programmerd.in</h1>`,
                        `</body>`,
                        `</html>`
                        ]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <style>
                                h1{
                                    line-height: 3.5;
                                }
                            </style>
                        </head>
                        <body>
                            <h1>Programmer D</h1>
                            <h1>Developer and programmerd.in</h1>
                        </body>
                        </html>`
                    },
                    {title: "Text Shadow"},
                    {desc: "The text-shadow property adds a shadow to the text."},
                    {title: "Syntax:"},
                    {
                        code: [`selector{`,
                        `text-shadow:  Horizontal offset, vertical offset, blur radius, color;`,`}`,]
                    },
                    {title: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
                        `<head>`,
                            `<style>`,
                                `h1{`,
                                    `text-shadow: 2px 3px 4px red;`,
                                `}`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<h1>Programmer D</h1>`,
                        `</body>`,
                        `</html>`,
                        ]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <style>
                                h1{
                                    text-shadow: 2px 3px 4px red;
                                }
                            </style>
                        </head>
                        <body>
                            <h1>Programmer D</h1>
                        </body>
                        </html>`
                    },
                    {title: "Text Overflow"},
                    {desc:"The text-overflow property handles text that overflows its container."},
                    {desc:"There are two values we can use with text-overflow:"},
                    {
                        points: [
                            "ellipsis: Truncates overflowing text with an ellipsis.",
                            "clip: clips the text without any visual indication."
                        ]
                    }
                ]
            },
            {
                title: "CSS Box Model",
                content: [
                    {
                        desc: "The CSS Box model defines how elements are rendered and how their dimensions are calculated. It describes the structure of an element as a rectangular box that has content, padding, a border, and a margin. The box model consists of four main components, which are"
                    },
                    {title: "1. Content"},
                    {
                        points: [
                            "The innermost component of the box model is the actual content of the element. It can be text, image, video, etc.",
                            "The content area is defined by the width and height properties."
                        ]
                    },
                    {title: "2. Padding"},
                    {
                        points: [
                            "The space between the actual content and the border of the element is the padding.",
                            "The padding area is defined by the property padding. For more details, follow the CSS Padding tutorial."
                        ]
                    },
                    {title: "3. Border"},
                    {
                        points: [
                            "The border surrounds the content and padding and gives the visual border of the element.",
                            "The border properties can be controlled using the border keyword. For more details, follow the CSS Borders tutorial."
                        ]
                    },
                    {title: "4. Margin"},
                    {
                        points: [
                            "The margin is the space outside the element that separates it from other elements in the layout.",
                            "The margin of the element is controlled by the margin property. For more details, follow the CSS Margin tutorial."
                        ]
                    },
                    {desc:"The CSS Box model can be visually represented as:"},
                    {
                        image: {
                            image: "https://www.csssolid.com/images/box-model/css-box-model.png",
                            width: 1000, height: 1000
                        }
                    },
                    {title: "Calculating the total dimension of the element"},
                    {desc:"The total width and height of the element is calculated with the formula:"},
                    {b: "Total Width = Width + Left Padding + Right Padding + Left Border + Right Border + Left Margin + Right Margin"},
                    {b: "Total Height = Height + Top Padding + Bottom Padding + Top Border + Bottom Border + Top Margin + Bottom Margin"},
                    {title: "Example:"},
                    {
                        code: [
                            `<head>`,
    `<style>`,
        `p{`,
            `width: 200px;`,
            `height: 300px;`,
            `padding: 15px;`,
            `border: 10px solid red;`,
            `margin: 5px;`,
        `}`,
    `</style>`,
`</head>`,
`<body>`,
    `<p>Programmer D</p>`,
`</body>`,
`</html>`,
                        ]
                    },
                    {b: "Output:"},
                    {
                        html: `<head>
                        <style>
                            p{
                                width: 200px;
                                height: 300px;
                                padding: 15px;
                                border: 10px solid red;
                                margin: 5px;
                            }
                        </style>
                    </head>
                    <body>
                        <p>Programmer D</p>
                    </body>
                    </html>`
                    },
                    {desc: "Here, the total height and width will be represented as"},
                    {b: "Total Width = 200px (width) + 15px (left padding) + 15px (right padding) + 10px (left border) + 10px (right border) + 5px (left margin) + 5px (right margin) = 260px."},
                    {b: "Total Height = 300px (Height) + 15px (Top Padding) + 15px (Bottom Padding) + 10px (Top Border) + 10px (Bottom Border) + 5px (Top Margin) + 5px (Bottom Margin) = 360px"},
                    {title :"Playaround:"},
                    {desc: "To view the dimension of any element follow the steps:"},
                    {
                        points: [
                            "Right-click and click on Inspect.",
                            "Click on the arrow key in the top left corner.",
                            "Select the element",
                            "Unhide the computed styles sidebar.",
                            "Toggle the properties."
                        ]
                    }
                ]
            },
            {
                title: "CSS Padding",
                content: [
                    {
                        desc: "Padding is the space between the HTML content and the border. It gives internal spacing and helps to enhance the website."
                    },
                    {desc: "Consider the image:"},
                    {
                        image:{
                            image: "/image/tutorials/css/padding.png",
                            width: 1000, height: 1000
                        }
                    },
                    {desc:"Here, the space between the content and the border is the padding."},
                    {b: "Syntax:"},
                    {
                        code: [`selector{`,`padding: value;`,`}`]
                    },
                    {desc: "Padding value can be used in any of the following methods:"},
                    {b: "Method 1"},
                    { code: [`selector{`,`padding: value;`,`}`] },
                    {
                        desc: "Here, the padding value will apply equal padding to all sides (top, right, left, and bottom)."
                    },
                    {title: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
                        `<head>`,
                            `<style>`,
                                `#p1{ border: 2px solid purple; }`,
                                `#p2 {`,
                                    `padding: 12px; `,
                                    `border: 2px solid red;`,
                                `}`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<p id="p1">Programmer D (without padding)</p>`,
                            `<p id="p2">Programmer D (with padding)</p>`,
                        `</body>`,
                        `</html>`,
                        ]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <style>
                                #p1{ border: 2px solid purple; }
                                #p2 { padding: 12px; border: 2px solid red; }
                            </style>
                        </head>
                        <body>
                            <p id="p1">Programmer D (without padding)</p>
                            <p id="p2">Programmer D (with padding)</p>
                        </body>
                        </html>`
                    },
                    {
                        desc: "Note: Values can be specified in different units, such as pixels (px), em, rem, percentage (%), auto, etc. If you are not familiar with borders, you can also check out the CSS borders tutorial."
                    },
                    {title: "Method 2"},
                    {
                        code: [`selector{`,`padding: value1 value2;`,`}`]
                    },
                    {
                        desc:"Here, value 1 is the veritcal padding(y-axis) and value 2 is the horizontal padding (x-axis)."
                    },
                    {title: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
                            `<head>`,
                                `<style>`,
                                    `#p1{ border: 2px solid purple; }`,
                                    `#p2 {`,
                                        `padding: 20px 50px;`,
                                        `border: 2px solid red;`,
                                    `}`,
                                `</style>`,
                            `</head>`,
                            `<body>`,
                                `<p id="p1">Programmer D (without padding)</p>`,
                                `<p id="p2">Programmer D (with padding)</p>`,
                            `</body>`,
                            `</html>`,
                        ]
                    },
                    {
                        html: `<html lang="en">
<head>
    <style>
        #p1{ border: 2px solid purple; }
        #p2 { padding: 20px 50px; border: 2px solid red; }
    </style>
</head>
<body>
    <p id="p1">Programmer D (without padding)</p>
    <p id="p2">Programmer D (with padding)</p>
</body>
</html>`
                    },
                    {title: "Method 3"},
                    {
                        code: [`selector{`,`padding: value1 value2 value2 value4;`,`}`]
                    },
                    {desc:"In this method, each value represents the padding of individual sides (top, right, bottom, left)."},
                    {
                        points: ["top: value1","right: value2","bottom: value3","left: value4"]
                    },
                    {title: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
                            `<head>`,
                                `<style>`,
                                    `#p1{ border: 2px solid purple; }`,
                                    `#p2 {`,
                                        `padding: 15px 30px 25px 50px;`,
                                        `border: 2px solid red;`,
                                    `}`,
                                `</style>`,
                            `</head>`,
                            `<body>`,
                                `<p id="p1">Programmer D (without padding)</p>`,
                                `<p id="p2">Programmer D (with padding)</p>`,
                            `</body>`,
                            `</html>`,   
                        ]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <style>
                                #p1{ border: 2px solid purple; }
                                #p2 { padding: 15px 30px 25px 50px; border: 2px solid red; }
                            </style>
                        </head>
                        <body>
                            <p id="p1">Programmer D (without padding)</p>
                            <p id="p2">Programmer D (with padding)</p>
                        </body>
                        </html>`
                    },
                    {desc: "In this example, the padding on individual sides is"},
                    {
                        points: ["top: 10px","right: 20px","bottom: 25px","left: 50"]
                    },
                    {b: "Playaround:"},
                    {desc: "You can also check the padding of each HTML element(s) using the inspect tool. Follow the steps."},
                    {
                        points: [
                            "Right-click and click on inspect.",
                            "Click on the computed styles sidebar.",
                            "Toggle with the box model."
                        ]
                    }
                ]
            },
            {
                title: "CSS Margin",
                content: [
                    {
                        desc: "The margin is the space outside the HTML element. It gives external spacing and differentiates two or more elements."
                    },
                    {desc: "Consider the image:"},
                    {
                        image:{
                            image: "/image/tutorials/css/padding.png",
                            width: 1000, height: 1000
                        }
                    },
                    {desc: "Here, the space outside the border is the margin."},
                    {b: "Syntax:"},
                    {
                        code: [`selector{`,`margin: value;`,`}`]
                    },
                    {desc: "The margin value can be used in any of the following methods:"},
                    {title: "Method 1"},
                    {
                        code: [`selector{`,`margin: value;`,`}`]
                    },
                    {desc: "Here, the margin value will apply an equal margin to all sides (top, right, left, and bottom)."},
                    {title: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
                        `<head>`,
                            `<style>`,
                                `#p1{ border: 2px solid purple; }`,
                                `#p2 {`,
                                    `margin: 12px;`,
                                    `border: 2px solid red;`,
                                `}`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<p id="p1">Programmer D (without margin)</p>`,
                            `<p id="p2">Programmer D (with margin)</p>`,
                        `</body>`,
                        `</html>`
                        ]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <style>
                                #p1{ border: 2px solid purple; }
                                #p2 { margin: 12px; border: 2px solid red; }
                            </style>
                        </head>
                        <body>
                            <p id="p1">Programmer D (without margin)</p>
                            <p id="p2">Programmer D (with margin)</p>
                        </body>
                        </html>`
                    },
                    {desc: "Note: Values can be specified in different units, such as pixels (px), em, rem, percentage (%), auto, etc."},
                    {title: "Method 2"},
                    {
                        code: [`selector{`,`margin: value1 value2;`,`}`]
                    },
                    {desc: "Here, value 1 is the vertical margin (y-axis), and value 2 is the horizontal margin (x-axis)."},
                    {b: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
                        `<head>`,
                            `<style>`,
                                `#p1{ border: 2px solid purple; }`,
                                `#p2 {`,
                                    `margin: 20px 50px;`,
                                    `border: 2px solid red;`,
                                `}`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<p id="p1">Programmer D (without margin)</p>`,
                            `<p id="p2">Programmer D (with margin)</p>`,
                        `</body>`,
                        `</html>`
                        ]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <style>
                                #p1{ border: 2px solid purple; }
                                #p2 { margin: 20px 50px; border: 2px solid red; }
                            </style>
                        </head>
                        <body>
                            <p id="p1">Programmer D (without margin)</p>
                            <p id="p2">Programmer D (with margin)</p>
                        </body>
                        </html>`
                    },
                    {desc: "Note: You can use the inspect tool to verify."},
                    {title: "Method 3"},
                    {
                        code: [`selector{`,`margin: value1 value2 value2 value4;`,`}`]
                    },
                    {desc: "In this method, each value represents the margin of individual sides (top, right, bottom, left)."},
                    {
                        points: [`top: value1`,`right: value2`,`bottom: value3`,`left: value4`]
                    },
                    {b: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
                            `<head>`,
                                `<style>`,
                                    `#p1{ border: 2px solid purple; }`,
                                    `#p2 {`,
                                        `margin: 15px 30px 25px 50px;`,
                                        `border: 2px solid red;`,
                                    `}`,
                                `</style>`,
                            `</head>`,
                            `<body>`,
                                `<p id="p1">Programmer D (without margin)</p>`,
                                `<p id="p2">Programmer D (with margin)</p>`,
                            `</body>`,
                            `</html>`
                        ]
                    },
                    {
                        html : `<html lang="en">
                        <head>
                            <style>
                                #p1{ border: 2px solid purple; }
                                #p2 { margin: 15px 30px 25px 50px; border: 2px solid red; }
                            </style>
                        </head>
                        <body>
                            <p id="p1">Programmer D (without margin)</p>
                            <p id="p2">Programmer D (with margin)</p>
                        </body>
                        </html>`
                    },
                    {desc: "In this example, the margin on individual sides is"},
                    {
                        points: ["top: 10px","right: 20px","bottom: 25px","left: 50"]
                    }
                ]
            },
            {
                title: "CSS Hover",
                content: [
                    {
                        desc: "CSS hover is used to enhance the user experience. We can change the appearance or the behaviour of the HTML element(s) when the user hovers over it."
                    },
                    {b: "Syntax:"},
                    {
                        code: [`selector:hover{`,`/* CSS rule(s) */`,`}`]
                    },
                    {title: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
                        `<head>`,
                            `<style>`,
                                `#p1{ color: green; }`,
                                `#p1:hover{ color: red; }`,
                                `#p2 {`,
                                    `background: cornflowerblue;`,
                                    `border: 1px solid black;`,
                                    `cursor: pointer;`,
                                    `color: white;`,
                                `}`,
                                `#p2:hover{`,
                                    `background: white;`,
                                    `color: cornflowerblue;`,
                                `}`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<p id="p1">Programmer D</p>`,
                            `<button id="p2">Button</button>`,
                        `</body>`,
                        `</html>`
                        ]
                    },
                    {title: "Output:"},
                    {
                        html: `<html lang="en">
                        <head>
                            <style>
                                #p1{ color: green; }
                                #p1:hover{ color: red; }
                                #p2 {
                                    background: cornflowerblue;
                                    border: 1px solid black;
                                    cursor: pointer;
                                    color: white;
                                }
                                #p2:hover{
                                    background: white;
                                    color: cornflowerblue;
                                }
                            </style>
                        </head>
                        <body>
                            <p id="p1">Programmer D</p>
                            <button id="p2">Button</button>
                        </body>
                        </html>`
                    },
                    {desc: "This is one example of using CSS hover; you can try many other things too."}
                ]
            },
            {
                title: "CSS Cursors",
                content: [
                    {
                        desc: "This property is generally used with the hover property. We can add how the mouse cursor responds when we hover it on the element to make the element stand out."
                    },
                    {title: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
                        `<head>`,
                            `<title>CSS Hover & Cursor</title>`,
                            `<style>`,
                                `h1 {`,
                                    `font-size: 20px;`,
                                    `color: royalblue;`,
                                `}`,
                                `div {`,
                                    `margin: 10px 10px;`,
                                    `background: cornflowerblue;`,
                                `}`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<h1>CSS tutorials with Programmer D</h1>`,
                            `<div style="cursor:pointer">Pointer</div>`,
                            `<div style="cursor:alias">alias Value</div>`,
                            `<div style="cursor:auto">auto Value</div>`,
                            `<div style="cursor:all-scroll">all-scroll value</div>`,
                            `<div style="cursor:col-resize">col-resize value</div>`,
                            `<div style="cursor:crosshair">Crosshair</div>`,
                            `<div style="cursor:default">Default value</div>`,
                            `<div style="cursor:copy">copy value</div>`,
                            `<div style="cursor:move">Move</div>`,
                            `<div style="cursor:e-resize">e-resize</div>`,
                            `<div style="cursor:ew-resize">ew-resize</div>`,
                            `<div style="cursor:ne-resize">ne-resize</div>`,
                            `<div style="cursor:nw-resize">nw-resize</div>`,
                            `<div style="cursor:n-resize">n-resize</div>`,
                            `<div style="cursor:se-resize">se-resize</div>`,
                            `<div style="cursor:sw-resize">sw-resize</div>`,
                            `<div style="cursor:w-resize">w-resize</div>`,
                            `<div style="cursor:s-resize">s-resize</div>`,
                            `<div style="cursor:wait">wait</div>`,
                            `<div style="cursor:text">text</div>`,
                            `<div style="cursor:help">help</div>`,
                            `<div style="cursor:progress">Progress</div>`,
                            `<div style="cursor:no-drop">no-drop</div>`,
                            `<div style="cursor:not-allowed">not-allowed</div>`,
                            `<div style="cursor:vertical-text">vertical-text</div>`,
                            `<div style="cursor:zoom-in">Zoom-in</div>`,
                            `<div style="cursor:zoom-out">Zoom-out</div>`,
                        `</body>`,
                        `</html>`
                        ]
                    },
                    {title: "Output:"},
                    {
                        html: `<html lang="en">
                        <head>
                            <title>CSS Hover & Cursor</title>
                            <style>
                                h1 {
                                    font-size: 20px;
                                    color: royalblue;
                                }
                                div { 
                                    margin: 10px 10px;
                                    background: cornflowerblue;
                                }
                            </style>
                        </head>
                        <body>
                            <h1>CSS tutorials with Programmer D</h1>
                            <div style="cursor:pointer">Pointer</div>
                            <div style="cursor:alias">alias Value</div>
                            <div style="cursor:auto">auto Value</div>
                            <div style="cursor:all-scroll">all-scroll value</div>
                            <div style="cursor:col-resize">col-resize value</div>
                            <div style="cursor:crosshair">Crosshair</div>
                            <div style="cursor:default">Default value</div>
                            <div style="cursor:copy">copy value</div>
                            <div style="cursor:move">Move</div>
                            <div style="cursor:e-resize">e-resize</div>
                            <div style="cursor:ew-resize">ew-resize</div>
                            <div style="cursor:ne-resize">ne-resize</div>
                            <div style="cursor:nw-resize">nw-resize</div>
                            <div style="cursor:n-resize">n-resize</div>
                            <div style="cursor:se-resize">se-resize</div>
                            <div style="cursor:sw-resize">sw-resize</div>
                            <div style="cursor:w-resize">w-resize</div>
                            <div style="cursor:s-resize">s-resize</div>
                            <div style="cursor:wait">wait</div>
                            <div style="cursor:text">text</div>
                            <div style="cursor:help">help</div>
                            <div style="cursor:progress">Progress</div>
                            <div style="cursor:no-drop">no-drop</div>
                            <div style="cursor:not-allowed">not-allowed</div>
                            <div style="cursor:vertical-text">vertical-text</div>
                            <div style="cursor:zoom-in">Zoom-in</div>
                            <div style="cursor:zoom-out">Zoom-out</div>
                        </body>
                        </html>`
                    },
                    {title :"Custom Cursor"},
                    {desc: "With all the predefined cursors, we can create our own cursor."},
                    {b: "Syntax:"},
                    {
                        code: [`.selector {`,`cursor: url('custom-cursor.png'), auto;`,`}`]
                    },
                    {desc: "The auto keyword ensures that the browser falls back to the default cursor when the custom cursor fails to load."}
                ]
            },
            {
                title: "CSS List Styles",
                content: [
                    {
                        desc: "Lists are a common element in web design used to prevent content from being un-organized. CSS allows you to style lists to match the design aesthetic and improve the readability of the web page. Following are the various techniques for styling HTML lists."
                    },
                    {title: "Unordered list styling"},
                    {desc: "To style unordered lists (bulleted lists), we can change the list item marker."},
                    {b:"Syntax:"},
                    {
                        code:[`ul {`,`list-style-type: value;`,`}`]
                    },
                    {desc: "The value can be"},
                    {
                        points: [
                            "disc: (default) - Filled circle marker",
                            "circle: hollow circle marker",
                            "square: a filled square marker",
                            "None: No marker (remove bullets)"
                        ]
                    },
                    {title: "Example:"},
                    {
                        code:[
                            `<head>`,
                        `<style>`,
                            `#ul1 { list-style-type: disc; }`,
                            `#ul2 { list-style-type: circle; }`,
                            `#ul3 { list-style-type: square; }`,
                            `#ul4 { list-style-type: none; }`,
                        `</style>`,
                    `</head>`,
                    `<body>`,
                        `<ul id="ul1">`,
                            `<li>Hello world</li>`,
                            `<li>This is ul1</li>`,
                        `</ul>`,
                        `<ul id="ul2">`,
                            `<li>Hello world</li>`,
                            `<li>This is ul2</li>`,
                        `</ul>`,
                        `<ul id="ul3">`,
                            `<li>Hello world</li>`,
                            `<li>This is ul3</li>`,
                        `</ul>`,
                        `<ul id="ul4">`,
                            `<li>Hello world</li>`,
                            `<li>This is ul4</li>`,
                        `</ul>`,
                    `</body>`,
                    `</html>`,
                        ]
                    },
                    {
                        html: `<head>
                        <style>
                            #ul1 { list-style-type: disc; }
                            #ul2 { list-style-type: circle; }
                            #ul3 { list-style-type: square; }
                            #ul4 { list-style-type: none; }
                        </style>
                    </head>
                    <body>
                        <ul id="ul1">
                            <li>Hello world</li>
                            <li>This is ul1</li>
                        </ul>
                        <ul id="ul2">
                            <li>Hello world</li>
                            <li>This is ul2</li>
                        </ul>
                        <ul id="ul3">
                            <li>Hello world</li>
                            <li>This is ul3</li>
                        </ul>
                        <ul id="ul4">
                            <li>Hello world</li>
                            <li>This is ul4</li>
                        </ul>
                    </body>
                    </html>`
                    },
                    {title: "Ordered Lists Styling"},
                    {desc: "For ordered lists (numbered lists), we can cusromize the list item numbering."},
                    {b:"Syntax:"},
                    {
                        code: [`ol {`,`list-style-type: value;`,`}`]
                    },
                    {desc: "The value can be any of the following:"},
                    {
                        points: [
                            "decimal: (default) - Decimal numbers (1, 2, 3, etc.)",
                            "decimal-leading-zero: Decimal numbers with leading zeros (01, 02, 03, etc.)",
                            "lower-roman: lowercase Roman numbers (i, ii, iii,...)",
                            "upper-roman: uppercase Roman numbers (I, II, III,...)",
                            "lower-alpha: lowercase alphabetical letters (a, b, c, etc.)",
                            "upper-alpha: uppercase alphabetical letters (A, B, C, etc.)"
                        ]
                    },
                    {title: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
                        `<head>`,
                            `<style>`,
                                `#ul1 { list-style-type: decimal; }`,
                                `#ul2 { list-style-type: decimal-leading-zero; }`,
                                `#ul3 { list-style-type: lower-roman; }`,
                                `#ul4 { list-style-type: upper-roman; }`,
                                `#ul5 { list-style-type: lower-alpha; }`,
                                `#ul6 { list-style-type: upper-alpha; }`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<ul id="ul1">`,
                                `<li>This is style decimal</li>`,
                            `</ul>`,
                            `<ul id="ul2">`,
                                `<li>This is style list-style-type</li>`,
                            `</ul>`,
                            `<ul id="ul3">`,
                                `<li>This is lstyle lower-roman</li>`,
                            `</ul>`,
                            `<ul id="ul4">`,
                                `<li>This is style upper-roman</li>`,
                            `</ul>`,
                            `<ul id="ul5">`,
                                `<li>This is lower-alpha</li>`,
                            `</ul>`,
                            `<ul id="ul6">`,
                                `<li>This is upper-alpha</li>`,
                            `</ul>`,
                        `</body>`,
                        `</html>`,
                        ]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <style>
                                #ul1 { list-style-type: decimal; }
                                #ul2 { list-style-type: decimal-leading-zero; }
                                #ul3 { list-style-type: lower-roman; }
                                #ul4 { list-style-type: upper-roman; }
                                #ul5 { list-style-type: lower-alpha; }
                                #ul6 { list-style-type: upper-alpha; }
                            </style>
                        </head>
                        <body>
                            <ul id="ul1">
                                <li>This is style decimal</li>
                            </ul>
                            <ul id="ul2">
                                <li>This is style list-style-type</li>
                            </ul>
                            <ul id="ul3">
                                <li>This is lstyle lower-roman</li>
                            </ul>
                            <ul id="ul4">
                                <li>This is style upper-roman</li>
                            </ul>
                            <ul id="ul5">
                                <li>This is lower-alpha</li>
                            </ul>
                            <ul id="ul6">
                                <li>This is upper-alpha</li>
                            </ul>
                        </body>
                        </html>`
                    },
                    {title: "List-style position"},
                    {desc: "The 'list-style-position' property determines where the list markers (bullets or numbers) are placed in relation to the content."},
                    {desc: "It has two values:"},
                    {
                        points: [
                            "inside: (default) List markers are inside the content's box. This is the default behaviour.",
                            "outside: List markers are outside the content's box, typically to the left of the content, creating a hanging indent effect."
                        ]
                    },
                    {title: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
                        `<head>`,
                            `<style>`,
                                `#ul1 { list-style-position: inside; }`,
                                `#ul2 { list-style-position: outside; }`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<ul id="ul1">`,
                                `<li>list style position : inside</li>`,
                            `</ul>`,
                            `<ul id="ul2">`,
                                `<li>list style position : outside</li>`,
                            `</ul>`,
                        `</body>`,
                        `</html>`,
                        ]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <style>
                                #ul1 { list-style-position: inside; }
                                #ul2 { list-style-position: outside; }
                            </style>
                        </head>
                        <body>
                            <ul id="ul1">
                                <li>list style position : inside</li>
                            </ul>
                            <ul id="ul2">
                                <li>list style position : outside</li>
                            </ul>
                        </body>
                        </html>`
                    },
                    {title :"Removing the default list styles"},
                    {desc: "To remove default list styles (bullets or numbers), set the 'list-style' property to 'none'."},
                    {b: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
                        `<head>`,
                            `<style>`,
                                `#ul1 { list-style: circle; }`,
                                `#ul2 { list-style: none; }`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<ul id="ul1">`,
                                `<li>Developer</li>`,
                            `</ul>`,
                            `<ul id="ul2">`,
                                `<li>list style :none</li>`,
                            `</ul>`,
                        `</body>`,
                        `</html>`,
                        ]
                    },
                    {
                        html: `<html lang="en">
                        <head>
                            <style>
                                #ul1 { list-style: circle; }
                                #ul2 { list-style: none; }
                            </style>
                        </head>
                        <body>
                            <ul id="ul1">
                                <li>Developer</li>
                            </ul>
                            <ul id="ul2">
                                <li>list style :none</li>
                            </ul>
                        </body>
                        </html>`
                    },
                    {title: "Custom List Style"},
                    {desc: "To set a custom list style, set the 'list-style-type' to your new required custom style."},
                    {b: "Example:"},
                    {
                        code: [
                            `<html lang="en">`,
                        `<head>`,
                            `<style>`,
                                `#ul1 { list-style-type: "😍"; }`,
                            `</style>`,
                        `</head>`,
                        `<body>`,
                            `<ul id="ul1">`,
                                `<li>Developer</li>`,
                            `</ul>`,
                        `</body>`,
                        `</html>`,
                        ]
                    },
                    {
                        html : `<html lang="en">
                        <head>
                            <style>
                                #ul1 { list-style-type: "😍"; }
                            </style>
                        </head>
                        <body>
                            <ul id="ul1">
                                <li>Developer</li>
                            </ul>
                        </body>
                        </html>`
                    }
                ]
            },
            {
                title: "CSS Links",
                content: [
                    {desc: "To style the way your HTML links look on the website you can use this property. "},
                    {b: "Example:"},
                    {
                        code: [
                            `<html>`,
                        `<style>`,
                        `a:link{`,
                            `color: red;`,
                        `}`,
                        `a:visited{`,
                            `color: green;`,
                        `}`,
                        `a:hover{`,
                            `color: blue;`,
                        `}`,
                        `</style>`,
                        `<body>`,
                            `<h2>CSS Tutorial in Programmer D</h2>`,
                            `<a href="https://www.youtube.com/@ProgrammerD7" target="_blank">Go to youtube</a>`,
                        `</body>`,
                        `</html>`,
                        ]
                    },
                    {
                        html: `<html>
                        <style>
                        a:link{
                            color: red;
                        }
                        a:visited{
                            color: green;
                        }
                        a:hover{
                            color: blue;
                        }
                        </style>
                        <body>
                            <h2>CSS Tutorial in Programmer D</h2>
                            <a href="https://www.youtube.com/@ProgrammerD7" target="_blank">Go to youtube</a>
                        </body>
                        </html>`
                    },
                    {desc:"On hovering over this code, you could see the colour changing to “hotpink”. As the target is “_blank” the link would be opened in a new tab."}
                ]
            },
            {
                title: "CSS Combinators",
                content: [
                    {
                        desc: "It explains the relation between multiple or single selector. There are four major combinators that we would be looking at here."
                    },
                    {title: "Descendant Selector"},
                    {desc: "It selects all the elements to present inside another specified HTML element. "},
                    {b: "EXample:"},
                    {
                        code: [
                            `<html>`,
                        `<style>`,
                        `div p{`,
                            `color: white;`,
                            `background: green;`,
                        `}`,
                        `</style>`,
                        `<body>`,
                        `<h1>CSS Combinators</h1>`,
                        `<div>`,
                        `<p>Paragraph 1.</p>`,
                        `<p>Paragraph 2.</p>`,
                        `<section>`,
                        `<p>Paragraph 3.</p>`,
                        `</section>`,
                        `<p>Paragraph 4.</p>`,
                        `</div>`,
                        `<p>Paragraph 5.</p>`,
                        `</body>`,
                        `</html>`
                        ]
                    },
                    {
                        html: `<html>
                        <style>
                        div p{
                            color: white;
                            background: green;
                        }
                        </style>
                        <body>
                        <h1>CSS Combinators</h1>
                        <div>
                        <p>Paragraph 1.</p>
                        <p>Paragraph 2.</p>
                        <section>
                        <p>Paragraph 3.</p>
                        </section>
                        <p>Paragraph 4.</p>
                        </div>
                        <p>Paragraph 5.</p>
                        </body>
                        </html>`
                    },
                    {desc: "As you can see, div had 4 paragraphs and so, CSS rules were applied on all of them."},
                    {title: "Child Selector"},
                    {desc: "It selects only the first generation descendants of a specified element."},
                    {b: "Example:"},
                    {
                        code: [`div>p {`,`color: wheat;`,`background-color: rebeccapurple;`,`}`]
                    },
                    {desc: "Just using this child selector in the same code the output changes to this:"},
                    {
                        html: `<html>
                        <style>
                        div>p {
                            color: wheat;
                            background-color: rebeccapurple;
                        }
                        </style>
                        <body>
                        <h1>CSS Combinators</h1>
                        <div>
                        <p>Paragraph 1.</p>
                        <p>Paragraph 2.</p>
                        <section>
                        <p>Paragraph 3.</p>
                        </section>
                        </div>
                        <p>Paragraph 4.</p>
                        </body>
                        </html>`
                    },
                    {desc: "It happened because paragraph 3 is nested in the <section> tag and therefore is 2nd generation to the <div> selector and thus wasn’t selected."},
                    {title :"Adjacent Sibling Selector"},
                    {desc:"As the name suggests this selector only selects the adjacent element to the specified element. "},
                    {b: "Example:"},
                    {
                        code: [`div+p {`,`color: wheat;`,`background-color: rebeccapurple;`,`}`]
                    },
                    {desc:"Now, the <p> tag right after <div> ends, would be selected. So, the output would look like this:"},
                    {
                        html: `<html>
                        <style>
                        div+p {
                            color: wheat;
                            background-color: rebeccapurple;
                        }
                        </style>
                        <body>
                        <h1>CSS Combinators</h1>
                        <div>
                        <p>Paragraph 1.</p>
                        <p>Paragraph 2.</p>
                        <section>
                        <p>Paragraph 3.</p>
                        </section>
                        </div>
                        <p>Paragraph 4.</p>
                        <p>Paragraph 5.</p>
                        </body>
                        </html>`
                    },
                    {title: "General Sibling Selector:"},
                    {desc:"Unlike the adjacent selector, this one going to select all the <p> tags present after <div>."},
                    {title: "Example:"},
                    {
                        code: [`div~p {`,`color: wheat;`,`background-color: rebeccapurple;`,`}`]
                    },
                    {
                        html: `<html>
                        <style>
                        div~p {
                            color: wheat;
                            background-color: rebeccapurple;
                        }
                        </style>
                        <body>
                        <h1>CSS Combinators</h1>
                        <div>
                        <p>Paragraph 1.</p>
                        <p>Paragraph 2.</p>
                        <section>
                        <p>Paragraph 3.</p>
                        </section>
                        </div>
                        <p>Paragraph 4.</p>
                        <p>Paragraph 5.</p>
                        </body>
                        </html>`
                    }
                ]
            },
            {
                title: "CSS Pseudo-classes",
                content: [
                    {
                        desc: "This is a class describing particular state of a selected HTML element. Some important pseudo-classes are Hover, Visited, Active, Link, etc."
                    },
                    {title: "Example:"},
                    {
                        code: [`selector: pseudo-class{`,`property: value;`,`}`]
                    },
                    {desc: "Refer this to know their functionality in depth: CSS hover, CSS links."},
                    {
                        redirect: {
                            text: "CSS hover",
                            href: "/tutorial/css/?query=css+hover"
                        }
                    },
                    {
                        redirect: {
                            text: "CSS links",
                            href: "/tutorial/css/?query=css+links"
                        }
                    }
                ]
            },
            {
                title: "CSS Buttons",
                content: [
                    {
                        desc: "Buttons can be styled in CSS to match the theme of our website. Various ways of styling it is given below."
                    },
                    {b: "Example:"},
                    {
                        code: [
                            `<html>`,
                        `<style>`,
                        `#btn1{`,
                            `background: blue;`,
                            `color: white;`,
                            `padding: 15px 32px;`,
                            `text-decoration: none;`,
                            `font-size: 16px;`,
                            `margin: 4px 2px;`,
                            `cursor: pointer;`,
                        `}`,
                        `#btn2{ box-shadow: 5px 5px purple; margin: 10px; }`,
                        `#btn3{`,
                            `padding: 10px;`,
                            `background: whitesmoke;`,
                            `border-color: red;`,
                            `border-radius: 10;`,
                        `}`,
                        `</style>`,
                        `<body>`,
                        `<h1 style="color: blue;">CSS Buttons</h1>`,
                        `<button>Default Button</button>`,
                        `<a href="#" id="btn1">Link Button</a>`,
                        `<button id="btn2">Shadow Button</button>`,
                        `<button id="btn3">Border Button</button>`,
                        `</body>`,
                        `</html>`
                        ]
                    },
                    {
                        html: `<html>
                        <style>
                        #btn1{
                            background: blue;
                            color: white;
                            padding: 15px 32px;
                            text-decoration: none;
                            font-size: 16px;
                            margin: 4px 2px;
                            cursor: pointer;
                        }
                        #btn2{ box-shadow: 5px 5px purple; margin: 10px; }
                        #btn3{
                            padding: 10px;
                            background: whitesmoke;
                            border-color: red;
                            border-radius: 10;
                        }
                        </style>
                        <body>
                        <h1 style="color: blue;">CSS Buttons</h1>
                        <button>Default Button</button>
                        <a href="#" id="btn1">Link Button</a>
                        <button id="btn2">Shadow Button</button>
                        <button id="btn3">Border Button</button>
                        </body>
                        </html>`
                    }
                ]
            },
            {
                title: "CSS Overflow",
                content: [
                    {
                        desc: "Sometimes the content shown is too large to be visible in a single line or division of the website. So, to avoid loss of that information we can use overflow property."
                    },
                    {title:"Overflow Visible"},
                    {desc:"This makes the whole text visible irrespective of the container size."},
                    {b: "Example:"},
                    {
                        code: [
                            `<style>`,
                        `div{`,
                            `background: purple;`,
                            `border: 1px solid black;`,
                            `overflow: visible;`,
                            `width: 200px;`,
                            `height: 60px;`,
                        `}`,
                        `</style>`,
                        ]
                    },
                    {
                        html: `<html>
                        <style>
                        div{
                            background: purple;
                            border: 1px solid black;
                            overflow: visible;
                            width: 200px;
                            height: 60px;
                        }
                        </style>
                        <body>
                        <h1>CSS Visible</h1>
                        <div>
                        Sometimes the content shown is too large to be visible in a single line or division of the website. So, to avoid loss of that information we can use overflow property.
                        Sometimes the content shown is too large to be visible in a single line or division of the website. So, to avoid loss of that information we can use overflow property.
                        </div>
                        </body>
                        </html>`
                    },
                    {title: "Overflow Hidden"},
                    {desc:"It hides the content which doesn’t fit the box."},
                    {b: "Example:"},
                    {
                        code: [
                            `div{`,
                                `background: purple;`,
                                `border: 1px solid black;`,
                                `overflow: hidden;`,
                                `width: 200px;`,
                                `height: 60px;`,
                            `}`
                        ]
                    },
                    {
                        html: `<html>
                        <style>
                        div{
                            background: purple;
                            border: 1px solid black;
                            overflow: hidden;
                            width: 200px;
                            height: 60px;
                        }
                        </style>
                        <body>
                        <h1>CSS Hidden</h1>
                        <div>
                        Sometimes the content shown is too large to be visible in a single line or division of the website. So, to avoid loss of that information we can use overflow property.
                        Sometimes the content shown is too large to be visible in a single line or division of the website. So, to avoid loss of that information we can use overflow property.
                        </div>
                        </body>
                        </html>`
                    },
                    {title: "Overflow Scroll"},
                    {desc: "It adds an automatic scroller in the container so for the seeing the content it can be scrolled without affecting the container dimensions."},
                    {b: "Example:"},
                    {
                        code: [
                            `div{`,
                                `background: purple;`,
                                `border: 1px solid black;`,
                                `overflow: scroll;`,
                                `width: 200px;`,
                                `height: 60px;`,
                            `}`
                        ]
                    },
                    {
                        html: `<html>
                        <style>
                        div{
                            background: purple;
                            border: 1px solid black;
                            overflow: scroll;
                            width: 200px;
                            height: 60px;
                        }
                        </style>
                        <body>
                        <h1>CSS Scroll</h1>
                        <div>
                        Sometimes the content shown is too large to be visible in a single line or division of the website. So, to avoid loss of that information we can use overflow property.
                        Sometimes the content shown is too large to be visible in a single line or division of the website. So, to avoid loss of that information we can use overflow property.
                        </div>
                        </body>
                        </html>`
                    },
                    {title: "Overflow Auto"},
                    {desc: "It is quite similar to scroll but the scroller is only added when the content starts getting out of the container. Mostly this option is used to avoid unnecessary scroll bars if the content already is within the content dimensions."}
                ]
            },
            {
                title: "CSS Float",
                content: [
                    {
                        desc:"Just like how “wrap through” works in MS Word, the float property allows the balance between text and the image shown beside it."
                    },
                    {b : "Example:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-float/float%20none.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {desc: "This is how your image looks without float property."},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-float/float%20none%20output.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {desc: "When we add, “float: right;”, the style of the website changes drastically."},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-float/float%20right%20output.webp",
                            width: 1000, height: 1000
                        }
                    }
                ]
            },
            {
                title: "CSS !important",
                content: [
                    {
                        desc: "As we know CSS follows a style sheet sequence to decide the order of rules to be applied on the website, and inline CSS overrides all the rules of the internal and external stylesheet. "
                    },
                    {
                        desc: "But if we want a particular rule to be prioritised at all costs in the stylesheet we can use !important tag with it."
                    },
                    {title:"Syntax:"},
                    {
                        code: [`{property:value !important;}`]
                    },
                    {desc: "Add in `style.css` file."}
                ]
            },
            {
                title: "CSS Maths Functions",
                content: [
                    {
                        desc: "Maths functions helps us in fighting dimensions of elements or screen autonomously and thus helps in the responsiveness of a website."
                    },
                    {title: "Calc() Function"},
                    {desc: "Calculates the value generally width of a particular property."},
                    {b: "Example:"},
                    {code: [`width: calc(100%-20px);`]},
                    {desc: "This function will automatically subtract 20px from whatever is the 100% width of that container on the website. This way you can space your elements well without hassles."},
                    {title:"Max & Min Functions"},
                    {desc:"This function takes two parameters and gives the result out of one accordingly."},
                    {b: "Example:"},
                    {code: [`width: max(50px, 50%);`]},
                    {desc: "Out of these two whichever would be greater, would be assigned as a value to the width; vice versa happens for the minimum function."},
                    {title: "Clamp:"},
                    {desc: "Allows you to set a value that must be within a specific range."},
                    {code: [`width: clamp(200px, 50%, 500px);`]},
                    {title: "Round"},
                    {desc:"Rounds a number to the nearest integer."},
                    {code: [`font-size: round(1.5em);`]},
                    {title: "Abs"},
                    {desc: "Returns the absolute value of a number."},
                    {code: [`padding: abs(-10px);`]},
                    {title: "Sqrt"},
                    {desc: "Returns the square root of a number."},
                    {code: [`width: sqrt(16px);`]},
                    {title: "sin(), cos(), tan()"},
                    {desc: "Returns the sine, cosine, or tangent of an angle, respectively. The angle is specified in radians."},
                    {code: [`transform: rotate(sin(45deg));`]},
                    {title: "Atan2"},
                    {desc: "Returns the arctangent of the quotient of its arguments."},
                    {code: [`transform: rotate(atan2(20px, 10px));`]},
                    {desc:"These functions can be quite handy for responsive design and other advanced layout techniques. However, keep in mind browser compatibility and fallbacks if you're targeting older browsers."}
                ]
            },
            {
                title: "CSS Size",
                content: [
                    {
                        desc: "We’ve seen various units in CSS so far used for many different purposes; we did hit and trial to find the correct dimensions of that unit for our website. "
                    },
                    {desc: "But now let’s understand how units work in CSS. "},
                    {title: "Absolute Units."},
                    {
                        points:[
                            `cm - centimetres (1 cm = 37.8 px)`,
                            `mm - millimetres`,
                            `in - inches (1 in = 96 px = 2.54cm)`,
                            `pt - points (1pt = 1/72th of 1 in)`,
                            `pc - picas (1pc = 1/6th of 1 in)`,
                            `px - pixel (1px = 1/96th of 1 in)`
                        ]
                    },
                    {desc: "Generally we only use pixels to set dimensions of an element."},
                    {title: "Relative Units"},
                    {
                        points: [
                            `em - Relative to the font size of the parent element. Eg: 5em means the size would be 5 times the current font size.`,
                            `ex - Relative to X height of the existing font`,
                            `ch - Relative to the width/ radius of the character “0”.`,
                            `rem - Relative to the font size of the root element.`,
                            `vw - Relative to 1% of the width of the viewport. (Viewport is the area of the website visible to the user.)`,
                            `vh -  Relative to 1% of the height of the viewport`,
                            `% - Relative to the parent element’s size.`,
                        ]
                    },
                    {desc: "Apart from this some of the other metrics used in CSS are- "},
                    {
                        points:[
                            "Opacity: Ranges from 0 to 1",
                            "RGB & RGBA values: 0 to 255",
                            "HSL & HSLA values: 0 to 360"
                        ]
                    }
                ]
            },
            {
                title: "CSS Positioning",
                content: [
                    {
                        desc: "The CSS positions allow you to precisely control the placement of an element on the web page. It helps to determine how elements are placed inside the container element and how they interact with the other elements on the page."
                    },
                    {
                        desc:"There are various types of position property values, such as:"
                    },
                    {title: "Static(Default)"},
                    {desc:"The elements are positioned according to the normal flow of the document."},
                    {b: "Syntax:"},
                    {
                        code:[`selector {`,`position: static;`,`}`]
                    },
                    {b: "Example:"},
                    {
                        code: [
                            `<head>`,
                        `<style>`,
                            `img {`,
                                `position: static;`,
                            `}`,
                        `</style>`,
                    `</head>`,
                    `<body>`,
                        `<p id="p1">Lorem ipsum dolor sit amet.</p>`,
                        `<p id="p2">Lorem ipsum dolor sit amet.</p>`,
                        `<img src="https://programmerd.netlify.app/pd-logo.png" alt="logo">`,
                        `<p id="p3">Lorem ipsum dolor sit amet.</p>`,
                        `<p id="p4">Lorem ipsum dolor sit amet.</p>`,
                    `</body>`,
                    `</html>`
                        ]
                    },
                    {
                        html: `<head>
                        <style>
                            img { position: static; }
                        </style>
                    </head>
                    <body>
                        <p id="p1">Lorem ipsum dolor sit amet.</p>
                        <p id="p2">Lorem ipsum dolor sit amet.</p>
                        <img src="https://programmerd.netlify.app/pd-logo.png" width="100px" height="100px" alt="logo">
                        <p id="p3">Lorem ipsum dolor sit amet.</p>
                        <p id="p4">Lorem ipsum dolor sit amet.</p>
                    </body>
                    </html>`
                    },
                    {title: "Relative"},
                    {desc:"Elements are positioned relative to the normal position in the document. You can use the top, right, bottom, and left properties to move the element from its original position."},
                    {b: "Example:"},
                    {
                        code: [`selector {`,`position: relative;`,`}`]
                    },
                    {b: "Example:"},
                    {
                        code: [
                            `<style>`,
        `img {`,
            `position: relative;`,
            `left: 100px;`,
            `top: 50px`,
        `}`,
    `</style>`
                        ]
                    },
                    {
                        html: `<head>
                        <style>
                            img { position: relative; left: 100px; top: 50px }
                        </style>
                    </head>
                    <body>
                        <p id="p1">Lorem ipsum dolor sit amet.</p>
                        <p id="p2">Lorem ipsum dolor sit amet.</p>
                        <img src="https://programmerd.netlify.app/pd-logo.png" width="100px" height="100px" alt="logo">
                        <p id="p3">Lorem ipsum dolor sit amet.</p>
                        <p id="p4">Lorem ipsum dolor sit amet.</p>
                    </body>
                    </html>`
                    },
                    {desc:"Here you can see that the image is repositioned from its original place, and the gap is not filled by another element."},
                    {title: "Absolute"},
                    {desc: "Elements are positioned relative to the closest positioned ancestor (parent), which means we need to have a parent element with a positioning other than 'static'."},
                    {desc:"Note: An absolutely positioned element is removed from the normal flow."},
                    {b: "Example:"},
                    {
                        code: [
                            `<style>`,
                            `.about{`,
                                `position: relative;`,
                            `}`,
                            `.logo{`,
                                `position: absolute;`,
                                `right: 10px;`,
                                `top: 10px;`,
                            `}`,
                        `</style>`
                        ]
                    },
                    {
                        html: `<head>
                        <style>
                            .about{ position: relative; }
                            .logo{ position: absolute; right: 10px; top: 10px; }
                        </style>
                    </head>
                    <body>
                        <h1>Programmer D</h1>
                        <div class="about">
                            <p>Developer</p>
                            <p>founder of Programmer D</p>
                            <img src="https://programmerd.netlify.app/pd-logo.png" width="100px" class="logo" height="100px" alt="logo">
                            </div>
                    </body>
                    </html>`
                    },
                    {desc: "Here, as we have set position relative to the body and absolute to the about section, the about section position can be manipulated with the left of top, left, right, and bottom."},
                    {title: "Fixed"},
                    {desc:"Elements are positioned relative to the viewport (screen) and do not move when the page is scrolled. This is useful for creating elements like fixed headers or footers."},
                    {b: "Example:"},
                    {
                        code: [
                            `h1{`,
                                `position: fixed;`,
                                `top: 10px;`,
                                `right: 20px;`,
                            `}`
                        ]
                    },
                    {
                        html: `<head>
                        <style>
                            h1{
                                position: fixed;
                                top: 10px;
                                right: 20px;
                            }
                        </style>
                    </head>
                    <body>
                        <h1>Programmer D</h1>
                    </body>
                    </html>`
                    },
                    {desc:"Here, the image position will be fixed."},
                    {title:"Float"},
                    {desc:"The float property is used to shift an element to the left or right within its containing element. For more details, follow CSS Float."},
                    {
                        redirect: {
                            text: "CSS Float",
                            href: "/tutorial/css/?query=css+float"
                        }
                    },
                    {title: "Sticky"},
                    {desc: `Position sticky is a hybrid between 'relative' and 'fixed'.
                    It allows an element to become "stuck" to the top or bottom of its container when scrolling, but it behaves like relative positioning within the container until it reaches a specified offset.`},
                    {title: "Example:"},
                    {
                        code: [
                            `h1{`,
                                `position: sticky;`,
                                `top: 10px;`,
                                `right: 20px;`,
                            `}`,
                        ]
                    },
                    {
                        html: `<head>
                        <style>
                            p{
                                height: 700px;
                            }
                            h1{
                                position: sticky;
                                top: 10px;
                                right: 20px;
                            }
                        </style>
                    </head>
                    <body>
                        <h1>Programmer D</h1>
                        <p>This is programmer D website, learn html, css and javascript in free of cost!</p>
                    </body>
                    </html>`
                    }
                ]
            },
            {
                title: "CSS Z-index",
                content: [
                    {
                        desc: "When there are multiple overlapping elements, the z-index helps in deciding the order of their visibility. The element having the highest value of z-index is shown first, followed by the other elements."
                    },
                    {b: "Example:"},
                    {
                        code: [
`<html>`,
`<head>`,
    `<style>`,
        `.container {`,
            `position: relative;`,
        `}`,
        `.box1-box {`,
            `position: relative;`,
            `z-index: 1;`,
            `border: 2px solid black;`,
            `height: 100px;`,
            `margin: 40px;`,
            `background-color: aqua;`,
        `}`,
        `.box2-box {`,
            `position: absolute;`,
            `z-index: 3;`,
            `background-color: rosybrown;`,
            `height: 60px;`,
            `width: 70%;`,
            `left: 250px;`,
            `top: 50px;`,
            `border: 2px solid;`,
        `}`,
        `.box3-box {`,
            `position: absolute;`,
            `color: wheat;`,
            `z-index: 2;`,
            `background-color: rebeccapurple;`,
            `width: 45%;`,
            `left: 270px;`,
            `top: 15px;`,
            `height: 100px;`,
            `border: 2px solid;`,
        `}`,
    `</style>`,
`</head>`,
`<body>`,
    `<h1>CSS z-index</h1>`,
    `<div class="container">`,
        `<div class="box1-box">Box 1 (z-index: 1)</div>`,
        `<div class="box2-box">Box 2 (z-index: 3)</div>`,
        `<div class="box3-box">Box 3 (z-index: 2)</div>`,
    `</div>`,
`</body>`,
`</html>`
                        ]
                    },
                    {b: "Output:"},
                    {
                        html: `<html>                        
                        <head>
                            <style>
                                .container {
                                    position: relative;
                                }
                                .box1-box {
                                    position: relative;
                                    z-index: 1;
                                    border: 2px solid black;
                                    height: 100px;
                                    margin: 40px;
                                    background-color: aqua;
                                }
                                .box2-box {
                                    position: absolute;
                                    z-index: 3;
                                    background-color: rosybrown;
                                    height: 60px;
                                    width: 70%;
                                    left: 250px;
                                    top: 50px;
                                    border: 2px solid;
                                }
                                .box3-box {
                                    position: absolute;
                                    color: wheat;
                                    z-index: 2;
                                    background-color: rebeccapurple;
                                    width: 45%;
                                    left: 270px;
                                    top: 15px;
                                    height: 100px;
                                    border: 2px solid;
                                }
                            </style>
                        </head>
                        <body>
                            <h1>CSS z-index</h1>
                            <div class="container">
                                <div class="box1-box">Box 1 (z-index: 1)</div>
                                <div class="box2-box">Box 2 (z-index: 3)</div>
                                <div class="box3-box">Box 3 (z-index: 2)</div>
                            </div>
                        
                        </body>
                        </html>`
                    },
                    {desc: "When z-index isn’t used, the element defined in the last is shown on the topmost. Therefore Box 3 would’ve been visible to us."}
                ]
            },
            {
                title: "CSS Forms",
                content: [
                    {
                        desc:"Using CSS you can make any ordinary element look amazing. Here’s a preview of a small form that I created just using HTML."
                    },
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-forms/Form%20without%20CSS.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {desc:"The code for it is as follows:"},
                    {
                        code: [
`<head>`,
    `<link rel="stylesheet" href="style.css">`,
`</head>`,
`<body>`,
    `<div>`,
        `<h1>Contact Form</h1>`,
        `<p id="Subheading">Please fill all the text in the fields.</p>`,
    `</div>`,
    `<form action="">`,
        `<p class="name">`,
            `Your Name:<br>`,
            `<input type="text" placeholder="Your Full Name">`,
        `</p>`,
        `<p class="email"> Your Email:<br>`,
            `<input type="email" name="email" id="" placeholder="Enter your Email">`,
        `</p>`,
        `<p class="number">`,
            `Your mobile number:<br>`,
            `<input type="text" placeholder="Enter your mobile number">`,
        `</p>`,
        `<p class="message">`,
            `Your message to us:<br>`,
            `<textarea name="message" id="" cols="50" rows="5" placeholder="Enter your query here"></textarea>`,
        `</p>`,
        `<p>Select how you want updates:<br>`,
            `<select name="Select" id="">`,
            `<option value="Choose">--Please choose one option--</option>`,
            `<option value="op1">Message</option>`,
            `<option value="op2">Call</option>`,
            `<option value="op3">Email</option>`,
        `</select>`,
        `</p>`,
        `<input type="submit" value="Submit"> <input type="reset" value="Reset">`,
    `</form>`,
`</body>`,
`</html>`

                        ]
                    },
                    {desc:"Now, I’ve linked a stylesheet here. Let’s write some CSS rules in it."},
                    {
                        code: {
                            type: "css",
                            code:[
                            `body {`,
                                `padding: 0px 300px;`,
                                `font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;`,
                                `text-decoration: solid;`,
                                `font-weight: 900;`,
                            `}`,
                            `div {`,
                                `padding: 5px 5px;`,
                                `background-color: rgb(164, 206, 147);`,
                                `width: auto;`,
                                `color: white;`,
                                `line-height: 10%;`,
                                `text-align: center;`,
                                `border-radius: 5px;`,
                                `border: 1px solid black;`,
                            `}`,
                            `form {`,
                                `background-color: rgb(238, 239, 235);`,
                                `border-radius: 5px;`,
                                `border: 1px solid black;`,
                                `padding: 0px 80px 5px;`,
                                `font-size: large;`,
                            `}`,
                            `input[type="text"],`,
                            `input[type="email"],`,
                            `textarea {`,
                                `width: 75%;`,
                                `border: 1px solid black;`,
                                `border-radius: 5px;`,
                                `background-color: white;`,
                            `}`,
                            `input[type="submit"] {`,
                                `background-color: rgb(164, 206, 147);`,
                                `font-size: larger;`,
                                `color: white;`,
                                `border-radius: 5px;`,
                                `border: none;`,
                                `cursor: pointer;`,
                                `width: 75%;`,
                            `}`,
                            `input[type="reset"] {`,
                                `background-color: red;`,
                                `font-size: larger;`,
                                `color: white;`,
                                `border-radius: 5px;`,
                                `cursor: pointer;`,
                                `border: none;`,
                            `}`,
                            `input[type="submit"]:hover {`,
                                `background-color: rgb(0, 176, 76);`,
                            `}`,
                            `input[type="reset"]:hover {`,
                                `background-color: rgb(191, 0, 0);`,
                            `}`,
                        ]}
                    },
                    {desc: "This stylesheet covers almost all the rules we’ve seen so far. The output would now change to this."},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-forms/Form%20with%20CSS.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {desc:"Try creating your version of this form by trying out other CSS properties as well."}
                ]
            },
            {
                title: "CSS Navigation Bar",
                content: [
                    {
                        desc: "For a better command of CSS, and to understand how Navbars work, let’s try creating the navbar of this website itself."
                    },
                    {
                        html: `<html>
                        <style>
                        *{
                            margin: 0;
                            padding: 0;
                        }
                        nav, div{
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                        }
                        nav{
                            padding: 4px;
                        }
                        img{
                            border-radius: 100%;
                        }
                        a{
                            margin-right: 15px;
                            color: cornflowerblue;
                            text-decoration: none;
                        }
                        a:hove{
                            color: red;
                        }
                        button{
                            padding: 4px; 
                            background: purple;
                            color: white;
                            cursor: pointer;
                            border: 1px solid purple;
                            border-radius: 3px;
                        }
                        </style>
                        <nav>
                        <img src="https://programmerd.netlify.app/pd-logo.png" alt="logo" width="30px" height="30px" />
                        <div>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Blogs</a>
                        <a href="#">Products</a>
                        <a href="#">Contact</a>
                        <button>Login</button>
                        </div>
                        </nav>
                        </html>`
                    },
                    {title: "1. Step:"},
                    {desc:"make a `index.html` file, and write this code:"},
                    {
                        code: [
                            `<html>`,
                            `<head>`, 
                            `<link rel="stylesheet" href="style.css">`,
                            `</head>`,
                            `<body>`,
                        `<nav>`,
                        `<img src="https://programmerd.netlify.app/pd-logo.png" alt="logo" width="30px" height="30px" />`,
                        `<div>`,
                        `<a href="#">Home</a>`,
                        `<a href="#">About</a>`,
                        `<a href="#">Blogs</a>`,
                        `<a href="#">Products</a>`,
                        `<a href="#">Contact</a>`,
                        `<button>Login</button>`,
                        `</div>`,
                        `</nav>`,
                        `</body>`,
                        `</html>`
                        ]
                    },
                    {title: "2. Step:"},
                    {desc: "Make a `index.css` file, and write this code:"},
                    {
                        code: {
                            type: "css",
                            code: [
                                `*{`,
                                    `margin: 0;`,
                                    `padding: 0;`,
                                `}`,
                                `nav, div{`,
                                    `display: flex;`,
                                    `justify-content: space-around;`,
                                    `align-items: center;`,
                                `}`,
                                `nav{`,
                                    `padding: 4px;`,
                                `}`,
                                `img{`,
                                    `border-radius: 100%;`,
                                `}`,
                                `a{`,
                                    `margin-right: 15px;`,
                                    `color: cornflowerblue;`,
                                    `text-decoration: none;`,
                                `}`,
                                `a:hove{`,
                                    `color: red;`,
                                `}`,
                                `button{`,
                                    `padding: 4px; `,
                                    `background: purple;`,
                                    `color: white;`,
                                    `cursor: pointer;`,
                                    `border: 1px solid purple;`,
                                    `border-radius: 3px;`,
                                `}`
                            ]
                        }
                    }
                ]
            }
        ]
    },
    // third page
    {
        title: "CSS Designing",
        page: [
            {
                title: "CSS Display",
                content: [
                    {
                        desc:"This property specifies and determines how an element would be displayed on the website. By tweaking the value of the display we can show the content “inline”, “grid”, “flex”, and whatnot."
                    },
                    {desc:"Let’s look at a few properties."},
                    {title: "Display Inline"},
                    {desc: "It only takes the space required for content, leaving the rest space for other elements to come. Setting other dimension properties isn’t like width, height, margin or padding is not allowed in Inline Display."},
                    {code: [`Syntax:`,`{display: inline;}`]},
                    {title: "Display Block"},
                    {desc:"It takes the full width available across the website page leaving a new line before and after the element."},
                    {code: [`Syntax:`,`{display: block;}`]},
                    {title: "Display Inline Block"},
                    {desc:"This property is quite similar to inline but dimension properties are allowed in the case of the inline-block display."},
                    {code: [`Syntax:`,`{display: inline-block;}`]},
                    {title: "Display None & Hidden"},
                    {desc:"This property removes the element from the document, clearing the space taken by the element. When the display is hidden, though the element isn’t visible the space is still taken by the element."},
                    {code: [`Syntax:`,`{display: none;}`]},
                ]
            },
            {
                title: "CSS FlexBox",
                content: [
                    {
                        desc: "FlexBox aka Flexible Box Layout makes it easier to layout, align and style items in the container while maintaining the responsiveness of the website."
                    },
                    { desc: "To create a flexbox you need to set the display of the container as flex" },
                    {b: "Eg: {display: flex;}"},
                    {
                        desc: "This element is called the flex container, and stores the sub-elements which are known as flex items"
                    },
                    {title: "Flex Container Properties"},
                    {desc: "The flex container properties are:"},
                    {title: "1. Flex Direction"},
                    {desc: "It defines in which direction the flex elements would be displayed. It takes values like row, column or “reverse” too."},
                    {b: "Example:"},
                    {
                        code: [
                            `<html>`,
                        `<head>`,
                        `<style>`,
                        `.flex-container{`,
                            `display:flex;`,
                            `flex-direction: column; /* row */`,
                            `background: green;`,
                        `}`,
                        `div{`,
                            `width: 100px;`,
                            `margin: 10px;`,
                            `text-align: center;`,
                            `line-height: 75px;`,
                            `font-size: 30px;`,
                            `background: wheat;`,
                        `}`,
                        `</style>`,
                        `</head>`,
                        `<body>`,
                        `<h1>Flex Direction property</h1>`,
                        `<span class="flex-container">`,
                        `<div>1</div>`,
                        `<div>2</div>`,
                        `<div>3</div>`,
                        `</span>`,
                        `</body>`,
                        `</html>`
                        ]
                    },
                    {
                        html: `<html>
                        <head>
                        <style>
                        .flex-container{
                            display:flex;
                            flex-direction: column; /* row */
                            background: green;
                        }
                        div{
                            width: 100px;
                            margin: 10px;
                            text-align: center;
                            line-height: 75px;
                            font-size: 30px;
                            background: wheat;
                        }
                        </style>
                        </head>
                        <body>
                        <h1>Flex Direction property</h1>
                        <span class="flex-container">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        </span>
                        </body>
                        </html>`
                    },
                    {title: "2. Flex Wrap"},
                    {desc: "By using this property we can make our elements responsive for different screen sizes. "},
                    {b: "Example:"},
                    {
                        code: [
                            `.flex-container {`,
                                `display: flex;`,
                                `flex-direction: row;`,
                                `background-color: green;`,
                                `flex-wrap: wrap;`,
                            `}`
                        ]
                    },
                    {
                        html: `<html>
                        <head>
                        <style>
                        .flex-container{
                            display: flex;
                            flex-direction: row;
                            background: green;
                            flex-wrap: wrap;
                        }
                        div{
                            width: 100px;
                            margin: 10px;
                            text-align: center;
                            line-height: 75px;
                            font-size: 30px;
                            background: wheat;
                        }
                        </style>
                        </head>
                        <body>
                        <h1>Flex Direction property</h1>
                        <span class="flex-container">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        </span>
                        </body>
                        </html>`
                    },
                    {desc: "You can use flex flow as a short to add both these properties. Eg: {flex-flow: row wrap;}"},
                    {title: "3. Justify Content"},
                    {desc: "This property is used to set the position of content or rather align content along the main axis."},
                    {b: "Example:"},
                    {
                        code: [
                            `.flex-container {`,
                                `display: flex;`,
                                `flex-direction: row;`,
                                `background-color: green;`,
                                `justify-content: center;`,
                            `}`
                        ]
                    },
                    {
                        html: `<html>
                        <head>
                        <style>
                        .flex-container{
                            display: flex;
                            flex-direction: row;
                            background-color: green;
                            justify-content: center;
                        }
                        div{
                            width: 100px;
                            margin: 10px;
                            text-align: center;
                            line-height: 75px;
                            font-size: 30px;
                            background: wheat;
                        }
                        </style>
                        </head>
                        <body>
                        <h1>Flex Direction property</h1>
                        <span class="flex-container">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        </span>
                        </body>
                        </html>`
                    },
                    {desc:"It can take other values too like “space-around” which distributes flex items equally spaced in the container. Other properties include flex-end, flex-start, space-between, etc. (These could be seen in vs code when the justify-content property is selected)."},
                    {title: "4. Align Items"},
                    {desc:"Just like the justify-content property, align-items define the alignment of the flex container but along the cross-axis."},
                    {b: "Example:"},
                    {
                        code: [
                            `.flex-container {`,
                                `display: flex;`,
                                `height: 200px;`,
                                `flex-direction: row;`,
                                `background-color: green;`,
                                `align-items: center;`,
                            `}`
                        ]
                    },
                    {
                        html: `<html>
                        <head>
                        <style>
                        .flex-container{
                            display: flex;
                            height: 200px;
                            flex-direction: row;
                            background-color: green;
                            align-items: center;
                        }
                        div{
                            width: 100px;
                            margin: 10px;
                            text-align: center;
                            line-height: 75px;
                            font-size: 30px;
                            background: wheat;
                        }
                        </style>
                        </head>
                        <body>
                        <h1>Flex Direction property</h1>
                        <span class="flex-container">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        </span>
                        </body>
                        </html>`
                    },
                    {title: "5. Align Content"},
                    {desc:"This property is very similar to align item but here rather than the flex items, the content present in the item is selected for the property."},
                    {b: "Example:"},
                    {
                        code: [
                            `.flex-container {`,
                                `display: flex;`,
                                `height: 200px;`,
                                `flex-direction: row;`,
                                `background-color: green;`,
                                `align-content: center;`,
                            `}`
                        ]
                    },
                    {
                        html: `<html>
                        <head>
                        <style>
                        .flex-container{
                            display: flex;
                            height: 200px;
                            flex-direction: row;
                            background-color: green;
                            align-content: center;
                        }
                        div{
                            width: 100px;
                            margin: 10px;
                            text-align: center;
                            line-height: 75px;
                            font-size: 30px;
                            background: wheat;
                        }
                        </style>
                        </head>
                        <body>
                        <h1>Flex Direction property</h1>
                        <span class="flex-container">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        </span>
                        </body>
                        </html>`
                    },
                    {title: "Flex Items Properties"},
                    {desc: "The flex item properties are:"},
                    {title: "1. Order:"},
                    {desc: "As the name suggests, this property sets the order in which the flex items are shown."},
                    {b: "Example:"},
                    {
                        code: [
                            `<div style="order: 4;">1</div>`,
                            `<div style="order: 3;">2</div>`,
                            `<div style="order: 1;">3</div>`,
                            `<div style="order: 5;">4</div>`,
                            `<div style="order: 2;">5</div>`
                        ]
                    },
                    {
                        html: `<html>
                        <head>
                        <style>
                        .flex-container{
                            display:flex;
                            background: green;
                        }
                        div{
                            width: 100px;
                            margin: 10px;
                            text-align: center;
                            line-height: 75px;
                            font-size: 30px;
                            background: wheat;
                        }
                        </style>
                        </head>
                        <body>
                        <h1>Order</h1>
                        <span class="flex-container">
                        <div style="order: 4;">1</div>
                        <div style="order: 3;">2</div>
                        <div style="order: 1;">3</div>
                        <div style="order: 5;">4</div>
                        <div style="order: 2;">5</div>
                        </span>
                        </body>
                        </html>`
                    },
                    {title: "2. Flex Grow & Shrink"},
                    {desc: "Decides the relative size of flex items. By default, this property is zero and thus items have the same size."},
                    {b: "Example:"},
                    {
                        code: [
                            `<div>1</div>`,
`<div>2</div>`,
`<div style="flex-grow: 3;">3</div>`,
`<div>4</div>`,
`<div>5</div>`
                        ]
                    },
                    {
                        html: `<html>
                        <head>
                        <style>
                        .flex-container{
                            display:flex;
                            flex-direction: row;
                            background: green;
                        }
                        div{
                            width: 100px;
                            margin: 10px;
                            text-align: center;
                            line-height: 75px;
                            font-size: 30px;
                            background: wheat;
                        }
                        </style>
                        </head>
                        <body>
                        <h1>Flex Grow & Shrink</h1>
                        <div>1</div>
                        <div>2</div>
                        <div style="flex-grow: 3;">3</div>
                        <div>4</div>
                        <div>5</div>
                        </span>
                        </body>
                        </html>`
                    },
                    {desc:"We can also use flex-shrink to decrease size of an element."},
                    {title:"3. Align Self"},
                    {desc:"This property allows default alignment to be overridden for the individual flex items. Try adding inline CSS to see how this property is used."}
                ]
            },
            {
                title: "CSS Grid",
                content:[
                    {desc:"Just like FlexBox, CSS Grid with the use of rows and columns, make it easier to style website elements."},
                    {desc:"CSS display property allows two grid properties: Grid and Inline Grid. The elements placed in the grid container are called grid items."},
                    {desc: "Most of the properties of Grid are similar to FlexBox."},
                    {desc:"Let’s look at how you can create a grid in CSS."},
                    {
                        image: {
                            image:"https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-grid/css%20grid.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {b:"Output:"},
                    {
                        image: {
                            image:"https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-grid/css%20grid%20output.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {title: "Grid Row & Column Property"},
                    {desc: "This is just adjacent to the flex-grow property in Flex Box. It decides how many columns would the selected element be taking in the Grid."},
                    {b: "Example:"},
                    {
                        code: [`<div class="grid-item" style="grid-row: 1/5;">2</div>`]
                    },
                    {
                        image: {
                            image:"https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-grid/css%20grid-row.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {desc: "This way you can style Grid dimensions to create Header, Footer, and other structures of your website."}
                ]
            },
            {
                title: "CSS Media Queries",
                content: [
                    {desc:"Media queries help to add responsiveness to the website by adding breakout points or when only a certain condition is true."},
                    {b: "Example:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-media-queries/css%20media%20queries.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {b: "Output:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-media-queries/media%20queries%20output.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {b: "Syntax:"},
                    {
                        code: {
                            type: "none",
                            code: [`@media only screen and (max-width: 800px){`, ` ... `, `}`]
                        }
                    },
                    {
                        desc:"The output of this code would change when the dimension would be 800px."
                    },
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-media-queries/condition%20true%20output.webp",
                            width: 1000, height: 1000
                        }
                    }
                ]
            }
        ]
    },
    // fourth page
    {
        title: "CSS Advance Topics",
        page: [
            {
                title: "CSS 2D Transform",
                content: [
                    {
                        desc: "This property allows the content to be restructured in ways like translate, rotate, scale or skew, etc. As it is 2D, therefore the content is transformed into x and y dimensions."
                    },
                    {title: "Translate"},
                    {desc: "This property transforms the element’s position along x or y or both x and y directions."},
                    {b: "Syntax:"},
                    {code: [`transform: translate(x,y);`]},
                    {b:"Example:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-2d-transform/translate.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {b: "Output:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-2d-transform/translate%20output.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {title: "Rotate"},
                    {desc: "This property rotates the content of the division either anticlockwise or clockwise acc to the degree of rotation. The values are taken in degree and on adding a negative sign the rotation becomes anticlockwise. Syntax: transform: rotate(value);"},
                    {b: "Example:"},
                    {code: [`transform: rotate(-10deg);`]},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-2d-transform/rotate.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {title: "Scale"},
                    {desc: "This property rescales the width and height of the division in the ratio to the original dimensions. "},
                    {b: "Example:"},
                    {code: [`transform: scale(1.4, 1.2);`]},
                    {desc:"This code will increase the width and height by 1.4 and 1.2 times the original respectively."},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-2d-transform/scale.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {desc: "Note: This property also changes the aspect ratio of the div, so has to be used accordingly."},
                    {title: "Skew"},
                    {desc:"This property helps in adding a slant or skew to division. (Skew: A pair of lines neither intersecting nor parallel)"},
                    {b: "Example:"},
                    {code: [`transform: skew(10deg, 5deg);`]},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-2d-transform/skew.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {desc: "You can also choose to give the values for skew in a particular axis by adding a postfix with skew: skewX."},
                    {desc: "Note: The properties for 3D Transform are also identical; a new dimension z is included into it."}
                ]
            },
            {
                title: "CSS Transitions",
                content: [
                    {desc:"Transitions control the ease of transformation from one style to another when we hover over that element. Basically, you can control the time take for any transformation to occur."},
                    {b: "Example:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-transitions/transition.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {b: "Output:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-transitions/transition.gif",
                            width: 1000, height: 1000
                        }
                    },
                    {desc: "In this example, I have added the transition to all the properties in hover. But you can choose to apply the effect on a particular property too, like this: "},
                    {code: [`transition: width 3s;`]}
                ]
            },
            {
                title: "CSS Border Images",
                content: [
                    {
                        desc: "There are various ways to add a border to the text, or the element in CSS. (Ref: CSS borders) But one can also use custom images as the border in the text. This will help you to use specially designed elements in the border of elements."
                    },
                    {
                        redirect: {
                            text: "CSS borders",
                            href: "/tutorial/css/?query=css+borders"
                        }
                    },
                    {desc: "For eg: Let’s try adding this image as a background around the text."},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-border-images/border.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {desc: "The code would look something like this:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-border-images/CSS%20border.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {b: "Output:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-border-images/css%20border%20output.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {desc: "You can change the border width by tweaking the percentage values."},
                    {b: "Example:"},
                    {code: [`border-image: url(border.webp) 50%;`]},
                    {
                        image:{
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-border-images/css%20border%202.webp",
                            width: 1000, height: 1000
                        }
                    }
                ]
            },
            {
                title: "CSS Gradients",
                content: [
                    {
                        desc: "CSS provides the styling of background colour with gradients. You can blend as many colours to create gradients."
                    },
                    {title: "Linear Gradient"},
                    {desc: "The gradient goes from top to bottom, and from left to right. To implement this gradient you need at least two colour stops. (could be more too)"},
                    {b: "Example:"},
                    {code: [`background-image: linear-gradient(100deg, blue, orange, red);`]},
                    {b: "Output:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-gradients/CSS%20gradients.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {
                        desc: "The degree controls the angle of the gradient, and by using comma-separated values you can add multiple colours for the background."
                    },
                    {desc:"Note: You can also use repeating-linear-gradient to keep repeating the background for the whole screen."},
                    {title: "Radial Gradient"},
                    {desc:"The gradient here is added from the centre focal point. The colour added first marks the centre of the gradient and keeps expanding circularly."},
                    {b: "Example:"},
                    {code: [`background-image: radial-gradient(blue, orange, red);`]},
                    {b: "Output:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-gradients/radial%20gradients.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {desc:"This is the default output but you can regulate the amount of each colour by adding a percentage with the colours, like radial-gradient(blue 20%, orange, red);"},
                    {desc: "The default shape of the gradient is an ellipse, but you can set it to circle too. Just add a circle ahead of the colours, separated by a comma."},
                    {b: "Output:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-gradients/circle%20radial%20gradient.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {desc: "To use different sizes of the gradient we use the following properties:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-gradients/radial%20gradient%20sizes.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {b: "Output:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-gradients/different%20sizes%20gradient.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {title: "Conic Gradient"},
                    {desc:"The colour gradient rotates around a specific point in the form of a cone. By default, the degree of the cone is taken as zero and starts from the centre."},
                    {b: "Example:"},
                    {code: [`background-image: conic-gradient(blue, orange, red);`]},
                    {b: "Output:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-gradients/conic%20gradient.webp",
                            width: 1000, height: 1000
                        }
                    }
                ]
            },
            {
                title:"CSS Inherit",
                content: [
                    {
                        desc: "Inherit property allows the content values to be taken directly from the parent element. This can be applied to all of the CSS properties individually or using “all” at once."
                    },
                    {b: "Syntax:"},
                    {code: [`span{ color: inherit; }`]},
                    {b: "Example:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-inherit/inherit.webp",
                            width : 1000, height: 1000
                        }
                    },
                    {b: "Output:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-inherit/inherit%20output.webp",
                            width : 1000, height: 1000
                        }
                    }
                ]
            },
            {
                title: "CSS Shadows",
                content: [
                    {
                        desc: "When it comes to web design, CSS (Cascading Style Sheets) plays an indispensable role in enhancing the visual aesthetics of a website. Among its vast array of properties, the ones that help bring depth and focus to an element are the shadow and outline properties. Let’s delve into the magic of CSS shadows and outlines."
                    },
                    {title: "Box Shadows"},
                    {
                        desc: "box-shadow is a popular CSS property that enables designers to add shadow effects around an element's frame. It can be used to give any element, be it a div, image, or button, a 3D feel or to emphasize on hover."
                    },
                    {code: [`box-shadow: h-offset v-offset blur spread color inset;`]},
                    {
                        points: [
                            "h-offset and v-offset: Determines the shadow's horizontal and vertical position.",
                            "blur: The larger the value, the blurrier the shadow.",
                            "spread: Expands or shrinks the shadow size.",
                            "color: Defines the shadow color.",
                            "inset: Makes the shadow inner."
                        ]
                    },
                    {desc: "Here is an example:"},
                    {code: [`.div-element { box-shadow: 5px 5px 15px 5px #888888; }`]},
                    {title: "Text Shadows"},
                    {desc:"text-shadow is utilized to give shadows specifically to the text. It can elevate the readability of the text or give it an elegant appearance."},
                    {desc:"The Syntax for Text-Shadows is as follows:"},
                    {code: [`text-shadow: h-offset v-offset blur color;`]},
                    {desc:"Here is an example:"},
                    {code: [`.text-element { text-shadow: 2px 2px 4px #888888; }`]},
                    {title: "Outlines"},
                    {desc: "An outline is a line that is drawn around elements, outside the borders, to make the element \"stand out\". It's commonly used for accessibility purposes, like highlighting focused elements."},
                    {desc: "The Syntax for Outlines is as follows:"},
                    {code: [`outline: width style color;`]},
                    {
                        points: [
                            "width: Sets the outline width.",
                            "style: Determines the style of the outline such as solid, dotted, or dashed.",
                            "color: Sets the outline color."
                        ]
                    },
                    {desc: "Here is an example:"},
                    {code: [`.button-element:focus { outline: 2px solid blue; }`]},
                    {title: "Differences between Outlines and Borders:"},
                    {desc: "While both can visually appear similar, outlines differ from borders in a few ways:"},
                    {
                        points: [
                            `Position: Outlines don't take up space; they're drawn around the element, outside of any border.`,
`Offset: Using the outline-offset property, you can set the space between an outline and the edge or border of an element.`,
`Width: Borders can have varying widths on different sides, outlines have a uniform width.`,
`Rounded Corners: Borders can have rounded corners using border-radius, while outlines generally cannot.`
                        ]
                    }
                ]
            },
            {
                title:"CSS ToolTip Text",
                content: [
                    {desc:"It is a special hover method to show extra text about the element when moved over it. When the mouse is hovered over that element, a tooltip dialogue box is displayed conveying the required information."},
                    {desc:"To implement tooltip let’s create some HTML text first."},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-tooltip-text/body%20text.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {desc:"Here we have created to distinct classes to implement the CSS. Now the CSS rules would be written as follows."},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-tooltip-text/stylesheet.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {desc:"Until the mouse hovers, the display is kept “hidden” and the rules of the tooltip text are written. The moment we hover the visibility of the dialogue box is set to be true."},
                    {b: "Output:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-tooltip-text/output.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {
                        desc: "This way we can add a dialogue box on the elements to add accessibility to our website. You can also experiment with the tooltip animation by including: CSS Transitions properties here."
                    }
                ]
            },
            {
                title: "CSS Masking",
                content: [
                    {
                        desc: "Masking is used to blend one layer over other either partially or fully. There can be various methods of doing so like using an image as a layer, using a linear gradient, radial gradient, conic gradient, etc."
                    },
                    {b: "Example:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-masking/masking.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {b: "Output:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-masking/masking%20output.webp",
                            width: 1000, height: 1000
                        }
                    }
                ]
            },
            {
                title: "CSS Pagination",
                content: [
                    {
                        desc:"This isn’t an inbuilt CSS property but by using various inbuilt properties you can add a foot-pager on the website."
                    },
                    {b: "Example:"},
                    {
                        image: {
                            image:"https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-pagination/Pagination.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {desc: "We’ve created hyperlinks for each page here and now let’s add the styling for our pages."},
                    {
                        image: {
                            image:"https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-pagination/pagination%20styling.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {desc: "Note: not(.active) tells the website to not use the rule on the active class."},
                    {
                        image: {
                            image:"https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-pagination/pagination%20output.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {desc: "The purple box indicates the active page, and the black indicates the page on which the cursor has hovered."}
                ]
            },
            {
                title: "CSS Media Queries Advanced",
                content: [
                    {
                        desc: "We’ve discussed Media Queries briefly in this tutorial: CSS Media queries. Let’s now try to understand them in detail."
                    },
                    {
                        redirect: {
                            text: "CSS Media queries",
                            href: "/tutorial/css/?query=css+media+queries"
                        }
                    },
                    {
                        desc: "Media queries are used when we want to customize our website's presentation according to the user's screen size. With the help of media queries, user can display different markups based upon the device's general type(mobile, desktop, tablet)."
                    },
                    {
                        desc:"It is a logical operation. Whenever a media query becomes true, then the related CSS is applied to the target element."
                    },
                    {b: "Syntax:"},
                    {code: [`@media media-type and (media-feature)`]},
                    {desc: "@media signifies the start of a media query, the type property defines the display screen on which the rules are to be applied like phone, tablet, pc, etc. "},
                    {desc: "Media-feature tells about the dimensions of the screen."},
                    {b: "Example:"},
                    {
                        image: {
                            image:"https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-media-queries-advanced/media%20queries%20html.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {desc: "We’ve create here 4 boxes wrapped up in the span. Now let’s write rules for the same."},
                    {
                        image: {
                            image:"https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-media-queries-advanced/media%20queries%20css.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {desc:"We’ve created a flexbox with direction as a row, but as soon as the width reaches 600px the direction of the flex changes to the column, and the text gets aligned at the centre."},
                    {b:"output:"},
                    {
                        image: {
                            image:"https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-media-queries-advanced/css-media-queries.gif",
                            width: 1000, height: 1000
                        }
                    }
                ]
            },
            {
                title:"CSS Animations",
                content: [
                    {
                        desc: "CSS Animations help to animate elements from one frame to another. Controlling various CSS properties helps in changing the animation style and time without having the need to use JavaScript for the same."
                    },
                    {desc: "The most basic way to do so is by using “from” and “to”."},
                    {b: "Example:"},
                    {
                        code: [
                            `@keyframes demo {`,
                                `from {`,
                                    `background-color: red;`,
                                `}`,
                                `to {`,
                                    `background-color: blue;`,
                                `}`,
                            `}`
                        ]
                    },
                    {
                        desc: "The animation here would start with the background colour as red and will turn blue gradually. To use this animation we simply add it to the div stylesheet rule."
                    },
                    {
                        desc: "This is the most basic way to do CSS animations, but now let’s look into the properties for advanced animation styling."
                    },
                    {title: "1. Animation Name"},
                    {desc:"To identify the animation we assign it with the name. In the above example the name was demo. So, we will add the attribute animation name in the div element."},
                    {code: [`Syntax: div{animation-name: demo;}`]},
                    {title: "2. Key Frames"},
                    {desc : "Keyframes define at what % of the animation, which stylesheet rules should be used. The value of keyframes varies from 0% to 100%."},
                    {desc: "To add keyframes use the % operator with the value inside the keyframes. More keyframes mean smoother animation."},
                    {b: "Example:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-animations/keyframes.webp",
                            width: 1000, height: 1000
                        }
                    },
                    {b: "Output:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-animations/keyframe%20animation.gif",
                            width: 1000, height: 1000
                        }
                    },
                    {title: "3. Looping Animations"},
                    {desc:"By default the animation runs only one time on the website but you can choose to loop the animation by using the “animation-iteration-count” property. "},
                    {code: [`Syntax: {animation-iteration-count: value;}`]},
                    {desc: "Just assign the values to the property and the number of times the animation will run."},
                    {desc: "To keep the animation running continuously we keep the value as “infinite”."},
                    {title: "4. Animation Durations"},
                    {desc: "Animation Duration is the key property to start the animations. By default, the animation duration is 0 sec, which means the animation won’t start."},
                    {desc:"So, to start the animation we will assign the value to the animation duration."},
                    {code: [`Syntax: animation-duration: value(in sec);`]},
                    {title: "5. Other Properties"},
                    {title: "Animation Delay"},
                    {desc: "Delays the start of animation on the website. Adding a negative value to delay will make the animation run even before the website is loaded."},
                    {b: "Example:"},
                    {code: [`{animation-delay: -2s;}`]},
                    {title: "Animation Direction"},
                    {desc:"This property defines the order of the animation. Whether it should be played forward, reverse or alternatively. The values it takes is: "},
                    {
                        points: [
                            "normal: the default state of forward animation.",
                            "reverse: plays the animation in the reverse direction.",
                            "alternate: forward animation and then backward.",
                            "alternate-reverse: reverse animation and then forward."
                        ]
                    },
                    {b: "Syntax:"},
                    {code: [`animation-direction: value;`]},
                    {title: "Animation Timing Function"},
                    {desc: "It defines the speed curve for the animation. This property adds ease to our animation and can have the following values: ease, linear, ease-in, ease-out, and ease-in-out."},
                    {desc: "As the properties are self-explanatory, you can see the output accordingly."},
                    {b: "Syntax:"},
                    {code: [`animation-timing-function: value;`]},
                    {title: "Animation Fill Mode"},
                    {desc: "This property defines the style of the element when the animation is either stopped or about to start. The value it takes is none(default state), forwards(value set by the last keyframe), backwards(value of the first keyframe) or both."},
                    {code: [`animation-fill-mode: value;`]},
                    {title: "Animation ShortHand"},
                    {desc: "We’ve seen shorthand properties for other CSS properties and the same can be applied to Animation too."},
                    {b: "Example:"},
                    {code: [`animation: demo 5s ease-in 1s infinite normal both;`]},
                    {b: "Output:"},
                    {
                        image: {
                            image: "https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/css-animations/animation%20shorthand.gif",
                            width: 1000, height: 1000
                        }
                    }
                ]
            },
        ]
    },
    // fivth page
    {
        title: "CSS FAQs",
        page: [
            {
                title: "How to master of css?",
                content: [
                    {
                        desc: "Mastering CSS involves a combination of learning, practice, and staying updated with the latest developments. Here's a roadmap to help you become proficient in CSS:"
                    },
                    {
                        points: [
                            `Learn the Basics: Start with understanding the fundamentals of CSS, including selectors, properties, values, and how they affect HTML elements.`,
                            `Box Model: Understand the box model concept, which includes padding, margin, border, and content dimensions. Mastering this is crucial for layout design.`,
                            `Layout Techniques: Learn different layout techniques like Flexbox and CSS Grid. These offer powerful tools for creating complex layouts with ease.`,
                            `Responsive Design: Study responsive design principles to make your websites adapt well to various screen sizes and devices. Media queries and viewport units are essential here.`,
                            `CSS Preprocessors: Familiarize yourself with CSS preprocessors like Sass or Less. They provide additional features and make CSS more maintainable through variables, mixins, and functions.`,
                            `Animations and Transitions: Learn to add animations and transitions to your elements using CSS. Keyframes, transition properties, and timing functions are key concepts here.`,
                            `CSS Frameworks: Explore popular CSS frameworks like Bootstrap or Foundation. These can help you kickstart your projects and provide pre-designed components and layouts.`,
                            `Typography and Fonts: Understand typography principles and how to manipulate text using CSS. This includes font properties, text styling, and web font usage.`,
                            `Cross-Browser Compatibility: Learn about browser compatibility issues and how to write CSS that works consistently across different browsers.`,
                            `Debugging Tools: Familiarize yourself with browser developer tools like Chrome DevTools or Firefox Developer Edition. These tools can help you debug CSS issues efficiently.`,
                            `Version Control: Learn to use version control systems like Git. This helps in managing your CSS files and collaborating with other developers effectively.`,
                            `Stay Updated: CSS is constantly evolving, so stay updated with the latest specifications and techniques. Follow blogs, forums, and online communities dedicated to web development.`,
                            `Practice, Practice, Practice: The key to mastering CSS is practice. Work on projects, experiment with different techniques, and challenge yourself to create complex layouts and designs.`,
                            `Build Real Projects: Apply your knowledge by building real-world projects. This will not only solidify your skills but also provide you with a portfolio to showcase to potential employers or clients.`
                        ]
                    },
                    {desc: "Remember, mastering CSS is a journey that takes time and dedication. Don't rush through it, and be patient with yourself as you progress."},
                    {
                        redirect: {
                            text: "Learn CSS Step by Step",
                            href: "/tutorial/css/?query=css+overview"
                        }
                    }
                ]
            }
        ]
    }
]