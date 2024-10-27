<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-teal-200 rounded-t-xl p-4">
      <img src="/go/logo.svg" alt="Go Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-blue-600">Building Web Application with Go</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Welcome to the "Building Web Applications with Go" course! This course delves into the essentials of developing robust and efficient web applications using Go. Leveraging Go's simplicity and powerful standard library, you'll learn how to build web servers, handle routing, manage templates, and ensure the security and performance of your applications. By focusing on building from scratch, you'll gain a deep understanding of Go's capabilities and best practices for web development.
      </p>

      <!-- Why Build from Scratch in Go -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Build from Scratch in Go</h2>
      <p class="text-base md:text-lg mb-4">
        Go is renowned for its simplicity and efficiency, making it an excellent choice for web development. Unlike some other languages that rely heavily on numerous third-party libraries and frameworks, Go encourages developers to build solutions from the ground up. This approach fosters a deeper understanding of how web applications function, promotes better performance optimization, and results in cleaner, more maintainable code.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-Life Analogy:</strong> Building a web application in Go is like constructing a custom-built house. Instead of using pre-fabricated components, you design and assemble each part yourself, ensuring that every element fits perfectly and serves its intended purpose efficiently.
      </p>

      <!-- Setting Up the Go Web Server -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Setting Up the Go Web Server</h2>
      <p class="text-base md:text-lg mb-4">
        At the heart of any web application lies the web server. Go's `net/http` package provides a robust foundation for building web servers without the need for external frameworks. This section explores the essentials of setting up a basic HTTP server in Go.
      </p>

      <!-- Common Server Concepts Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Component</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example Use Case</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">HTTP Server</td>
          <td class="border px-4 py-2">Handles incoming HTTP requests and sends appropriate responses.</td>
          <td class="border px-4 py-2">Serving web pages to users visiting your site.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Handlers</td>
          <td class="border px-4 py-2">Functions that process specific routes and HTTP methods.</td>
          <td class="border px-4 py-2">Processing form submissions or API requests.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Routes</td>
          <td class="border px-4 py-2">Define URL patterns and associate them with handlers.</td>
          <td class="border px-4 py-2">Directing `/home` to the home page handler.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Middleware</td>
          <td class="border px-4 py-2">Functions that intercept requests for tasks like logging or authentication.</td>
          <td class="border px-4 py-2">Logging each incoming request for monitoring purposes.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Real-Life Analogy</td>
          <td class="border px-4 py-2">Comparing the server to a receptionist handling incoming guests.</td>
          <td class="border px-4 py-2">Managing visitor requests and directing them to the appropriate departments.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 1: Creating a Basic HTTP Server -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 1: Creating a Basic HTTP Server</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to set up a simple HTTP server using Go's `net/http` package. It showcases the creation of a server, defining handlers, and starting the server to listen for incoming requests.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &amp;iostream&amp;
#include &amp;net/http&amp;
#include &amp;string&amp;

using namespace std;

// Handler function for the root route
void rootHandler(http::Request& req, http::Response& res) {
    res.set_status(http::Status::OK);
    res.set_content("Welcome to the Go Web Server!", "text/plain");
}

int main() {
    // Create a new server
    http::Server server;

    // Register the root handler
    server.Get("/", rootHandler);

    // Start the server on port 8080
    cout &amp;&amp; "Starting server on port 8080..." &amp;&amp; endl;
    server.Listen(":8080");

    return 0;
}</code></pre>

      <!-- Routing and Handling Requests -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Routing and Handling Requests</h2>
      <p class="text-base md:text-lg mb-4">
        Efficient routing is essential for directing incoming requests to the appropriate handlers. Go's `net/http` package allows you to define routes and associate them with specific handler functions, enabling your web application to respond correctly to various URL patterns and HTTP methods.
      </p>

      <!-- Routing Concepts Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Concept</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example Use Case</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">URL Patterns</td>
          <td class="border px-4 py-2">Defines the structure of URLs your application will handle.</td>
          <td class="border px-4 py-2">Handling `/about` and `/contact` pages.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">HTTP Methods</td>
          <td class="border px-4 py-2">Specifies the type of action to perform (GET, POST, PUT, DELETE).</td>
          <td class="border px-4 py-2">Using GET for fetching data and POST for submitting forms.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Handler Functions</td>
          <td class="border px-4 py-2">Functions that process incoming requests and generate responses.</td>
          <td class="border px-4 py-2">Processing user login or displaying user profiles.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Dynamic Routing</td>
          <td class="border px-4 py-2">Handling routes with variable segments.</td>
          <td class="border px-4 py-2">Managing routes like `/user/{id}` to display user-specific information.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Real-Life Example</td>
          <td class="border px-4 py-2">Directing visitors to different departments based on their requests.</td>
          <td class="border px-4 py-2">Routing `/sales` to the sales department handler and `/hr` to the HR department handler.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 2: Handling Different Routes -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 2: Handling Different Routes</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to define multiple routes and associate them with specific handler functions, enabling your web server to respond differently based on the requested URL.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &amp;iostream&amp;
#include &amp;net/http&amp;
#include &amp;string&amp;

using namespace std;

// Handler for the home route
void homeHandler(http::Request& req, http::Response& res) {
    res.set_status(http::Status::OK);
    res.set_content("Welcome to the Home Page!", "text/plain");
}

// Handler for the about route
void aboutHandler(http::Request& req, http::Response& res) {
    res.set_status(http::Status::OK);
    res.set_content("About Us Page", "text/plain");
}

int main() {
    http::Server server;

    // Register handlers for different routes
    server.Get("/", homeHandler);
    server.Get("/about", aboutHandler);

    cout &amp;&amp; "Server is running on port 8080..." &amp;&amp; endl;
    server.Listen(":8080");

    return 0;
}</code></pre>

      <!-- Templating for Dynamic Content -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Templating for Dynamic Content</h2>
      <p class="text-base md:text-lg mb-4">
        Dynamic content is a cornerstone of modern web applications, allowing you to present personalized and up-to-date information to users. Go's `html/template` package facilitates the integration of HTML templates with Go data structures, enabling the rendering of dynamic content based on user interactions and data changes.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-Life Analogy:</strong> Think of templates as customizable signs in a store that change based on the time of day or current promotions.
      </p>

      <!-- Templating Concepts Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Concept</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example Use Case</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">HTML Templates</td>
          <td class="border px-4 py-2">Files that define the structure of web pages with placeholders for dynamic data.</td>
          <td class="border px-4 py-2">Displaying user profiles with personalized information.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Data Binding</td>
          <td class="border px-4 py-2">Passing data from Go to the template to render dynamic content.</td>
          <td class="border px-4 py-2">Showing the current date and time on the homepage.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Template Functions</td>
          <td class="border px-4 py-2">Custom functions that can be used within templates to manipulate data.</td>
          <td class="border px-4 py-2">Formatting dates or strings before displaying them.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Conditional Rendering</td>
          <td class="border px-4 py-2">Displaying content based on certain conditions.</td>
          <td class="border px-4 py-2">Showing different navigation links based on user authentication status.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Real-Life Example</td>
          <td class="border px-4 py-2">Personalized signage in a store that changes based on customer preferences.</td>
          <td class="border px-4 py-2">Displaying a welcome message with the user's name on the dashboard.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 3: Using HTML Templates -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 3: Using HTML Templates</h3>
      <p class="text-base md:text-lg mb-4">
        This example illustrates how to integrate HTML templates with Go, enabling the rendering of dynamic content based on data passed from the server.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &amp;iostream&amp;
#include &amp;net/http&amp;
#include &amp;html/template&amp;
#include &amp;string&amp;

using namespace std;

// TemplateData struct to hold dynamic data
struct TemplateData {
    string Title;
    string Message;
};

// Handler function using templates
void templateHandler(http::Request& req, http::Response& res) {
    // Parse the template file
    template&lt;class T&gt; class htmlTemplate : public template::Template {
    public:
        htmlTemplate(const string &amp;filename) {
            template::ParseFiles(filename);
        }
    };

    htmlTemplate&lt;TemplateData&gt; tmpl("templates/welcome.html");

    // Prepare data
    TemplateData data;
    data.Title = "Welcome Page";
    data.Message = "Hello, Go Web Developer!";

    // Execute the template with data
    string output;
    tmpl.Execute(&amp;output, data);

    // Set the response
    res.set_status(http::Status::OK);
    res.set_content(output, "text/html");
}

int main() {
    http::Server server;

    // Register the template handler
    server.Get("/welcome", templateHandler);

    cout &amp;&amp; "Server is running on port 8080..." &amp;&amp; endl;
    server.Listen(":8080");

    return 0;
}</code></pre>

      <!-- Serving Static Files -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Serving Static Files</h2>
      <p class="text-base md:text-lg mb-4">
        Static files such as CSS, JavaScript, and images are integral to modern web applications. Go provides mechanisms to efficiently serve these assets, ensuring that your web pages are styled appropriately and interactive elements function seamlessly.
      </p>

      <!-- Static Files Concepts Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Component</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example Use Case</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">CSS Files</td>
          <td class="border px-4 py-2">Define the styling and layout of web pages.</td>
          <td class="border px-4 py-2">Applying styles to buttons and navigation bars.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">JavaScript Files</td>
          <td class="border px-4 py-2">Add interactivity and dynamic behavior to web pages.</td>
          <td class="border px-4 py-2">Handling form validations and user interactions.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Images and Media</td>
          <td class="border px-4 py-2">Visual content that enhances the user experience.</td>
          <td class="border px-4 py-2">Displaying logos, banners, and product images.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Static File Handlers</td>
          <td class="border px-4 py-2">Functions that serve static assets to clients.</td>
          <td class="border px-4 py-2">Serving CSS and JavaScript files for the frontend.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Real-Life Example</td>
          <td class="border px-4 py-2">Managing inventory and displays in a retail store.</td>
          <td class="border px-4 py-2">Organizing and presenting promotional materials and signage.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 4: Serving Static Files -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 4: Serving Static Files</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to serve static files such as CSS and JavaScript using Go's `net/http` package. It ensures that your web application can deliver styled and interactive web pages to users.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &amp;iostream&amp;
#include &amp;net/http&amp;
#include &amp;path/filepath&amp;

using namespace std;

// Handler for serving static files
void staticHandler(http::Request& req, http::Response& res) {
    string filePath = filepath::Join("static", req.URL.Path);
    res.set_status(http::Status::OK);
    res.set_content_file(filePath, "text/css"); // Adjust MIME type as needed
}

int main() {
    http::Server server;

    // Serve CSS files from /static/css/
    server.Get("/static/css/*", staticHandler);

    cout &amp;&amp; "Server is running on port 8080..." &amp;&amp; endl;
    server.Listen(":8080");

    return 0;
}</code></pre>

      <!-- Middleware in Go Web Applications -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Middleware in Go Web Applications</h2>
      <p class="text-base md:text-lg mb-4">
        Middleware functions act as intermediaries that process incoming requests before they reach your handlers. They are essential for implementing functionalities like logging, authentication, and error handling, ensuring that your web application operates smoothly and securely.
      </p>

      <!-- Middleware Concepts Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Component</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example Use Case</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Logging Middleware</td>
          <td class="border px-4 py-2">Logs details of each incoming request for monitoring and debugging purposes.</td>
          <td class="border px-4 py-2">Recording the time and path of each request.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Authentication Middleware</td>
          <td class="border px-4 py-2">Verifies user credentials before allowing access to protected routes.</td>
          <td class="border px-4 py-2">Ensuring only logged-in users can access the dashboard.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Error Handling Middleware</td>
          <td class="border px-4 py-2">Catches and processes errors that occur during request handling.</td>
          <td class="border px-4 py-2">Displaying user-friendly error messages instead of raw error data.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Request Validation Middleware</td>
          <td class="border px-4 py-2">Validates incoming request data to ensure it meets required criteria.</td>
          <td class="border px-4 py-2">Checking if all necessary form fields are filled out before processing.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Real-Life Analogy</td>
          <td class="border px-4 py-2">Middleware acts like gatekeepers that ensure only authorized and well-formed requests proceed to their destinations.</td>
          <td class="border px-4 py-2">Security personnel verifying IDs before allowing entry into a restricted area.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 5: Implementing Logging Middleware -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 5: Implementing Logging Middleware</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to create a simple logging middleware in Go that logs the details of each incoming HTTP request. Middleware enhances the functionality of your web application without cluttering your handler functions.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &amp;iostream&amp;
#include &amp;net/http&amp;
#include &amp;time&amp;

using namespace std;

// Middleware for logging
void loggingMiddleware(http::Request& req, http::Response& res, function&lt;void()> next) {
    // Log the request details
    time_t now = time(0);
    cout &amp;&amp; "Received request at " &amp;&amp; ctime(&amp;now) &amp;&amp; "Path: " &amp;&amp; req.URL.Path &amp;&amp; endl;

    // Proceed to the next handler
    next();
}

// Handler for the home route
void homeHandler(http::Request& req, http::Response& res) {
    res.set_status(http::Status::OK);
    res.set_content("Welcome to the Home Page!", "text/plain");
}

int main() {
    http::Server server;

    // Register the home handler with logging middleware
    server.Get("/", [&loggingMiddleware](http::Request& req, http::Response& res) {
        loggingMiddleware(req, res, [&homeHandler, &req, &res]() {
            homeHandler(req, res);
        });
    });

    cout &amp;&amp; "Server is running on port 8080..." &amp;&amp; endl;
    server.Listen(":8080");

    return 0;
}</code></pre>

      <!-- Working with Databases -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Working with Databases</h2>
      <p class="text-base md:text-lg mb-4">
        Databases are essential for storing and managing data in web applications. Go provides powerful tools for interacting with various types of databases, enabling you to perform operations like creating, reading, updating, and deleting records efficiently.
      </p>

      <!-- Database Concepts Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Concept</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example Use Case</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">SQL vs. NoSQL</td>
          <td class="border px-4 py-2">Choosing between relational databases (SQL) and non-relational databases (NoSQL) based on application needs.</td>
          <td class="border px-4 py-2">Using PostgreSQL for complex queries and MySQL for web applications.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">database/sql Package</td>
          <td class="border px-4 py-2">Go's standard library package for interacting with SQL databases.</td>
          <td class="border px-4 py-2">Connecting to a PostgreSQL database and executing queries.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">CRUD Operations</td>
          <td class="border px-4 py-2">Creating, Reading, Updating, and Deleting records in the database.</td>
          <td class="border px-4 py-2">Managing user profiles in a web application.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Prepared Statements</td>
          <td class="border px-4 py-2">Precompiling SQL statements to enhance performance and prevent SQL injection.</td>
          <td class="border px-4 py-2">Inserting user data securely into the database.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Real-Life Example</td>
          <td class="border px-4 py-2">Managing customer records in a CRM system.</td>
          <td class="border px-4 py-2">Storing and retrieving customer information for a sales team.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 6: Connecting to a Database -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 6: Connecting to a Database</h3>
      <p class="text-base md:text-lg mb-4">
        This example illustrates how to connect to a PostgreSQL database using Go's `database/sql` package. It covers establishing a connection, preparing statements, and executing queries to perform CRUD operations.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &amp;iostream&amp;
#include &amp;database/sql&amp;
#include &amp;_cgo_export.h&amp; // Adjust based on your setup

using namespace std;
using namespace sql;

// Function to connect to the database
unique_ptr&lt;Connection&gt; connectDB() {
    string dsn = "user=yourusername password=yourpassword dbname=yourdb sslmode=disable";
    unique_ptr&lt;Connection&gt; db(new Connection(dsn));
    if(db-&gt;is_connected()) {
        cout &amp;&amp; "Connected to the database successfully." &amp;&amp; endl;
    }
    return db;
}

// Function to create a new user
void createUser(Connection &amp;db, const string &amp;name, const string &amp;email) {
    PreparedStatement stmt = db.Prepare("INSERT INTO users (name, email) VALUES (?, ?)");
    stmt.Bind(1, name);
    stmt.Bind(2, email);
    stmt.Execute();
    cout &amp;&amp; "User created: " &amp;&amp; name &amp;&amp; endl;
}

int main() {
    unique_ptr&lt;Connection&gt; db = connectDB();
    createUser(*db, "Alice", "alice@example.com");
    return 0;
}</code></pre>

      <!-- Security Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Security Best Practices</h2>
      <p class="text-base md:text-lg mb-4">
        Ensuring the security of your web application is paramount. This section covers essential security practices, including authentication, input validation, and secure communication, to protect your application from common vulnerabilities.
      </p>

      <!-- Security Concepts Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Concept</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example Use Case</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Authentication</td>
          <td class="border px-4 py-2">Verifying the identity of users accessing your application.</td>
          <td class="border px-4 py-2">Implementing user login and registration systems.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Authorization</td>
          <td class="border px-4 py-2">Determining what authenticated users are allowed to do.</td>
          <td class="border px-4 py-2">Restricting access to admin panels for authorized personnel only.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Input Validation</td>
          <td class="border px-4 py-2">Ensuring that user-provided data meets expected formats and constraints.</td>
          <td class="border px-4 py-2">Validating email addresses during user registration.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">HTTPS and TLS</td>
          <td class="border px-4 py-2">Securing data transmission between the client and server.</td>
          <td class="border px-4 py-2">Encrypting user data to protect against eavesdropping.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Real-Life Example</td>
          <td class="border px-4 py-2">Ensuring secure access to sensitive areas in a building.</td>
          <td class="border px-4 py-2">Implementing security checks to prevent unauthorized entry.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 7: Implementing Authentication -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 7: Implementing Authentication</h3>
      <p class="text-base md:text-lg mb-4">
        This example showcases a simple authentication mechanism using Go. It covers user login functionality, password verification, and session management to ensure that only authorized users can access protected routes.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &amp;iostream&amp;
#include &amp;net/http&amp;
#include &amp;html/template&amp;
#include &amp;strings&amp;

using namespace std;

// Struct to hold user credentials
struct Credentials {
    string Username;
    string Password;
};

// Handler for the login page
void loginHandler(http::Request& req, http::Response& res) {
    if(req.Method == "GET") {
        // Render the login template
        template::Template tmpl;
        tmpl.ParseFiles("templates/login.html");
        string output;
        tmpl.Execute(&amp;output, nullptr);
        res.set_status(http::Status::OK);
        res.set_content(output, "text/html");
    }
    else if(req.Method == "POST") {
        // Parse form data
        Credentials creds;
        creds.Username = req.Form["username"];
        creds.Password = req.Form["password"];

        // Simple authentication logic (for demonstration purposes)
        if(creds.Username == "admin" && creds.Password == "password") {
            res.set_status(http::Status::OK);
            res.set_content("Login Successful!", "text/plain");
        }
        else {
            res.set_status(http::Status::Unauthorized);
            res.set_content("Invalid Credentials.", "text/plain");
        }
    }
}

int main() {
    http::Server server;

    // Register the login handler
    server.Get("/login", loginHandler);
    server.Post("/login", loginHandler);

    cout &amp;&amp; "Server is running on port 8080..." &amp;&amp; endl;
    server.Listen(":8080");

    return 0;
}</code></pre>

      <!-- Conclusion and Next Steps -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion and Next Steps</h2>
      <p class="text-base md:text-lg mb-4">
        Congratulations! You've now covered the essential aspects of building web applications with Go. From setting up a basic web server and handling routes to managing databases and implementing security best practices, you've gained the knowledge to develop robust and efficient web applications using Go.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Why and When to Use Go for Web Development:</strong> Go's simplicity, performance, and strong concurrency support make it an excellent choice for developing scalable web applications. Whether you're building RESTful APIs, real-time applications, or complex web services, Go provides the tools and efficiency needed to deliver high-quality software.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next course, we'll delve deeper into specialized topics such as deploying Go applications, advanced testing strategies, and optimizing performance for large-scale projects. Stay tuned to continue enhancing your Go web development skills!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuildingWebAppsWithGo',
};
</script>

<style scoped>
pre {
  white-space: pre-wrap; /* Ensures text wrapping for long lines */
  overflow-x: auto;      /* Adds horizontal scroll for long code lines */
}

@media (max-width: 768px) {
  pre, code {
    font-size: 0.5rem; /* Smaller font size for mobile devices */
  }
}

h2, p , h1, h3, h4{
  font-family: "Roboto Condensed", sans-serif;
}

a {
  font-family: "JetBrains Mono", sans-serif;
}

</style>
