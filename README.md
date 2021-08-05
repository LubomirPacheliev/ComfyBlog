Brief Description: 
Simple blog using Angular and AngularFire/Firebase

Installation:
You might need to run npm install with --legacy-peer-deps or --force inside the project directory since the 
angular CLI created the project with some deprecated versions of the dependencies and I couldn't manage to fix that.

Structure:
The whole app is divided between the auth and user directories
under the auth directory there's the auth module, the login and register components and auth services
under the user directory there's the user module, the components for all of the other pages and crud services
along with the router guards

Public Part:
The Posts Page,
The Posts Detail Page,
Login, Register

Private Part:
Create Page,
Edit and Delete on Details Page (if you're the author of the post),
Edit Page,
My Posts Page
