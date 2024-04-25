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
            }
        ]
    }
]