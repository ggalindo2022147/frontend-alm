import { useState } from 'react';
import { Input } from '../settings/Input';
import { useTask } from '../shared/hooks';
import '../components/css/addTask.css';

export const EdiarTask = () => {
    const { editTask, isLoading } = useTask();

    const [formState, setFormState] = useState({
        nombre: {
            value: '',
            isValid: false,
            showError: false
        },
        descripcion: {
            value: '',
            isValid: false,
            showError: false
        },
        fechaInicio: {
            value: '',
            isValid: false,
            showError: false
        },
        fechaCierre: {
            value: '',
            isValid: false,
            showError: false
        },
        creador: {
            value: '',
            isValid: false,
            showError: false
        }
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case 'nombre':
                isValid = value.length > 0;
                break;
            case 'descripcion':
                isValid = value.length > 0;
                break;
            case 'fechaInicio':
                isValid = value.length > 0;
                break;
            case 'fechaCierre':
                isValid = value.length > 0;
                break;
            case 'creador':
                isValid = value.length > 0;
                break;
            default:
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleEditTask = async (event) => {
        event.preventDefault();
        const response = await editTask({
            nombre: formState.nombre.value,
            descripcion: formState.descripcion.value,
            fechaInicio: formState.fechaInicio.value,
            fechaCierre: formState.fechaCierre.value,
            creador: formState.creador.value
        });
        // Recargar la página después de editar una tarea con éxito
        window.location.reload();
    }
    

    const isSubmitButtonDisabled = isLoading || !formState.nombre.isValid || !formState.descripcion.isValid || !formState.fechaInicio.isValid || !formState.fechaCierre.isValid || !formState.creador.isValid;

    return (
        <div className="add-task-container">
            <form className="add-task-form">
                <Input
                    field='nombre'
                    label='Nombre tarea'
                    value={formState.nombre.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    className="input-field"
                />
                <Input
                    field='descripcion'
                    label='Descripcion tarea'
                    value={formState.descripcion.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    className="input-field"
                />
                <Input
                    field='fechaInicio'
                    label='Fecha de inicio'
                    value={formState.fechaInicio.value}
                    onChangeHandler={handleInputValueChange}
                    type='date'
                    onBlurHandler={handleInputValidationOnBlur}
                    className="input-field"
                />
                <Input
                    field='fechaCierre'
                    label='Fecha de cierre'
                    value={formState.fechaCierre.value}
                    onChangeHandler={handleInputValueChange}
                    type='date'
                    onBlurHandler={handleInputValidationOnBlur}
                    className="input-field"
                />
                <Input
                    field='creador'
                    label='Nombre del creador'
                    value={formState.creador.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    className="input-field"
                />
                <br />
                <br />
                <div className="button-container">
                    <button className="add-task-bt" onClick={handleEditTask} disabled={isSubmitButtonDisabled}>
                        Agregar Tarea
                    </button>
                    <button className="cancel-task-bt" onClick={() => window.location.href = '/dashboard'}>
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}
