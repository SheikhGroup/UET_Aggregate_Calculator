document.getElementById("aggre").style.display = "none";
document.getElementById("go").style.display = "none";
document.getElementById("calculate").onclick = function() {
    calculateAggregate();
};
document.getElementById("relod").onclick = function() {
    trynew();
};

function calculateAggregate() {
    var marks0 = document.getElementById("marks0").value;
    var marks1 = document.getElementById("marks1").value;
    var marks2 = document.getElementById("marks2").value;
    if (marks1 === "" || marks2 == 0) {
        window.alert("Please Enter valid values");
        return;
    }
    if (marks1 <= 0 || marks2 === "") {
        document.getElementById("go").style.display = "none";
    } else {
        document.getElementById("go").style.display = "block";
    }
    var total = (marks0 * 25) / 1100 + (marks2 * 30) / 400 + (marks1 * 45) / 1100;
    total = total.toFixed(4);
    document.getElementById("aggre").style.display = "block";
    document.getElementById("go").innerHTML = total;

}

function trynew() {
    location.reload();
}