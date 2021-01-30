
document.getElementById("change").addEventListener("click",change);

function change(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.exchangeratesapi.io/latest");


    xhr.onload = function(){
        if(this.status==200){
            
            const response = JSON.parse(this.responseText)
            // console.log(response)
            const rate = response.rates.USD
            const amount = Number(document.getElementById("amount").value);
            document.getElementById("tl").value=amount*rate;
            // console.log(amount* rate)


        }
    }





    xhr.send();

}