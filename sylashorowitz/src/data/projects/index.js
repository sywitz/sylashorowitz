// Import all individual project files
import pultrusionMachine from './pultrusion-machine';
import arcticRov from './arctic-rov';
import reVise from './re-vise';
import marinaSolarSupports from './marina-solar-supports';
import renaissanceCastle from './renaissance-castle';
import liberiaRecycledWasteBins from './liberia-recycled-waste-bins';
import mechanicalRabbit from './mechanical-rabbit';
import solarPanelDeploymentSystem from './solar-panel-deployment-system';

// Export as a single object with project IDs as keys
export const projectData = {
  'pultrusion-machine': pultrusionMachine,
  'arctic-rov': arcticRov,
  're-vise': reVise,
  'marina-solar-supports': marinaSolarSupports,
  'renaissance-castle': renaissanceCastle,
  'liberia-recycled-waste-bins': liberiaRecycledWasteBins,
  'mechanical-rabbit': mechanicalRabbit,
  'solar-panel-deployment-system': solarPanelDeploymentSystem
};

export default projectData;

