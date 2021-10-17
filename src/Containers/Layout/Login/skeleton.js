export const formData = [
    {
        id: "text",
        elementType:"text",
        label: "Email",
        inputName:"Email",
        value: "",
        occupency: { xs: 12, md: 12 },
        validation: {
            required: true,
            valid: false,
            touched: false,
            email: true
        }
    },
    {
        id: "password",
        elementType:"password",
        label: "Password",
        inputName: "Password",
        value: "",
        occupency: { xs: 12, md: 12 },
        validation: {
            required: true,
            valid: false,
            touched: false,
            password:true
        }
    }
]

export const buttonData =
{
    variant: "contained",
    label: "Login"

}

export const buttonData1 =
{
    variant: "notContained",
    label: "Create Account"
}

