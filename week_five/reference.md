# Library Database Wrangling

Most of your work this week will actually be on [Supabase](https://supabase.com/). Go ahead and sign up / login (I just link w/ GitHub), then create an organization to hold your Lyceum work, then create a library demo project.

As to what we're doing, we'll be designing a database to keep track of library books: specifically, which users have which books borrowed (and which have they previously borrowed). We'll also link this up with a backend to provide an API that will allow access to the data stored in Supabase.

## Supabase

These two tables and columns you will certainly have:
```
interface User {
    id: number;
    name: string;
}

interface Book {
    id: number;
    title: string;
}
```

Just FYI, I would make these through the table editor -- it's easier than writing the SQL for it (but it doesn't really matter, so it's up to you).

You'll need more than this: more tables and/or more columns. But how you choose to design this is up to you.

Once you have your table design, insert ~5 sample books, ~5 sample users, and ~10 sample book-user relations for testing purposes.

Also, don't forget to set RLS on all your tables (the default "Enable read access for all users" will do fine) -- your backend will be barred from accessing it otherwise.

## Backend

This should look pretty familiar now! It's basically the same as last week, but do note the new ```modules``` folder. This will hold any complex subsystems to be used in the route handlers. In this case here, we only have one subsystem (the Supabase wrapper/interface).

the ```index.ts``` file simply exports the lone instance of the database we'll use throughout the project, but the actual ```supabase.ts``` file has all of the logic (you'll need to complete this).

Global types have already been provided in ```types.ts```. The route handlers and their specific types are defined in their respective handler files (it'd be good to take a glance at the route handlers, since these handlers take input and we didn't do that last week). These will work in their current config, but feel free to change or add to them as you see need depending on your data design.

Finally, since I'd like to get y'all some more practice actually registering routes, ```routes.ts``` is also incomplete. I would like for you to keep the one GET route and one POST route designation though. Even though it's against the convention, you'll often see POST routes acting in place of GET routes when a lot of data needs to be passed in (e.g. a search filter) or the data is sensitive (e.g. security tokens). Also, we didn't work with it last week so it's useful to know the typing differences:

```
server.post<{
    Body: <INPUT TYPE>;
    Reply: <OUTPUT TYPE>;
}>("/something", async (req, res) => {
    const reply = await <ROUTE HANDLER>(req.body);
    ...
})

server.get<{
    Querystring: <INPUT TYPE>;
    Reply: <OUTPUT TYPE>;
}>("/something-else", async (req, res) => {
    const reply = await <ROUTE HANDLER>(req.query);
    ...
})
```

Oh, and one last thing, you need to copy in the environment variables for your Supabase project into a ```.env.development```, there should only be two variables you need this week:
```
SUPABASE_URL= 
SUPABASE_KEY=
```

## Testing

No frontend this week, so how can we test if this entire pipeline works??

I'm *so* glad you asked! 

We'll be using [Postman](https://www.postman.com/downloads/) (I would download the desktop version BTW).

Postman allows you to send test requests to your HTTP API (and other types too, but we won't get to the other protocols). It also makes it easy to add in your GET request query strings and POST request bodies. 

Then you just spin up your development server, send a request, and see if it works!

## What You Need To Do

Just to consolidate the scattered instructions, you'll

1. Make a Supabase account, create an organization and a project
2. Create a SQL relational design in Supabase to handle this library task
3. Add RLS policies to your tables 
4. Finish up the backend database module in ```modules/database/supabase.ts```
5. Finish up the route set up in ```routes.ts```
6. Download Postman (if you haven't already) and make an account
7. Test and debug your backend / database

Alright then -- enjoy!!