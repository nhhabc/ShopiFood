import classes from './MealsSummary.module.css'

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Món ăn ngon đang chờ đợi bạn</h2>
            <p>
                Hãy chọn món ăn bạn yêu thích từ bảng lựa chọn của chúng tôi,và chúc ngon miệng
            </p>
            <p>
                Tất cả món ăn được nấu cùng với những nguyên liệu chất lượng
            </p>
        </section>
    )
}

export default MealsSummary;