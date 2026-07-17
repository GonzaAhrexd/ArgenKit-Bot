interface Partido {
  fecha: string; // String con la fecha YYYY/MM/DD
  rival: string; // String con el rival
  categoria: string; // String con la categoría del partido (amistoso, eliminatoria, copa, etc.)
}

const proximosPartidos: Partido[] = [
  {
    fecha: "2026-07-19",
    rival: ":flag_es:",
    categoria: "Final de la Copa del Mundo 2026",
  },
];

export default proximosPartidos;
