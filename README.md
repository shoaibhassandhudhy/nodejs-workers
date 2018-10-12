1. Fork this branch
2. In this project you have to create a cron job for the notifications. The job runs every minute and send the notifications out
to all those users who have been inactive. 


2 minutes inactivity -> Time to use the app
3 minutes of inactivity -> We miss you
7 minutes of inactivity -> Its time to show you skills, please come back
14 minutes of inactivity -> Most of the people lose hope after the first week. Don't be one of them

After 14 minutes no notification is sent to the user. The workers wait for 7 more minutes before repeating the same cycle. 

So after 14+7 minutes the same cycle of 4 notifications will start repeatinf itself. 


Inside the repo you can find a backup folder. The folder has users dump. The `lastActivity` field contains the timestamp 
of the users last activity. Use this time to check for how long the user has been inactive. 

You don't have to to send an actual notification, rather just add the parametes to another table from where another worker
will fetch these values and send the notification out. You don't have to create the second worker. The important thing is how
you create the algo to find the users who have to be sent the notification out. 

Good Luck :) 

