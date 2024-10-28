<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-cyan-400 rounded-t-xl p-4">
      <img src="/icons/react.svg" alt="React Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-cyan-950">Form Validation in React</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">

      <!-- Introduction to Form Validation -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Introduction to Form Validation</h2>
      <p class="text-base md:text-lg mb-6">
        Form validation is a critical aspect of building robust and user-friendly React applications. It ensures that the data submitted by users meets the required criteria before being processed or stored. Effective form validation enhances user experience by providing immediate feedback and preventing errors.
      </p>

      <!-- Controlled Components for Validation -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Controlled Components for Validation</h2>
      <p class="text-base md:text-lg mb-4">
        In React, controlled components are form elements that derive their values from React state. This approach allows for precise control over user input and facilitates real-time validation.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Implementing Controlled Inputs</h3>
      <p class="text-base md:text-lg mb-6">
        To implement controlled inputs, bind the input's value to a state variable and update the state on every change. This setup enables you to validate the input as the user types.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, &#123; useState &#125; from 'react';

function ControlledForm() &#123;
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) =&gt; &#123;
    setEmail(e.target.value);
    // Simple email validation regex
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(e.target.value)) &#123;
      setError('Please enter a valid email address.');
    &#125; else &#123;
      setError('');
    &#125;
  &#125;;

  const handleSubmit = (e) =&gt; &#123;
    e.preventDefault();
    if (error === '' && email !== '') &#123;
      alert(`Submitted Email: ${email}`);
    &#125;
  &#125;;

  return (
    &lt;form onSubmit=&#123;handleSubmit&#125;&gt;
      &lt;label&gt;
        Email:
        &lt;input
          type="email"
          value=&#123;email&#125;
          onChange=&#123;handleChange&#125;
          className="border p-2 rounded-md"
        /&gt;
      &lt;/label&gt;
      &#123;error && &lt;p className="text-red-500"&gt;&#123;error&#125;&lt;/p&gt;&#125;
      &lt;button type="submit" 
      disabled=&#123;error !== '' || email === ''&#125; 
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
      &gt;
        Submit
      &lt;/button&gt;
    &lt;/form&gt;
  );
&#125;;

export default ControlledForm;
        </code>
      </pre>

      <!-- Uncontrolled Components for Validation -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Uncontrolled Components for Validation</h2>
      <p class="text-base md:text-lg mb-4">
        Uncontrolled components manage their own state internally without relying on React state. They are useful for simple forms or when integrating with non-React libraries.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using Refs for Validation</h3>
      <p class="text-base md:text-lg mb-6">
        Refs provide a way to access DOM nodes directly. They can be used to retrieve form values and perform validation upon submission.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, &#123; useRef, useState &#125; from 'react';

function UncontrolledForm() &#123;
  const emailRef = useRef();
  const [error, setError] = useState('');

  const handleSubmit = (e) =&gt; &#123;
    e.preventDefault();
    const email = emailRef.current.value;
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) &#123;
      setError('Please enter a valid email address.');
    &#125; else &#123;
      setError('');
      alert(`Submitted Email: ${email}`);
    &#125;
  &#125;;

  return (
    &lt;form onSubmit=&#123;handleSubmit&#125;&gt;
      &lt;label&gt;
        Email:
        &lt;input
          type="email"
          ref=&#123;emailRef&#125;
          className="border p-2 rounded-md"
        /&gt;
      &lt;/label&gt;
      &#123;error && &lt;p className="text-red-500"&gt;&#123;error&#125;&lt;/p&gt;&#125;
      &lt;button type="submit" className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md"&gt;
        Submit
      &lt;/button&gt;
    &lt;/form&gt;
  );
&#125;;

export default UncontrolledForm;
        </code>
      </pre>

      <!-- Form Validation Techniques -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Form Validation Techniques</h2>
      <p class="text-base md:text-lg mb-4">
        Implementing effective form validation involves various techniques to ensure data integrity and enhance user experience.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Client-Side Validation</h3>
      <p class="text-base md:text-lg mb-6">
        Client-side validation occurs in the user's browser before data is sent to the server. It provides immediate feedback, reducing server load and improving responsiveness.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Server-Side Validation</h3>
      <p class="text-base md:text-lg mb-6">
        Server-side validation ensures data integrity by validating inputs on the server. It's essential for security, as client-side validation can be bypassed.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Real-Time Validation</h3>
      <p class="text-base md:text-lg mb-6">
        Real-time validation provides instant feedback as users fill out form fields, enhancing usability and preventing errors before submission.
      </p>

      <!-- Using Validation Libraries -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Using Validation Libraries</h2>
      <p class="text-base md:text-lg mb-4">
        Several libraries simplify form validation in React by providing built-in validation rules, state management, and error handling.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Formik</h3>
      <p class="text-base md:text-lg mb-6">
        Formik is a popular library that helps manage form state, validation, and submission with ease. It integrates well with various validation schemas like Yup.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">React Hook Form</h3>
      <p class="text-base md:text-lg mb-6">
        React Hook Form leverages React hooks to provide a performant and flexible way to handle forms. It offers features like validation, easy integration with UI libraries, and minimal re-renders.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Yup</h3>
      <p class="text-base md:text-lg mb-6">
        Yup is a JavaScript schema builder for value parsing and validation. It is commonly used with Formik to define complex validation rules in a declarative manner.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example with Formik and Yup:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';
import &#123; Formik, Form, Field, ErrorMessage &#125; from 'formik';
import * as Yup from 'yup';

function SignupForm() &#123;
  const validationSchema = Yup.object(&#123;
    username: Yup.string()
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  &#125;);

  const handleSubmit = (values) =&gt; &#123;
    alert(JSON.stringify(values, null, 2));
  &#125;;

  return (
    &lt;Formik
      initialValues=&#123; &#123; username: '', email: '', password: '' &#125; &#125;
      validationSchema=&#123;validationSchema&#125;
      onSubmit=&#123;handleSubmit&#125;
    &#62;
      &lt;Form&gt;
        &lt;label&gt;
          Username:
          &lt;Field name="username" type="text" className="border p-2 rounded-md" /&gt;
        &lt;/label&gt;
        &lt;ErrorMessage name="username" component="div" className="text-red-500" /&gt;

        &lt;label&gt;
          Email:
          &lt;Field name="email" type="email" className="border p-2 rounded-md" /&gt;
        &lt;/label&gt;
        &lt;ErrorMessage name="email" component="div" className="text-red-500" /&gt;

        &lt;label&gt;
          Password:
          &lt;Field name="password" type="password" className="border p-2 rounded-md" /&gt;
        &lt;/label&gt;
        &lt;ErrorMessage name="password" component="div" className="text-red-500" /&gt;

        &lt;button type="submit" className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-md"&gt;
          Submit
        &lt;/button&gt;
      &lt;/Form&gt;
    &lt;/Formik&gt;
  );
&#125;;

export default SignupForm;
        </code>
      </pre>

      <!-- Displaying Validation Errors -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Displaying Validation Errors</h2>
      <p class="text-base md:text-lg mb-4">
        Providing clear and accessible error messages helps users understand and correct their input mistakes.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Inline Error Messages</h3>
      <p class="text-base md:text-lg mb-6">
        Display error messages directly below the relevant input fields to provide immediate feedback.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Form-Level Error Messages</h3>
      <p class="text-base md:text-lg mb-6">
        For form-wide errors, display messages at the top or bottom of the form to inform users of general issues.
      </p>

      <!-- Managing Multiple Form Inputs -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Managing Multiple Form Inputs</h2>
      <p class="text-base md:text-lg mb-4">
        Handling multiple inputs can be efficiently managed using a single state object or individual state variables for each input.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using a Single State Object</h3>
      <p class="text-base md:text-lg mb-6">
        Consolidate form inputs into a single state object to simplify state management and handle changes more effectively.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, &#123; useState &#125; from 'react';

function MultiInputForm() &#123;
  const [form, setForm] = useState(&#123; firstName: '', lastName: '', email: '' &#125;);

  const handleChange = (e) =&gt; &#123;
    const &#123; name, value &#125; = e.target;
    setForm(&#123;
      ...form,
      [name]: value
    &#125;);
  &#125;;

  const handleSubmit = (e) =&gt; &#123;
    e.preventDefault();
    console.log(form);
  &#125;;

  return (
    &lt;form onSubmit=&#123;handleSubmit&#125;&gt;
      &lt;label&gt;
        First Name:
        &lt;input
          type="text"
          name="firstName"
          value=&#123;form.firstName&#125;
          onChange=&#123;handleChange&#125;
          className="border p-2 rounded-md"
        /&gt;
      &lt;/label&gt;

      &lt;label&gt;
        Last Name:
        &lt;input
          type="text"
          name="lastName"
          value=&#123;form.lastName&#125;
          onChange=&#123;handleChange&#125;
          className="border p-2 rounded-md"
        /&gt;
      &lt;/label&gt;

      &lt;label&gt;
        Email:
        &lt;input
          type="email"
          name="email"
          value=&#123;form.email&#125;
          onChange=&#123;handleChange&#125;
          className="border p-2 rounded-md"
        /&gt;
      &lt;/label&gt;

      &lt;button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"&gt;
        Register
      &lt;/button&gt;
    &lt;/form&gt;
  );
&#125;;

export default MultiInputForm;
        </code>
      </pre>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using Custom Hooks for Forms</h3>
      <p class="text-base md:text-lg mb-6">
        Custom hooks can abstract form logic, making your components cleaner and more reusable.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
// useForm.js
import &#123; useState &#125; from 'react';

function useForm(initialValues) &#123;
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) =&gt; &#123;
    const &#123; name, value &#125; = e.target;
    setValues(&#123;
      ...values,
      [name]: value
    &#125;);
  &#125;;

  return [values, handleChange];
&#125;;

export default useForm;

// FormComponent.jsx
import React from 'react';
import useForm from './useForm';

function FormComponent() &#123;
  const [form, handleChange] = useForm(&#123; username: '', email: '' &#125;);

  const handleSubmit = (e) =&gt; &#123;
    e.preventDefault();
    console.log(form);
  &#125;;

  return (
    &lt;form onSubmit=&#123;handleSubmit&#125;&gt;
      &lt;label&gt;
        Username:
        &lt;input
          type="text"
          name="username"
          value=&#123;form.username&#125;
          onChange=&#123;handleChange&#125;
          className="border p-2 rounded-md"
        /&gt;
      &lt;/label&gt;

      &lt;label&gt;
        Email:
        &lt;input
          type="email"
          name="email"
          value=&#123;form.email&#125;
          onChange=&#123;handleChange&#125;
          className="border p-2 rounded-md"
        /&gt;
      &lt;/label&gt;

      &lt;button type="submit" className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md"&gt;
        Submit
      &lt;/button&gt;
    &lt;/form&gt;
  );
&#125;;

export default FormComponent;
        </code>
      </pre>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Best Practices</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Use controlled components for better state management and validation.</li>
        <li>Keep form logic separate from UI components, possibly using custom hooks.</li>
        <li>Validate user input both on the client side and server side.</li>
        <li>Provide clear and accessible error messages.</li>
        <li>Optimize performance by minimizing unnecessary re-renders.</li>
      </ul>

      <!-- Examples of Forms in React -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Examples of Forms in React</h2>
      <p class="text-base md:text-lg mb-4">
        Practical examples can help solidify your understanding of form handling and validation in React. Here are a few common scenarios:
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Login Form</h3>
      <p class="text-base md:text-lg mb-6">
        A simple login form with controlled inputs for username and password, including validation to ensure fields are not empty.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Signup Form</h3>
      <p class="text-base md:text-lg mb-6">
        A more complex signup form that includes multiple inputs, validation for email format and password strength, and error handling.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Contact Form</h3>
      <p class="text-base md:text-lg mb-6">
        A contact form that allows users to send messages, with fields for name, email, subject, and message, along with validation to ensure all fields are properly filled out.
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Handling form validation in React is essential for creating interactive and user-friendly applications. By mastering controlled and uncontrolled components, implementing various validation techniques, leveraging validation libraries, and following best practices, you can build robust forms that enhance the overall user experience.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next module, we'll explore state management in React, including hooks like <code>useState</code> and <code>useReducer</code>, as well as integrating state management libraries to efficiently manage complex application states.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormValidationInReact',
  data() {
    return {
      // Any additional state or data properties can be added here
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
