
function validate() {
    let room = document.getElementById('room').value;
    let guests = document.getElementById('guests').value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    
    if (room.trim() === "") {
        alert('Please choose one of the rooms');
        return false;
    }
    if (guests <= 0) {
        alert('Please choose the right number of people');
        return false;
    }
    const today = new Date().setHours(0, 0, 0, 0);
    const fromDate = new Date(from).setHours(0, 0, 0, 0);
    const toDate = new Date(to).setHours(0, 0, 0, 0);
    if (fromDate < today) {
        alert('Please choose Arrivel date');
        return false;
    }
    if (toDate <= fromDate) {
        alert('Please choose Leaving date');
        return false;
    }
    
    return true;
}

function saveData() {
    if (validate()) {
        let room = document.getElementById('room').value;
        let guests = document.getElementById('guests').value;
        let from = document.getElementById('from').value;
        let to = document.getElementById('to').value;

        let reservation;
        if (localStorage.getItem("reservation") == null) {
            reservation = [];
        } else {
            reservation = JSON.parse(localStorage.getItem("reservation"));
        }

        reservation.push({
            room: room,
            guests: guests,
            from: from,
            to: to
        });

        localStorage.setItem("reservation", JSON.stringify(reservation));

        document.getElementById("room").value = "";
        document.getElementById("guests").value = "";
        document.getElementById("from").value = "";
        document.getElementById("to").value = "";

        console.log("Saved Reservations: ", reservation);
    }
}

// function checkData() {
//     let storedData = localStorage.getItem("reservation");
//     if (storedData) {
//         let reservation = JSON.parse(storedData);
//         console.log("Saved Reservations: ", reservation);
//     } else {
//         console.log("No reservations found in local storage.");
//     }
// }

// checkData();


