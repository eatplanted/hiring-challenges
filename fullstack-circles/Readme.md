# Hiring Challenge 

Hi! and welcome to one of planteds hiring challenges. 
The goal here is that you provide us with a work sample but also get to know a little bit about planted.

# Task
At Planted our Teams are called Circles. Each circle has a circle lead and circle members.
A Person is usually only in one circle but could in theory also be part of multiple (i.e. have multiple leaders).

We would now want to have a little database with baseball cards (Or Quartett Cards for us Europeans ;) ) for each employee. These cards should display basic info about the employee.
Additionally, we want to visualize the concept of circles and have one giant map of the whole company.

The minimal Basic version does thus have two screens:  one detail page about an employee (person card) and one visualization of the circles. (use a dynamic library such as D3 js or you could directly render and style an SVG from the backend)

once you got this running and are still motivated here are a few ideas to spice up this app:

- login: assume the current user can be read from a JWT within a header ( you can create a static one, or create a form that asks for this)
- Questionaire to crowdsource the know-how and collect connections about who is working with whom: generate links that can be sent out for one particular user with a questionnaire. e.g. "Hi Thomas, with which person outside of your circle did you work the most this week and on what projects". these graphs will then draw additional links to other employees once you select that person on the main map. answers to questionnaires should be stored separately so they can be reasoned about (i.e. a simple SQL query to get the latest version of an answer)
- make it possible to (regularly) rate an employee in a list of categories (can also be solved as above questionnaire) but show those metrics on the dashboard. the metrics should be planteds values ( see file values.txt )
- show a fancy effect if its someones birthday
- show fotos in the circles view and baseball card view ( assume there is an additional field in the csv with an url to a png file)
- Phone Book make it easy to use on mobile (without the visualization)
- your idea (if possible we will try to fill it with the real data so it answers all your questions about planted and your future colleagues)


# Approach
1. choose a suitable stack
2. create a suitable database schema or ORM models with migrations that work with PostgreSQL
3. write a quick import script that imports the sample data into the DB ( we will use this to import the real data at the end )
4. create a cool app
5. get hired :) 


# Evaluation Criteria

1. Basic functionality
2. Clean Setup and clean, documented code
3. Understandable Readme and easy way of building and running the app 
4. Uncluttered clean and functional design


# Bonus
1. automated builds
2. authentication/permissions system