// <!-- Hey! element inspector... This Site Design and Developed By Vishwa Udugama -->


function love(){
    var name01= document.getElementById("yourName").value;
    var name02= document.getElementById("yourPartnerName").value;
    if (name01 <= 2){
        alert("Please Enter More than 2 Characters.π");
    }
    if (name02 <= 2){
        alert("Please Enter More than 2 Characters.π");

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
            document.getElementById("quote").innerHTML= " Aint no love lost cos there was never none there. π€ ";
        
    } else if (percentageValue <=50){
            document.getElementById("quote").innerHTML= "Searching for love, if itβs important to u you will find away.π₯°";
        
    }
    else if (percentageValue <= 70){
            document.getElementById("quote").innerHTML= " One of the best couples ever. π";
            
    }
    else if (percentageValue > 70 ){
            document.getElementById("quote").innerHTML= " π This pair π is made in heaven β€οΈ";
           
    }       
    else{
            document.getElementById("quote").innerHTML= "oops! Please Try Againπ€";
        
    }

    };
    




