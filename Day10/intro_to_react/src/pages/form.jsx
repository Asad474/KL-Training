import FormComponent from "../components/FormComponent";

const FormPage = () => {
    const onSubmit = (data) => {
        console.log('D', data);
    }

    return (
        <FormComponent submitHandler={onSubmit} />
    )
}

export default FormPage;