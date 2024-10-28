<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-purple-950 rounded-t-xl p-4">
      <img src="/csharp/logo.svg" alt="C# Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">LINQ in C#</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Language Integrated Query (LINQ) is a powerful feature in C# that revolutionizes the way developers interact with data. By integrating query capabilities directly into the C# language, LINQ simplifies data manipulation and querying, making code more readable, concise, and expressive. Whether you're working with in-memory collections, XML data, or databases, LINQ provides a unified and efficient approach to handling data. This section delves into the fundamentals of LINQ in C#, covering its syntax, query expressions, essential methods, and various implementations like LINQ to Objects, LINQ to XML, and LINQ to SQL. Through real-world analogies and practical code examples, you'll gain a thorough understanding of how LINQ can enhance your data querying and manipulation tasks.
      </p>

      <!-- Understanding LINQ -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Understanding LINQ</h2>
      <p class="text-base md:text-lg mb-4">
        LINQ stands for Language Integrated Query, and it represents a set of technologies based on the integration of query capabilities directly into the C# language. LINQ allows developers to write queries against various data sources using a consistent syntax, whether the data resides in-memory, in XML documents, or in relational databases. By bridging the gap between programming languages and data, LINQ streamlines data access and manipulation, reducing the need for disparate querying languages and enhancing productivity.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-World Analogy:</strong> Imagine you're a librarian with a vast collection of books (data). Without a systematic approach, finding specific books based on various criteria (author, genre, publication year) would be tedious and inefficient. LINQ acts as a sophisticated cataloging system, allowing you to effortlessly query and retrieve books based on your requirements, regardless of their arrangement or type.
      </p>

      <!-- How LINQ Simplifies Data Querying -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">How LINQ Simplifies Data Querying</h2>
      <p class="text-base md:text-lg mb-4">
        Traditional data querying in C# often involves using loops, conditional statements, and various collection methods, which can lead to verbose and less readable code. LINQ introduces a declarative approach, enabling developers to specify what data they want to retrieve rather than how to retrieve it. This leads to more concise, readable, and maintainable code.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Key Benefits of LINQ:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Consistency:</strong> A unified syntax for querying different data sources.</li>
        <li><strong>Readability:</strong> More expressive and concise queries that are easier to understand.</li>
        <li><strong>Type Safety:</strong> Compile-time checking of queries, reducing runtime errors.</li>
        <li><strong>IntelliSense Support:</strong> Enhanced developer experience with IDE support.</li>
        <li><strong>Integration:</strong> Seamless integration with C# language features like lambda expressions and anonymous types.</li>
      </ul>

      <!-- LINQ Syntax and Query Expressions -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">LINQ Syntax and Query Expressions</h2>
      <p class="text-base md:text-lg mb-4">
        LINQ offers two primary syntaxes for writing queries: query syntax and method syntax. Both syntaxes are functionally equivalent, allowing developers to choose the style that best fits their preference and the specific scenario.
      </p>

      <!-- Query Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Query Syntax</h3>
      <p class="text-base md:text-lg mb-4">
        Query syntax resembles SQL-like statements, making it intuitive for those familiar with traditional database querying. It provides a declarative way to specify data operations such as filtering, ordering, grouping, and joining.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Retrieving Even Numbers from a List</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using LINQ Query Syntax to retrieve even numbers
using System;
using System.Collections.Generic;
using System.Linq;

public class LINQQuerySyntaxExample
{
    public static void Main(string[] args)
    {
        List&lt;int&gt; numbers = new List&lt;int&gt; { 1, 2, 3, 4, 5, 6 };

        var evenNumbers = from num in numbers
                          where num % 2 == 0
                          select num;

        Console.WriteLine("Even Numbers:");
        foreach (int number in evenNumbers)
        {
            Console.WriteLine(number);
        }
        // Output:
        // Even Numbers:
        // 2
        // 4
        // 6
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the query syntax is used to filter out even numbers from a list. The <code>from</code>, <code>where</code>, and <code>select</code> clauses provide a clear and readable way to specify the desired data.
      </p>

      <!-- Method Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Method Syntax</h3>
      <p class="text-base md:text-lg mb-4">
        Method syntax, also known as fluent syntax, leverages extension methods to chain data operations. It is often more concise and flexible, especially when combining multiple operations or using lambda expressions.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Retrieving Even Numbers from a List</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using LINQ Method Syntax to retrieve even numbers
using System;
using System.Collections.Generic;
using System.Linq;

public class LINQMethodSyntaxExample
{
    public static void Main(string[] args)
    {
        List&lt;int&gt; numbers = new List&lt;int&gt; { 1, 2, 3, 4, 5, 6 };

        var evenNumbers = numbers.Where(num => num % 2 == 0);

        Console.WriteLine("Even Numbers:");
        foreach (int number in evenNumbers)
        {
            Console.WriteLine(number);
        }
        // Output:
        // Even Numbers:
        // 2
        // 4
        // 6
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        Here, the <code>Where</code> extension method is used with a lambda expression to filter even numbers. Method syntax allows for chaining multiple operations, enhancing flexibility and reducing code verbosity.
      </p>

      <!-- LINQ Methods: Select, Where, OrderBy, GroupBy -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">LINQ Methods: Select, Where, OrderBy, GroupBy</h2>
      <p class="text-base md:text-lg mb-4">
        LINQ provides a rich set of methods that facilitate various data operations. Among the most commonly used methods are <code>Select</code>, <code>Where</code>, <code>OrderBy</code>, and <code>GroupBy</code>. Understanding these methods is essential for effective data manipulation and querying.
      </p>

      <!-- Select -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Select</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>Select</code> method projects each element of a collection into a new form. It is primarily used for transforming data, such as extracting specific properties or performing calculations.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Projecting Names from a List of Students</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using Select to project names from a list of students
using System;
using System.Collections.Generic;
using System.Linq;

public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
}

public class LINQSelectExample
{
    public static void Main(string[] args)
    {
        List&lt;Student&gt; students = new List&lt;Student&gt;
        {
            new Student { Name = "Alice", Age = 24 },
            new Student { Name = "Bob", Age = 22 },
            new Student { Name = "Charlie", Age = 23 }
        };

        var studentNames = students.Select(s => s.Name);

        Console.WriteLine("Student Names:");
        foreach (string name in studentNames)
        {
            Console.WriteLine(name);
        }
        // Output:
        // Student Names:
        // Alice
        // Bob
        // Charlie
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the <code>Select</code> method is used to extract the names of students from a list of <code>Student</code> objects. The method projects each <code>Student</code> into a string containing only the <code>Name</code> property.
      </p>

      <!-- Where -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Where</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>Where</code> method filters a collection based on a specified condition. It is used to select elements that satisfy particular criteria, enabling targeted data retrieval.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Filtering Students Older Than 22</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using Where to filter students older than 22
using System;
using System.Collections.Generic;
using System.Linq;

public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
}

public class LINQWhereExample
{
    public static void Main(string[] args)
    {
        List&lt;Student&gt; students = new List&lt;Student&gt;
        {
            new Student { Name = "Alice", Age = 24 },
            new Student { Name = "Bob", Age = 22 },
            new Student { Name = "Charlie", Age = 23 }
        };

        var olderStudents = students.Where(s => s.Age > 22);

        Console.WriteLine("Students Older Than 22:");
        foreach (Student student in olderStudents)
        {
            Console.WriteLine($"{student.Name}, Age: {student.Age}");
        }
        // Output:
        // Students Older Than 22:
        // Alice, Age: 24
        // Charlie, Age: 23
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        Here, the <code>Where</code> method filters the list of students to include only those whose <code>Age</code> property is greater than 22. This selective retrieval simplifies data processing by focusing only on relevant elements.
      </p>

      <!-- OrderBy -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">OrderBy</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>OrderBy</code> method sorts a collection in ascending order based on a specified key. Its counterpart, <code>OrderByDescending</code>, sorts in descending order. Sorting is fundamental for organizing data and preparing it for further processing or presentation.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Sorting Students by Age</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using OrderBy to sort students by age
using System;
using System.Collections.Generic;
using System.Linq;

public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
}

public class LINQOrderByExample
{
    public static void Main(string[] args)
    {
        List&lt;Student&gt; students = new List&lt;Student&gt;
        {
            new Student { Name = "Alice", Age = 24 },
            new Student { Name = "Bob", Age = 22 },
            new Student { Name = "Charlie", Age = 23 }
        };

        var sortedStudents = students.OrderBy(s => s.Age);

        Console.WriteLine("Students Sorted by Age (Ascending):");
        foreach (Student student in sortedStudents)
        {
            Console.WriteLine($"{student.Name}, Age: {student.Age}");
        }
        // Output:
        // Students Sorted by Age (Ascending):
        // Bob, Age: 22
        // Charlie, Age: 23
        // Alice, Age: 24
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the <code>OrderBy</code> method sorts the list of students in ascending order based on their age. The method takes a lambda expression that specifies the key (in this case, <code>Age</code>) to sort by.
      </p>

      <!-- GroupBy -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">GroupBy</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>GroupBy</code> method groups elements in a collection based on a specified key. It is useful for organizing data into categories, facilitating aggregated operations, and enhancing data analysis.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Grouping Students by Age</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using GroupBy to group students by age
using System;
using System.Collections.Generic;
using System.Linq;

public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
}

public class LINQGroupByExample
{
    public static void Main(string[] args)
    {
        List&lt;Student&gt; students = new List&lt;Student&gt;
        {
            new Student { Name = "Alice", Age = 24 },
            new Student { Name = "Bob", Age = 22 },
            new Student { Name = "Charlie", Age = 23 },
            new Student { Name = "David", Age = 22 },
            new Student { Name = "Eve", Age = 24 }
        };

        var groupedByAge = students.GroupBy(s => s.Age);

        Console.WriteLine("Students Grouped by Age:");
        foreach (var group in groupedByAge)
        {
            Console.WriteLine($"Age: {group.Key}");
            foreach (Student student in group)
            {
                Console.WriteLine($"\t{student.Name}");
            }
        }
        // Output:
        // Students Grouped by Age:
        // Age: 24
        //     Alice
        //     Eve
        // Age: 22
        //     Bob
        //     David
        // Age: 23
        //     Charlie
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        This example uses the <code>GroupBy</code> method to categorize students based on their age. The result is a collection of groups, each containing students who share the same age, allowing for organized data representation.
      </p>

      <!-- LINQ to Objects, LINQ to XML, LINQ to SQL -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">LINQ to Objects, LINQ to XML, LINQ to SQL</h2>
      <p class="text-base md:text-lg mb-4">
        LINQ's versatility extends to various data sources, enabling seamless querying and manipulation across different types of data. The three primary implementations are LINQ to Objects, LINQ to XML, and LINQ to SQL, each catering to specific data interaction needs.
      </p>

      <!-- LINQ to Objects -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">LINQ to Objects</h3>
      <p class="text-base md:text-lg mb-4">
        LINQ to Objects allows querying in-memory collections such as arrays, lists, and other enumerable types. It leverages LINQ's powerful querying capabilities to perform operations directly on objects held in memory.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Filtering and Selecting Data from a List</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using LINQ to Objects to filter and select data
using System;
using System.Collections.Generic;
using System.Linq;

public class Product
{
    public string Name { get; set; }
    public double Price { get; set; }
}

public class LINQToObjectsExample
{
    public static void Main(string[] args)
    {
        List&lt;Product&gt; products = new List&lt;Product&gt;
        {
            new Product { Name = "Laptop", Price = 1200 },
            new Product { Name = "Smartphone", Price = 800 },
            new Product { Name = "Tablet", Price = 500 },
            new Product { Name = "Monitor", Price = 300 },
            new Product { Name = "Keyboard", Price = 100 }
        };

        // Using LINQ query syntax to find products with price > 500
        var expensiveProducts = from p in products
                                where p.Price > 500
                                select p.Name;

        Console.WriteLine("Expensive Products (Price > 500):");
        foreach (string productName in expensiveProducts)
        {
            Console.WriteLine(productName);
        }
        // Output:
        // Expensive Products (Price > 500):
        // Laptop
        // Smartphone
        // Tablet

        // Using LINQ method syntax to order products by price descending
        var orderedProducts = products.OrderByDescending(p => p.Price);

        Console.WriteLine("\nProducts Ordered by Price (Descending):");
        foreach (Product product in orderedProducts)
        {
            Console.WriteLine($"{product.Name}: {product.Price}");
        }
        // Output:
        // Products Ordered by Price (Descending):
        // Laptop: 1200
        // Smartphone: 800
        // Tablet: 500
        // Monitor: 300
        // Keyboard: 100
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, LINQ to Objects is used to filter products based on their price and to order them in descending order. This demonstrates how LINQ can simplify data manipulation tasks on in-memory collections.
      </p>

      <!-- LINQ to XML -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">LINQ to XML</h3>
      <p class="text-base md:text-lg mb-4">
        LINQ to XML provides an easy and efficient way to query and manipulate XML data. It leverages LINQ's querying capabilities to interact with XML documents, enabling developers to perform operations such as searching, filtering, and transforming XML content.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Querying an XML Document</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using LINQ to XML to query an XML document
using System;
using System.Linq;
using System.Xml.Linq;

public class LINQToXMLExample
{
    public static void Main(string[] args)
    {
        string xmlData = @"
        <Books>
            <Book>
                <Title>C# in Depth</Title>
                <Author>Jon Skeet</Author>
                <Price>45.99</Price>
            </Book>
            <Book>
                <Title>Pro LINQ</Title>
                <Author>Joseph Rattz</Author>
                <Price>39.99</Price>
            </Book>
            <Book>
                <Title>LINQ Pocket Reference</Title>
                <Author>Joseph Albahari</Author>
                <Price>19.99</Price>
            </Book>
        </Books>";

        XDocument doc = XDocument.Parse(xmlData);

        // Using LINQ query syntax to select books with price > 30
        var expensiveBooks = from book in doc.Descendants("Book")
                             where (double)book.Element("Price") > 30
                             select new
                             {
                                 Title = book.Element("Title").Value,
                                 Author = book.Element("Author").Value,
                                 Price = book.Element("Price").Value
                             };

        Console.WriteLine("Books Priced Above $30:");
        foreach (var book in expensiveBooks)
        {
            Console.WriteLine($"Title: {book.Title}, Author: {book.Author}, Price: ${book.Price}");
        }
        // Output:
        // Books Priced Above $30:
        // Title: C# in Depth, Author: Jon Skeet, Price: $45.99
        // Title: Pro LINQ, Author: Joseph Rattz, Price: $39.99
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        This example demonstrates how LINQ to XML can be used to parse and query XML data. The LINQ query filters books based on their price and projects the desired properties into an anonymous type for display.
      </p>

      <!-- LINQ to SQL -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">LINQ to SQL</h3>
      <p class="text-base md:text-lg mb-4">
        LINQ to SQL allows developers to interact with relational databases using LINQ queries. It provides an object-relational mapping (ORM) framework, enabling seamless translation of LINQ queries into SQL commands. This integration simplifies database operations, making it easier to perform CRUD (Create, Read, Update, Delete) operations without writing extensive SQL code.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Querying a Database with LINQ to SQL</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using LINQ to SQL to query a database
using System;
using System.Linq;
using System.Data.Linq;
using System.Data.Linq.Mapping;

[Table(Name = "Employees")]
public class Employee
{
    [Column(IsPrimaryKey = true, IsDbGenerated = true)]
    public int EmployeeID { get; set; }

    [Column]
    public string Name { get; set; }

    [Column]
    public string Department { get; set; }

    [Column]
    public double Salary { get; set; }
}

public class DataContextExample : DataContext
{
    public Table&lt;Employee&gt; Employees;

    public DataContextExample(string connection) : base(connection) { }
}

public class LINQToSQLExample
{
    public static void Main(string[] args)
    {
        string connectionString = "Data Source=YourServerName;Initial Catalog=YourDatabaseName;Integrated Security=True";
        DataContextExample db = new DataContextExample(connectionString);

        // Using LINQ query syntax to retrieve employees in IT department
        var itEmployees = from emp in db.Employees
                          where emp.Department == "IT"
                          select emp;

        Console.WriteLine("IT Department Employees:");
        foreach (Employee emp in itEmployees)
        {
            Console.WriteLine($"ID: {emp.EmployeeID}, Name: {emp.Name}, Salary: {emp.Salary}");
        }

        // Using LINQ method syntax to increase salary by 10% for IT employees
        var updatedEmployees = db.Employees.Where(emp => emp.Department == "IT");
        foreach (var emp in updatedEmployees)
        {
            emp.Salary *= 1.10;
        }
        db.SubmitChanges();

        Console.WriteLine("\nUpdated Salaries for IT Department Employees:");
        foreach (Employee emp in itEmployees)
        {
            Console.WriteLine($"ID: {emp.EmployeeID}, Name: {emp.Name}, New Salary: {emp.Salary}");
        }
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        This example demonstrates how LINQ to SQL can be used to interact with a relational database. The <code>Employee</code> class is mapped to the "Employees" table in the database using attributes. LINQ queries are then used to retrieve and update employee records based on specific criteria, such as department.
      </p>

      <!-- Code Examples: Filtering and Transforming Data Using LINQ Queries -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Code Examples: Filtering and Transforming Data Using LINQ Queries</h2>
      <p class="text-base md:text-lg mb-4">
        To further illustrate how LINQ can be leveraged to manipulate collections, let's explore several practical examples that involve filtering and transforming data using both query and method syntaxes.
      </p>

      <!-- Example 1: Filtering and Selecting with LINQ -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 1: Filtering and Selecting with LINQ</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to filter a list of employees based on their department and select specific properties using LINQ.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Filtering and Selecting Employees with LINQ
using System;
using System.Collections.Generic;
using System.Linq;

public class Employee
{
    public string Name { get; set; }
    public string Department { get; set; }
    public double Salary { get; set; }
}

public class LINQFilteringSelectingExample
{
    public static void Main(string[] args)
    {
        List&lt;Employee&gt; employees = new List&lt;Employee&gt;
        {
            new Employee { Name = "Alice", Department = "HR", Salary = 50000 },
            new Employee { Name = "Bob", Department = "IT", Salary = 60000 },
            new Employee { Name = "Charlie", Department = "Finance", Salary = 55000 },
            new Employee { Name = "David", Department = "IT", Salary = 70000 },
            new Employee { Name = "Eve", Department = "HR", Salary = 48000 }
        };

        // Using LINQ query syntax to filter IT department employees and select their names
        var itEmployeeNames = from emp in employees
                              where emp.Department == "IT"
                              select emp.Name;

        Console.WriteLine("IT Department Employees:");
        foreach (string name in itEmployeeNames)
        {
            Console.WriteLine(name);
        }
        // Output:
        // IT Department Employees:
        // Bob
        // David

        // Using LINQ method syntax to achieve the same result
        var itEmployeeNamesMethod = employees
            .Where(emp => emp.Department == "IT")
            .Select(emp => emp.Name);

        Console.WriteLine("\nIT Department Employees (Method Syntax):");
        foreach (string name in itEmployeeNamesMethod)
        {
            Console.WriteLine(name);
        }
        // Output:
        // IT Department Employees (Method Syntax):
        // Bob
        // David
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, both query and method syntaxes are used to filter employees belonging to the IT department and select their names. The results are identical, showcasing the flexibility of LINQ in choosing the preferred syntax.
      </p>

      <!-- Example 2: Ordering and Grouping Data with LINQ -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 2: Ordering and Grouping Data with LINQ</h3>
      <p class="text-base md:text-lg mb-4">
        This example illustrates how to order a list of products by price and group employees by department using LINQ.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Ordering and Grouping Data with LINQ
using System;
using System.Collections.Generic;
using System.Linq;

public class Product
{
    public string Name { get; set; }
    public double Price { get; set; }
}

public class Employee
{
    public string Name { get; set; }
    public string Department { get; set; }
}

public class LINQOrderingGroupingExample
{
    public static void Main(string[] args)
    {
        List&lt;Product&gt; products = new List&lt;Product&gt;
        {
            new Product { Name = "Laptop", Price = 1200 },
            new Product { Name = "Smartphone", Price = 800 },
            new Product { Name = "Tablet", Price = 500 },
            new Product { Name = "Monitor", Price = 300 },
            new Product { Name = "Keyboard", Price = 100 }
        };

        // Using LINQ query syntax to order products by price descending
        var orderedProducts = from p in products
                              orderby p.Price descending
                              select p;

        Console.WriteLine("Products Ordered by Price (Descending):");
        foreach (var product in orderedProducts)
        {
            Console.WriteLine($"{product.Name}: ${product.Price}");
        }
        // Output:
        // Products Ordered by Price (Descending):
        // Laptop: $1200
        // Smartphone: $800
        // Tablet: $500
        // Monitor: $300
        // Keyboard: $100

        List&lt;Employee&gt; employees = new List&lt;Employee&gt;
        {
            new Employee { Name = "Alice", Department = "HR" },
            new Employee { Name = "Bob", Department = "IT" },
            new Employee { Name = "Charlie", Department = "Finance" },
            new Employee { Name = "David", Department = "IT" },
            new Employee { Name = "Eve", Department = "HR" }
        };

        // Using LINQ method syntax to group employees by department
        var groupedEmployees = employees.GroupBy(emp => emp.Department);

        Console.WriteLine("\nEmployees Grouped by Department:");
        foreach (var group in groupedEmployees)
        {
            Console.WriteLine($"Department: {group.Key}");
            foreach (var emp in group)
            {
                Console.WriteLine($"\t{emp.Name}");
            }
        }
        // Output:
        // Employees Grouped by Department:
        // Department: HR
        //     Alice
        //     Eve
        // Department: IT
        //     Bob
        //     David
        // Department: Finance
        //     Charlie
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        This example showcases how LINQ can be used to order a collection of products by their price in descending order and group employees based on their departments. Both query and method syntaxes are demonstrated, highlighting LINQ's ability to handle complex data operations seamlessly.
      </p>

      <!-- LINQ to Objects -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">LINQ to Objects</h2>
      <p class="text-base md:text-lg mb-4">
        LINQ to Objects enables querying in-memory data structures such as arrays, lists, and other enumerable types. It leverages LINQ's powerful querying capabilities to perform operations directly on objects held in memory, making data manipulation tasks straightforward and efficient.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Aggregating Data with LINQ to Objects</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Aggregating Data with LINQ to Objects
using System;
using System.Collections.Generic;
using System.Linq;

public class Sale
{
    public string Product { get; set; }
    public int Quantity { get; set; }
    public double PricePerUnit { get; set; }
}

public class LINQToObjectsAggregationExample
{
    public static void Main(string[] args)
    {
        List&lt;Sale&gt; sales = new List&lt;Sale&gt;
        {
            new Sale { Product = "Laptop", Quantity = 2, PricePerUnit = 1200 },
            new Sale { Product = "Smartphone", Quantity = 5, PricePerUnit = 800 },
            new Sale { Product = "Tablet", Quantity = 3, PricePerUnit = 500 },
            new Sale { Product = "Monitor", Quantity = 4, PricePerUnit = 300 },
            new Sale { Product = "Keyboard", Quantity = 10, PricePerUnit = 100 }
        };

        // Calculate total revenue using LINQ query syntax
        double totalRevenue = (from sale in sales
                               select sale.Quantity * sale.PricePerUnit).Sum();

        Console.WriteLine($"Total Revenue: ${totalRevenue}");
        // Output: Total Revenue: $10500

        // Calculate average quantity using LINQ method syntax
        double averageQuantity = sales.Average(s => s.Quantity);
        Console.WriteLine($"Average Quantity Sold: {averageQuantity}");
        // Output: Average Quantity Sold: 4.8

        // Find the highest priced product using LINQ
        var highestPricedProduct = sales.OrderByDescending(s => s.PricePerUnit).FirstOrDefault();
        Console.WriteLine($"Highest Priced Product: {highestPricedProduct.Product} at ${highestPricedProduct.PricePerUnit}");
        // Output: Highest Priced Product: Laptop at $1200
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        This example demonstrates aggregating data using LINQ to Objects. It calculates the total revenue by summing the product of quantity and price per unit for each sale, computes the average quantity sold, and identifies the highest priced product. LINQ simplifies these aggregation operations, making the code more concise and readable.
      </p>

      <!-- LINQ to XML -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">LINQ to XML</h2>
      <p class="text-base md:text-lg mb-4">
        LINQ to XML provides a streamlined approach to querying and manipulating XML data within C#. It allows developers to work with XML documents using LINQ queries, facilitating tasks such as searching for specific elements, extracting data, and modifying XML content.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Modifying an XML Document with LINQ to XML</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Modifying an XML Document with LINQ to XML
using System;
using System.Linq;
using System.Xml.Linq;

public class LINQToXMLModificationExample
{
    public static void Main(string[] args)
    {
        string xmlData = @"
        <Library>
            <Book>
                <Title>C# in Depth</Title>
                <Author>Jon Skeet</Author>
                <Price>45.99</Price>
            </Book>
            <Book>
                <Title>Pro LINQ</Title>
                <Author>Joseph Rattz</Author>
                <Price>39.99</Price>
            </Book>
            <Book>
                <Title>LINQ Pocket Reference</Title>
                <Author>Joseph Albahari</Author>
                <Price>19.99</Price>
            </Book>
        </Library>";

        XDocument doc = XDocument.Parse(xmlData);

        // Increase the price of all books by 10%
        var books = from book in doc.Descendants("Book")
                    select book;

        foreach (var book in books)
        {
            double currentPrice = (double)book.Element("Price");
            double newPrice = currentPrice * 1.10;
            book.SetElementValue("Price", newPrice);
        }

        Console.WriteLine("Updated XML:");
        Console.WriteLine(doc);
        /* Output:
        Updated XML:
        <Library>
          <Book>
            <Title>C# in Depth</Title>
            <Author>Jon Skeet</Author>
            <Price>50.589</Price>
          </Book>
          <Book>
            <Title>Pro LINQ</Title>
            <Author>Joseph Rattz</Author>
            <Price>43.989</Price>
          </Book>
          <Book>
            <Title>LINQ Pocket Reference</Title>
            <Author>Joseph Albahari</Author>
            <Price>21.989</Price>
          </Book>
        </Library>
        */
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, LINQ to XML is used to parse an XML document representing a library of books. The LINQ query selects all <code>Book</code> elements, and a loop iterates through each book to increase its price by 10%. The updated XML document is then displayed, reflecting the modified prices.
      </p>

      <!-- LINQ to SQL -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">LINQ to SQL</h2>
      <p class="text-base md:text-lg mb-4">
        LINQ to SQL offers a robust framework for interacting with relational databases using LINQ queries. It provides an object-relational mapping (ORM) that translates LINQ queries into SQL commands, allowing developers to perform database operations without writing extensive SQL code. LINQ to SQL simplifies tasks such as querying data, inserting new records, updating existing records, and deleting records.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Inserting and Querying Data with LINQ to SQL</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Inserting and Querying Data with LINQ to SQL
using System;
using System.Linq;
using System.Data.Linq;
using System.Data.Linq.Mapping;

[Table(Name = "Products")]
public class Product
{
    [Column(IsPrimaryKey = true, IsDbGenerated = true)]
    public int ProductID { get; set; }

    [Column]
    public string Name { get; set; }

    [Column]
    public double Price { get; set; }
}

public class DataContextExample : DataContext
{
    public Table&lt;Product&gt; Products;

    public DataContextExample(string connection) : base(connection) { }
}

public class LINQToSQLInsertQueryExample
{
    public static void Main(string[] args)
    {
        string connectionString = "Data Source=YourServerName;Initial Catalog=YourDatabaseName;Integrated Security=True";
        DataContextExample db = new DataContextExample(connectionString);

        // Inserting a new product
        Product newProduct = new Product { Name = "Wireless Mouse", Price = 25.99 };
        db.Products.InsertOnSubmit(newProduct);
        db.SubmitChanges();
        Console.WriteLine($"Inserted Product: {newProduct.Name}, Price: {newProduct.Price}");

        // Querying products with price less than 30
        var affordableProducts = from p in db.Products
                                 where p.Price < 30
                                 select p;

        Console.WriteLine("\nAffordable Products (Price < $30):");
        foreach (Product product in affordableProducts)
        {
            Console.WriteLine($"ID: {product.ProductID}, Name: {product.Name}, Price: {product.Price}");
        }
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        This example demonstrates how LINQ to SQL can be used to insert a new product into a database and query products based on specific criteria. The <code>Product</code> class is mapped to the "Products" table in the database. The <code>InsertOnSubmit</code> method adds a new product, and <code>SubmitChanges</code> commits the insertion. The LINQ query then retrieves all products priced below $30, showcasing how easily database operations can be performed using LINQ.
      </p>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices for Using LINQ</h2>
      <p class="text-base md:text-lg mb-4">
        To maximize the benefits of LINQ in your C# applications, consider the following best practices:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Understand the Data Source:</strong> Choose the appropriate LINQ implementation based on your data source (e.g., LINQ to Objects for in-memory collections, LINQ to SQL for databases).</li>
        <li><strong>Optimize Queries:</strong> Write efficient queries to minimize performance overhead. Avoid unnecessary operations and ensure that queries are optimized for the underlying data source.</li>
        <li><strong>Use Deferred Execution Wisely:</strong> LINQ queries use deferred execution, meaning they are not executed until the results are enumerated. Be mindful of this behavior to prevent unexpected performance issues.</li>
        <li><strong>Leverage Lambda Expressions:</strong> Utilize lambda expressions for more concise and readable method syntax queries.</li>
        <li><strong>Utilize Anonymous Types:</strong> Use anonymous types to project only the necessary data, reducing memory consumption and improving performance.</li>
        <li><strong>Handle Nulls and Exceptions:</strong> Ensure that your queries account for potential null values and handle exceptions gracefully to maintain application stability.</li>
        <li><strong>Use Naming Conventions:</strong> Follow consistent naming conventions for variables and methods to enhance code readability and maintainability.</li>
        <li><strong>Document Complex Queries:</strong> Provide comments or documentation for complex LINQ queries to aid understanding and future maintenance.</li>
      </ul>

      <!-- Common Pitfalls -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Common Pitfalls to Avoid with LINQ</h2>
      <p class="text-base md:text-lg mb-4">
        While LINQ offers powerful capabilities, improper use can lead to inefficiencies and bugs. Here are some common pitfalls to be aware of:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Overusing LINQ:</strong> Not all data operations are best suited for LINQ. In some cases, traditional loops may offer better performance or readability.</li>
        <li><strong>Ignoring Deferred Execution:</strong> Forgetting that LINQ queries are executed upon enumeration can lead to unexpected behaviors, especially when modifying the data source after defining the query.</li>
        <li><strong>Complex Queries:</strong> Writing overly complex LINQ queries can reduce code readability and maintainability. Break down complex operations into simpler, more manageable queries or use helper methods.</li>
        <li><strong>Performance Overhead:</strong> LINQ can introduce performance overhead, especially with large datasets or when used in performance-critical sections of the code. Profile and optimize queries as needed.</li>
        <li><strong>Incorrect Assumptions About Data:</strong> Assuming that LINQ queries handle data types or structures in a specific way without verifying can lead to runtime errors or incorrect results.</li>
        <li><strong>Not Leveraging Database Capabilities:</strong> When using LINQ to SQL or Entity Framework, failing to utilize database indexes or understanding how LINQ queries translate to SQL can result in suboptimal performance.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        LINQ in C# stands as a testament to the evolution of programming languages towards more integrated and expressive data handling capabilities. By embedding query functionality directly into the language, LINQ bridges the gap between programming constructs and data manipulation, offering developers a unified and efficient approach to handling diverse data sources. From filtering and projecting data in-memory with LINQ to Objects to performing complex queries on XML documents and relational databases with LINQ to XML and LINQ to SQL, LINQ provides a versatile toolkit for modern C# development.
      </p>
      <p class="text-base md:text-lg mb-6">
        Mastering LINQ not only enhances your ability to write concise and readable code but also empowers you to perform sophisticated data operations with ease. By adhering to best practices and being mindful of common pitfalls, you can leverage LINQ to build robust, efficient, and maintainable applications. As you continue to explore and implement LINQ in your projects, you'll discover its immense potential in simplifying data querying and transformation tasks, ultimately elevating your C# programming proficiency.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LINQInCSharp',
  data() {
    return {
      // Additional data properties can be added here if needed
    };
  },
};
</script>

<style scoped>
pre {
  white-space: pre-wrap; /* Ensures text wrapping for very long lines */
  overflow-x: auto;      /* Adds horizontal scroll for overflow content */ 
}

@media (max-width: 768px) {
  pre, code {
    font-size: 0.5rem; /* Smaller font size for mobile devices */
  }
}

h2, p , h1, h3, h4, li{
  font-family: "Roboto Condensed", sans-serif;
}

a {
  font-family: "JetBrains Mono", sans-serif;
}
</style>
