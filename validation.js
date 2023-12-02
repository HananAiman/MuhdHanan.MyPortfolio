function send(){
    let fullname = document.forms["contactMe"]["fullName"].value;
    let email = document.forms["contactMe"]["Email"].value;
    let message = document.forms["contactMe"]["Message"].value;
    
    if (fullname === "")
    {
        alert("Full Name must be filled out");
        document.forms["contactMe"]["fullName"].select();
        document.forms["contactMe"]["fullName"].focus();
        return false;
    }

    if (email === "")
    {
        alert("Email must be filled out");
        document.forms["contactMe"]["Email"].select();
        document.forms["contactMe"]["Email"].focus();
        return false;
    }
    
    if (message === "")
    {
        alert("Message must be filled out");
        document.forms["contactMe"]["Message"].select();
        document.forms["contactMe"]["Message"].focus();
        return false;
    }
}