export const formData = [
    {
        id: "textArea",
        elementType:"text",
        label: "Question",
        inputName:"question",
        value: "",
        occupency: { xs: 12, md: 12 },
        validation: {
            required: true,
            valid: false,
            touched: false,
        }
    },
    {
        id: "textArea",
        elementType:"text",
        label: "Instruction",
        inputName: "instruction",
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
        label: "SLA Time",
        inputName: "sla",
        value: "",
        occupency: { xs: 6, md: 6 },
        validation: {
            required: true,
            valid: false,
            touched: false
        }
    },{
        id: "text",
        elementType:"text",
        label: "Winning Amount",
        inputName: "prize",
        value: "",
        occupency: { xs: 6, md: 6 },
        validation: {
            required: true,
            valid: false,
            touched: false
        }
    }
]

export const buttonData =
{
    variant: "contained",
    label: "Submit"

}

export const buttonData1 =
{
    variant: "notContained",
    label: "Cancel"
}

