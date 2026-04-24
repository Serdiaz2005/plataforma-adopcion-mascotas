export interface Mascota {
  id: number;
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
  tamano: string;
  estadoSalud: string;
  fotoUrl?: string;
  estado: 'DISPONIBLE' | 'EN_PROCESO' | 'ADOPTADA';
  createdAt: string;
  updatedAt: string;
}