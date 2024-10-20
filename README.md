
Using yarn classic as it’s LTS and is currently preferred by next js

Using next js as there’s no reason based on requirements to build the solution from scratch
You don’t need a team of people to maintain the core solution
Don't have to do documentation from scratch
Common features are delivered with each version. Only need to write features that are not available

Using design system to ensure that the UX on the SPA is cohesive, 
The version is defined at workspace level. Each team may use a different version so that in case of an update they can do the update at their own pace 

What’s missing:
Deployment
Linter



Authentication:
Auth components need to be encapsulated and owned by a team
at scale teams don’t want to worry about authentication therefore it should be enforced that only the latest version is always used


DOCS:
Custom layouts need to be added as nested layouts
app/page contains the homepage
Each other path is contained in the page file of a folder in app folder
Subpaths are created by creating a subfolder under those folders
In cases of a team providing universal tool like navbar, selected teams may opt out of using it on their pages. Such changes need to be approved by code owners (the onboarding team)

