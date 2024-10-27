<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-teal-200 rounded-t-xl p-4">
      <img src="/go/logo.svg" alt="Go Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-blue-600">Go Concurrency</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Concurrency is one of the standout features of Go, enabling developers to build highly efficient and scalable applications. Unlike parallelism, which focuses on executing multiple tasks simultaneously, concurrency is about managing multiple tasks at the same time, making Go an excellent choice for applications that require handling numerous tasks efficiently. This module explores Go's concurrency model, diving into goroutines, channels, synchronization mechanisms, and common concurrency patterns. Through detailed explanations and practical insights, you'll gain a deep understanding of how to leverage Go's concurrency features to build robust and performant applications.
      </p>

      <!-- Goroutines -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Goroutines</h2>
      <p class="text-base md:text-lg mb-4">
        Goroutines are the cornerstone of Go's concurrency model. They are lightweight threads managed by the Go runtime, allowing functions or methods to execute concurrently with other functions or methods. Unlike traditional threads in other languages, goroutines are inexpensive in terms of memory and resources, enabling the creation of thousands or even millions of concurrent operations without significant overhead.
      </p>

      <!-- Creating and Managing Goroutines -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Creating and Managing Goroutines</h3>
      <p class="text-base md:text-lg mb-4">
        To create a goroutine, use the <code>go</code> keyword followed by a function call. This instructs the Go runtime to execute the function concurrently with the calling code.
      </p>

      <p class="text-base md:text-lg mb-6">
        <strong>Example: Creating Goroutines</strong>
      </p>
      <div class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <pre><code>package main

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
}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <div class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
        <pre><code>World
Hello
World
Hello
World
Hello
World
Hello
World
Hello</code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Goroutine Creation:</strong> The <code>go say("Hello")</code> statement starts a new goroutine that executes the <code>say</code> function concurrently.
        </li>
        <li>
          <strong>Main Goroutine:</strong> The <code>main</code> function continues executing and calls <code>say("World")</code> in the main goroutine.
        </li>
        <li>
          <strong>Concurrency:</strong> Both goroutines run concurrently, interleaving their output.
        </li>
      </ul>

      <!-- Synchronizing Goroutines -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Synchronizing Goroutines</h3>
      <p class="text-base md:text-lg mb-4">
        Since goroutines execute concurrently, it's essential to synchronize them to ensure that the main program waits for goroutines to complete. Common synchronization mechanisms include <code>WaitGroup</code>, <code>Mutex</code>, and channels.
      </p>

      <!-- Using WaitGroup -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Using WaitGroup</h4>
      <p class="text-base md:text-lg mb-4">
        <code>WaitGroup</code> is used to wait for a collection of goroutines to finish executing.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Using WaitGroup</strong>
      </p>
      <div class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <pre><code>package main

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
}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <div class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
        <pre><code>Worker 1 starting
Worker 2 starting
Worker 3 starting
Worker 4 starting
Worker 5 starting
Worker 1 done
Worker 2 done
Worker 3 done
Worker 4 done
Worker 5 done
All workers done</code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>WaitGroup Initialization:</strong> A <code>WaitGroup</code> is declared to track the goroutines.
        </li>
        <li>
          <strong>Adding Goroutines:</strong> <code>wg.Add(1)</code> increments the <code>WaitGroup</code> counter for each new goroutine.
        </li>
        <li>
          <strong>Decrementing Counter:</strong> <code>defer wg.Done()</code> decrements the counter when the goroutine completes.
        </li>
        <li>
          <strong>Waiting for Completion:</strong> <code>wg.Wait()</code> blocks the main goroutine until the counter reaches zero.
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
        Channels are created using the <code>make</code> function and can be either buffered or unbuffered.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Creating and Using Channels</strong>
      </p>
      <div class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <pre><code>package main

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
}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <div class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
        <pre><code>Hello from goroutine</code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Channel Creation:</strong> <code>messages := make(chan string)</code> creates an unbuffered channel for strings.
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
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Buffered Channels</strong>
      </p>
      <div class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <pre><code>package main

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
}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <div class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
        <pre><code>1
2
3</code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Buffered Channel Creation:</strong> <code>buffered := make(chan int, 3)</code> creates a channel with a capacity of 3.
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
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Channel Directions</strong>
      </p>
      <div class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <pre><code>package main

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
}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <div class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
        <pre><code>1
2
3
4
5</code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Send-Only Channel:</strong> <code>chan<- int</code> specifies that the channel is send-only within the <code>sendData</code> function.
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
        The <code>select</code> statement allows a goroutine to wait on multiple communication operations. It blocks until one of its cases can run, then executes that case. This is essential for handling multiple channel operations concurrently.
      </p>

      <!-- Basic Select Usage -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Basic Select Usage</h3>
      <p class="text-base md:text-lg mb-4">
        Using <code>select</code>, you can handle multiple channel operations gracefully, executing whichever one becomes ready first.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Basic Select Usage</strong>
      </p>
      <div class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <pre><code>package main

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
}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Possible Output:</strong>
      </p>
      <div class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
        <pre><code>Message from ch2
Message from ch1</code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Multiple Goroutines:</strong> Two goroutines send messages to different channels after different delays.
        </li>
        <li>
          <strong>Select Statement:</strong> The <code>select</code> statement waits for messages from either channel and prints them as they arrive.
        </li>
      </ul>

      <!-- Default Case in Select -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Default Case in Select</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>default</code> case in a <code>select</code> statement executes immediately if no other case is ready, preventing the <code>select</code> from blocking.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Select with Default Case</strong>
      </p>
      <div class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <pre><code>package main

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
}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <p class="text-base md:text-lg mb-6">
        First Select:
      </p>
      <div class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
        <pre><code>No message received.</code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        Second Select (after message is sent):
      </p>
      <div class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
        <pre><code>Received: Hello after delay</code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>First Select:</strong> No message is sent to <code>ch</code>, so the <code>default</code> case executes immediately.
        </li>
        <li>
          <strong>Second Select:</strong> After a delay, a message is sent to <code>ch</code>, so the corresponding case executes.
        </li>
      </ul>

      <!-- Range Over Channels -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Range Over Channels</h3>
      <p class="text-base md:text-lg mb-4">
        You can use <code>range</code> to receive values from a channel until it is closed. This simplifies the process of receiving multiple values from a channel without explicitly handling each receive operation.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Range Over Channels</strong>
      </p>
      <div class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <pre><code>
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
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <div class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
        <pre><code>
    Received: 1
    Received: 2
    Received: 3
    Received: 4
    Received: 5
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Sending Goroutine:</strong> Sends integers 1 to 5 to the channel and then closes it.
        </li>
        <li>
          <strong>Receiving with Range:</strong> The <code>for num := range ch</code> loop receives values until the channel is closed.
        </li>
        <li>
          <strong>Automatic Termination:</strong> Once the channel is closed and all values are received, the loop terminates.
        </li>
      </ul>

      <!-- Mutexes -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Mutexes</h2>
      <p class="text-base md:text-lg mb-4">
        Mutexes (mutual exclusions) are used to protect shared data from being accessed concurrently, preventing race conditions. They ensure that only one goroutine can access a critical section of code or shared resource at a time.
      </p>

      <!-- Using Mutex -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using Mutex</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>sync.Mutex</code> type provides two main methods: <code>Lock</code> and <code>Unlock</code>, which are used to control access to shared resources.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Using Mutex</strong>
      </p>
      <div class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <pre><code>
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
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <div class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
        <pre><code>
    Final Counter: 1000
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Counter Struct:</strong> Contains a <code>sync.Mutex</code> and a <code>count</code> variable.
        </li>
        <li>
          <strong>Increment Method:</strong> Locks the mutex before incrementing the counter and unlocks it afterward.
        </li>
        <li>
          <strong>Concurrency Safety:</strong> Ensures that only one goroutine can access the <code>count</code> variable at a time, preventing race conditions.
        </li>
        <li>
          <strong>WaitGroup Usage:</strong> Waits for all goroutines to finish before printing the final counter value.
        </li>
      </ul>

      <!-- Atomic Operations -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Atomic Operations</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>sync/atomic</code> package provides low-level atomic memory primitives useful for implementing synchronization algorithms. Atomic operations are lock-free and can offer better performance for simple synchronization tasks.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Atomic Operations</strong>
      </p>
      <div class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <pre><code>
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
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <div class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
        <pre><code>
    Final Counter: 1000
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Atomic Add:</strong> <code>atomic.AddInt64(&counter, 1)</code> atomically increments the <code>counter</code> variable, ensuring thread-safe operations without using mutexes.
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
        Buffered channels are often used in implementing worker pools, allowing a fixed number of goroutines to process tasks concurrently. This pattern helps manage workload effectively while preventing resource exhaustion.
      </p>

      <!-- Worker Pool Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Worker Pool Example</h3>
      <p class="text-base md:text-lg mb-4">
        A worker pool limits the number of concurrent goroutines processing tasks, ensuring controlled concurrency and efficient resource utilization.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Worker Pool</strong>
      </p>
      <div class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <pre><code>
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
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Possible Output:</strong>
      </p>
      <p class="text-base md:text-lg mb-6">
        Output will vary due to random sleep durations:
      </p>
      <div class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
        <pre><code>
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
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Job and Result Channels:</strong> <code>jobs</code> channel holds job identifiers, and <code>results</code> channel collects the processed results.
        </li>
        <li>
          <strong>Workers:</strong> Five worker goroutines are spawned, each listening to the <code>jobs</code> channel, processing jobs, and sending results to the <code>results</code> channel.
        </li>
        <li>
          <strong>Job Submission:</strong> Ten jobs are submitted to the <code>jobs</code> channel and then the channel is closed to signal no more jobs.
        </li>
        <li>
          <strong>Waiting for Completion:</strong> <code>wg.Wait()</code> ensures all workers have finished processing before closing the <code>results</code> channel.
        </li>
        <li>
          <strong>Result Collection:</strong> Results are collected and printed from the <code>results</code> channel.
        </li>
      </ul>

      <!-- Buffered Channels for Task Queuing -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Buffered Channels for Task Queuing</h3>
      <p class="text-base md:text-lg mb-4">
        Buffered channels can act as queues, allowing tasks to be buffered before being processed by workers. This setup helps in decoupling task submission from task processing, enhancing system throughput.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Buffered Channels as Queues</strong>
      </p>
      <div class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <pre><code>
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
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <div class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
        <pre><code>
    Processing Task 1
    Processing Task 2
    Processing Task 3
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Buffered Queue:</strong> <code>queue := make(chan string, 3)</code> creates a buffered channel with a capacity of 3.
        </li>
        <li>
          <strong>Enqueuing Tasks:</strong> Three tasks are enqueued without blocking, thanks to the buffered channel.
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
        Mutexes ensure that only one goroutine accesses a shared resource at a time, preventing race conditions. They are essential when multiple goroutines need to read and write shared data.
      </p>

      <!-- Mutex Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Mutex Example</h3>
      <p class="text-base md:text-lg mb-4">
        Demonstrates the use of <code>sync.Mutex</code> to protect shared data.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Mutex for Safe Access</strong>
      </p>
      <div class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <pre><code>
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
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <div class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
        <pre><code>
    Final count: 1000
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>SafeCounter Struct:</strong> Contains a <code>sync.Mutex</code> and a <code>count</code> map to safely count occurrences.
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
        The <code>sync.Once</code> type ensures that a piece of code is executed only once, even if called from multiple goroutines. This is useful for initialization tasks that should occur only once during the program's execution.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Using sync.Once</strong>
      </p>
      <div class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <pre><code>
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
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Possible Output:</strong>
      </p>
      <div class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
        <pre><code>
    This should run only once.
    Goroutine 0 finished.
    Goroutine 1 finished.
    Goroutine 2 finished.
    Goroutine 3 finished.
    Goroutine 4 finished.
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>sync.Once Initialization:</strong> Declares a <code>sync.Once</code> variable to ensure a function runs only once.
        </li>
        <li>
          <strong>Do Method:</strong> The anonymous function passed to <code>once.Do</code> executes only once, regardless of how many times it's called.
        </li>
        <li>
          <strong>Goroutine Execution:</strong> Each goroutine attempts to execute the <code>Do</code> method, but only the first call executes the function.
        </li>
      </ul>

      <!-- Select with Timeout -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Select with Timeout</h2>
      <p class="text-base md:text-lg mb-4">
        Implementing timeouts with <code>select</code> helps prevent goroutines from blocking indefinitely by providing alternative execution paths if certain operations take too long. This is crucial for building responsive and resilient applications.
      </p>

      <!-- Select with Timeout Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Select with Timeout Example</h3>
      <p class="text-base md:text-lg mb-4">
        Demonstrates how to use <code>select</code> with a timeout using <code>time.After</code>.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Select with Timeout</strong>
      </p>
      <div class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <pre><code>
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
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Possible Output:</strong>
      </p>
      <div class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
        <pre><code>
    Timeout: No message received within 2 seconds.
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Channel Setup:</strong> A goroutine sends a message to <code>ch</code> after a 3-second delay.
        </li>
        <li>
          <strong>Select with Timeout:</strong> The <code>select</code> statement waits for either a message on <code>ch</code> or a timeout after 2 seconds.
        </li>
        <li>
          <strong>Outcome:</strong> Since the message arrives after the timeout, the <code>default</code> case executes.
        </li>
      </ul>

      <!-- Concurrency Patterns: Fan-Out, Fan-In -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Concurrency Patterns: Fan-Out, Fan-In</h2>
      <p class="text-base md:text-lg mb-4">
        The Fan-Out, Fan-In pattern involves distributing work across multiple goroutines (Fan-Out) and then collecting the results (Fan-In). This pattern is useful for parallelizing tasks and aggregating results efficiently, enhancing both performance and scalability.
      </p>

      <!-- Fan-Out, Fan-In Overview -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Fan-Out, Fan-In Overview</h3>
      <p class="text-base md:text-lg mb-4">
        <strong>Fan-Out:</strong> Distributes tasks to multiple worker goroutines, allowing them to process tasks concurrently.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Fan-In:</strong> Collects the results from all worker goroutines, aggregating them into a single channel or collection.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Fan-Out, Fan-In</strong>
      </p>
      <div class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <pre><code>
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
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Possible Output:</strong>
      </p>
      <div class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
        <pre><code>
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
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Fan-Out:</strong> Three worker goroutines are spawned to process jobs concurrently, allowing multiple tasks to be handled in parallel.
        </li>
        <li>
          <strong>Job Distribution:</strong> Jobs are sent to the <code>jobs</code> channel and distributed to available workers.
        </li>
        <li>
          <strong>Fan-In:</strong> Results from workers are collected from the <code>results</code> channel and printed.
        </li>
        <li>
          <strong>Synchronization:</strong> A separate goroutine waits for all workers to finish before closing the <code>results</code> channel, ensuring that all results are captured.
        </li>
      </ul>

      <!-- Race Conditions and the Race Detector -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Race Conditions and the Race Detector</h2>
      <p class="text-base md:text-lg mb-4">
        Race conditions occur when multiple goroutines access shared data concurrently, and at least one goroutine modifies the data. These conditions can lead to unpredictable behavior and subtle bugs that are challenging to diagnose. Go provides robust tools to detect and prevent race conditions, ensuring the reliability of concurrent programs.
      </p>

      <!-- Understanding Race Conditions -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Understanding Race Conditions</h3>
      <p class="text-base md:text-lg mb-4">
        Race conditions happen when goroutines perform conflicting operations on shared resources without proper synchronization. This can result in data corruption, inconsistent states, and erratic program behavior.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Scenario:</strong> Multiple goroutines incrementing a shared counter without synchronization.
      </p>
      <p class="text-base md:text-lg mb-6">
        **Race Condition Code:**
      </p>
      <div class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <pre><code>
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
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        **Running with Race Detector:**
      </p>
      <p class="text-base md:text-lg mb-6">
        ```bash
        go run -race main.go
        ```
      </p>
      <p class="text-base md:text-lg mb-6">
        **Possible Race Detector Output:**
      </p>
      <div class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
        <pre><code>
    WARNING: DATA RACE
    Read at 0x000000... by goroutine 7:
      main.main.func1()
          /path/to/main.go:12 +0x...

    Previous write at 0x000000... by goroutine 6:
      main.main.func1()
          /path/to/main.go:12 +0x...

    Goroutine 7 (running) created at:
      main.main()
          /path/to/main.go:11 +0x...

    Goroutine 6 (finished) created at:
      main.main()
          /path/to/main.go:11 +0x...
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Race Detection:</strong> Running the program with the <code>-race</code> flag enables the race detector, which monitors concurrent access to shared variables.
        </li>
        <li>
          <strong>Race Report:</strong> The race detector identifies that multiple goroutines are accessing and modifying the <code>counter</code> variable concurrently without synchronization.
        </li>
        <li>
          <strong>Resolution:</strong> To prevent race conditions, use synchronization mechanisms like <code>Mutex</code> or atomic operations.
        </li>
      </ul>

      <!-- Fixing Race Conditions -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Fixing Race Conditions</h3>
      <p class="text-base md:text-lg mb-4">
        To prevent race conditions, synchronization primitives such as <code>Mutex</code> or atomic operations should be employed. Here's how to resolve the above race condition using a <code>Mutex</code>:
      </p>
      <p class="text-base md:text-lg mb-6">
        **Corrected Code with Mutex:**
      </p>
      <div class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <pre><code>
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
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <div class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
        <pre><code>
    Final Counter: 1000
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Mutex Protection:</strong> The <code>mu.Lock()</code> and <code>mu.Unlock()</code> calls ensure that only one goroutine can modify the <code>counter</code> at a time, preventing concurrent writes.
        </li>
        <li>
          <strong>Data Integrity:</strong> With proper synchronization, the final counter value accurately reflects all increments, eliminating race conditions.
        </li>
      </ul>

      <!-- Context Package -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Context Package</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>context</code> package in Go provides mechanisms for carrying deadlines, cancellation signals, and other request-scoped values across API boundaries and between goroutines. It's essential for managing the lifecycle of goroutines, especially in large applications where tasks may need to be canceled or timed out gracefully.
      </p>

      <!-- Context Syntax and Usage -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Context Syntax and Usage</h3>
      <p class="text-base md:text-lg mb-4">
        Contexts are created using functions like <code>context.Background()</code>, <code>context.TODO()</code>, <code>context.WithCancel()</code>, <code>context.WithDeadline()</code>, and <code>context.WithTimeout()</code>. These contexts can then be passed to goroutines and functions to control their execution.
      </p>

      <p class="text-base md:text-lg mb-6">
        <strong>Example: Using Context for Cancellation</strong>
      </p>
      <div class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <pre><code>
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
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <div class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
        <pre><code>
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
        </code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Context Creation:</strong> <code>context.WithCancel</code> creates a cancellable context.
        </li>
        <li>
          <strong>Passing Context:</strong> The context is passed to worker goroutines, allowing them to listen for cancellation signals.
        </li>
        <li>
          <strong>Cancellation:</strong> After 2 seconds, <code>cancel()</code> is called, signaling all workers to exit.
        </li>
        <li>
          <strong>Graceful Shutdown:</strong> Workers receive the cancellation signal and exit gracefully, ensuring no goroutines are left hanging.
        </li>
      </ul>

      <!-- Conclusion of Concurrency -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Go's concurrency model, centered around goroutines and channels, provides a powerful and intuitive way to build concurrent applications. By leveraging synchronization primitives like <code>WaitGroup</code>, mutexes, and atomic operations, developers can create efficient, safe, and scalable software. Understanding and effectively utilizing these concurrency features is essential for harnessing the full potential of Go in modern software development.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Key Takeaways:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Goroutines:</strong> Lightweight threads that enable concurrent execution of functions.
        </li>
        <li>
          <strong>Channels:</strong> Facilitate safe communication and synchronization between goroutines.
        </li>
        <li>
          <strong>Synchronization Primitives:</strong> Utilize <code>WaitGroup</code>, mutexes, and atomic operations to manage concurrent access to shared resources.
        </li>
        <li>
          <strong>Concurrency Patterns:</strong> Implement patterns like Fan-Out, Fan-In, and Worker Pools to organize and optimize concurrent operations.
        </li>
        <li>
          <strong>Race Detection:</strong> Employ Go's race detector to identify and eliminate race conditions, ensuring the reliability of concurrent programs.
        </li>
        <li>
          <strong>Context Management:</strong> Use the <code>context</code> package to control the lifecycle of goroutines, enabling cancellation and timeout capabilities.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        By adhering to these principles and best practices, developers can create robust and efficient Go applications that effectively leverage concurrency to meet performance and scalability demands. Continue exploring advanced topics and real-world applications to further enhance your Go concurrency expertise.
      </p>

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

<style scoped>
pre {
  white-space: pre-wrap; /* Ensures text wrapping for long lines */
  overflow-x: auto;      /* Adds horizontal scroll for long code lines */
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 0.75rem;
  text-align: left;
  border: 1px solid #e2e8f0;
}

th {
  background-color: #f7fafc;
}

@media (max-width: 768px) {
  pre, code {
    font-size: 0.5rem; /* Smaller font size for mobile devices */
  }

  th, td {
    padding: 0.5rem;
  }
}

a {
  color: #3182ce;
}

a:hover {
  text-decoration: underline;
}

h2, p , h1, h3, h4{
  font-family: "Roboto Condensed", sans-serif;
}

a {
  font-family: "JetBrains Mono", sans-serif;
}

</style>
