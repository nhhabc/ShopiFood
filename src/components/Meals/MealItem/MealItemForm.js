import {useRef, useState} from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';

const MealItemForm = props => {
    const [isValidAmount, setIsValidAmount] = useState(true)

    const amountInputRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(amountInputRef);
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setIsValidAmount(false)
            return;
        }

        props.onAddToCart(enteredAmountNumber)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input ref={amountInputRef}
                label='Số lượng' input={{
                id: 'amount_' + props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue: '1'
            }}/>
            <button>+ Thêm</button>
            {!isValidAmount && <p>Hãy chọn đúng số lượng (1-5)</p>}
        </form>
    )
}

export default MealItemForm;