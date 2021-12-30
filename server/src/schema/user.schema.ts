import {object, string, ref} from "yup";

export const createUserSchema = object({
    body: object({
        name: string()
        .required("Name is Required"),
        password:string().min(6, "Password Should Be longer than Six Characters")
        .matches(/^[a-zA-Z0-9_.-]*$/, "Password Can Only Contain Latin Leters"),
        passqordConfirmation: string().oneOf(
            [ref("password"), null], "Password must Match"
        ),
        email:string()
        .email("Email Must Be a valid Email")
        .required("Email Is required")
    }),
});