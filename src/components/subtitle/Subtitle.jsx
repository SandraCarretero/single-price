import style from './subtitle.module.css'

const Subtitle =({children, color})=>{
  return  <h2 className={`${style.subtittle} ${style[color]}`}>{children}</h2>
}
export default Subtitle