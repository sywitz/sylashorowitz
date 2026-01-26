/**
 * Project Components Index
 * 
 * Central export for all project components.
 * Each project has its own component file for maximum flexibility.
 */

import PultrusionMachine from './PultrusionMachine';
import ArcticRov from './ArcticRov';
import ReVise from './ReVise';
import MarinaSolarSupports from './MarinaSolarSupports';
import RenaissanceCastle from './RenaissanceCastle';
import LiberiaRecycledWasteBins from './LiberiaRecycledWasteBins';
import MechanicalRabbit from './MechanicalRabbit';
import SolarPanelDeploymentSystem from './SolarPanelDeploymentSystem';
import GuatemalaCookstove from './GuatemalaCookstove';
import ClimbingRobot from './ClimbingRobot';
import AcousticLevitationRobot from './AcousticLevitationRobot';
import TidalPump from './TidalPump';
import Fabrication from './Fabrication';

// Map of project IDs to their components
export const projectComponents = {
  'pultrusion-machine': PultrusionMachine,
  'arctic-rov': ArcticRov,
  're-vise': ReVise,
  'marina-solar-supports': MarinaSolarSupports,
  'renaissance-castle': RenaissanceCastle,
  'liberia-recycled-waste-bins': LiberiaRecycledWasteBins,
  'mechanical-rabbit': MechanicalRabbit,
  'solar-panel-deployment-system': SolarPanelDeploymentSystem,
  'guatemala-cookstove': GuatemalaCookstove,
  'climbing-robot': ClimbingRobot,
  'acoustic-levitation-robot': AcousticLevitationRobot,
  'tidal-pump': TidalPump,
  'fabrication': Fabrication,
};

export default projectComponents;

