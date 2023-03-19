export const validationPayment = ({name, email, phone, address}) => {
    
    let error = {}

    if(!name) {
        error.name = "Hãy nhập tên của bạn"
    } 

    if(!email) {
        error.email = "Hãy nhập email của bạn"
    } else if(!/\S+@\S+\.\S+/.test(email)) {
        error.email = "Email của bạn không chính xác"
    }

    if(!phone) {
        error.phone ="Hãy nhập số điện thoại nhận hàng"
    } 

    if(!address) {
        error.address ="Hãy nhập địa chỉ nhận hàng"
    } 

    return error
}
