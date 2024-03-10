import { memo, useRef } from "react";
import { TextInput, Button } from "@mantine/core";
import { TypeInput } from "types";
import styles from "./styles.module.scss";

const InputText = memo(({ loading, setSearch }: TypeInput) => {
  const ref = useRef<HTMLInputElement>(null);
  const handlerButton = () => {
    if (ref.current?.value) {
      setSearch(ref.current.value);
    }
  };
  return (
    <div className={styles.input}>
      <TextInput
        placeholder="Введите наименование"
        size="md"
        radius="md"
        disabled={loading}
        ref={ref}
        style={{ flexGrow: 1 }}
      />
      <Button
        loading={loading}
        size="md"
        radius="md"
        loaderProps={{ type: "dots" }}
        onClick={handlerButton}
        variant="filled"
      >
        Поиск
      </Button>
    </div>
  );
});

export { InputText };
