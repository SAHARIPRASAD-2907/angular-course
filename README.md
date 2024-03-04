# Angular course

> Angular is a Javascript Framework which allows you to create reactive single page applications (SPAs).

## Understanding Angular Versioning

- AngularJs (Angular 1 )
- Angular 2
- No Angular 3
- Angular 10,11,12 (New version every 6 month)
- Small incremental backward compatible changes.

## Course Structure

- Getting started
- The Basics
- Components and Data binding
- Directives
- Services and Dependency Injection
- Routing
- Observables
- Forms
- Pipes
- Http
- Authentication
- Optimizations and NgModules
- Deployment
- Animations and Testing

> Angular in the end is a JS framework, changing your DOM (`HTML`) at runtime!

## Creating custom components

```
For custom component: ng g c <component-name>
Full form component: ng generate component <component-name>
```

## Understanding Databinding

- TypeScript code (Business Logic)
- Output Data
  - String interpolation `({{daa}})`
  - Property Binding `([property]="data")`
- Template (HTML)
- React to (User) Events
  - Event Binding `((event)="expression")`
- Combining of Both: Two-way-Binding ([(ngModel)]="data")

## What are Directives?

- Directives are instructions in the DOM.
  `<p appTurnGreen>Receives a green background!</p>`

- Unlike structural directives, attributes don't add or remove elements. They only change the elements they are placed on.
