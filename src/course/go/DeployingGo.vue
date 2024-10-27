<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-teal-200 rounded-t-xl p-4">
      <img src="/go/logo.svg" alt="Go Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-blue-600">Deploying Go Applications</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Welcome to the "Deploying Go Applications" course! Deployment is a critical phase in the software development lifecycle, transforming your Go applications from development environments to live, accessible services. This course explores various deployment strategies, best practices, and tools that enable you to efficiently deploy, scale, and maintain your Go applications in production environments.
      </p>

      <!-- Why Deployment Matters -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Deployment Matters</h2>
      <p class="text-base md:text-lg mb-4">
        Deployment ensures that your application is accessible to users, running reliably and efficiently in real-world environments. Effective deployment strategies minimize downtime, enhance performance, and facilitate scalability, allowing your application to handle increasing loads and evolving user demands.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-Life Analogy:</strong> Deploying a Go application is like launching a new restaurant. Just as a restaurant must be prepared to serve customers efficiently, your application must be deployed in a manner that ensures smooth operation and customer satisfaction.
      </p>

      <!-- Preparing Go Applications for Deployment -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Preparing Go Applications for Deployment</h2>
      <p class="text-base md:text-lg mb-4">
        Before deploying your Go application, it's essential to prepare it for production. This involves compiling your application, managing environment configurations, and optimizing performance to ensure it runs smoothly in a live environment.
      </p>

      <!-- Preparing Applications Concepts Table -->
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
          <td class="border px-4 py-2 font-semibold">Building Executables</td>
          <td class="border px-4 py-2">Compiling Go applications into standalone binaries for various operating systems and architectures.</td>
          <td class="border px-4 py-2"><code>GOOS=linux GOARCH=amd64 go build -o myapp</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Environment Configuration</td>
          <td class="border px-4 py-2">Managing environment variables and configuration files to customize application behavior in different environments.</td>
          <td class="border px-4 py-2">Using `.env` files to store database credentials and API keys.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Optimizing Go Applications</td>
          <td class="border px-4 py-2">Enhancing application performance and reducing binary size for efficient deployment.</td>
          <td class="border px-4 py-2">Using build flags like `-ldflags` to strip debugging information.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Real-Life Example</td>
          <td class="border px-4 py-2">Preparing a meal for a large gathering, ensuring it's optimized for taste and presentation.</td>
          <td class="border px-4 py-2">Compiling and configuring your Go application to handle high traffic.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 1: Building Executables for Different Platforms -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 1: Building Executables for Different Platforms</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to compile your Go application for different operating systems and architectures, ensuring compatibility across various deployment environments.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code># Compile for Linux AMD64
GOOS=linux GOARCH=amd64 go build -o myapp-linux-amd64

# Compile for Windows AMD64
GOOS=windows GOARCH=amd64 go build -o myapp-windows-amd64.exe

# Compile for macOS AMD64
GOOS=darwin GOARCH=amd64 go build -o myapp-macos-amd64</code></pre>

      <!-- Deployment Options -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Deployment Options</h2>
      <p class="text-base md:text-lg mb-4">
        Choosing the right deployment platform is crucial for the success of your Go application. This section explores various deployment options, including cloud platforms, Platform as a Service (PaaS), Virtual Private Servers (VPS), and on-premises deployment, highlighting the pros and cons of each.
      </p>

      <!-- Deployment Options Concepts Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Deployment Option</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Pros &amp; Cons</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Cloud Platforms</td>
          <td class="border px-4 py-2">Deploying applications on cloud providers like AWS, Google Cloud Platform (GCP), and Microsoft Azure.</td>
          <td class="border px-4 py-2">
            <strong>Pros:</strong> Scalability, reliability, global reach.<br/>
            <strong>Cons:</strong> Cost can escalate, complexity in management.
          </td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Platform as a Service (PaaS)</td>
          <td class="border px-4 py-2">Using services like Heroku, Render, and DigitalOcean App Platform to deploy applications without managing underlying infrastructure.</td>
          <td class="border px-4 py-2">
            <strong>Pros:</strong> Simplified deployment, reduced management overhead.<br/>
            <strong>Cons:</strong> Less control over infrastructure, potential cost.
          </td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Virtual Private Servers (VPS)</td>
          <td class="border px-4 py-2">Deploying applications on VPS providers like Linode and DigitalOcean, offering more control over the server environment.</td>
          <td class="border px-4 py-2">
            <strong>Pros:</strong> Greater control, customizable environments.<br/>
            <strong>Cons:</strong> Requires server management skills, more maintenance.
          </td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">On-Premises Deployment</td>
          <td class="border px-4 py-2">Deploying applications within an organization's own infrastructure, often used for sensitive or proprietary applications.</td>
          <td class="border px-4 py-2">
            <strong>Pros:</strong> Complete control, enhanced security.<br/>
            <strong>Cons:</strong> High upfront costs, maintenance responsibility.
          </td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Real-Life Example</td>
          <td class="border px-4 py-2">Choosing between renting office space (cloud platforms), a managed coworking space (PaaS), leasing your own office (VPS), or building your own office from scratch (on-premises).</td>
          <td class="border px-4 py-2">Selecting the right deployment option based on your application's needs and your team's expertise.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 2: Deploying to a Cloud Platform (AWS) -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 2: Deploying to a Cloud Platform (AWS)</h3>
      <p class="text-base md:text-lg mb-4">
        This example outlines the steps to deploy a Go application to Amazon Web Services (AWS) using Elastic Beanstalk, a PaaS solution that simplifies the deployment process.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code># Install the AWS Elastic Beanstalk CLI
pip install awsebcli --upgrade

# Initialize Elastic Beanstalk in your project directory
eb init -p go-1.x my-go-app

# Create an Elastic Beanstalk environment and deploy
eb create my-go-env

# Deploy updates to the environment
eb deploy</code></pre>

      <!-- Containerization with Docker -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Containerization with Docker</h2>
      <p class="text-base md:text-lg mb-4">
        Docker provides a standardized way to package and deploy applications, ensuring consistency across different environments. Containerizing your Go application simplifies deployment, scaling, and management by encapsulating all dependencies within a container.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-Life Analogy:</strong> Containerization is like packing all the ingredients and tools needed to cook a meal into a portable kit, ensuring that anyone can recreate the dish anywhere without missing components.
      </p>

      <!-- Containerization Concepts Table -->
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
          <td class="border px-4 py-2 font-semibold">Dockerfile</td>
          <td class="border px-4 py-2">A script containing instructions to build a Docker image for your Go application.</td>
          <td class="border px-4 py-2"><code>FROM golang:1.18-alpine&lt;br/&gt;WORKDIR /app&lt;br/&gt;COPY . .&lt;br/&gt;RUN go build -o myapp&lt;br/&gt;CMD ["./myapp"]</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Docker Image</td>
          <td class="border px-4 py-2">A lightweight, standalone, and executable package that includes everything needed to run your application.</td>
          <td class="border px-4 py-2">Creating an image for your Go application to deploy across different environments.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Docker Container</td>
          <td class="border px-4 py-2">A running instance of a Docker image, encapsulating your application and its environment.</td>
          <td class="border px-4 py-2">Running multiple instances of your Go application in isolated containers.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Docker Compose</td>
          <td class="border px-4 py-2">A tool for defining and running multi-container Docker applications using a YAML file.</td>
          <td class="border px-4 py-2"><code>version: '3'&lt;br/&gt;services:&lt;br/&gt;  app:&lt;br/&gt;    build: .&lt;br/&gt;    ports:&lt;br/&gt;      - "8080:8080"</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Real-Life Example</td>
          <td class="border px-4 py-2">Packing all necessary tools and ingredients into a portable kit for consistent meal preparation anywhere.</td>
          <td class="border px-4 py-2">Deploying your Go application in Docker containers to ensure it runs identically in development, staging, and production environments.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 3: Creating a Dockerfile for Go Application -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 3: Creating a Dockerfile for Go Application</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to create a Dockerfile for your Go application, enabling you to containerize and deploy it seamlessly across different environments.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>FROM golang:1.18-alpine&lt;br/&gt;

# Set the working directory inside the container
WORKDIR /app&lt;br/&gt;

# Copy the Go module files and download dependencies
COPY go.mod go.sum ./&lt;br/&gt;
RUN go mod download&lt;br/&gt;

# Copy the entire project
COPY . .&lt;br/&gt;

# Build the Go application
RUN go build -o myapp&lt;br/&gt;

# Expose the port the app runs on
EXPOSE 8080&lt;br/&gt;

# Command to run the executable
CMD ["./myapp"]</code></pre>

      <!-- Continuous Integration and Continuous Deployment (CI/CD) -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Continuous Integration and Continuous Deployment (CI/CD)</h2>
      <p class="text-base md:text-lg mb-4">
        CI/CD pipelines automate the process of building, testing, and deploying your Go applications. Implementing CI/CD ensures that your deployments are consistent, reliable, and free from human error, allowing for rapid and frequent releases.
      </p>

      <!-- CI/CD Concepts Table -->
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
          <td class="border px-4 py-2 font-semibold">Continuous Integration (CI)</td>
          <td class="border px-4 py-2">Automating the process of integrating code changes from multiple contributors into a single project.</td>
          <td class="border px-4 py-2">Automatically building and testing your Go application upon each commit.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Continuous Deployment (CD)</td>
          <td class="border px-4 py-2">Automating the deployment of applications to production environments after passing tests.</td>
          <td class="border px-4 py-2">Deploying your Go application to AWS Elastic Beanstalk automatically after successful CI tests.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">CI/CD Tools</td>
          <td class="border px-4 py-2">Platforms like GitHub Actions, GitLab CI, Jenkins, and CircleCI that facilitate CI/CD processes.</td>
          <td class="border px-4 py-2">Using GitHub Actions to automate build and deployment steps for your Go application.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Pipeline Stages</td>
          <td class="border px-4 py-2">Distinct phases in a CI/CD pipeline, such as build, test, and deploy.</td>
          <td class="border px-4 py-2">Setting up a pipeline that builds the application, runs tests, and deploys to production.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Real-Life Example</td>
          <td class="border px-4 py-2">Automating the assembly line in a factory to ensure products are built, tested, and packaged consistently.</td>
          <td class="border px-4 py-2">Ensuring that every version of your Go application is automatically built, tested, and deployed without manual intervention.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 4: Setting Up a CI/CD Pipeline with GitHub Actions -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 4: Setting Up a CI/CD Pipeline with GitHub Actions</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to configure a simple CI/CD pipeline using GitHub Actions to automate the build and deployment of your Go application.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>.github/workflows/ci-cd.yml

name: CI/CD Pipeline

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout Repository
      uses: actions/checkout@v2

    - name: Set up Go
      uses: actions/setup-go@v2
      with:
        go-version: 1.18

    - name: Build
      run: go build -v ./...

    - name: Test
      run: go test -v ./...

    - name: Deploy to AWS Elastic Beanstalk
      if: success()
      uses: einaregilsson/beanstalk-deploy@v19
      with:
        application_name: my-go-app
        environment_name: my-go-env
        version_label: &#123;&#123; github.sha &#125;&#125;
        region: us-west-2
        bucket_name: my-elastic-beanstalk-bucket
        bucket_key: my-go-app/&#123;&#123; github.sha &#125;&#125;.zip
        deployment_package: ./myapp.zip
      env:
        AWS_ACCESS_KEY_ID: &#123;&#123; secrets.AWS_ACCESS_KEY_ID &#125;&#125;
        AWS_SECRET_ACCESS_KEY: &#123;&#123; secrets.AWS_SECRET_ACCESS_KEY &#125;&#125;</code></pre>

      <!-- Scaling Go Applications -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Scaling Go Applications</h2>
      <p class="text-base md:text-lg mb-4">
        As your application grows, it's essential to scale it effectively to handle increased traffic and data. This section explores strategies for scaling Go applications, including horizontal and vertical scaling, load balancing, and auto-scaling techniques.
      </p>

      <!-- Scaling Concepts Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Scaling Strategy</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example Use Case</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Horizontal Scaling</td>
          <td class="border px-4 py-2">Adding more instances of your application to distribute the load.</td>
          <td class="border px-4 py-2">Running multiple containers of your Go application behind a load balancer.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Vertical Scaling</td>
          <td class="border px-4 py-2">Increasing the resources (CPU, RAM) of existing instances.</td>
          <td class="border px-4 py-2">Upgrading your server's hardware to handle more concurrent users.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Load Balancing</td>
          <td class="border px-4 py-2">Distributing incoming traffic across multiple instances to ensure no single instance is overwhelmed.</td>
          <td class="border px-4 py-2">Using AWS Elastic Load Balancer to manage traffic to multiple Go application instances.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Auto-Scaling</td>
          <td class="border px-4 py-2">Automatically adjusting the number of running instances based on current demand.</td>
          <td class="border px-4 py-2">Setting up AWS Auto Scaling groups to add or remove instances based on CPU usage.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Real-Life Example</td>
          <td class="border px-4 py-2">Expanding a restaurant's seating capacity and staff to accommodate more customers during peak hours.</td>
          <td class="border px-4 py-2">Scaling your Go application horizontally during high traffic events like product launches.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 5: Implementing Load Balancing with AWS ELB -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 5: Implementing Load Balancing with AWS ELB</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to set up an Elastic Load Balancer (ELB) in AWS to distribute traffic across multiple instances of your Go application, ensuring high availability and reliability.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code># Create an Elastic Load Balancer
aws elb create-load-balancer \
    --load-balancer-name my-go-elb \
    --listeners "Protocol=HTTP,LoadBalancerPort=80,InstanceProtocol=HTTP,InstancePort=8080" \
    --availability-zones us-west-2a us-west-2b

# Register instances with the ELB
aws elb register-instances-with-load-balancer \
    --load-balancer-name my-go-elb \
    --instances i-12345678 i-87654321

# Configure health checks
aws elb configure-health-check \
    --load-balancer-name my-go-elb \
    --health-check Target=HTTP:8080/health,Interval=30,Timeout=5,UnhealthyThreshold=2,HealthyThreshold=2</code></pre>

      <!-- Monitoring and Logging -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Monitoring and Logging</h2>
      <p class="text-base md:text-lg mb-4">
        Monitoring and logging are essential for maintaining the health and performance of your deployed Go applications. They provide insights into application behavior, help identify issues proactively, and ensure that your application runs smoothly in production environments.
      </p>

      <!-- Monitoring Concepts Table -->
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
          <td class="border px-4 py-2 font-semibold">Monitoring Tools</td>
          <td class="border px-4 py-2">Tools like Prometheus and Grafana that track application metrics and performance.</td>
          <td class="border px-4 py-2">Monitoring CPU usage, memory consumption, and request latency of your Go application.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Logging Strategies</td>
          <td class="border px-4 py-2">Implementing structured logging to capture detailed application logs.</td>
          <td class="border px-4 py-2">Logging user actions, errors, and system events for troubleshooting.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Alerting</td>
          <td class="border px-4 py-2">Setting up alerts based on specific metrics or log patterns to notify you of potential issues.</td>
          <td class="border px-4 py-2">Receiving notifications when response times exceed a certain threshold.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Real-Life Example</td>
          <td class="border px-4 py-2">Monitoring machinery in a factory to detect and address malfunctions proactively.</td>
          <td class="border px-4 py-2">Using Grafana dashboards to visualize application performance metrics.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Security Monitoring</td>
          <td class="border px-4 py-2">Tracking security-related events to identify and respond to potential threats.</td>
          <td class="border px-4 py-2">Monitoring failed login attempts and unusual traffic patterns.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 6: Setting Up Monitoring with Prometheus and Grafana -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 6: Setting Up Monitoring with Prometheus and Grafana</h3>
      <p class="text-base md:text-lg mb-4">
        This example outlines the steps to integrate Prometheus and Grafana for monitoring your Go application. It covers installing the tools, configuring metrics collection, and visualizing data through dashboards.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code># Install Prometheus
docker run -d --name prometheus -p 9090:9090 \
    -v /path/to/prometheus.yml:/etc/prometheus/prometheus.yml \
    prom/prometheus

# Install Grafana
docker run -d --name grafana -p 3000:3000 grafana/grafana

# Configure Prometheus to scrape metrics from your Go application
# prometheus.yml
scrape_configs:
  - job_name: 'go-app'
    static_configs:
      - targets: ['localhost:8080']

# Access Grafana at http://localhost:3000 and add Prometheus as a data source
# Create dashboards to visualize metrics like CPU usage, memory consumption, and request latency</code></pre>

      <!-- Best Practices and Common Pitfalls -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices and Common Pitfalls</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Automate Deployment Processes:</strong> Use CI/CD pipelines to automate builds, tests, and deployments, reducing manual errors and increasing efficiency.</li>
        <li><strong>Use Environment Variables:</strong> Manage configuration through environment variables to keep sensitive information secure and configurations flexible.</li>
        <li><strong>Implement Health Checks:</strong> Ensure your application can self-monitor and report its health status to orchestrate automated recovery.</li>
        <li><strong>Secure Your Application:</strong> Implement TLS/SSL, manage secrets properly, and follow security best practices to protect your application.</li>
        <li><strong>Monitor and Log Effectively:</strong> Continuously monitor application performance and maintain comprehensive logs to quickly identify and resolve issues.</li>
      </ul>

      <!-- Common Pitfalls Concepts Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Pitfall</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">How to Avoid</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Misconfigurations</td>
          <td class="border px-4 py-2">Incorrect settings in deployment configurations can lead to application failures.</td>
          <td class="border px-4 py-2">Double-check configurations and use version control for configuration files.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Overlooking Security Measures</td>
          <td class="border px-4 py-2">Neglecting security can expose your application to vulnerabilities.</td>
          <td class="border px-4 py-2">Implement security best practices and regularly audit your application.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Ignoring Monitoring</td>
          <td class="border px-4 py-2">Without monitoring, it's challenging to detect and respond to issues promptly.</td>
          <td class="border px-4 py-2">Set up comprehensive monitoring and alerting systems.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Lack of Scalability Planning</td>
          <td class="border px-4 py-2">Failing to plan for scaling can result in poor application performance under load.</td>
          <td class="border px-4 py-2">Design your deployment architecture with scalability in mind from the outset.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Real-Life Example</td>
          <td class="border px-4 py-2">Launching a product without proper market research, leading to unforeseen issues and failures.</td>
          <td class="border px-4 py-2">Thoroughly plan and test your deployment strategy to ensure success.</td>
        </tr>
        </tbody>
      </table>

      <!-- Conclusion and Next Steps -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion and Next Steps</h2>
      <p class="text-base md:text-lg mb-4">
        Congratulations! You've now covered the essential aspects of deploying Go applications. From preparing your application for deployment and choosing the right deployment platform to implementing containerization and setting up CI/CD pipelines, you've gained the knowledge to deploy, scale, and maintain your Go applications effectively.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Why and When to Deploy Go Applications:</strong> Deploying is crucial whenever your application is ready to be used by end-users. Effective deployment strategies ensure that your application runs reliably, scales with demand, and remains secure, providing a seamless experience for your users.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next course, we'll explore advanced topics such as performance optimization and security enhancements, building upon the deployment strategies you've learned here.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeployingGoApplications',
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
</style>
