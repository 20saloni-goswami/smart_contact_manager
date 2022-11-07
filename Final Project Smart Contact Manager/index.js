// console.log("this is script file");

// const toggleSidebar = () => {
//     if($(".sidebar").is(":visible")){

//         $(".sidebar").css("display","none");
//         $(".content").css("margin-left","0%");
//     }
//     else 
//     {
//         $(".sidebar").css("display","block");
//         $(".content").css("margin-left","20%");
//     }
// }

function closeNav() {
    document.getElementsByClassName("sidebar")[0].style.display = "none";
    document.getElementsByClassName("content")[0].style.marginLeft = "1%";
    document.getElementsByClassName("hambergurgers")[0].style.display = "inline";
}

function openNav() {
    document.getElementsByClassName("sidebar")[0].style.display = "block";
    document.getElementsByClassName("content")[0].style.marginLeft = "0";
}


// var cross= 1;
// let selectId=document.getElementsByClassName("cross1");
// function closeNav(){
//     if(cross == 1){
//        selectId[0].classList.remove("sidebar");
//        selectId[0].classList.add("HiddenContent");
//         cross=0;
//     }
//     else
//     {
//         selectId[0].classList.remove("HiddenContent");
//        selectId[0].classList.add("sidebar");
//         cross=1;
//     }
// }


// // get data api 

fetch("http://localhost:8080/showContact").then((data)=>{
    // console.log(data);
    return data.json();
}).then((objectData)=>{
    // console.log(objectData[0].name);
    let tableData="";
    objectData.map((values)=>{
    tableData +=` <tr>
    <th scope="row">${values.id}</th>
    <td>${values.name}</td>
    <td>${values.emailid}</td>
    <td>${values.mobilenumber}</td>
    <td>${values.work}</td>
    <td><a href="updateContact.html" <i class="fa-solid pen fa-pen"></i></a> <a href="deleteContact.html" <i class="fa-sharp fa-solid fa-trash"></i></a> </td>
  </tr>`;
    })
    document.getElementById("table_body").innerHTML=tableData;
}).catch((err)=>{
    console.log(err);
})


// // profile API 

// fetch("http://localhost:8080/").then((data)=>{
//     // console.log(data);
//     return data.json();
// }).then((objectData)=>{
//     // console.log(objectData[0].name);
//     let tableData="";
//     objectData.map((values)=>{
//     tableData +=` <tr>
//     <td>${values.name}</td>
//     <td>${values.emailid}</td>
//     <td>${values.mobilenumber}</td>
   
//   </tr>`;
//     })
//     document.getElementById("table_body1").innerHTML=tableData;
// }).catch((err)=>{
//     console.log(err);
// })

// $('#submit').click(function() {
//     $.get('http://localhost:8080/signup', function(data) {
//       html += '<div><strong>Packet Id:</strong> '+data.packet_id+'</div>';
//       html += '<div><strong>Consignee Name:</strong> '+data.consignee_name+'</div>';
//       html += '<div><strong>Current Status:</strong> '+data.current_status.status+' at '+data.current_status.datetime+'</div>';
//       let statuses = data.statuses.map((e) => {
//         return e.status + ' at ' + e.datetime
//       });
//       html += '<div><strong>Statuses:</strong> <ul><li>'+statuses.join('</li><li>')+'</li></ul></div>';
  
//       response.html(html);
//     });
//   });

// For Sign up page
function submitForm() { 
    debugger
$.ajax({
    type: "POST",
    url: "http://localhost:8080/signup",
    data: $("#register").serialize(),
    async:false,
    success: function(e){
        debugger
        if(e.Message=='you are already signed up do login'){
            alert("you are already signed up do login")
            window.location.href='login.html';
        }
        else if(e.Message=='You are signed-up sucessfully'){
            alert("success")
            window.location.href='login.html';
        }
    }
 });
}

// For login page

function submitForm1() {
    debugger
$.ajax( {
   type: "POST",
   url: "http://localhost:8080/login",
   data: $("#register1").serialize(),
   async:false,
   success: function(e){
       debugger
       if(e.Message=='Password Correct login successfully'){
           alert("Password Correct login successfully")
           window.location.href='indexhome.html';
        }
        else if(e.Message=='Password Wrong Kindly Update your Password'){
            alert("Password Wrong Kindly Update your Password")
            window.location.href='forgetPassword.html';
        }
        else if (e.Message=='You are not registered Yet do register before login'){
            alert("You are not registered Yet do register before login")
            window.location.href='signup.html';
        }
    }
 });
}

// for forget password

function forgetPassword(){
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/forgetpasword",
        data: $("#register2").serialize(),
        async:false,
        success: function(e){
            debugger
            if(e.Message=='your password is correct something went wrong'){
                alert("your password is correct something went wrong")
                window.location.href='login.html';
            }
            else if(e.Message=='your password updated successfully do login'){
                alert("your password updated successfully do login")
                window.location.href='login.html';
            }
            else if(e.Message=='Something went wrong try again later'){
                alert("Something went wrong try again later")
                window.location.href='index.html';
            }
        }
     });
}

// add contact

function formSubmit2() { 
    debugger
$.ajax({
    type: "POST",
    url: "http://localhost:8080/addContact",
    data: $("#add").serialize(),
    async:false,
    success: function(e){
        debugger
        if(e.Message=='Your Contact is added successfully'){
            alert("Your Contact is added successfully")
            window.location.href='indexhome.html';
        }
        else if(e.Message=='Something went wrong, please try again'){
            alert("Something went wrong, please try again")
            window.location.href='indexhome.html';
        }
    }
 });
}

// update contact
function update() { 
    debugger
$.ajax({
    type: "POST",
    url: "http://localhost:8080/updateContact",
    data: $("#update").serialize(),
    async:false,
    success: function(e){
        debugger
        if(e.Message=='Your Contact is updated successfully'){
            alert("Your Contact is updated successfully")
            window.location.href='indexhome.html';
        }
        else if(e.Message=='Something went wrong, please try again'){
            alert("Something went wrong, please try again")
            window.location.href='indexhome.html';
        }
    }
 });
}

// delete contact

function deleteContact() { 
    debugger
$.ajax({
    type: "POST",
    url: "http://localhost:8080/deleteContact",
    data: $("#delete").serialize(),
    async:false,
    success: function(e){
        debugger
        if(e.Message=='Your Contact is deleted successfully'){
            alert("Your Contact is deleted successfully")
            window.location.href='indexhome.html';
        }
        else if(e.Message=='Something went wrong, please try again'){
            alert("Something went wrong, please try again")
            window.location.href='indexhome.html';
        }
    }
 });
}


// feedback 

function feedback() { 
    debugger
$.ajax({
    type: "POST",
    url: "http://localhost:8080/feedback",
    data: $("#feedback").serialize(),
    async:false,
    success: function(e){
        debugger
        if(e.Message=='your feedback is submitted successfully!! Thank you for your submission.'){
            alert("your feedback is submitted successfully!! Thank you for your submission.")
            window.location.href='indexhome.html';
        }
        else if(e.Message=='OOps, something went wrong please, try again'){
            alert("OOps, something went wrong please, try again")
            window.location.href='indexhome.html';
        }
    }
 });
}