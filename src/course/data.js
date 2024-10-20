export const courses = {
  Python: {
    title: 'Python',
    subcourses: [
      { title: 'Introduction to Python', component: () => import('@/course/python/IntroductionPython.vue') },
      { title: 'Get Started with Python', component: () => import('@/course/python/GetStartedPython.vue') },
      { title: 'Python Variables and Data Types', component: () => import('@/course/python/VariablesPython.vue') },
      { title: 'Python Operators and Comparison', component: () => import('@/course/python/OperatorPython.vue') },
      { title: 'Python Conditions', component: () => import('@/course/python/ConditionPython.vue') },
      { title: 'Python Loops', component: () => import('@/course/python/LoopsPython.vue') },
      { title: 'Python Strings', component: () => import('@/course/python/StringPython.vue') },
      { title: 'Python Lists', component: () => import('@/course/python/ListPython.vue') },
      { title: 'Python Dictionary', component: () => import('@/course/python/DictPython.vue') },
      { title: 'Python Sets', component: () => import('@/course/python/SetPython.vue') },
      { title: 'File Handling in Python', component: () => import('@/course/python/FileHandlingPython.vue') },
      { title: 'Python Functions', component: () => import('@/course/python/FunctionsPython.vue') },
      { title: 'Python Object-Oriented Programming', component: () => import('@/course/python/OOPPython.vue') },
      { title: 'Working with Modules in Python', component: () => import('@/course/python/ModulesPython.vue') },
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    subcourses: [
      { title: 'Introduction to JavaScript', component: () => import('@/course/javascript/IntroductionJavascript.vue') },
      { title: 'JavaScript Variables and Data Types', component: () => import('@/course/javascript/VariablesJavascript.vue') },
      { title: 'JavaScript Operators', component: () => import('@/course/javascript/OperatorsJavascript.vue') },
      { title: 'JavaScript Conditions', component: () => import('@/course/javascript/ConditionsJavascript.vue') },
      { title: 'JavaScript Loops', component: () => import('@/course/javascript/LoopsJavascript.vue') },
      { title: 'JavaScript Functions', component: () => import('@/course/javascript/FunctionsJavascript.vue') },
      { title: 'JavaScript Arrays', component: () => import('@/course/javascript/ArraysJavascript.vue') },
      { title: 'JavaScript Objects', component: () => import('@/course/javascript/ObjectsJavascript.vue') },
      { title: 'JavaScript DOM Manipulation', component: () => import('@/course/javascript/DOMManipulation.vue') },
      { title: 'JavaScript Events', component: () => import('@/course/javascript/EventsJavascript.vue') },
      { title: 'JavaScript ES6 and Beyond', component: () => import('@/course/javascript/ES6Javascript.vue') },
      { title: 'Async JavaScript and Promises', component: () => import('@/course/javascript/AsyncPromises.vue') },
    ]
  },
  React: {
    title: 'React',
    subcourses: [
      { title: 'Introduction to React', component: () => import('@/course/react/IntroductionReact.vue') },
      { title: 'Get Started with React', component: () => import('@/course/react/GetStartedReact.vue') },
      { title: 'JSX Basics', component: () => import('@/course/react/JSXBasic.vue') },
      { title: 'Components and Props', component: () => import('@/course/react/ComponentsProps.vue') },
      { title: 'Using React Hooks', component: () => import('@/course/react/UsingHooks.vue') },
      { title: 'useState and State Management', component: () => import('@/course/react/useStateHook.vue') },
      { title: 'useEffect Hook', component: () => import('@/course/react/useEffectHook.vue') },
      { title: 'React Router Basics', component: () => import('@/course/react/ReactRouterBasics.vue') },
      { title: 'Advanced Routing', component: () => import('@/course/react/AdvancedRouting.vue') },
      { title: 'Rendering Lists in React', component: () => import('@/course/react/RenderingList.vue') },
      { title: 'Using Keys in Lists', component: () => import('@/course/react/KeysInList.vue') },
      { title: 'Handling Forms in React', component: () => import('@/course/react/HandlingForm.vue') },
      { title: 'Form Validation', component: () => import('@/course/react/FormValidation.vue') },
      { title: 'Fetching Data from APIs', component: () => import('@/course/react/FetchingData.vue') },
      { title: 'Working with Axios', component: () => import('@/course/react/AxiosIntro.vue') },
      { title: 'Context API', component: () => import('@/course/react/ContextAPI.vue') },
      { title: 'Introduction to Redux', component: () => import('@/course/react/ReduxIntro.vue') },
      { title: 'Performance Optimization', component: () => import('@/course/react/PerformanceOptimization.vue') },
      { title: 'Deploying React Applications', component: () => import('@/course/react/DeployingReact.vue') },
    ]
  },
  TypeScript: {
    title: 'TypeScript',
    subcourses: [
      { title: 'Introduction to TypeScript', component: () => import('@/course/typescript/IntroductionTypescript.vue') },
      { title: 'TypeScript Basics', component: () => import('@/course/typescript/BasicsTypescript.vue') },
      { title: 'Working with Types', component: () => import('@/course/typescript/TypesTypescript.vue') },
      { title: 'TypeScript Classes and Interfaces', component: () => import('@/course/typescript/ClassesInterfacesTypescript.vue') },
      { title: 'TypeScript Generics', component: () => import('@/course/typescript/GenericsTypescript.vue') },
      { title: 'Advanced TypeScript Features', component: () => import('@/course/typescript/AdvancedTypescript.vue') },
      { title: 'TypeScript Interoperability', component: () => import('@/course/typescript/InteropTypescript.vue') },
    ]
  },
  Vue: {
    title: 'Vue',
    subcourses: [
      { title: 'Introduction to Vue.js', component: () => import('@/course/vue/IntroductionVue.vue') },
      { title: 'Get Started with Vue', component: () => import('@/course/vue/GetStartedVue.vue') },
      { title: 'Vue Components and Props', component: () => import('@/course/vue/ComponentsProps.vue') },
      { title: 'Vue Directives', component: () => import('@/course/vue/Directives.vue') },
      { title: 'Vue Event Handling', component: () => import('@/course/vue/EventHandling.vue') },
      { title: 'Vue Router Basics', component: () => import('@/course/vue/VueRouter.vue') },
      { title: 'Vuex for State Management', component: () => import('@/course/vue/VuexStateManagement.vue') },
      { title: 'Working with APIs in Vue', component: () => import('@/course/vue/ApiIntegration.vue') },
      { title: 'Deploying Vue Applications', component: () => import('@/course/vue/DeployingVue.vue') },
    ]
  },
  "C#": {
    title: 'C#',
    subcourses: [
      { title: 'Introduction to C#', component: () => import('@/course/csharp/IntroductionCSharp.vue') },
      { title: 'C# Basics: Variables and Data Types', component: () => import('@/course/csharp/BasicsCSharp.vue') },
      { title: 'C# Control Structures', component: () => import('@/course/csharp/ControlStructuresCSharp.vue') },
      { title: 'C# Methods', component: () => import('@/course/csharp/MethodsCSharp.vue') },
      { title: 'C# Object-Oriented Programming', component: () => import('@/course/csharp/OOPCSharp.vue') },
      { title: 'C# Collections', component: () => import('@/course/csharp/CollectionsCSharp.vue') },
      { title: 'LINQ in C#', component: () => import('@/course/csharp/LINQCSharp.vue') },
      { title: 'Exception Handling in C#', component: () => import('@/course/csharp/ExceptionHandlingCSharp.vue') },
      { title: 'Asynchronous Programming in C#', component: () => import('@/course/csharp/AsyncProgrammingCSharp.vue') },
      { title: 'Delegates and Events', component: () => import('@/course/csharp/DelegatesEventsCSharp.vue') },
      { title: 'C# Generics', component: () => import('@/course/csharp/GenericsCSharp.vue') },
    ]
  },
  "C++": {
    title: 'C++',
    subcourses: [
      { title: 'Introduction to C++', component: () => import('@/course/cplusplus/IntroductionCPlusPlus.vue') },
      { title: 'C++ Basics: Variables and Data Types', component: () => import('@/course/cplusplus/BasicsCPlusPlus.vue') },
      { title: 'C++ Control Structures', component: () => import('@/course/cplusplus/ControlStructuresCPlusPlus.vue') },
      { title: 'C++ Functions', component: () => import('@/course/cplusplus/FunctionsCPlusPlus.vue') },
      { title: 'Object-Oriented Programming in C++', component: () => import('@/course/cplusplus/OOPCPlusPlus.vue') },
      { title: 'C++ Standard Library', component: () => import('@/course/cplusplus/StandardLibraryCPlusPlus.vue') },
      { title: 'Pointers and References', component: () => import('@/course/cplusplus/PointersReferencesCPlusPlus.vue') },
      { title: 'C++ Templates', component: () => import('@/course/cplusplus/TemplatesCPlusPlus.vue') },
      { title: 'Memory Management in C++', component: () => import('@/course/cplusplus/MemoryManagementCPlusPlus.vue') },
      { title: 'Advanced C++ Features', component: () => import('@/course/cplusplus/AdvancedCPlusPlus.vue') },
      { title: 'C++ Concurrency', component: () => import('@/course/cplusplus/ConcurrencyCPlusPlus.vue') },
    ]
  },
  Go: {
    title: 'Go',
    subcourses: [
      { title: 'Introduction to Go', component: () => import('@/course/go/IntroductionGo.vue') },
      { title: 'Go Basics: Variables and Data Types', component: () => import('@/course/go/BasicsGo.vue') },
      { title: 'Go Control Structures', component: () => import('@/course/go/ControlStructuresGo.vue') },
      { title: 'Go Functions', component: () => import('@/course/go/FunctionsGo.vue') },
      { title: 'Go Structs and Interfaces', component: () => import('@/course/go/StructsInterfacesGo.vue') },
      { title: 'Go Concurrency', component: () => import('@/course/go/ConcurrencyGo.vue') },
      { title: 'Error Handling in Go', component: () => import('@/course/go/ErrorHandlingGo.vue') },
      { title: 'Working with Packages in Go', component: () => import('@/course/go/PackagesGo.vue') },
      { title: 'Building Web Applications with Go', component: () => import('@/course/go/WebAppsGo.vue') },
      { title: 'Testing in Go', component: () => import('@/course/go/TestingGo.vue') },
      { title: 'Deploying Go Applications', component: () => import('@/course/go/DeployingGo.vue') },
    ]
  },
  Angular: {
    title: 'Angular',
    subcourses: [
      { title: 'Introduction to Angular', component: () => import('@/course/angular/IntroductionAngular.vue') },
      { title: 'Get Started with Angular', component: () => import('@/course/angular/GetStartedAngular.vue') },
      { title: 'Angular Components and Modules', component: () => import('@/course/angular/ComponentsModulesAngular.vue') },
      { title: 'Angular Templates and Data Binding', component: () => import('@/course/angular/TemplatesDataBindingAngular.vue') },
      { title: 'Angular Services', component: () => import('@/course/angular/ServicesAngular.vue') },
      { title: 'Angular Routing', component: () => import('@/course/angular/RoutingAngular.vue') },
      { title: 'Angular Forms', component: () => import('@/course/angular/FormsAngular.vue') },
      { title: 'Dependency Injection in Angular', component: () => import('@/course/angular/DependencyInjectionAngular.vue') },
      { title: 'Angular HTTPClient', component: () => import('@/course/angular/HTTPClientAngular.vue') },
      { title: 'Angular State Management with NgRx', component: () => import('@/course/angular/StateManagementNgRx.vue') },
      { title: 'Angular Performance Optimization', component: () => import('@/course/angular/PerformanceOptimizationAngular.vue') },
      { title: 'Building Angular Applications', component: () => import('@/course/angular/DeployingAngular.vue') },
    ]
  },
  HTML: {
    title: 'HTML',
    subcourses: [
      { title: 'Introduction to HTML', component: () => import('@/course/html/IntroductionHTML.vue') },
      { title: 'HTML Elements and Structure', component: () => import('@/course/html/ElementsStructureHTML.vue') },
      { title: 'HTML Forms and Inputs', component: () => import('@/course/html/FormsInputsHTML.vue') },
      { title: 'HTML Media Elements', component: () => import('@/course/html/MediaElementsHTML.vue') },
      { title: 'Semantic HTML', component: () => import('@/course/html/SemanticHTML.vue') },
      { title: 'Accessibility in HTML', component: () => import('@/course/html/AccessibilityHTML.vue') },
      { title: 'HTML5 Features', component: () => import('@/course/html/HTML5Features.vue') },
      { title: 'SEO Best Practices with HTML', component: () => import('@/course/html/SEOBestPracticesHTML.vue') },
      { title: 'Advanced HTML Techniques', component: () => import('@/course/html/AdvancedHTML.vue') },
    ]
  },
  CSS: {
    title: 'CSS',
    subcourses: [
      { title: 'Introduction to CSS', component: () => import('@/course/css/IntroductionCSS.vue') },
      { title: 'CSS Selectors and Specificity', component: () => import('@/course/css/SelectorsSpecificityCSS.vue') },
      { title: 'CSS Box Model', component: () => import('@/course/css/BoxModelCSS.vue') },
      { title: 'CSS Layouts with Flexbox', component: () => import('@/course/css/FlexboxCSS.vue') },
      { title: 'CSS Grid Layout', component: () => import('@/course/css/GridLayoutCSS.vue') },
      { title: 'Responsive Design with CSS', component: () => import('@/course/css/ResponsiveDesignCSS.vue') },
      { title: 'CSS Animations and Transitions', component: () => import('@/course/css/AnimationsTransitionsCSS.vue') },
      { title: 'CSS Preprocessors: Sass and LESS', component: () => import('@/course/css/PreprocessorsCSS.vue') },
      { title: 'Advanced CSS Techniques', component: () => import('@/course/css/AdvancedCSS.vue') },
      { title: 'CSS Architecture: BEM and OOCSS', component: () => import('@/course/css/ArchitectureCSS.vue') },
      { title: 'CSS Performance Optimization', component: () => import('@/course/css/PerformanceOptimizationCSS.vue') },
    ]
  },
  NextJS: {
    title: 'Next.js',
    subcourses: [
      { title: 'Introduction to Next.js', component: () => import('@/course/nextjs/IntroductionNextJS.vue') },
      { title: 'Setting Up a Next.js Project', component: () => import('@/course/nextjs/SettingUpNextJS.vue') },
      { title: 'Pages and Routing in Next.js', component: () => import('@/course/nextjs/PagesRoutingNextJS.vue') },
      { title: 'Next.js Components and Props', component: () => import('@/course/nextjs/ComponentsPropsNextJS.vue') },
      { title: 'Next.js Data Fetching', component: () => import('@/course/nextjs/DataFetchingNextJS.vue') },
      { title: 'API Routes in Next.js', component: () => import('@/course/nextjs/APIRoutesNextJS.vue') },
      { title: 'Styling in Next.js', component: () => import('@/course/nextjs/StylingNextJS.vue') },
      { title: 'Deploying Next.js Applications', component: () => import('@/course/nextjs/DeployingNextJS.vue') },
      { title: 'Next.js Dynamic Routing', component: () => import('@/course/nextjs/DynamicRoutingNextJS.vue') },
      { title: 'Authentication in Next.js', component: () => import('@/course/nextjs/AuthenticationNextJS.vue') },
      { title: 'Next.js Performance Optimization', component: () => import('@/course/nextjs/PerformanceOptimizationNextJS.vue') },
      { title: 'Building Serverless Functions with Next.js', component: () => import('@/course/nextjs/ServerlessFunctionsNextJS.vue') },
    ]
  },
  Java: {
    title: 'Java',
    subcourses: [
      { title: 'Introduction to Java', component: () => import('@/course/java/IntroductionJava.vue') },
    ]
  },
  PHP: {
    title: 'PHP',
    subcourses: [
      { title: 'Introduction to PHP', component: () => import('@/course/php/IntroductionPHP.vue') },
    ]
  },
  Ruby: {
    title: 'Ruby',
    subcourses: [
      { title: 'Introduction to Ruby', component: () => import('@/course/ruby/IntroductionRuby.vue') },
    ]
  },
  TailwindCSS: {
    title: 'TailwindCSS',
    subcourses: [
      { title: 'Introduction to TailwindCSS', component: () => import('@/course/tailwind/IntroductionTailwind.vue') },
    ]
  },
  Bootstrap: {
    title: 'Bootstrap',
    subcourses: [
      { title: 'Introduction to Bootstrap', component: () => import('@/course/bootstrap/IntroductionBootstrap.vue') },
    ]
  },
};
