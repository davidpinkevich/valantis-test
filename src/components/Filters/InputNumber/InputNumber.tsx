import { memo, useRef } from "react";
import { NumberInput, Button } from "@mantine/core";
import { TypeInput } from "types";
import styles from "./styles.module.scss";

const InputNumber = memo(({ loading, setSearch }: TypeInput) => {
  const ref = useRef<HTMLInputElement>(null);
  const handlerButton = () => {
    if (ref.current?.value) {
      setSearch(Number(ref.current.value));
    }
  };
  return (
    <div className={styles.input}>
      <NumberInput
        placeholder="Введите цену"
        size="md"
        radius="md"
        disabled={loading}
        style={{ flexGrow: 1 }}
        ref={ref}
        min={0}
      />
      <Button
        size="md"
        radius="md"
        loading={loading}
        loaderProps={{ type: "dots" }}
        onClick={handlerButton}
        variant="filled"
      >
        Поиск
      </Button>
    </div>
  );
});

export { InputNumber };
