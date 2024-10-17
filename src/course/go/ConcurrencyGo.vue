<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-blue-500 rounded-t-xl p-4">
      <img src="/icons/go.svg" alt="Go Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Go Concurrency</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Concurrency is one of the standout features of Go, enabling developers to build highly efficient and scalable applications. Unlike parallelism, which focuses on executing multiple tasks simultaneously, concurrency is about managing multiple tasks at the same time, making Go an excellent choice for applications that require handling numerous tasks efficiently. This module explores Go's concurrency model, diving into goroutines, channels, synchronization mechanisms, and common concurrency patterns. Through detailed explanations and practical examples, you'll gain a deep understanding of how to leverage Go's concurrency features to build robust and performant applications.
      </p>

      <!-- Goroutines -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Goroutines</h2>
      <p class="text-base md:text-lg mb-4">
        Goroutines are lightweight threads managed by the Go runtime. They allow functions or methods to run concurrently with other functions or methods. Goroutines are multiplexed onto multiple OS threads, enabling efficient use of system resources.
      </p>

      <!-- Creating Goroutines -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Creating Goroutines</h3>
      <p class="text-base md:text-lg mb-4">
        To create a goroutine, use the `go` keyword followed by a function call. The function will execute concurrently with the calling function.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Creating Goroutines
package main

import (
    "fmt"
    "time"
)

func say(s string) {
    for i := 0; i < 5; i++ {
        time.Sleep(100 * time.Millisecond)
        fmt.Println(s)
    }
}

func main() {
    go say("Hello")
    say("World")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
World
Hello
World
Hello
World
Hello
World
Hello
World
Hello
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Goroutine Creation:</strong> The `go say("Hello")` statement starts a new goroutine that executes the `say` function concurrently.
        </li>
        <li>
          <strong>Main Goroutine:</strong> The main function continues executing and calls `say("World")` in the main goroutine.
        </li>
        <li>
          <strong>Concurrency:</strong> Both goroutines run concurrently, interleaving their output.
        </li>
      </ul>

      <!-- Synchronizing Goroutines -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Synchronizing Goroutines</h3>
      <p class="text-base md:text-lg mb-4">
        Since goroutines execute concurrently, it's essential to synchronize them to ensure that the main program waits for goroutines to complete. Common synchronization mechanisms include `WaitGroup`, `Mutex`, and channels.
      </p>

      <!-- Using WaitGroup -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Using WaitGroup</h4>
      <p class="text-base md:text-lg mb-4">
        `WaitGroup` is used to wait for a collection of goroutines to finish executing.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using WaitGroup
package main

import (
    "fmt"
    "sync"
    "time"
)

func worker(id int, wg *sync.WaitGroup) {
    defer wg.Done()
    fmt.Printf("Worker %d starting\n", id)
    time.Sleep(time.Second)
    fmt.Printf("Worker %d done\n", id)
}

func main() {
    var wg sync.WaitGroup

    for i := 1; i <= 5; i++ {
        wg.Add(1)
        go worker(i, &wg)
    }

    wg.Wait()
    fmt.Println("All workers done")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Worker 1 starting
Worker 2 starting
Worker 3 starting
Worker 4 starting
Worker 5 starting
Worker 1 done
Worker 2 done
Worker 3 done
Worker 4 done
Worker 5 done
All workers done
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>WaitGroup Initialization:</strong> A `WaitGroup` is declared to track the goroutines.
        </li>
        <li>
          <strong>Adding Goroutines:</strong> `wg.Add(1)` increments the `WaitGroup` counter for each new goroutine.
        </li>
        <li>
          <strong>Decrementing Counter:</strong> `defer wg.Done()` decrements the counter when the goroutine completes.
        </li>
        <li>
          <strong>Waiting for Completion:</strong> `wg.Wait()` blocks the main goroutine until the counter reaches zero.
        </li>
      </ul>

      <!-- Channels -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Channels</h2>
      <p class="text-base md:text-lg mb-4">
        Channels are Go's way of communicating between goroutines. They allow goroutines to send and receive values of a specified type, ensuring safe and synchronized communication.
      </p>

      <!-- Creating and Using Channels -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Creating and Using Channels</h3>
      <p class="text-base md:text-lg mb-4">
        Channels are created using the `make` function and can be either buffered or unbuffered.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Creating and Using Channels
package main

import (
    "fmt"
)

func main() {
    messages := make(chan string)

    go func() {
        messages <- "Hello from goroutine"
    }()

    msg := <-messages
    fmt.Println(msg)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Hello from goroutine
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Channel Creation:</strong> `messages := make(chan string)` creates an unbuffered channel for strings.
        </li>
        <li>
          <strong>Sending to Channel:</strong> The anonymous goroutine sends a message to the channel.
        </li>
        <li>
          <strong>Receiving from Channel:</strong> The main goroutine receives the message from the channel and prints it.
        </li>
        <li>
          <strong>Synchronization:</strong> Sending and receiving operations are synchronized; the main goroutine waits for the message.
        </li>
      </ul>

      <!-- Buffered Channels -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Buffered Channels</h3>
      <p class="text-base md:text-lg mb-4">
        Buffered channels allow sending a limited number of values without a corresponding receiver. This can help improve performance by reducing synchronization overhead.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Buffered Channels
package main

import (
    "fmt"
)

func main() {
    buffered := make(chan int, 3)

    buffered <- 1
    buffered <- 2
    buffered <- 3

    fmt.Println(<-buffered)
    fmt.Println(<-buffered)
    fmt.Println(<-buffered)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
1
2
3
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Buffered Channel Creation:</strong> `buffered := make(chan int, 3)` creates a channel with a capacity of 3.
        </li>
        <li>
          <strong>Sending to Buffered Channel:</strong> You can send up to 3 values without a receiver blocking.
        </li>
        <li>
          <strong>Receiving from Channel:</strong> Values are received in the order they were sent.
        </li>
      </ul>

      <!-- Channel Directions -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Channel Directions</h3>
      <p class="text-base md:text-lg mb-4">
        Channels can be restricted to send-only or receive-only, enhancing type safety and preventing unintended operations.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Channel Directions
package main

import (
    "fmt"
)

func sendData(ch chan<- int) {
    for i := 1; i <= 5; i++ {
        ch <- i
    }
    close(ch)
}

func main() {
    ch := make(chan int)

    go sendData(ch)

    for num := range ch {
        fmt.Println(num)
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
1
2
3
4
5
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Send-Only Channel:</strong> `chan<- int` specifies that the channel is send-only within the `sendData` function.
        </li>
        <li>
          <strong>Receiving Side:</strong> The main function receives data from the channel and prints it.
        </li>
        <li>
          <strong>Closing Channel:</strong> After sending all data, the channel is closed to signal completion.
        </li>
      </ul>

      <!-- Select Statement -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Select Statement</h2>
      <p class="text-base md:text-lg mb-4">
        The `select` statement allows a goroutine to wait on multiple communication operations. It blocks until one of its cases can run, then executes that case.
      </p>

      <!-- Basic Select Usage -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Basic Select Usage</h3>
      <p class="text-base md:text-lg mb-4">
        Using `select`, you can handle multiple channel operations gracefully.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Basic Select Usage
package main

import (
    "fmt"
    "time"
)

func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)

    go func() {
        time.Sleep(2 * time.Second)
        ch1 <- "Message from ch1"
    }()

    go func() {
        time.Sleep(1 * time.Second)
        ch2 <- "Message from ch2"
    }()

    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-ch1:
            fmt.Println(msg1)
        case msg2 := <-ch2:
            fmt.Println(msg2)
        }
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Possible Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Message from ch2
Message from ch1
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Multiple Goroutines:</strong> Two goroutines send messages to different channels after different delays.
        </li>
        <li>
          <strong>Select Statement:</strong> The `select` statement waits for messages from either channel and prints them as they arrive.
        </li>
      </ul>

      <!-- Default Case in Select -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Default Case in Select</h3>
      <p class="text-base md:text-lg mb-4">
        The `default` case in a `select` statement executes immediately if no other case is ready, preventing the `select` from blocking.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Select with Default Case
package main

import (
    "fmt"
    "time"
)

func main() {
    ch := make(chan string)

    select {
    case msg := <-ch:
        fmt.Println("Received:", msg)
    default:
        fmt.Println("No message received.")
    }

    go func() {
        time.Sleep(1 * time.Second)
        ch <- "Hello after delay"
    }()

    time.Sleep(2 * time.Second)

    select {
    case msg := <-ch:
        fmt.Println("Received:", msg)
    default:
        fmt.Println("No message received.")
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <p class="text-base md:text-lg mb-6">
        First Select:
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
No message received.
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        Second Select (after message is sent):
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Received: Hello after delay
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>First Select:</strong> No message is sent to `ch`, so the `default` case executes immediately.
        </li>
        <li>
          <strong>Second Select:</strong> After a delay, a message is sent to `ch`, so the corresponding case executes.
        </li>
      </ul>

      <!-- Range Over Channels -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Range Over Channels</h3>
      <p class="text-base md:text-lg mb-4">
        You can use `range` to receive values from a channel until it is closed.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Range Over Channels
package main

import (
    "fmt"
)

func main() {
    ch := make(chan int)

    go func() {
        for i := 1; i <= 5; i++ {
            ch <- i
        }
        close(ch)
    }()

    for num := range ch {
        fmt.Println("Received:", num)
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Received: 1
Received: 2
Received: 3
Received: 4
Received: 5
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Sending Goroutine:</strong> Sends integers 1 to 5 to the channel and then closes it.
        </li>
        <li>
          <strong>Receiving with Range:</strong> The `for num := range ch` loop receives values until the channel is closed.
        </li>
        <li>
          <strong>Automatic Termination:</strong> Once the channel is closed and all values are received, the loop terminates.
        </li>
      </ul>

      <!-- Mutexes -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Mutexes</h2>
      <p class="text-base md:text-lg mb-4">
        Mutexes (mutual exclusions) are used to protect shared data from being accessed concurrently, preventing race conditions.
      </p>

      <!-- Using Mutex -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using Mutex</h3>
      <p class="text-base md:text-lg mb-4">
        The `sync.Mutex` type provides two main methods: `Lock` and `Unlock`, which are used to control access to shared resources.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using Mutex
package main

import (
    "fmt"
    "sync"
)

type Counter struct {
    mu    sync.Mutex
    count int
}

func (c *Counter) Increment() {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.count++
}

func (c *Counter) Value() int {
    c.mu.Lock()
    defer c.mu.Unlock()
    return c.count
}

func main() {
    var wg sync.WaitGroup
    counter := Counter{}

    for i := 0; i < 1000; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            counter.Increment()
        }()
    }

    wg.Wait()
    fmt.Println("Final Counter:", counter.Value())
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Final Counter: 1000
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Counter Struct:</strong> Contains a `sync.Mutex` and a `count` variable.
        </li>
        <li>
          <strong>Increment Method:</strong> Locks the mutex before incrementing the counter and unlocks it afterward.
        </li>
        <li>
          <strong>Concurrency Safety:</strong> Ensures that only one goroutine can access the `count` variable at a time, preventing race conditions.
        </li>
        <li>
          <strong>WaitGroup Usage:</strong> Waits for all goroutines to finish before printing the final counter value.
        </li>
      </ul>

      <!-- Atomic Operations -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Atomic Operations</h3>
      <p class="text-base md:text-lg mb-4">
        The `sync/atomic` package provides low-level atomic memory primitives useful for implementing synchronization algorithms.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Atomic Operations
package main

import (
    "fmt"
    "sync"
    "sync/atomic"
)

func main() {
    var counter int64 = 0
    var wg sync.WaitGroup

    for i := 0; i < 1000; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            atomic.AddInt64(&counter, 1)
        }()
    }

    wg.Wait()
    fmt.Println("Final Counter:", counter)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Final Counter: 1000
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Atomic Add:</strong> `atomic.AddInt64(&counter, 1)` atomically increments the `counter` variable, ensuring thread-safe operations without using mutexes.
        </li>
        <li>
          <strong>Performance:</strong> Atomic operations can offer better performance compared to mutexes for simple synchronization tasks.
        </li>
        <li>
          <strong>Use Cases:</strong> Ideal for counters and flags where complex locking mechanisms are unnecessary.
        </li>
      </ul>

      <!-- Buffered Channels and Worker Pools -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Buffered Channels and Worker Pools</h2>
      <p class="text-base md:text-lg mb-4">
        Buffered channels are often used in implementing worker pools, allowing a fixed number of goroutines to process tasks concurrently.
      </p>

      <!-- Worker Pool Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Worker Pool Example</h3>
      <p class="text-base md:text-lg mb-4">
        A worker pool limits the number of concurrent goroutines processing tasks, preventing resource exhaustion and managing workload effectively.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Worker Pool
package main

import (
    "fmt"
    "math/rand"
    "sync"
    "time"
)

func worker(id int, jobs <-chan int, results chan<- int, wg *sync.WaitGroup) {
    defer wg.Done()
    for j := range jobs {
        fmt.Printf("Worker %d processing job %d\n", id, j)
        time.Sleep(time.Duration(rand.Intn(1000)) * time.Millisecond)
        results <- j * 2
    }
}

func main() {
    rand.Seed(time.Now().UnixNano())
    jobs := make(chan int, 100)
    results := make(chan int, 100)

    var wg sync.WaitGroup
    numWorkers := 5

    for w := 1; w <= numWorkers; w++ {
        wg.Add(1)
        go worker(w, jobs, results, &wg)
    }

    for j := 1; j <= 10; j++ {
        jobs <- j
    }
    close(jobs)

    wg.Wait()
    close(results)

    for res := range results {
        fmt.Println("Result:", res)
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Possible Output:**
      </p>
      <p class="text-base md:text-lg mb-6">
        Output will vary due to random sleep durations:
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Worker 1 processing job 1
Worker 2 processing job 2
Worker 3 processing job 3
Worker 4 processing job 4
Worker 5 processing job 5
Worker 1 processing job 6
Worker 2 processing job 7
Worker 3 processing job 8
Worker 4 processing job 9
Worker 5 processing job 10
Result: 2
Result: 4
Result: 6
Result: 8
Result: 10
Result: 12
Result: 14
Result: 16
Result: 18
Result: 20
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Job and Result Channels:</strong> `jobs` channel holds job identifiers, and `results` channel collects the processed results.
        </li>
        <li>
          <strong>Workers:</strong> Five worker goroutines are spawned, each listening to the `jobs` channel, processing jobs, and sending results to the `results` channel.
        </li>
        <li>
          <strong>Job Submission:</strong> Ten jobs are submitted to the `jobs` channel and then the channel is closed to signal no more jobs.
        </li>
        <li>
          <strong>Waiting for Completion:</strong> `wg.Wait()` ensures all workers have finished processing before closing the `results` channel.
        </li>
        <li>
          <strong>Result Collection:</strong> Results are collected and printed from the `results` channel.
        </li>
      </ul>

      <!-- Buffered Channels for Task Queuing -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Buffered Channels for Task Queuing</h3>
      <p class="text-base md:text-lg mb-4">
        Buffered channels can act as queues, allowing tasks to be buffered before being processed by workers.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Buffered Channels as Queues
package main

import (
    "fmt"
    "time"
)

func main() {
    queue := make(chan string, 3)

    // Enqueue tasks
    queue <- "Task 1"
    queue <- "Task 2"
    queue <- "Task 3"

    // Start a worker
    go func() {
        for task := range queue {
            fmt.Println("Processing", task)
            time.Sleep(time.Second)
        }
    }()

    time.Sleep(4 * time.Second)
    close(queue)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Processing Task 1
Processing Task 2
Processing Task 3
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Buffered Queue:</strong> `queue := make(chan string, 3)` creates a buffered channel with a capacity of 3.
        </li>
        <li>
          <strong>Enqueuing Tasks:</strong> Three tasks are enqueued without blocking.
        </li>
        <li>
          <strong>Worker Goroutine:</strong> A worker goroutine processes tasks from the queue.
        </li>
        <li>
          <strong>Graceful Shutdown:</strong> After processing, the queue is closed to signal the worker to stop.
        </li>
      </ul>

      <!-- Synchronization with Mutexes -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Synchronization with Mutexes</h2>
      <p class="text-base md:text-lg mb-4">
        Mutexes ensure that only one goroutine accesses a shared resource at a time, preventing race conditions.
      </p>

      <!-- Mutex Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Mutex Example</h3>
      <p class="text-base md:text-lg mb-4">
        Demonstrates the use of `sync.Mutex` to protect shared data.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Mutex for Safe Access
package main

import (
    "fmt"
    "sync"
)

type SafeCounter struct {
    mu    sync.Mutex
    count map[string]int
}

func (c *SafeCounter) Inc(key string) {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.count[key]++
}

func (c *SafeCounter) Value(key string) int {
    c.mu.Lock()
    defer c.mu.Unlock()
    return c.count[key]
}

func main() {
    c := SafeCounter{count: make(map[string]int)}
    var wg sync.WaitGroup

    for i := 0; i < 1000; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            c.Inc("somekey")
        }()
    }

    wg.Wait()
    fmt.Println("Final count:", c.Value("somekey"))
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Final count: 1000
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>SafeCounter Struct:</strong> Contains a mutex and a map to safely count occurrences.
        </li>
        <li>
          <strong>Increment Method:</strong> Locks the mutex before modifying the map to prevent concurrent writes.
        </li>
        <li>
          <strong>Value Method:</strong> Locks the mutex before reading from the map to ensure data consistency.
        </li>
        <li>
          <strong>Concurrency Safety:</strong> Multiple goroutines can safely increment the counter without causing race conditions.
        </li>
      </ul>

      <!-- Once and Once.Do -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Once and Once.Do</h3>
      <p class="text-base md:text-lg mb-4">
        The `sync.Once` type ensures that a piece of code is executed only once, even if called from multiple goroutines.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using sync.Once
package main

import (
    "fmt"
    "sync"
)

func main() {
    var once sync.Once
    var wg sync.WaitGroup

    for i := 0; i < 5; i++ {
        wg.Add(1)
        go func(id int) {
            defer wg.Done()
            once.Do(func() {
                fmt.Println("This should run only once.")
            })
            fmt.Printf("Goroutine %d finished.\n", id)
        }(i)
    }

    wg.Wait()
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Possible Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
This should run only once.
Goroutine 0 finished.
Goroutine 1 finished.
Goroutine 2 finished.
Goroutine 3 finished.
Goroutine 4 finished.
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>sync.Once Initialization:</strong> Declares a `sync.Once` variable to ensure a function runs only once.
        </li>
        <li>
          <strong>Do Method:</strong> The anonymous function passed to `once.Do` executes only once, regardless of how many times it's called.
        </li>
        <li>
          <strong>Goroutine Execution:</strong> Each goroutine attempts to execute the `Do` method, but only the first call executes the function.
        </li>
      </ul>

      <!-- Select with Timeout -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Select with Timeout</h2>
      <p class="text-base md:text-lg mb-4">
        Implementing timeouts with `select` helps prevent goroutines from blocking indefinitely by providing alternative execution paths if certain operations take too long.
      </p>

      <!-- Select with Timeout Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Select with Timeout Example</h3>
      <p class="text-base md:text-lg mb-4">
        Demonstrates how to use `select` with a timeout using `time.After`.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Select with Timeout
package main

import (
    "fmt"
    "time"
)

func main() {
    ch := make(chan string)

    go func() {
        time.Sleep(3 * time.Second)
        ch <- "Delayed Message"
    }()

    select {
    case msg := <-ch:
        fmt.Println("Received:", msg)
    case <-time.After(2 * time.Second):
        fmt.Println("Timeout: No message received within 2 seconds.")
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Possible Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Timeout: No message received within 2 seconds.
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Channel Setup:</strong> A goroutine sends a message to `ch` after a 3-second delay.
        </li>
        <li>
          <strong>Select with Timeout:</strong> The `select` statement waits for either a message on `ch` or a timeout after 2 seconds.
        </li>
        <li>
          <strong>Outcome:</strong> Since the message arrives after the timeout, the `default` case executes.
        </li>
      </ul>

      <!-- Pattern: Fan-Out, Fan-In -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Concurrency Patterns: Fan-Out, Fan-In</h2>
      <p class="text-base md:text-lg mb-4">
        The Fan-Out, Fan-In pattern involves distributing work across multiple goroutines (Fan-Out) and then collecting the results (Fan-In). This pattern is useful for parallelizing tasks and aggregating results efficiently.
      </p>

      <!-- Fan-Out, Fan-In Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Fan-Out, Fan-In Example</h3>
      <p class="text-base md:text-lg mb-4">
        Demonstrates distributing tasks to multiple worker goroutines and collecting their results.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Fan-Out, Fan-In
package main

import (
    "fmt"
    "math/rand"
    "sync"
    "time"
)

func worker(id int, jobs <-chan int, results chan<- int, wg *sync.WaitGroup) {
    defer wg.Done()
    for j := range jobs {
        fmt.Printf("Worker %d processing job %d\n", id, j)
        time.Sleep(time.Duration(rand.Intn(1000)) * time.Millisecond)
        results <- j * 2
    }
}

func main() {
    rand.Seed(time.Now().UnixNano())
    jobs := make(chan int, 100)
    results := make(chan int, 100)

    var wg sync.WaitGroup
    numWorkers := 3

    // Fan-Out: Start workers
    for w := 1; w <= numWorkers; w++ {
        wg.Add(1)
        go worker(w, jobs, results, &wg)
    }

    // Send jobs
    for j := 1; j <= 5; j++ {
        jobs <- j
    }
    close(jobs)

    // Fan-In: Wait for all workers to finish
    go func() {
        wg.Wait()
        close(results)
    }()

    // Collect results
    for res := range results {
        fmt.Println("Result:", res)
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Possible Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Worker 1 processing job 1
Worker 2 processing job 2
Worker 3 processing job 3
Result: 2
Worker 1 processing job 4
Worker 2 processing job 5
Result: 4
Result: 6
Result: 8
Result: 10
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Fan-Out:</strong> Three worker goroutines are spawned to process jobs concurrently.
        </li>
        <li>
          <strong>Job Distribution:</strong> Jobs are sent to the `jobs` channel and distributed to available workers.
        </li>
        <li>
          <strong>Fan-In:</strong> Results from workers are collected from the `results` channel and printed.
        </li>
        <li>
          <strong>Synchronization:</strong> A separate goroutine waits for all workers to finish before closing the `results` channel.
        </li>
      </ul>

      <!-- Race Conditions and the Race Detector -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Race Conditions and the Race Detector</h2>
      <p class="text-base md:text-lg mb-4">
        Race conditions occur when multiple goroutines access shared data concurrently, and at least one goroutine modifies the data. Go provides tools to detect and prevent race conditions.
      </p>

      <!-- Race Condition Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Race Condition Example</h3>
      <p class="text-base md:text-lg mb-4">
        Demonstrates a race condition and how to detect it using Go's race detector.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Race Condition
package main

import (
    "fmt"
    "sync"
)

func main() {
    var counter int
    var wg sync.WaitGroup

    for i := 0; i < 1000; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            counter++
        }()
    }

    wg.Wait()
    fmt.Println("Final Counter:", counter)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Running with Race Detector:**
      </p>
      <p class="text-base md:text-lg mb-6">
        ```bash
        go run -race main.go
        ```
      </p>
      <p class="text-base md:text-lg mb-6">
        **Possible Output:**
      </p>
      <p class="text-base md:text-lg mb-6">
        ```
        WARNING: DATA RACE
        Read at 0x000000... by goroutine 7:
          main.main.func1()
              /path/to/main.go:14 +0x...
        
        Previous write at 0x000000... by goroutine 6:
          main.main.func1()
              /path/to/main.go:14 +0x...
        
        Goroutine 7 (running) created at:
          main.main()
              /path/to/main.go:12 +0x...
        
        Goroutine 6 (finished) created at:
          main.main()
              /path/to/main.go:12 +0x...
        ```
      </p>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Race Detection:</strong> Running the program with `-race` flag detects concurrent access to the `counter` variable.
        </li>
        <li>
          <strong>Race Report:</strong> The race detector provides detailed information about the conflicting accesses, including the goroutines involved and the stack traces.
        </li>
        <li>
          <strong>Mitigation:</strong> To prevent race conditions, use synchronization mechanisms like mutexes or atomic operations.
        </li>
      </ul>

      <!-- Fixing Race Conditions -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Fixing Race Conditions</h3>
      <p class="text-base md:text-lg mb-4">
        Utilize synchronization primitives to ensure safe access to shared resources.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Fixing Race Condition with Mutex
package main

import (
    "fmt"
    "sync"
)

func main() {
    var counter int
    var wg sync.WaitGroup
    var mu sync.Mutex

    for i := 0; i < 1000; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            mu.Lock()
            counter++
            mu.Unlock()
        }()
    }

    wg.Wait()
    fmt.Println("Final Counter:", counter)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Final Counter: 1000
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Mutex Usage:</strong> A `sync.Mutex` is used to lock access to the `counter` variable during increment operations.
        </li>
        <li>
          <strong>Safe Increment:</strong> `mu.Lock()` ensures that only one goroutine can modify `counter` at a time, preventing race conditions.
        </li>
        <li>
          <strong>Correct Final Count:</strong> The final counter value reliably reaches 1000 without discrepancies.
        </li>
      </ul>

      <!-- Channels for Synchronization -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Channels for Synchronization</h2>
      <p class="text-base md:text-lg mb-4">
        Channels can also be used as synchronization primitives to signal between goroutines.
      </p>

      <!-- Using Channels for Signaling -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using Channels for Signaling</h3>
      <p class="text-base md:text-lg mb-4">
        Utilize channels to signal the completion of tasks or to coordinate execution order.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using Channels for Signaling
package main

import (
    "fmt"
    "time"
)

func worker(id int, done chan<- bool) {
    fmt.Printf("Worker %d starting\n", id)
    time.Sleep(time.Second)
    fmt.Printf("Worker %d done\n", id)
    done <- true
}

func main() {
    done := make(chan bool, 2)

    go worker(1, done)
    go worker(2, done)

    // Wait for both workers to finish
    <-done
    <-done

    fmt.Println("All workers completed.")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Worker 1 starting
Worker 2 starting
Worker 1 done
Worker 2 done
All workers completed.
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Signaling Channel:</strong> `done` channel is used to signal when each worker completes its task.
        </li>
        <li>
          <strong>Buffered Channel:</strong> The channel is buffered to accommodate multiple signals without blocking.
        </li>
        <li>
          <strong>Waiting for Completion:</strong> The main goroutine waits for signals from all workers before proceeding.
        </li>
      </ul>

      <!-- Context Package -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Context Package</h2>
      <p class="text-base md:text-lg mb-4">
        The `context` package provides context propagation, cancellation signals, and deadlines across API boundaries and goroutines. It's essential for managing the lifecycle of goroutines, especially in large applications.
      </p>

      <!-- Context Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Context Example</h3>
      <p class="text-base md:text-lg mb-4">
        Demonstrates how to use contexts to control goroutine execution.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using Context for Cancellation
package main

import (
    "context"
    "fmt"
    "time"
)

func worker(ctx context.Context, id int) {
    for {
        select {
        case <-ctx.Done():
            fmt.Printf("Worker %d exiting\n", id)
            return
        default:
            fmt.Printf("Worker %d working\n", id)
            time.Sleep(500 * time.Millisecond)
        }
    }
}

func main() {
    ctx, cancel := context.WithCancel(context.Background())

    go worker(ctx, 1)
    go worker(ctx, 2)

    time.Sleep(2 * time.Second)
    cancel()

    // Allow workers to exit
    time.Sleep(time.Second)
    fmt.Println("All workers exited.")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <p class="text-base md:text-lg mb-6">
        ```
        Worker 1 working
        Worker 2 working
        Worker 1 working
        Worker 2 working
        Worker 1 working
        Worker 2 working
        Worker 1 working
        Worker 2 working
        Worker 1 exiting
        Worker 2 exiting
        All workers exited.
        ```
      </p>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Context Creation:</strong> `context.WithCancel` creates a context that can be canceled.
        </li>
        <li>
          <strong>Goroutine Listening:</strong> Each worker goroutine listens for the cancellation signal via `<-ctx.Done()`.
        </li>
        <li>
          <strong>Cancellation:</strong> After 2 seconds, `cancel()` is called, signaling all workers to exit.
        </li>
        <li>
          <strong>Graceful Shutdown:</strong> Workers perform necessary cleanup before exiting.
        </li>
      </ul>

      <!-- Conclusion of Concurrency -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Go's concurrency model, centered around goroutines and channels, provides a powerful and intuitive way to build concurrent applications. By leveraging synchronization primitives like mutexes, atomic operations, and the context package, developers can create efficient, safe, and scalable software. Understanding and effectively utilizing these concurrency features is essential for harnessing the full potential of Go in modern software development.
      </p>
      <p class="text-base md:text-lg mb-6">
        **Key Takeaways:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Goroutines:</strong> Lightweight threads that enable concurrent execution.
        </li>
        <li>
          <strong>Channels:</strong> Facilitate safe communication and synchronization between goroutines.
        </li>
        <li>
          <strong>Synchronization:</strong> Use `WaitGroup`, mutexes, and atomic operations to manage concurrent access to shared resources.
        </li>
        <li>
          <strong>Select Statement:</strong> Allows waiting on multiple channel operations, enabling more flexible concurrency patterns.
        </li>
        <li>
          <strong>Context Package:</strong> Provides mechanisms for cancellation and timeout propagation across goroutines.
        </li>
      </ul>

      <!-- Further Reading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Further Reading</h2>
      <p class="text-base md:text-lg mb-4">
        To deepen your understanding of Go's concurrency model and best practices, consider exploring the following resources:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <a href="https://golang.org/doc/effective_go.html#concurrency" class="text-blue-600 hover:underline">Effective Go: Concurrency</a>
        </li>
        <li>
          <a href="https://tour.golang.org/concurrency/1" class="text-blue-600 hover:underline">A Tour of Go: Concurrency</a>
        </li>
        <li>
          <a href="https://www.golang-book.com/books/intro/12" class="text-blue-600 hover:underline">The Go Programming Language Book: Concurrency</a>
        </li>
        <li>
          <a href="https://blog.golang.org/pipelines" class="text-blue-600 hover:underline">Go Blog: Pipelines and Cancellations</a>
        </li>
        <li>
          <a href="https://golang.org/pkg/sync/" class="text-blue-600 hover:underline">Go Sync Package Documentation</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoConcurrency',
  data() {
    return {
      // Additional data properties can be added here if needed
    };
  },
};
</script>

<style>
pre {
  white-space: pre-wrap;
  overflow-x: auto;
}

@media (max-width: 768px) {
  pre, code {
    font-size: 0.5rem;
  }
}
</style>
