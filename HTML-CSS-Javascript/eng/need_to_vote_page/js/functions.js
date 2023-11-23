/* 
Functions definitions
    computeAge: Return the person age (int)
    needToParticipate: Return message (str) telling if the person needs to go vote in a given year
    tableYearElection: Modify (add new lines) the table with id table
    clearTable: Clear table with id table
Possible improvements: Consider the case when the input year is in the future and raise alert.
*/

// Define the table of election years in Brazil
let dataElectionsBrazil = [1989, 1994, 1998, 2002, 2006, 2010, 2014, 2018, 2022, 2026, 2030, 2034, 2038, 2042]

function computeAge(yearBorn, monthBorn, currentYear, currentMonth) {
    /* 
        Description: Return the person age (int)
        Input:
            yearBorn: int
            monthBorn: int
            currentYear: int
            currentMonth: int
        Output:
            age: int
    */

    // Definitions
    let age = currentYear - yearBorn;

    // Verify if date is before or after birthday
    if (currentMonth < monthBorn) {
        age--;                          // Subtract 1 if date before birthday
    }
    
    return age;
}

function needToParticipate(ageAtElection) {
    /*      
        Description: Return message (str) telling if the person needs to go vote in a given year    
        Input:
            ageAtElection: int
        Output
            message: str
    */

    // Condition tree
    if (ageAtElection < 16) {                                   // Age less than 16 -> Can not vote
        var message = 'Can not vote'

    } else if (ageAtElection >= 16 && ageAtElection < 18) {     // Greater/equal 16 and lesser than 18 -> Facultative vote
        var message = 'Facultative vote'

    } else if (ageAtElection >=18 && ageAtElection < 65) {      // Greater/equal 18 and lesser than 65 -> Need to vote
        var message = 'Need to vote'

    } else {                                                    // Greater/equal 65 -> Facultative vote
        var message = 'Facultative vote'

    }

    // Returns selected message
    return message
}

function tableYearElection(yearBorn, monthBorn){
    /*
        Description: Modify (add new lines) the table with id table
        Input:
            yearBorn: int
            monthBorn: int
        Output:
            Modify HTML page
    */
    
    // Iterate over the election year table (global variable)
    for (let i = 0; i < dataElectionsBrazil.length; i++) {
        
        // Get ref for table
        var tableBody = document.getElementById("table").getElementsByTagName('tbody')[0];

        // Compute age at the election year
        var ageAtElection = computeAge(yearBorn, monthBorn, dataElectionsBrazil[i], 10)

        // Get the message
        var messageNeedToParticipate = needToParticipate(ageAtElection)
        
        // Verify if the age is not negative or too large (over 150)
        if (ageAtElection <= 0) {              
            continue                          

        } else if (ageAtElection > 150) {      
            alert("Age not possible")           // Alert problem
            break                               // Break loop
        } else {
            
            var newRow = tableBody.insertRow();                 // Create new line in HTML table
            var cellYear = newRow.insertCell(0);                // Create new cell pos 0 (year)
            var cellAge = newRow.insertCell(1);                 // Create new cell pos 1 (age)
            var cellParticipate = newRow.insertCell(2);         // Create new cell pos 2 (message)

            cellYear.innerHTML = dataElectionsBrazil[i];        // Insert value in pos 0 (year)
            cellAge.innerHTML = ageAtElection;                  // Insert value in pos 1 (age)
            cellParticipate.innerHTML = messageNeedToParticipate;// Insert value in pos 2 (message)
        }
    }
}

function clearTable(){
    /*
        Description: Clear table with id table
        Output
            Modify HTML page
    */

    // Get ref for table
    var tableBody = document.getElementById("table").getElementsByTagName('tbody')[0];
    
    // Iterate over table removing rows
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
}
