import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';
import { login } from "../../actions/user";
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

const createUserSchema = z.object({
    name: z.string()
        .nonempty('Esse campo é obrigatório!'),
})

export default function Signup() {

    const { register, handleSubmit, formState: { errors }  } = useForm({
        resolver: zodResolver(createUserSchema),
    });

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const setName = (values) => {
        dispatch(login(values.name));
        navigate('/dashboard');
    };

    return (
        <div className="signup-modal-container">
            <form className="signup-modal" onSubmit={handleSubmit(setName)}>
                <h1>Welcome to CodeLeap network!</h1>
                <label>Please enter your username</label>
                <input type="text" placeholder="John Doe" className="content-input" {...register('name')} />
                { errors.name && <p className="error">{ errors.name.message }</p> }
                <button type="submit">ENTER</button>
            </form>
        </div>
    );
};