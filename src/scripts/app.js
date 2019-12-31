//Application Form Section Tabs
var admissionTab = document.getElementById("admission-tab");
var contactTab = document.getElementById("contact-tab");
var personalTab = document.getElementById("personal-tab");
var educationBackgroundTab = document.getElementById("educational-background-tab");
var examinationDateTab = document.getElementById("examination-date-tab");
var submitTab = document.getElementById("submit-tab");

//Setting the Sections default display to none
admissionTab.style.display = "block";
contactTab.style.display = "none";
personalTab.style.display = "none";
educationBackgroundTab.style.display = "none";
examinationDateTab.style.display = "none";
submitTab.style.display = "none";

//Validation Messages
var admissionValidation = document.getElementById('admission-validation').style.display = "none";
var contactValidation = document.getElementById('contact-validation').style.display = "none";
var personalInfoValidation = document.getElementById('personal-info-validation').style.display = "none";
var educationalBackgroundValidation = document.getElementById('educational-background-validation').style.display = "none";
var examinationDateValidation = document.getElementById('examination-date-validation').style.display = "none";
var passwordMatch = document.getElementById('password-match').style.display = "none";


//Fucntion for Next Tab/Next Section (Admission Tab, Contact, Personal Info, Educational Background, Examination Date, Submit)
function tab(id1, id2, id3, id4, id5, id6) {
    //Admission Section Informations
    var semester = document.getElementsByName('semester')[0].value;
    var firstName = document.getElementsByName('first-name')[0].value;
    var lastName = document.getElementsByName('last-name')[0].value;
    var middleName = document.getElementsByName('middle-name')[0].value;
    var admissionFor = document.getElementsByName('admission-for')[0].value;
    var courseFirstChoice = document.getElementsByName('course-first-choice')[0].value;
    var courseSecondChoice = document.getElementsByName('course-second-choice')[0].value;
    var courseThirdChoice = document.getElementsByName('course-third-choice')[0].value;
    var campus = document.getElementsByName('campus')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var username = document.getElementsByName('username')[0].value;
    var password = document.getElementsByName('password')[0].value;
    var confirmPassword = document.getElementsByName('confirm-password')[0].value;

    //Contact Section Informations
    var region = document.getElementsByName('region')[0].value;
    var province = document.getElementsByName('province')[0].value;
    var municipality = document.getElementsByName('municipality')[0].value;
    var barangay = document.getElementsByName('barangay')[0].value;
    var houseNumber = document.getElementsByName('house-number')[0].value;
    var zipCode = document.getElementsByName('zip-code')[0].value;
    var completeAddress = document.getElementsByName('complete-address')[0].value;
    var telephoneNumber = document.getElementsByName('telephone-number')[0].value;
    var cellphoneNumber = document.getElementsByName('cellphone-number')[0].value;

    //Personal Info Section Informations
    var gender = document.getElementsByName('gender')[0].value;
    var birthdate = document.getElementsByName('birthdate')[0].value;
    var citizenship = document.getElementsByName('citizenship')[0].value;
    var civilStatus = document.getElementsByName('civil-status')[0].value;
    var religion = document.getElementsByName('religion')[0].value;
    var fathersName = document.getElementsByName('fathers-name')[0].value;
    var fathersOccupation = document.getElementsByName('fathers-occupation')[0].value;
    var fathersContactNumber = document.getElementsByName('fathers-contact-number')[0].value;
    var mothersName = document.getElementsByName('mothers-name')[0].value;
    var mothersOccupation = document.getElementsByName('mothers-occupation')[0].value;
    var mothersContactNumber = document.getElementsByName('mothers-contact-number')[0].value;
    var guardiansName = document.getElementsByName('guardians-name')[0].value;
    var guardiansContactNumber = document.getElementsByName('guardians-contact-number')[0].value;
    var disabilityCheck = document.getElementsByName('disability-check')[0].value;
    var disabilityCase = document.getElementsByName('disability-case')[0].value;

    //Educational Background Section Informations
    var lastSchool = document.getElementsByName('last-school')[0].value;
    var lastSchoolAddress = document.getElementsByName('last-school-address')[0].value;
    var typeOfSchool = document.getElementsByName('type-of-school')[0].value;
    var schoolCode = document.getElementsByName('school-code')[0].value;
    var shsStrand = document.getElementsByName('shs-strand')[0].value;
    var lrn = document.getElementsByName('lrn')[0].value;
    var gwa = document.getElementsByName('gwa')[0].value;
    var escNumber = document.getElementsByName('esc-number')[0].value;

    //Examination Date Section Informations
    var examinationDate = document.getElementsByName('examination-date')[0].value;
    var partOfDay = document.getElementsByName('partOfDay')[0].value;
    var time = document.getElementsByName('time')[0].value;
    var form138 = document.getElementsByName('form138')[0].value;
    var psa = document.getElementsByName('psa')[0].value;
    var ncae = document.getElementsByName('ncae')[0].value;
    var picture = document.getElementsByName('picture')[0].value;


    //Function When selecting Sections
    function sectionSelect() {
        //Displaying the Tab Section and Hide the other not active section
        document.getElementById(id1).style.display = "block";
        document.getElementById(id2).style.display = "none";
        document.getElementById(id3).style.display = "none";
        document.getElementById(id4).style.display = "none";
        document.getElementById(id5).style.display = "none";
        document.getElementById(id6).style.display = "none";
        //Changing the Tab Color if active
        document.getElementById(id1 + "s").classList.add("form-status--active");
        document.getElementById(id2 + "s").classList.remove("form-status--active");
        document.getElementById(id3 + "s").classList.remove("form-status--active");
        document.getElementById(id4 + "s").classList.remove("form-status--active");
        document.getElementById(id5 + "s").classList.remove("form-status--active");
        document.getElementById(id6 + "s").classList.remove("form-status--active");
    }


    //Validating Functions Conditions
    //Admission Section Conditions 
    function admissionValidation() {
        return (semester == "" || firstName == "" || lastName == "" || middleName == "" || admissionFor == "" || courseFirstChoice == "" || courseSecondChoice == "" || courseThirdChoice == "" || campus == "" || email == "" || username == "" || password == "" || confirmPassword == "")
    }
    //Contact Section Conditions 
    function contactValidation() {
        return (region == "" || province == "" || municipality == "" || barangay == "" || houseNumber == "" || zipCode == "" || telephoneNumber == "" || cellphoneNumber == "")
    }
    //Personal Info Section Conditions
    function personalInfoValidation() {
        return (gender == "" || birthdate == "" || citizenship == "" || civilStatus == "" || religion == "" || fathersName == "" || fathersOccupation == "" || fathersContactNumber == "" || mothersName == "" || mothersOccupation == "" || mothersContactNumber == "" || guardiansName == "" || guardiansContactNumber == "" || (disabilityCheck == "YES" && disabilityCase == ""))
    }
    //Educational Background Section Conditions
    function educationalBackgroundValidation() {
        return (lastSchool == "" || lastSchoolAddress == "" || typeOfSchool == "" || schoolCode == "" || shsStrand == "" || lrn == "" || gwa == "")
    }
    //Examination Date Section Conditions 
    function examinationDateValidation() {
        return (examinationDate == "" || partOfDay == "" || time == "")
    }


    //Validating Statements
    //Admission Section Validation
    if (admissionTab.style.display == "block") {
        if (password != confirmPassword) {
            passwordMatch = document.getElementById('password-match').style.display = "block";
        }
        if (admissionValidation() || (password != confirmPassword)) {
            if (password != confirmPassword && !(admissionValidation())) {
                passwordMatch = document.getElementById('password-match').style.display = "block";
                admissionValidation = document.getElementById('admission-validation').style.display = "none";
            } else {
                passwordMatch = document.getElementById('password-match').style.display = "none";
                admissionValidation = document.getElementById('admission-validation').style.display = "block";
            }

        } else {
            admissionValidation = document.getElementById('admission-validation').style.display = "none";
            passwordMatch = document.getElementById('password-match').style.display = "none";
            sectionSelect();
        }
        //Contact Section Validation
    } else if (contactTab.style.display == "block") {
        if (contactValidation()) {
            contactValidation = document.getElementById('contact-validation').style.display = "block";
            if (id1 == 'admission-tab') {
                sectionSelect();
            }
        } else {
            contactValidation = document.getElementById('contact-validation').style.display = "none";
            sectionSelect();
        }
        //Personal Info Section Validation
    } else if (personalTab.style.display == "block") {
        if (personalInfoValidation()) {
            personalInfoValidation = document.getElementById('personal-info-validation').style.display = "block";
            if (id1 == 'contact-tab') {
                sectionSelect();
            }
        } else {
            personalInfoValidation = document.getElementById('personal-info-validation').style.display = "none";
            sectionSelect();
        }
        //Educational Background Section Validation
    } else if (educationBackgroundTab.style.display == "block") {
        if (educationalBackgroundValidation()) {
            educationalBackgroundValidation = document.getElementById('educational-background-validation').style.display = "block";
            if (id1 == 'personal-tab') {
                sectionSelect();
            }
        } else {
            educationalBackgroundValidation = document.getElementById('educational-background-validation').style.display = "none";
            sectionSelect();
        }
        //Examination Date Section Validation 
    } else if (examinationDateTab.style.display == "block") {
        if (examinationDateValidation()) {
            examinationDateValidation = document.getElementById('examination-date-validation').style.display = "block";

        } else {
            examinationDateValidation = document.getElementById('examination-date-validation').style.display = "none";
            sectionSelect();
        }
    } else if (submitTab.style.display == "block") {
        sectionSelect();
    }

    //Submit Section Auto Completion
    document.getElementById("first-name-final").innerHTML = firstName;
    document.getElementById("last-name-final").innerHTML = lastName;
    document.getElementById("middle-name-final").innerHTML = middleName;
    document.getElementById("course-final").innerHTML = courseFirstChoice;
    document.getElementById("username-final").innerHTML = username;
    document.getElementById("email-final").innerHTML = email;
    document.getElementById("examination-date-final").innerHTML = examinationDate + " " + partOfDay + " " + time;
}


//Function for Auto completion of Full Address
function completeAddress() {
    var region = document.getElementsByName('region')[0].value;
    var barangay = document.getElementsByName('barangay')[0].value;
    var municipality = document.getElementsByName('municipality')[0].value;
    var province = document.getElementsByName('province')[0].value;
    var houseNumber = document.getElementsByName('house-number')[0].value;
    document.getElementsByName('complete-address')[0].value = houseNumber + ", " + barangay + ", " + municipality + ", " + province + ", " + region;
}