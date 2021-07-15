// <!-- Hey! element inspector... This Site Design and Developed By Vishwa Udugama -->


function love(){
    var name01= document.getElementById("yourName").value;
    var name02= document.getElementById("yourPartnerName").value;
    if (name01 <= 2){
        alert("Please Enter More than 2 Characters.😝");
    }
    if (name02 <= 2){
        alert("Please Enter More than 2 Characters.😝");

    }
    

    else{
        var percentageValue= Math.floor(Math.random() * 101);
        document.getElementById("percentageDisplayid").innerHTML= name01 + " & " + name02 + " Love Percentage is "+ percentageValue +"% ";
        document.getElementById('percentageDisplayid').href = "/percentage.html";
        document.getElementById("resetButton").style.display="block";
        document.getElementById("submitButton").style.display="none";
        document.getElementById("yourName").style.display="none";
        document.getElementById("yourPartnerName").style.display="none";


    };

    
    
    if (percentageValue <= 30){
            document.getElementById("quote").innerHTML= " Aint no love lost cos there was never none there. 🤞 ";
        
    } else if (percentageValue <=50){
            document.getElementById("quote").innerHTML= "Searching for love, if it’s important to u you will find away.🥰";
        
    }
    else if (percentageValue <= 70){
            document.getElementById("quote").innerHTML= " One of the best couples ever. 😍";
            
    }
    else if (percentageValue > 70 ){
            document.getElementById("quote").innerHTML= " 😍 This pair 💑 is made in heaven ❤️";
           
    }       
    else{
            document.getElementById("quote").innerHTML= "oops! Please Try Again🤔";
        
    }

    };
    




