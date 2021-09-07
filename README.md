# Angular Marketplace

To run the app:

- Make sure you have Angular 12
- Move to the client folder and run:
```ng serve```

The following image shows the project architecture and the dependencies between modules
![Angular Marketplace](https://user-images.githubusercontent.com/84856587/132372503-15a0e2a0-05e2-4781-8ae8-481b2be031e2.png)


# app.module
- Eager load before app starts.
- It bootstrap app.component
- Imports core.module

# app-routing.module
- Lazy load in /auth route the auth.module
- Lazy load in / route the layout.module

# auth.module
- Imports all login related components (login page, reset password, register, etc)

# auth-routing.module
- Define all auth related routes related to /auth parent route (/login, /register, /forgot, etc)

# layout.module
- Imports layout.component and all components related like: header.component, footer.component, etc
- Also imports others features modules commonly like user.module.

# layout-routing.module
- Lazy load features modules which no other module depends, like product.module, cart.module, etc

# core.module
- Imports components, guards, interceptors, services, constants, enums, models, utils and any other class that are considered as global.

# shared.module
- Imports component, directives and pipes.
- The shared module not depends on any other module.

# features modules
- It contains services only related to the module
- It could contians any class that is going to be refered only for this feature, that could be:
  - services
  - models
  - components
  - layout components related to it (subviews). A good example could be a modal.
