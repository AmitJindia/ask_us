function FormValidator(form, setForm) {
    const updatedInputData = form;
    form.map((items, index) => {
        const updatedInputDataElement = updatedInputData[index]
        if (updatedInputDataElement.validation &&
            updatedInputDataElement.validation.required) {
            updatedInputDataElement.validation.valid = false
            updatedInputDataElement.validation.touched = true
            if (updatedInputDataElement.value.trim() !== "") {
                updatedInputDataElement.validation.valid = true
                updatedInputDataElement.validation.touched = true
                if (updatedInputDataElement.validation.email) {
                    updatedInputDataElement.validation.valid = false
                    updatedInputDataElement.validation.touched = true
                    var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (regexp.test(String(updatedInputDataElement.value).toLowerCase())) {

                        updatedInputDataElement.validation.valid = true
                        updatedInputDataElement.validation.touched = true
                    }
                    // else {
                    //     updatedInputDataElement.validation.valid = false
                    //     updatedInputDataElement.validation.touched = true
                    // }
                }
                if (updatedInputDataElement.validation.confirmPassword) {
                    updatedInputDataElement.validation.valid = false
                    updatedInputDataElement.validation.touched = true
                    if (updatedInputDataElement.value === form[index - 1].value) {
                        updatedInputDataElement.validation.valid = true
                        updatedInputDataElement.validation.touched = true
                    }
                    // else {
                    //     updatedInputDataElement.validation.valid = false
                    //     updatedInputDataElement.validation.touched = true
                    // }
                }
                if (updatedInputDataElement.validation.password) {
                    updatedInputDataElement.validation.valid = false
                    updatedInputDataElement.validation.touched = true
                    if (updatedInputDataElement?.value?.length > 8) {
                        updatedInputDataElement.validation.valid = true
                        updatedInputDataElement.validation.touched = true
                    }
                    // else {
                    //     updatedInputDataElement.validation.valid = false
                    //     updatedInputDataElement.validation.touched = true
                    // }
                }
                if (updatedInputDataElement.validation.phoneNumber) {
                    updatedInputDataElement.validation.valid = false
                    updatedInputDataElement.validation.touched = true
                    if (updatedInputDataElement?.value?.length === 10) {
                        updatedInputDataElement.validation.valid = true
                        updatedInputDataElement.validation.touched = true
                    }
                    // else {
                    //     updatedInputDataElement.validation.valid = false
                    //     updatedInputDataElement.validation.touched = true
                    // }
                }
            }
            // else {
            //     updatedInputDataElement.validation.valid = false
            //     updatedInputDataElement.validation.touched = true
            // }
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