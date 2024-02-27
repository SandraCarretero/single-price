import style from './container.module.css';

const Container = ({ order, children }) => {
	return <div className={`${style.container} ${style[order]}`}>{children}</div>;
};

export default Container;
