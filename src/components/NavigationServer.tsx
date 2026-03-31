import { getAllContent } from '@/lib/content';
import Navigation from './Navigation';

export default function NavigationServer() {
  const chasses = getAllContent('chasses');
  const constellations = getAllContent('constellations');
  const evolutions = getAllContent('evolutions');
  const expeditions = getAllContent('expeditions');

  return (
    <Navigation
      chasses={chasses}
      constellations={constellations}
      evolutions={evolutions}
      expeditions={expeditions}
    />
  );
}
