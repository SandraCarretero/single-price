import style from './text.module.css'
const Text =({children, color, type})=>{
    return <p className={`${style.text} ${style[color]} ${style[type]}`}>{children}</p>
}
export default Text