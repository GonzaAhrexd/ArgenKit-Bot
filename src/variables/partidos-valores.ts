interface Partido {
  fecha: string; // String con la fecha YYYY/MM/DD
  rival: string; // String con el rival
  categoria: string; // String con la categoría del partido (amistoso, eliminatoria, copa, etc.)
}

const proximosPartidos: Partido[] = [
  {
    fecha: "2026-09-30",
    rival: ":flag_bo:",
    categoria: "Amistoso",
  },
  {
    fecha: "2026-10-03",
    rival: ":flag_bf:",
    categoria: "Amistoso",
  },
  {
    fecha: "2026-10-06",
    rival: ":flag_bj:",
    categoria: "Amistoso",
  },
];

export default proximosPartidos;
