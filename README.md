# LINKEDIN PROJECT WEEK

##    Extra FE - D1 LinkedIn Part 1

    You'll be implementing the frontend of a LinkedIn-like application.
    Today you are gonna focus on the "profile page".
    Make it as close as possible as LinkedIn
    
    https://www.linkedin.com/in/me/

    Create your profile HERE --> http://strive.school/linkedin-registration
    and receive back the token for API authentication

    API (provide authentication with your bearer token)

    ---------------------------------------------------------------------------

    PROFILES:

    - GET https://striveschool-api.herokuapp.com/api/profile/ 
    Retrieves list of profiles
    - GET https://striveschool-api.herokuapp.com/api/profile/me
    Retrieves my profile
    - GET https://striveschool-api.herokuapp.com/api/profile/{userId}
    Retrieves the profile with userId = {userId}
    - PUT https://striveschool-api.herokuapp.com/api/profile/
    Update current user profile details
    
    ---------------------------------------------------------------------------

    PROFILE Model:
    {
        "_id": "5d84937322b7b54d848eb41b", //server generated
        "name": "Diego",
        "surname": "Banovaz",
        "email": "diego@strive.school",
        "bio": "SW ENG",
        "title": "COO @ Strive School",
        "area": "Berlin",
        "image": ..., //server generated on upload
        "username": "admin", //server generated from Auth
        "createdAt": "2019-09-20T08:53:07.094Z", //server generated
        "updatedAt": "2019-09-20T09:00:46.977Z", //server generated
        "__v": 0 //server generated
    }