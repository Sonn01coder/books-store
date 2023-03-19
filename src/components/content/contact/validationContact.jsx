export const validationContact = ({name, email, content}) => {
    
    let error = {}

    if(!name) {
        error.name = "Hãy nhập tên của bạn"
    }

    if(!email) {
        error.email = "Hãy nhập email của bạn"
    } else if(!/\S+@\S+\.\S+/.test(email)) {
        error.email = "Email của bạn không chính xác"
    }

    if(!content) {
        error.content ="Hãy nhập nội dung cần gửi "
    }

    return error
}

