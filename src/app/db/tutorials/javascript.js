export const db_js = [
    // first
    {
        title: "Introduction",
        page: [
            {
                title: "JS Overview",
                content: [
                    {
                        desc: "JavaScript, often abbreviated as JS, is a dynamic and versatile programming language primarily used for web development. Its purpose lies in making web pages interactive, allowing developers to manipulate content, respond to user actions, and enhance user experience seamlessly. With a syntax reminiscent of other programming languages like Java and C, JavaScript is relatively easy to learn for those already familiar with programming concepts. One of its defining characteristics is its execution on the client-side, meaning it runs directly within the user's browser, enabling dynamic interactions without page reloads. JavaScript adheres to the ECMAScript standard, which undergoes regular updates to introduce new features and enhancements. Additionally, JavaScript boasts a vast ecosystem of libraries and frameworks such as React.js, Angular, and Vue.js, which streamline common tasks and provide robust structures for building complex web applications. Its support for asynchronous programming through callbacks further enhances its capabilities, making JavaScript a cornerstone of modern web development."
                    },
                    {b: "Before learning JavaScript, it's advisable to learn HTML and CSS:"},
                    {
                        redirect: {
                            text: "Learn HTML",
                            href: "/tutorial/html/?query=html+overview"
                        }
                    },
                    {
                        redirect: {
                            text : "Learn CSS",
                            href: "/tutorial/css/?query=css+overview"
                        }
                    },
                    {title: "What is Programming?"},
                    {desc: "Programming is the process of creating instructions for a computer to perform specific tasks. It involves writing, testing, and maintaining code that defines the behavior and functionality of software applications, websites, and other digital systems."},
                    {desc: "At its core, programming involves breaking down complex problems into smaller, manageable tasks and expressing these tasks in a language that a computer can understand. Programmers use programming languages like JavaScript, Python, Java, C++, and many others to write these instructions."},
                    {title: "What is ECMAScript?"},
                    {desc: "ECMAScript is a scripting language specification that serves as the standard for JavaScript. It defines the syntax, semantics, and core features of the JavaScript programming language. ECMAScript was created to standardize JavaScript to ensure consistency across different implementations and platforms."},
                    {title: "Javascript Versions:"},
                    {desc: "When developers refer to different versions of JavaScript, such as ES5, ES6 (also known as ECMAScript 2015), ES7, ES8, etc., they are actually referring to different editions of the ECMAScript specification, each introducing new language features and improvements. These versions of ECMAScript serve as milestones in the evolution of the JavaScript language."},
                    {title: "What is JavaScript?"},
                    {desc: "JavaScript is a programming language used to make websites interactive. It's like the glue that holds a web page together. With JavaScript, you can make things happen when users click buttons, fill out forms, or even just move their mouse around. It's essential for creating modern, dynamic web experiences."},
                    {b: "Sure, here are some short points about JavaScript:"},
                    {
                        points: [
                            "JavaScript is a programming language for making web pages interactive.",
                            "It runs in web browsers and can respond to user actions like clicks and input.",
                            "JavaScript is used to validate forms, create animations, and update content dynamically.",
                            "It's essential for building modern, dynamic web applications.",
                            "JavaScript has a vast ecosystem of libraries and frameworks that make development easier.",
                            "It's supported by all major web browsers and is a key skill for web developers.",
                            "JavaScript is a lightweight, OOP language."
                        ]
                    },
                    {title: "Frameworks of Javascript:"},
                    {desc: "JavaScript has a wide range of frameworks that cater to different needs in web development. Here are some popular ones:"},
                    {
                        points: [
                            "React.js: Developed by Facebook, React is a component-based library for building user interfaces. It allows developers to create reusable UI components and efficiently manage the state of their applications.",
                            "Angular: Developed and maintained by Google, Angular is a comprehensive framework for building single-page applications (SPAs). It provides features like two-way data binding, dependency injection, and modular development.",
                            "Vue.js: Vue.js is a progressive JavaScript framework for building interactive web interfaces. It focuses on simplicity and ease of integration, making it a popular choice for both small and large-scale applications.",
                            "Node.js: While not a traditional front-end framework, Node.js is a runtime environment that allows JavaScript to be run on the server-side. It's commonly used for building scalable and high-performance web applications, APIs, and server-side rendering.",
                            "Express.js: Built on top of Node.js, Express.js is a minimal and flexible web application framework that provides a robust set of features for building web and mobile applications. It's commonly used for creating RESTful APIs and handling server-side logic.",
                            "Next.js: Next.js is a React framework that enables server-side rendering, static site generation, and other advanced features to create optimized and production-ready React applications.",
                            "Electron: Electron is a framework for building cross-platform desktop applications using web technologies like HTML, CSS, and JavaScript. It's used by companies like Slack, Microsoft, and GitHub for developing desktop applications.",
                            "Svelte: Svelte is a relatively newer framework that shifts much of the work to compile time, resulting in smaller bundle sizes and faster runtimes. It's gaining popularity for its simplicity and performance optimizations."
                        ]
                    },
                    {desc: "In this tutorial, we will learn JavaScript in depth."}
                ]
            },
            {
                title: "JS Execution",
                content: [
                    {title: "Do we need to install Javascript?"},
                    {desc: "No, you don't need to install JavaScript like you would with other software or applications. JavaScript is a programming language that is supported by web browsers natively. This means that as long as you have a web browser installed on your device (such as Chrome, Firefox, Safari, Edge, etc.), you already have everything you need to run JavaScript code."},
                    {title: "How to execute JavaScript?"},
                    {desc: "JavaScript can be executed right inside one’s browser. You can open the JS console and start writing JS there. Another way to execute JS is a runtime like Node.js which can be installed and used to run JavaScript code. Yet another way to execute JavaScript is by inserting it inside the <script> tag of an HTML document."},
                    {title: "Execute Javascript your Browser:"},
                    {b: "step 1: open your browser."},
                    {b: "step 2: Right Click on browser window."},
                    {
                        image: {
                            image: "/uploads/image/S1714453123441-73183-Screenshot 2024-04-30 102512.png",
                            width: 700, height: 100
                        }
                    },
                    {b: "step 3: Click on Inspect"},
                    {b: "step 4: Click on Elements `>>` this arrow and select of `Console`."},
                    {
                        image: {
                            image: "/uploads/image/S1714453127921-57736-Screenshot 2024-04-30 102552.png",
                            width: 700, height: 100
                        }
                    },
                    {b: "step 5: Write of Javascript Code."},
                    {code: ["console.log(\"Hello world!\");"]},
                    {b: "step 6: Press Enter"}
                ]
            },
            {
                title: "Node.js Installation",
                content: [
                    {
                        desc: "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It is commonly used for building server-side applications, command-line tools, and other types of scalable network programs."
                    },
                    {desc: "To install Node.js, you can follow these steps:"},
                    {title: "1. Install of Node js in your PC:"},
                    {link: "https://nodejs.org/en/download"},
                    {
                        points: [
                            "Go to this download node js link.",
                            "select node js current version automatic. (like this time current version of node js is v20.12.2 (LTS))",
                            "Select your operating System (OS) like (windows, linux, macOS)",
                            "Last step: Click on `Download Nodejs` Button."
                        ]
                    },
                    {title: "2. Run the following command:"},
                    {code: {
                        type: "normal",
                        code: ["node -v"]
                    }},
                    {desc: "check node install your pc to command prompt (windows powershell)."},
                    {title: "3. Install VS Code"},
                    {link: "https://code.visualstudio.com/"},
                    {
                        video: {
                            video: "/videos/tutorials/html/download-vscode.mp4"
                        }
                    },
                    {title: "4. Open VS Code"},
                    {
                        video: {
                            video: "/videos/tutorials/html/open-vs-code.mp4"
                        }
                    },
                    {title: "Run Node js File:"},
                    {code: {
                        type: "normal",
                        code: ["node myfile.js"]
                    }}
                ]
            }
        ]
    },
    // second
    {
        title: "JAVASCRIPT VARIABLES",
        page: [
            {
                title: "What are Variables?",
                content: [
                    {
                        desc: "Variables are containers for storing data in a computer program. They have names that you assign and can hold different types of information, such as numbers, strings (text), arrays, objects, and more."
                    },
                    {title: "Declaring Variables"},
                    {desc: `To declare a variable in JavaScript, you use the "var" keyword followed by the name of the variable. For example:`},
                    {code: ["var x;"]},
                    {desc: `This declares a variable called "x" but does not assign any value to it. You can also assign a value to a variable when you declare it, like this:`},
                    {code: ["var x = 10;"]},
                    {desc: `In JavaScript, you can also use the "let" and "const" keywords to declare variables. The "let" keyword is used to declare a variable that can be reassigned later, while the "const" keyword is used to declare a variable that cannot be reassigned. For example:`},
                    {code: [
                        "let y = 20;",
                        "const z = 30;"
                    ]},
                    {desc: `In this example, "y" is a variable that can be reassigned, while "z" is a constant that cannot be reassigned.`},
                    {title: "Data Types"},
                    {desc: `In JavaScript, there are several data types:`},
                    {
                        points: [
                            `Number: Represents both integers and floating-point numbers. For example, 10 or 3.14.`,
                            `String: Represents textual data enclosed within single or double quotes. For example, "Hello" or 'World'.`,
                            `Boolean: Represents a logical value indicating true or false. For example, true or false.`,
                            `Undefined: Represents a variable that has been declared but not assigned any value.`,
                            `Null: Represents the intentional absence of any value.`,
                            `Object: Represents a collection of key-value pairs, where keys are strings and values can be any data type.`,
                            `Array: Represents an ordered list of values, typically of the same data type, stored within square brackets. For example, [1, 2, 3].`,
                            `Function: Represents a reusable block of code that can be invoked when needed.`,
                            `Symbol: Represents a unique and immutable value used as an identifier for object properties.`
                        ]
                    }
                ]
            },
            {
                title: "Variable Naming Rules",
                content: [
                    {
                        desc: "avaScript is a dynamically-typed language, which means that you don't have to specify the data type of a variable when you declare it. The data type of a variable is determined by the value that is assigned to it. For example:"
                    },
                    {
                        code: [
                            `var x = 10; // x is a number`,
                            `var y = "hello"; // y is a string`,
                            `var z = [1, 2, 3]; // z is an array`
                        ]
                    },
                    {title: "Variable Naming Rules"},
                    {desc: "Here are the rules for naming variables in JavaScript:"},
                    {
                        points: [
                            `Must start with a letter, underscore (_), or dollar sign ($): Variable names cannot begin with a number.`,
                            `Can contain letters, numbers, underscores, and dollar signs: After the first character, variable names can include letters (uppercase and lowercase), digits, underscores, and dollar signs.`,
                            `Cannot contain spaces or special characters (except underscore and dollar sign): Variable names cannot contain spaces or special characters like @, !, #, etc., except for underscores and dollar signs.`,
                            `Are case-sensitive: JavaScript is case-sensitive, so variable names like myVar, MyVar, and MYVAR are considered different.`,
                            `Cannot be reserved keywords: You cannot use reserved keywords (such as var, function, if, else, etc.) as variable names.`,
                            `Should be descriptive: Variable names should be descriptive and meaningful, reflecting the purpose or content of the variable.`,
                            `CamelCase convention is commonly used: In JavaScript, it's common to use camelCase convention for variable names, where the first word is lowercase and subsequent words start with uppercase letters (e.g., myVariableName).`
                        ]
                    },
                    {title: "Using Variables"},
                    {desc: "Once you have declared a variable, you can use it to store and retrieve data in your program. For example:"},
                    {
                        code: [
                            `var x = 10;`,
                            `console.log(x); // prints 10`,
                            `x = "hello";`,
                            `console.log(x); // prints "hello"`
                        ]
                    },
                    {desc: "You can also perform various operations on variables, such as mathematical calculations, string concatenation, and more. For example:"},
                    {
                        code: [
                            `var x = 10;`,
                            `var y = 20;`,
                            `var z = x + y; // z is 30`,
                            `var str1 = "hello";`,
                            `var str2 = "world";`,
                            `var str3 = str1 + " " + str2; // str3 is "hello world"`
                        ]
                    }
                ]
            },
            {
                title :"Primitives and Objects",
                content: [
                    {
                        desc: "In JavaScript, there are two main types of data: primitives and objects."
                    },
                    {title: "Primitives:"},
                    {
                        points: [
                            "Primitives are basic data types in JavaScript that are immutable, meaning they cannot be changed once created.",
                            "There are six primitive data types: `number`, `string`, `boolean`, `null`, `undefined`, and `symbol`.",
                            "Primitives are stored by value, meaning when you assign a primitive to a variable, you're making a copy of the value."
                        ]
                    },
                    {b: "For Example:"},
                    {
                        code: [
                            "let x = 10;",
                            "x = 20; // x is now 20"
                        ]
                    },
                    {desc: `In this example, the value of "x" is changed from 10 to 20. However, this does not change the value of the primitive itself, but rather creates a new primitive with the value of 20.`},
                    {title: "Objects:"},
                    {
                        points: [
                            `Objects are complex data types in JavaScript that can hold multiple values and methods.`,
                            `Objects are mutable, meaning their properties can be changed.`,
                            `Objects are instances of classes, and they are stored by reference, meaning when you assign an object to a variable, you're referencing the original object.`,
                            `Objects can be created using object literals {}, constructors new Object(), or classes.`
                        ]
                    },
                    {b: "For Example:"},
                    {
                        code: {
                            type: 'normal',
                            code: [
                                `let obj = { name: <span class="text-[#ca8a04]">"John"</span>, age: <span class="text-[#fcd34d]">30</span> };`,
                                `obj.age = <span class="text-[#fcd34d]">31</span>; <span class="text-[#6b7280]">// the age property of obj is now 31</span>`
                            ]
                        }
                    },
                    {desc: "In summary, primitives are the simplest data types in JavaScript and are immutable. Objects are more complex data types that are used to represent real-world objects or abstract concepts and are mutable. It is important to understand the differences between these two types of data in order to write effective and maintainable code in JavaScript."}
                ]
            },
            {
                title: "Operators and Expressions",
                content: [
                    {
                        desc: "Operators in JavaScript are symbols that perform specific operations on one or more operands (values or variables). For example, the addition operator (+) adds two operands together and the assignment operator (=) assigns a value to a variable."
                    },
                    {desc: "There are several types of operators in JavaScript, including:"},
                    {
                        points: [
                            "Arithmetic operators (e.g. +, -, *, /, %)",
                            "Comparison operators (e.g. >, <, >=, <=, ==, !=)",
                            "Logical operators (e.g. &&, ||, !)",
                            "Assignment operators (e.g. =, +=, -=, *=, /=)",
                            "Conditional (ternary) operator (e.g. ?:)"
                        ]
                    },
                    {desc: "Expressions are combinations of values, variables, and operators that produce a result. For example:"},
                    {
                        code: {
                            type: "normal",
                            code: [
                                `<span class="text-[#22d3ee]">let</span> x = 10;`,
                                `<span class="text-[#22d3ee]">let</span> y = 20;`,
                                `<span class="text-[#22d3ee]">let</span> z = x + y; <span class="text-[#6b7280]">// z is 30</span>`
                            ]
                        }
                    },
                    {desc: `In this example, the expression "x + y" is evaluated to 30 and assigned to the "z" variable.`},
                    {
                        desc: "Operator precedence determines the order in which operators are applied when an expression has multiple operators. For example:"
                    },
                    {
                        code: {
                            type: "normal",
                            code: [
                                `<span class="text-[#22d3ee]">let</span> x = 10 + 5 * 3; <span class="text-[#6b7280]">// x is 25</span>`
                            ]
                        }
                    },
                    {
                        desc: "In this example, the multiplication operator (*) has a higher precedence than the addition operator (+), so the multiplication is performed before the addition. As a result, the expression is evaluated as 10 + (5 * 3) = 25. You can use parentheses to specify the order of operations in an expression. For example:"
                    },
                    {
                        code: {
                            type: "normal",
                            code: [
                                `<span class="text-[#22d3ee]">let</span> x = (10 + 5) * 3; <span class="text-[#6b7280]">// x is 45</span>`
                            ]
                        }
                    },
                    {desc: "In this example, the parentheses indicate that the addition should be performed before the multiplication. As a result, the expression is evaluated as (10 + 5) * 3 = 45."}
                ]
            },
            {
                title: "var vs let vs const",
                content: [
                    {desc: "In JavaScript, there are three ways to declare variables: var, let, and const. Each of these keywords has its own rules and uses, and it is important to understand the differences between them in order to write effective and maintainable code."},
                    {b: "var:"},
                    {
                        points: [
                            `var was traditionally used to declare variables in JavaScript.`,
                            `Variables declared with var are function-scoped or globally scoped, but not block-scoped.`,
                            `They can be re-declared and updated within their scope.`,
                            `var variables can be hoisted, meaning they are moved to the top of their scope during the compilation phase.`
                        ]
                    },
                    {code: {
                        type: "normal",
                        code: [`<span class="text-[#22d3ee]">var</span> x = 10;`]
                    }},
                    {b: "let:"},
                    {
                        points: [
                            `let was introduced in ES6 (ECMAScript 2015) to address some of the shortcomings of var.`,
                            `Variables declared with let are block-scoped, meaning they are only accessible within the block they are defined in (e.g., if, for, while blocks).`,
                            `let variables can be updated within their scope, but not re-declared.`,
                            `let variables are not hoisted to the top of their scope.`
                        ]
                    },
                    {code: {
                        type: "normal",
                        code: [`<span class="text-[#22d3ee]">let</span> x = 10;`]
                    }},
                    {code: {
                        type: "normal",
                        code: [
                            `if (x > 10) {`,
                                `let y = 20;`,
                                `console.log(y); // 20`,
                              `}`,
                              `console.log(y); // ReferenceError: y is not defined`,
                        ]
                    }},
                    {desc: `In this example, the "y" variable is declared with the "let" keyword and is only accessible within the block of the if statement. If you try to access it outside of the block, you will get a "ReferenceError" because "y" is not defined in that scope.`},
                    {b: "const:"},
                    {
                        points: [
                            `const was also introduced in ES6.`,
                            `Variables declared with const are block-scoped.`,
                            `Unlike let, const variables cannot be reassigned once they are initialized. However, for objects and arrays, the contents of the object or array can still be modified.`,
                            `const variables must be initialized at the time of declaration and cannot be left uninitialized.`,
                            `Like let, const variables are not hoisted to the top of their scope.`
                        ]
                    },
                    {code:{
                        type: "normal",
                        code: [
                            `const PI = 3.14;`, `PI = 3.14159; // TypeError: Assignment to constant variable.`
                        ]
                    }},
                    {
                        desc: `In summary, "var" is function-scoped, "let" is block-scoped and allows reassignment, and "const" is block-scoped and immutable (though it's worth noting that for objects and arrays declared with "const", their contents can still be modified). The choice between "var", "let", and const depends on the desired scope and immutability of the variable.`
                    }
                ]
            }
        ]
    },
    // third
    {
        title: "JAVASCRIPT BASICS",
        page: [
            {
                title :"If else conditionals",
                content: [
                    {desc: "The `if-else` statement is used to make decisions in a program based on certain conditions. It allows you to execute one block of code if a condition is true, and another block of code if the condition is false."},
                    {code: {
                        type: "normal",
                        code: [
                            `if (condition) {`,
                                `<span class="text-[#6b7280]">// code to be executed if condition is true</span>`,
                              `}`,
                        ]
                    }},
                    {desc: `Here is the syntax for an "if" statement with an "else" clause:`},
                    {code: {
                        type: "normal",
                        code: [
                            `if (condition) {`,
                                `<span class="text-[#6b7280]">// code to be executed if condition is true</span>`,
                              `} else {`,
                                `<span class="text-[#6b7280]">// code to be executed if condition is false</span>`,
                              `}`,
                        ]
                    }},
                    {desc: `The condition is a boolean expression that evaluates to either true or false. If the condition is true, the code in the "if" block is executed. If the condition is false, the code in the "else" block is executed (if present).`},
                    {b: "For example:"},
                    {
                        code: [
                            `let x = 10;`,
                            `if (x > 5) {`,
                            `console.log("x is greater than 5");`,
                            `} else {`,
                            `console.log("x is not greater than 5");`,
                            `}`,
                        ]
                    },
                    {desc: `In this example, the condition "x > 5" is true, so the code in the "if" block is executed and the message "x is greater than 5" is printed to the console`}
                ]                
            },
            {
                title :"If else ladder",
                content: [
                    {
                        desc: `The "if-else ladder" is a control structure in JavaScript that allows you to execute a different block of code depending on multiple conditions. It is called a ladder because it consists of multiple "if" and "else" statements arranged in a ladder-like fashion.`
                    },
                    {desc: `Here is the syntax for an "if-else ladder":`},
                    {code:{
                        type: "normal",
                        code: [
                            `if (condition1) {`,
                                `<span class="text-[#6b7280]">// code to be executed if condition1 is true</span>`,
                              `} else if (condition2) {`,
                                `<span class="text-[#6b7280]">// code to be executed if condition1 is false and condition2 is true</span>`,
                              `} else if (condition3) {`,
                                `<span class="text-[#6b7280]">// code to be executed if condition1 and condition2 are false and condition3 is true</span>`,
                              `} ...`,
                              `else {`,
                                `<span class="text-[#6b7280]">// code to be executed if all conditions are false</span>`,
                              `}`,                              
                        ]
                    }},
                    {desc: `In this structure, each "if" statement is followed by an optional "else" statement. If the first "if" condition is true, the code in the corresponding block is executed and the rest of the ladder is skipped. If the first "if" condition is false, the second "if" condition is evaluated, and so on. If none of the conditions are true, the code in the "else" block is executed.`},
                    {b:"For example:"},
                    {code: [
                        `let x = 10;`,
                        `if (x > 15) {`,
                        `console.log("x is greater than 15");`,
                        `} else if (x > 10) {`,
                        `console.log("x is greater than 10 but less than or equal to 15");`,
                        `} else if (x > 5) {`,
                        `console.log("x is greater than 5 but less than or equal to 10");`,
                        `} else {`,
                        `console.log("x is less than or equal to 5");`,
                        `}`
                    ]},
                    {desc: `In this example, the first "if" condition "x > 15" is false, so the second "if" condition "x > 10" is evaluated. This condition is also false, so the third "if" condition "x > 5" is evaluated. This condition is true, so the code in the corresponding block is executed and the message "x is greater than 5 but less than or equal to 10" is printed to the console.

                    The "if-else ladder" is a useful control structure for executing different blocks of code based on multiple conditions. It can help you write more concise and maintainable code in JavaScript.`}
                ]
            },
            {
                title: "Switch case",
                content: [
                    {
                        desc: `The "switch" statement in JavaScript is another control structure that allows you to execute a different block of code depending on a specific value. It is often used as an alternative to the "if-else ladder" when you have multiple conditions to check against a single value.`
                    },
                    {desc: `Here is the syntax for a "switch" statement:`},
                    {code: {
                        type: "normal",
                        code: [
                            `switch (expression) {`,
                                `case constant1:`,
                                    `<span class="text-[#6b7280]">// code to be executed if expression === constant1</span>`,
                                    `break;`,
                                `case constant2:`,
                                    `<span class="text-[#6b7280]">// code to be executed if expression === constant2</span>`,
                                    `break;`,
                                `// more cases can be added as needed`,
                                `default:`,
                                    `<span class="text-[#6b7280]">// code to be executed if expression doesn't match any case</span>`,
                            `}`         
                        ]
                    }},
                    {desc: `In this structure, the "expression" is evaluated and compared to each of the "case" values. If the "expression" matches a "case" value, the corresponding block of code is executed. The "break" statement is used to exit the "switch" statement and prevent the code in the following cases from being executed. The "default" case is optional and is executed if the "expression" does not match any of the "case" values.`},
                    {b: "For Example:"},
                    {code: [
                        `let fruit = "apple";`,
                        `switch (fruit) {`,
                            `case "apple":`,
                                `console.log("Apple is a fruit.");`,
                                `break;`,
                            `case "banana":`,
                                `console.log("Banana is a fruit.");`,
                                `break;`,
                            `case "orange":`,
                                `console.log("Orange is a fruit.");`,
                                `break;`,
                            `default:`,
                                `console.log("Unknown fruit.");`,
                        `}`
                    ]},
                    {desc: `The "switch" statement is a useful control structure for executing different blocks of code based on a specific value. It can help you write more concise and maintainable code in JavaScript.`}
                ]
            },
            {
                title: "Ternary Operator",
                content: [
                    {
                        desc: "The ternary operator, also known as the conditional operator, is a compact way to write an if...else statement in many programming languages, including JavaScript. It has the following syntax:"
                    },
                    {code: [`(condition) ? expressionIfTrue : expressionIfFalse;`]},
                    {desc: "Here's how it works:"},
                    {
                        points: [
                            `The condition is evaluated first. If the condition is true, the expression before the : (colon) is executed. If the condition is false, the expression after the : is executed.`,
                            `The result of the expression depends on whether the condition is true or false.`
                        ]
                    },
                    {desc: "Here's an example:"},
                    {code:{
                        type:"normal",
                        code: [
                            `let age = 20;`,
                            `let status = (age >= 18) ? "adult" : "minor";`,
                            `console.log(status); <span class="text-[#6b7280]">// Output: "adult"</span>`
                        ]
                    }},
                    {
                        points: [
                            `The condition (age >= 18) checks if the value of age is greater than or equal to 18.`,
                            `If the condition is true, the expression "adult" is returned.`,
                            `If the condition is false, the expression "minor" is returned.`,
                            `Since age is 20, which satisfies the condition, the variable status is assigned the value "adult".`
                        ]
                    },
                    {desc: "The ternary operator is often used for concise conditional expressions, especially when assigning values or returning values based on conditions. However, it's important not to overuse it, as excessive nesting or complex expressions can reduce code readability."}
                ]
            },
            {
                title: "For Loops",
                content: [
                    {
                        desc: "Certainly! A for loop is a control flow statement that allows you to repeatedly execute a block of code a specified number of times. In JavaScript, the syntax for a for loop is as follows:"
                    },
                    {b: "Syntax:"},
                    {code:{
                        type: "normal",
                        code: [
                            `for (initialization; condition; increment/decrement) {`,
                                `<span class="text-[#6b7280]">// code to be executed in each iteration</span>`,
                            `}`
                        ]
                    }},
                    {desc: "Here's a breakdown of each part of the for loop:"},
                    {
                        points: [
                            `Initialization: This part is executed before the loop starts. It usually initializes one or more loop control variables. This part is optional. You can declare variables here.`,
                            `Condition: This is the condition that is evaluated before each iteration of the loop. If the condition evaluates to true, the loop continues. If it evaluates to false, the loop terminates.`,
                            `Increment/Decrement: This part allows you to update the loop control variable after each iteration. It can be an increment (e.g., i++) or a decrement (e.g., i--), or any other expression that modifies the loop control variable.`,
                            `Code Block: This is the block of code that gets executed in each iteration of the loop.`
                        ]
                    },
                    {desc: "Here's an example of a simple for loop in JavaScript:"},
                    {
                        code: [
                            `for (let i = 0; i < 5; i++) {`,
                                `console.log("Iteration " + i);`,
                            `}`                
                        ]
                    },
                    {desc: "In this example:"},
                    {
                        points: [
                            "`let i = 0` initializes the loop control variable i to 0.",
"`i < 5` is the condition that checks if i is less than 5.",
"`i++` is the increment operation that increases the value of i by 1 in each iteration.",
"`console.log(\"Iteration \" + i);` is the code block that logs the current iteration number to the console.",
                        ]
                    },
                    {desc: "The loop will execute 5 times, printing:"},
                    {code: {
                        type: "normal",
                        code: [`Iteration 0`,`Iteration 1`,`Iteration 2`,`Iteration 3`,`Iteration 4`]
                    }},
                    {desc:"For loops are commonly used when you know the number of iterations beforehand or when you want to iterate over arrays or other iterable objects."},
                    {title: "For-in loop"},
                    {desc: "The for-in loop is used to iterate over the properties of an object. It has the following syntax:"},
                    {code: {
                        type: "normal",
                        code: [
                            `<span class="text-blue-400">for</span> (variable <span class="text-blue-400">in</span> object) {`,
                                `<span class="text-[#6b7280]">// code to be executed</span>`,
                              `}`
                        ]
                    }},
                    {desc: `The variable is assigned the name of each property in the object as the loop iterates over them.
                    Here's an example of a for-in loop that iterates over the properties of an object:`},
                    {code: {
                        type: "normal",
                        code: [
                            `let person = {`,
                                `name: "John",`,
                                `age: 30,`,
                                `job: "developer"`,
                              `};`,
                              ``,
                              `for (let key in person) {`,
                                `console.log(key + ": " + person[key]);`,
                              `}`                 
                        ]
                    }},
                    {desc: "This loop will print the following to the console:"},
                    {code:{
                        type: "normal",
                        code: [
                            `name: John`,
                            `age: 30`,
                            `job: developer`
                        ]
                    }},
                    {title: "For-of loop"},
                    {desc: "The for-of loop is used to iterate over the values of an iterable object, such as an array or a string. It has the following syntax:"},
                    {code: {
                        type: "normal",
                        code: [
                            `<span class="text-blue-400">for</span> (variable <span class="text-blue-400">of</span> object) {`,
                                `<span class="text-[#6b7280]">// code to be executed</span>`,
                              `}`
                        ]
                    }},
                    {desc: `The variable is assigned the value of each element in the object as the loop iterates over them.
                    Here's an example of a for-of loop that iterates over the elements of an array:`},
                    {
                        code: [
                            `let numbers = [1, 2, 3, 4, 5];`,
                            `for (let number of numbers) {`,
                            `console.log(number);`,
                            `}`,
                        ]
                    }
                ]
            },
            {
                title: "While Loop",
                content: [
                    {
                        desc:"A while loop is another type of loop in JavaScript (and many other programming languages) that allows you to repeatedly execute a block of code as long as a specified condition is true. The syntax for a while loop is as follows:"
                    },
                    {code: {
                        type: "normal",
                        code: [
                            `while (condition) {`,
                                `<span class="text-[#6b7280]">// code to be executed as long as the condition is true</span>`,
                            `}`
                        ]
                    }},
                    {desc: "Here's a breakdown of how a while loop works:"},
                    {
                        points: [
                            "Condition: The loop continues executing as long as this condition evaluates to true. If the condition initially evaluates to false, the code inside the loop will not execute at all.",
                            "Code Block: This is the block of code that gets executed in each iteration of the loop."
                        ]
                    },
                    {
                        desc: "It's essential to make sure that the condition in a while loop eventually becomes false; otherwise, you may end up with an infinite loop, which can cause your program to hang or become unresponsive."
                    },
                    {desc: "Here's an example of a while loop in JavaScript:"},
                    {
                        code: [
                            `let count = 0;`,
`while (count < 5) {`,
    `console.log("Count is: " + count);`,
    `count++;`,
`}`
                        ]
                    },
                    {desc: "In this example:"},
                    {
                        points: [
                            `let count = 0; initializes the variable count to 0.`,
                            `count < 5 is the condition that checks if count is less than 5.`,
                            `console.log("Count is: " + count); is the code block that logs the current value of count to the console.`,
                            `count++; increments the value of count by 1 in each iteration.`
                        ]
                    },
                    {desc: "The loop will execute 5 times, printing:"},
                    {code: {
                        type: "normal",
                        code: ["Count is: 0","Count is: 1","Count is: 2","Count is: 3","Count is: 4"]
                    }},
                    {desc: "While loops can be useful when you don't know exactly how many times you need to execute a block of code. For example, you might use a while loop to keep prompting a user for input until they provide a valid response."},
                    {code: {
                        type: "normal",
                        code: [
                            `let input = "";`,
                            `while (input !== "yes" && input !== "no") {`,
                            `input = prompt("Please enter 'yes' or 'no':");`,
                            `}`
                        ]
                    }},
                    {desc: `This loop will keep prompting the user for input until they enter either "yes" or "no".`},
                    {desc: "While loops are useful when you want to repeat a block of code an unknown number of times until a specific condition is met."},
                ]
            },
            {
                title: "Functions",
                content: [
                    {
                        desc: "Functions in programming are reusable blocks of code that perform a specific task. They help in organizing code, making it more readable, maintainable, and modular. In JavaScript, functions are first-class citizens, meaning they can be treated like any other value. Here's a breakdown of key concepts related to functions in JavaScript:"
                    },
                    {b: "Syntax:"},
                    {code:{
                        type: "normal",
                        code: [
                            `<span class="text-blue-400">function</span> functionName(parameters) {`,
                                `<span class="text-[#6b7280]">// code block</span>`,
                            `}`
                        ]
                    }},
                    {desc: "This is the most common way to define a function. functionName is the name of the function, and parameters are variables that the function expects to receive when it's called."},
                    {title: "Function Expression:"},
                    {code:{
                        type: "normal",
                        code: [
                            `<span class="text-blue-400">const</span> functionName = <span class="text-blue-400">function</span> (parameters) {`,
                                `<span class="text-[#6b7280]">// code block</span>`,
                            `}`
                        ]
                    }},
                    {desc: "In this case, the function is stored in a variable functionName. Function expressions can be anonymous or named."},
                    {title: "Arrow Functions (Introduced in ES6):"},
                    {code:{
                        type: "normal",
                        code: [
                            `<span class="text-blue-400">const</span> functionName = (parameters) => {`,
                                `<span class="text-[#6b7280]">// code block</span>`,
                            `}`
                        ]
                    }},
                    {title: "Return Statement:"},
                    {code:{
                        type: "normal",
                        code: [
                            `<span class="text-blue-400">function</span> functionName(value) {`,
                                `<span class="text-purple-300">return</span> (5 + value);`,
                            `}`,
                            `let n = functionName(5);`,
                            `console.<span class="text-yellow-400">log</span>(n);`
                        ]
                    }},
                    {code: {
                        type: "normal",
                        code: [`Output: <span class="text-blue-400">10</span>`]
                    }},
                    {b: "In Arrow Function:"},
                    {code: {
                        type: "normal",
                        code: [
                            `<span class="text-blue-400">const</span> functionName = (value) => value + 5;`,
                            `let n = functionName(5);`,
                            `console.<span class="text-yellow-400">log</span>(n);`
                        ]
                    }},
                    {code: {
                        type: "normal",
                        code: [`Output: <span class="text-blue-400">10</span>`]
                    }},
                    {title: "Nesting Function:"},
                    {desc: `Functions can be defined inside other functions, which is known as "nesting." This is useful for creating smaller, reusable blocks of code that can be called from within the larger function.`},
                    {code: {
                        type: "normal",
                        code: [
                            `<span class="text-blue-400">function</span> outerFunction(x) {`,
                                `<span class="text-blue-400">function</span> innerFunction() {`,
                                  `<span class="text-[#6b7280]">// code to be executed</span>`,
                                `}`,
                                `<span class="text-[#6b7280]">// more code</span>`,
                              `}`       
                        ]
                    }},
                    {desc: "In this example, the innerFunction is defined inside the outerFunction and can only be called from within that function. In addition to these basic concepts, there are many other things you can do with functions in JavaScript, such as passing functions as arguments, creating anonymous functions, and using higher-order functions. These advanced techniques can make your code more efficient and flexible, and are essential tools for any JavaScript developer."}
                ]
            }
        ]
    },
    // fourth
    {
        title: "JAVASCRIPT OBJECTS",
        page: [
            {
                title: "Strings",
                content: [
                    {desc: `Strings in programming are sequences of characters, such as letters, digits, symbols, or spaces, enclosed within single quotes (''), double quotes ("") or backticks (\`\`). In JavaScript, strings are primitive data types, meaning they are immutable and cannot be changed after they are created. `},
                    {desc:"Here are some key aspects of strings in JavaScript:"},
                    {b: "Syntax:"},
                    {code: {
                        type: "normal",
                        code: [
                            `<span class="text-blue-400">let</span> str1 = <span class="text-green-400">'Hello'</span>;`,
                            `<span class="text-blue-400">let</span> str2 = <span class="text-green-400">"World"</span>;`,
                            "<span class=\"text-blue-400\">let</span> str3 = <span class=\"text-green-400\">`JavaScript`</span>;"
                        ]
                    }},
                    {desc: `You can use single quotes, double quotes, or backticks to create strings. Backticks support template literals, which allow for string interpolation and multi-line strings.`},
                    {b: "Length:"},
                    {desc: "The length of a string can be obtained using the length property:"},
                    {code: [
                        `let str = "Hello";`,
                        `console.log(str.length); // Output: 5`
                    ]},
                    {b: "String Concatenation:"},
                    {desc: "Strings can be concatenated using the + operator:"},
                    {code: {
                        type: "normal",
                        code: [
                            `let str1 = "Hello";`,
`let str2 = "World";`,
`let result = str1 + " " + str2; <span class="text-[#6b7280]">// "Hello World"</span>`
                        ]
                    }},
                    {title: "Accessing Characters:"},
                    {desc: "Individual characters in a string can be accessed using bracket notation:"},
                    {code: {
                        type: "normal",
                        code: [
                            `let str = "JavaScript";`,
                            `console.log(<span class="text-blue-400">str</span>[<span class="text-green-300">0</span>]); <span class="text-[#6b7280]">// Output: "J"</span>`
                        ]
                    }},
                    {title: "String Escape Characters:"},
                    {desc: "Special characters in strings can be escaped using the backslash (`\\`) character:"},
                    {code: {
                        type: "normal",
                        code: [`<span class="text-blue-400">let</span> str = <span class="text-[#d97706]">"She said: \\"Hello!\\""</span>;`]
                    }},
                    {desc: `Common escape sequences include \n (newline), \t (tab), \\" (double quote), \\' (single quote), \\\\ (backslash), etc.`},
                    {title: "String Comparison:"},
                    {desc:"Strings can be compared using relational operators (`<`, `<=`, `>`, `>=`). Comparison is based on lexicographical (dictionary) order."},
                    {title: "# String Methods:"},
                    {desc: `JavaScript provides numerous built-in methods for working with strings, such as "toUpperCase()", "toLowerCase()", "charAt()", "indexOf()", "substring()", "split()", "trim()", and many more. These methods allow you to manipulate, search, extract, and modify strings.`},
                    {b: "concat:"},
                    {desc: "This method is used to concatenate (combine) two or more strings. For example, the following code will return \"Hello World\":"},
                    {code: [
                        `var str1 = "Hello";`,
`var str2 = " World";`,
`console.log(str1.concat(str2));`,
                    ]},

                    {title: "indexOf:"},
                    {desc: "This method is used to find the index of a specific character or substring in a string. For example, the following code will return 6:"},
                    {code: [`var str = "Hello World";`,`console.log(str.indexOf("W"));`]},

                    {title: "slice:"},
                    {desc: "This method is used to extract a portion of a string. For example, the following code will return \"World\":"},
                    {code: [`var str = "Hello World";`,`console.log(str.slice(6));`]},
                    {title: "replace"},
                    {desc: `This method is used to replace a specific character or substring in a string. For example, the following code will return "Hello Universe":`},
                    {code: [
                        `var str = "Hello World";`, `console.log(str.replace("World", "Universe"));`
                    ]},
                    {title: "toUpperCase and toLowerCase:"},
                    {desc:`These methods are used to convert a string to uppercase or lowercase letters. For example, the following code will return "HELLO WORLD" and "hello world" respectively:`},
                    {code: [
                        `var str = "Hello World";`,
`console.log(str.toUpperCase());`,
`console.log(str.toLowerCase());`,
                    ]},
                    {desc: "Strings are fundamental in JavaScript and are used extensively in web development for tasks such as displaying text, manipulating data, and handling user input. Understanding how to work with strings effectively is essential for JavaScript developers."}
                ]
            },
            {
                title: "Arrays and Array Methods",
                content: [
                    {
                        desc: "Arrays are used to store multiple values in a single variable. In JavaScript, arrays are ordered collections of elements, and each element can be of any data type, including other arrays. Arrays are mutable, meaning their elements can be changed."
                    },
                    {desc: "Here's how you can create an array in JavaScript:"},
                    {code: {
                        type: "normal",
                        code: [
                            `<span class="text-blue-400">let</span> fruits = [<span class="text-green-500">'apple'</span>, <span class="text-green-500">'banana'</span>, <span class="text-green-500">'orange'</span>];`
                        ]
                    }},
                    {desc: "You can also create an array using the `Array` constructor:"},
                    {code: {
                        type: "normal",
                        code: [
                            `<span class="text-blue-400">let</span> numbers = <span class="text-blue-400">new</span> <span class="text-red-500">Array</span>(1,2,3,4,5,6);`
                        ]
                    }},
                    {desc:"Here are some common array methods in JavaScript:"},
                    {title: "Push and Pop:"},
                    {desc: "push(): Adds one or more elements to the end of an array and returns the new length of the array."},
                    {desc: "pop(): Removes the last element from an array and returns that element."},
                    {code: {
                        type: "normal",
                        code: [
                            `<span class="text-blue-400">let</span> fruits = ['apple', 'banana'];`,
`fruits.<span class="text-yellow-500">push</span>('orange'); <span class="text-[#71717a]">// ['apple', 'banana', 'orange']</span>`,
`<span class="text-blue-400">let</span> removedFruit = fruits.<span class="text-yellow-500">pop</span>(); <span class="text-[#71717a]">// ['apple', 'banana']</span>`
                        ]
                    }},
                    {title: "Shift and Unshift:"},
                    {desc:"unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array."},
                    {desc:"shift(): Removes the first element from an array and returns that element."},
                    {code: {
                        type:"normal",
                        code: [
                            `<span class="text-blue-400">let</span> fruits = ['banana', 'orange'];`,
`fruits.<span class="text-yellow-500">unshift</span>('apple'); <span class="text-[#71717a]">// ['apple', 'banana', 'orange']</span>`,
`<span class="text-blue-400">let</span> removedFruit = fruits.<span class="text-yellow-500">shift</span>(); <span class="text-[#71717a]">// ['banana', 'orange']</span>`
                        ]
                    }},
                    {title :"Splice:"},
                    {desc:"splice(): Adds or removes elements from an array."},
                    {code: {
                        type: "normal",
                        code: [
                            `<span class="text-blue-400">let</span> fruits = ['apple', 'banana', 'orange'];`,
`fruits.<span class="text-yellow-500">splice</span>(1, 1, 'grape'); <span class="text-[#71717a]">// ['apple', 'grape', 'orange']</span>`,
                        ]
                    }},
                    {title: "Slice:"},
                    {desc:"slice(): Returns a shallow copy of a portion of an array into a new array object."},
                    {code: {
                        type:"normal",
                        code: [
                            `<span class="text-blue-400">let</span> fruits = ['apple', 'banana', 'orange', 'grape'];`,
`<span class="text-blue-400">let</span> citrus = fruits.<span class="text-yellow-500">slice</span>(2); <span class="text-[#71717a]">// ['orange', 'grape']</span>`,
                        ]
                    }},
                    {title: "Concat:"},
                    {desc:"concat(): Combines two or more arrays."},
                    {code: {
                        type: "normal",
                        code: [
                            `<span class="text-blue-400">let</span> fruits = ['apple', 'banana'];`,
`<span class="text-blue-400">let</span> vegetables = ['carrot', 'potato'];`,
`<span class="text-blue-400">let</span> food = fruits.<span class="text-yellow-500">concat</span>(vegetables); <span class="text-[#71717a]">// ['apple', 'banana', 'carrot', 'potato']</span>`
                        ]
                    }},
                    {title:"Includes:"},
                    {desc: "includes(): Checks if an array includes a certain value."},
                    {code: {
                        type: "normal",
                        code: [
                            `<span class="text-blue-400">let</span> fruits = ['apple', 'banana', 'orange'];`,
`<span class="text-blue-400">let</span> hasBanana = fruits.<span class="text-yellow-500">includes</span>('banana'); <span class="text-[#71717a]">// true</span>`,
                        ]
                    }},
                    {title: "forEach:"},
                    {desc:"forEach(): Executes a provided function once for each array element."},
                    {code: {
                        type:"normal",
                        code: [
                            `<span class="text-blue-400">let</span> fruits = ['apple', 'banana', 'orange'];`,
`fruits.<span class="text-yellow-500">forEach</span>(fruit => console.<span class="text-yellow-500">log</span>(fruit)); <span class="text-[#71717a]">// logs each fruit</span>`,
                        ]
                    }},
                    {desc:"These are just a few of the many methods available for working with arrays in JavaScript. Arrays are versatile data structures and are extensively used in JavaScript programming for storing, manipulating, and iterating over collections of data."}
                ]
            },
            {
                title: "Loops with Arrays",
                content: [
                    {desc:"Loops are often used in conjunction with arrays to iterate over each element of the array and perform some operation. There are several types of loops you can use with arrays in JavaScript:"},
                    {title: "For Loop:"},
                    {desc:"A traditional for loop can be used to iterate over each element of an array by using the array's length property."},
                    {code: {
                        type: "normal",
                        code: [
                            `<span class="text-blue-400">let</span> fruits = ['apple', 'banana', 'orange'];`,
`<span class="text-blue-400">for</span> (<span class="text-blue-400">let</span> i = 0; i < fruits.<span class="text-blue-300">length</span>; i++) {`,
    `console.<span class="text-yellow-400">log</span>(fruits[i]);`,
`}`
                        ]
                    }},
                    {title: "For...of Loop:"},
                    {desc:"The for...of loop is a more concise way to iterate over arrays. It iterates over the values of an iterable object (like arrays)."},
                    {code: {
                        type:"normal",
                        code: [
                            `<span class="text-blue-400">let</span> fruits = ['apple', 'banana', 'orange'];`,
`<span class="text-blue-400">for</span> (<span class="text-blue-400">let</span> fruit <span class="text-blue-400">of</span> fruits) {`,
    `console.<span class="text-yellow-300">log</span>(fruit);`,
`}`
                        ]
                    }},
                    {title: 'forEach() Method:'},
                    {desc: "The forEach() method executes a provided function once for each array element."},
                    {code: {
                        type:"normal",
                        code: [
                            `<span class="text-blue-400">let</span> fruits = ['apple', 'banana', 'orange'];`,
`fruits.<span class="text-yellow-300">forEach</span>(<span class="text-blue-400">function</span>(fruit) {`,
    `console.<span class="text-yellow-300">log</span>(fruit);`,
`});`,
                        ]
                    }},
                    {desc:"These are some common ways to loop through arrays in JavaScript. Each method has its advantages and use cases, so choose the one that best fits your specific scenario."}
                ]
            },
            {
                title:"Map, Filter and Reduce",
                content: [
                    {desc:"One of the most important data structures in JavaScript is the array, which is a collection of elements. When working with arrays, it is often necessary to manipulate the elements in various ways, which is where the built-in methods map, filter, and reduce come in. In this blog post, we will explore how to use these methods to manipulate arrays in JavaScript."},
                    {title:"Map() Method:"},
                    {desc:"The map() method creates a new array by applying a function to each element of the original array."},
                    {code: {
                        type: "normal",
                        code: [
                            `<span class="text-blue-400">let</span> numbers = [1, 2, 3];`,
`<span class="text-blue-400">let</span> squaredNumbers = numbers.<span class="text-yellow-300">map</span>(<span class="text-blue-400">function</span>(number) {`,
    `<span class="text-red-500">return</span> number * number;`,
`});`,
`console.<span class="text-yellow-300">log</span>(squaredNumbers); <span class="text-[#6b7280]">// [1, 4, 9]</span>`,
                        ]
                    }},
                    {title:"Filter() Method:"},
                    {desc:"The filter() method creates a new array with all elements that pass the test implemented by the provided function."},
                    {code: {
                        type:"normal",
                        code: [
                            `<span class="text-blue-400">let</span> numbers = [1, 2, 3, 4, 5];`,
`<span class="text-blue-400">let</span> evenNumbers = numbers.<span class="text-yellow-300">filter</span>(<span class="text-blue-400">function</span>(number) {`,
    `<span class="text-red-500">return</span> number % 2 === 0;`,
`});`,
`console.<span class="text-yellow-300">log</span>(evenNumbers); <span class="text-[#6b7280]">// [2, 4]</span>`,
                        ]
                    }},
                    {title: "Reduce() Method:"},
                    {desc:"The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value."},
                    {code: {
                        type :"normal",
                        code: [
                            `<span class="text-blue-400">let</span> numbers = [1, 2, 3, 4, 5];`,
`<span class="text-blue-400">let</span> sum = numbers.<span class="text-yellow-300">reduce</span>(function(accumulator, currentValue) {`,
    `<span class="text-red-500">return</span> accumulator + currentValue;`,
`}, 0);`,
`console.<span class="text-yellow-300">log</span>(sum); <span class="text-[#6b7280]">// 15</span>`
                        ]
                    }}
                ]
            },
            {
                title: "Date",
                content: [
                    {desc:"In JavaScript, the Date object is used to work with dates and times. It provides methods for creating, manipulating, and formatting dates and times. Here are some common tasks you can perform with the Date object:"},
                    {title:"Creating a Date Object:"},
                    {desc:"You can create a new Date object using one of the following methods:"},
                    {
                        points:[
                            "new Date(): Creates a new Date object representing the current date and time.",
"new Date(milliseconds): Creates a new Date object with the specified number of milliseconds since the Unix epoch (January 1, 1970).",
"new Date(dateString): Parses a date string and creates a new Date object.",
"new Date(year, month, day, hours, minutes, seconds, milliseconds): Creates a new Date object with the specified components.",
                        ]
                    },
                    {b: "Example:"},
                    {code:{
                        type: "normal",
                        code: [
                            `<span class="text-blue-400">let</span> currentDate = <span class="text-blue-500">new</span> <span class="text-green-500">Date</span>();`
                        ]
                    }},
                    {title: "Getting Date Components:"},
                    {desc:"You can get various components of a date (such as year, month, day, hours, minutes, seconds, etc.) using Date object methods like `getFullYear()`, `getMonth()`, `getDate()`, "},
                    {b:"Example:"},
                    {code: {
                        type: "normal",
                        code: [
                            `<span class="text-blue-400">let</span> year = currentDate.<span class="text-yellow-300">getFullYear</span>();`,
`<span class="text-blue-400">let</span> month = currentDate.<span class="text-yellow-300">getMonth</span>();`,
`<span class="text-blue-400">let</span> day = currentDate.<span class="text-yellow-300">getDate</span>();`
                        ]
                    }},
                    {title:"Setting Date Components:"},
                    {desc:"You can format dates as strings using methods like `toLocaleDateString()`, `toLocaleTimeString()`, `toLocaleString()`, `toDateString()`, `toTimeString()`, `toString()`, etc. You can also use libraries like moment.js for more advanced date formatting."},
                    {code: {
                        type:"normal",
                        code:[
                            `<span class="text-blue-400">let</span> dateString = currentDate.<span class="text-yellow-300">toDateString</span>();`,
`<span class="text-blue-400">let</span> timeString = currentDate.<span class="text-yellow-300">toTimeString</span>();`,
                        ]
                    }},
                    {desc:"You can also manipulate the date and time using the various methods available on the Date object. For example, you can use the setDate() method to set the day of the month, and the setFullYear() method to set the year."},
                    {code: {
                        type: "normal",
                        code: [
                            `<span class="text-blue-400">let</span> date = <span class="text-blue-500">new</span> <span class="text-green-500">Date</span>(2023, 5, 10);`,
`date.<span class="text-yellow-300">setDate</span>(15);`,
`date.<span class="text-yellow-300">setFullYear</span>(2022);`,
`console.<span class="text-yellow-300">log</span>(date);`,
                        ]
                    }},
                    {desc:"Output: Sat Jan 15 2022 15:15:38 GMT+0530 (India Standard Time)"},
                    {title:"Comparing Dates:"},
                    {desc:"You can compare two dates using comparison operators (<, <=, >, >=) or methods like getTime() to get the number of milliseconds since the Unix epoch."},
                    {code: {
                        type: "normal",
                        code:[
                            `<span class="text-blue-400">let</span> futureDate = <span class="text-blue-500">new</span> <span class="text-green-500">Date</span>(2023, 5, 10);`,
`<span class="text-blue-400">if</span> (currentDate < futureDate) {`,
    `console.<span class="text-yellow-300">log</span>(<span class="text-[#d97706]">"Current date is before future date."</span>);`,
`}`,
                        ]
                    }},
                    {title:"Working with Timezones:"},
                    {desc:"JavaScript `Date` objects are always represented in the local time zone of the user's browser. You can convert dates between different time zones using libraries like `moment-timezone`."}
                ]
            },
            {
                title: "Math",
                content: [
                    {
                        desc:"In JavaScript, the `Math` object provides a set of properties and methods for performing mathematical operations. Here are some common properties and methods of the Math object:"
                    },
                    {code:[
                        `console.log(Math.random());`,
`// # Output: a random number between 0 and 1 (e.g. 0.3456)`,
                    ]},
                    {desc:"You can also use the Math.floor() function to round a number down to the nearest integer."},
                    {code: [
                        `console.log(Math.floor(3.8));`, `// # Output: 3`
                    ]},
                    {desc:"The Math.ceil() function rounds a number up to the nearest integer."},
                    {code: [`console.log(Math.ceil(3.2));`,`// # Output: 4`]},
                    {desc:"Another useful function of Math object is Math.max() and Math.min() which are used to find the maximum and minimum values in a set of numbers respectively."},
                    {code: [
                        `console.log(Math.max(3,5,7,9));`,
`// # Output: 9`,
`console.log(Math.min(3,5,7,9));`,
`// # Output: 3`,
                    ]},
                    {desc:"Math object also provides the most commonly used mathematical constants such as Math.PI for the value of pi, Math.E for the value of the mathematical constant e."},
                    {code:[
                        `console.log(Math.PI);`,
`// # Output: 3.141592653589793`,
`console.log(Math.E);`,
`// # Output: 2.718281828459045`,
                    ]},
                    {desc:"These are just a few of the many methods and properties provided by the `Math` object in JavaScript. The `Math` object is useful for performing various mathematical calculations and operations in your JavaScript code."}
                ]
            },
            {
                title: "Number",
                content: [
                    {desc:"In JavaScript, the `Number` object is a wrapper object that represents numeric data types. It provides various properties and methods for working with numbers. Here are some common properties and methods of the `Number` object:"},
                    {code: [
                        `console.log(Number("3.14"));`,
`// # Output: 3.14`,
`console.log(Number(true));`,
`// # Output: 1`,
                    ]},
                    {desc: "You can also use the parseInt() and parseFloat() methods to convert strings to integers and floating-point numbers, respectively."},
                    {code: [
                        `console.log(parseInt("3"));`,
`// # Output: 3`,
`console.log(parseFloat("3.14"));`,
`// # Output: 3.14`,
                    ]},
                    {desc:"The Number object also provides several properties that can be used to access the maximum and minimum values that can be represented by a number in JavaScript. These properties are Number.MAX_VALUE and Number.MIN_VALUE."},
                    {code: [
                        "console.log(Number.MAX_VALUE);",
"// # Output: 1.7976931348623157e+308",
"console.log(Number.MIN_VALUE);",
"// # Output: 5e-324"
                    ]},
                    {desc:"Another useful property of the Number object is Number.POSITIVE_INFINITY and Number.NEGATIVE_INFINITY which represents the positive and negative infinity respectively."},
                    {code: [
                        `console.log(1 / 0);`,
`// # Output: Infinity`,
`console.log(-1 / 0);`,
`// # Output: -Infinity`,
                    ]},
                    {desc:"The Number object also provides several methods for formatting numbers for display, such as the toFixed() method, which can be used to format a number with a specific number of decimal places."},
                    {code: [
                        `console.log((3.1415926535897932384626433832795).toFixed(2));`,`// # Output: "3.14"`
                    ]},
                    {desc:"These are just some of the properties and methods provided by the `Number` object in JavaScript. The `Number` object is useful for working with numeric data and performing various operations on numbers."}
                ]
            },
            {
                title:'Boolean',
                content:[
                    {
                        desc:"In JavaScript, the `Boolean` object is a wrapper object that represents a boolean value, which can be either `true` or `false`. It provides methods for converting other types of data into boolean values. Here are some common properties and methods of the `Boolean` object:"
                    },
                    {desc:"A boolean value can be created by using the Boolean() function or by assigning a value of true or false to a variable."},
                    {code:[
                        `var isTrue = new Boolean(1);`,
`console.log(isTrue); // # Output: true`,
`var isFalse = new Boolean(0);`,
`console.log(isFalse); // # Output: false`,
                    ]},
                    {desc:"You can also use the logical && operator to check if both expressions are true and the || operator to check if at least one of the expressions is true."},
                    {
                        code:[
                            `var x = true;`,
`var y = false;`,
`console.log(x && y); //# Output: false`,
`console.log(x || y); //# Output: true`,
                        ]
                    },
                    {desc:"You can also use the ! operator to invert a boolean value."},
                    {code: [
                        `console.log(!x); //# Output: false`,
`console.log(!y); //# Output: true`,
                    ]},
                    {desc:"The Boolean object also provides a valueOf() method that returns the primitive value of the Boolean object"},
                    {code: [
                        `var b = new Boolean(true);`,
`console.log(b.valueOf()); //# Output: true`,
                    ]},
                    {desc:"These are some of the properties and methods provided by the `Boolean` object in JavaScript. However, in practice, you would rarely use the `Boolean` object directly, as JavaScript automatically converts values to boolean when necessary. For example, in conditional statements or logical operations."}
                ]
            }
        ]
    },
    // fivth
    {
        title: "DOM & BOM",
        page: [
            {
                title: "Window Object",
                content: [
                    {desc:""}
                ]
            }
        ]
    }
]