import clsx from 'clsx'
import styles from './Button.module.scss'

function Button({ primary ,disable }) {

    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.disable] :disable
    })
    return (
        <div>
            <button className={classes}>
                Click me!
            </button>
        </div>

    )
}

export default Button