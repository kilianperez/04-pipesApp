export enum Color{
    // estos numero equivalen  a 
    // 0    1      2     3
    rojo, negro, azul, verde
}

export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: Color;
}