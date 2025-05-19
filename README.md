Blog Tasks - Important Blogs of TypeScript

## How does TypeScript help in improving code quality and project maintainability?

TypeScript is a strongly typed programming language that builds on JavaScript.Meaning TypeScript adds syntax on top of JavaScript allowing developers to add types.Basically it shares the same base syntax as JavaScript but adds something to it.It helps developers in improving code quality as well as project maintainability.How it does so are being discussed below.


-- Typing : In javascript we don't have to use type or no need to mention type.But in TypeScript we have to use type strictly.For this TypeScript can prevent incorrect usage before it becomes a runtime bug.


-- Code Completion & IntelliSense : In javascript we have Limited autocompletion and no validation on parameter types.On the contrary TypeScript autocompletes on function names, parameters, interfaces, enums etc.It helps us to write faster with fewer mistakes which 
   makes us more productive.


-- Scalability : TypeScript scales with our project enforcing structure and safety.On the otherside JavaScript works fine for small scripts but becomes messy and seems unorganized since the codebase grows.


-- Refactoring : We can confidently rename or restructure code knowing TypeScript will catch broken links.For example Updating a function signature.TypeScript will tell us where all calls are now invalid.


-- Easier understanding for New Developers : New devs can understand any specific project's code faster.As Types and interfaces make it clear what each function and object expects.Less need to dig into every file to guess what’s going on.In this way it helps developers to maintain projects.


-- Automatic Documentation : With strong typing much of our code becomes self-explanatory.No comments are needed as the types tell the contexts.This leads to cleaner, more maintainable code.It also helps us to maintain projects.



## Explain the difference between any, unknown, and never types in TypeScript.

There are three special types in TypeScript.These are any , unknown and never.They are used sometimes for special cases.The differences between them are being explained below.


-- Any : Any is a type that disables type checking and allows all types to be used in TypeScript.

   For example - let person : any;

   let person = 'Jamal' ; 

   let person = 10 ; // won't throw any error.As we can assign any type we want.


-- Unknown : Unknown is best used when we don't know the type of data being typed.To add a type later, we'll need to cast it.

   For example - let data : unknown = 'ABC'

   if (typeof data === "string") {
      console.log(`The given data is ${data}`); // we have to check its type as it is Unknown type.
     }


-- Never : Never always throws an error whenever it is defined.

   For exmaple -

   let logic : never = true; // Error: Type 'boolean' is not assignable to type 'never'.

   let x: never = 'XYZ'; // Error: Type 'String' is not assignable to type 'never'.




























