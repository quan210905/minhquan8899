function kiemtra(){
    const email = document.getElementById('email-field').value;
    const password = document.getElementById('password-field').value;
    
    if(email === '' || password === ''){
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }
    
    if(!isValidEmail(email)){
        alert("Email sai định dạng");
        document.getElementById('email-filed').value = '';
        document.getElementById('password-filed').value = '';
        return;
    }
    
    if(email !== 'admin@gmail.com'){
        alert("Sai tài khoản");
        document.getElementById('email-filed').value = '';
        document.getElementById('password-filed').value = '';
        return;
    }
    
    if(password !== '123'){
        alert("Sai mật khẩu");
        document.getElementById('email-filed').value = '';
        document.getElementById('password-filed').value = '';
        return;
    }
    
    alert("Đăng nhập thành công");
    window.location.href = "trangchu.html";
}

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
function thong_bao(){
    const email = prompt("Vui lòng nhập email của bạn:");
    if (email) {
        alert("Email bạn đã nhập là: " + email);
    } else {
        alert("Bạn chưa nhập email.");
    }
}