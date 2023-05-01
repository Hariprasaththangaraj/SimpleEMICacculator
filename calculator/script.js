let button = document.querySelector("button");
button.addEventListener("click", calcfunction);



function calcfunction() {
    let h2 = document.getElementById("h2").value;
    const value = h2.split(/(\+|\-|\*|\/)/);

    let oper1 = value[0];
    let oper2 = value[1];
    let oper3 = value[2];

    let ans = 0;

    switch (oper2) {

        case "+":
            ans = Number(oper1) + Number(oper3)
            //   console.log(Number(oper1) + Number(oper3));
            break;

        case "-":
            ans = Number(oper1) - Number(oper3)
            //   console.log(Number(oper1) - Number(oper3));
            break;

        case "/":
            ans = Number(oper1) / Number(oper3)
            //  console.log(Number(oper1) / Number(oper3));
            break;

        case "*":
            ans = Number(oper1) * Number(oper3)
            // console.log(Number(oper1) * Number(oper3));
            break;

    }

    console.log(ans);

    let res = document.createElement("div");
    res.id = "res";
    document.getElementById("h1").appendChild(res);

    document.getElementById("res").innerHTML = "YOUR ANSWER IS : " + ans;



}