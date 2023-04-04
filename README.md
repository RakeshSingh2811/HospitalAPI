
# HospitalAPI
Go to https://www.postman.com/downloads/ to download the Postman if already downloaded ignore this step


Download this code 

"npm init -y"  to download all the dependencies required

"npm start" to start the Server

Go to Postman give the post request to http://localhost:8000/doctor/register

Which requires the 'userName', 'password' and 'name' in the body
the username shouls be unique for every user

Then go to
http://localhost:8000/doctor/login

Which require the 'userName' and 'password'

It will generate a jwt token 

With the help of this Token we will perform the rest of the operation

Go to authentication tab of postman and select the authentication type to bearer token
and in the textarea enter the token received


Now we will register a patient
using http://localhost:8000/patient/register

With 'phone' and 'name' as the body,
here the phone number is unique,


It will give you user details we have to take id from it

after that we will create a report using
http://localhost:8000/patient/642c32fb4ef78faa3877a638/create_report

here we will pass status to body where status is enum we should give within: [Negative, Travelled-Quarantine, Symptoms-Quarantine,
Positive-Admit]

Now we have to get all the reports of the particular user
by giving get request to 
http://localhost:8000/patient/642c32fb4ef78faa3877a638/all_reports

To get the reports based on the status
http://localhost:8000/reports/Negative

In place of 'Negative' we can use any of then amongst: [Negative, Travelled-Quarantine, Symptoms-Quarantine,
Positive-Admit]

## Authors

- [@RakeshSingh2811](https://github.com/RakeshSingh2811)

