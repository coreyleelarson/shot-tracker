import { Button } from "../Button";
import styles from './styles.module.css';

interface ControlsProps {
  onMake: VoidFunction;
  onMiss: VoidFunction;
  onReset: VoidFunction;
}

export const Controls = (props: ControlsProps) => {
  const { onMake, onMiss, onReset } = props;

  return (
    <div className={styles.controls}>  
      <Button onClick={onMake}>MaKe</Button>
      <Button onClick={onMiss}>Miss</Button>
      <Button onClick={onReset}>Reset</Button>
    </div>
  );
}