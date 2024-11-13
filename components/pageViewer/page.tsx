import s from "./page.module.scss";

interface Props {
  isActive: boolean;
	idx: number;
  prev?: () => void;
  next?: () => void;
}

const PageViewer = ({ isActive, prev, next, idx }: Props) => {
  return (
    <div className={`${s._} ${isActive && s.active}`}>
      <h1>Anjay Keren coooo</h1>
			<span>ini page {idx}</span>
      <div>
        <button className={!prev ? s.disabled : ""} onClick={prev}>Prev</button>
        <button className={!next ? s.disabled : ""} onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default PageViewer;
