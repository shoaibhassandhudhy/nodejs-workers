Inside the repo you can find a backup folder. The folder has users dump. The `lastActivity` field contains the timestamp 
of the users last activity. Use this time to check for how long the user has been inactive. 

As a part of this test you have to create a Node Script (Javascript Functions) that does the following 2 things.

1. First function updates the last activity time of 10 random users. Take 10 random users' email address from the database and put them into an array passed to/declared inside this function. When this function runs, it updates the last activity time stamp of these users randomply in 3 different ways.

- 1-2 minutes ago. The time stamp you insert is 1-2 minutes ago from now
- 2-3 minutes ago. The time stamp you insert is 2-3 minutes ago from now
- 4-5 minutes ago. The time stamp you insert is 4-5 minutes ago from now

After this function runs, the 10 users selected by you (via emails), will have activity times as either 1-2 minutes ago, 2-3 minutes ago or 4-5 minutes ago, all randomly set. Make sure you do the randomization right, so that results are natural. You will have to develop a Mongo Query to be able to make these changes in the database.


2. This function depicts a worker. It can me a Javascript interval that runs every minute. What it does is that every time it runs, it scans the whole users table and classify the users into 3 different categories. 

- Those who have been inactive in the last 1-2 minutes are put inside an array, or any other datastructure you like. I just want them classified and stored somewhere in the code.
- Those who have been inactive in the last 2-3 minutes
- Those who have been inactive in the last 4-5 minutes

After being inactive for 5 minutes, the cycle restarts. So a user who has been inactive for 6-7 minutes will be classifed as a the same user who has been inactive for 1-2 minutes. Same goes for the users who have been inactive for 7-8 minutes, they will be classified as being inactive for 2-3 minutes. This pattern will go on and you have to create a pattern which determines as to which classification does the user belong. 

When you write the above function, please leep in mind that it will be iterating through the whole users table. If its a worker it will be doing it every minute (in our case) but probably every hour in a production environment. The db for now only has 4-5k users but in a real scenario this number is well above 500k. Make sure you use proper mongo aggregations and do a lot of filtering at the database level instead of bringing the load on the host language, in this case JavaScript. 

Also make sure that you keep both functions separate. Run the first function first, and just once so that you have generated the sample data, and then keep playing with the second function that runs every minute any way. 

Since it is not an API, you can pretty much write all of your code into one file, or ideally break it into multiple importable components. 

The data files are in the backup folder, make sure you back the data into mongo before you start the task.

Good Luck :) 

