export interface SolicitudAdopcion {
  id: number;
  mascotaId: number;
  solicitanteId: number;
  estado: 'PENDIENTE' | 'APROBADA' | 'RECHAZADA';
  fechaSolicitud: string;
  observaciones?: string;
  createdAt: string;
  updatedAt: string;
}