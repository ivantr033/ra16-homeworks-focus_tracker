import { useState, useRef, type ChangeEvent } from 'react';
import { withFocusTracker } from './hoc/withFocusTracker';
import Input from './components/Input';
import './App.css';

const InputWithFocusTracker = withFocusTracker(Input);

export default function App() {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="app-wrapper">
      <InputWithFocusTracker
        ref={inputRef}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        onFocusChange={setFocused}
        onFocus={() => console.log('Focused')}
        onBlur={() => console.log('Blurred')}
      />
      <p className="focus-status">Focused: {focused ? 'Yes' : 'No'}</p>
    </div>
  );
}
