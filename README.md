# Polling_System_Api
created by - vikramank deo singh

- Features
    - Create a question (you can add as many questions as you want)
    - Add options to a question
    - Add a vote to an option of question
    - Delete a question → (optional: A question can’t be deleted if one of it’s options has votes)
    - Delete an option → (optional: An option can’t be deleted if it has even one vote given to it)
    - View a question with it’s options and all the votes given to it



    - /questions/create (To create a question)
    - /questions/:id/options/create (To add options to a specific question)
    - /questions/:id/delete (To delete a question)
    - /options/:id/delete (To delete an option)
    - /options/:id/add_vote (To increment the count of votes)
    - /questions/:id (To view a question and it’s options)



To use this Api is your local machine you can download the zip file and extrat the file and then after run npm install to install node dependencies and  in config section you have to provide your data base link/url 
after that npm start comand is run in your terminal 
it is running the server on port 8003
and coonect to your msg is showed then you are good to go on postman 




1 -To create the question use the url "localhost:8003/api/v1/questions/create" (to create the question ) request must be POST
2 -To get question information use the url "localhost:8003/api/v1/questions/id" ( id = Your question id ) request must be GET
3 -To vote for the question use the url "localhost:8003/api/v1/options/id/add_vote"  to vote the quetion , id is your question option id , request must be GET.
4 -To create option for the question use the url "localhost:8003/api/v1/questions/id/option/create"  id is your question id , request must be POST.
5 -To delete the question use the url "localhost:8003/api/v1/questions/id/delete" (id is your question question id).
6 -To delete the option use the url "localhost:8003/api/v1/options/id/delete" (id is your option id).



















