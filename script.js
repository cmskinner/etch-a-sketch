$(document).ready(function() {
    gridFunction();
    setColor("#white");
});

$("#white").click(function() {
    gridFunction();
    setColor("#white");
});

$("#color").click(function() {
    gridFunction();
    setColor("#color");
});

function gridFunction() {
    removeGrid();
    var gridSize = prompt("How many rows and columns?", "16");
    if (gridSize > 0 && gridSize < 101) {
        createGrid(gridSize);
    } else {
        alert("Please, enter number from 1 to 100");
    }
    setColor("#white");
}

function gridFunctionColor() {
    removeGrid();
    var gridSize = prompt("How many rows and columns?", "16");
    if (gridSize > 0 && gridSize < 101) {
        createGrid(gridSize);
    } else {
        alert("Please, enter number from 1 to 100");
    }
    setColor("#color");
}

function createGrid(max) {
    for (var i = 0; i < max; i++) {
        var row = document.getElementById("gridTable").insertRow(i);
        for (var j = 0; j < max; j++) {
            row.insertCell(j);
        }
    }
}

function removeGrid() {
    $("#gridTable").remove();
    $container = $("#container");
    $container.append("<table id='gridTable'></table>")
}

function randomizer() {
    var letters = "0123456789ABCDEF".split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setColor(option) {
    if (option == "#white") {
        $("#gridTable td").mouseenter(function() {
            $(this).css("background-color", "black");
        });
    } else if (option == "#color") {
        $("#gridTable td").mouseenter(function() {
            $(this).css("background-color", randomizer());
        });
    }
}