function validate(){
    
    let room= document.getElementById('room').value;
    let guests= document.getElementById('guests').value;
    let from= document.getElementById('from').value;
    let to= document.getElementById('to').value;
    
    if(room == null){
        alert('Please choose one of the rooms');
        return false;
    }
    if(guests <=0){
        alert('Please choose the right number of people');
        return false;
    }
    
    return true
}