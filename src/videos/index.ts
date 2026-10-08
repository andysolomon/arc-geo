import type { ComponentType } from 'react';
import type { VideoId } from '../content/types';
import type { Scene } from './engine';
import { DistanceFormulaPiece, SCENES as DISTANCE_SCENES } from './DistanceFormula';
import { InscribedAnglesPiece, SCENES as INSCRIBED_SCENES } from './InscribedAngles';
import { PrismsPiece, SCENES as PRISM_SCENES } from './Prisms';

export const VIDEOS: Record<VideoId, { piece: ComponentType; scenes: Scene[] }> = {
  'inscribed-angles': { piece: InscribedAnglesPiece, scenes: INSCRIBED_SCENES },
  prisms: { piece: PrismsPiece, scenes: PRISM_SCENES },
  'distance-formula': { piece: DistanceFormulaPiece, scenes: DISTANCE_SCENES },
};
