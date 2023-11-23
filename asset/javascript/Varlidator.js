
function Validation(options){

    function validate(inputElement,rules){
        var errorElement = inputElement.parentElement.querySelector('.form-mess')
        var errorMessage = rules.test(inputElement.value)

            if(errorMessage){
                errorElement.innerText = errorMessage 
                inputElement.parentElement.classList.add("invalid")
            }else{
                errorElement.innerText = ""
                inputElement.parentElement.classList.remove("invalid")
            }
    }

    var formElement = document.querySelector(options.form);

    if(formElement){
        options.rules.forEach(function(rules){
            var inputElement = formElement.querySelector(rules.selector);
            
            if(inputElement){
                inputElement.onblur = function(){
                    validate(inputElement,rules)
                }
            }
        }); 
    }
}

Validation.isRequired = function(selector){
    return{
        selector : selector,
        test : function(value){

            var regex =  /^[a-zA-Z0-9 ]*$/

            if(value == ""){
                return "Vui lòng nhập trường này"
            }

            if(value.length < 6){
                return "Tên tài khoản phải lớn hơn 6 ký tự"
            }

            return regex.test(value) ? undefined : "Không chứa ký tự đặc biệt"
        }
    }
}

Validation.isEmail = function(selector){

    return {
        selector : selector,
        test : function(value){
            if(value == ""){
                return "Trường này không được để trống"
            }

            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return  regex.test(value) ? undefined : "Email không hợp lệ"
        }
    }
}

Validation.isPassword = function(selector){
    return {
        selector : selector ,
        test : function(value){
            
            if(value == ""){
                return "Vui lòng nhập trường này"
            }

            if(value.length < 8){
                return "Mật Khẩu phải lớn hơn 8 ký tự"
            }

        }
    }
}



Validation.isRePassword = function(selector , getPassword){
    return {
        selector : selector,
        test : function(value){
            return value === getPassword() ? undefined : "Mật khẩu nhập lại không chính xác"
        }
    }
}


Validation.isQuantity = function(selector){
    return {
        selector : selector,
        test : function(value){
            if(value == ""){
                return "Trường này không được để trống"
            }

            if(value > 5){
                return " Số người ở phải không quá 5"
            }
        }
    }
}

Validation.isTypeRoom = function(selector){
    return {
        selector : selector,
        test : function(value){

            if(value == ""){
                return "Trường này không được để trống"
            }

            if(value != "A" && value != "B" && value != "C"){
                return "Có 3 loại phòng A , B và C"
            }
        }
    }
}

Validation.isNumber = function(selector){
    return {
        selector : selector,
        test : function(value){
            if(value == ""){
                return "Trường này không được để trống"
            }

            if(value > 5){
                return "Số ngày đặt phòng không quá 5"
            }
        }
    }
}





    