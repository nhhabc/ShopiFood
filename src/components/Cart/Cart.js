import {useContext} from 'react'
import CartItem from './CartItem'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../store/cart-context'

const Cart = props => {
    const cartCtx = useContext(CartContext)

    const totalAmount = `${cartCtx.totalAmount}VNĐ`
    const hasItem = cartCtx.items.length > 0;

    const cartItemRemove = id => {
        cartCtx.removeItem(id)
    }

    const cartItemAdd = item => {
        cartCtx.addItem({ ...item, amount: 1})
    }

    const cartItem = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map(item => <CartItem 
            key={item.id} 
            name={item.name}
            price={item.price}
            onRemove={cartItemRemove.bind(null, item.id)} 
            onAdd={cartItemAdd.bind(null, item)}/>)}
        </ul>
    )

    return (
        <Modal onClick={props.onHideCart}>
            {cartItem}
            <div className={classes.total}>
                <span>Tổng giá tiền</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Đóng</button>
                {hasItem && <button className={classes.button}>Đặt</button>}
            </div>
        </Modal>
    )
}

export default Cart