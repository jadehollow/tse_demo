# TSE Demo App
This app is a demo React-based app for embedding ThoughtSpot elements using the Visual Embed SDK. It is designed to work with the Sample Retail Apparel dataset included with the ThoughtSpot Free Trial account.

It contains example code for:
- basic authentication
- hamburger menu style navigation
- embedding a search component
- embedding a liveboard component
- embedding the full ThoughtSpot app

If you want to see it in action without cloning the repo, check out the [Code Sandbox version](https://codesandbox.io/s/tse-demo-app-0xvep0). 

## How to use

### Sign up for Free Trial account
You will need a ThoughtSpot Free Trial account [here](https://www.thoughtspot.com/trial). 

### Clone Gitlab Repo
Clone the TSE Demo App repo.

`git clone git@github.com:javahollow/tse_demo.git`

Change directories to `tse_demo`

### Install dependencies

`npm install`

### Configure the app
Each embedded component requires a unique identify to tell the Visual Embed SDK which ThoughtSpot component to render. The best way to retrieve the specific id is via the Developer Playground. Depending on which component you are using (Search, Liveboard), the id may be called something slightly different. Refer to the code samples in this project to see the specific names, then, within the Playground, retrieve the required value. For example, when using a Search component, the Visual Embed SDK requires a dataSource id, which can be retrieved by changing the data source in your Developer Playground.

### Run the app

`npm start`

Once the app is running, you can navigate to http://localhost:8000 to check it out. Try navigating to one of the subpages via the hamburger menu. The first time you access a page with an embedded component you will be prompted to log into your Free Trial account. 
