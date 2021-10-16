export const formData = [
    {
        id: "text",
        elementType:"text",
        label: "Remarks",
        inputName:"remarks",
        value: "",
        occupency: { xs: 12, md: 12 },
        validation: {
            required: true,
            valid: false,
            touched: false,
        }
    }
]

export const buttonApprove =
{
    variant: "contained",
    label: "Approve"

}
export const buttonDeny =
{
    variant: "notContained",
    label: "Reject"

}
export const buttonReAssign =
{
    variant: "notContained",
    label: "Re-Open"

}

