// The small white gear tab stuck to the left edge of the screen.
import { GearIcon } from './Icons.jsx';

export default function SettingsButton() {
  return (
    <button className="settings-tab" aria-label="Settings">
      <GearIcon />
    </button>
  );
}
