function FormValidator(form, setForm) {
    const updatedInputData = form;
    form.map((items, index) => {
        const updatedInputDataElement = updatedInputData[index]
        if (updatedInputDataElement.validation &&
            updatedInputDataElement.validation.required) {
            if (updatedInputDataElement.value !== "") {
                if (updatedInputDataElement.validation.email) {
                    var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if(regexp.test(String(updatedInputDataElement.value).toLowerCase())){
                       
                        updatedInputDataElement.validation.valid = true
                        updatedInputDataElement.validation.touched = true
                    }
                    else{
                        updatedInputDataElement.validation.valid = false
                        updatedInputDataElement.validation.touched = true
                    }
                }
                else {
                    updatedInputDataElement.validation.valid = true
                    updatedInputDataElement.validation.touched = true
                }
            } else {
                updatedInputDataElement.validation.valid = false
                updatedInputDataElement.validation.touched = true
            }
        }
        updatedInputData[index] = updatedInputDataElement
        setForm(updatedInputData);
    })
    const checkValidity = (data) => {
        let validate = true
        data.map(data => {
            if (data?.validation?.valid === false) {
                validate = false
            }
        })
        return validate;
    }
    return {
        check: checkValidity(updatedInputData),
        data: updatedInputData
    };
}

export default FormValidator;