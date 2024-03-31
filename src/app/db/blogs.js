export const db_blogs = [
    {
        _id: 0,
        title: "What is Python?",
        desc: `Python is a high-level, interpreted programming language known for its simplicity and readability. It was created by Guido van Rossum and first released in 1991. Python emphasizes code readability and a syntax that allows programmers to express concepts in fewer lines of code than might be possible in languages such as C++ or Java.`,
        date: "April 12, 2023",
        content: [
            {
                title: "Some key features of Python include:"
            },
            {
                title: "Interpreted",
                points: ["Python Interpreted in Awesome to compare other programming Languages.", "Python code is executed line by line by the Python interpreter, rather than being compiled into machine code beforehand."]
            },
            {
                title: "Syntax:-",
                code: ["print(\"Hello world!\")"]
            },
            {
                title: "High-leve",
                desc: "Python abstracts away many low-level details such as memory management, making it easier to write and understand code."
            },
            {
                title: "Dynamic typing",
                desc: "Variables in Python don't have a fixed type; their type is inferred at runtime, making the language very flexible."
            }
        ],
        comments: [
            {
                name: "Billu Gammer",
                comment: "console.log('Hello world!');",
                date: "2023-04-16"
            },
            {
                name: "Techno Gammers",
                comment: "python -> print('Hello world!')",
                date: "2023-06-14"
            }
        ]
    },
    {
        _id: 1,
        title: "How to Learn HTML?",
        desc: `Learning HTML (HyperText Markup Language) is a great starting point for anyone interested in web development. Here's a step-by-step guide to help you get started:`,
        date: "March 31, 2023",
        content: [
            {
                title: "Understand the Basics",
                desc: `HTML is the standard markup language for creating web pages.
                It consists of a series of elements, which are represented by tags enclosed in angle brackets (< and >).
                Each HTML document is structured with an opening <html> tag and a closing </html> tag, with the content enclosed within them.`
            },
            {
                title: "Practice Writing HTML",
                desc: `Start by creating simple HTML documents using a text editor such as Notepad (Windows) or TextEdit (Mac).
                Write the basic structure of an HTML document and experiment with different tags and attributes.
                View your HTML documents in a web browser to see how they render.`
            }
        ],
        comments: []
    },
    {
        _id: 2,
        title: "What is Technology?",
        desc: `Technology refers to the application of scientific knowledge and tools to solve problems or accomplish tasks. It encompasses a wide range of techniques, processes, skills, and tools that are used to create goods, services, or systems to enhance human life, improve efficiency, and achieve various objectives. Technology can be tangible, such as physical devices and machinery, as well as intangible, such as software, algorithms, and systems.`,
        date: "September 19, 2022",
        content: [
            {
                title: "There are various types of technology, including:"
            },
            {
                title: "Information Technology (IT)",
                desc: `This includes computers, software, networks, and related technologies used for storing, retrieving, transmitting, and manipulating data and information.`
            },
            {
                title: "Communication Technology",
                desc: `This includes technologies used for transmitting and receiving information, such as telecommunication systems, the internet, mobile phones, and satellite communication.`
            },
            {
                title: "Laptop Typing...",
                video: {
                    src: "/videos/video1.mp4"
                }
            }
        ],
        comments: [
            {
                name: "Billu Gammer",
                comment: "console.log('Hello world!');",
                date: "2023-04-16"
            },
            {
                name: "Techno Gammers",
                comment: "python -> print('Hello world!')",
                date: "2023-06-14"
            }
        ]
    },
    {
        _id: 3,
        title: "A Comprehensive Guide to Using Stackry for International Shopping",
        desc: `In today's interconnected world, the desire for cutting-edge tech gadgets, unique international products, and exclusive US deals has reached an unprecedented level. However, many consumers face the challenge of obtaining products not readily available in their home country. This is where Stackry emerges as a revolutionary solution, simplifying the process of ordering from the US and having it shipped effortlessly to India.`,
        date: "April 20, 2022",
        content: [
            {
                title: "How Stackry Bridges the Gap",
                desc: `Stackry acts as a bridge between Indian consumers and US retailers, enabling users to shop from any US store, including giants like Amazon. The process is remarkably straightforward:

                Create an Account: Begin by creating an account on the Stackry website. Provide the necessary information, and you're ready to embark on your international shopping adventure.
                Virtual US Address: Stackry assigns users a unique virtual US address. This address serves as a secure location where your physical shipments will be stored.`
            },
            {
                title: "Benefits of Stackry",
                desc: `Stackry’s appeal extends beyond its seamless shopping process. It presents a host of advantages that make it a compelling choice for international shoppers:

                Cost Savings: By shopping within the US and consolidating your shipments, you can significantly reduce shipping costs, making your international purchases more affordable.
                Transparency and Control: Stackry empowers users to declare the value of their shipments, providing transparency and control over customs duties and taxes.`
            }
        ],
        comments: []
    },
    {
        _id: 4,
        title: "Build an Email Validator with HTML CSS and JavaScript",
        desc: `In this tutorial, we will create an Email Validator using HTML, CSS, and JavaScript. We will build and use this Email Validation API to validate a given email address. The objective of this blog is to understand how HTML, CSS, and JavaScript can be used along with this Email Validation API to create a useful website.`,
        date: "November 21, 2021",
        content: [
            {
                title: "Project Demo",
                desc: "This is how our final email validator will look like:",
            },
            {
                title: "HTML Structure of our Email Validator",
                desc: `We will use a very basic HTML structure for our email validator. Now, we will start adding a form where we will take the desired information as email input and we will also add a button to submit the information. Now, all that’s left is the output. We will also add the output part as a normal container. 
                Here is the HTML code of our email validator without any styling. `,
                image: {
                    src: "/logo.svg",
                    width: 50,
                    height: 50
                }
            }
        ],
        comments: []
    }
];