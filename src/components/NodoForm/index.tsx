import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { NodoT } from "../Nodo";

const validationSchema = z.object({
  descrizioneNodo: z
    .string()
    .min(1, { message: "la descrizione Nodo è obblgatoria" }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

type NodoFormT = {
  handleForm: (nodoCorrente: NodoT) => void;
};

const NodoForm: React.FunctionComponent<NodoFormT> = ({ handleForm }) => {
  const [countNodo, setCountNodo] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    console.log(data);
    setCountNodo(countNodo + 1);

    const nodo: NodoT = {
      id: countNodo.toString(),
      descrizione: data.descrizioneNodo,
    };

    handleForm({ ...nodo });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        id="descrizioneNodo"
        placeholder="es Milano"
        {...register("descrizioneNodo")}
      ></input>
      <button type="submit">Aggiungi Nodo</button>
      <small>{errors.descrizioneNodo?.message}</small>
    </form>
  );
};

export { NodoForm };
