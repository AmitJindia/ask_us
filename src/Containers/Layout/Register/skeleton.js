export const form = [
    {
        id: "text",
        elementType:"text",
        label: "First Name",
        inputName:"firstName",
        value: "",
        occupency: { xs: 12, md: 12 },
        validation: {
            required: true,
            valid: false,
            touched: false
        }
    },
    {
        id: "text",
        elementType:"text",
        label: "Last Name",
        inputName:"lastName",
        value: "",
        occupency: { xs: 12, md: 12 },
        validation: {
            required: true,
            valid: false,
            touched: false
        }
    },
    {
        id: "text",
        elementType:"text",
        label: "Phone Number",
        inputName:"phoneNumber",
        value: "",
        occupency: { xs: 12, md: 12 },
        validation: {
            required: true,
            valid: false,
            touched: false,
            phoneNumber:true
        }
    },
    {
        id: "text",
        elementType:"text",
        label: "Email",
        inputName:"email",
        value: "",
        occupency: { xs: 12, md: 12 },
        validation: {
            required: true,
            valid: false,
            touched: false,
            email:true
        }
    },
    {
        id: "password",
        elementType:"text",
        label: "Password",
        inputName:"password",
        value: "",
        occupency: { xs: 12, md: 12 },
        validation: {
            required: true,
            valid: false,
            touched: false,
            password:true
        }
    },
    {
        id: "password",
        elementType:"text",
        label: "Confirm Password",
        inputName:"confirmPassword",
        value: "",
        occupency: { xs: 12, md: 12 },
        validation: {
            required: true,
            valid: false,
            touched: false,
            confirmPassword:true
        }
    }
]

export const buttonData =
{
    variant: "contained",
    label: "Register"

}
export const buttonData1 =
{
    variant: "notContained",
    label: "Cancel"
}


