type Partido = {
    fecha: string, // String con la fecha YYYY/MM/DD
    rival: string // String con el rival
    categoria: string // String con la categoría del partido (amistoso, eliminatoria, copa, etc.)
}

const proximosPartidos: Partido[] = [
    {
        fecha: "2026-03-27", // 27 de marzo de 2026
        rival: ":flag_es:",
        categoria: "Finalissima"
    },
    {
        fecha: "2026-06-16", // 16 de junio de 2026
        rival: ":flag_dz:",
        categoria: "Mundial 2026"
    },
    {
        fecha: "2026-06-22", // 22 de junio de 2026
        rival: ":flag_at:",
        categoria: "Mundial 2026"
    },
     {
        fecha: "2026-06-27", // 27 de junio de 2026
        rival: ":flag_jo:",
        categoria: "Mundial 2026"
    }
]

export default proximosPartidos