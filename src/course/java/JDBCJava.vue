<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="Java JDBC" value="java" />

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Java Database Connectivity (JDBC) is a fundamental API in Java that enables applications to interact with relational databases. By providing a standard set of interfaces and classes, JDBC facilitates seamless communication between Java applications and various database management systems (DBMS). Mastering JDBC is essential for developers aiming to build robust, data-driven applications that efficiently handle data storage, retrieval, and manipulation.
      </p>

      <!-- What is JDBC? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">What is JDBC?</h2>
      <p class="text-base md:text-lg mb-4">
        JDBC stands for Java Database Connectivity. It is an API that defines how a client may access a database. It provides methods for querying and updating data in a database, and it is oriented towards relational databases.
      </p>

      <!-- Key Components of JDBC -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Key Components of JDBC</h2>
      <p class="text-base md:text-lg mb-4">
        Understanding the key components of JDBC is crucial for effectively interacting with databases. The primary components include:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>DriverManager:</strong> Manages a list of database drivers and establishes connections between Java applications and databases.</li>
        <li><strong>Connection:</strong> Represents a connection to a specific database. It is used to create statements for executing SQL queries.</li>
        <li><strong>Statement:</strong> Executes static SQL statements and returns the results.</li>
        <li><strong>PreparedStatement:</strong> Extends Statement and allows the execution of parameterized SQL queries, enhancing performance and security.</li>
        <li><strong>ResultSet:</strong> Represents the result of a SQL query, providing methods to iterate through and retrieve data.</li>
        <li><strong>SQLException:</strong> Handles any database access errors or other errors related to JDBC operations.</li>
      </ul>

      <!-- Setting Up JDBC -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Setting Up JDBC</h2>
      <p class="text-base md:text-lg mb-4">
        To begin using JDBC, you need to include the appropriate JDBC driver for your database in your project's classpath. JDBC drivers are specific to each DBMS, such as MySQL, PostgreSQL, Oracle, etc.
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Download the JDBC Driver:</strong> Obtain the JDBC driver JAR file from your database vendor's website.</li>
        <li><strong>Add to Classpath:</strong> Include the driver JAR in your project's classpath to ensure it is accessible during runtime.</li>
        <li><strong>Load the Driver:</strong> Use <code>Class.forName()</code> to load the JDBC driver class.</li>
      </ul>

      <!-- Code Example 1: Establishing a Connection -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Establishing a Connection</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Establishing a Connection to MySQL Database
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBCConnectionExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydatabase"; // Replace with your DB URL
        String user = "root"; // Replace with your DB username
        String password = "password"; // Replace with your DB password

        try {
            // Load MySQL JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Establish Connection
            Connection connection = DriverManager.getConnection(url, user, password);
            System.out.println("Connection established successfully.");

            // Close Connection
            connection.close();
        } catch (ClassNotFoundException e) {
            System.out.println("JDBC Driver not found.");
            e.printStackTrace();
        } catch (SQLException e) {
            System.out.println("Error establishing connection.");
            e.printStackTrace();
        }
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        This example demonstrates how to establish a connection to a MySQL database using JDBC. Ensure that the JDBC driver is correctly added to your project's classpath and that the database URL, username, and password are accurate.
      </p>

      <!-- Executing SQL Queries -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Executing SQL Queries</h2>
      <p class="text-base md:text-lg mb-4">
        Once a connection is established, you can execute SQL queries using <code>Statement</code> or <code>PreparedStatement</code>. Prepared statements are preferred for executing parameterized queries as they enhance performance and security by preventing SQL injection.
      </p>

      <!-- Code Example 2: Executing a SELECT Query -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Executing a SELECT Query</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Executing a SELECT Query
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class JDBCSelectExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydatabase"; // Replace with your DB URL
        String user = "root"; // Replace with your DB username
        String password = "password"; // Replace with your DB password

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, user, password);

            // Create Statement
            Statement statement = connection.createStatement();

            // Execute SELECT Query
            String query = "SELECT id, name, email FROM users";
            ResultSet resultSet = statement.executeQuery(query);

            // Process ResultSet
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                String email = resultSet.getString("email");
                System.out.println(id + " | " + name + " | " + email);
            }

            // Close resources
            resultSet.close();
            statement.close();
            connection.close();
        } catch (ClassNotFoundException e) {
            System.out.println("JDBC Driver not found.");
            e.printStackTrace();
        } catch (SQLException e) {
            System.out.println("Error executing query.");
            e.printStackTrace();
        }
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        This example illustrates how to execute a SELECT query to retrieve data from a "users" table. The <code>ResultSet</code> object holds the data returned by the query, which can be iterated to access individual records.
      </p>

      <!-- Using PreparedStatement -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Using PreparedStatement</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>PreparedStatement</code> interface allows you to execute parameterized SQL queries, enhancing security and performance. It precompiles the SQL statement, which can then be executed multiple times with different parameters.
      </p>

      <!-- Code Example 3: Using PreparedStatement -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using PreparedStatement Example</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using PreparedStatement for Parameterized Queries
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class JDBCPreparedStatementExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydatabase"; // Replace with your DB URL
        String user = "root"; // Replace with your DB username
        String password = "password"; // Replace with your DB password

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, user, password);

            // Prepare SQL INSERT Statement
            String insertSQL = "INSERT INTO users (name, email) VALUES (?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(insertSQL);

            // Set Parameters
            preparedStatement.setString(1, "John Doe");
            preparedStatement.setString(2, "john.doe@example.com");

            // Execute Insert
            int rowsAffected = preparedStatement.executeUpdate();
            System.out.println(rowsAffected + " row(s) inserted.");

            // Close resources
            preparedStatement.close();
            connection.close();
        } catch (ClassNotFoundException e) {
            System.out.println("JDBC Driver not found.");
            e.printStackTrace();
        } catch (SQLException e) {
            System.out.println("Error executing INSERT statement.");
            e.printStackTrace();
        }
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        This example demonstrates how to use <code>PreparedStatement</code> to insert a new user into the "users" table. By setting parameters dynamically, you can safely and efficiently insert data without risking SQL injection.
      </p>

      <!-- Handling Exceptions with JDBC -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Handling Exceptions with JDBC</h2>
      <p class="text-base md:text-lg mb-4">
        Proper exception handling is vital when working with JDBC to ensure that your application can gracefully handle any errors that may occur during database interactions. Common exceptions include <code>SQLException</code>, which provides detailed information about database access errors.
      </p>

      <!-- Code Example 4: Exception Handling -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Exception Handling Example</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Handling SQLExceptions
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBCExceptionHandlingExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/nonexistentdb"; // Incorrect DB URL
        String user = "root";
        String password = "password";

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, user, password);
        } catch (ClassNotFoundException e) {
            System.out.println("JDBC Driver not found.");
            e.printStackTrace();
        } catch (SQLException e) {
            System.out.println("SQL Exception occurred.");
            System.out.println("Error Code: " + e.getErrorCode());
            System.out.println("SQL State: " + e.getSQLState());
            System.out.println("Message: " + e.getMessage());
        }
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        This example showcases how to handle <code>SQLException</code> by catching and retrieving detailed error information such as error code, SQL state, and descriptive messages. This information is invaluable for debugging and resolving database-related issues.
      </p>

      <!-- Closing Connections -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Closing Connections</h2>
      <p class="text-base md:text-lg mb-4">
        It is crucial to close all database resources such as <code>Connection</code>, <code>Statement</code>, and <code>ResultSet</code> objects after their usage to prevent resource leaks. The try-with-resources statement is highly recommended as it ensures that all resources are closed automatically.
      </p>

      <!-- Code Example 5: Try-With-Resources -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Try-With-Resources Example</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using Try-With-Resources to Automatically Close Resources
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class TryWithResourcesExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydatabase";
        String user = "root";
        String password = "password";

        String updateSQL = "UPDATE users SET email = ? WHERE name = ?";

        try (
            Connection connection = DriverManager.getConnection(url, user, password);
            PreparedStatement pstmt = connection.prepareStatement(updateSQL)
        ) {
            pstmt.setString(1, "new.email@example.com");
            pstmt.setString(2, "John Doe");

            int rowsUpdated = pstmt.executeUpdate();
            System.out.println(rowsUpdated + " row(s) updated.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        The try-with-resources statement ensures that both the <code>Connection</code> and <code>PreparedStatement</code> are closed automatically, even if an exception occurs. This approach simplifies resource management and enhances code reliability.
      </p>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices for JDBC</h2>
      <p class="text-base md:text-lg mb-4">
        Adhering to best practices when working with JDBC ensures that your database interactions are efficient, secure, and maintainable. Here are some recommended guidelines:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Use PreparedStatement:</strong> Always use <code>PreparedStatement</code> for executing SQL queries to prevent SQL injection and improve performance.</li>
        <li><strong>Manage Resources Properly:</strong> Utilize try-with-resources to automatically close JDBC resources and prevent resource leaks.</li>
        <li><strong>Handle Exceptions Gracefully:</strong> Implement robust exception handling to manage and log errors effectively.</li>
        <li><strong>Use Connection Pooling:</strong> Employ connection pooling to manage database connections efficiently and enhance application performance.</li>
        <li><strong>Optimize SQL Queries:</strong> Write optimized SQL queries to reduce execution time and resource consumption.</li>
        <li><strong>Separate Database Logic:</strong> Encapsulate JDBC code within separate classes or layers to promote modularity and maintainability.</li>
        <li><strong>Secure Database Credentials:</strong> Protect database credentials by externalizing them and restricting access appropriately.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Java Database Connectivity (JDBC) is an essential API for interacting with relational databases in Java applications. By understanding how to establish connections, execute queries, handle exceptions, and follow best practices, developers can create efficient and secure data-driven applications. Mastery of JDBC not only enhances your ability to manage and manipulate data but also contributes to building scalable and high-performance Java applications.
      </p>

      <!-- Further Reading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Further Reading</h2>
      <p class="text-base md:text-lg mb-4">
        To deepen your understanding of Java JDBC, explore the following resources:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <a href="https://docs.oracle.com/javase/tutorial/jdbc/" class="text-blue-600 hover:underline">Java Tutorials: JDBC</a>
        </li>
        <li>
          <a href="https://www.geeksforgeeks.org/java-jdbc/" class="text-blue-600 hover:underline">GeeksforGeeks: Java JDBC</a>
        </li>
        <li>
          <a href="https://www.javatpoint.com/java-jdbc" class="text-blue-600 hover:underline">JavaTpoint: Java JDBC</a>
        </li>
        <li>
          <a href="https://www.baeldung.com/java-jdbc" class="text-blue-600 hover:underline">Baeldung: Guide to Java JDBC</a>
        </li>
        <li>
          <a href="https://www.udemy.com/course/jdbc/" class="text-blue-600 hover:underline">Udemy: Java JDBC Courses</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaJDBC',
};
</script>

<style scoped>
pre {
  white-space: pre-wrap; /* Ensures text wrapping for long lines */
  overflow-x: auto;      /* Adds horizontal scroll for long code lines */
}

a {
  color: #1e40af; /* Tailwind's blue-800 */
}

h2, p , h1, h3, h4, li{
  font-family: "Roboto Condensed", sans-serif;
}

a {
  font-family: "JetBrains Mono", sans-serif;
}
</style>
