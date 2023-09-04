This project is a Hospital an API for the doctors of a Hospital which has been allocated by the
govt for testing and quarantine + well being of COVID-19 patients

Features:

- There can be 2 types of Users

1. Doctors

2. Patients

- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
 
1. Register the patient in the app (using phone number, if the patient already exists, just
return the patient info in the API)

2. After the checkup, create a Report
- Patient Report will have the following fields

1. Created by doctor

2. Status - Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine,
Positive-Admit]

3. Date
4. 
Routes:

- /doctors/register → with username and password
- /doctors/login → returns the JWT to be used
- /patients/register
- /patients/:id/create_report
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific status
