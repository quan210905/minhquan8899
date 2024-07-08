function kiemtra(){
    const username = document.getElementById('username-field').value;
    const fullname = document.getElementById('fullname-field').value;
    const email = document.getElementById('email-field').value;
    const password = document.getElementById('password-field').value;
    const rePassword = document.getElementById('re-password-field').value;

    if(email == '' || password == '' || rePassword == '' || username == '' || fullname == ''){
        alert('Vui lòng nhập đầy đủ thông tin');
        return;
    }
    else if(!isValidEmail(email)){
        alert('Email không hợp lệ');
        return;
    }
    else if(password.length < 8){
        alert('Mật khẩu phải lớn hơn 8 ký tự');
        return;
    }
    else if(password!= rePassword){
        alert('Mật khẩu không khớp');
        return;
    }
    else{
        alert('Đăng ký thành công');
        window.location.href = 'login.html';
    }
}
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}