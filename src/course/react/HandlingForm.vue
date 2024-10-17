<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-cyan-400 rounded-t-xl p-4">
      <img src="/icons/react.svg" alt="React Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-cyan-950">Handling Forms in React</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">

      <!-- Introduction to Forms in React -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Introduction to Forms in React</h2>
      <p class="text-base md:text-lg mb-6">
        Handling forms is a fundamental aspect of building interactive React applications. Forms allow users to input data, which can then be processed, validated, and submitted to servers or used within the application. Understanding how to effectively manage form state and handle user interactions is crucial for creating seamless user experiences.
      </p>

      <!-- Controlled Components -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Controlled Components</h2>
      <p class="text-base md:text-lg mb-4">
        In React, controlled components are form elements that derive their values from React state. This approach ensures that React has full control over the form data, enabling easier validation and manipulation.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Creating Controlled Inputs</h3>
      <p class="text-base md:text-lg mb-6">
        To create a controlled input, bind the input's value to a state variable and update the state on every change.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState } from 'react';

function ControlledForm() {
  const [name, setName] = useState('');

  const handleChange = (e) =&gt; {
    setName(e.target.value);
  };

  const handleSubmit = (e) =&gt; {
    e.preventDefault();
    alert(`Submitted name: ${name}`);
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;label&gt;
        Name:
        &lt;input type="text" value={name} onChange={handleChange} /&gt;
      &lt;/label&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}

export default ControlledForm;
        </code>
      </pre>

      <!-- Uncontrolled Components -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Uncontrolled Components</h2>
      <p class="text-base md:text-lg mb-4">
        Uncontrolled components manage their own state internally without relying on React state. They are useful for simple forms or when integrating with non-React libraries.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using Refs to Access Form Values</h3>
      <p class="text-base md:text-lg mb-6">
        Refs provide a way to access DOM nodes or React elements directly. They can be used to retrieve form values upon submission.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useRef } from 'react';

function UncontrolledForm() {
  const nameRef = useRef();

  const handleSubmit = (e) =&gt; {
    e.preventDefault();
    alert(`Submitted name: ${nameRef.current.value}`);
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;label&gt;
        Name:
        &lt;input type="text" ref={nameRef} /&gt;
      &lt;/label&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}

export default UncontrolledForm;
        </code>
      </pre>

      <!-- Handling Form Submission -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Handling Form Submission</h2>
      <p class="text-base md:text-lg mb-4">
        Handling form submissions involves capturing the form data and performing actions such as validation, sending data to a server, or updating the application state.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Preventing Default Behavior</h3>
      <p class="text-base md:text-lg mb-6">
        By default, form submissions reload the page. To handle submissions in React, use the <code>preventDefault()</code> method to stop this behavior.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Processing Form Data</h3>
      <p class="text-base md:text-lg mb-6">
        Once the default behavior is prevented, process the form data as needed, such as sending it to an API or updating the component's state.
      </p>

      <!-- Form Validation -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Form Validation</h2>
      <p class="text-base md:text-lg mb-4">
        Validating form inputs ensures that the data entered by users meets the required criteria before it is processed or submitted.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Client-Side Validation</h3>
      <p class="text-base md:text-lg mb-6">
        Implement validation logic within your components to provide immediate feedback to users. This can include checking for required fields, input formats, and value ranges.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState } from 'react';

function ValidatedForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) =&gt; {
    setEmail(e.target.value);
    if (!/\S+@\S+\.\S+/.test(e.target.value)) {
      setError('Email address is invalid');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e) =&gt; {
    e.preventDefault();
    if (error === '' && email !== '') {
      alert(`Submitted email: ${email}`);
    }
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;label&gt;
        Email:
        &lt;input type="email" value={email} onChange={handleChange} /&gt;
      &lt;/label&gt;
      {error &amp;&amp; &lt;p className="error"&gt;{error}&lt;/p&gt;}
      &lt;button type="submit" disabled={error !== '' || email === ''}&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}

export default ValidatedForm;
        </code>
      </pre>

      <!-- Managing Multiple Form Inputs -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Managing Multiple Form Inputs</h2>
      <p class="text-base md:text-lg mb-4">
        Handling multiple inputs in a form can be efficiently managed using a single state object or individual state variables for each input.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using a Single State Object</h3>
      <p class="text-base md:text-lg mb-6">
        By consolidating form inputs into a single state object, you can simplify state management and handle changes more effectively.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState } from 'react';

function MultiInputForm() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) =&gt; {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) =&gt; {
    e.preventDefault();
    console.log(form);
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;label&gt;
        Username:
        &lt;input type="text" name="username" value={form.username} onChange={handleChange} /&gt;
      &lt;/label&gt;
      &lt;label&gt;
        Email:
        &lt;input type="email" name="email" value={form.email} onChange={handleChange} /&gt;
      &lt;/label&gt;
      &lt;label&gt;
        Password:
        &lt;input type="password" name="password" value={form.password} onChange={handleChange} /&gt;
      &lt;/label&gt;
      &lt;button type="submit"&gt;Register&lt;/button&gt;
    &lt;/form&gt;
  );
}

export default MultiInputForm;
        </code>
      </pre>

      <!-- Using Custom Hooks for Forms -->
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
import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) =&gt; {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  return [values, handleChange];
}

export default useForm;

// FormComponent.jsx
import React from 'react';
import useForm from './useForm';

function FormComponent() {
  const [form, handleChange] = useForm({ firstName: '', lastName: '' });

  const handleSubmit = (e) =&gt; {
    e.preventDefault();
    console.log(form);
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;label&gt;
        First Name:
        &lt;input type="text" name="firstName" value={form.firstName} onChange={handleChange} /&gt;
      &lt;/label&gt;
      &lt;label&gt;
        Last Name:
        &lt;input type="text" name="lastName" value={form.lastName} onChange={handleChange} /&gt;
      &lt;/label&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}

export default FormComponent;
        </code>
      </pre>

      <!-- Libraries for Forms -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Libraries for Forms</h2>
      <p class="text-base md:text-lg mb-4">
        Several libraries simplify form handling in React by providing built-in validation, state management, and other useful features.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Formik</h3>
      <p class="text-base md:text-lg mb-6">
        Formik is a popular library that helps manage form state, validation, and submission with ease.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">React Hook Form</h3>
      <p class="text-base md:text-lg mb-6">
        React Hook Form leverages React hooks to provide a performant and flexible way to handle forms, offering features like validation and easy integration with UI libraries.
      </p>

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
        Practical examples can help solidify your understanding of form handling in React. Here are a few common scenarios:
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Login Form</h3>
      <p class="text-base md:text-lg mb-6">
        A simple login form with controlled inputs for username and password, including validation.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Signup Form</h3>
      <p class="text-base md:text-lg mb-6">
        A more complex signup form that includes multiple inputs, validation, and error handling.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Contact Form</h3>
      <p class="text-base md:text-lg mb-6">
        A contact form that allows users to send messages, with fields for name, email, subject, and message.
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Handling forms in React is essential for creating interactive and user-friendly applications. By mastering controlled and uncontrolled components, managing form state, implementing validation, and leveraging libraries, you can build robust forms that enhance the overall user experience.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next module, we'll delve into state management in React, exploring hooks like <code>useState</code> and <code>useReducer</code>, as well as integrating state management libraries to efficiently manage complex application states.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HandlingFormsInReact',
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

.active {
  font-weight: bold;
  color: #1D4ED8; /* Example active link color */
}

</style>
