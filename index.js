


function cleartext(){
    let password = document.getElementById('passwordtext');
    let id = document.getElementById('idtext');
    alert('id:' + id.value + ' password:' + password.value); 
    
    id.value = ''; password.value = '';
}
