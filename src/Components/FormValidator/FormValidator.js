function FormValidator(form, setForm) {
    const updatedInputData = form;
    form.map((items, index) => {
        const updatedInputDataElement = updatedInputData[index]
        if (updatedInputDataElement.validation &&
            updatedInputDataElement.validation.required) {
            if (updatedInputDataElement.value !== "") {
                updatedInputDataElement.validation.valid = true
                updatedInputDataElement.validation.touched = true
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