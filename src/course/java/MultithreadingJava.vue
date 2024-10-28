<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="Java Multithreading" value="java" />

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Multithreading is a powerful feature in Java that allows concurrent execution of two or more threads for maximum utilization of CPU. By leveraging multithreading, developers can create applications that perform multiple operations simultaneously, improving performance and responsiveness. This section delves into the fundamentals of multithreading in Java, exploring thread creation, synchronization, concurrency utilities, and best practices to build efficient and thread-safe applications.
      </p>

      <!-- What is Multithreading? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">What is Multithreading?</h2>
      <p class="text-base md:text-lg mb-4">
        Multithreading in Java is a process of executing multiple threads simultaneously. A thread is a lightweight subprocess, the smallest unit of processing. Java provides built-in support for multithreading, enabling developers to write programs that can perform multiple tasks concurrently.
      </p>

      <!-- Creating Threads -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Creating Threads</h2>
      <p class="text-base md:text-lg mb-4">
        There are two primary ways to create threads in Java:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Extending the Thread Class:</strong> Create a new class that extends the <code>Thread</code> class and override its <code>run()</code> method.</li>
        <li><strong>Implementing the Runnable Interface:</strong> Create a class that implements the <code>Runnable</code> interface and pass an instance of this class to a <code>Thread</code> object.</li>
      </ul>

      <!-- Code Example 1: Extending the Thread Class -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Extending the Thread Class</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Extending the Thread Class
public class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Thread running: " + Thread.currentThread().getName());
    }

    public static void main(String[] args) {
        MyThread thread1 = new MyThread();
        thread1.start();

        MyThread thread2 = new MyThread();
        thread2.start();
    }
}
</code>
      </pre>

      <!-- Code Example 2: Implementing the Runnable Interface -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Implementing the Runnable Interface</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Implementing the Runnable Interface
public class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Runnable running: " + Thread.currentThread().getName());
    }

    public static void main(String[] args) {
        Thread thread1 = new Thread(new MyRunnable());
        thread1.start();

        Thread thread2 = new Thread(new MyRunnable());
        thread2.start();
    }
}
</code>
      </pre>

      <!-- Thread Lifecycle -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Thread Lifecycle</h2>
      <p class="text-base md:text-lg mb-4">
        Understanding the lifecycle of a thread is crucial for effective multithreading. A thread in Java can exist in the following states:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>New:</strong> The thread is created but not yet started.</li>
        <li><strong>Runnable:</strong> The thread is ready to run and waiting for CPU time.</li>
        <li><strong>Blocked:</strong> The thread is waiting for a monitor lock to enter a synchronized block/method.</li>
        <li><strong>Waiting:</strong> The thread is waiting indefinitely for another thread to perform a particular action.</li>
        <li><strong>Timed Waiting:</strong> The thread is waiting for another thread to perform an action for up to a specified waiting time.</li>
        <li><strong>Terminated:</strong> The thread has completed its execution or has been terminated.</li>
      </ul>

      <!-- Synchronization -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Synchronization</h2>
      <p class="text-base md:text-lg mb-4">
        Synchronization is essential in multithreaded applications to prevent thread interference and memory consistency errors. It ensures that only one thread can access a synchronized block or method at a time.
      </p>

      <!-- Code Example 3: Synchronized Method -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Synchronized Method</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Synchronized Method
public class Counter {
    private int count = 0;

    // Synchronized method to increment count
    public synchronized void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }

    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();

        // Creating multiple threads to increment the counter
        Thread t1 = new Thread(() -> {
            for(int i=0; i<1000; i++) counter.increment();
        });

        Thread t2 = new Thread(() -> {
            for(int i=0; i<1000; i++) counter.increment();
        });

        t1.start();
        t2.start();

        t1.join();
        t2.join();

        System.out.println("Final Count: " + counter.getCount()); // Expected: 2000
    }
}
</code>
      </pre>

      <!-- Code Example 4: Synchronized Block -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Synchronized Block</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Synchronized Block
public class Printer {
    // Method with synchronized block
    public void printDocument(String document) {
        synchronized(this) {
            System.out.println("Printing: " + document);
            // Simulate time taken to print
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("Finished printing: " + document);
        }
    }

    public static void main(String[] args) {
        Printer printer = new Printer();

        // Creating multiple threads to print documents
        Thread t1 = new Thread(() -> printer.printDocument("Document1.pdf"));
        Thread t2 = new Thread(() -> printer.printDocument("Document2.pdf"));

        t1.start();
        t2.start();
    }
}
</code>
      </pre>

      <!-- Concurrency Utilities -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Concurrency Utilities</h2>
      <p class="text-base md:text-lg mb-4">
        Java provides a set of concurrency utilities in the <code>java.util.concurrent</code> package that simplify multithreaded programming. These utilities include thread pools, concurrent collections, synchronization aids, and more.
      </p>

      <!-- ExecutorService -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">ExecutorService</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>ExecutorService</code> interface represents an asynchronous execution mechanism that can execute tasks in the background. It manages a pool of threads, allowing for efficient task execution without the overhead of manual thread management.
      </p>

      <!-- Code Example 5: Using ExecutorService -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Using ExecutorService</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using ExecutorService
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ExecutorServiceExample {
    public static void main(String[] args) {
        // Creating a fixed thread pool with 2 threads
        ExecutorService executor = Executors.newFixedThreadPool(2);

        // Submitting tasks to the executor
        executor.submit(() -> {
            System.out.println("Task 1 running on " + Thread.currentThread().getName());
        });

        executor.submit(() -> {
            System.out.println("Task 2 running on " + Thread.currentThread().getName());
        });

        // Shutting down the executor
        executor.shutdown();
    }
}
</code>
      </pre>

      <!-- Callable and Future -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Callable and Future</h3>
      <p class="text-base md:text-lg mb-4">
        Unlike <code>Runnable</code>, the <code>Callable</code> interface allows tasks to return results and throw checked exceptions. The <code>Future</code> interface represents the result of an asynchronous computation, providing methods to check if the computation is complete, wait for its completion, and retrieve the result.
      </p>

      <!-- Code Example 6: Using Callable and Future -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Using Callable and Future</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using Callable and Future
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class CallableFutureExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newSingleThreadExecutor();

        // Defining a Callable task
        Callable&lt;Integer> task = () -> {
            Thread.sleep(1000);
            return 123;
        };

        // Submitting the task and obtaining a Future
        Future&lt;Integer> future = executor.submit(task);

        try {
            // Retrieving the result of the computation
            Integer result = future.get();
            System.out.println("Result: " + result); // Output: Result: 123
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        } finally {
            executor.shutdown();
        }
    }
}
</code>
      </pre>

      <!-- CountDownLatch -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">CountDownLatch</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>CountDownLatch</code> is a synchronization aid that allows one or more threads to wait until a set of operations being performed in other threads completes.
      </p>

      <!-- Code Example 7: Using CountDownLatch -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Using CountDownLatch</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using CountDownLatch
import java.util.concurrent.CountDownLatch;

public class CountDownLatchExample {
    public static void main(String[] args) throws InterruptedException {
        int numberOfTasks = 3;
        CountDownLatch latch = new CountDownLatch(numberOfTasks);

        for(int i=1; i<=numberOfTasks; i++) {
            final int taskId = i;
            new Thread(() -> {
                System.out.println("Task " + taskId + " started.");
                try {
                    Thread.sleep(1000 * taskId);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("Task " + taskId + " completed.");
                latch.countDown();
            }).start();
        }

        // Main thread waits for all tasks to complete
        latch.await();
        System.out.println("All tasks completed. Proceeding with main thread.");
    }
}
</code>
      </pre>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices for Multithreading</h2>
      <p class="text-base md:text-lg mb-4">
        Effective multithreading requires adherence to best practices to ensure that applications are efficient, thread-safe, and free from common concurrency issues.
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Minimize Shared Mutable State:</strong> Reduce the amount of shared data between threads to minimize synchronization needs and prevent race conditions.</li>
        <li><strong>Use High-Level Concurrency Utilities:</strong> Prefer using utilities from the <code>java.util.concurrent</code> package over manual thread management for better performance and readability.</li>
        <li><strong>Synchronize Access to Shared Resources:</strong> Ensure that any shared resources are accessed in a thread-safe manner using synchronization mechanisms.</li>
        <li><strong>Avoid Deadlocks:</strong> Design synchronization carefully to prevent scenarios where two or more threads are waiting indefinitely for each other.</li>
        <li><strong>Leverage Immutable Objects:</strong> Use immutable objects to eliminate the need for synchronization when objects do not change after creation.</li>
        <li><strong>Handle InterruptedException Properly:</strong> Always handle <code>InterruptedException</code> appropriately to maintain thread responsiveness and prevent resource leaks.</li>
        <li><strong>Limit the Number of Threads:</strong> Avoid creating excessive threads which can lead to resource exhaustion and degraded performance. Use thread pools to manage thread creation and reuse.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Multithreading is a powerful feature in Java that enables the development of high-performance and responsive applications. By understanding how to create and manage threads, synchronize access to shared resources, and utilize concurrency utilities, developers can harness the full potential of multithreading. Adhering to best practices ensures that your multithreaded applications are robust, efficient, and free from common concurrency pitfalls.
      </p>

      <!-- Further Reading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Further Reading</h2>
      <p class="text-base md:text-lg mb-4">
        To deepen your understanding of Java Multithreading, explore the following resources:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <a href="https://docs.oracle.com/javase/tutorial/essential/concurrency/" class="text-blue-600 hover:underline">Java Tutorials: Concurrency</a>
        </li>
        <li>
          <a href="https://www.geeksforgeeks.org/multithreading-java/" class="text-blue-600 hover:underline">GeeksforGeeks: Multithreading in Java</a>
        </li>
        <li>
          <a href="https://www.javatpoint.com/multithreading-in-java" class="text-blue-600 hover:underline">JavaTpoint: Multithreading in Java</a>
        </li>
        <li>
          <a href="https://www.baeldung.com/java-concurrency" class="text-blue-600 hover:underline">Baeldung: Java Concurrency</a>
        </li>
        <li>
          <a href="https://www.udemy.com/course/java-multithreading-concurrency-performance/" class="text-blue-600 hover:underline">Udemy: Java Multithreading & Concurrency Courses</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaMultithreading',
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
