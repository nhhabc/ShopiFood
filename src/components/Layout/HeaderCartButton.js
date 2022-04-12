import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHightlighed] = useState(false);
    const cartCtx = useContext(CartContext)
    
    const {items} = cartCtx
    const numberOfCartItem =    items.reduce((curNum, item) => {
        return curNum + item.amount;
    }, 0);


    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

    useEffect(() => {
        if (items.length === 0) {
            return
        }
        setBtnIsHightlighed(true);

        const timer = setTimeout(() => {
            setBtnIsHightlighed(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    },[items])

    return (
        <button className={btnClasses } onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Giỏ hàng</span>
            <span className={classes.badge}>
                {numberOfCartItem}
            </span>
        </button>
    )
}

export default HeaderCartButton;